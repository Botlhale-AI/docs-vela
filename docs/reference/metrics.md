---
id: metrics
title: Metrics
description: "Look up what each Dashboard and report metric measures."
sidebar_position: 2
type: reference
---

# Metrics
The metrics available on your Dashboard and in Reports. Use this page to look up what a metric means. To build a dashboard or a report, see [Monitor Agent Performance](../features/monitor-agent-performance.md) and [Generate Reports](../features/custom-reporting.md).

The sections below are the groups Vela itself uses, so a group heading here matches the heading you see when you select **Customise** on the Dashboard or **Add New Metric** in a report. The Dashboard and the report form order the groups differently, so use the headings rather than the position.

:::note Availability varies
The exact metrics available to you depend on your organisation's configuration and your plan. The names below are those Vela uses. If a metric does not appear in your list, it may not apply to your setup.
:::

{/* UNVERIFIED: the pattern list in dashboard/metricGroups.js is a whitelist — getGroupedDashboardMetrics drops any metric matching no pattern — so it bounds the families that can appear in Customise. Diffing it against this page leaves seven patterns with no documented metric: reviewed team compliance scores distribution; reviewed team quality scores distribution; interaction distribution by agent compliance score; by agent quality score; by agent quality score boundaries; by agent compliance score boundaries; and a standalone alerts distribution (this page has Interaction Distribution by Number of Alerts only). A pattern is not proof a metric record exists, and display names come from database records rather than code, so confirm against Customise on the Dashboard before adding rows. Re-run the diff after any metricGroups.js change. */}

---

## Quality & Performance

| Metric | What it measures |
| :--- | :--- |
| **Average Agent Score** | The mean overall score across evaluated interactions, on a 0 to 100 scale |
| **Average Agent Compliance Score** | The mean score across scorecard items marked as compliance items |
| **Average Agent Quality Score** | The mean score across scorecard items not marked as compliance |
| **Agent Scores Distribution** | How individual agents' scores are spread across the range |
| **Agent Compliance Scores Distribution** | The same spread, for compliance items only |
| **Agent Quality Scores Distribution** | The same spread, for quality items only |
| **Team Scores Distribution** | Score spread compared across teams |
| **Team Compliance Scores Distribution** | Team-level spread, compliance items only |
| **Team Quality Scores Distribution** | Team-level spread, quality items only |
| **Interaction Distribution by Agent Score** | How many interactions fall into each score band |
| **Interaction Distribution by Agent Score Boundaries** | Interactions grouped by your organisation's Red, Amber, and Green boundaries |

An administrator sets the score boundaries. See [Organisation Configuration](../settings-config/organisation-configuration.md). For how these figures are calculated, and what changing a weight does to them, see [How Scoring Works](../explanation/how-scoring-works.md).

**What to look for:** tightly clustered scores suggest consistent performance. A wide spread points to outliers who need individual attention rather than team-wide training.

---

## Interactions and Volume

| Metric | What it measures |
| :--- | :--- |
| **No. Calls** | Number of call interactions in the selected period |
| **No. Chats** | Number of chat interactions in the selected period |
| **Total Call Duration** | Combined length of all calls in the period |
| **Ave Call Duration** | Average length of a call |
| **Average Silent Time** | Average silence within interactions |
| **Ave Response Time** | Average time an agent takes to respond in a chat |
| **Talk to Listen Ratio** | Agent talking time relative to customer talking time |
| **Call Distribution by TTLR** | How calls are spread across talk-to-listen ratios |
| **Call Distribution by Silent Time** | How calls are spread across silent-time ranges |
| **Interaction Distribution by Handle Time** | How interactions are spread across handling durations |
| **Chats Distribution by Average Response Time** | How chats are spread across response-time ranges |

**What to look for:** longer calls are not automatically worse, so read duration alongside score and sentiment. High silent time can mean an agent is searching for information. That is usually a training or knowledge-base signal rather than a discipline one.

---

## Team Workload

| Metric | What it measures |
| :--- | :--- |
| **No. Agents** | Number of agents with interactions in the period |
| **Agent Distribution** | How interactions are spread across agents |
| **Interactions Distribution by Reviewer** | Which team members are completing reviews |

**What to look for:** an uneven Agent Distribution can mean workload is unbalanced, or that some agents joined part-way through the period.

---

## Reviewed Interactions

