# Vela Documentation Style Guide

How we write Vela documentation. Read this before adding or editing a page.

For how the documentation is structured and why, see [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md).

Our audience is call centre team leads, QA managers, and administrators. They are not developers, and they usually arrive with a job to do or a problem to solve. Write for that person. Section 4 covers who they are and the tone that serves them, and it matters as much as the mechanical rules do: this documentation is read by paying customers and the people they report to.

---

## 1. The rule that matters most

**Do not document anything you have not seen.**

Every button name, menu path, field label, limit, and file format must exist in the product. If you cannot open the screen or find it in the `vela` or `vela-data` code, do not write it.

If you need a number you cannot verify, leave it out. A missing detail is a gap. An invented one is a defect that costs someone an afternoon.

This is not a style preference. Most of the serious errors found in this documentation came from writing what the software sounded like it should do.

### Existing in code and being reachable are different claims

Finding a feature in the codebase does not mean a user can get to it. Half-built and deliberately hidden features leave working code behind. Before documenting a capability, confirm there is a control a user can actually reach.

Two real examples from this documentation:

- **Knowledge Base URL uploads.** The API route, form handling, validation, and success message all exist. The button that switches to URL mode is commented out, so the mode cannot be reached. Knowledge Base accepts PDF files only.
- **Settings Preferences.** The component is written and imported into the settings page, but never rendered and absent from the tab list. There is no Preferences tab.

Both were documented as working because the code was there.

**The check:** trace the path from a control the user can reach to the code you found. If you cannot, the feature is not shipped, whatever the codebase says. Look for commented-out JSX, imports with no corresponding render, and routes with no navigation entry.

### The string in the source and the label on the screen are different claims

CSS rewrites text on its way to the reader. Vela's `.title` class applies `capitalize`, so a source string can reach the page looking nothing like it does in the file:

| In the source | On the screen |
| :--- | :--- |
| `Total Interactions by {groupBy}` with `groupBy="team"` | Total Interactions By Team |
| `"Take a Bow:"` | Take A Bow: |
| `<VelaTab title={"overview"} />` | Overview |

Copying the source string gives you the wrong label. Reading the screen and assuming the source matches gives you the wrong search term. Both happen.

**The check:** when a label comes from code rather than a screenshot, look at the element's classes before you write it down. Interpolated values, `capitalize`, and `uppercase` all mean the rendered label differs from the literal. Two corrections were nearly filed against pages that were already right, because the source looked wrong.

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

### Use the product's own vocabulary

Where Vela has a word for something, use that word everywhere, including in the explanatory prose around it. Reaching for a friendlier synonym splits the vocabulary and makes the documentation searchable only by whoever wrote it.

| Instead of | Write | Why |
| :--- | :--- | :--- |
| customer mood | customer **emotion** | Sentiment analysis measures emotion. "Mood" is a different, softer claim |
| check whether it is a pattern | check the **trend** | Trend is the analytics term the rest of the platform uses |
| data points | **metrics** | The product says Metric on every control that touches them |
| report builder | the **Create** tab | There is no feature called Report Builder |
| period | **date range** | The control the reader opens is labelled Date Range |

The last two are the common failure: inventing a plausible-sounding name for something that already has one. Search the product for your noun before you use it.

### Avoid developer words for ordinary things

The words we use to build the screen are not the words the reader uses to look at it. A team lead does not know what a modal is, and should not have to.

| Developer word | Write |
| :--- | :--- |
| dropzone | the upload area |
| radio, radio button | the options, or name them: the All, Calls, and Chats options |
| chip, tag pill | the name, or what it holds |
| toast | the message Vela shows |
| below the fold | out of sight until you scroll |
| breadcrumb | the trail at the top of the page |
| render, parse, boolean, payload | say what happens in plain words |

Sidebar, tab, button, field, column, and **modal** are all fine. Modal is the one borderline case we keep: it is precise about a box that blocks the rest of the screen until you deal with it, the documentation has used it consistently throughout, and "window" invites confusion with the browser window. Naming the thing is usually better than either: **Filter By** tells the reader more than "the modal" does.

### AI words

Say what the reader sees, not how it was built. "Vela transcribes the call and scores it against your scorecard" is a sentence a QA manager can act on. Nothing on a customer page needs the word model, algorithm, inference, embedding, NLP, or training data.

