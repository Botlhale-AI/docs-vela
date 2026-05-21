---
sidebar_position: 3
title: User & Team Management
---

# User and Team Management

The **Users** tab is the control centre for managing individual user accounts, assigning roles, and structuring the organisation's teams and departments.

:::warning ACCESS RESTRICTION
**Administrators** have full edit access to this tab. **Team Leads** can view user details within their assigned scope (team, department, or organisation) but cannot create or modify accounts. **Agents** have no access to this section.
:::

---

## 1. Managing Individual User Accounts

The **Users** sub-tab provides a comprehensive list and management tools for every account in your organisation.

### A. Finding and Adding Users

* **Search Bar:** Quickly find specific users by typing in a name or email address.
* **Filter:** Open options to filter the list by **Department**, **Team**, or **Role**.
* **Add User:** Click the **Add User** icon to create a new user account or invite a team member.
* **Show Deleted Users:** View previously deactivated accounts.

### B. Configuring User Permissions

When adding or editing a user, Administrators define their access and visibility:

| Setting | Description | Role Options |
| :--- | :--- | :--- |
| **Role** | The level of administrative access and permissions granted. | `admin` or `user`. |
| **View** | The **scope** of data the user can view across the platform. | `organisation`, `department`, or `team`. |
| **View Redactions** | Permission to view transcripts *before* sensitive data is masked. | `Yes` (can see sensitive data) or `No` (sees redacted data). |

---

## 2. Managing Organisational Structure

The **Org Table** sub-tab provides a hierarchical view of the Departments and Teams within your organisation.

### A. Viewing the Hierarchy

The table is organised into three main columns, showing nested relationships:

1.  **Organisation:** The top level, also listing users who are members but currently unassigned to a team or department.
2.  **Departments:** All created departments (e.g., Load Dept).
3.  **Teams:** All teams, typically nested under a Department, showing their member lists (e.g., New Team (Test) has Khaya as a member).

:::tip Unassigned Users
If a Department or Team is listed with the label **"No Users"**, it means the structure exists but no user accounts are currently assigned to it.
:::

### B. Creating New Structures

* **Create:** Use the **Create** icon to initiate the process of establishing a new **Department** or a new **Team** within the organisational structure.

---

## 3. Bulk Importing Agents

While individual user creation is done here, the **Bulk Upload** feature for agents is found under the **Agent Management** feature.

When bulk importing agents via a CSV file, Administrators have two choices regarding new teams and departments:

* **Create new departments and teams:** If a department or team in the CSV does not exist in the Org Table, Vela will create them.
* **Skip agents:** Agents whose teams or departments do not yet exist will be skipped during the import.