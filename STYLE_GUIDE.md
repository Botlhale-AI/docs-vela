# Vela Documentation Style Guide

How we write Vela documentation. Read this before adding or editing a page.

For how the documentation is structured and why, see [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md).

Our audience is call centre team leads, QA managers, and administrators. They are not developers, and they usually arrive with a job to do or a problem to solve. Write for that person.

---

## 1. The rule that matters most

**Do not document anything you have not seen.**

Every button name, menu path, field label, limit, and file format must exist in the product. If you cannot open the screen or find it in the `vela` or `vela-data` code, do not write it.

If you need a number you cannot verify, leave it out. A missing detail is a gap. An invented one is a defect that costs someone an afternoon.

This is not a style preference. Most of the serious errors found in this documentation came from writing what the software sounded like it should do.

### Existing in code and being reachable are different claims

Finding a feature in the codebase does not mean a user can get to it. Half-built and deliberately hidden features leave working code behind. Before documenting a capability, confirm there is a control a user can actually click.

Two real examples from this documentation:

- **Knowledge Base URL uploads.** The API route, form handling, validation, and success message all exist. The button that switches to URL mode is commented out, so the mode cannot be reached. Knowledge Base accepts PDF files only.
- **Settings Preferences.** The component is written and imported into the settings page, but never rendered and absent from the tab list. There is no Preferences tab.

Both were documented as working because the code was there.

**The check:** trace the path from something the user clicks to the code you found. If you cannot, the feature is not shipped, whatever the codebase says. Look for commented-out JSX, imports with no corresponding render, and routes with no navigation entry.

---

## 2. Punctuation

**No em dashes or en dashes.** Use a full stop, a comma, or brackets.

| Instead of | Write |
| :--- | :--- |
| `Review the context — the transcript shows whether it is genuine.` | `Review the context. The transcript shows whether it is genuine.` |
| `Alerts — raised by Smart Search — appear here.` | `Alerts, raised by Smart Search, appear here.` |
| `**Compliance score** — from compliance items` | `**Compliance score**: from compliance items` |

An em dash is usually a sentence that should have ended. Splitting it almost always reads better.

Other punctuation:

- Use the Oxford comma.
- Avoid semicolons. Use two sentences.
- Use `:` to introduce a list or a definition.

---

## 3. Words to avoid

| Avoid | Why | Use instead |
| :--- | :--- | :--- |
| simply, simple | If the reader does not find it simple, you have lost their trust | Remove it |
| easy, easily | Same | Remove it |
| just | Minimises the effort you are asking for | Remove it |
| please | Not needed in product documentation | Remove it |
| currently | Documentation describes the product as it is today | Remove it |
| comprehensive, powerful, seamless, robust | Marketing language | Say what it does |
| leverage, utilise | Jargon | use |
| in order to | Wordy | to |
| note that | Wordy | Remove it |
| and/or | Ambiguous | or |
| etc., and so on | Vague | Name the items |
| we, our | Documentation is not a person | you, or the product name |

Someone reading the troubleshooting guide is already having a bad day. Telling them the fix is "simple" is the worst possible framing.

---

## 4. Voice and grammar

- **Second person.** "You can change this later", not "Users can change this later".
- **Present tense.** "Vela scores the interaction", not "Vela will score the interaction".
- **Active voice.** "An administrator sets the boundaries", not "The boundaries are set by an administrator".
- **Short sentences.** If a sentence has two ideas, make it two sentences.
- **UK English.** organisation, analyse, recognise, customise, behaviour.

---

## 5. Structure

Every page has a primary type. Do not mix them.

| Type | Purpose | Example |
| :--- | :--- | :--- |
| **Tutorial** | Take a new user through it once | Team Lead Quick Start |
| **How-to** | Help someone complete a task they have chosen | Generate Reports |
| **Reference** | Let someone look up a fact | Metrics, Glossary |
| **Explanation** | Build understanding | How Scoring Works |
| **Troubleshooting** | Help someone who has hit a problem | Troubleshooting Guide |

Record the type in frontmatter so drift is visible:

```yaml
---
title: Generate Reports
type: how-to
---
```

