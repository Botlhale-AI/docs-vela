---
id: best-practices
title: Best Practices
description: "What to do at each stage, from first setup to running QA every day."
sidebar_position: 1
type: explanation
---

# Best Practices

What to do at each stage of running QA in Vela. Start from the section you need.

| If you are | Go to |
| :--- | :--- |
| Setting Vela up | [1. Setting Up](#1-setting-up) |
| Running QA each day | [2. Running QA](#2-running-qa) |
| Coaching from scores | [3. Coaching](#3-coaching) |
| Loading historical calls | [4. Bulk Upload](#4-bulk-upload) |
| Sending figures to other people | [5. Reports](#5-reports) |
| Keeping a working setup healthy | [6. Maintenance](#6-maintenance) |

---

## 1. Setting Up

Build in this order. Each step needs the one before it.

```mermaid
flowchart LR
    D("Departments") --> T("Teams")
    T --> U("Users and agents")
    U --> S("Scorecard")
    S --> M("Smart Searches")
    M --> UP("First upload")
```

| Step | Do this | Because |
| :--- | :--- | :--- |
| **Departments and teams** | Mirror your real reporting lines, and give every team a real name | Team leads see only their own teams. A team called "Other" makes its data meaningless |
| **Scorecard** | Build it before the first upload | Interactions are scored as they arrive. Questions added later apply to new interactions only |
| **Smart Searches** | Build your compliance searches before the first upload, and spend your allowance on those first | A search matches interactions that arrive after it. Your plan allows five **Active** searches unless it sets another number, and at the limit **New Smart Search** greys out with nothing to say why. Set one to **Inactive** to free a place and keep it |

:::caution Historical Search is set once
To cover interactions already in Vela, turn on **Historical Search** as you create the search. The option appears only while you create it, so a search built without it can never be given it later.
:::

### Writing Scorecard Questions

Write questions that a reviewer and the AI answer the same way.

| Write this | Rather than this |
| :--- | :--- |
| Did the agent verify the customer's identity before proceeding? | Was the agent professional? |
| Did the agent state the cancellation notice period? | Did the agent explain the policy well? |
| If the customer disputed the charge, did the agent explain the dispute process? | Did the agent handle the dispute? |

Seven rules cover the rest:

1. **Ask whether the right thing happened**, and set **Expected Outcome** to **Yes**. Scoring is more accurate this way, even where your internal scorecard is written in the negative.
2. **Name the action.** "Verify identity" is in the transcript. "Professional" is a judgement that moves between reviewers.
3. **Say when a question applies**, so the AI answers N/A on the calls it does not cover.
4. **Group questions into categories**, such as Opening, Compliance, Handling, and Closing.
5. **Weight categories against each other.** There is no outside scale, so what counts is the balance across your own questions.
6. **Use Auto-Fail only where one failure fails the whole interaction**, such as a missed regulatory disclosure.
7. **Build a separate scorecard for each set of procedures.** Inbound support and outbound sales need different questions, and one scorecard covering both produces scores nobody can act on.


---

## 2. Running QA

### Every day

1. **Start with your unresolved alerts.** Vela has already flagged these against your own searches, so they are a better use of the first hour than sampling the call list.
2. **Sort Smart Searches by Results, descending.** The top search is triggering most, which usually points at a problem across the team rather than one agent.
3. **Check the Dashboard for movement.** Look for falling scores and for **Sentiment Distribution in Interactions** turning negative.
4. **Close the loop on every interaction you open.** Comment, tag the agent with an @ mention, mark as reviewed.

Step 4 is the one to protect when the day gets busy. An interaction marked reviewed with no comment is a QA record with no coaching in it, and the agent learns nothing from the time you spent.

### Every week

| Check | What it tells you |
| :--- | :--- |
| Team average against last week | Whether the team is improving or slipping |
| Alert volume, up or down | Whether a launch, process change, or training explains it |
| Widest gaps between automatic and manual scores | Where the gap follows one question, the wording needs work. Where it follows one agent, their calls need human judgement |
| One search triggering for the same agent | A pattern worth a conversation rather than more alerts |

Read three or four weeks before acting. One week up or down is usually normal movement.

---

## 3. Coaching

| Do this | Instead of |
| :--- | :--- |
| "When the customer asked about cancellation, the notice period was left out. The procedure requires you to confirm it." | "You weren't very clear" |
| Comment within a day of the call | Comment at the end of the month |
| Tag the agent with an @ mention | Leaving the comment untagged |
| Recognise a call that went well | Commenting only on failures |

An untagged comment raises no notification, so the agent may never read it.

Two rules decide whether coaching lands:

1. **Coach patterns, not incidents.** One failed question on one call is often an unusual call. The same question failed across five of the last ten calls is a skill gap.
2. **Override a score only where the AI missed something a person can hear**, and record why in a comment.

The overrides worth making are these:

- The agent said the right thing in another language, or in words the AI did not match.
- The agent said the right thing using a local expression.
- The call was resolved in a way the transcript alone does not show.

Overrides that all move the same way point at scorecard wording that needs fixing, rather than at scores that need lifting.

### Where Coaching is enabled

Coaching is an add-on with its own documentation. Two decisions there affect the QA work on this page:

- **Build a course around the gap**, and set the score range that assigns it. Courses reach agents by score rather than by name.
- **Decide what agents see before you invite them**, because changing it later changes what they have already seen.

See the [Coaching Portal documentation](https://docs-coaching.botlhale.xyz) for both.

---

## 4. Bulk Upload

The steps are in [Upload Your Data](../data-upload.md). This is what makes a large load go well.

1. **Test five to ten files first.** Checking the format, agent names, teams, and departments on a small batch takes minutes. Finding a systematic error after thousands of files means uploading them again.
2. **Build the CSV from the downloaded template.** Column name mismatches cause most bulk failures.
3. **Match `agent_name`, `team`, and `department` to records that already exist.** Use the agent's name as it appears on their record, rather than a username such as `john.smith`. Vela drops values it cannot match, and the interaction is then linked to no agent.
4. **Upload outside busy hours**, and keep the page open until the batch finishes.
5. **Keep the source audio** until the results screen is clean, then archive it under your organisation's retention policy.
6. **Read the results screen the same day.** A failure is easier to explain today than in two weeks.

---

## 5. Reports

| Do this | Because |
| :--- | :--- |
| Schedule a report to land before the meeting that uses it | People read it beforehand rather than for the first time in the room |
| Send figures with a sentence of context | A score on its own reads as a warning rather than as coaching |
| Remove reports nobody acts on | A few reports people use are worth more than a library nobody opens |

---

## 6. Maintenance

| Review | How often | Look for |
| :--- | :--- | :--- |
| Scorecard | Quarterly, and after any procedure change | Questions that no longer match how the work is done |
| Smart Searches | Monthly | Searches nobody acts on, and phrase lists that have fallen behind how customers speak |
| User access | Twice a year, and after any team change | People who changed teams and kept their old access, and accounts of people who have left |

Note the date whenever you change a scorecard. Trends that cross that date need reading with the change in mind.

Deactivate a Smart Search before deleting it. A short spell inactive confirms nobody relied on it.

---

## Related

- [Administrator Setup](../getting-started/quick-start/administrator-setup.md): the setup steps themselves
- [Build an Agent Scorecard](../agent-scorecard-guide.md): building and editing questions
- [Set Up Smart Search](../smart-search-guide.md): building and managing searches
- [Review and Score Interactions](../features/quality-assurance-tools.md): the daily review workflow
- [General Issues](../support/troubleshooting-guide.md): fixing what goes wrong

---

## Need Help?

**Contact Support:** support@botlhale.ai
