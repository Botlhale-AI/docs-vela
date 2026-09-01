# Vela Documentation: Structure and Framework

How the Vela documentation is organised, and why. Read this before adding a page or restructuring a section.

For writing rules such as punctuation, vocabulary, and voice, see [STYLE_GUIDE.md](./STYLE_GUIDE.md).

**Audience for the documentation itself:** call centre team leads, QA managers, and administrators. They are not developers. They usually arrive with a job to do or a problem to solve, and they arrive through search rather than from the top of the navigation.

---

## 1. Why we use a framework

Documentation without a structure becomes a set of pages that each try to do everything. A page that opens as a walkthrough, drifts into explaining concepts, then buries a table of field definitions serves nobody. The beginner is overwhelmed, and the experienced user cannot find the one fact they came for.

A framework answers one question consistently: **what job is this page doing?**

---

## 2. What we use, and why it is a blend

We combine three established frameworks rather than adopting one wholesale. Each contributes something the others do not.

| Framework | Contributes | Why we need it |
| :--- | :--- | :--- |
| **Diátaxis** | Four page types based on user need | Stops pages doing several jobs badly |
| **GitLab topic types** | Troubleshooting as its own type | Fills the gap Diátaxis leaves |
| **Every Page is Page One** | Standalone page design | Matches how our readers arrive |

### Diátaxis: the authoring discipline

Diátaxis observes that documentation serves four distinct needs, split along two axes: whether the reader is **doing** or **thinking**, and whether they are **learning** or **working**.

Its value here was diagnostic. Applying it showed that our reference material barely existed, and that definitions readers needed repeatedly were buried inside a quick start guide they would read once.

### GitLab topic types: the missing fifth type

Diátaxis has four types and expects troubleshooting to sit inside how-to guides. That does not work for this product.

A how-to assumes the reader knows what they want to achieve. Someone troubleshooting starts from a symptom and does not yet know what they are trying to do. "My uploads are failing" is not a task, it is a problem.

GitLab uses **Concept, Task, Reference, Troubleshooting** and treats troubleshooting as first class. We follow them on this point.

GitLab contributes a second idea we rely on: **types apply to sections, not only to whole pages.** A how-to that ends with a troubleshooting section is correct, not a violation.

### Every Page is Page One: how readers arrive

Diátaxis is author-facing. It tells writers how to classify content but says nothing about how readers find it.

Our site has search, and it indexes every page. In practice most readers land in the middle of the documentation rather than at the top of the navigation.

EPPO starts there: **any page might be the first one a reader sees.** Every page must stand on its own and establish its own context.

---

## 3. The five page types

| Type | The reader is | The page must | Example |
| :--- | :--- | :--- | :--- |
| **Tutorial** | New, learning by doing | Give one guided path, no choices or theory | Team Lead Quick Start |
| **How-to** | Competent, has chosen a task | Get them to the outcome efficiently | Generate Reports |
| **Reference** | Working, needs a fact | Describe neutrally and consistently | Metrics, Glossary |
| **Explanation** | Building understanding | Explain why, discuss trade-offs | How Scoring Works |
| **Troubleshooting** | Stuck, has a symptom | Move from symptom to cause to fix | Troubleshooting Guide |

Every page records its type in frontmatter, so drift is visible in review:

```yaml
---
title: Generate Reports
type: how-to
---
```

**Current distribution:** 15 reference, 12 how-to, 5 explanation, 2 tutorial, 1 troubleshooting, across 35 published pages.

Reference being the largest is intentional. In a mature product it is the material people return to most.

---

## 4. Navigation structure

Navigation uses plain business language, not framework terminology. A team lead does not think "I need the explanation quadrant". Categories are named for what the reader wants.

| Section | Contains |
| :--- | :--- |
| **Getting Started** | Platform Overview · System Requirements |
| **Quick Start Guides** | Administrator Setup · Team Lead Quick Start |
| **Getting Data In** | Upload Your Data |
| **Using Vela** | Review and Score Interactions · Monitor Agent Performance · Generate Reports · Manage Notifications · Manage Agents and Teams |
| **Smart Detector** | Build an Agent Scorecard · Set Up Smart Search · Set Up Smart Questions · Build Your Knowledge Base · Manage Smart Search Terms · Search by Phone Number |
| **Understanding Vela** | How Scoring Works · How the Pieces Fit Together |
| **Reference** | Glossary · Metrics · Scorecard Fields · Smart Search Criteria |
| **Administration & Configuration** | Roles and Access Levels · Account and Security · Organisation Configuration · User and Team Management · Access Requests · Security and Compliance |
| **Advanced** | API Reference · Best Practices |
| **Support** | Troubleshooting Guide · Integration Problems · Frequently Asked Questions · Video Tutorials |

Page names in this table are the page titles, which are also the sidebar labels. Keep them in step when a page is renamed. Names are separated by `·` rather than commas, because a title may contain a comma.

Release Notes sits in the top navigation bar rather than the sidebar.

The order follows a real adoption sequence: understand the product, get data in, use it day to day, configure it, then get help.

---

## 5. Deciding where a new page belongs

Two questions resolve most cases.

**Is the reader acting or thinking?** Acting means they want to do something. Thinking means they want to understand something.

