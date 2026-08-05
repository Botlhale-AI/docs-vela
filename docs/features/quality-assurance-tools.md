---
sidebar_position: 0
title: Review and Score Interactions
type: how-to
---

# Review and Score Interactions
Vela analyses every customer interaction, so you review a full picture rather than a sample. This guide takes Team Leads and Administrators through reviewing interactions, scoring them, and giving agents feedback.

---

## 1. Prioritise Interactions for Review

Instead of manually reviewing every interaction, use Vela's built-in intelligence to focus on conversations that need your attention most.

### A. Review Smart Search Alerts

Smart Searches automatically flag interactions based on your defined keywords and compliance terms. These should be your first priority.

1.  Navigate to **Smart Detector** → **Smart Search**.
2.  Review the flagged interactions for each search, such as those matching compliance terms, escalation phrases, or other defined keywords.
3.  Use **Sort By**, select **results**, and choose **Descending** to bring the searches with the most matches to the top.

![The Smart Search list, with the results column and the Sort By control](../../img/screenshots/smart_search/10.png)

:::tip Cover your compliance terms first
A Smart Search checks every processed interaction, so compliance terms are the ones worth setting up before anything else. Nothing is sampled, and nothing is missed because a reviewer ran out of time.
:::

### B. Use Dashboard Metrics

The Dashboard highlights agents and teams that are underperforming.

1.  Go to the **Dashboard**.
2.  Check the **Agent Scores Distribution** to quickly identify agents with scores below your performance threshold.
3.  Look for a high volume of **No. Alerts** or **Negative Sentiment Spikes** that could indicate systemic issues.

![The Quality and Performance group, with average score per agent beside the red, amber and green call distribution](../../img/screenshots/dashboard/use_dashboard1.png)

![The Customer Sentiment group, showing the negative, neutral and positive split](../../img/screenshots/dashboard/use_dashboard.png)

### C. Filter Interactions Directly

Filter the list of all interactions to find specific examples based on performance data.

1.  Go to **Interactions** (Calls or Chats).
2.  Click **Filter** and set any of the options in the **Filter By** panel:
    * **Agent Score:** filter for a score range, for example the lowest performers.
    * **Agent, Team, or Department:** focus reviews on the people you are coaching.
    * **Reviewed:** show only interactions you have not reviewed yet.

![The Filter By panel for interactions, with the department, team and agent lists](../../img/screenshots/calls/filter_by1.png)

---

## 2. Review and Analyse the Interaction

Once you have selected an interaction, the Interaction Detail View gives you everything you need to assess it.

### A. Access the Detail View

1.  Open the interaction from one of the places that link to it:
    * The **Interactions** list, under Calls or Chats.
    * The **Returned Interactions** section of a Smart Search's results.
    * A **Notifications** entry, where an alert or a comment links to the interaction it came from.

    The Dashboard does not link to individual interactions. Use it to spot which agents or teams need attention, as in section B above, then find their interactions from one of the routes here.

![The Interactions list, with the Compliance Score column added and the Filter, Sort By and Export controls above it](../../img/screenshots/calls/filter_by.png)

Before opening an interaction, the list view already gives you enough to prioritise:

* **Handle and silent time:** the length of the conversation and any significant silent gaps.
* **Agent, compliance, and quality scores:** the scores Vela assigned to the interaction.
* **Alerts:** how many Smart Search rules the interaction triggered.
* **Topic and tags:** what the conversation was about.

:::tip Choose your columns
Not every column is shown by default. Click the settings icon next to **Upload** on the Interactions list to choose which of these appear: Call ID, Date, Date Uploaded, Agent, Handle Time, Silent Time, Topic, Alerts, Compliance Score, Quality Score, Agent Score, Department, Team, and Tags.

Your choice is remembered in the browser you made it in, so it does not follow you to another machine. The Alerts column is available on plans that include Smart Search.
:::

### B. Use the AI Analysis

Vela has already analysed the interaction by the time you open it. Its findings sit under the **Smart Detector** panel, one tab each, and reading them first tells you where to spend your attention.

