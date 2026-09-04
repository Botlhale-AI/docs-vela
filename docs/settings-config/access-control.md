---
sidebar_position: 0
title: Roles and Access Levels
description: "Which Settings tabs you see, and what you can change on them."
type: reference
---

# Roles and Access Levels
Which Settings tabs you see, and whether you can change anything on them, depends on your **role** and your **access level**.

* **Role** is `admin`, `user`, or `agent`. It decides what you are allowed to do.
* **Access level** is organisational, departmental, or team. It decides how much of the organisation you see. The field is labelled **Access** in the product.

The two combine. An administrator with departmental access holds every administrative right, but only over their own department. See the [Glossary](../reference/glossary.md#access-level).

---

## Settings Tabs by Role

The tabs are listed below in the order they appear on the page.

| Settings Tab | Administrator | User | Agent | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Account** | View | View | View | Personal details and current organisation. Read-only. |
| **Organisations** | Edit, with organisational access. View otherwise. | View | No access | Organisation profile, duration allocation, score boundaries, redaction, and package limits. |
| **Notifications** | Edit | Edit | No access | Choose which in-app and email notifications you receive. |
| **Security** | Edit | Edit | Edit | Change your password. Hidden for SSO users. |
| **Users** | Edit, within your access level | View, within your access level | No access | Add and edit accounts, and manage departments and teams. |
| **Requests** | Edit | No access | No access | Approve or decline requests to view redacted information. |

![The Settings tab bar as an administrator sees it, with Account, Organisations, Notifications, Security, Users, and Requests](../../img/screenshots/settings/settings-tabs.png)

Everything in the Edit and View columns applies to your own account and your own access level, not to the organisation as a whole.

:::note Agents use the Agent Portal
Agents sign in to the separate Agent Portal, not the main platform. Its Settings page has two tabs, **account** and **security**, and Security is hidden for SSO users there too. Agents never see the other tabs.
:::

---

## What Each Role Can Do

### Administrator

Administrators hold every administrative right in Vela, limited to what their access level covers.

* **Users:** Add, edit, and deactivate accounts, including other administrators. The list only shows accounts within your access level, and the Access options you can grant stop at your own level. An administrator with departmental access cannot create an organisational user.
* **Structure:** Create and edit departments and teams. Creating a department requires organisational access. Creating a team requires organisational or departmental access.
* **Organisation settings:** Set the score boundaries, redactable entities, duration usage policy, and agent report schedule. Changing these requires **both** the administrator role and **organisational** access. An administrator with departmental or team access sees the settings but cannot save changes.
* **Redaction:** Reveal masked information on any interaction through **Review Redacted Info**, without raising a request.
* **Requests:** Approve or decline other users' requests through the **Requests** tab. See [Access Requests](./access-requests-audits.md).

Removing an account is a deactivation, not a deletion. The control is a bin icon and the prompt reads **Delete User**, but the record stays in place. The user can no longer sign in, and an administrator brings them back with **Show Deleted Users** and **Reactivate**. See [User and Team Management](./user-management.md).

### User

The User role covers day-to-day work, meaning reviewing interactions, coaching agents, and reporting. Team leads and QA managers are normally given this role.

* **Users:** See the user list and the Org Table within their access level, but no controls that add, edit, or deactivate an account.
* **Organisation settings:** Open the **This Org** sub-tab and read every setting on it, including the score boundaries and package limits. Nothing on it can be saved.
* **Redaction:** By default, raise a request per interaction with **Request Redacted Access**. A request covers that one interaction only. An administrator can grant **View Redactions** on the account, after which the user reveals masked information themselves through **Review Redacted Info**.
* **Requests:** Cannot see the **Requests** tab, so cannot approve anything, including their own request.

### Agent

Agents do not use the main platform. They sign in to the **Agent Portal** and work entirely within it.

* **Account and password:** The Agent Portal has its own **account** and **security** tabs. Security is hidden for SSO users.
* **No configuration:** No access to organisation settings, users, teams, or quality thresholds.
* **Performance:** Scores, courses, and coaching are all viewed in the Agent Portal.

---

## Access Levels

Access level decides how much of the organisation a role applies to.

| Access level | Sees |
| :--- | :--- |
| **Organisational** | Every department and team in the organisation. |
| **Departmental** | Their own department, and the teams inside it. |
| **Team** | Their own team. |

This filtering applies to the user list, the Org Table, and the filter options offered on them. It is set per user on the **Access** field, described in [User and Team Management](./user-management.md#2-role-access-and-view-redactions).

---

## Related

- [User and Team Management](./user-management.md): set a person's role and access level
- [Account and Security](./account-security.md): what each user manages on their own account
- [Access Requests](./access-requests-audits.md): approve requests to view redacted information

## Need Help?

**Contact Support:** support@botlhale.ai
