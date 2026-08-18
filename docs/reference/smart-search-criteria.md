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
| **Words** | Example phrases you provide. Vela matches by meaning, so an interaction matches when it says something very similar or means the same thing. This is the default. |
| **Intents** | The customer's identified purpose for the interaction, for example Sales, Complaint, or Support. |
| **Keywords** | Specific tracked terms. |
| **Topics** | Conversation themes identified across interactions. |
| **Pain points** | Customer frustration indicators identified by the AI. |
| **Agents** | Specific agents. |

**Words** are matched by meaning, as described above. The other criteria (intents, keywords, topics, pain points, and agents) match the labels Vela has already detected on an interaction, so they match those values exactly rather than by meaning.

The intents, keywords, topics, and pain points offered here come from your organisation's lists, whether Vela detected them or your team added them. See [Manage Smart Search Terms](../topics-and-terms-guide.md).

## Match Settings

Each criterion has an **includes / excludes** setting:

| Setting | Behaviour |
| :--- | :--- |
| **includes** | Matches when the criteria are found |
| **excludes** | Matches when the criteria are **not** found |

Most criteria also have an **all of / some of** setting:

| Setting | Behaviour |
| :--- | :--- |
| **all of** | Every entry in the list must match |
| **some of** | One entry matching is enough |

This setting is not available for **Topics** or **Agents**.

When a search uses more than one criterion, a **Show results when** setting controls how they combine:

| Setting | Behaviour |
| :--- | :--- |
| **All conditions are met** | An interaction matches only when every criterion matches |
| **Some of the conditions are met** | An interaction matches when at least one criterion matches |

With a single criterion, this setting has no effect.

The edit form labels the same two options **All of the filters are matched** and **Some of the filters are matched**. They behave identically, so recognise either.

## Search Settings

| Setting | Values | Behaviour |
| :--- | :--- | :--- |
| **Title** | Free text | The search name |
| **Description** | Free text | The purpose of the search. Vela also reads it when matching, so it shapes results |
| **Scope** | Organisation / Department / Team | Which interactions the search applies to |
| **Notifications** | On / Off | Whether a match notifies you, via the channel set in Settings → Notifications |
| **Historical Search** | On / Off | Whether the search also runs against interactions already in Vela. When on, choose **All historical calls** or a **Specific date range** |
| **Link to Search** | Off, or a main search | The search is only checked on interactions a chosen main search has already matched. The main search must cover at least the same scope, so an organisation-wide search can be the main search for any team |
| **Knowledge Base** | Off, or a document | Vela uses the document's content as reference when matching phrases. The document must be within the search's scope |
| **Status** | Active / Inactive | Whether the search runs against incoming interactions |

All of these can be changed after creation by editing the search, except **Historical Search**. That is set at creation only, so a search that needs to cover past interactions has to be created with it enabled.

---

## Related

- [Smart Search](../smart-search-guide.md): creating and managing searches
- [Glossary](./glossary.md): definitions of the terms above

---

## Need Help?

**Contact Support:** support@botlhale.ai
