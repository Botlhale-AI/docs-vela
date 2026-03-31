---
sidebar_position: 0
title: Settings Access by Role
---

# Platform Settings Access by Role

The **Administration and Configuration** section contains sensitive data and critical system settings. Access to different tabs and functionality within the Settings menu is strictly determined by your user role.

This guide outlines which roles can view, edit, or manage the features within each main Settings category.

---

## Settings Menu Breakdown by User Role

The table below shows which tabs are visible to each user role when navigating the main Settings menu.

| Settings Tab | Administrator | Team Lead | Agent | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Account** | ✅ **Full View** | ✅ **Full View** | ✅ **Full View** | View personal details and current org (Name, Email). |
| **Security** | ✅ **Full View/Edit** | ✅ **Full View/Edit** | ✅ **Full View/Edit** | Change user password. |
| **Organisations** | ✅ **Full Edit** | ✅ **View** (Own Scope only) | ❌ **No Access** | Manage organisation profile, usage limits, and score boundaries. |
| **Notifications** | ✅ **Full Edit** | ✅ **Full Edit** | ❌ **No Access** | Configure email and in-platform notifications. |
| **Users** | ✅ **Full Edit** | ✅ **View** (Own Scope only) | ❌ **No Access** | Create, manage, and assign roles/teams to user accounts. |
| **Requests** | ✅ **Full Edit** (Process/Approve) | ❌ **No Access** | ❌ **No Access** | Track and process requests for access to redacted information. |

---

## Role Permissions Summary

### 1. Administrator (Full Control)

Administrators have full system access and management capabilities.

* **User Management:** Can create, edit, and delete all user accounts, including other Administrators.
* **Organisational Structure:** Manages the hierarchical structure (Organisation, Departments, Teams).
* **Configuration:** Sets critical system defaults, such as **Agent Score Boundaries**, **Redactable Entities**, and **Duration Usage Settings** (Halt/Continue call analysis).
* **Auditing:** Processes and resolves access requests through the **Requests** tab.

### 2. Team Lead (Scoped Management)

Team Leads have extensive access to features relevant to managing their assigned agents and team performance.

* **User Visibility:** Can view user details within their assigned **scope** (Team, Department, or Organisation).
* **Request Initiation:** Can *make* requests for access to redacted information (via another section), but **cannot approve them** (they cannot see the **Requests** tab).
* **Organisations Tab:** Can only **view** organisation details, allocated usage, and score boundaries; they **cannot edit** these settings.

### 3. Agent (Personal Account Only)

Agents have the most restricted access, focused primarily on their individual security and performance.

* **Account Access:** Limited to the **Account** and **Security** tabs to manage their personal details and password.
* **No Configuration:** Cannot view or access any configuration settings related to the organisation, users, or quality thresholds.
* **Performance:** All performance data is viewed through their dedicated **Agent Portal**.