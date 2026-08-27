---
id: best-practices
title: Best Practices
description: "Practical recommendations for setting up Vela and running day-to-day QA."
sidebar_position: 1
type: explanation
---

# Best Practices
Practical recommendations drawn from Vela's core workflows, covering initial setup through to day-to-day QA management. Each section stands on its own, so go to the topic you need rather than reading from the top.

---

## Setting Up for Success

### Organisational Structure

Mirror your real-world reporting lines when you create departments and teams in Vela. Create departments and teams before you add any users. Users are assigned to teams, and teams belong to departments. Accurate structure at this stage ensures that team leads see only the data for their teams, that reports are organised meaningfully, and that Smart Search scopes match the correct groups of agents.

Avoid creating catch-all teams (such as "Other" or "Misc"). If a team changes its composition or structure, update it in Vela at the same time. Data scoped to a team that no longer reflects the real structure becomes difficult to interpret.

### Scorecard Design

The Agent Scorecard defines the criteria used to score every interaction. Before your first call is uploaded, design your scorecard deliberately.

Write each question so that both the AI and a human reviewer can give a clear yes or no answer. Questions like "Was the agent professional?" are too subjective and inconsistent. Questions like "Did the agent verify the customer's identity before proceeding?" are specific and auditable. Concrete questions produce more consistent scores and give agents clearer expectations.

Use categories to group related questions (for example, Opening, Compliance, Handling, Closing). Assign weights that reflect the relative importance of each category to your organisation's quality standard. Use the Auto-Fail option sparingly. Reserve it for questions where a single failure is a critical compliance or regulatory breach, not a quality issue.

Set the scorecard scope to match the teams it applies to. If different teams operate under different procedures (for example, inbound support versus outbound sales), create separate scorecards for each. A single catch-all scorecard with broadly worded criteria produces scores that are difficult to act on.

Review and update the scorecard when procedures change. Scores based on outdated criteria are misleading.

### Smart Search Configuration

Create your most important Smart Searches, particularly the compliance-critical ones, before your first calls are uploaded. A search matches only the interactions uploaded after it is created, unless you enable **Historical Search** and choose whether it covers all historical calls or a specific date range. That option is available only when you create the search, and cannot be added by editing it later, so a search that needs to cover your archive has to be built with it on.

For compliance monitoring, write search phrases around the specific language your agents are required to use or prohibited from using. For customer experience monitoring, build phrase lists around the real language your customers use when frustrated, escalating, or requesting specific actions. Review the results after your first batch of calls and refine the phrases based on what you see. Early false positives are a normal part of tuning.

Scope each search to the people its results are actionable by. An organisation-wide compliance search suits a policy that applies to everyone. A search specific to one product line or team should be scoped to that team or department so that results are actionable by the right people.

