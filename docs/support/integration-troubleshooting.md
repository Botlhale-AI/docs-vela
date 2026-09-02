---
id: integration-troubleshooting
title: Integration Problems
description: "Fix interactions sent from your own systems: authentication, organisation IDs, metadata, and dates."
sidebar_position: 2
type: troubleshooting
---

# Integration Problems

Problems with interactions sent from your own systems through the API. For uploads made through Vela, see the [Troubleshooting Guide](./troubleshooting-guide.md).

| What you are seeing | Cause to check first |
| :--- | :--- |
| A success response, and nothing under **Interactions** | The wrong organisation ID, or the development environment |
| **400** `Allocation exceeded` | No allocation set, or the monthly duration used up |
| **401** on an integration that used to work | The access token expired |
| Every call dated the day you uploaded it | `date_of_call` could not be read |
| The agent, team, or department missing | The value did not match a record in Vela |
| Chat response time missing | `sender` was not sent in lower case |
| Requests no longer connect | The API base URL changed |

---

**Problem:** The upload returns a success response, but the interaction never appears under **Interactions**.

**Cause:** The request reached an organisation other than your Vela one. This happens where an organisation has more than one identifier, or where the request went to the development environment instead of production.

**Solution:**
1. Check that `org_id` is your **Vela** organisation identifier. Where more than one has been issued to you, only the Vela one connects an upload to your Vela account.
2. Check the base URL is `https://api.botlhale.tech`. Interactions sent to `https://dev.botlhale.tech` do not appear in your organisation, and recovering them means someone re-uploading them by hand.
3. Confirm the response carried an upload URL, and that your second request actually posted the file to it. The first request only asks for credentials.
4. Where all three are right, contact support with the file key and the time of the upload.

---

**Problem:** Uploads are rejected with **400** `Allocation exceeded`.

**Cause:** The organisation has used its monthly allocated duration, or has no allocation set at all. A newly created organisation that has not yet been activated returns the same error.

**Solution:**
1. Check the allocation with `GET /organisations/vela/{OrgID}`, comparing `currentDurationUse` against `monthlyAllocatedDuration`. See [API Reference](../advanced/api-documentation.md#checking-your-organisation).
2. Where the allocation reads zero, the organisation has not been activated. Your Account Manager activates it and sets the allocation.
3. Where it is genuinely used up, filter out recordings too short to evaluate before your next batch, so the remaining allocation goes on interactions worth scoring.

---

**Problem:** An integration that has been running for months suddenly returns **401**.

**Cause:** The access token expired. Access tokens are short-lived, and an integration that fetches one at startup and keeps using it stops working once it lapses.

**Solution:**
1. Exchange your refresh token for a new access token at `POST /auth/generate`. Refresh tokens last far longer.
2. Build the refresh into the integration rather than doing it by hand: refresh on a schedule, or whenever a request returns **401**. See [API Reference](../advanced/api-documentation.md#step-2-get-an-access-token).
3. Where the refresh token itself has stopped working, sign in again at `POST /auth/login` to get a new pair.

---

**Problem:** Generating a refresh token fails, or an old one keeps being used.

**Cause:** Each user can hold only a limited number of active refresh tokens at once.

{/* UNVERIFIED: exact limit (recollection says three). Not documented at api-docs.botlhale.ai, and no auth/token-issuing source is available in this checkout. Needs engineering to confirm the number before restating it. */}

**Solution:**
1. Revoke one you no longer use at `POST /auth/revoke_token`, sending the account email and the token `id`.
2. The `id` comes back from `/auth/login` when the token is issued. Record it then, because it is the only way to revoke that token yourself.
3. Where the ids have been lost, support can clear the tokens for you.

---

**Problem:** Calls arrive in Vela, but every one is dated the day it was uploaded.

**Cause:** `date_of_call` could not be read, so Vela fell back to the upload time. The usual reason is a format that is close but not exact, such as `15/01/2025 14:30` in place of `15/01/2025, 14:30:00`.

**Solution:**
1. Send `DD/MM/YYYY, HH:mm:ss`, with the comma and the seconds, for example `15/01/2025, 14:30:00`.
2. Times are read as **Africa/Johannesburg**. Convert before sending where your system records another timezone, or every interaction lands at the wrong hour.
3. Set `validate_metadata` while you are building. Vela then returns a **400** naming the field it could not use, instead of accepting the upload and filling in a default.

---

**Problem:** Interactions arrive, but the agent, team, or department is missing or wrong.

**Cause:** Vela matches these fields against records that already exist, and drops the ones it cannot match. The upload still succeeds, so the problem surfaces only when you open the interaction and look.

**Solution:**
1. Check the values against the records in Vela. `agent_name` matches case-insensitively on the name as it appears on the agent record, not a username such as `john.smith`.
2. Create the team first. An upload never creates one, and an unmatched team also stops a new agent being created from `agent_name`.
3. Set `validate_metadata` so unmatched values are refused with `Team not found`, `Department not found`, or `Could not find agent with the provided metadata` rather than silently dropped.
4. Check the first few interactions of any new integration under **Interactions**, and confirm the agent, team, direction, and tags landed as you intended.

---

**Problem:** Chats are analysed, but average response time is missing or looks too low.

**Cause:** The `sender` value on the messages was not recognised. Vela matches `agent`, `user`, and `bot` exactly, in lower case.

**Solution:**
1. Send `sender` in lower case. A capitalised `Agent` still stores the message and shows it in the transcript, so the upload looks correct, while Vela leaves that reply out of the response time measure.
2. Check that customer messages are sent as `user`, since response time is measured from each `user` message to the reply that follows it.
3. Re-upload the affected chats once the casing is corrected. Response time is calculated when the chat is processed.

---

**Problem:** Requests that worked before now fail to connect at all.

**Cause:** The API base URL changed. Requests to the previous host no longer reach Vela.

**Solution:**
1. Use `https://api.botlhale.tech`.
2. Allow `*.botlhale.tech` through your firewall. See [System Requirements](../getting-started/system-requirements.md).
3. Where your integration was built by a third party, the base URL usually sits in a configuration file rather than in the code, so the change may not need a release.

---

---

## Related

- [API Reference](../advanced/api-documentation.md): endpoints, authentication, and the metadata fields
- [Upload Your Data](../data-upload.md): uploading through Vela instead
- [Troubleshooting Guide](./troubleshooting-guide.md): problems with the platform itself

---

## Need Help?

**Contact Support:** support@botlhale.ai
