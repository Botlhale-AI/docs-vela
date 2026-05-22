---
id: best-practices
title: Best Practices
sidebar_label: Best Practices
sidebar_position: 1
---

# Best Practices for Administrators and Team Leads

This guide brings together practical recommendations drawn from Vela's core workflows. It is written as a reference — dip in by topic rather than reading it cover to cover. The goal is to help you get the most out of the platform from initial setup through to day-to-day QA management.

---

## Setting Up for Success

### Organisational Structure

Mirror your real-world reporting lines when you create departments and teams in Vela. Departments and teams must be created before any users are added — users are assigned to teams, and teams belong to departments. Accurate structure at this stage ensures that team leads see only the data for their teams, that reports are organised meaningfully, and that Smart Search scopes match the correct groups of agents.

Avoid creating catch-all teams (such as "Other" or "Misc"). If a team changes its composition or structure, update it in Vela at the same time. Data scoped to a team that no longer reflects the real structure becomes difficult to interpret.

### Scorecard Design

The Agent Scorecard defines the criteria used to score every interaction. Before your first call is uploaded, design your scorecard deliberately.

Write each question so that both the AI and a human reviewer can give a clear yes or no answer. Questions like "Was the agent professional?" are too subjective and inconsistent. Questions like "Did the agent verify the customer's identity before proceeding?" are specific and auditable. Concrete questions produce more consistent scores and give agents clearer expectations.

Use categories to group related questions (for example, Opening, Compliance, Handling, Closing). Assign weights that reflect the relative importance of each category to your organisation's quality standard. Use the Auto-Fail option sparingly — reserve it for questions where a single failure represents a critical compliance or regulatory breach, not simply a quality issue.

Set the scorecard scope to match the teams it applies to. If different teams operate under different procedures (for example, inbound support versus outbound sales), create separate scorecards for each. A single catch-all scorecard with broadly worded criteria will produce scores that are difficult to act on.

Review and update the scorecard when procedures change. Scores based on outdated criteria are misleading.

### Smart Search Configuration

Create your most important Smart Searches — particularly compliance-critical ones — before your first calls are uploaded. Searches only match interactions uploaded after they are activated (unless you enable the Historical Search option at creation time).

For compliance monitoring, write search phrases around the specific language your agents are required to use or prohibited from using. For customer experience monitoring, build phrase lists around the real language your customers use when frustrated, escalating, or requesting specific actions. Review initial results after the first batch of calls processes and refine phrases based on what you observe — early false positives are a normal part of tuning.

Scope each search appropriately. An organisation-wide compliance search is appropriate for a policy that applies to everyone. A search specific to one product line or team should be scoped to that team or department so that results are actionable by the right people.

Keep the number of active searches manageable. A large number of poorly scoped searches generates noise and reduces the value of each alert.

---

## Daily and Weekly QA Workflows

### Daily QA Routine

Begin each day by reviewing outstanding Smart Search alerts before opening individual interactions. Alerts represent interactions that have already been flagged as potentially significant — they are a more efficient starting point than randomly sampling the call list.

Sort alerts by match count (highest first) to see the most frequently triggered searches first. These often point to systemic issues rather than one-off incidents, and systemic issues merit faster attention.

After working through alerts, check the Dashboard for agents whose scores are declining day-over-day or whose sentiment distribution is shifting negative. Use the score distribution and the agent view to identify individuals who need targeted review rather than sampling broadly.

When you review an interaction, always complete the feedback cycle: add a coaching comment, tag the agent so they receive a notification, and mark the interaction as reviewed. An interaction reviewed but not commented on represents a missed coaching opportunity.

### Weekly QA Analysis

Set aside time each week to look across the period rather than interaction by interaction. Use the Dashboard to review:

- Whether the team's average score has moved relative to the previous week.
- Whether the number of alerts has increased or decreased, and whether that change is explained by a known event (a new product launch, a recent process change, or a training programme).
- Which agents have the widest gap between their automatic and manual scores — a persistent gap suggests the scorecard criteria may need refinement, or that the agent consistently operates in situations that require human judgement to score accurately.
- Whether any Smart Search is consistently triggering for the same agent. Repeated matches for the same individual point to a pattern requiring direct coaching.

Review the trend over several weeks before concluding whether a change represents genuine improvement or natural variation. Single-week movements in either direction rarely justify a strategic change.

---

## Coaching and Agent Development

### Making Feedback Actionable

Feedback that agents can act on is time-stamped, specific, and linked to a concrete behaviour rather than a general impression. Rather than noting that an agent "wasn't very clear", reference the specific moment — for example, "At the point where the customer asked about the cancellation policy, the explanation was incomplete; the procedure requires you to confirm the notice period and any associated charges."

Balance corrective feedback with positive reinforcement. Use the comment system to acknowledge interactions that went well, not only those that need improvement. Agents who receive recognition for specific behaviours are more likely to repeat them.

Tag the agent using the @ mention when leaving coaching comments. Without the tag, the agent will not receive a notification and the feedback may go unread.

