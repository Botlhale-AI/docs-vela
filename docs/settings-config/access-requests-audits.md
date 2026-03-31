---
sidebar_position: 4
title: Access Requests & Audits
---

# Access Requests and Audits

The **Requests** tab allows Administrators to manage the audit trail of sensitive data access. This ensures regulatory compliance by systematically tracking when users are granted permission to view data that is typically redacted.

:::warning ACCESS RESTRICTION
This tab is **only visible to and manageable by Administrators**. Team Leads can *initiate* a request for redacted information in another section, but they cannot view, process, or approve requests here.
:::

---

## 1. Processing Access Requests

The **Requests** tab is divided into two sub-sections to manage the workflow of access requests.

### A. Pending Requests (Action Required)

This section lists all requests that have been submitted by users but have **not yet been processed** by an Administrator.

* **Administrator Task:** This is the primary queue where Administrators review new requests and decide to **Approve** or **Decline** the access.

### B. Completed Requests (Audit Trail)

This section lists all requests that have been fully processed and resolved, serving as the official audit trail.

| Field | Description | Status Indication |
| :--- | :--- | :--- |
| **Request Type** | The nature of the request (e.g., Access to Redacted Information). | N/A |
| **Timestamp** | The date and time the request was processed. | N/A |
| **Requested By** | The name and email address of the user who initiated the request. | N/A |
| **Call ID** | The unique identifier of the specific call or item the user requested access to. | N/A |
| **Status** | The final outcome of the request. | **Approved** (Green) or **Declined** (Red). |
| **Completed By** | The Administrator who finalised the request. | N/A |

---

## 2. Importance for Compliance

The Requests tab is critical for maintaining data protection and auditability:

* **Redaction Policy:** Vela automatically redacts sensitive entities (like Credit Card numbers, Phone Numbers, and ID Numbers) based on Administrator configuration.
* **Compliance:** This workflow ensures that temporary access to unredacted data is only granted with explicit, logged authorisation from an Administrator.
* **Audit Logging:** The **Completed** section provides an immutable record of who requested access to specific sensitive data and who approved or declined that request, supporting legal and internal auditing requirements.