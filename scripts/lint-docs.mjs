#!/usr/bin/env node
/**
 * Documentation linter for the Vela docs.
 *
 * Enforces the rules in STYLE_GUIDE.md that the Docusaurus build cannot see.
 * The build already fails on broken links and anchors, so this covers the rest:
 * frontmatter, naming, house style, and the screenshot rules.
 *
 * Run locally with `npm run lint:docs`. CI runs it on every push, together
 * with the build, from .github/workflows/docs.yml.
 * Draft pages are skipped, because they are excluded from production builds.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Normalise a path so Windows separators and drive-letter case never matter. */
const key = (p) => relative(ROOT, p).split(/[\\/]/).join("/").toLowerCase();

/**
 * Read a file with line endings normalised to LF. Several rules below anchor
 * on `$`, which sits before the `\n` and so never matches a trailing `\r`.
 * Reading a CRLF checkout raw makes those rules pass silently rather than fail.
 */
const read = (p) => readFileSync(p, "utf8").split("\r\n").join("\n");
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
// Pages where the vendor speaks in their own voice. Keep this list short:
// every entry is a page the first-person rule no longer protects.
const FIRST_PERSON_OK = ["docs/release-notes.md"];

const UI_LITERALS = [
  "Medical License",
  "Simple Storage",
  "not part of the selected organization", // Vela's own error message
  "Color", // the Tags screen labels the column this way
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
  const raw = read(file);
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

  // Style guide section 2 bans semicolons in prose. prose() has already removed
  // fenced blocks and inline code, so the only other legitimate source is an
  // MDX import line at the top of the file.
  for (const line of body.split("\n")) {
    if (/^\s*import\s/.test(line)) continue;
    if (line.includes(";"))
      err(rel, `semicolon in prose, use two sentences: ${line.trim().slice(0, 90)}`);
  }

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

  // Release notes are the one genre where first person is correct: they are
  // Botlhale announcing a change to a customer, not a page describing the
  // product. Rewriting "we've launched" into the passive would read worse.
  // Recorded as a deliberate deviation in STYLE_GUIDE.md section 5.
  if (!FIRST_PERSON_OK.includes(rel) &&
      /\b(we|our|us)\b/i.test(body.replace(/\bVela's\b/g, "")))
    warn(rel, "first person (we/our/us): documentation is not a person");

  for (const m of body.matchAll(/\bwill\b/gi)) {
    const ctx = body.slice(Math.max(0, m.index - 60), m.index + 60).replace(/\n/g, " ");
    if (FUTURE_TENSE_OK.some((ok) => ctx.includes(ok))) continue;
    err(rel, `future tense "will": house style is present tense. In: ...${ctx.trim()}...`);
  }

  // --- Mermaid -----------------------------------------------------------
  // Mermaid draws node labels as plain text, so markdown emphasis inside one
  // renders as literal asterisks on the page. Diagrams are drawn in the
  // browser, so a green build never catches it. prose() strips fenced blocks
  // before the house-style checks above, which is how 64 of these shipped.
  for (const m of raw.matchAll(/```mermaid\n([\s\S]*?)```/g)) {
    const firstLine = raw.slice(0, m.index).split("\n").length;
    m[1].split("\n").forEach((l, i) => {
      const at = `mermaid line ${firstLine + i + 1}`;
      if (l.includes("**"))
        err(rel, `${at} uses markdown bold, which renders literally: ${l.trim()}`);
      else if (/"[^"]*\*[^"]*"/.test(l))
        err(rel, `${at} has an asterisk in a label, which renders literally: ${l.trim()}`);
      // The em dash rule above runs on prose(), which strips fenced blocks,
      // so diagram labels are the one place a dash can hide from it.
      if (/[—–]/.test(l))
        err(rel, `${at} contains an em or en dash: ${l.trim()}`);
    });
  }

  // --- How-to completeness ------------------------------------------------
  // A how-to states what the reader needs before starting and how they know
  // they are done. Both were retrofitted across the set; this keeps them.
  if (type === "how-to") {
    const h2s = [...headingSource.matchAll(/^## (.+)$/gm)].map((h) => h[1].trim());
    for (const required of ["Before You Begin", "Check Your Work"])
      if (!h2s.includes(required)) err(rel, `how-to is missing "## ${required}"`);
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

  // --- Diagrams ----------------------------------------------------------
  // Mermaid draws in the browser, so a malformed diagram builds cleanly and
  // then shows an error box on the live page. Node labels wrap across lines,
  // so balance is counted over the whole diagram rather than line by line.
  let diagram = 0;
  for (const m of raw.matchAll(/```mermaid\n([\s\S]*?)```/g)) {
    diagram++;
    const code = m[1];
    const where = `mermaid diagram ${diagram}`;

    const kind = code.trim().split(/\s/)[0];
    if (!/^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram(-v2)?|erDiagram|journey|gantt|pie|quadrantChart|mindmap|timeline)$/.test(kind))
      err(rel, `${where}: starts with "${kind}", which is not a diagram type`);

    const unquoted = code.replace(/"[^"]*"/g, '""');
    if ((code.match(/"/g) || []).length % 2)
      err(rel, `${where}: odd number of quotation marks`);
    for (const [open, close, name] of [["(", ")", "parentheses"], ["[", "]", "brackets"], ["{", "}", "braces"]]) {
      const o = unquoted.split(open).length - 1;
      const c = unquoted.split(close).length - 1;
      if (o !== c) err(rel, `${where}: unbalanced ${name}`);
    }

    // A dash run only means an edge as part of a connector. A line that has
    // dashes and no connector is the "A -- B" mistake, which draws nothing.
    for (const [i, line] of code.split("\n").entries()) {
      const label = line.replace(/"[^"]*"/g, '""').replace(/<br\s*\/?>/g, "");
      if (!/-/.test(label)) continue;
      if (/(-->|---|-\.->|-\.-|==>|===|--[xo]|<--)/.test(label)) continue;
      if (/^\s*(flowchart|graph|subgraph|end|classDef|class|style|%%)/.test(label)) continue;
      if (/(^|\s)-{1,2}(\s|$)/.test(label))
        err(rel, `${where}, line ${i + 1}: dashes with no connector, use --> or ---`);
    }
  }
}

// --- Cross-page checks -----------------------------------------------------
if (existsSync(SHOTS)) {
  const all = walkAll(SHOTS).filter((f) => /\.(png|jpe?g|gif|svg|webp)$/i.test(f));
  for (const img of new Set(all)) {
    if (!referencedImages.has(key(img)))
      err(relative(ROOT, img).replace(/\\/g, "/"), "screenshot is not referenced by any page");
  }
  checkScreenshotAge(all);
}

// A screenshot is a claim about the product, and it ages faster than the text
// around it. This warns before the set quietly rots.
//
// Dates come from git, not the filesystem. A fresh clone rewrites every mtime
// to the checkout time, so mtime reports every screenshot as new in CI, which
// is exactly where the check needs to work.
function checkScreenshotAge(files) {
  const MAX_AGE_DAYS = 365;
  let log;
  try {
    log = execSync('git log --format="C|%cI" --name-only --diff-filter=AM -- img/screenshots', {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return; // no git, shallow clone, or no history: skip rather than guess
  }

  const lastSeen = new Map();
  let when = null;
  for (const line of log.split("\n")) {
    if (line.startsWith("C|")) when = line.slice(2).trim();
    else if (line.trim() && when && !lastSeen.has(line.trim()))
      lastSeen.set(line.trim(), when); // git log is newest-first
  }

  const now = Date.now();
  const aged = [];
  for (const f of files) {
    const rel = relative(ROOT, f).replace(/\\/g, "/");
    const iso = lastSeen.get(rel);
    if (!iso) continue; // never committed: new, so nothing to judge yet
    const days = Math.floor((now - new Date(iso).getTime()) / 86400000);
    if (days > MAX_AGE_DAYS) aged.push({ rel, days });
  }

  aged.sort((a, b) => b.days - a.days);
  for (const { rel, days } of aged)
    warn(rel, `screenshot last changed ${days} days ago. Check it still matches the product`);
}

function walkAll(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkAll(full, out);
    else out.push(full);
  }
  return out;
}

// --- Links -----------------------------------------------------------------
// The build catches broken links, but only after a full compile. These run in
// under a second, and each one corresponds to a break that reached the build.

/** Docusaurus heading slug: lowercase, drop punctuation, spaces to hyphens. */
const slug = (h) =>
  h
    .replace(/`[^`]*`/g, (s) => s.replace(/`/g, ""))
    .replace(/\*\*|\*|_/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    // One hyphen per whitespace character, not per run. Dropping punctuation
    // leaves the spaces that surrounded it, so "Quality & Performance" slugs
    // to "quality--performance". Collapsing runs here reported false broken
    // anchors on any heading with punctuation between words.
    .replace(/\s/g, "-");

const draftPaths = new Set();
for (const file of files) {
  if (/^draft:\s*true$/m.test(read(file))) draftPaths.add(key(file));
}

const anchorsOf = new Map();
const titleOf = new Map();
for (const { file, raw } of live) {
  const explicit = [...raw.matchAll(/^#{1,6} .*?\{#([\w-]+)\}\s*$/gm)].map((m) => m[1]);
  const derived = [...raw.replace(/```[\s\S]*?```/g, "").matchAll(/^#{1,6} (.+)$/gm)].map((m) =>
    slug(m[1].replace(/\s*\{#[\w-]+\}\s*$/, ""))
  );
  anchorsOf.set(key(file), new Set([...explicit, ...derived]));
  titleOf.set(key(file), raw.match(/^title:\s*(.+)$/m)?.[1].trim());
}
const titleToPage = new Map();
for (const [k, t] of titleOf) if (t) titleToPage.set(t.toLowerCase(), k);

for (const { rel, file, raw } of live) {
  for (const m of raw.matchAll(/\[([^\]]+)\]\((\.[^)\s]*?\.md)(#[^)\s]*)?\)/g)) {
    const [, text, href, hash] = m;
    const target = resolve(dirname(file), href);

    if (!existsSync(target)) {
      err(rel, `broken link: "${text}" points at ${href}, which does not exist`);
      continue;
    }
    if (draftPaths.has(key(target)))
      err(rel, `links to a draft page: ${href}. Drafts are excluded from production, so the link breaks`);

    if (hash) {
      const anchor = hash.slice(1).toLowerCase();
      const have = anchorsOf.get(key(target));
      if (have && !have.has(anchor))
        err(rel, `broken anchor: ${href}${hash} has no matching heading`);
    }

    // Link text that is another page's exact title sends the reader somewhere
    // other than the page they think they are clicking through to.
    const other = titleToPage.get(text.trim().toLowerCase());
    if (other && other !== key(target))
      err(rel, `link text "${text}" is the title of a different page (${other}), but points at ${href}`);
  }

  // Same checks for same-page anchors.
  for (const m of raw.matchAll(/\[([^\]]+)\]\((#[\w-]+)\)/g)) {
    const anchor = m[2].slice(1).toLowerCase();
    if (!anchorsOf.get(key(file))?.has(anchor))
      err(rel, `broken anchor: ${m[2]} has no matching heading on this page`);
  }
}

// --- Navigation ------------------------------------------------------------
// A rename has to land in four places at once: the title, the H1, the sidebar
// label, and the navigation table. Each of these has drifted before.

const sidebarSrc = read(join(ROOT, "sidebars.js"))
  .split("\n")
  .filter((l) => !l.trim().startsWith("//"))
  .join("\n");

/** Strip a leading emoji or symbol from a sidebar label. */
const bare = (s) => s.replace(/^[^A-Za-z0-9(]+\s*/, "").trim();

const sidebarEntries = [...sidebarSrc.matchAll(/id:\s*"([^"]+)"[\s\S]{0,160}?label:\s*"([^"]+)"/g)];
const inSidebar = new Set(sidebarEntries.map((m) => m[1]));

for (const [, id, label] of sidebarEntries) {
  const k = key(join(DOCS, `${id}.md`));
  const t = titleOf.get(k);
  if (!t) {
    err("sidebars.js", `entry "${id}" has no matching published page`);
    continue;
  }
  if (bare(label) !== t)
    err("sidebars.js", `label "${bare(label)}" does not match the title of ${id}.md ("${t}")`);
}

// The navigation table in the framework doc must list what the sidebar builds.
const fwPath = join(ROOT, "DOCUMENTATION_FRAMEWORK.md");
if (existsSync(fwPath)) {
  const fw = read(fwPath);
  const documented = new Map(
    [...fw.matchAll(/^\| \*\*([^*]+)\*\* \| (.+?) \|$/gm)].map((r) => [
      r[1].trim(),
      r[2].split("·").map((s) => s.trim()),
    ])
  );
  const actual = new Map();
  let cur = null;
  const navRe =
    /type:\s*"category",\s*label:\s*"([^"]+)"|id:\s*"([^"]+)"[\s\S]{0,160}?label:\s*"([^"]+)"/g;
  let m;
  while ((m = navRe.exec(sidebarSrc))) {
    if (m[1]) actual.set((cur = bare(m[1])), []);
    else if (cur) actual.get(cur).push(bare(m[3]));
  }
  for (const [cat, items] of actual) {
    if (!documented.has(cat)) {
      err("DOCUMENTATION_FRAMEWORK.md", `section 4 has no row for the sidebar category "${cat}"`);
      continue;
    }
    const a = items.join(" · ");
    const d = documented.get(cat).join(" · ");
    if (a !== d)
      err("DOCUMENTATION_FRAMEWORK.md", `section 4 row "${cat}" reads "${d}" but the sidebar builds "${a}"`);
  }
}

// Pages reachable from the top navigation bar rather than the sidebar.
const configPath = join(ROOT, "docusaurus.config.js");
const inNavbar = new Set();
if (existsSync(configPath)) {
  const cfg = read(configPath);
  for (const m of cfg.matchAll(/to:\s*['"]\/docs\/([^'"]+)['"]/g)) inNavbar.add(m[1].toLowerCase());
  for (const m of cfg.matchAll(/docId:\s*['"]([^'"]+)['"]/g)) inNavbar.add(m[1].toLowerCase());
}

// A page in none of the sidebar, the navbar, or another page cannot be reached.
for (const { rel, file } of live) {
  const name = basename(file, ".md");
  const id = key(file).replace(/^docs\//, "").replace(/\.md$/, "");
  const linked = live.some(
    (other) => other.file !== file && other.raw.includes(`${name}.md)`)
  );
  const listed = [...inSidebar].some((s) => s.toLowerCase() === id);
  const navbarred = inNavbar.has(id);
  if (!linked && !listed && !navbarred)
    err(rel, "unreachable: not in the sidebar, not in the navbar, and nothing links to it");
  else if (!linked && !navbarred)
    warn(rel, "no inbound links from other pages, reachable only via the sidebar");
}


// --- Report ----------------------------------------------------------------
for (const w of warnings) console.log(`warning  ${w}`);
for (const e of errors) console.error(`error    ${e}`);

console.log(
  `\n${live.length} pages checked. ${errors.length} error(s), ${warnings.length} warning(s).`
);
process.exit(errors.length ? 1 : 0);