Add coaching comments promptly after reviewing an interaction. Feedback that arrives days after an event loses context for both the agent and the reviewer.

### Using Scorecard Overrides Effectively

Use manual overrides when the AI has clearly missed context — cultural nuance, a situation where the required phrase was spoken but not verbatim, or a complex resolution that the transcript does not represent fairly. Document your reasoning in a comment so there is a record of why the score was adjusted.

Do not override scores to inflate performance metrics. If overrides are consistently moving scores in the same direction for all agents, it is a sign that the scorecard criteria need to be updated rather than routinely bypassed.

### Identifying Training Needs from Patterns

Look for patterns across multiple interactions rather than acting on individual calls. An agent who fails one scorecard item on one call may simply have had an unusual interaction. An agent who fails the same item across five of their last ten interactions has a skill gap that training can address.

Use the Coaching section to assign training courses that are targeted to the identified gap. Generic training assigned to everyone produces less measurable improvement than targeted courses assigned in response to specific scorecard patterns.

After assigning a training course, monitor whether the relevant scorecard item improves over the following two to four weeks. If it does not, a direct coaching conversation is likely needed in addition to the course.

---

## Bulk Upload Best Practices

### Preparation

Always download the metadata CSV template from the Vela upload page and build your metadata from that template rather than creating the CSV from scratch. This avoids column name mismatches, which are the most common source of bulk upload errors.

Test with a small batch (five to ten files) before uploading a large historical dataset. Confirming that the format, agent names, teams, and departments are matched correctly on a small batch is far less disruptive than discovering a systematic error after uploading thousands of files.

Ensure that `agent_name`, `team`, and `department` values in the CSV match exactly the names as they appear in Vela. Case sensitivity and spacing matter. Any row where these values do not match an existing record in Vela will fail.

### During Upload

Upload large batches during off-peak hours — evenings or weekends — to take advantage of lower server load and reduce the risk of timeouts. Keep batches under the recommended 3 GB limit. If your historical dataset is larger, split it into multiple batches rather than trying to upload everything at once.

Keep the upload page open and do not navigate away during a bulk upload. Monitor the progress indicator and review the results screen when the batch completes.

Keep copies of the original audio files until you have confirmed that all files in a batch have processed successfully. Once processing is confirmed, you may archive the source files according to your organisation's data retention policy.

### After Upload

Review the results screen immediately after each batch completes. Address any failed files promptly — it is easier to identify the cause of a failure close to the time of upload than days later.

---

## Report Scheduling and Distribution

Schedule reports to arrive before, not during, the meetings where they will be discussed. A weekly performance report distributed the morning of a team meeting gives attendees time to review it rather than reading it for the first time in the room.

Assign report distribution to a named individual rather than a shared inbox. Reports sent to a shared address are often read by no one.

When distributing reports to agents, include context. A score or metric sent without explanation can be misread as a performance warning rather than a coaching tool. Accompany automated reports with a brief summary of what the data shows and what the team should take from it.

Review which scheduled reports are still being used regularly. Reports that have not prompted any action or discussion in several months are candidates for removal or simplification. Fewer, more relevant reports are more useful than a comprehensive library that no one reads.

---

## System Maintenance

### Keeping Scorecards Current

Review your scorecard at minimum every quarter and whenever a significant procedure change occurs. Outdated scorecard criteria produce scores that do not reflect current standards, which makes coaching conversations confusing for agents.

When updating a scorecard, note the date the change took effect. This is important context when reviewing historical scores — performance trends that span a scorecard change need to be interpreted with that change in mind.

If you add new questions, ensure they are observable behaviours that the AI can detect from the transcript. Questions that depend on context not captured in the audio or chat log will produce unreliable automatic scores and increase the burden on manual review.

### Managing Smart Searches

Review active Smart Searches monthly. Check whether each search is still relevant, whether its results are being actioned, and whether its phrase list still reflects current language patterns. Language used by customers and agents evolves; phrase lists that were accurate six months ago may produce more false positives or miss new patterns now.

Deactivate searches that are no longer being acted upon. An accumulation of unresolved alerts from searches that nobody reviews reduces the signal-to-noise ratio for the entire team and risks burying genuine issues.

When a Smart Search is no longer needed, deactivate it rather than deleting it immediately. Keeping it inactive for a short period allows you to confirm that its alerts are not being referenced by anyone before removing it entirely.

### Reviewing User Access

Review user access levels at least twice a year and whenever there is a change in team structure. Access levels should reflect current reporting lines — a team lead who has moved to a different department should not retain scope over their previous team's data. Remove access for users who have left the organisation promptly.

---

## See Also

- [Administrator Setup](../getting-started/quick-start/administrator-setup.md) — Step-by-step initial configuration
- [Smart Search Guide](../smart-search-guide.md) — Building and managing automated searches
- [Knowledge Base Guide](../knowledge-base-guide.md) — Uploading and linking documents
- [Troubleshooting Guide](../support/troubleshooting-guide.md) — Resolving common issues