**"The AI" is fine and is worth keeping.** It carries a distinction the reader genuinely needs: whether a score came from Vela or from a person. "The AI answered no, and a reviewer overrode it" is exactly the sentence an agent disputing a score needs to understand. Replacing it with "the system" loses that.

What to avoid is the marketing register around it. No AI-powered, AI-driven, or intelligent. The product's abilities are described by what they produce.

### Where the technical word is the right one

Two exceptions, both narrow:

- **API and integration sections have a developer audience.** Endpoint, payload, schema, and type names such as boolean are correct in the API reference and in the API section of the upload guide. They are wrong everywhere a team lead is the reader.
- **Where the product's own label is technical, use the label and gloss it.** Settings really does say **Redactable Entities**, so the documentation says that too, then explains it as the kinds of information Vela masks. Renaming it to something friendlier would leave the reader hunting for a control that does not exist.

**Release notes are a historical record.** They describe what shipped, in the words used at the time. Do not retrofit current terminology into past entries.

### Name the colour, and give the number with it

Red, Amber, and Green are the product's own labels for the performance bands, so the documentation uses them. What it must not do is leave the colour carrying the meaning on its own. A reader who cannot distinguish the colours, or who is reading the page rather than looking at the screen, gets nothing from "the agent is in the amber band" by itself.

Name the band, then say what it means in numbers, or point at where the numbers are set:

| Not this | This |
| :--- | :--- |
| Agents in the red band need attention | Agents below the Lower Bound, shown in red, need attention |
| The score turns green above the threshold | The score is green at or above the Upper Bound, which defaults to `80` |

The boundaries are configurable, so a page that states a default must say so. [Organisation Configuration](./docs/settings-config/organisation-configuration.md) is the page that owns the actual numbers, including which end of each band is inclusive; link to it rather than restating the ranges.

The same rule applies to anything else where colour is the signal in the interface, such as a dark cell on a heatmap or a status dot. Say what the colour means, not only that it is there.

---

## 4. Voice, tone, and grammar

### The mechanics

- **Second person.** "You can change this later", not "Users can change this later".
- **Present tense.** "Vela scores the interaction", not "Vela will score the interaction".
- **Active voice.** "An administrator sets the boundaries", not "The boundaries are set by an administrator".
- **Short sentences.** If a sentence has two ideas, make it two sentences.
- **UK English.** organisation, analyse, recognise, customise, behaviour.
- **Select, not click.** "Select **Apply**", not "Click Apply". See below.

### Select, not click

**Use "select" as the default verb for acting on a control.** It is the house standard and it is not a preference.

"Click" presumes a mouse. Our readers include people working on tablets, on contact-centre touchscreens, and using keyboard navigation or a screen reader, and for them an instruction to click describes an action they are not performing. "Select" is true whatever the device, which is why Microsoft and Google both moved to it.

| Not this | This |
| :--- | :--- |
| Click **Save Changes** | Select **Save Changes** |
| Click on the **Calls** tab | Select the **Calls** tab |
| Clicking **Interactions** opens the page | Selecting **Interactions** opens the page |
| The button cannot be clicked | The button cannot be selected |

**Keep "click" only where the mouse action itself is the point.** Right-click and double-click have no device-neutral equivalent and are instructions about the mouse, so they stay:

- Select your files, **right-click**, and choose **Send to → Compressed (zipped) folder**.

Drag-and-drop is the same case. Where a drop target also accepts a file picker, describe the alternative by what it does rather than by the mouse: "drag a PDF onto the upload area, or select the area to browse for one".

**Watch two collisions.** Vela has controls whose label contains the word Select, so "Select **Select Date Range**" is a sentence the sweep can produce. Name the control instead: "open the date range control, labelled **Select Date Range**". And where a control is literally labelled **Select**, use "choose" for the verb rather than writing "select **Select**".

### Who is actually reading this

A team lead between calls. A QA manager building a review before a meeting. An administrator configuring something once, under time pressure, who will not touch it again for six months. They are competent at their job and new to this screen. Assume intelligence, not familiarity.