**Are they learning or working?** Learning means they are new to this. Working means they have a job in front of them.

| | Learning | Working |
| :--- | :--- | :--- |
| **Acting** | Tutorial | How-to |
| **Thinking** | Explanation | Reference |

If the reader has hit a problem and does not yet know what they need, it is troubleshooting regardless of the above.

**Sanity check:** if you cannot say which type a page is, it is probably doing two jobs and should be split.

---

## 6. Rules that apply to every page

### Do not document anything you have not seen

Every button name, menu path, field, and limit must exist in the product. Most serious documentation errors come from writing what software sounds like it should do rather than what it does.

### Existing in code and being reachable are different claims

Finding a feature in the codebase does not mean a user can get to it. Trace the path from something a user clicks to the code you found. Watch for commented-out JSX, imports with no corresponding render, and routes with no navigation entry.

Two real cases from this repository:

- **Knowledge Base URL uploads.** The API route, form handling, validation, and success message all exist. The mode selector button is commented out, so the mode cannot be reached. Knowledge Base accepts PDF files only.
- **Settings Preferences.** The component is written and imported into the settings page, but never rendered and absent from the tab list. There is no Preferences tab.

Both were documented as working because the code was there.

### One procedure lives in one place

If a set of steps appears on two pages, one owns it and the other links. The scorecard override steps were once duplicated across four pages, so renaming a single button made all four wrong at once.

### Coaching belongs in the Coaching Portal documentation

Coaching is an add-on with its own site at [docs-coaching.botlhale.xyz](https://docs-coaching.botlhale.xyz). Courses, awards, progress, cautions, preferences, and the agent's own view are documented there.

These docs say only what a Vela reader needs to act, then link. Naming a Coaching decision that affects QA work is right; explaining how to make it here is not, because the copy drifts from the page that owns it.

### Point at the API reference for endpoints outside Vela

[api-docs.botlhale.ai](https://api-docs.botlhale.ai/) owns the endpoint reference, and it is the source of truth where these docs and it disagree. Document the Vela endpoints here, along with anything proven from source that the reference omits, and say where the two differ. Transcription, translation, text to speech, and chat bots are linked, not restated.

### Every page states what it is in its opening line

The test: if this page were the only one a customer ever read, would it make sense?

---

## 7. Deliberate deviations

Two departures from strict Diátaxis, both decisions rather than oversights.

**The Metrics reference includes interpretation.** Diátaxis says reference must be neutral. We include short "what to look for" notes because our readers are QA managers, not engineers. Knowing that Talk to Listen Ratio measures agent talking time against customer talking time is accurate and not much use alone. The interpretation is what they came for.

**The tutorials present two sign-in methods.** Diátaxis says tutorials must not offer choices. We keep SSO and email/password because the reader is not choosing. Their organisation already chose, and they need to recognise which applies.

Anything else that mixes types is a defect, not a deviation.

---

## 8. Adding a page

1. Decide the type using the table in section 5.
2. Put it in the section that matches what the reader wants, not what the feature is called internally.
3. Add `type:` to the frontmatter.
4. Open the product, or the `vela` / `vela-data` source, and confirm every UI reference.
5. Check the procedure does not already exist on another page.
6. Run the checklist in [STYLE_GUIDE.md](./STYLE_GUIDE.md) section 9.
7. Run `npm run check`. It runs the linter and then the build, which fails on broken links and anchors.

---

## 9. What is enforced automatically

Both commands run on every push through [.github/workflows/docs.yml](./.github/workflows/docs.yml), so nothing below depends on someone remembering.

| Check | Mechanism | Status |
| :--- | :--- | :--- |
| Broken links and anchors | `onBrokenLinks` and `onBrokenAnchors`, plus the linter | Fails |
| Frontmatter: title, type, one H1 matching the title | Linter | Fails |
| House style: dashes, banned words, UK spelling, present tense | Linter | Fails |
| Images: alt text, spacing, resolution, no orphans | Linter | Fails |
| Links to draft pages | Linter | Fails |
| Link text that is another page's title | Linter | Fails |
| Sidebar label matches the page title | Linter | Fails |
| Section 4 above matches what the sidebar builds | Linter | Fails |
| Pages reachable from somewhere | Linter | Fails |
| UI labels match the product | `npm run check:labels` | Reports, run on demand |

The last row is the only one that cannot be a gate, for two reasons. CI has no access to the `vela` repositories, and bold marks emphasis as well as labels, so the output needs a person to read it. Roughly one result in six is worth acting on.

Run it before a release, or after the product changes:

```
npm run check:labels
VELA_SRC=/path/to/vela,/path/to/vela-data npm run check:labels
```

It found four invented terms on its first run: "performance threshold", which is not a Vela concept at all, and "Speed Adjustment", "Date Range Selector", and "Interaction Type Filter", which name controls the product calls **Playback Speed**, **Select Date Range**, and **Interactions**.

---

## References

- [Diátaxis](https://diataxis.fr/)
- [GitLab documentation topic types](https://docs.gitlab.com/development/documentation/topic_types/)
- [GitLab documentation style guide](https://docs.gitlab.com/development/documentation/styleguide/)
- [Every Page is Page One](https://everypageispageone.com/)
