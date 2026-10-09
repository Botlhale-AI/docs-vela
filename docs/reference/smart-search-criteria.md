---
id: smart-search-criteria
title: Smart Search Criteria
description: "The criteria types a Smart Search can match on, and the settings for each."
sidebar_position: 4
type: reference
---

# Smart Search Criteria

The criteria types a Smart Search can match on, and the settings available for each. To create a search, see [Smart Search](../smart-search-guide.md).

---

## Criteria Types

A search can use any of these, and can combine several in one search.

| Criteria | What it matches |
| :--- | :--- |
| **Example Phrases** | Phrases you type into the form. Vela matches by meaning, so an interaction matches when it says something very similar or means the same thing. |
| **Intents** | The customer's identified purpose for the interaction, for example Sales, Complaint, or Support. |
| **Keywords** | Specific tracked terms. |
| **Topics** | Conversation themes identified across interactions. |
| **Pain points** | Customer frustration indicators identified by the AI. |
| **Agents** | Specific agents. |

**Example Phrases** are matched by meaning, as described above. The other criteria (intents, keywords, topics, pain points, and agents) are added as **Search Filter** rows. They match the labels already on an interaction, so they match those values exactly rather than by meaning.

The intents, topics, and pain points offered here come from your organisation's lists, whether Vela detected them or your team added them. Keywords are only the ones your team added, because Vela does not detect keywords. See [Manage Smart Search Terms](../topics-and-terms-guide.md).

## Match Settings

The settings below belong to **Search Filter** rows. **Example Phrases** have none of them: an interaction either matches the phrases or it does not.

Each Search Filter row has an **includes / excludes** setting:

| Setting | Behaviour |
| :--- | :--- |
| **includes** | Matches when the criteria are found |
| **excludes** | Matches when the criteria are **not** found |

Most Search Filter types also have an **all of / some of** setting:

| Setting | Behaviour |
| :--- | :--- |
| **all of** | Every entry in the list must match |
| **some of** | One entry matching is enough |

This setting is not available for **Topics** or **Agents**.

Once a search has two or more Search Filter rows, a **Show results when** setting appears. It controls how the conditions combine:

| Setting | Behaviour |
| :--- | :--- |
| **All conditions are met** | An interaction matches only when every condition matches |
| **Some of the conditions are met** | An interaction matches when at least one condition matches |

With phrases and a single Search Filter row, the setting does not appear, and an interaction has to match both.

{/* ENGINEERING (known bug, documented as intended): on vela-data origin/main (app/api/notifications/route.js:331-338) a phrase non-match is not counted, so a filter match alone raises the alert. Fixed on origin/dev-hold by 597551b (lib/inference/query.js:208-211). Documented as on dev-hold, user decision 2026-10-08. */}

The edit form labels the same two options **All of the filters are matched** and **Some of the filters are matched**. They behave identically, so recognise either.

## Search Settings

| Setting | Values | Behaviour |
| :--- | :--- | :--- |
| **Title** | Free text | The search name |
| **Description** | Free text | The purpose of the search. Vela also reads it when matching, so it shapes results |
| **Search Scope** | Entire Organisation, Entire Department, Specific Departments, or Specific Teams, as your access level allows | Which interactions the search applies to |
| **Notifications** | On / Off | Whether a match notifies you, in-app or by email as set in Settings → Notifications |
| **Historical Search** | On / Off | Whether the search also runs against interactions already in Vela. When on, choose **All historical calls** or a **Specific date range** |
| **Link to Search** | Off, or a main search | The search is only checked on interactions a chosen main search has already matched. The main search must cover at least the same scope, so an organisation-wide search can be the main search for any team |
| **Knowledge Base** | Off, or a document | Vela uses the document's content as reference when matching phrases. The document must be within the search's scope |
| **Status** | Active / Inactive | Whether the search runs against incoming interactions |

All of these can be changed after creation by editing the search, except **Historical Search**. That is set at creation only, so a search that needs to cover past interactions has to be created with it enabled.

---

## Related

- [Set Up Smart Search](../smart-search-guide.md): creating and managing searches
- [Glossary](./glossary.md): definitions of the terms above

---

## Need Help?

**Contact Support:** support@botlhale.ai
