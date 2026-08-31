# Working in docs-vela

Read this before changing anything. For writing rules see [STYLE_GUIDE.md](./STYLE_GUIDE.md). For where a page belongs see [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md).

## What this repository is

The customer documentation for the **Vela platform**: dashboard, interactions, Smart Detector, agents, reports, settings, and the API.

The **Coaching** add-on has its own repository, [docs-coaching-portal](https://docs-coaching.botlhale.xyz). Coaching detail belongs there. Here, say that Coaching exists, say what it changes about the platform, and link out. Do not duplicate it.

**Readers** are QA specialists, team leads, dialler and data specialists, and administrators at call centres. They are not developers. The exception is the API Reference and the integration sections of the troubleshooting guide and FAQ, which are written for integrators, where endpoint, token, and payload are the right words.

## Before you commit

```
npm run check
```

Linter then build, the same as CI. Both must pass.

## Verifying a claim

Every factual statement needs a source. In order of authority:

1. **The live screen.** A screenshot, or the product running. This beats everything.
2. **The published API spec** at `api-docs.botlhale.ai/openapi.yaml`, for anything API-related.
3. **Source** in `vela` and `vela-data`, for behaviour a screen cannot show: error strings, validation, what a field does.
4. **Support email and recollection.** Context only. These describe one moment and go stale.

Where two disagree, keep the higher authority, and say in the page that they differ and which won.

**Source has been wrong about the screen repeatedly.** A documented Sort control whose handler is empty. Metric names that live in the database and appear in no source file. Toolbars present in the product and absent from the checkout. When a claim is about what a user sees, only a screen settles it.

**Existing in source does not mean reachable.** Check for commented-out JSX, imports with no render, routes with no navigation entry, and handlers with empty bodies.

Where a claim cannot be verified, mark it rather than guessing:

```
{/* UNVERIFIED: <claim>. Not in vela or vela-data source. Needs <who> to confirm. */}
```

Never invent a label, a limit, or a definition.

## Defect classes worth hunting

Each of these has been found more than once.

**Invented terminology.** A name we made up for something the product already names. Check bold labels against the product.

**Inward-facing verification.** Every gate here confirms the docs match our own repository. None notices when something outside moves. An API base URL stayed wrong in published docs for three months. Ask what external thing a page depends on.

**Duplicated facts that drift.** A limit or a domain list stated on several pages. Check they agree.

**Database-sourced values.** Metric names, categories, AI output, email copy. Only a screen confirms them.

**Two controls that look like one.** Filter versus Filter Calls. Two date ranges on one page.

**Silent failure.** An upload that returns success and never appears. Metadata dropped without an error. These matter more than loud errors and are the least documented.

**Contradiction inside one page.** An instruction that says do not guess, followed by a guess.

## Tooling caveats

`npm run check:labels` reports bold terms it cannot find in the product source. It has two false-positive classes:

- Bold used for emphasis rather than as a label.
- **Real labels it cannot match**, because they render as text nodes rather than string literals. Confirmed cases include **Allocated Monthly Duration** and **Current Duration Usage**, both correct, both reported missing.

Treat the output as a list to read, never as a defect list. Check a screenshot before changing a label on its say-so.

## Constraints that override style

- **POPIA.** Mask personal information in screenshots with solid bars, never blur. Blur can be reversed. Never reshoot to expose what was masked.
- **Internal-only controls** — **Support**, **Switch to Silent Upload**, **Create Organisation** — are painted out of captures and never documented.
- **Editions** are named only to explain why something is missing, and always linked to the [Lite](./docs/reference/glossary.md#lite) glossary entry rather than described again. Do not list what a plan includes, and do not name a price.
- **Unreleased features** are not documented from a working branch. Check `origin/main` before writing a page. Where something is coming, put it in the commented draft in `docs/release-notes.md`.
- Accuracy beats positive phrasing. State a real limit plainly, then give the next available action.

## Git

- Give a commit message rather than committing, unless asked to commit.
- Confirm before committing, and again before pushing.
- Never push to `main` or `dev`.
- No `Co-Authored-By` trailer.

## Deploying

`url:` in `docusaurus.config.js` must name the host that serves the site. It is `docs-vela.botlhale.ai`. Every canonical and sitemap entry inherits it.

Redirects live in the same file. **Adding, renaming, or removing a page changes its URL.** Before shipping a structural change, diff the live sitemap against the build and add a redirect for anything that would stop resolving:

```
curl -s https://docs-vela.botlhale.ai/sitemap.xml
```

After deploying, confirm the live site matches this repository rather than assuming the deploy ran.

## What not to do

- Do not rewrite a page because you prefer different wording. Separate a genuine problem from a style preference.
- Do not restructure a page that passes both gates. Count its tables and lists before calling it prose-heavy.
- Do not add content to make a page longer.
- Do not re-litigate settled decisions. Read the release notes draft and the page's own comments first.
