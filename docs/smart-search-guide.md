---
id: smart-search-guide
title: Smart Search Guide
sidebar_label: Smart Search Guide
sidebar_position: 2
---

# Smart Search Guide

Smart Search automatically monitors every processed interaction for keywords, phrases, and patterns you define. Each time a processed call or chat matches one of your searches, an alert is raised and linked directly to that interaction. This lets you focus your QA effort on the conversations that matter most rather than reviewing interactions at random.

---

## What You Can Achieve

Smart Search gives you automated monitoring across three broad areas:

- **Issue detection** — catch problems early and respond before they escalate
- **Compliance and quality monitoring** — confirm that agents are following required procedures and scripts
- **Opportunity identification** — spot training needs and surface examples of excellent service

---

## Creating a Smart Search

### Step 1: Access Smart Search

1. Click **Smart Detector** in the left sidebar.
2. Select the **Smart Search** tab.
3. Click **Create** to open the search creation form.

![ Smart Search](../img/screenshots/smart_search/10.png)

### Step 2: Define Your Search Criteria

![ Smart Search](../img/screenshots/smart_search/11.png)
![ Smart Search](../img/screenshots/smart_search/12.png)

1. Enter a descriptive **Title** for the search (for example, "Customer Complaints — Escalation Language").
2. Add a **Description** to record the purpose of the search. This is useful when reviewing a list of searches months later.
3. Add the **Phrases** you want to monitor. Each phrase is a term or sentence that, when detected in a transcript, triggers a match. Add variations and synonyms — agents and customers rarely say exactly the same thing every time.
4. Set the **Scope**: Organisation, Department, or Team. The search will only match interactions belonging to users within that scope.
5. Toggle **Notifications** on if you want to receive an in-app notification each time a new match is detected. This setting can only be configured at creation time.
6. Enable **Historical Search** if you want the search to also run against interactions that were already uploaded before the search was created.
7. Click **Create** to save and activate the search.

### Step 3: Review and Refine Results

Once interactions are processed, matches appear automatically in the search results.

1. Navigate to **Smart Detector → Smart Search**.
2. Click **View** next to your search.
3. Review the matched interactions. Each result links directly to the call or chat that triggered the match.
4. Click an interaction to open it and review the full transcript, AI analysis, and context.
5. Resolve the alert once you have reviewed and acted on it.

If the results contain too many irrelevant matches, return to the search and make the phrases more specific. If matches are being missed, add more phrase variations. Refining phrases based on early results is a normal part of getting a search to perform well.

---

## Common Search Types

### Customer Experience Monitoring

| **Search Type** | **Example Phrases** | **Business Value** |
|-----------------|-------------------|--------------------|
| Customer Complaints | "I'm not happy", "This is terrible", "I want to speak to a manager" | Early intervention, prevent escalations |
| Service Issues | "This doesn't work", "I've been waiting", "Nobody helped me" | Identify service gaps, improve processes |
| Billing Problems | "I was charged twice", "This bill is wrong", "I want a refund" | Financial impact, customer retention |
| Product Issues | "This is broken", "It's not working", "Defective product" | Product quality, warranty management |

### Compliance and Quality Assurance

| **Search Type** | **Example Phrases** | **Compliance Focus** |
|-----------------|-------------------|--------------------|
| Regulatory Violations | "I didn't authorise this", "That's illegal", "You can't do that" | Legal compliance, risk management |
| Policy Breaches | "That's against policy", "You're not following procedure" | Policy adherence, quality standards |
| Security Concerns | "My information was shared", "Data breach", "Privacy violation" | Data protection, security compliance |
| Documentation Issues | "That wasn't documented", "No record of this", "Missing information" | Audit readiness, record keeping |

### Training and Development

| **Search Type** | **Example Phrases** | **Training Value** |
|-----------------|-------------------|--------------------|
| Knowledge Gaps | "I don't know", "Can you explain", "I'm not sure how" | Identify training needs, skill development |
| Process Confusion | "What's the procedure", "How do I do this", "I'm confused" | Process improvement, documentation |
| Escalation Requests | "I need a supervisor", "Can I speak to someone else", "This is too complex" | Skill assessment, escalation procedures |
| Positive Feedback | "Great service", "Thank you so much", "You're amazing" | Recognise excellence, share best practices |

