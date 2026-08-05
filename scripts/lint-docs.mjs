#!/usr/bin/env node
/**
 * Documentation linter for the Vela docs.
 *
 * Enforces the rules in STYLE_GUIDE.md that the Docusaurus build cannot see.
 * The build already fails on broken links and anchors, so this covers the rest:
 * frontmatter, naming, house style, and the screenshot rules.
 *
 * Run locally with `npm run lint:docs`.
 * Draft pages are skipped, because they are excluded from production builds.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Normalise a path so Windows separators and drive-letter case never matter. */
const key = (p) => relative(ROOT, p).split(/[\\/]/).join("/").toLowerCase();
const DOCS = join(ROOT, "docs");
const SHOTS = join(ROOT, "img", "screenshots");

const PAGE_TYPES = ["tutorial", "how-to", "reference", "explanation", "troubleshooting"];

// Words the style guide bans. Each is matched as a whole word, case-insensitive.
const BANNED = [
  "simply", "simple", "easily", "easy", "just", "please", "currently",
  "comprehensive", "powerful", "seamless", "robust", "leverage", "utilise",
  "in order to", "note that", "and/or",
];

// US spellings the style guide replaces with UK ones.
const US_SPELLINGS = [
  "organiz", "analyz", "customiz", "recogniz", "optimiz", "prioritiz",
  "summariz", "categoriz", "utiliz", "behavior", "\\bcolor\\b", "\\bcenter\\b",
  "fulfill", "labeled", "canceled", "catalog", "dialog",
];

// Sentences where "will" is genuinely future rather than a present-tense slip.
// Describing something the reader has not done yet is not the same as
// describing product behaviour, which the house style puts in present tense.
const FUTURE_TENSE_OK = [
  "the people who will use Vela",
  "By the end you will have",
];

// Literal product strings that would otherwise trip a rule above.
// Every entry is a label that appears in the Vela UI exactly as written.
const UI_LITERALS = [
  "Medical License",
  "Simple Storage",
  "not part of the selected organization", // Vela's own error message
];

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
}