| Tab | What it shows | What to look for |
| :--- | :--- | :--- |
| **Summary** | A recap of what happened and how it ended. | Did the agent address the main issue? Was the resolution captured? |
| **Sentiment** | How the customer's mood moved through the conversation. | Did the agent improve it, or did it worsen? Where did it shift? |
| **Pain Points** | Signs of customer frustration. | Did the agent address the difficulty that was raised? |
| **Keywords** | Tracked terms that came up. | Were the mandatory phrases used? Were product terms right? |
| **Intents** | What the customer came for, such as sales, a complaint, or support. | Did the agent match their approach to it? |
| **Alerts** | Which Smart Searches this interaction matched. | Is the match genuine, or is the search too broad? |

![The Interaction Detail View, with the Smart Detector tabs across the analysis panel and the Call Details summary beside it](../../img/screenshots/calls/calls-3.png)

### C. Listen to the Call or Read the Chat

The player and the transcript are synchronised, so you can move between them freely.

1.  Listen to the **Audio** or read the **Chat Transcript**.
2.  Use the **Speed Adjustment** to review calls efficiently. Available rates are 0.5x, 0.75x, 1x, 1.25x, 1.5x, and 2x.
3.  Click a **timestamp** in the transcript to jump to that moment in the recording.
4.  Focus on the agent's tone, active listening skills, and adherence to procedures.

Transcription covers all 11 official South African languages: Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho (Southern Sotho), Sepedi (Northern Sotho), Setswana, siSwati, Tshivenda, and Xitsonga. Speakers are separated automatically, so agent and customer turns are distinguishable in the transcript.

---

## 3. Score and Provide Feedback

Your manual scorecard and comments are the core of the quality process, turning the analysis into coaching the agent can act on.

### A. Complete a Manual Scorecard

The Automatic Scorecard provides a base score, but your expertise is required for the final evaluation.

![The Scorecard tab on Manual view, with a question's outcome open on Yes, No and N/A](../../img/screenshots/calls/manual_scorecard.png)

1.  On the Interaction Detail View, locate the **Scorecard** section.
2.  Switch **View** between **Automatic** and **Manual** to find the item you want to change.
3.  Click the **edit icon** (pencil) to enter edit mode.
4.  Set the **Current Outcome** for each item to **Yes**, **No**, or **N/A**, using your judgement.
    * **Be consistent:** Ensure your scoring aligns with the established quality standards and training.
    * **Be objective:** Base your score only on the evidence from the interaction and the defined criteria.
5.  Click **Save Changes**.
    * Your edited outcome replaces the AI's for that item, and the score is recalculated.

The table shows **Initial Outcome** alongside **Current Outcome**, so the AI's original assessment remains visible next to your override.

### B. Comment to Coach

Add specific, time-stamped feedback to make coaching clear and concrete.

1.  Open **Comments** on the interaction.
2.  Add your comment. Remember the best practices:
    * **Be specific:** "At 1:45, you missed the required closing statement".
    * **Be constructive:** "Try to summarise the solution before ending the call next time".
    * **Tag the agent:** type `@` and pick them from the list. Without the tag the comment stays visible to team leads only.
3.  The agent can read and respond to your comments in their Agent Portal.

![The comment box with an @ mention being selected, and the Send button](../../img/screenshots/settings/@agent.png)

:::info
**Tip: Manual Scorecard vs. Automatic Scorecard**

The **Automatic Scorecard** is based purely on Vela AI analysis and your Knowledge Base. The **Manual Scorecard** uses your human judgement to interpret the conversation context, and this score takes precedence over the AI's assessment.
:::

---

## 4. Finalise the QA Workflow and Coach

Your QA process is complete when the interaction is scored and the next steps are planned.

### A. Track Review Status

Mark the interaction's review status to keep your team's QA process clear.

* Click **Mark as Reviewed** to record that you have finished assessing this interaction.
* If follow-up is needed, add coaching comments for the agent.

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

## Need Help?

**Contact Support:** support@botlhale.ai