---
id: smart-detector-issues
title: Smart Detector Issues
description: "Fix a missing or incorrect score, and a Smart Search that matches too much or too little."
sidebar_position: 2
type: troubleshooting
---

# Smart Detector Issues

Fixes for problems with the Agent Scorecard and Smart Search, such as a missing or incorrect score, or a search that matches too much, too little, or nothing at all.

For upload, processing, and platform problems, see [General Issues](./troubleshooting-guide.md). For interactions sent from your own systems through the API, see [Integration Problems](./integration-troubleshooting.md).

If this guide does not resolve your issue, see [Need Help?](#need-help) at the end of this page.

---

## Start Here

Find your symptom, rather than reading from the top.

| What you are seeing | Where to look |
| :--- | :--- |
| A score looks wrong, or misses context from the conversation | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| An interaction has no score, or nothing appears on its **Scorecard** tab | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| A new scorecard question is missing from interactions already scored | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| The **Create** tab on **Smart Detector → Agents Scorecard** is greyed out | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| A score changed when nothing on the scorecard was edited | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| A score reads `0.0%` with a figure in brackets | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| A Smart Search matches nothing | [Smart Search and Alert Issues](#smart-search-and-alert-issues) |
| A Smart Search matches too much | [Smart Search and Alert Issues](#smart-search-and-alert-issues) |
| In-app notifications for Smart Search matches are missing | [Smart Search and Alert Issues](#smart-search-and-alert-issues) |
| Alerts arrive faster than the team can review them | [Smart Search and Alert Issues](#smart-search-and-alert-issues) |
| **New Smart Search** is greyed out | [Smart Search and Alert Issues](#smart-search-and-alert-issues) |

---

## Scorecard and Scoring Issues

**Problem:** An agent's score appears incorrect or seems to miss context from the conversation.

**Cause:** The AI scores against your organisation's Agent Scorecard, reading the transcript alone. Its answer can differ from yours where:

- The agent said the right thing in another language, or in words the AI did not match.
- The agent said the right thing using a local expression.
- The call was resolved in a way the transcript alone does not show.

**Solution:**
1. Override the individual scorecard questions you disagree with. Your edited outcome takes precedence over the AI's, and the score is recalculated. See [Score or Override the Scorecard](../features/quality-assurance-tools.md#a-score-or-override-the-scorecard) for the full steps.

---

**Problem:** An interaction has no score, or nothing appears on its **Scorecard** tab.

**Cause:** No scorecard question applied to this interaction when it was processed, for one of these reasons:

- No question's scope covers the agent's team or department.
- No question's **Interactions** setting covers this channel.
- No question's **Apply To** covers the call's direction.
- The questions were added after the interaction was processed.

**Solution:**
1. Ask your administrator to open **Smart Detector → Agents Scorecard** and confirm that questions exist with **Search Status** set to Enabled.
2. Check each question's scope. It must cover the department or team the agent belongs to, and its **Interactions** setting must match the channel: a question set to Chats never scores a call. Its **Apply To** must cover the call's direction: a question set to Outbound Calls never scores an inbound call.
3. Once a question covers the interaction, open the interaction and select **Rerun Scorecard** on its **Scorecard** tab, in **Automatic** view. The button appears where the interaction has no automatic scorecard yet, and scores it against your questions as they stand today.
4. A new question scores newly processed interactions automatically. It reaches interactions that already have a score when it was created with **Historical Search** on. For the other routes, see the next problem. See [Build an Agent Scorecard](../agent-scorecard-guide.md).
5. If a question covers the interaction and it still has no score, contact **support@botlhale.ai**.

---

**Problem:** A newly added scorecard question does not appear on interactions that were already scored.

**Cause:** The questions an interaction is scored against are set when it is processed. A question added afterwards reaches it in only two cases. The question was created with **Historical Search** on, or the interaction is later reassigned to a different agent, which rescores it against your current questions.

**Solution:**
1. Accept the gap and start the new measurement from the date you added the question. This is usually the right choice.
2. If you have not yet created the question, create it with **Historical Search** on. Vela adds it to the existing interactions in its scope and date range and recalculates their scores, without creating duplicates. A question already saved without it cannot be given it later.
3. Otherwise, if an older interaction must be scored against it, upload the recording again so it is processed from scratch. That leaves two interactions for one conversation, so delete the earlier copy if you do not want duplicates.
4. For a large number of interactions, contact **support@botlhale.ai**.

**Rerun Scorecard** runs only on an interaction with no automatic scorecard yet, so it does not add a new question to a scored one. It is not available to agents.

:::note Editing a question is different from adding one
Editing an existing question's **weight**, **Auto-Fail**, or **Compliance Question** setting updates the **Compliance Score**, **Quality Score**, and **Initial** scores in the Call Details panel straight away, and the Coaching Dashboard where your organisation uses Coaching. The **Agent Score**, the Vela Dashboard, and the table on **Agents → Performance** take the new settings when the interaction is next scored. Changing **Expected Outcome** does not alter past AI answers. See [How Scoring Works](../explanation/how-scoring-works.md#changing-a-scorecard-after-interactions-are-scored).
:::

---

**Problem:** The **Create** tab on **Smart Detector → Agents Scorecard** is greyed out.

**Cause:** Your organisation has reached the number of enabled scorecard questions its plan allows, which is five unless your plan sets another number. Only questions with **Search Status** set to Enabled count.

**Solution:**
1. Check your allowance under **Settings → Organisations → This Org**, where **show package details** lists the **Agent Scorecard Limit**. A 0 means your plan has no custom limit, so the standard limit of five applies.
2. Disable or delete a question you no longer need to free a place.
3. If you need more, ask your Account Manager about upgrading your plan for a higher limit.

---

**Problem:** An interaction's score changed after nothing was edited on the scorecard.

**Cause:** Reassigning the agent on an interaction (the **Edit** control beside the agent's name in **Call Details**) sends the interaction back to the AI. It is scored again against your questions as they stand today, and every answer is replaced, including reviewer overrides.

**Solution:**
1. Check whether the interaction was recently reassigned to a different agent, in **Call Details**. When the rescoring finishes, Vela emails you with the subject "Checklist Search Complete" and the heading **Checklist Scoring is complete**, so search your inbox for "Checklist" to find it.
2. If so, the new score reflects your current scorecard and fresh AI answers. **Initial Score** now shows the new AI answers too, and any reviewer overrides were cleared.
3. Reassign only to correct a genuine misassignment, because it replaces every answer. Then check the score and set any overrides again.
4. If it was not reassigned, contact **support@botlhale.ai**.

---

**Problem:** An interaction shows a score of 0.0%, with a different percentage in brackets beside it.

**Cause:** The interaction failed a question marked **Auto-Fail**, which fails the whole interaction whatever else went well. The bracketed figure is the score without the auto-fail rule, with the failed question still counted at zero.

**Solution:**
1. Open the **Scorecard** tab to see which Auto-Fail question failed.
2. Read the bracketed figure when coaching. An agent who scored `0.0% (90.0%)` did good work and missed one critical step.
3. If interactions are auto-failing more often than you expect, review which questions have Auto-Fail enabled. It is meant for critical compliance breaches rather than quality issues.

This is working as configured, not a scoring error. See [How Scoring Works](../explanation/how-scoring-works.md).

---

## Smart Search and Alert Issues

**Problem:** A Smart Search is not producing any matches, even though you expect it to.

**Cause:** The search may not be active, the scope may not cover the relevant teams, or the search was created without the Historical Search option, so it only applies to future uploads.

**Solution:**
1. Navigate to **Smart Detector → Smart Search** and confirm the search status is **Active**.
2. Check the scope setting. A search scoped to one team does not match interactions from other teams.
3. Review the phrases in your search. Very specific phrasing can miss the other ways customers say the same thing. Add a few more example phrases in their words.
4. Confirm the interactions you expect to match were uploaded after the search was created. A search only applies to earlier interactions if **Historical Search** was enabled when it was created.
5. If all four check out and the search still matches nothing you expect, contact **support@botlhale.ai**.

---

**Problem:** A Smart Search is producing too many results, many of which are irrelevant.

**Cause:** The search phrases are too broad or too common, matching unrelated conversations.

**Solution:**
1. Edit the search and make the phrases more specific. For example, replace a generic word like "problem" with a more precise phrase like "I want to cancel my account".
2. Read a few matches that do not belong, find the wording that triggered them, and adjust your phrases.

---

**Problem:** In-app notifications are not arriving for Smart Search matches.

**Cause:** The search's **Notifications** setting is off, or **New Alerts Detected** is not ticked in your **Settings → Notifications**. Both have to be on.

**Solution:**
1. Open the Smart Search and confirm its **Notifications** setting is on. You can change it at any time by editing the search.
2. Confirm **New Alerts Detected** is ticked in **Settings → Notifications**.
3. If both are on and notifications still do not arrive, contact **support@botlhale.ai**.

Matches appear in the search results view whatever the notification settings.

---

**Problem:** Alerts are accumulating faster than the team can review them.

**Cause:** Too many Smart Searches are active, or the searches are too broad, generating a high volume of matches.

**Solution:**
1. Review all active Smart Searches and set any you no longer need to **Inactive**.
2. Tighten the phrasing in searches that generate excessive matches.
3. Prioritise work by sorting the Smart Search list by **Results** in descending order, and addressing the searches generating the most matches first.

---

**Problem:** **New Smart Search** is greyed out and cannot be selected.

**Cause:** Your organisation has reached the number of active searches its plan allows, which is five unless your plan sets another number. Only searches set to **Active** count towards the limit.

**Solution:**
1. Check your allowance under **Settings → Organisations → This Org**, where **show package details** lists the **Smart Search Limit**. A 0 means your plan has no custom limit, so the standard limit of five applies.
2. Set a search you no longer need to **Inactive**, or delete it. Either one frees a place.
3. If you need more, ask your Account Manager about upgrading your plan for a higher limit.

---

## Related

- [Build an Agent Scorecard](../agent-scorecard-guide.md): build or activate the scorecard these entries assume exists
- [Set Up Smart Search](../smart-search-guide.md): create and tune the searches these entries assume exist
- [General Issues](./troubleshooting-guide.md): platform-wide problems, including uploads and processing
- [Integration Problems](./integration-troubleshooting.md): problems with interactions sent through the API

## Need Help?

If this guide does not resolve your issue, contact **support@botlhale.ai**. Include:

- Browser type and version
- Operating system
- A clear description of the issue and the steps that led to it
- Screenshots or any error messages displayed on screen