**Why five types and not four.** Diátaxis, which this structure otherwise follows, has only four and folds troubleshooting into how-to. That does not work here. A how-to assumes the reader knows their goal. Someone troubleshooting starts from a symptom and does not yet know what they are trying to do. GitLab reached the same conclusion and made troubleshooting a first-class type.

**Types apply to sections, not only whole pages.** A how-to may end with a troubleshooting section, and that is correct rather than a violation. What matters is that each section knows what it is. A page whose *primary* purpose has drifted is the problem.

### Every page is page one

Most readers arrive by search, not by working down the sidebar. Assume any page might be the first thing someone sees.

Every page must:

- **State what it is in the opening line.** "The metrics available on your Dashboard and in Reports", not "In this guide, we will look at metrics".
- **Stand alone.** Do not rely on the reader having read the previous page.
- **Link outward for anything it assumes.** If a page uses a term, link it to the Glossary rather than explaining it again.

A quick test: if this page were the only one a customer ever read, would it make sense?

The most common mistake is putting reference material inside a tutorial. If a quick start starts defining every metric, those definitions belong in Reference with a link from the tutorial.

**One procedure lives in one place.** If a set of steps appears on two pages, pick one owner and link from the other. The scorecard override steps were once duplicated across four pages, so when the button was renamed, all four were wrong at once.

### Deliberate deviations

We depart from strict Diátaxis in two places, on purpose. Both are decisions, not oversights.

**1. The Metrics reference includes "What to look for" notes.**

Diátaxis says reference must be neutral and exclude interpretation. We include it because our readers are QA managers, not engineers. "Talk to Listen Ratio: agent talking time relative to customer talking time" is accurate and useless on its own. The interpretation is the part they came for.

**2. The tutorials present two sign-in methods.**

Diátaxis says tutorials must not offer choices. We keep Option A (SSO) and Option B (email and password) because the reader is not choosing. Their organisation already chose, and they need to recognise which one applies to them.

Anything else that mixes types is a defect, not a deviation.

---

## 6. Formatting

- **Headings**: Title Case, matching the existing pages. Keep it consistent within a page. Explanation pages are the exception: they may use sentence-case headings that state the point, such as "Every interaction is scored, not a sample", because a reader skimming the argument gets more from a claim than from a label.
- **Closing sections**: use `## Related` for links to other pages and `## Need Help?` for the support address. A page that hands the reader to a specific next task may use `## Next Steps` instead of Related. Do not invent further variants.
- **Numbering H2s**: number them (`## 1. Open the Report Builder`) when the sections are a sequence the reader works through in order. Leave them unnumbered when the sections are independent and a reader may start at any of them. Both forms are in use, so match the page you are editing rather than converting it.
- One H1, at the top of the body. Docusaurus renders that as the page heading instead of adding its own, so a second H1 never appears.
- Keep the H1 and the frontmatter `title` saying the same thing. The title is what the sidebar, browser tab, and search results show, so a reader who clicks "Data Upload Guide" should not land on a page headed something else.
- Do not skip heading levels.
- **UI elements** in bold: click **Apply**.
- **Field values and code** in backticks: set `sender` to `user`.
- **Menu paths** with arrows: **Smart Detector → Smart Search**.
- Numbered lists for sequences. Bullets for everything else.
- Tables for anything with more than two parallel facts.

### Naming a page

The title is the main thing a reader has to judge a search result by, and most of them arrive by search. It has two jobs: name the thing they are looking for, and say what the page does with it.

**Use a verb and the product's own noun.** "Set Up Smart Search", not "Monitor Interactions Automatically" and not "Smart Search" on its own. The noun is what someone types into the search box and what they see in the Vela sidebar, so a title without it is hard to find. The verb is what tells them the page shows how, rather than listing fields.

**Match the verb to the whole page, not its first section.** "Create a Smart Search" names one section of a page that also covers matching, tuning, alerts, analysis, and troubleshooting. "Set Up" covers all of it. If no single verb fits the page, it is doing several jobs and should be split.

**In prose, link the feature name. In a Related list, link the title.** "See [Smart Search](./smart-search-guide.md)" reads as English mid-sentence. "[Set Up Smart Search](./smart-search-guide.md): build the searches that flag interactions" tells a reader what they will land on. Both are right in their place, and neither is a stale name.

