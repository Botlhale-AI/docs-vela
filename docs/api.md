---
sidebar_position: 9
title: API
description: "An overview of the Vela API and what you can use it for."
type: explanation
draft: true
---

# API

Vela offers an API so you can send interactions to Vela from your own systems.

---

## What It Does

- Upload call recordings and chat transcripts programmatically, with metadata such as the agent, team, and direction.
- Ask to be emailed when a call or chat has finished processing, using the `notifyEmail` field.
- Export analysed calls back out for reporting in your own tools.

Requests are authenticated with a bearer token you obtain by signing in, and your organisation ID. See [API Reference](./advanced/api-documentation.md#authentication).

---

## Related

- [API Reference](./advanced/api-documentation.md): endpoints, authentication, and examples.