Many of them work in multilingual contact centres and read English as a second or third language. That is not a reason to simplify what you are saying. It is a reason to say it in short sentences, in the plainest words that are still accurate, and to put the point at the front.

### This is client-facing

Everything here is read by paying customers and the people they answer to. Write it so it could be read aloud in a client meeting.

That rules out a few habits that creep in when documenting from source:

- **No internal shorthand.** Field names, collection names, and component names are ours, not the reader's. If a thing has no visible label, describe where it is rather than naming the variable.
- **No speculation about defects.** If something appears broken, verify it and then either document the behaviour plainly or leave it out and raise it. Never write "this seems to be a bug" on a customer-facing page.
- **No complaining about the product.** There is a real difference between stating a limit and editorialising about it.

  | Editorialising | Stating the limit |
  | :--- | :--- |
  | Frustratingly, schedules cannot be edited | To change a schedule, delete it and create a new one |
  | Vela unhelpfully hides the table | The table does not appear when the agent has no scores for the period |

  The second column is more useful to the reader and does not cost the client anything in front of their own stakeholders.

### Say what happens, not what does not

Write the positive form. A sentence built on an absence makes the reader assemble the meaning themselves, and it usually takes more words to say less.

| Instead of | Write |
| :--- | :--- |
| You do not assign courses to agents | Vela assigns courses by score |
| The control is labelled with the view you are **not** in | The control names the view it switches you to |
| A metric with no data is left out | Vela includes the metrics that have data |
| You cannot move an agent into a team you cannot see | You can move an agent into any team your access level covers |

This is not a ban on negatives. Some facts are genuinely about absence, and stating a limit plainly is covered above. The test is whether the reader has to invert the sentence to work out what to do.

**Keep the condition attached when you rewrite.** "If there is no column, there is nothing to set up" carries a condition. Dropping the "if" while keeping the consequence turns a conditional into a claim about every reader.

### Cut to one idea per sentence

Long sentences in this documentation are usually two sentences that were never separated, or a plain statement wearing hedging scaffolding.

| Instead of | Write |
| :--- | :--- |
| A consistently high ratio, which may indicate the agent is dominating the conversation and not actively listening | It stays high, so the agent is talking more than listening |
| A gap between the two that keeps widening, meaning alerts are being raised faster than they are worked through | The gap between them widens week on week |
| A clustering of agents in the lower score ranges, indicating a team-wide training need | Agents cluster in the lower ranges, which points at the team rather than a person |

Prefer the concrete over the abstract, particularly in any "when to act" column. The reader is looking for a thing they can recognise on screen, not a description of a category of situation.

### Do not blame the reader

When something goes wrong, describe the condition, not the reader's error. "You forgot to select a team" becomes "A report needs at least one team". The reader is already stuck; adding fault does not help them out of it.

The same applies to anything they cannot undo. Say what happens, say what to do instead, and move on. Dismissing a notification is permanent, so the page says so and points at where the underlying item still lives, rather than warning them to be careful.

### Say it plainly, once

- **Do not hedge.** "Generally", "typically", and "should" usually mean the writer did not check. Go and check, then state it.
- **Do not oversell.** No feature is powerful or seamless. Say what it does and let the reader decide.
- **Do not repeat yourself for emphasis.** If a point matters, put it where the reader hits the problem, not three times across a page.
- **Answer the question the reader arrived with**, then stop. A page that keeps going past its own answer buries it.

### Explain enough to act, not only what to select

Our readers are QA managers, not engineers. Steps alone leave them able to operate a screen without knowing whether they should. Where a number or a setting carries a judgement, give them the judgement:

- A metric definition says what to look for in it, not only what it measures.
- A step that has consequences says what those are, in the same breath.
- A gap in the data gets an explanation, not a shrug.

This is the difference between documentation someone follows and documentation someone trusts. It is also why the Metrics reference deliberately breaks strict Diátaxis, covered in section 5.

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

### A how-to opens and closes the same way

Every how-to has `## Before You Begin` at the top and `## Check Your Work` at the bottom. The linter enforces both.

**Before You Begin** lists what the reader must have, not what the feature is. Name the access level, the data that has to exist already, and anything they should have decided before opening the form. The test is whether a reader could fail halfway through for a reason this section could have warned them about.

**Check Your Work** says how they know it worked. This is the harder one to write well, because the honest answer is often not "a success message":