/** Strip code fences, inline code, and MDX comments so prose rules only see prose. */
function prose(text) {
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/`[^`\n]*`/g, "")
    .replace(/^---\n[\s\S]*?\n---/, "");
}

const files = walk(DOCS);
const live = [];
const referencedImages = new Set();

for (const file of files) {
  const rel = relative(ROOT, file).replace(/\\/g, "/");
  const raw = readFileSync(file, "utf8").split("\r\n").join("\n");
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);

  if (fm && /^draft:\s*true$/m.test(fm[1])) continue;
  live.push({ file, rel, raw });

  // --- Frontmatter -------------------------------------------------------
  if (!fm) {
    err(rel, "no frontmatter block");
    continue;
  }
  const title = fm[1].match(/^title:\s*(.+)$/m)?.[1].trim();
  const type = fm[1].match(/^type:\s*(.+)$/m)?.[1].trim();
  if (!title) err(rel, "frontmatter is missing `title`");
  if (!type) err(rel, "frontmatter is missing `type`");
  else if (!PAGE_TYPES.includes(type))
    err(rel, `type "${type}" is not one of: ${PAGE_TYPES.join(", ")}`);

  // --- Headings ----------------------------------------------------------
  const headingSource = raw.replace(/```[\s\S]*?```/g, "");
  const h1s = [...headingSource.matchAll(/^# (.+)$/gm)].map((m) => m[1].trim());
  if (h1s.length === 0) err(rel, "no H1 in the body");
  if (h1s.length > 1) err(rel, `${h1s.length} H1 headings, expected one`);
  if (title && h1s[0] && title !== h1s[0])
    err(rel, `H1 "${h1s[0]}" does not match title "${title}"`);

  let prev = 0;
  for (const m of headingSource.matchAll(/^(#{1,6}) /gm)) {
    const lvl = m[1].length;
    if (prev && lvl > prev + 1) err(rel, `heading jumps from h${prev} to h${lvl}`);
    prev = lvl;
  }

  // --- House style -------------------------------------------------------
  const body = prose(raw);
  if (/[—–]/.test(body)) err(rel, "contains an em or en dash");

  for (const word of BANNED) {
    const re = new RegExp(`\\b${word}\\b`, "gi");
    for (const m of body.matchAll(re)) {
      const ctx = body.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\n/g, " ");
      if (UI_LITERALS.some((lit) => ctx.includes(lit))) continue;
      err(rel, `banned word "${m[0]}" in: ...${ctx.trim()}...`);
    }
  }

  for (const pat of US_SPELLINGS) {
    const re = new RegExp(pat, "gi");
    for (const m of body.matchAll(re)) {
      const ctx = body.slice(Math.max(0, m.index - 40), m.index + 40);
      if (UI_LITERALS.some((lit) => ctx.includes(lit))) continue;
      err(rel, `US spelling "${m[0]}" in: ...${ctx.replace(/\n/g, " ").trim()}...`);
    }
  }

  if (/\b(we|our|us)\b/i.test(body.replace(/\bVela's\b/g, "")))
    warn(rel, "first person (we/our/us): documentation is not a person");

  for (const m of body.matchAll(/\bwill\b/gi)) {
    const ctx = body.slice(Math.max(0, m.index - 60), m.index + 60).replace(/\n/g, " ");
    if (FUTURE_TENSE_OK.some((ok) => ctx.includes(ok))) continue;
    err(rel, `future tense "will": house style is present tense. In: ...${ctx.trim()}...`);
  }

  // --- Images ------------------------------------------------------------
  const lines = raw.split("\n");
  const alts = [];
  lines.forEach((line, i) => {
    // Not anchored: images indented inside a list item count too. Anchoring
    // here would hide them from the alt-text and existence checks below, and
    // leave the file looking unreferenced to the orphan check further down.
    const img = line.match(/^\s*!\[([^\]]*)\]\(([^)]+)\)/);
    if (!img) return;
    const [, alt, src] = img;

    if (!alt.trim()) err(rel, `line ${i + 1}: image has empty alt text`);
    alts.push(alt.trim());

    const before = lines[i - 1] ?? "";
    const after = lines[i + 1] ?? "";
    if (before.trim() && !before.trim().startsWith("!["))
      err(rel, `line ${i + 1}: image needs a blank line before it`);
    if (after.trim() && !after.trim().startsWith("![") && !after.trim().startsWith("{/*"))
      err(rel, `line ${i + 1}: image needs a blank line after it`);

    if (src.startsWith("/img/"))
      err(rel, `line ${i + 1}: absolute image path "${src}". Use a relative path so the asset is processed once`);

    const target = src.startsWith("/")
      ? join(ROOT, "static", src)
      : resolve(dirname(file), src);
    if (!existsSync(target)) err(rel, `line ${i + 1}: image not found: ${src}`);
    else referencedImages.add(key(target));
  });

  const dupes = alts.filter((a, i) => alts.indexOf(a) !== i);
  for (const d of new Set(dupes)) err(rel, `alt text "${d}" is used more than once on this page`);
}

// --- Cross-page checks -----------------------------------------------------
if (existsSync(SHOTS)) {
  const all = walkAll(SHOTS).filter((f) => /\.(png|jpe?g|gif|svg|webp)$/i.test(f));
  for (const img of new Set(all)) {
    if (!referencedImages.has(key(img)))
      err(relative(ROOT, img).replace(/\\/g, "/"), "screenshot is not referenced by any page");
  }
}

function walkAll(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkAll(full, out);
    else out.push(full);
  }
  return out;
}

// Pages nothing else links to are reachable only from the sidebar.
for (const { rel, file } of live) {
  const name = basename(file, ".md");
  const linked = live.some(
    (other) => other.file !== file && other.raw.includes(`${name}.md)`)
  );
  if (!linked) warn(rel, "no inbound links from other pages, reachable only via the sidebar");
}

// --- Report ----------------------------------------------------------------
for (const w of warnings) console.log(`warning  ${w}`);
for (const e of errors) console.error(`error    ${e}`);

console.log(
  `\n${live.length} pages checked. ${errors.length} error(s), ${warnings.length} warning(s).`
);
process.exit(errors.length ? 1 : 0);
