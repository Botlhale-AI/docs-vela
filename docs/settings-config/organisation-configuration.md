---
sidebar_position: 2
title: Organisation Configuration
---

# Organisation Configuration & Limits 🇿🇦

The **Organisations** tab, combined with specific settings from the Notifications section, is where Administrators manage the overall profile, financial limits, quality boundaries, and data security for the current organisation.

:::warning ACCESS RESTRICTION
This section is fully editable by **Administrators and Team Leads** except the current package of the account. **Administrators** can change the package that the account is on by contacting support.
:::

---

## 1. Organisation Profile and Usage Monitoring

The **This Org** sub-tab provides an overview of your allocated resources and current consumption.

### A. Organisation Details
* **Organisation Logo:** You can upload a new logo here.
* **Organisation Name & Bio:** Displays the name and a short description.
* **Org Status:** Indicates the current status (e.g., `Active`).

### B. Allocated Duration and Usage
This monitors the analysis minutes consumed in the current billing cycle.

* **Allocated Monthly Duration:** The total analysis time (in minutes) allocated to the organisation.
* **Current Duration Usage:** The analysis time consumed so far in the current cycle.
* **Usage Meter:** A graphical representation of the percentage of allocation used.

### C. Duration Usage Settings (Billing Control)
Administrators must set the policy for when the monthly allocation is exceeded.

| Setting | Description |
| :--- | :--- |
| **Halt call analysis** | If checked, all call processing will **stop** when the monthly allocated duration is reached. |
| **Continue with call analysis at additional rates** | If checked, call analysis will **continue** past the allocated duration, and you will be billed at an additional rate for the extra usage. |

---

## 2. Quality Boundaries and Sharing

These settings, found within the Notifications section under Organisations, define performance categories and automated reporting.

### A. Agent Score Boundaries
These boundaries define the scoring ranges that Vela uses to categorise agent performance (Red, Amber, Green) across the platform.

| Category | Score Range | Definition |
| :--- | :--- | :--- |
| **Red** | 0 to Lower Bound (exclusive) | Performance concern |
| **Amber** | Lower Bound to Upper Bound (exclusive) | Good, room for improvement |
| **Green** | Upper Bound to 100 (inclusive) | Excellent performance |
| **Lower Bound** | Set the score at which performance moves from Red to Amber (e.g., `50`). | Editable by Administrator. |
| **Upper Bound** | Set the score at which performance moves from Amber to Green (e.g., `80`). | Editable by Administrator. |

### B. Agent Performance Sharing
Administrators can configure the automatic sharing of agent performance reports.

* **Share Agent Performance Reports:** Use the checkbox to enable this feature.
* **Frequency Options:** Select whether reports are sent **Daily**, **Weekly** (on a specific day and time), or **Monthly**.

---

## 3. Data Security and Redaction

Administrators control the redaction of sensitive data within call transcripts to maintain compliance.

* **Redactable Entities:** Configure which sensitive information types Vela's AI should automatically mask in transcripts.
* **Examples:** Entities include Credit Card numbers, Phone Numbers, Email addresses, Names of People, and ID Numbers.
* **Status:** The status indicates whether that entity is currently enabled for redaction.