- Say where to look, and what a correct result looks like there.
- Say what a *missing* result means. "A metric you selected but cannot find in the file had no data in the period" saves a support ticket.
- Where two paths end differently, check them separately. A one-time report exists the moment it is built; a schedule produces nothing until its first run, so **Next Run** is the only thing that confirms it.

Do not write a Check Your Work that only restates the last step.

### Say where a control is, not only what it is called

A name the reader cannot find is not much better than a wrong name. When you first mention a control, place it: the sidebar entry it lives under, the tab it is on, or what it sits beside.

| Instead of | Write |
| :--- | :--- |
| the **Agents** section | **Agents** in the left sidebar, holding **Performance** and **Agent Details** |
| the Agent Scorecard table | the **Agent Scorecard** table, directly below the agent header |
| select **View** | in List View, select **View** at the end of the row; in Board View, select the card |

That last one matters most where a page documents two views or two tabs. An instruction that only works in one of them reads as broken in the other.

### Document what is missing, and why

Vela hides things rather than showing empty states, which leaves the reader staring at a gap with no explanation. Those gaps are documentation:

- The Agent Scorecard table does not render at all when an agent has no scores for the period.
- A metric with no data is dropped from a report, and the report fails entirely if none have data.
- A schedule that has never run reads **No runs yet** rather than a date.

If you find a condition that hides a control or a section, write it where the reader will be looking for the missing thing.

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

**3. Release notes speak in the first person.**

Section 3 bans "we" and "our" because a page describing the product is not a person. Release notes are the exception: they are Botlhale announcing a change to a customer, not a page describing a feature. "We've launched a coaching portal" is the right sentence, and the passive rewrite is worse.

The linter exempts `docs/release-notes.md` by name, in `FIRST_PERSON_OK`. Keep that list short. A permanent warning nobody can clear is worse than either fixing the page or exempting it on purpose, because it teaches everyone to skim past lint output.

Anything else that mixes types is a defect, not a deviation.

---

## 6. Formatting

- **Headings**: Title Case, matching the existing pages. Keep it consistent within a page. Explanation pages are the exception: they may use sentence-case headings that state the point, such as "Every interaction is scored, not a sample", because a reader skimming the argument gets more from a claim than from a label.
- **Closing sections**: use `## Related` for links to other pages and `## Need Help?` for the support address. A page that hands the reader to a specific next task may use `## Next Steps` instead of Related. Do not invent further variants.
- **Numbering H2s**: number them (`## 1. Open the Report Builder`) when the sections are a sequence the reader works through in order. Leave them unnumbered when the sections are independent and a reader may start at any of them. Both forms are in use, so match the page you are editing rather than converting it.
- One H1, at the top of the body. Docusaurus renders that as the page heading instead of adding its own, so a second H1 never appears.
- Keep the H1 and the frontmatter `title` saying the same thing. The title is what the sidebar, browser tab, and search results show, so a reader who selects "Data Upload Guide" should not land on a page headed something else.
- Do not skip heading levels.
- **UI elements** in bold: select **Apply**.
- **Field values and code** in backticks: set `sender` to `user`.
- **Menu paths** with arrows: **Smart Detector → Smart Search**.
- Numbered lists for sequences. Bullets for everything else.
- Tables for anything with more than two parallel facts.

### Lettered subsections

Where a numbered H2 needs subsections, letter them: `### A. Set the Period`, `### B. Choose the Interaction Type`. The letters tell a reader mid-page which part of which step they are in, and they make cross-references legible: "covered in [C. Check the Wider Trend](#c-check-the-wider-trend)".

Letter them only where there are two or more. A lone `### A.` under a step is noise.

### Diagrams