---

## Monitoring and Alerts

### In-App Notifications

You can enable in-app notifications when creating a Smart Search. When enabled, you will receive a platform notification each time a new alert is raised for that search. This setting is configured at creation time — if you did not enable it when the search was created, you will need to recreate the search to add notifications.

Matches will appear in the Smart Search results view regardless of whether notifications are enabled.

### Alert Management

Work through alerts regularly rather than letting them accumulate. For each match:

1. Open the matched interaction from the Smart Search results.
2. Review the full context — the transcript and AI analysis provide the detail needed to assess whether the match represents a genuine issue.
3. Take the appropriate action: leave a coaching comment for the agent, escalate internally, or note that no action is required.
4. Resolve the alert to keep your results list clear for incoming matches.

---

## Analysing Search Results

### Understanding Match Data

When Smart Search finds matches, the results view shows:

| **Data Point** | **What It Shows** | **How to Use It** |
|----------------|------------------|------------------|
| **Match Count** | How many times the search triggered | Identify frequency and patterns |
| **Date Range** | When matches occurred | Spot trends and timing patterns |
| **Agent Information** | Who was involved in matched interactions | Identify training needs or excellence |
| **Interaction Details** | Specific context of the match | Understand the full situation |

### Trend Analysis

Review match frequency over time to understand whether an issue is increasing, stable, or improving. Compare periods around known events — a training programme, a process change, or a new product launch — to assess whether those events changed the pattern.

Sort results by match count (highest first) to direct your attention to the searches that are triggering most often. High match counts for a compliance search may indicate a systemic training gap rather than individual incidents.

### Action Planning

| **Result Type** | **Suggested Action** | **Expected Outcome** |
|-----------------|--------------------|-------------------|
| **High frequency issues** | Process improvement, targeted training programmes | Reduced occurrence, improved service |
| **Agent-specific patterns** | Individual coaching, skill development | Improved performance |
| **Trending problems** | Strategic intervention, resource review | Proactive problem resolution |
| **Positive patterns** | Best practice sharing, recognition | Replication of successful behaviours |

---

## Troubleshooting Common Issues

| **Problem** | **Cause** | **Solution** |
|-------------|----------|-------------|
| **Too many false positives** | Search phrases too broad | Make phrases more specific; review false-positive matches to understand what language is triggering them |
| **Missing expected matches** | Phrases too narrow or exact | Add more phrase variations and synonyms; check whether the search scope covers the relevant teams |
| **No matches at all** | Search not active, scope too narrow, or Historical Search not enabled | Verify the search status is Active; confirm the scope covers the correct teams; recreate with Historical Search enabled if past calls should be included |
| **Notifications not arriving** | Notification option not enabled at creation | Recreate the search with the Notifications toggle turned on |

---

## Search Management

Review your active Smart Searches monthly. For each search, confirm it is still relevant, that its results are being actioned, and that its phrase list still reflects current language patterns. Customer and agent language evolves over time, and phrase lists that were accurate months ago may produce more false positives or miss new patterns.

Deactivate searches that are no longer being acted upon. An accumulation of unreviewed alerts reduces the signal-to-noise ratio for the whole team.

When you want to apply a working search pattern to a different team or department, create a new search with the same phrases but a different scope, rather than changing the scope of the existing search.

---

## Next Steps

| **For Performance Evaluation** | **For Knowledge Management** | **For Team Management** |
|-------------------------------|----------------------------|------------------------|
| [Create Agent Scorecards](./agent-scorecard-guide.md) | [Build Knowledge Base](./knowledge-base-guide.md) | [Improve Agent Performance](./Agents.md) |

### See also

- [Smart Monitoring Overview](./smart-detector-overview.md) — Understand automated detection
- [Agent Performance](./Agents.md) — Coach your team effectively
- [Knowledge Base](./knowledge-base-guide.md) — Build your team's resources
- [Dashboard Overview](./Dashboard.md) — Monitor search results and trends

## Need Help?

**Contact Support:** support@botlhale.ai
