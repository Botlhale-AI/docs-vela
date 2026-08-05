---
sidebar_position: 4
title: Access Requests
type: reference
---

# Access Requests

The **Requests** tab is where Administrators process requests to view redacted information. When a user without **View Redactions** needs to see masked content in a call, they raise a request here for an Administrator to approve or decline.

:::warning ACCESS RESTRICTION
This tab is **only visible to and manageable by Administrators**. A user without **View Redactions** initiates a request from within a call, but only Administrators can view, process, and approve requests here.

Transcripts are masked by default for everyone. Administrators, and users granted **View Redactions**, reveal masked content on demand, so they do not raise requests themselves. The permission is set per account in **Settings → Users**, described in [User and Team Management](./user-management.md#2-role-access-and-view-redactions).
:::

---

## 1. Processing Access Requests

The **Requests** tab is divided into two sub-sections to manage the workflow of access requests.

### A. Pending Requests (Action Required)

Requests that users have submitted and that have **not yet been processed**.

This is your working queue. Review each request and either **Approve** or **Decline** it.

### B. Completed Requests

Requests you have already processed, kept as a record of each one.

| Field | Description | Status Indication |
| :--- | :--- | :--- |
| *(relative time)* | How long ago the request was submitted, for example "2 hours ago". It sits beside the heading **Request for Access to Redacted Information** rather than under a label. | N/A |
| **Requested By** | The name and email address of the user who initiated the request. | N/A |
| **Call ID** | A link to the specific call the user requested access to. | N/A |
| **Status** | The final outcome of the request. | **Approved** (Green) or **Declined** (Red). |
| **Comment** | An optional note added by the requester when submitting. | N/A |
| **Completed By** | The name and email of the Administrator who approved or declined the request. | N/A |

---

{/* SCREENSHOT: The Completed requests table, showing the Submitted, Requested By, Call ID, Status, Comment, and Completed By columns with at least one Approved and one Declined row so both status colours appear. Save as img/screenshots/settings/requests-completed.png */}

## 2. Why It Matters

The Requests tab keeps access to redacted information controlled and recorded:

* **Redaction:** Vela masks the entities an Administrator selects in the organisation's redaction settings, such as Credit Card, Phone Number, ID Number, and Email.
* **Controlled access:** A user without **View Redactions** sees unredacted content only after an Administrator approves their request.
* **A record of each request:** The **Completed** tab keeps every processed request, showing who asked, which call it was for, and who approved or declined it.

---

## Related

- [User and Team Management](./user-management.md): grant View Redactions so a user does not need to ask
- [Organisation Configuration](./organisation-configuration.md): choose which entities are masked
- [Settings Access by Role](./access-control.md): why only administrators see this tab

## Need Help?

**Contact Support:** support@botlhale.ai