Diagrams are Mermaid, in a ```mermaid fence. Two things about them catch people out.

**Mermaid does not read markdown.** Node labels are drawn as plain text, so `**Overall Score**` reaches the page as literal asterisks. Write the words without emphasis. The linter fails on `**` inside a mermaid block.

**A green build proves nothing about a diagram.** Docusaurus draws them in the browser, so the build never executes them. A diagram with a syntax error compiles happily and renders as an error box for the reader. Open the page.

Beyond that:

- **Default to `flowchart LR`.** Top-down diagrams grow a column per step and push the rest of the page below the fold. Left-to-right stays in view.
- **Cut anything the prose already says.** A start node repeating the sentence above it costs a whole column and tells the reader nothing.
- **Earn the space.** A diagram is worth it when it shows a shape that prose handles badly: a branch, a loop, a convergence. A list of steps in boxes is a list.

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

- **Editing a capture to remove an internal-only control is allowed**, and preferred to shipping one that shows it. Painting out the **Support** entry makes the sidebar match what a customer sees, so the screenshot becomes more truthful, not less. Two limits: only ever remove something the reader genuinely does not have, and never alter a value, label, or result the reader is meant to read. Masking personal information is the one exception to the second limit, covered below, because a mask declares itself rather than pretending the field is empty. Reshooting from a customer-like account is still the better fix when someone has the access.
- **Numbered callouts may be drawn on top of a capture.** They add to the image rather than changing it, so the "never alter a value" rule does not apply: nothing underneath is hidden or altered. Keep them to screens dense enough that a reader has to hunt, number them in the same order as the numbered steps in the text, and never let a marker cover a label or a value. A callout that needs a caption to make sense is doing too much work, so split the screenshot instead.
- **Check the sidebar before you shoot.** It is the fastest way to date a screenshot. If it does not match the current navigation, the whole image is out of date.
- **Use demo data.** Never capture a real customer's name, contact details, or transcript.
- **Mask other people's personal information.** Some screens list real users and their email addresses, and publishing those processes personal information for a purpose nobody consented to. Under POPIA that is not ours to do. Draw a plain bar over each address instead. A bar is honest where deletion is not: it shows that an address sits in that field without disclosing it, so the reader still learns what the column holds. Filtering the list down to your own record works too, but it costs you the rows that make a table worth showing, so prefer masking. Either way, leave a comment in the page saying the capture is deliberate, otherwise the next person will "fix" it.
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
| `{/* UNVERIFIED: ... */}` | Something exists in the product that cannot be checked yet, so it is named but not documented |

Keep the three apart. A marker filed under the wrong one inflates the count of outstanding screenshot work and hides the real task.

Say what to capture and where to save it, or what is wrong and what you verified it against. List everything outstanding with:

```
grep -rn "SCREENSHOT:\|RESHOOT:" docs/ --include=*.md
```

### Keeping them current

The linter warns when a screenshot has not changed in over a year, so the set cannot rot quietly. A warning is not an instruction to reshoot: open the screen and compare. If it still matches, touch nothing and the warning stands as a record that someone checked.

Dates come from git, not the file's timestamp. A fresh clone rewrites every mtime to the checkout time, so the filesystem reports every screenshot as new in CI, which is the one place the check has to work.

### Removing one

An image nobody references is dead weight. Find them with a diff of what exists against what is referenced, and delete rather than leave them for the next person to wonder about. This directory reached 219 files when only 35 were in use.

---

## 9. Before you commit

1. Does every UI reference exist in the product, and is it reachable?
2. For labels taken from code, does CSS change them before the reader sees them?
3. Any em dashes?
4. Any words from the avoid list, or a synonym where the product has its own word?
5. Would you be comfortable if a client read this page in front of their own stakeholders?
6. Does it state limits without editorialising, and describe conditions without blaming the reader?
7. Is the page one primary type, or has it drifted into two?
8. Does the opening line say what the page is?
9. Is each control placed, so the reader can find it?
10. Does the procedure exist somewhere else already?
11. Do the screenshots show the current navigation, and no internal-only entries?
12. Did you open the page in a browser and look at the diagrams?
13. If you renamed a page, does the new title still match the H1, the sidebar label, the navigation table in [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md) section 4, and the link text on every page that points at it?
14. Does `npm run lint:docs` pass?
15. Does `npm run build` pass?

---

## Sources

This guide follows [GitLab's documentation style guide](https://docs.gitlab.com/development/documentation/styleguide/) for punctuation and word choice, the [Diátaxis](https://diataxis.fr/) framework for page types, [GitLab topic types](https://docs.gitlab.com/development/documentation/topic_types/) for treating troubleshooting as its own type, and [Every Page is Page One](https://everypageispageone.com/) for standalone pages.
