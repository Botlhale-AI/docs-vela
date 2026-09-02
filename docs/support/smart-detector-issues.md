---
id: smart-detector-issues
title: Smart Detector Issues
description: "Fix a missing or incorrect score, and a Smart Search that matches too much or too little."
sidebar_position: 2
type: troubleshooting
---

# Smart Detector Issues

Problems with the Agent Scorecard and Smart Search: a missing or incorrect score, and searches that match too much, too little, or not at all.

For upload, processing, and platform problems, see [General Issues](./troubleshooting-guide.md). For interactions sent from your own systems through the API, see [Integration Problems](./integration-troubleshooting.md).

If this guide does not resolve your issue, see [Need Help?](#need-help) at the end of this page.

---

## Start Here

Find your symptom, rather than reading from the top.

| What you are seeing | Where to look |
| :--- | :--- |
| An interaction has no score, or nothing appears on its Scorecard tab | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| A score looks wrong, or reads `0.0%` with a figure in brackets | [Scorecard and Scoring Issues](#scorecard-and-scoring-issues) |
| A Smart Search matches nothing, matches too much, or cannot be created | [Smart Search and Alert Issues](#smart-search-and-alert-issues) |

One symptom is worth naming, because it looks like a fault rather than normal behaviour:

- **A score of `0.0%` with a higher figure in brackets.** The interaction auto-failed. The bracketed figure is what it earned otherwise. See [Scorecard and Scoring Issues](#scorecard-and-scoring-issues).

---

## Scorecard and Scoring Issues

**Problem:** An agent's score appears incorrect or seems to miss context from the conversation.

**Cause:** The AI scores against your organisation's Agent Scorecard, reading the transcript alone. Its answer can differ from yours where:

- The agent said the right thing in another language, or in words the AI did not match.
- The agent said the right thing using a local expression.
- The call was resolved in a way the transcript alone does not show.

**Solution:**
Override the individual scorecard items you disagree with. Your edited outcome takes precedence over the AI's, and the score is recalculated.

See [Complete a Manual Scorecard](../features/quality-assurance-tools.md#a-complete-a-manual-scorecard) for the full steps.

---

**Problem:** An interaction has no score, or nothing appears on its **Scorecard** tab.

**Cause:** No scorecard question is scoped to the team or department this agent belongs to, so there was nothing to score the interaction against.

**Solution:**
1. Ask your administrator to open **Smart Detector → Agents Scorecard** and confirm that questions exist with **Search Status** set to Enabled.
2. Check the scope of the scorecard. It must cover the department or team the agent belongs to, and its **Interactions** setting must match the channel: a scorecard set to Chats never scores a call.
3. Once a scorecard is active, newly processed calls are scored automatically. It does not reach back over calls already processed unless it was created with Historical Search on. See [Build an Agent Scorecard](../agent-scorecard-guide.md).

---

**Problem:** A newly added scorecard question does not appear on interactions that were already scored.

**Cause:** Which questions an interaction was scored against is fixed when it is processed. A question added afterwards is not applied to it.

**Solution:**
1. Accept the gap and start the new measurement from the date you added the question. This is usually the right choice.
2. If an older interaction must be scored against it, upload the recording again so it is processed from scratch. That leaves two interactions for one conversation, so delete the earlier copy if you do not want duplicates.
3. For a large number of interactions, contact **support@botlhale.ai**.

:::note Editing a question is different from adding one
Editing an existing question's **weight**, **Auto-Fail**, **Compliance**, or **Expected Outcome** does apply backwards. Interactions already scored against that question are re-scored from the current settings the next time you open them, including their **Initial** scores. See [How Scoring Works](../explanation/how-scoring-works.md).
:::

The **Rerun Scorecard** button, on the **Scorecard** tab in **Automatic** view, is a separate case. It appears only when an interaction has no automatic scorecard yet, for example because none covered it when it was processed. It does not re-score an interaction that already has a score, and it is not available to agents.

---

**Problem:** An interaction shows a score of 0.0%, with a different percentage in brackets beside it.

**Cause:** The interaction failed a question marked **Auto-Fail**, which fails the whole interaction whatever else went well. The bracketed figure is the score earned on every other question.

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
3. Review the phrases in your search. Very specific phrasing may not match the exact wording used in recorded calls. Add variations and synonyms to improve coverage.
4. Confirm the interactions you expect to match were uploaded after the search was created. A search only applies to earlier interactions if **Historical Search** was enabled when it was created.

---

**Problem:** A Smart Search is producing too many results, many of which are irrelevant.

**Cause:** The search phrases are too broad or too common, matching unrelated conversations.

**Solution:**
1. Edit the search and make the phrases more specific. For example, replace a generic word like "problem" with a more precise phrase like "I want to cancel my account".
2. Review false-positive matches to identify what language is triggering them, and refine accordingly.

---

**Problem:** In-app notifications are not arriving for Smart Search matches.

**Cause:** The notification option was not enabled when the search was created.

**Solution:**
Open the Smart Search and confirm its **Notifications** setting is on. You can change this at any time by editing the search. Matches still appear in the search results view regardless of the notification setting.

---

**Problem:** Alerts are accumulating faster than the team can review them.

**Cause:** Too many Smart Searches are active, or the searches are too broad, generating a high volume of matches.

**Solution:**
1. Review all active Smart Searches and deactivate any that are no longer relevant.
2. Tighten the phrasing in searches that generate excessive matches.
3. Prioritise work by sorting the Smart Search list by **Results** in descending order, and addressing the searches generating the most matches first.

---

**Problem:** **New Smart Search** is greyed out and cannot be selected.

**Cause:** Your organisation has reached the number of **Active** searches its plan allows, which is five unless your plan sets another number.

**Solution:**
1. Check your allowance under **Settings → Organisations → This Org**, where **Show package details** lists the **Smart Search Limit**.
2. Set a search you are not using to **Inactive**. Only Active searches count towards the limit, so deactivating one frees a place immediately and keeps the search for later. Deleting works too, and you lose the definition.
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