| Metric | What it measures |
| :--- | :--- |
| **Number of Reviewed Interactions** | How many interactions a human has marked as reviewed |
| **Percentage of Reviewed** | Reviewed interactions as a proportion of the total |
| **Interactions Distribution by Review Status** | Reviewed versus not yet reviewed |
| **Reviewed Agent Scores Distribution** | Score spread across reviewed interactions only |
| **Reviewed Compliance Scores Distribution** | Compliance score spread, reviewed interactions only |
| **Reviewed Quality Scores Distribution** | Quality score spread, reviewed interactions only |
| **Reviewed Team Scores Distribution** | Team score spread, reviewed interactions only |

Reviewed metrics count only what a person has marked with **Mark as Reviewed**, so they stay at zero until your team starts using it. See [Review and Score Interactions](../features/quality-assurance-tools.md).

**What to look for:** a large gap between reviewed and unreviewed score distributions can mean reviewers are picking interactions unevenly, for example by only reviewing flagged calls.

---

## Customer Sentiment

| Metric | What it measures |
| :--- | :--- |
| **Sentiment Distribution** | Proportion of interactions by overall sentiment: Positive, Neutral, or Negative |

**What to look for:** a rise in negative sentiment without a matching fall in agent scores usually points at a process or product problem rather than an agent one.

---

## Topics & Pain Points

| Metric | What it measures |
| :--- | :--- |
| **Top 10 Topics** | The most frequently occurring conversation topics |
| **Bottom 10 Topics** | The least frequently occurring topics |
| **Top 10 Topics (Detected)** | Most frequent topics identified by the AI |
| **Top 10 Topics (Organisational)** | Most frequent topics from your own configured list |
| **Bottom 10 Topics (Detected)** | Least frequent AI-identified topics |
| **Bottom 10 Topics (Organisational)** | Least frequent topics from your configured list |
| **Top 10 Pain Points** | The most frequently occurring customer pain points |
| **Bottom 10 Pain Points** | The least frequently occurring pain points |
| **No. Pain Points** | Number of distinct pain points detected in the period |
| **Pain Point Distribution** | Proportion of interactions by pain point |

The AI finds detected topics. Your team creates organisational ones. See the [Glossary](./glossary.md), and [Manage Smart Search Terms](../topics-and-terms-guide.md) for how to add your own.

---

## Keywords, Intents, & Language

| Metric | What it measures |
| :--- | :--- |
| **No. Keywords** | Number of distinct keywords detected in the period |
| **Keyword Distribution** | Proportion of interactions by keyword |
| **Intent Distribution** | Proportion of interactions by customer intent |
| **No. Languages** | Number of distinct languages detected in the period |
| **Language Distribution** | Proportion of interactions by language |

Keywords only count where your team has added them. See [Manage Smart Search Terms](../topics-and-terms-guide.md).

**What to look for:** language mix helps with staffing. Compare scores by language to check that quality is consistent across all of them. A spike in a particular keyword or intent often surfaces an emerging issue before it shows up in scores.

---

## Alert Metrics

| Metric | What it measures |
| :--- | :--- |
| **No. Alerts** | Number of Smart Search matches raised in the period |
| **Resolved Alerts** | How many of the alerts raised in the period have been marked resolved |
| **Interaction Distribution by Number of Alerts** | How interactions are spread across the number of alerts they raised |

**What to look for:** a growing unresolved count means alerts are arriving faster than the team can work through them. Either the searches are too broad, or there is not enough review time. See [Smart Search](../smart-search-guide.md).

---

## If a Metric Is Missing

A metric you expect can be absent for three reasons, and they are worth telling apart before raising it:

- **Your plan does not include it.** On plans without Smart Search, the alert, keyword, intent, and pain point metrics are not offered at all. See [Lite](./glossary.md#lite).
- **It does not fit what you are looking at.** In a report, metrics that apply only to calls are hidden when you choose Chats, and the reverse.
- **Nothing has produced the data yet.** Reviewed metrics stay empty until someone marks an interaction reviewed, and keyword metrics stay empty until your team adds keywords.

---

## Related

- [Glossary](./glossary.md): definitions of the terms used above
- [Monitor Agent Performance](../features/monitor-agent-performance.md): using these metrics day to day
- [Generate Reports](../features/custom-reporting.md): putting metrics into a report

---

## Need Help?

**Contact Support:** support@botlhale.ai
