---
sidebar_position: 4
title: Access Requests
description: "Process requests from users who need to see redacted information."
type: reference
---

# Access Requests

The **Requests** tab is where Administrators process requests to view redacted information. When a user without **View Redactions** needs to see masked content in a call or a chat, they raise a request with **Request Redacted Access** on the call or chat, and it arrives here for an Administrator to approve or decline.

:::warning Administrators only
This tab is **only visible to and manageable by Administrators**. Administrators, and users granted **View Redactions**, reveal masked content themselves and raise no requests. The permission is set per account in **Settings → Users**, described in [User and Team Management](./user-management.md#2-role-access-and-view-redactions).
:::

---

## 1. Processing Access Requests

Whether someone raises a request at all depends on one setting on their account, which is why most people never see this workflow:

```mermaid
flowchart LR
    M("Someone opens a call or chat<br/>with masked content") --> P{"Does the account have<br/>View Redactions?"}
    P -- Yes --> R("They reveal it themselves.<br/>No request, nothing to process")
    P -- No --> Q("They raise a request<br/>from inside the call")
    Q --> PE("Pending<br/>your working queue")
    PE --> CO("Completed<br/>approved or declined,<br/>with a record of who did both")
```

{/* UNVERIFIED: in vela-fly source the View Redactions grant is never read (calls/[id]/page.jsx compares profile.organisations entries, which are objects, with the organisation id), so non-admins with the grant still see Request Redacted Access, and the Yes branch above holds for administrators only. Same note as security-compliance.md. Raised as a product bug. Needs a live check before the docs change. */}

The **Requests** tab has two sub-tabs, **Pending** and **Completed**.

### A. Pending Requests

Requests that users have submitted and that have **not yet been processed**.

This is your working queue. Review each request and either **Approve** or **Decline** it.

Each request is a card reading **Request for Access to Redacted Information**, with how long ago it arrived. It shows **Requested By**, the **Call ID** the request is for, a **Status** of **pending**, and the **Comment** the user wrote when asking, if they wrote one.

![The Pending sub-tab of Requests, with one request card showing Requested By, Call ID, Status, and Comment above the Approve and Decline buttons](../../img/screenshots/settings/requests-pending.png)

Read the **Comment** before deciding. It is the only place the user says why they need the unmasked version. The comment is optional, so a card with no **Comment** line means the user gave no reason.

### B. Completed Requests

Requests you have already processed, kept as a record. Each request is a card rather than a table row, with the fields below down the left of it.

| Field | Description | Status Indication |
| :--- | :--- | :--- |
| *(timestamp)* | When the request was submitted. It sits beside the heading **Request for Access to Redacted Information** rather than under a label. Requests from today read as relative time, such as "2 hours ago". Older ones show a date and time, such as "Jul 29 at 07:47 PM". | N/A |
| **Requested By** | The name and email address of the user who initiated the request. | N/A |
| **Call ID** | A link to the interaction the user requested access to. The field is labelled **Call ID** for a chat as well as a call. | N/A |
| **Status** | The final outcome of the request. | **Approved** (Green) or **Declined** (Red). |
| **Comment** | An optional note added by the requester when submitting. | N/A |
| **Completed By** | The name and email of the Administrator who approved or declined the request. | N/A |

{/* ENGINEERING (known bug, documented as intended): settings/requests.jsx@vela-fly:86-90 (Pending) and :161-165 (Completed), the same on origin/main:89,164, link every request to /interactions/calls/${request.call}. Chats use ViewRedactedInfo from calls/[id] (chats/[id]/page.jsx:22), and the server action in calls/[id]/call.js:357 stores the chat's id as request.call. A chat request therefore links to the calls page with a chat id. Intended: chat requests link to /interactions/chats/<id>. Workaround: open the chat from Interactions → Chats. Converted from visible text 2026-10-08. */}

![The Completed sub-tab of Requests, with one approved and one declined request card showing the green and red status labels](../../img/screenshots/settings/requests-completed.png)

{/* The email addresses in Requested By and Completed By are masked on purpose, to keep real people's personal information out of the documentation under POPIA. The bars show where an address sits without disclosing it. */}

---

## 2. Why It Matters

The Requests tab keeps access to redacted information controlled and recorded:

* **Redaction:** Vela masks the entities an Administrator selects in the organisation's redaction settings, such as Credit Card, Phone Number, ID Number, and Email.
* **Controlled access:** A user without **View Redactions** sees unredacted content only after an Administrator approves their request. An approval lasts 24 hours for that one interaction. After that, the user raises a new request.
* **A record of each request:** The **Completed** tab keeps every processed request, showing who asked, which call it was for, and who approved or declined it.

---

## Related

- [User and Team Management](./user-management.md): grant View Redactions so a user does not need to ask
- [Organisation Configuration](./organisation-configuration.md): choose which entities are masked
- [Roles and Access Levels](./access-control.md): why only administrators see this tab

## Need Help?

**Contact Support:** support@botlhale.ai
