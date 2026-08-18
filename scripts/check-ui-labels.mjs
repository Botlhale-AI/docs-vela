#!/usr/bin/env node
/**
 * Audits bolded strings in the documentation against the Vela source.
 *
 * Style guide rule one is "do not document anything you have not seen". This
 * finds the opposite: a UI label written here that appears nowhere in the
 * product. Four invented terms were found this way, including "performance
 * threshold", "Speed Adjustment", and "Date Range Selector".
 *
 * NOT a CI gate, for two reasons:
 *   1. CI has no access to the vela repositories, which are separate.
 *   2. Bold is used for emphasis as well as for labels, so the output needs a
 *      human to read it. Roughly one in six results is worth acting on.
 *
 * Run it before a release, or after the product changes:
 *   npm run check:labels
 *   VELA_SRC=/path/to/vela npm run check:labels
 *
 * Exits 0 always. It reports; it does not judge.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCES = (process.env.VELA_SRC ?? join(ROOT, "..", "vela") + "," + join(ROOT, "..", "vela-data"))
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// Pages about software that is not Vela. Their bold text is another product's.
// Compression methods used to be listed here as a page name that never existed,
// so it matched nothing. They are handled as labels in NOT_A_LABEL instead,
// which keeps the rest of data-upload.md checked.
const SKIP_PAGES = [/api-documentation/, /release-notes/];

// Bold that is emphasis or document structure rather than a control.
const NOT_A_LABEL = [
  /→/, // a menu path, not a single label
  /^(Try it now|Note|Tip|Warning|Example|Why|What|How|When|Where|Who)\b/i,
  /^(Be|Do|Use|Add|Set|Check|Track|Leave|Assign|Review|Write|Keep|Avoid|Prefer)\b/,
  /^(Your|The|A|An|Their|This|These|Both|Either)\b/,
  /^(Required|Optional|Default|Format|Cause|Solution|Problem|Purpose)\b/i,
  /^(Google|Microsoft|Mozilla|Apple|Windows|Chrome|Edge|Firefox|Safari|7-Zip|WinRAR)\b/,
  // ZIP compression methods, and the fields 7-Zip and WinRAR use to set them.
  // This is the archive format's vocabulary rather than Vela's, and the upload
  // guide has to name it so a reader can produce an archive Vela can read.
  /^(Deflate64|Deflate|BZip2|LZMA|Store|Archive format|Compression method)\b/,
];

function walk(dir, test, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const e of entries) {
    if (["node_modules", ".next", ".git", "build", ".docusaurus"].includes(e)) continue;
    const f = join(dir, e);
    try {
      if (statSync(f).isDirectory()) walk(f, test, out);
      else if (test.test(e)) out.push(f);
    } catch {
      /* unreadable, skip */
    }
  }
  return out;
}

const present = SOURCES.filter((s) => existsSync(s));
if (!present.length) {
  console.log(
    `No Vela source found. Looked in:\n  ${SOURCES.join("\n  ")}\n` +
      `Set VELA_SRC to a comma-separated list of paths. Skipping.`
  );
  process.exit(0);
}

let haystack = "";
for (const src of present) {
  for (const f of walk(src, /\.(jsx?|tsx?)$/)) haystack += readFileSync(f, "utf8") + "\n";
}
const hay = haystack.toLowerCase();

const candidates = new Map();
for (const file of walk(join(ROOT, "docs"), /\.md$/)) {
  const raw = readFileSync(file, "utf8").split("\r\n").join("\n");
  if (/^draft:\s*true$/m.test(raw)) continue;
  if (SKIP_PAGES.some((r) => r.test(file))) continue;

  raw.split("\n").forEach((line, i) => {
    for (const m of line.matchAll(/\*\*([^*\n]{2,40})\*\*/g)) {
      const s = m[1].trim();
      if (!/^[A-Z]/.test(s)) continue; // labels start capitalised
      if (/[.:,?!]$/.test(s)) continue; // trailing punctuation means prose
      if (s.split(/\s+/).length > 3) continue; // labels are short
      if (NOT_A_LABEL.some((r) => r.test(s))) continue;
      const where = `${relative(ROOT, file).split(/[\\/]/).join("/")}:${i + 1}`;
      if (!candidates.has(s)) candidates.set(s, where);
    }
  });
}

const unmatched = [...candidates].filter(([s]) => !hay.includes(s.toLowerCase()));

console.log(`Source: ${present.map((p) => relative(ROOT, p)).join(", ")}`);
console.log(`${candidates.size} candidate labels, ${unmatched.length} not found in the source.\n`);

if (unmatched.length) {
  const width = Math.max(...unmatched.map(([s]) => s.length));
  for (const [s, where] of unmatched) console.log(`  ${s.padEnd(width)}  ${where}`);
  console.log(
    `\nEach of these is either an invented term, a control that has been renamed,\n` +
      `or bold used for emphasis. Check them against the product and correct or\n` +
      `rephrase. Emphasis is fine; a label the reader cannot find is not.`
  );
}
