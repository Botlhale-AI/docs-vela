---
id: smart-search-guide
title: Set Up Smart Search
sidebar_position: 2
type: how-to
---

# Set Up Smart Search

Smart Search automatically monitors every processed interaction for keywords, phrases, and patterns you define. Each time a processed call or chat matches one of your searches, an alert is raised and linked directly to that interaction. This lets you focus your QA effort on the conversations that matter most rather than reviewing interactions at random.

:::info Plan availability
Smart Search is available on plans that include it. If **Smart Search** does not appear under **Smart Detector** in the left sidebar, your organisation's plan does not cover it. Contact your Account Manager.
:::

---

## Before You Begin

- **Your access level sets how far a search can reach.** Organisational access can scope a search to the whole organisation, chosen departments, or chosen teams. Departmental access reaches its own department and the teams in it, and team access reaches one team. See [Access Level](./reference/glossary.md#access-level).
- **Phrases need nothing set up first.** Filters do: intents, keywords, topics, and pain points can only be used once they exist in your organisation's lists. See [Manage Smart Search Terms](./topics-and-terms-guide.md).
- **Your plan caps how many searches can be Active at once**, so decide what matters most before creating a dozen. Inactive searches are kept without using a place. See [Search Management](#search-management).

New to this? Click **View example** on the Smart Search page to browse the ready-made example searches supplied with Vela, with their names and descriptions, before writing your own.

---

## What You Can Achieve

Smart Search gives you automated monitoring across three areas:

- **Issue detection**: catch problems early and respond before they escalate
- **Compliance and quality monitoring**: confirm that agents are following required procedures and scripts
- **Opportunity identification**: spot training needs and surface examples of excellent service

---

## How Matching Works

Vela matches on meaning, not on exact words. When you add an example phrase, Vela flags interactions that say something very similar or express the same thing, so you do not need to list every wording. Capitalisation, punctuation, and small differences in phrasing do not affect a match.

Two things guide a match:

- **The example phrases** you provide, as representative examples of what to look for.
- **The Description**, which Vela also reads when deciding whether an interaction matches. Write it to describe what the search is looking for, not only as a note to yourself.

Vela matches on clear evidence in the transcript rather than guessing. A vague description or a single ambiguous phrase matches less reliably than a clear description with a few concrete examples.

Searches work across languages. Calls and chats in the 11 official South African languages are translated to English as they are processed, and matching reads that translation alongside the original. You can write your example phrases in English, and they match interactions spoken in another language.

You can also narrow a search with structured filters (intents, keywords, topics, pain points, or agents), each set to **include** or **exclude**, and combine several conditions in one search. For every filter type and setting, see [Smart Search Criteria](./reference/smart-search-criteria.md).

Three separate things therefore feed one decision, which is why editing the description changes your results even though it reads like a note to yourself:

```mermaid
flowchart LR
    P("Example phrases<br/>what to look for") --> M{"Does this<br/>interaction match?"}
    D("Description<br/>read by the AI,<br/>not just a label") --> M
    F("Search filters<br/>intents, keywords, topics,<br/>pain points, agents<br/>each include or exclude") --> M
    M -- Yes --> A("An alert on<br/>that interaction")
    M -- No --> N("Nothing.<br/>The interaction is still<br/>processed and scored")
```

---

## Creating a Smart Search

### Step 1: Access Smart Search

1. In the left sidebar, open **Smart Detector** and select **Smart Search**.
2. Click **New Smart Search** to open the creation form.

![The Smart Search list, with New Smart Search above the table of searches and their name, description, scope, status, and results](../img/screenshots/smart_search/10.png)

### Step 2: Define Your Search Criteria

![The New Smart Search form with five fields numbered, from Smart Search Title through to Example Phrases](../img/screenshots/smart_search/smart-search-create.png)
![The rest of the New Smart Search form, numbered five to nine, from Example Phrases through to Create Smart Search](../img/screenshots/smart_search/smart-search-create2.png)

The numbers on both screenshots match the numbered steps below. Example Phrases carries a 5 on each, because the two captures overlap at that point in the form.

1. Enter a descriptive **Smart Search Title** (for example, "Customer Complaints: Escalation Language").
2. Set the **Search Status** to **Active** so the search starts matching once you save it. An **Inactive** search is kept but does not run.
3. Add a **Description** of what the search is looking for. Vela reads this when matching, so it shapes the results, and it also helps you when reviewing a list of searches months later.
4. Under **Search Scope**, use **Apply to** to choose how far the search reaches. The options depend on your own access level:
   * Organisational access: **Entire Organisation**, **Specific Departments**, or **Specific Teams**.
   * Departmental access: **Entire Department** or **Specific Teams**.
   * Team access: **Entire Team**.

   Choosing **Specific Departments** or **Specific Teams** opens a second selector for picking which ones.
5. Add your **Example Phrases**. Most searches start here: click **Add** and enter each phrase. Write them the way people actually speak, not the way an internal process document describes the situation.
6. Narrow the search further with a **Search Filter**, if you need one. Click **Add Filter** to match on intents, keywords, topics, pain points, or specific agents. Those come from your organisation's lists, whether Vela detected them or your team added them, so add the term first if it is not offered. See [Smart Search Criteria](./reference/smart-search-criteria.md) and [Manage Smart Search Terms](./topics-and-terms-guide.md).
7. Enable **Historical Search** to run the search against interactions uploaded before you created it. Under **Historical Search Options**, choose **All historical calls** or a **Specific date range** with a start and end date. Pick a date range unless you want your whole archive reprocessed. Historical Search is set at creation and cannot be added by editing the search later.
8. Tick **Notifications** if you want to be alerted each time a new match is detected. You can change this later by editing the search.
9. Click **Create Smart Search** to save the search.

The form also lets you combine several conditions, link this search to another, and attach a Knowledge Base document. See [More Search Options](#more-search-options).

---

### Step 3: Review and Refine Results

Once interactions are processed, matches appear automatically in the search results.

1. Navigate to **Smart Detector → Smart Search**.
2. Click **View** next to your search to open its results. For what each panel on that page shows, see [Understanding the Results View](#understanding-the-results-view).
3. Open a matched interaction from **Returned Interactions**. Each row links to the call or chat that triggered the match.
4. Read the transcript alongside Vela's analysis to judge whether the match is genuine.
5. Click **Resolve** on the alert once you have acted on it, which drops the interaction out of Returned Interactions. See [Alert Management](#alert-management).

![A matched interaction opened from the results, with the transcript beside the Smart Detector analysis tabs](../img/screenshots/calls/calls-3.png)

If the results contain too many irrelevant matches, return to the search and make the description and examples more specific. If matches are being missed, add another clear example or sharpen the description. Refining a search based on early results is a normal part of getting it to perform well.

---

## More Search Options

Beyond phrases, a Smart Search has a few optional ways to focus what it matches. Each is set on the same creation form.

### Combine Several Conditions

A search can use more than one criterion at once, for example a set of phrases together with an intent or a pain point. When a search has more than one condition, set **Show results when** to decide how they combine:

- **All of the filters are matched**: an interaction matches only when every condition matches.
- **Some of the filters are matched**: an interaction matches when at least one condition matches.

For every criterion and its include, exclude, and all of / some of settings, see [Smart Search Criteria](./reference/smart-search-criteria.md).

### Link to Another Search

Turn on **Link to Search** and choose a main search to have this search checked only on interactions that the main search has already matched. This focuses a specific search on a narrower set of interactions, for example checking for escalation language only where a billing search already matched.

The main search must cover at least the same scope as this one. An organisation-wide search can be the main search for any search, and a department search can be the main search for a team inside that department. A linked search cannot itself be a main search, so links are one level deep. If a main search is set to Inactive it stops matching, so any search linked to it has nothing to run against.

### Use a Knowledge Base Document

Turn on **Knowledge Base** and select a document to have Vela use its content as reference when matching your phrases. This helps the search judge interactions against your own procedures rather than generic wording. The document must be within the search's scope. See [Knowledge Base](./knowledge-base-guide.md).

---

## A Worked Example

A team lead suspects agents are promising refund timelines the business cannot meet.

1. **Create the search.** Title it `Refund Promises`. Description: `Flags interactions where the agent commits to a refund or a refund timeline`. Because Vela reads the description when matching, that sentence does as much work as the phrases.
2. **Add example phrases**: `you'll get your refund by`, `I'll process the refund today`, `the money will be back in your account`.
3. **Set the scope** to the department handling billing, and the status to **Active**.
4. **Enable Historical Search** for a specific date range covering last month, so there is something to look at immediately rather than waiting for new calls.
5. **Leave Notifications off** for now. Watch the first batch of matches before deciding whether every one deserves an alert.
6. **Read the results.** Twenty matches, and **When in Call Matches Occur** shows most of them late in the conversation, at the point agents are closing the call.
7. **Refine.** Four matches are agents correctly reading the standard refund policy. Tighten the description to say you are looking for a specific date or timeline being promised, not the policy being explained.
8. **Act.** Coach the two agents responsible, and resolve the alerts as you work through them.

The pattern generalises: describe the behaviour, give a few real phrases, run it over a known period, read the results before switching notifications on, then tighten.

---

## Common Search Types

### Customer Experience Monitoring

| **Search Type** | **Example Phrases** |
|-----------------|-------------------|
| Customer Complaints | "I'm not happy", "This is terrible", "I want to speak to a manager" |
| Service Issues | "This doesn't work", "I've been waiting", "Nobody helped me" |
| Billing Problems | "I was charged twice", "This bill is wrong", "I want a refund" |
| Product Issues | "This is broken", "It's not working", "Defective product" |

### Compliance and Quality Assurance

| **Search Type** | **Example Phrases** |
|-----------------|-------------------|
| Regulatory Violations | "I didn't authorise this", "That's illegal", "You can't do that" |
| Policy Breaches | "That's against policy", "You're not following procedure" |
| Security Concerns | "My information was shared", "Data breach", "Privacy violation" |
| Documentation Issues | "That wasn't documented", "No record of this", "Missing information" |

:::note Searching for what was said, not what was missed
A Smart Search matches language that appears in a conversation, so it catches a customer objecting or an agent promising something they should not. It cannot flag a required disclosure the agent never made, because there is nothing in the transcript to match.

Put "did the agent say it" checks on the [Agent Scorecard](./reference/scorecard-fields.md) instead, where a question can be answered No, and mark the critical ones Auto-Fail. Use Smart Search for the language you want to find, and the scorecard for the language you require.
:::

### Training and Development

| **Search Type** | **Example Phrases** |
|-----------------|-------------------|
| Knowledge Gaps | "I don't know", "Can you explain", "I'm not sure how" |
| Process Confusion | "What's the procedure", "How do I do this", "I'm confused" |
| Escalation Requests | "I need a supervisor", "Can I speak to someone else", "This is too complex" |
| Positive Feedback | "Great service", "Thank you so much", "You're amazing" |

---

## Monitoring and Alerts

### Notifications

Each search has its own **Notifications** setting. You can turn it on when you create the search, and change it later by editing the search. When it is on, every new match for that search raises an alert.

Whether that alert reaches you in-app, by email, or both depends on your preferences in **Settings → Notifications**. Matches always appear in the results view, whether notifications are on or off.

### Alert Management

Work through alerts regularly rather than letting them accumulate. See [Manage Notifications](./features/notifications.md) for the review routine and where alerts appear.

Resolving is what closes the loop. Open the interaction, find the alert in the **Smart Detector** section, and read it in context. Click **Resolve** on that row. It changes to **Resolved**, and the interaction drops out of the search's **Returned Interactions** list, which shows unresolved matches only.

Three controls close three different things, and they sit close together on the detailed view. Pick by what you want to close:

| To close | Click | Where | Then it reads |
| :--- | :--- | :--- | :--- |
| One alert | **Resolve** | The **Smart Detector** section, on the alert's row | **Resolved** |
| A comment or a reply | **Mark as Resolved** | The **Comments** section, on that comment | **Resolved by** your name |
| The whole interaction | **Mark as Reviewed** | The top of the detailed view | **Reviewed** |

Each one is independent. Marking the interaction reviewed leaves its alerts open, and resolving a comment leaves the alert that prompted it open, so close the alert itself with **Resolve**.

To clear several alerts at once, open a single search's results and click through to its returned interactions. That list gives you a checkbox on each row and **Select All** above them, and choosing any row reveals **Resolve Selected**. Those controls belong to one search's list, so the main Interactions list and a combined view of two or more searches do not carry them.

An alert you resolve without acting on it is worse than one you leave open, because the list stops reminding you.

If a search is producing more matches than your team can act on, edit it to use more specific phrases, or turn its Notifications setting off and review its matches in the results view instead.

---

## Analysing Search Results

### Understanding the Results View

Click **View**, in the **Results** column of the Smart Search list, to open a search's results. At the top, set the **Date range**, or use the **Quick** picks (**1h**, **6h**, **12h**, **24h**) to jump to a recent window. Everything below updates to the period you choose.

The results view has three collapsible sections.

#### Smart Search Details

A summary of the search across the period:

- The search's **name**, **description**, date created, and **status** (Active or Inactive).
- A **Summary**, showing the **Period Covered** and the **Total Interactions** that matched the search.
- **Main Insights Highlighted**: an AI-written read of the matched interactions. It opens with a short overview, then a **Call Reasons** explanation of why the interactions matched, then a bulleted list of the main patterns, each with the percentage of matches it applies to (for example, "Agent-Triggered Comparisons (83%)"). Use **Download Detailed Insights** to save it as a PDF. Insights appear once a search has enough matches.

![The Smart Search Details panel on the Results page, with Period Covered, Total Interactions, and the Main Insights Highlighted write-up above Download Detailed Insights](../img/screenshots/smart_search/details.png)

#### Interaction Analytics

Charts that break down the matched interactions:

- **Sentiment Distribution**: the split of Negative, Neutral, and Positive interactions.
- **When in Call Matches Occur**: whether matches fall Early (0 to 2 min), Mid (2 to 5 min), or Late (5+ min) in the conversation.
- **Average Handle Time (Flagged Interactions)**: the average length of the matched interactions.
- **Top Teams** and **Top Departments**: which teams and departments the matches came from, with counts and percentages.
- **Daily Flagged Interactions**: how many interactions matched on each day across the period.

![The Interaction Analytics panel, with Sentiment Distribution, When in Call Matches Occur, Average Handle Time, Top Teams, Top Departments, and Daily Flagged Interactions](../img/screenshots/smart_search/details_2.png)

#### Returned Interactions

The list of matched calls and chats. Open any one to see its full transcript and AI analysis (summary, sentiment, scorecard, keywords, and more) in context. That per-interaction analysis lives on the interaction itself, not in the summaries above.

Only unresolved matches appear here, so resolving an alert removes it from the list.

![The Returned Interactions panel, listing the calls with unresolved alerts for the search, with their handle time, topic, alert count, and scores](../img/screenshots/smart_search/details_3.png)

### Interactions That Match Several Searches

**View Compounded Results**, above the Smart Search list, answers a different question from any single search: which interactions raised alerts on more than one of your searches at once.

Under **Quick Search**, select two or more searches to see the interactions that matched **all** of them. A call flagged by both a billing search and an escalation search is a more specific problem than either search describes on its own, and usually a better use of review time than working down one list.

Below that, **Top Smart Search Combinations** shows the pairs of searches that most often fire together this month. Click one to open the matching interactions.

### Trend Analysis

Review match frequency over time to understand whether an issue is increasing, stable, or improving. Compare periods around known events, such as a training programme, a process change, or a new product launch, to see whether they changed the pattern.

On the Smart Search list, use **Sort By** to order your searches by **Results** (their match count), highest first. This shows which searches are triggering most often. A high count is worth a closer look. It may point to a widespread issue, or to a search that is too broad and needs tighter phrases.

### Action Planning

| What you are seeing | What to do about it | What you should see next |
|-----------------|--------------------|-------------------|
| **High frequency issues** | Process improvement, targeted training | Fewer repeat issues |
| **Agent-specific patterns** | Individual coaching, skill development | Improved performance |
| **Trending problems** | Review resourcing and escalate | Problems caught before they spread |
| **Positive patterns** | Share and recognise good practice | Good practice repeated across the team |

---

## Troubleshooting Common Issues

| **Problem** | **Cause** | **Solution** |
|-------------|----------|-------------|
| **Too many false positives** | Description or examples too broad | Tighten the description and use more specific examples. Review the false-positive matches to see what is triggering them |
| **Missing expected matches** | Description or examples too vague | Add another clear example or clarify the description. Check whether the search scope covers the relevant teams |
| **No matches at all** | Search not active, scope too narrow, or Historical Search not enabled | Verify the search status is Active. Confirm the scope covers the correct teams. Recreate the search with Historical Search enabled if past calls should be included |
| **Notifications not arriving** | Notifications not ticked on the search | Edit the search and tick **Notifications** |
| **New Smart Search is greyed out** | Your organisation has reached the number of Active searches its plan allows | Set a search you are not using to Inactive, which frees a place and keeps the search. Deleting one works too. For a higher limit, ask your Account Manager |
| **A linked search stopped matching** | Its main search was set to Inactive, so there is nothing for it to run against | Set the main search back to Active, or unlink the search |

---

## Search Management

Review your active Smart Searches regularly. For each one, check that it is still relevant, that its matches are being actioned, and that its phrases still reflect how customers and agents actually speak. Language drifts over time, so a phrase list that was accurate months ago may start producing false positives or missing new patterns.

Set a search to **Inactive** when it is no longer being acted upon. Alerts nobody works through make it harder for the team to spot those that matter.

### Edit or Delete a Search

Open a search from the Smart Search list to change its title, description, status, **Apply to** scope, example phrases, **Show results when** setting, and linked Knowledge Base document. **Historical Search cannot be added afterwards**, so a search that needs to cover past interactions has to be created with it enabled.

The same view has a **Delete Search** control for searches you no longer need. Setting a search to **Inactive** is enough to free a place under your plan's limit, which counts Active searches only, so delete a search when you want the definition gone rather than to make room.

:::note Your plan limits how many searches can be Active
When you reach the limit, **New Smart Search** is greyed out, and no message explains why. Set a search you are not using to **Inactive** to free a place while keeping it, or ask your Account Manager about a higher limit. Your allowance is under **Settings → Organisations**, where **show package details** lists the **Smart Search Limit**.
:::

To apply a working search to another team or department, create a new search with the same phrases and a different scope. Editing the scope of the existing one is possible, but it moves the monitoring rather than extending it, and the search does not go back over the new scope's earlier interactions.

---

## Check Your Work

A saved search appears in the Smart Search list immediately. Matches do not, and an empty result is the normal first state rather than a mistake.

Unless you turned on **Historical Search**, the search only monitors interactions processed from the moment you saved it, so it stays at zero results until new interactions arrive.

You are finished when the search shows a results count above zero and, opening one of those matches, the interaction genuinely contains what you meant to catch. Check that before trusting the count: a search that matches everything is as useless as one that never matches, and the fix for both is the phrase list rather than the scope.

If it stays at zero once new interactions have been processed, work through [Troubleshooting Common Issues](#troubleshooting-common-issues) above, starting with the search's status and scope.

---

## Related

- [Smart Detector](./smart-detector-overview.md): the home page these tools sit under, and what each one does
- [Manage Notifications](./features/notifications.md): receive and work through the alerts your searches raise
- [Review and Score Interactions](./features/quality-assurance-tools.md): turn matches into scored reviews
- [Monitor Agent Performance](./features/monitor-agent-performance.md): coach your team on what the searches surface
- [Build Your Knowledge Base](./knowledge-base-guide.md): give Vela your documents to sharpen matching
- [Smart Search Criteria](./reference/smart-search-criteria.md): every criterion type you can search on
- [Manage Smart Search Terms](./topics-and-terms-guide.md): build the term lists a search matches against

## Need Help?

**Contact Support:** support@botlhale.ai