This follows [GitLab's task topics](https://docs.gitlab.com/development/documentation/topic_types/task/), which use an active verb with the feature noun, and [Stripe](https://docs.stripe.com/payments/checkout), which titles a hub page with a verb spanning the whole journey ("Build a payments page"). [Diátaxis](https://diataxis.fr/how-to-guides/) ranks a bare feature name as the worst option for a how-to.

---

## 7. Links

- Link text describes the destination. Not "click here".
- Use relative paths with the `.md` extension: `[Glossary](./reference/glossary.md)`.
- The build fails on broken links, so a typo will not reach production.

---

## 8. Screenshots

A screenshot is a claim about the product, and it ages faster than the text around it. Treat it like any other thing you must have seen.

### Taking one

- **Sign in as a customer would.** Several controls appear only for Botlhale staff or on certain plans, and a screenshot showing one sends readers looking for something they do not have:

  | Control | Appears for |
  | :--- | :--- |
  | **Support** in the sidebar | `@botlhale.ai` addresses only |
  | **Switch to Silent Upload** on the upload page | `@botlhale.ai` addresses only |
  | **Create Organisation** on the organisation screen | `@botlhale.ai` addresses only |
  | **Coaching** in the sidebar | Organisations with Coaching enabled |
  | **Smart Search**, **Smart Questions** | Plans that include them |

  None of the internal-only controls should be documented at all.

- **Editing a capture to remove an internal-only control is allowed**, and preferred to shipping one that shows it. Painting out the **Support** entry makes the sidebar match what a customer sees, so the screenshot becomes more truthful, not less. Two limits: only ever remove something the reader genuinely does not have, and never alter a value, label, or result the reader is meant to read. Reshooting from a customer-like account is still the better fix when someone has the access.
- **Check the sidebar before you shoot.** It is the fastest way to date a screenshot. If it does not match the current navigation, the whole image is out of date.
- **Use demo data.** Never capture a real customer's name, contact details, or transcript.
- **Crop to what you are explaining.** A full-page capture to illustrate one button wastes the reader's attention.

### Saving one

- Put it in `img/screenshots/<area>/`, matching the area of the product it shows, not the page that happens to use it.
- Name it for its content: `org-table.png`, not `settings4.png` or `VB7.png`.
- No spaces in filenames.

### Referencing one

- Alt text describes what the image shows, so it earns its place for a reader using a screen reader. `![The Org Table, with the Create menu open]`, not `![ Settings]`.
- Two images on one page must not share alt text. If they do, one of them is mislabelled.

### Recording work still to do

Both markers are MDX comments, so they compile to nothing:

| Marker | Use it when |
| :--- | :--- |
| `{/* SCREENSHOT: ... */}` | A screenshot is needed and does not exist yet |
| `{/* RESHOOT: ... */}` | One exists but the product has moved on |

Say what to capture and where to save it, or what is wrong and what you verified it against. List everything outstanding with:

```
grep -rn "SCREENSHOT:\|RESHOOT:" docs/ --include=*.md
```

### Removing one

An image nobody references is dead weight. Find them with a diff of what exists against what is referenced, and delete rather than leave them for the next person to wonder about. This directory reached 219 files when only 35 were in use.

---

## 9. Before you commit

1. Does every UI reference exist in the product?
2. Any em dashes?
3. Any words from the avoid list?
4. Is the page one primary type, or has it drifted into two?
5. Does the opening line say what the page is?
6. Does the procedure exist somewhere else already?
7. Do the screenshots show the current navigation, and no internal-only entries?
8. If you renamed a page, does the new title still match the H1, the sidebar label, the navigation table in [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md) section 4, and the link text on every page that points at it?
9. Does `npm run lint:docs` pass?
10. Does `npm run build` pass?

---

## Sources

This guide follows [GitLab's documentation style guide](https://docs.gitlab.com/development/documentation/styleguide/) for punctuation and word choice, the [Diátaxis](https://diataxis.fr/) framework for page types, [GitLab topic types](https://docs.gitlab.com/development/documentation/topic_types/) for treating troubleshooting as its own type, and [Every Page is Page One](https://everypageispageone.com/) for standalone pages.
