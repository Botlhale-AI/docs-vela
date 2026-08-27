---
id: team-lead-quick-start
title: Team Lead Quick Start
description: "Your first week in Vela as a team lead, in the order that works."
sidebar_position: 0
type: tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Team Lead Quick Start
A hands-on walkthrough for team leads and managers new to Vela. If you have not met Vela yet, [Platform Overview](../platform-overview.md) explains what it does in a couple of minutes. By the end you will have checked your dashboard, uploaded and reviewed an interaction, and left coaching feedback. Setting up automated monitoring comes next. See [Smart Search](../../smart-search-guide.md).

---

## What You'll Learn

- ✅ Sign in and navigate Vela
- ✅ Check today's team performance at a glance
- ✅ Upload and review your first call or chat
- ✅ Understand key metrics and their meanings
- ✅ Provide feedback to agents

---

## Before You Begin

### What You Need

- **Active Vela account**: Your administrator should have created your account
- **Login credentials**: Email verification link or SSO access
- **A current browser**: Chrome, Edge, Firefox, or Safari
- **A call recording** in WAV or MP3 format, to upload during Step 3

### Understanding Your Access Level

Your administrator assigned you an access level, and it decides how much of the organisation you see, whether that is everything, your department, or your immediate team. Every dashboard, list, and filter in this guide is bounded by it, so if a team lead beside you sees more than you do, this is why. See [Access Level](../../reference/glossary.md#access-level).

:::tip First-Time Setup
Your administrator's invitation email contains a **Confirm Account** button and a password. **Use the button first.** Vela refuses the sign-in until your address is verified. Trying anyway sends you a fresh confirmation email, so check your inbox again rather than asking for a new invitation. If the button does not work, the email also gives you the link to paste into your browser.

Once verified, sign in with the password from the email. If it is not accepted, use **Forgot your password?** on the sign-in page to set your own.

Once you are in, set your own password under **Settings → Security**.
:::

---

## Step 1: Sign In to Vela

### Accessing Vela

1. **Navigate to your Vela login page** (provided by your administrator)
2. **Choose your authentication method:**

<Tabs groupId="auth-method">
<TabItem value="sso" label="Single Sign-On">

- Select **Sign in with Google** to sign in with your Google account
- Select **Sign in with Microsoft** to sign in with your Microsoft account
- Follow your organisation's authentication flow

</TabItem>
<TabItem value="password" label="Email and Password">

- Enter your email address
- Enter your password
- Select **Sign In**

Signing in for the first time? Confirm your account from the invitation email first. See **First-Time Setup** under [Before You Begin](#before-you-begin).

</TabItem>
</Tabs>

![The Sign In page, with the email and password fields above the Sign in with Google and Sign in with Microsoft buttons](../../../img/screenshots/settings/login-options.png)

### Password Requirements

When you change your password under **Settings → Security**, or reset a forgotten one, it has to meet Vela's password rules. See [Password Requirements](../../settings-config/account-security.md#password-requirements).

Signing in with Google or Microsoft? You do not set a Vela password. Your identity provider manages it.

### What You'll See After Login

Signing in takes you to the **Dashboard** for the organisation you were invited to, where you monitor performance. The left sidebar shows your main navigation areas.

If you belong to more than one organisation, Vela keeps you in the one you last worked in. To move between them, use **Settings → Organisations → My Orgs**.

:::note If Vela asks you to choose an organisation
This happens when your account has no active organisation, usually because it was created without one or the one you were working in has been deactivated. Pick yours from the **Organisation** list and confirm. Vela stores the choice, so later sign-ins go straight to the Dashboard.

An empty list, or the message "You are not part of the selected organization", means your account has not been added to an organisation yet. Ask your administrator.
:::

---

## Step 2: Understand Your Dashboard

### Dashboard Overview

**Your Dashboard gives you an overview of performance across everything you can access.** That might be your whole organisation, a department, or a single team, depending on your access level.  

If no calls or chats have been uploaded in your organisation yet, performance data is not available. In that case, skip ahead to **Step 3**, and you can return to this step once data is available.  

Four controls shape everything you see. They are the **Interactions** type, the **Date range**, **Filter**, and **Customise**. The metrics themselves sit in groups you can collapse, such as Alert Metrics and Customer Sentiment, and each card states whether it applies to calls, chats, or all interactions. The rest of this step covers each control in turn.

![The Select Date Range modal, with its presets and the two-month calendar](../../../img/screenshots/dashboard/calendar.png)
![A Dashboard metric group, showing the alert count and its trend](../../../img/screenshots/dashboard/dashboard06.png)

### Essential Controls

**Date range**: open the control labelled **Select Date Range**.
- Quick options: Today, Yesterday, This Week, Last Week, This Month, Last Month
- Custom range: pick a start and an end date, then select **Save**
- **Try it now:** Set the date range to "Today" to see current performance

**Filter**: select **Filter** to narrow the dashboard by department, team, and agent, within your access level, and by direction, tags, topic, or score.

**Interactions**: show **All** interactions, **Calls** only, or **Chats** only.

### Key Metrics to Monitor

Your dashboard displays a set of performance indicators. When you are starting out, these three are a good place to begin:

1. **Average Agent Score (%)**: a quick read on overall performance
2. **Total Number of Alerts**: issues raised by your Smart Searches that need attention
3. **Sentiment Distribution in Interactions**: how sentiment breaks down across the date range

Every available metric is defined in [Metrics](../../reference/metrics.md), including what to look for in each metric.

### Customising Your Dashboard

Select **Customise** to choose which metrics appear and how each is charted (table, bar, line, pie, doughnut, or card), then **Save Changes**. The chart types offered vary by metric. Metrics are grouped, and each group shows how many it holds.

![The Dashboard header, with the Customise button, the All, Calls, and Chats options, the date range, and Filter](../../../img/screenshots/dashboard/dashboard03.png)
![The Customise Dashboard modal with five controls numbered, from the metric group heading through to Save Changes](../../../img/screenshots/dashboard/dashboard05.png)

| # | Control | What it does |
|:--|---------|--------------|
| 1 | The group heading | Names the group and how many metrics it holds |
| 2 | The icon on each metric | The chart type it is drawn as. The same metric appears once per chart type available to it |
| 3 | The cross on a metric | Removes it from your dashboard |
| 4 | The scrollbar | The remaining groups sit below the two in view |
| 5 | **Save Changes** | Applies your selection. Closing without saving discards it |

**Try it now:** Add **Top 10 Pain Points in Interactions (Detected)** to your dashboard to monitor common customer issues.

---

## Step 3: Upload and Review Your First Interaction

Upload a call and review the analysis to see how Vela analyses an interaction.

:::note Chats work the same way
This walkthrough uses a call. Text chats follow the same flow under **Interactions → Chats**, where a single chat is uploaded as CSV and a bulk upload as JSON. The analysis is the same, except chats report response time instead of talk-to-listen ratio and silent time.
:::

### Uploading a Single Call

![The Single Upload form, with the agent, direction, and tags fields above the upload area](../../../img/screenshots/data_upload/upload2.png)

1. Navigate to **Interactions → Calls**
2. Select **Upload**, then the **Single Upload** tab
3. Fill in the upload form:
   - **Agent** (required): select the agent who handled this call. The list is filtered by your access level, and **+ Create an agent** adds one without leaving the page
   - **Direction** (optional): choose inbound or outbound
   - **Tags** (optional, but recommended): add labels such as `complaint`, `sales`, or `billing`
4. Add your audio file by dragging it into the upload area, or select **browse your device**. Calls can be WAV or MP3, up to 1 GB
5. Select **Upload**

### Processing Time

While the file uploads, a progress bar shows how far along it is. Once the upload finishes, Vela processes the call in the background, so you do not need to wait on the page. Processing time depends on the length of the call, the audio quality, and current server load, and longer calls take longer. Vela emails you when the analysis is complete.

![The Notifications tab, with the platform and email lists and the frequency setting](../../../img/screenshots/settings/notification.png)

### Reviewing the Analysis

Select your processed interaction to open it. The full transcript sits alongside Vela's analysis.

![The Calls list, where you pick an interaction to open](../../../img/screenshots/calls/calls-1.png)
![The Detailed View, with the audio player, the Smart Detector tabs, and the Call Details panel](../../../img/screenshots/calls/calls-3.png)

Four parts do most of the work when you review:

- **Summary**: a plain-language recap of what happened and how it was resolved.
- **Sentiment**: the positive, neutral, and negative split for the conversation, shown for the agent and the customer separately.
- **Scorecard**: the AI's outcome on each question in your organisation's [Agent Scorecard](../../reference/scorecard-fields.md). You can override any outcome, covered below.
- **Alerts**: anything a Smart Search or the AI flagged, shown in the **Smart Detector** section. Select **Resolve** on each alert once you have acted on it.

The interaction view also shows timestamps on every line, detected keywords, the customer's intent, and pain points. For what each field means, see [Review and Score Interactions](../../features/quality-assurance-tools.md).

### Adding Your Feedback

After reviewing the analysis, add your own observations:

1. Select **View Comments** on the interaction to open the panel.
2. Write specific feedback with clear next steps in the comment box.
3. **Tag the agent** with @ so they receive a notification. Type `@` and pick them from the list that appears. An untagged comment stays visible to team leads only.
4. Select **Send** to post it. A comment cannot be edited or deleted afterwards, so read it back first.

:::note Mentions only work in new comments
You cannot tag an agent in a reply to an existing comment. If you need to bring an agent into a thread, add a new comment rather than replying.
:::

![The Comments panel with @agent typed in the comment box, the mention suggestion below it, and the Send button](../../../img/screenshots/settings/@agent.png)

:::note Example comment
Great job handling this difficult customer, @Samke! I liked how you stayed calm when the customer raised their voice, took ownership immediately, and offered a clear solution with a timeline.
:::

:::tip Comments Best Practices
- **Be specific**: Reference exact moments in the interaction
- **Be practical**: Give clear next steps
- **Balance positive and constructive**: Acknowledge strengths, suggest improvements
:::

### Override a Scorecard Item

The scorecard shows the AI's outcome on each question. If you disagree with one, override it with your own Yes, No, or N/A, and the score recalculates. Vela's original scores stay on the record as **Initial Score**, **Initial Compliance Score**, and **Initial Quality Score** in the Call Details panel, next to the scores your override produced.

Override an item when the AI missed context, a required phrase was said in different words, or the situation needed human judgement. For the full step-by-step, see [Review and Score Interactions](../../features/quality-assurance-tools.md#a-complete-a-manual-scorecard).

---

## You're Ready to Go

You've completed the Team Lead Quick Start. You can now:

- ✅ Monitor team performance on the Dashboard
- ✅ Upload and review individual calls
- ✅ Provide coaching feedback to agents via comments

**Check your work landed.** Open the interaction you reviewed and confirm it shows a transcript, a scorecard outcome, and your comment. If you tagged the agent, they have been notified. Select **Mark as Reviewed** to record that you are finished with it, which is what your team's review coverage is measured on.

---

## If Something Did Not Work

| What you see | Why | What to do |
| :--- | :--- | :--- |
| The call is still processing | Transcription and analysis run in the background, and longer calls take longer | Wait for the email telling you the analysis is ready. Check **Settings → Notifications** if you are not receiving them |
| The interaction has no scorecard | No scorecard question is scoped to this agent's team | Ask your administrator to check the scope on the questions. See [Build an Agent Scorecard](../../agent-scorecard-guide.md) |
| Your comment did not reach the agent | The agent was not tagged, or the comment was a reply | Only new comments can tag an agent. Add a new comment and pick the agent from the `@` list |

For uploads, playback, and anything else, see the [Troubleshooting Guide](../../support/troubleshooting-guide.md).

---

## Next Steps

- [Set up monitoring](../../smart-search-guide.md): create a Smart Search to flag interactions automatically
- Bring in your historical call data with a bulk upload (see [Upload Your Data](../../data-upload.md))
- [Generate Reports](../../features/custom-reporting.md): schedule a recurring report for weekly management updates
- [How the Pieces Fit Together](../../explanation/how-the-pieces-fit.md): how these features relate, and the order to set them up in

---

## Need Help?

**Contact Support:** support@botlhale.ai