Keep the number of active searches manageable. Your plan caps how many you can hold, and that is five unless your plan sets a different number. When you reach the limit, **New Smart Search** is greyed out with no message explaining why, so spend the allowance on your compliance-critical searches first. A small set of well-scoped searches produces more actionable alerts than a large set of broad ones. See [Search Management](../smart-search-guide.md#search-management).

---

## Daily and Weekly QA Workflows

### Daily QA Routine

Begin each day with your unresolved Smart Search alerts, before opening individual interactions. Alerts are interactions your own searches have already flagged, so they are a better starting point than sampling the call list at random.

On **Smart Detector → Smart Search**, sort the list by **Results** in descending order to see the most frequently triggered searches first. These often point to systemic issues rather than one-off incidents, and systemic issues merit faster attention.

After working through alerts, check the Dashboard for agents whose scores are declining day-over-day, or whose **Sentiment Distribution in Interactions** is shifting negative. Use the score distribution and the agent view to identify individuals who need targeted review rather than sampling broadly.

When you review an interaction, always complete the feedback cycle: add a coaching comment, tag the agent so they receive a notification, and mark the interaction as reviewed. An interaction reviewed but not commented on represents a missed coaching opportunity.

### Weekly QA Analysis

Set aside time each week to look across the period rather than interaction by interaction. Use the Dashboard to review:

- Whether the team's average score has moved relative to the previous week.
- Whether the number of alerts has increased or decreased, and whether that change is explained by a known event (a new product launch, a recent process change, or a training programme).
- Which agents have the widest gap between their automatic and manual scores. A gap that persists points at the scorecard criteria, or at an agent whose calls routinely need human judgement to score.
- Whether any Smart Search is consistently triggering for the same agent. Repeated matches for the same individual point to a pattern requiring direct coaching.

Review the trend over several weeks before concluding whether a change represents genuine improvement or natural variation. Single-week movements in either direction rarely justify a strategic change.

---

## Coaching and Agent Development

### Making Feedback Actionable

Feedback that agents can act on is time-stamped, specific, and linked to a concrete behaviour rather than a general impression. Rather than noting that an agent "wasn't very clear", point to the moment. For example: "When the customer asked about the cancellation policy, the explanation was incomplete. The procedure requires you to confirm the notice period and any charges."

Balance corrective feedback with positive reinforcement. Use the comment system to acknowledge interactions that went well, not only those that need improvement. Agents who receive recognition for specific behaviours are more likely to repeat them.

Tag the agent using the @ mention when leaving coaching comments. Without the tag, the agent does not receive a notification and the feedback may go unread.

Add coaching comments promptly after reviewing an interaction. Feedback that arrives days after an event loses context for both the agent and the reviewer.

### Using Scorecard Overrides Effectively

Use manual overrides when the AI has clearly missed context, such as cultural nuance, a required phrase spoken in different words, or a complex resolution the transcript does not represent fairly. Document your reasoning in a comment so there is a record of why the score was adjusted.

Do not override scores to inflate performance metrics. If overrides are consistently moving scores in the same direction for all agents, it is a sign that the scorecard criteria need to be updated rather than routinely bypassed.

### Identifying Training Needs from Patterns

Look for patterns across multiple interactions rather than acting on individual calls. An agent who fails one scorecard item on one call may have had an unusual interaction. An agent who fails the same item across five of their last ten interactions has a skill gap that training can address.

If Coaching is enabled for your organisation, build a course around the gap and give it a trigger score range that selects the agents who have it. Courses are assigned by score, not by name, so a narrow range reaches the people who need it while a wide one reaches everyone and measures nothing.

Once a course has gone out, monitor whether the relevant scorecard item improves over the following two to four weeks. If it does not, a direct coaching conversation is likely needed in addition to the course.

:::note Coaching is an add-on
**Coaching** appears in the navigation only when it is enabled for your organisation. If you do not see it, agents receive their performance reports on the schedule set in [Organisation Configuration](../settings-config/organisation-configuration.md#4-agent-performance-sharing) instead.
:::

### Decide What Agents Can See

Where Coaching is enabled, **Coaching → Preferences → Agent View Permissions** decides whether agents see all of their interactions or only those a reviewer has marked as reviewed.

Reviewed-only is the stricter setting and the one worth considering if your reviewers add context that changes how a score reads. It also means an unreviewed backlog is invisible to the agent, so pick it only if your team keeps up with reviewing. Agree the setting before agents are invited, because changing it later changes what they have already been able to see.

---

## Bulk Upload Best Practices

### Preparation

Always download the metadata CSV template from the Vela upload page and build your metadata from that template rather than creating the CSV from scratch. This avoids column name mismatches, which are the most common source of bulk upload errors.

Test with a small batch (five to ten files) before uploading a large historical dataset. Confirming that the format, agent names, teams, and departments are matched correctly on a small batch is far less disruptive than discovering a systematic error after uploading thousands of files.

Ensure that the `agent_name`, `team`, and `department` values in `metadata.csv` correspond to records that already exist in Vela. `agent_name` must be the agent's name as it appears on their agent record, not a username such as `john.smith`. Any row whose values do not correspond to an existing record is not attributed correctly.

### During Upload

Upload large batches outside busy hours, such as evenings or weekends, to reduce the risk of timeouts. Keep batches under the 3 GB limit, above which the upload is rejected before it starts. If your historical dataset is larger, split it into multiple batches rather than trying to upload everything at once.

Keep the upload page open and do not navigate away during a bulk upload. Monitor the progress indicator and review the results screen when the batch completes.

Keep copies of the original audio files until you have confirmed that all files in a batch have processed successfully. Once processing is confirmed, you may archive the source files according to your organisation's data retention policy.

### After Upload

Review the results screen immediately after each batch completes. Address any failed files promptly. It is easier to find the cause close to the time of upload than days later.

---

## Report Scheduling and Distribution

Set the frequency and time on a scheduled report so it arrives before, not during, the meetings where it is discussed. A weekly performance report that lands the morning of a team meeting gives attendees time to review it rather than reading it for the first time in the room.

When passing reports on to agents, include context. A score or metric sent without explanation can be misread as a performance warning rather than a coaching tool. Accompany automated reports with a brief summary of what the data shows and what the team should take from it.

Review which scheduled reports are still being used regularly. Reports that have not prompted any action or discussion in several months are candidates for removal or simplification. A few relevant reports are more useful than a large library that no one reads.

---

## System Maintenance

### Keeping Scorecards Current

Review your scorecard at minimum every quarter and whenever a significant procedure change occurs. Outdated scorecard criteria produce scores that do not reflect current standards, which makes coaching conversations confusing for agents.

When updating a scorecard, note the date the change took effect. This matters when you review historical scores. Trends that span a scorecard change need to be read with that change in mind.

If you add new questions, ensure they are observable behaviours that the AI can detect from the transcript. Questions that depend on context not captured in the audio or chat log produce unreliable automatic scores and increase the burden on manual review.

### Managing Smart Searches

Review active Smart Searches monthly. Check whether each search is still relevant, whether its results are being actioned, and whether its phrase list still reflects current language patterns. Language used by customers and agents evolves. Phrase lists that were accurate six months ago may produce more false positives or miss new patterns now.

Deactivate searches that are no longer being acted upon. An accumulation of unresolved alerts from searches that nobody reviews reduces the signal-to-noise ratio for the entire team and risks burying genuine issues.

When a Smart Search is no longer needed, deactivate it rather than deleting it immediately. Keeping it inactive for a short period allows you to confirm that its alerts are not being referenced by anyone before removing it entirely.

### Reviewing User Access

Review user access levels at least twice a year and whenever there is a change in team structure. Access levels should reflect current reporting lines. A team lead who moves to another department should not keep access to their previous team's data. Deactivate the accounts of people who have left the organisation promptly. See [User and Team Management](../settings-config/user-management.md).

---

## Related

- [Administrator Setup](../getting-started/quick-start/administrator-setup.md): step-by-step initial configuration
- [Review and Score Interactions](../features/quality-assurance-tools.md): the review, scoring, and coaching steps these recommendations build on
- [Set Up Smart Search](../smart-search-guide.md): building and managing automated searches
- [Build Your Knowledge Base](../knowledge-base-guide.md): uploading and linking documents
- [Troubleshooting Guide](../support/troubleshooting-guide.md): resolving common issues

---

## Need Help?

**Contact Support:** support@botlhale.ai
