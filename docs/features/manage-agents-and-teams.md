---
sidebar_position: 5
title: Manage Agents and Teams
description: "Add agents, move them between teams, and remove the ones who leave."
type: how-to
---

# Manage Agents and Teams
Agents are the people whose interactions Vela analyses. This page covers keeping those records right after the initial setup: adding someone who joins your organisation, moving someone between teams, and removing someone who leaves.

Keep these records accurate as your teams change. Vela groups every result by the department and team on an agent's record. An agent left in the wrong team is still scored, but their results land in another team lead's figures. Nothing looks broken, which is why it is worth checking. The numbers look reasonable but are wrong.

Check an agent's team whenever they join, move, or leave, and again after any bulk import. Insights are only as accurate as the assignments behind them.

---

## Before You Begin

You need:

- **Access level:** Organisational, Departmental, or Team, covering the agents and teams you are changing. You can move an agent into any team your access level covers. See [Access Level](../reference/glossary.md#access-level).
- **The department a team belongs to.** A team is created inside a department, so the department has to exist first. See [Administrator Setup](../getting-started/quick-start/administrator-setup.md).
- **The agent's name, and an email address where your organisation uses voice profiles or the Coaching Portal.** The table under [Add an Agent](#2-add-an-agent) says which applies to you.

:::note Agents are not users
An agent is a person whose interactions are analysed. A user is anyone who has access to Vela, including administrators. Adding one does not create the other, and a bulk CSV import creates agents only. See [Agent](../reference/glossary.md#agent) and [User](../reference/glossary.md#user).
:::

---

## 1. Find an Agent

Go to **Agents → Agent Details** in the left sidebar. The table lists everyone within your access level, under **Name**, **Email**, **Department**, and **Team**. Five controls sit above it:

| Control | What it does |
| :--- | :--- |
| **Add Agent** | Opens the Add an Agent modal, covered below |
| **Search** | Narrows the list by name or email |
| **Sort By** | Orders the list on any column |
| **Filter** | Opens **Filter By**, which filters the list by department, team, and **Status**. **Department** appears with Organisational access, **Team** with Organisational or Departmental access, and **Status** only where your organisation uses voice profiles. Select **Apply** to use it |
| **Export** | Downloads the agents on the current page, up to 50, as searched and filtered, with each agent's department and team, plus status where your organisation uses voice profiles. For a longer list, export each page in turn |

Unassigned agents read **No Department** or **No Team** rather than sitting blank, so sorting on either column brings the gaps together. The **Actions** column at the end of each row holds the edit and delete controls. Past one page, pagination sits below the table: **Previous** and **Next**, with **Page 1 of 2** between them.

![The Agent Details page, with Add Agent above the Search box, Sort By, Filter, and Export, and the agent table below showing the Name, Email, Department, Team, Voice Profile Status, and Actions columns](../../img/screenshots/agent_details/agent-details-table.png)

---

## 2. Add an Agent

Select **Add Agent** to open **Add an Agent** modal. It has two tabs, **Single Upload** for one person and **Batch Upload** for a CSV of many.

On **Single Upload**:

1. Enter the **Name**, and the **Email** where it is required.
2. Choose the **Team**. If it does not exist yet, **Create New Team** beside the field makes one without leaving the modal. It appears for an administrator with Organisational or Departmental access.
3. Select **Save Changes**, or **Discard** to abandon it.

![The Add an Agent modal on the Single Upload tab, with the Name, Email, and Team fields and the Create New Team link](../../img/screenshots/agent_details/add-agent-single.png)

Name and team are always required. Whether you also need the email, and what the agent receives when you save, depends on your organisation:

| Your organisation has | Email address | What the agent receives |
| :--- | :--- | :--- |
| Neither voice profiles nor the Coaching Portal | Optional | Nothing |

{/* UNVERIFIED: on vela origin/vela-fly and origin/main, app/api/agents/route.js (87-101, 240-261) looks up an existing agent by email with no active filter, and an empty email is sent as "". A second agent added without an email is therefore refused with: An agent with the email "" already exists in your organization. On the Create New Team path the team is created before that check, so an empty team is left behind. Raised as a product bug 2026-10-07. Needs a live check before the docs state a limit. */}
| The Coaching Portal | Required | **Invitation to Vela**, which sets up the sign-in they use for the Agent Portal |
| Voice profiles | Required | **Vela Voice Agent ID Invite**, asking them to record a sample |
| Both | Required | Both emails, sent separately |

Adding an agent can therefore email them straight away. Check the name and address before saving rather than after.

:::tip Adding many agents at once
**Batch Upload**, the second tab, takes a CSV and creates the departments and teams it names as it goes. That is the route for an initial import. See [Importing Agents in Bulk](../settings-config/user-management.md#4-importing-agents-in-bulk).
:::

![The Add an Agent modal on the Batch Upload tab, with the CSV upload area](../../img/screenshots/agent_details/bulk-add.png)

---

## 3. Edit or Remove an Agent

The **Actions** column holds both.

**Edit** lets you change the agent's name and email. Their team shows but cannot be changed here. To move them, use **Reassign**, covered below.

**Delete Agent** removes the agent from the list. Their past interactions and scores keep counting towards the team's historical figures. A deleted agent cannot be restored, or added again under the same name or email, from this screen. To bring one back, contact **support@botlhale.ai**.

{/* Verified on vela and vela-fly: agent_details/page.jsx fetches active agents only and table.jsx never sets showDeactivated, so the Reactivate button cannot be reached; api/agents/route.js rejects a new agent whose name or email matches any existing agent, deleted ones included. Needs a live screen to confirm before re-adding a restore step. */}

---

## 4. Set Up Voice Profiles

A voice profile helps Vela tell the agent apart from the customer in a recording. Better speaker separation means a more accurate transcript, and everything scored from that transcript improves with it.

:::note This section depends on your organisation
Voice profiles are enabled per organisation. Where the **Voice Profile Status** column appears on the Agent Details table, yours has them and this section applies.
:::

The **Voice Profile Status** column shows where each agent stands, and carries the action for that state:

| Status | What it means | What to do |
| :--- | :--- | :--- |
| **Not Uploaded** | No voice sample yet | Send the agent an invite to record one |
| **Waiting** | Invited, no sample provided yet | Resend the invite if it has been a while |
| *(a toggle)* | A sample has been provided | Switch the profile off to stop Vela using it, and on again to resume |

The agent records their own sample from the invitation, so this is a request rather than something you complete for them. Chase **Waiting** rows. Until the agent records a sample, Vela separates the speakers automatically.

Where a sample exists, the column shows a toggle rather than a word. **Export** names the same two states in writing, as **Active** and **Inactive**, so use the export to read the status of a page of agents at once rather than reading toggles row by row.

---

## 5. Move Agents Between Teams

**Reassign** moves several agents at once, rather than opening each agent in turn.

1. Tick the agents you want to move. **Reassign** appears above the table once at least one is ticked.
2. Select **Reassign**, then choose the department and team to move them into. **Create new team** makes the destination on the spot if it does not exist yet.
3. Confirm the move.

![The Reassign modal, with the department and team selectors for moving the chosen agents](../../img/screenshots/agent_details/reassign.png)

![Create new team opened from within Reassign, so the destination can be made without leaving the move](../../img/screenshots/agent_details/create-new-team-on-reassign.png)

:::note Teams themselves are managed in Settings
This screen can create a team in passing, while adding or reassigning an agent. Teams are renamed and moved between departments on the **Org Table**, under **Settings → Users**. See [Departments and Teams](../settings-config/user-management.md#3-departments-and-teams).
:::

---

## Check Your Work

Open **Agents → Agent Details** and find the agent you changed. Both should name the department and team you chose. Where either reads **No Department** or **No Team**, the assignment did not take.

Changes apply from now on rather than backwards. An agent you moved keeps their existing interactions under the team that handled them, so their new team's figures build up from today rather than jumping.

For voice profiles, the status is the check. **Not Uploaded** and **Waiting** both mean Vela is still separating speakers without help from a profile, whatever invitations have been sent.

---

## Related

- [Administrator Setup](../getting-started/quick-start/administrator-setup.md): create departments and import agents in bulk when first setting up
- [Monitor Agent Performance](./monitor-agent-performance.md): the performance figures these records feed
- [Glossary](../reference/glossary.md): the difference between an agent, a user, a team, and a department
- [User and Team Management](../settings-config/user-management.md): manage the people who sign in to Vela, rather than the agents they monitor

## Need Help?

**Contact Support:** support@botlhale.ai
