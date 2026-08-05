---
sidebar_position: 0
title: Review and Score Interactions
type: how-to
---

# Review and Score Interactions
Vela analyses every customer interaction, so you review a full picture rather than a sample. This guide takes Team Leads and Administrators through reviewing interactions, scoring them, and giving agents feedback.

---

## Before You Begin

You need:

- **An interaction that has finished processing.** Vela analyses each call and chat after upload, and notifies you when the analysis is ready.
- **An active Agent Scorecard covering the agent's team.** Without one, the interaction has no scorecard to review or override. An administrator sets this up in [Administrator Setup](../getting-started/quick-start/administrator-setup.md). If the Scorecard tab is empty, see [Scorecard and Scoring Issues](../support/troubleshooting-guide.md#scorecard-and-scoring-issues).
- **An access level that covers the agent.** You see interactions for your team, your department, or the whole organisation, depending on the level an administrator gave you. See [Access Level](../reference/glossary.md#access-level).

---

## 1. Prioritise Interactions for Review

You do not have to work through every interaction by hand. Smart Search alerts, Dashboard metrics, and the interaction filters each narrow the list to the conversations that need your attention most. For how often to review and how much to cover, see [Daily and Weekly QA Workflows](../advanced/best-practices.md#daily-and-weekly-qa-workflows).

### A. Review Smart Search Alerts

Smart Searches automatically flag interactions based on your defined keywords and compliance terms. These should be your first priority.

1.  Navigate to **Smart Detector** → **Smart Search**.
2.  Review the flagged interactions for each search, such as those matching compliance terms, escalation phrases, or other defined keywords.
3.  Use **Sort By**, select **Results**, and choose **Descending** to bring the searches with the most matches to the top.

![The Smart Search list, with the results column and the Sort By control](../../img/screenshots/smart_search/10.png)

:::tip Cover your compliance terms first
A Smart Search checks every processed interaction, so compliance terms are the ones worth setting up before anything else. Nothing is sampled, and nothing is missed because a reviewer ran out of time.
:::

### B. Use Dashboard Metrics

The Dashboard highlights agents and teams that are underperforming.

1.  Go to the **Dashboard**.
2.  Check the **Agent Scores Distribution** to quickly identify agents with scores below your performance threshold.
3.  Check **Sentiment Distribution**, in the **Customer Sentiment** group, for a rising negative share, and **No. Alerts** for a high volume of Smart Search matches. Either can point to a problem that is systemic rather than individual.

![The Quality and Performance group, with average score per agent beside the red, amber and green call distribution](../../img/screenshots/dashboard/use_dashboard1.png)

![The Customer Sentiment group, showing the negative, neutral and positive split](../../img/screenshots/dashboard/use_dashboard.png)

### C. See Where Your Volume Is

Clicking **Interactions** in the sidebar opens a page with a **Calls** card and a **Chats** card, and an **Interactions Distribution** section below them. Set a date range there to see **Calls by Department** and **Chats by Department**, each showing the department, its total, its percentage of all interactions, and a daily average.

Read it before you decide where to spend review time. A department carrying most of your volume deserves proportionate review, and a channel that has grown since you last looked is usually where unreviewed interactions are piling up.

![The Interactions page, with the Calls and Chats cards above the Interactions Distribution tables for calls and chats by department](../../img/screenshots/calls/interactions-distribution.png)

### D. Filter Interactions Directly

Filter the list of all interactions to find specific examples based on performance data.

1.  Go to **Interactions** (Calls or Chats).
2.  Click **Filter** and set any of the options in the **Filter By** panel:
    * **Agent Score:** filter for a score range, for example the lowest performers.
    * **Agent, Team, or Department:** focus reviews on the people you are coaching.
    * **Reviewed:** show everything, only interactions already marked as reviewed, or only those still waiting for review.

![The Filter By panel for interactions, with the department, team and agent lists](../../img/screenshots/calls/filter_by1.png)

---

## 2. Review and Analyse the Interaction

Once you have selected an interaction, the **Detailed View** gives you everything you need to assess it.

### A. Open the Detailed View

1.  Open the interaction from one of the places that link to it:
    * The **Interactions** list, under Calls or Chats.
    * The **Returned Interactions** section of a Smart Search's results.
    * A **Notifications** entry, where an alert or a comment links to the interaction it came from.

    The Dashboard does not link to individual interactions. Use it to spot which agents or teams need attention, as in [Use Dashboard Metrics](#b-use-dashboard-metrics) above, then find their interactions from one of the routes here.

![The Interactions list, with the Compliance Score column added and the Filter, Sort By and Export controls above it](../../img/screenshots/calls/filter_by.png)

Before opening an interaction, the list view already gives you enough to prioritise:

* **Handle and silent time:** the length of the conversation and any significant silent gaps.
* **Agent, compliance, and quality scores:** the scores Vela assigned to the interaction. The compliance and quality scores split the scorecard into its compliance items and everything else. See [Quality and Scoring](../reference/metrics.md#quality-and-scoring).
* **Alerts:** how many Smart Search rules the interaction triggered.
* **Topic and tags:** what the conversation was about.

:::tip Choose your columns
Not every column is shown by default. Click the settings icon next to **Upload** on the Interactions list to choose which of these appear: Call ID, Date, Date Uploaded, Agent, Handle Time, Silent Time, Topic, Alerts, Compliance Score, Quality Score, Agent Score, Department, Team, and Tags.

Your choice is remembered in the browser you made it in, so it does not follow you to another machine. The Alerts column is available on plans that include Smart Search, so it does not appear on a [Lite](../reference/glossary.md#lite) edition.
:::

### B. Use the AI Analysis

Vela has already analysed the interaction by the time you open it. Its findings sit under the **Smart Detector** panel, one tab each, and reading them first tells you where to spend your attention.

| Tab | What it shows | What to look for |
| :--- | :--- | :--- |
| **Summary** | A recap of what happened and how it ended. | Whether the agent resolved what the customer came for, and whether the outcome was stated clearly before the conversation closed. |
| **Keywords** | Tracked terms that came up. | Whether your mandatory phrases were said, and whether products and policies were named correctly. |
| **Alerts** | Which Smart Searches this interaction matched. | Whether the flagged moment holds up once you read it in context. If a search keeps matching interactions it should not, tell your administrator so its phrases can be tightened. |
| **Intents** | What the customer came for, such as sales, a complaint, or support. | Whether the agent handled it as that kind of conversation, for example following the complaints process when the intent is a complaint. |
| **Sentiment** | The positive, neutral, and negative split for the conversation, shown for the agent and the customer separately. | A high negative share on the customer's side, and whether the agent's own tone held steady. Use the transcript timestamps to find where it turned. |
| **Scorecard** | How Vela scored the interaction against your Agent Scorecard. | Any item you would have judged differently. This is the tab where you override it, in [Score and Provide Feedback](#3-score-and-provide-feedback) below. |
| **Pain Points** | Signs of customer frustration. | Whether each frustration was acknowledged when it was raised, rather than left unanswered. |
| **Smart Questions** | The answers to any questions your organisation asks of every interaction for reporting. These carry no score. | Answers that change how you would coach, even though they do not move the score. This tab appears on plans that include [Smart Questions](../smart-questions-guide.md). |

The tab strip scrolls, so use the arrows at either end if a tab is out of view.

![The Detailed View, with the Smart Detector tabs across the analysis panel and the Call Details summary beside it](../../img/screenshots/calls/calls-3.png)

### C. Listen to the Call or Read the Chat

The player and the transcript are synchronised, so you can move between them freely.

1.  Listen to the **Audio** or read the **Chat Transcript**.
2.  Use the **Speed Adjustment** to review calls efficiently. Available rates are 0.5x, 0.75x, 1x, 1.25x, 1.5x, and 2x.
3.  Click a **timestamp** in the transcript to jump to that moment in the recording.
4.  Switch the transcript between **Original** and **English** when the conversation was not in English. Vela translates every interaction to English as it processes it.
5.  Focus on the agent's tone, active listening skills, and adherence to procedures.

Transcription covers all 11 official South African languages: Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho (Southern Sotho), Sepedi (Northern Sotho), Setswana, siSwati, Tshivenda, and Xitsonga. Speakers are separated automatically, so agent and customer turns are distinguishable in the transcript.

Chats carry the same analysis as calls. Vela reports average response time on them, in place of the measures that need call audio. See [Metrics](../reference/metrics.md).

---

## 3. Score and Provide Feedback

Your manual scorecard and comments are the core of the quality process, turning the analysis into coaching the agent can act on.

The **Automatic Scorecard** is Vela's own assessment, based on its analysis and your Knowledge Base. The **Manual Scorecard** is yours. Where the two differ, your outcome is the one that counts, and both stay visible so an agent can see which is which.

### A. Complete a Manual Scorecard

The Automatic Scorecard gives you a base score. You make the final judgement.

![The Scorecard tab on Manual view, with a question's outcome open on Yes, No and N/A](../../img/screenshots/calls/manual_scorecard.png)

1.  On the Detailed View, open the **Scorecard** tab in the Smart Detector panel.
2.  Switch **View** between **Automatic** and **Manual** to find the item you want to change.
3.  Click the **edit icon** (pencil) to enter edit mode.
4.  Set the **Outcome** for each item to **Yes**, **No**, or **N/A**, using your judgement.
    * **Be consistent:** Ensure your scoring aligns with the established quality standards and training.
    * **Be objective:** Base your score only on the evidence from the interaction and the defined criteria.
    * **N/A removes the question from the score** rather than counting it as a failure, so use it where the question did not apply to this conversation. The difference is large: see [How Scoring Works](../explanation/how-scoring-works.md) for a worked example.
5.  Click **Save Changes**.
    * Your edited outcome replaces the AI's for that item, and the score is recalculated.

The **Call Details** panel keeps **Initial Score**, **Initial Compliance Score**, and **Initial Quality Score** beside the current ones, so Vela's original assessment stays visible next to your override.

For the same record question by question, use the download icon on the Scorecard tab (**Download Scorecard as CSV**). The file lists each question with its **Initial Outcome**, **Current Outcome**, weight, score, and the reason Vela gave, which is what you need when an agent disputes a score.

### B. Comment to Coach

Add specific, time-stamped feedback to make coaching clear and concrete.

1.  Open **Comments** on the interaction.
2.  Add your comment. Remember the best practices:
    * **Be specific:** "At 1:45, you missed the required closing statement."
    * **Be constructive:** "Try to summarise the solution before ending the call next time."
    * **Tag the agent:** type `@` and pick them from the list. Without the tag the comment stays visible to team leads only.
3.  The agent can read and respond to your comments in their Agent Portal.

:::warning A posted comment is final
Comments cannot be edited or deleted once sent. Read yours back before clicking **Send**, particularly where you have tagged the agent. The delete icon beside the reply box clears what you have typed, not a comment already posted.
:::

![The comment box with an @ mention being selected, and the Send button](../../img/screenshots/settings/@agent.png)

---

## 4. Finalise the QA Workflow and Coach

Your QA process is complete when the interaction is scored and the next steps are planned.

### A. Track Review Status

Mark the interaction's review status to keep your team's QA process clear.

* Click **Mark as Reviewed** to record that you have finished assessing this interaction. This drives the **Reviewed** filter on the Interactions list and the reviewed-interaction metrics on your Dashboard, so your team can see review coverage at a glance. See [Review Progress](../reference/metrics.md#review-progress).
* If follow-up is needed, add coaching comments for the agent.

:::note Reviewing can be what releases the interaction to the agent
Organisations using the Coaching Portal choose, under **Coaching → Preferences → Agent View Permissions**, whether agents see all their interactions or only the reviewed ones. Where it is set to reviewed only, an agent sees nothing of a conversation until someone marks it as reviewed, so an unreviewed backlog is invisible coaching.
:::

![The Detailed View header, with Review Redacted Info and Mark as Reviewed](../../img/screenshots/calls/mark_reviewed.png)

### B. Plan Next Steps

Use the analysis to inform your coaching strategy.

1.  Review all the agent's recent scorecards and comments.
2.  Look for **consistent patterns** in low-scoring areas across the agent's recent scorecard results.
3.  Click **Coaching** in the left sidebar. It appears only where your organisation has the Coaching Portal enabled.
4.  **Assign targeted training courses** that specifically address the identified skill gaps.
5.  **Schedule a coaching discussion** with the agent to review the feedback and performance trend.

Worked through end to end, this leaves every reviewed interaction scored, the reasoning recorded in comments the agent can read, and a next step agreed with them.

---

## Related

- [Set Up Smart Search](../smart-search-guide.md): build the searches that flag interactions for review
- [Monitor Agent Performance](./monitor-agent-performance.md): track how an agent's scores move over time
- [Scorecard Fields](../reference/scorecard-fields.md): every field on a scorecard question
- [How Scoring Works](../explanation/how-scoring-works.md): how weights, auto-fail, and overrides produce the score
- [Troubleshooting: Scorecard and Scoring Issues](../support/troubleshooting-guide.md#scorecard-and-scoring-issues): a missing scorecard, a score that looks wrong, or criteria changes that did not apply

## Need Help?

**Contact Support:** support@botlhale.ai