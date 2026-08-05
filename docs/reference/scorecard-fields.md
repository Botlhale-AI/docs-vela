---
id: scorecard-fields
title: Scorecard Fields
sidebar_position: 3
type: reference
---

# Scorecard Fields

Every field on an Agent Scorecard question. For how to build and use a scorecard, see [Review and Score Interactions](../features/quality-assurance-tools.md).

---

## Question Fields

| Field | Values | Default | What it does |
| :--- | :--- | :--- | :--- |
| **Question** | Free text | None | The behaviour being assessed, phrased so it can be answered yes or no |
| **Category** | Free text | None | A grouping label used to organise questions and to report strengths and weaknesses |
| **Weight** | Number | 1 | How much this question contributes to the overall score, relative to other questions |
| **Expected Outcome** | Yes / No | Yes | Which answer is the desired one. Set it to match how the question is phrased |
| **Search Type** | Automatic / Manual | Automatic | Whether the AI answers the question (Automatic) or a reviewer answers it by hand (Manual). A manual question stays N/A until someone sets an outcome |
| **Always Applicable** | Yes / No | No | Whether the question can be marked N/A. When No, the AI may answer N/A on interactions the question does not apply to. When Yes, only Yes or No are offered, so the question is always scored |
| **Auto-Fail** | On / Off | Off | When on, failing this question auto-fails the whole interaction. It then reads 0.0%, with the score earned on the other questions in brackets beside it |
| **Compliance Question** | On / Off | Off | Marks this as a compliance check rather than a quality one. Compliance items are scored separately |
| **Apply To** | Inbound / Outbound / All | All | Which call directions the question applies to |
| **Interactions** | Calls / Chats / All | All | Which interaction types the question applies to |

## Applicability

| Field | Values | Default | What it does |
| :--- | :--- | :--- | :--- |
| **Scope** | Organisation / Department / Team | Widest your access allows | Which parts of the organisation this question applies to |
| **Search Status** | Enabled / Disabled | Enabled | Whether the question is evaluated against incoming interactions. Smart Search calls the same setting Active / Inactive |
| **Historical Search** | On / Off | Off | Whether the question also runs against interactions already in Vela. When on, choose **All historical calls** or a **Specific date range**. This is set when you create the question and cannot be added by editing it afterwards |

## AI Context

| Field | Values | Default | What it does |
| :--- | :--- | :--- | :--- |
| **Apply Knowledge Base** | On / Off | Off | Whether the AI should use one of your documents as reference when answering |
| **Knowledge Base Document** | Document | None | The document to use. Required when Apply Knowledge Base is on |

Linking a Knowledge Base document lets the AI assess whether an agent followed *your* documented procedure, rather than a generic standard. See [Knowledge Base](../knowledge-base-guide.md).

---

## How the Score is Calculated

Each applicable question contributes its **weight** to the total possible score. A question answered in line with its **Expected Outcome** earns its weight. One that is not earns nothing.

Questions marked **N/A** are excluded from both the earned and possible totals, so marking something not applicable does not penalise the agent.

**Auto-Fail replaces the score with zero, and keeps the earned figure beside it.** If an Auto-Fail question fails, the interaction reads 0.0%, followed in brackets by the weighted result of all the other questions. You can see both that a critical requirement was missed and how the interaction performed otherwise. See [How Scoring Works](../explanation/how-scoring-works.md).

The overall score is reported alongside two subtotals, each with its own auto-fail flag:

- **Compliance score**: from questions marked as compliance items
- **Quality score**: from all remaining questions

Scores are also broken down by category, which is what produces an agent's strengths and weaknesses.

## Manual Overrides

A reviewer can change any outcome after the AI has scored it. The edited outcome takes precedence over the AI's for that question, and the score is recalculated.

Vela's original assessment stays on the record. The **Call Details** panel keeps **Initial Score**, **Initial Compliance Score**, and **Initial Quality Score** beside the current ones, and the scorecard download (**Download Scorecard as CSV**) lists **Initial Outcome** and **Current Outcome** for every question, along with the reason Vela gave.

## Editing and Deleting Questions

Open a question from the Agents Scorecard list to change its wording, category, weight, scope, and settings, or to delete it. **Historical Search cannot be added afterwards**, so a question that needs to cover past interactions has to be created with it enabled.

Deleting a question does not re-score interactions that were already scored against it. Their stored scores keep the question in the total, and there is no way to re-score an interaction that already has one. See [How Scoring Works](../explanation/how-scoring-works.md).

## Related

- [Glossary](./glossary.md): definitions of the terms above
- [Review and Score Interactions](../features/quality-assurance-tools.md): scoring interactions day to day
- [Set Up Smart Questions](../smart-questions-guide.md): asking questions that do not affect scores

---

## Need Help?

**Contact Support:** support@botlhale.ai
