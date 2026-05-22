---
id: knowledge-base-guide
title: Knowledge Base Guide
sidebar_label: Knowledge Base Guide
sidebar_position: 4
---

# Knowledge Base Guide

## What the Knowledge Base Does in Vela

The Knowledge Base stores your organisation's procedures, policies, scripts, and product information as uploaded documents. When a Knowledge Base document is linked to a Smart Search, Vela's AI uses that document as the reference point for evaluating agents. Instead of scoring interactions against generic criteria, the AI can assess whether agents followed your specific procedures as written.

This is the key functional connection: **without a linked Knowledge Base document, the AI scores interactions based solely on the Agent Scorecard criteria. With a linked document, the AI can also evaluate agents against the actual content of your policies and procedures.**

The Knowledge Base is managed by administrators and team leads. Agents do not upload or manage documents.

---

## Uploading a Document

### Step 1: Navigate to the Knowledge Base

1. Click **Smart Detector** in the left sidebar.
2. Select the **Knowledge Base** tab.

![ Knowledge Base](../img/screenshots/smart_search/smart9.png)

### Step 2: Upload Your Document

1. Click **Upload**.
2. Select your document. Supported types are PDF files and URLs pointing to web-based content.
3. Enter a clear **Description** for the document — describe what the document covers and which teams or situations it applies to. This description helps you identify the document later when linking it to searches.
4. Set the **Scope**: Organisation, Department, or Team. The scope controls which users can see and use the document. Set it to match the teams whose interactions the document is relevant to.
5. Save the upload.

### Step 3: Link the Document to a Smart Search

Uploading a document makes it available in the Knowledge Base, but the AI will only use it during scoring once it is linked to an active Smart Search.

1. Navigate to **Smart Detector → Smart Search**.
2. Open or create the Smart Search you want to link the document to.
3. In the Smart Search configuration, select the Knowledge Base document to associate with this search.
4. Save the Smart Search.

Once linked, interactions matched by that Smart Search will be evaluated against both the scorecard criteria and the content of the linked document.

---

## What to Upload

Upload documents that define how agents should behave in specific situations — the materials you would hand a new agent and say "follow this". Useful content includes:

- Call scripts and opening or closing statement requirements
- Escalation procedures and criteria
- Compliance obligations and mandatory disclosures
- Product or service information that agents are expected to communicate accurately
- Objection-handling frameworks and approved responses

Avoid uploading general background reading or marketing materials that do not define specific agent behaviours. The AI uses document content to assess what agents said and did; documents that do not describe observable agent actions will not improve scoring accuracy.

---

## Access Control

Each document is assigned a scope that determines which users can access it:

| **Scope** | **Who Has Access** |
|-----------|-------------------|
| **Organisation** | All users across the organisation |
| **Department** | Users belonging to the selected department |
| **Team** | Users belonging to the selected team |

Set the scope to match the teams whose calls the document is relevant to. A compliance procedure that applies to the whole organisation should be scoped to Organisation. A script specific to one team's product line should be scoped to that team.

---

## Keeping the Knowledge Base Current

Update documents when procedures change. AI scoring based on an outdated procedure document will produce results that conflict with your current standards, which undermines both the scoring accuracy and agent confidence in the feedback they receive.

When a procedure is updated, upload the new version with a description that reflects the change and the date it took effect. If the old version is no longer applicable, remove it from the Knowledge Base to prevent confusion.

Review the documents in your Knowledge Base at least quarterly and whenever a significant policy or process change occurs.

---

## Troubleshooting

**The Knowledge Base document does not appear to be affecting AI scoring.**

Confirm that the document has been explicitly linked to the relevant Smart Search. Uploading a document to the Knowledge Base does not automatically apply it to all searches — the link must be created manually in the Smart Search configuration.

**Uploaded document is not visible to certain team leads or agents.**

Check the scope setting on the document. If it is scoped to a specific team or department, users outside that scope will not see it. Adjust the scope if wider access is needed.

---

## Next Steps

| **For Smart Monitoring** | **For Performance Evaluation** | **For Team Development** |
|-------------------------|-------------------------------|------------------------|
| [Set Up Smart Monitoring](./smart-detector-overview.md) | [Create Agent Scorecards](./agent-scorecard-guide.md) | [Improve Agent Performance](./Agents.md) |

### See also

- [Smart Search Guide](./smart-search-guide.md) — Create and manage automated searches
- [Administrator Setup](./getting-started/quick-start/administrator-setup.md) — Initial platform configuration
- [Dashboard Overview](./Dashboard.md) — Monitor team performance

## Need Help?

**Contact Support:** support@botlhale.ai
