---
id: security-compliance
sidebar_position: 5
title: Security and Compliance
description: "Hosting, encryption, POPIA and GDPR compliance, and how your data is handled."
type: reference
---

# Security and Compliance

Vela runs on AWS, encrypts your data in transit and at rest, and is independently audited for POPIA and GDPR compliance. This page covers hosting, encryption, the standards Vela meets, how your data is backed up and recovered, and the security controls you operate yourself inside Vela.

{/*
Keep this comment below the intro paragraph. Docusaurus takes the category card
description from the first content block, so a comment at the top of the file
becomes the card description.

Sources. Hosting onwards: Botlhale's DR policy and security statement. Confirm
against the current version of that policy at each release, since the figures
and certifications move.
In the Product: the vela source.
*/}

---

## In the Product

These are the controls your own administrators configure and use.

### Signing In

* Vela supports Google and Microsoft sign-in. Where an organisation uses either, passwords are held by that identity provider and the **Security** tab is hidden in Vela.
* Passwords set in Vela must be at least 8 characters and include a letter, a number, and a special character. See [Password Requirements](./settings-config/account-security.md#password-requirements). They are stored hashed, never in plain text.
* Sessions expire after 24 hours, after which you sign in again.

### Controlling What People See

Access is governed by two settings on each account, a **role** and an **access level**. Together they decide which parts of Vela a person reaches and how much of the organisation's data they see. See [Roles and Access Levels](./settings-config/access-control.md).

Deactivating an account withdraws access while keeping the record. See [User and Team Management](./settings-config/user-management.md#e-deleting-and-reactivating).

### Masking Sensitive Information

Transcripts are masked for everyone by default, administrators included. An administrator chooses which categories are masked, from credit card and bank account numbers to ID numbers, phone numbers, and email addresses. See [Organisation Configuration](./settings-config/organisation-configuration.md#5-redactable-entities).

![The categories an administrator can choose to mask, on the organisation settings page](../img/screenshots/settings/redaction.png)

Getting to the unmasked version is a deliberate, recorded act:

* Administrators, and users granted **View Redactions**, reveal it themselves.
* Everyone else raises a request for that one interaction, which an administrator approves or declines.
* Every processed request is kept, showing who asked, which interaction it was for, and who decided. See [Access Requests](./settings-config/access-requests-audits.md).

---

## Hosting

Vela runs entirely on Amazon Web Services (AWS). The production environment that holds the platform and your data sits in a logically isolated Virtual Private Cloud (VPC), with access restricted to operations support staff.

---

## Encryption

* **In transit:** traffic between your browser and Vela is encrypted with TLS 1.2 or above.
* **At rest:** stored data is encrypted with AES-256.

AWS has no access to unencrypted customer data.

---

## Compliance

* An AWS-certified partner audits Vela's infrastructure against the AWS Well-Architected Framework. The audit also covers POPIA and GDPR compliance.
* Customer data is stored on AWS, which is SOC 2 Type 2 certified.
* ISO 27001 certification is in progress.

---

## Monitoring and Testing

Security, performance, and availability are monitored around the clock. Automated security tests run regularly, and an independent party carries out penetration testing.

---

## Backups and Recovery

Customer data is backed up regularly and held redundantly across multiple AWS availability zones, encrypted in transit and at rest.

Vela's recovery targets are:

* **Recovery Point Objective (RPO): 24 hours.** The most data, measured in time, that a major incident could cost you.
* **Recovery Time Objective (RTO): 4 business hours.** The target time to restore service after a major incident.

---

## Data Residency

Your recordings and transcripts are stored in AWS data centres. The region is set per deployment. For the region holding your organisation's data, contact your Account Manager.

---

## Requesting More Detail

For a security questionnaire, an audit summary, or any detail not covered here, contact your Account Manager or **support@botlhale.ai**.

---

## Related

- [Roles and Access Levels](./settings-config/access-control.md): the roles and access levels that govern what people see
- [Organisation Configuration](./settings-config/organisation-configuration.md): choose which sensitive entities are masked
- [Access Requests](./settings-config/access-requests-audits.md): how access to masked content is granted and recorded

---

## Need Help?

**Contact Support:** support@botlhale.ai
