---
id: knowledge-base-guide
title: Build Your Knowledge Base
sidebar_position: 4
type: how-to
---

# Build Your Knowledge Base

## What the Knowledge Base Does in Vela

The Knowledge Base stores your organisation's procedures, policies, scripts, and product information as uploaded documents. On its own, a document does nothing. You link it to the feature that should use it, and Vela's AI then reads that document as reference when it evaluates an interaction.

You can link a Knowledge Base document to:

- an **Agent Scorecard question**, so the AI judges that question against your written procedure rather than generic wording. This shapes the automatic score.
- a **Smart Search**, so the AI weighs your document when deciding whether an interaction matches. This sharpens what the search flags, it does not change the score.
- a **Smart Question**, so the AI uses your document when answering the question.

In every case you link the document the same way: in that item's configuration, turn on the Knowledge Base option and select the document.

The Knowledge Base is managed by administrators and team leads. Agents do not upload or manage documents.

---

## Uploading a Document

### Step 1: Navigate to the Knowledge Base

In the left sidebar, click **Smart Detector**, then **Knowledge Base**.

![The Knowledge Base page, with PDF upload above the Document Library](../img/screenshots/smart_search/smart9.png)

{/* RESHOOT: smart9.png predates Smart Questions, so its sidebar shows only three Smart Detector entries and in the old order. The page content itself is still accurate. Also filed under smart_search/ rather than a knowledge base folder. */}

### Step 2: Upload Your Document

1. Drag a PDF onto the upload area, or click it to select one. Knowledge Base accepts PDF files.
2. Add a **Description** (optional). Say what it covers and which teams or situations it applies to, so you can identify the document later when linking it.
3. Set the document's scope under **Apply documents to**: the organisation, a department, or a team. The scope controls which users can see and use the document. Set it to match the teams whose interactions the document is relevant to.
4. Click **Upload Files**.

### Step 3: Link the Document

Uploading a document makes it available in the Knowledge Base, but Vela only uses it once you link it to a scorecard question, a Smart Search, or a Smart Question. The steps are the same for each. Linking to a Smart Search is shown here:

1. Navigate to **Smart Detector → Smart Search**.
2. Open or create the Smart Search you want to link the document to.
3. In the Smart Search configuration, turn on the Knowledge Base option and select your document.
4. Save the Smart Search.

![The Knowledge Base option at the foot of the Smart Search form, reading "Use a knowledge base document to enhance this smart search"](../img/screenshots/smart_search/knowledge_base.png)

To use the document when **scoring**, link it to an Agent Scorecard question instead, in the same way, under **Smart Detector → Agent Scorecard**. The AI then judges that question against the document rather than generic wording.

---

## What to Upload

Upload documents that define how agents should behave in specific situations. These are the materials you would hand a new agent and say "follow this". Useful content includes:

- Call scripts and opening or closing statement requirements
- Escalation procedures and criteria
- Compliance obligations and mandatory disclosures
- Product or service information that agents are expected to communicate accurately
- Objection-handling frameworks and approved responses

The test is whether a document describes an observable agent action. The AI reads these to assess what agents said and did, so material written for another purpose, such as background reading or marketing copy, leaves scoring accuracy where it was.

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

Update documents when procedures change. AI scoring based on an outdated procedure document produces results that conflict with your current standards, which undermines both the scoring accuracy and agent confidence in the feedback they receive.

When a procedure is updated, upload the new version with a description that reflects the change and the date it took effect. If the old version is no longer applicable, remove it from the Knowledge Base to prevent confusion.

Review the documents in your Knowledge Base at least quarterly and whenever a significant policy or process change occurs.

---

## Troubleshooting

**The Knowledge Base document does not appear to be affecting AI scoring.**

Confirm that the document has been explicitly linked to the item that should use it: a scorecard question, a Smart Search, or a Smart Question. To affect the score, it must be linked to a scorecard question. Uploading a document to the Knowledge Base does not apply it anywhere on its own. You create the link yourself in that item's configuration.

**Uploaded document is not visible to certain team leads or agents.**

Check the scope setting on the document. If it is scoped to a specific team or department, users outside that scope do not see it. Adjust the scope if wider access is needed.

---

## Related

- [Set Up Smart Search](./smart-search-guide.md): link a document to a search so the AI matches against it
- [Review and Score Interactions](./features/quality-assurance-tools.md): review and score the interactions your documents help assess
- [Monitor Agent Performance](./features/monitor-agent-performance.md): track how an agent's scores move over time
- [Administrator Setup](./getting-started/quick-start/administrator-setup.md): build the Knowledge Base as part of initial configuration
- [Security and Compliance](./security-compliance.md): where the documents you upload are held, and how they are encrypted

## Need Help?

**Contact Support:** support@botlhale.ai
