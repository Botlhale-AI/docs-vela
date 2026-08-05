---
sidebar_position: 0
title: Notifications
type: reference
---

# Notifications
Vela notifies you when something needs your attention: a Smart Search match, a comment on an interaction, or a report that has finished generating. This page explains what triggers a notification, where to find them, and how to control what you receive.

---

## 1. Where to Find Your Notifications

Click **Notifications** in the left sidebar. The page is divided into tabs:

| Tab | What it contains |
| :--- | :--- |
| **Alerts** | Smart Search matches. These are interactions that triggered one of your organisation's Smart Search rules. |
| **Comments** | Comments added to interactions you are involved with. |
| **Reports** | Reports that have finished generating, whether one-time or scheduled. |

The **Alerts** tab appears only on plans that include Smart Search.

Unread notifications are also indicated in the top navigation bar, so you can see at a glance whether anything new has arrived.

{/* SCREENSHOT: The Notifications page on the Alerts tab, with all three tabs visible and the unread indicator in the top navigation bar in frame. Save as img/screenshots/notifications/notifications-tabs.png */}

---

## 2. What Triggers a Notification

| Notification Type | When You Receive It |
| :--- | :--- |
| **Smart Search alert** | A processed interaction matches one of your Smart Search rules |
| **Comment** | Someone adds a comment to an interaction you are involved with |
| **Report ready** | A scheduled or one-time report has finished generating |
| **Access request** | A request to view redacted information has been approved or declined |
| **Course assigned** | A training course has been assigned to you (Agent Portal) |
| **Award presented** | An award has been presented to you (Agent Portal) |

The last three only appear where they are relevant to your role. An access request outcome notifies the person who raised it and the administrators who process these requests, by email and in-app. Course and award notifications appear in the Agent Portal.

:::note Call processing is emailed, not in-app
When a call finishes processing, Vela emails you rather than posting an in-app notification, if you have email notifications enabled. Manage this in **Settings → Notifications**.
:::

---

## 3. Working Through Alerts

Alerts are Smart Search matches, raised automatically when a processed interaction triggers one of your configured rules. Each alert links to the interaction and to the Smart Search that generated it.

A practical routine for each alert:

1. Open the matched interaction from the alert.
2. Review the full context. The transcript and AI analysis show whether the match is a genuine issue.
3. Take the appropriate action: leave a coaching comment for the agent, escalate internally, or record that no action is required.
4. Resolve the alert to keep your list clear for incoming matches.

:::tip Use alerts as your review queue
Rather than sampling interactions at random, work your alerts first. They are the conversations your own rules have identified as worth looking at.
:::

---

## 4. Controlling Smart Search Notifications

Each Smart Search has its own **Notifications** setting. You can enable it when creating the search, and change it later by opening the search and editing it.

Matches still appear in the Smart Search results view whether or not notifications are on. The setting only controls whether Vela tells you about them.

:::tip Turning down the volume
If one search is generating more alerts than your team can act on, you have two options: edit its phrases to be more specific, or turn its Notifications setting off and review its matches in the results view instead.
:::

For more on building searches, see [Smart Search](../smart-search-guide.md).

---

## 5. Comments and @ Mentions

Comments are how feedback reaches your agents.

- Open an interaction and add your comment in the **Comments** section.
- Tag an agent using the **@** symbol to send the comment directly to them. They receive a notification and can read and respond in their Agent Portal.
- If you do not tag an agent, the comment is visible to team leads only.

This makes the @ mention the deliberate step that turns an internal note into agent-facing feedback.

---

## 6. Notification Settings

Go to **Settings → Notifications** to configure your preferences for email and in-platform notifications.

![The Notifications settings tab, with the platform and email lists and the delivery frequency below them](../../img/screenshots/settings/notification.png)

:::note Agents do not see this tab
The Notifications settings tab is not available to users with the Agent role.
:::

---

## Troubleshooting

| Problem | Solution |
| :--- | :--- |
| Too many notifications | A search is matching too broadly. Edit it to use more specific phrases, or turn its Notifications setting off |
| Missing expected alerts | Confirm the Smart Search has Notifications enabled and that its scope covers the relevant teams |
| Comments not appearing | Check that you have access to the interaction's team or department, then refresh the page |
| Reports not arriving | Verify the report schedule and that the selected date range contains data |

---

## Related

- [Set Up Smart Search](../smart-search-guide.md): create the searches that raise alerts
- [Review and Score Interactions](./quality-assurance-tools.md): turn alerts into scored reviews and coaching
- [Generate Reports](./custom-reporting.md): create and schedule the reports you are notified about

## Need Help?

**Contact Support:** support@botlhale.ai
