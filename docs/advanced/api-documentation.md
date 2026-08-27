---
sidebar_position: 7
title: API Reference
description: "Endpoint reference for sending interactions to Vela from your own systems."
type: reference
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Reference
Endpoint reference for the Vela endpoints: sending call recordings and chat transcripts in, exporting analysed calls out, and checking what your organisation is entitled to. For uploading through Vela instead, see [Upload Your Data](../data-upload.md).

Botlhale's API also covers transcription, translation, text to speech, and chat bots, which sit outside Vela. Those are documented at [api-docs.botlhale.ai](https://api-docs.botlhale.ai/).

:::note Where this page and the published reference differ
[api-docs.botlhale.ai](https://api-docs.botlhale.ai/) is the authority on these endpoints. This page follows it, and adds two things it does not yet cover.

**More metadata fields.** The reference lists a short set. Vela also reads `agent_name`, `team`, `department`, `direction`, `tags`, `contact`, `language`, `notifyEmail`, and `validate_metadata`, which are documented below.

**Lower-case `sender`.** The reference shows `Agent` capitalised on chat messages. Vela matches the value exactly, and only lower case is recognised.

Where the two disagree on anything else, the reference is right.
:::

## Authentication

Sign in once to get a refresh token, exchange it for an access token, then send that access token on every request.

### Step 1: Sign In

```
POST https://api.botlhale.tech/auth/login
```

```json
{ "email": "your-email@example.com", "password": "your-password" }
```

The reply carries everything you need to record:

```json
{
  "message": "Login successful",
  "token": "<access_token>",
  "refresh_token": "<refresh_token>",
  "org_id": "<org_id>",
  "id": "<refresh_token_entry_id>"
}
```

Keep the `refresh_token`, the `org_id`, and the `id`. The `id` identifies this particular refresh token, and it is the only way to revoke that one later.

### Step 2: Get an Access Token

```
POST https://api.botlhale.tech/auth/generate
```

```json
{ "refresh_token": "<your_refresh_token>" }
```

```json
{ "token": "<access_token>", "expires": 0 }
```

`expires` tells you how long the access token is good for, so schedule the next refresh from it rather than guessing.

### Step 3: Send the Access Token

```
Authorization: Bearer <access_token>
```

:::caution Build the refresh in from the start
Access tokens are short-lived. Refresh tokens last far longer. An integration that fetches one access token and keeps using it works for a while and then stops with a **401**, which is the failure most often mistaken for a broken endpoint.

Refresh on a schedule, or whenever a request returns **401**, and treat the refresh token as the credential worth protecting.
:::

### Revoking a Refresh Token

**Each user can hold at most three active refresh tokens.** Once you reach that limit, revoke one you are no longer using rather than generating another:

```
POST https://api.botlhale.tech/auth/revoke_token
```

```json
{ "email": "your-email@example.com", "id": "<refresh_token_entry_id>" }
```

The `id` is the one returned by `/auth/login`. Record it at sign-in, because it is the only way to revoke that token yourself. Where it has been lost, support has to clear the limit for you.

### Resetting a Password

`POST /auth/reset_password` starts a reset and sends a confirmation code. `POST /auth/confirm_reset_password` completes it, taking `email`, `confirmation_code`, and `new_password`.

### Base URLs

| Environment | Base URL |
| :--- | :--- |
| Production | `https://api.botlhale.tech` |
| Development | `https://dev.botlhale.tech` |

Send production data to the production URL. Interactions uploaded to the development environment do not appear in your Vela organisation, and recovering them means someone re-uploading them by hand, which can lose the original call dates.

The full endpoint reference, covering the wider Botlhale platform as well as Vela, is at [api-docs.botlhale.ai](https://api-docs.botlhale.ai/).

---

## Calls

:::info Authentication
Every request needs an `Authorization: Bearer <token>` header, from [Authentication](#authentication) above. The token expires after 24 hours.
:::

**Endpoint URL:**
```
https://api.botlhale.tech/asr/async/upload/vela
```

**Description:**
This endpoint accepts a call recording for processing by Vela. It validates the organisation's allocation and returns upload credentials for securely transferring the audio file.

Uploading a call takes two requests, and the audio never goes to this endpoint. The first call returns a URL and a set of form fields. You post the audio to that URL:

```mermaid
flowchart LR
    A("1. POST to<br/>/asr/async/upload/vela<br/>with org_id and metadata") --> B("Returns<br/>url and fields")
    B --> C("2. POST the audio file<br/>to that returned url,<br/>with those fields")
    C --> D("Vela processes the call<br/>and it appears under<br/>Interactions → Calls")
```

**Parameters:**

| Parameter      | Requirement | Description                                              |
|----------------|-------------|----------------------------------------------------------|
| org_id         | Required    | Your organisation's Vela identifier, issued with your token. It is not the organisation name, and it does not appear in Settings. |
| metadata       | Optional    | An object holding the fields below. |

Send the request as JSON, with `Content-Type: application/json`.

:::caution Use the Vela organisation identifier
If you have been issued more than one organisation ID, only the Vela one connects an upload to your Vela account. Uploading with another can succeed, returning a success code and a file key, while nothing appears under **Interactions**.

An upload that reports success but never shows up is the sign to check this first.
:::

Before your first upload, confirm with your Account Manager that your organisation is active and has minutes allocated. An organisation with no allocation set is refused with **400** `Allocation exceeded`, the same error as one that has used up its minutes.

Processing draws on that allocation, so filter out recordings too short to evaluate before you send them. A few seconds of hold music or a dropped call consumes the allocation without producing anything worth reading.

All `metadata` fields are optional:

- **email**: Email address of the agent who participated in the call.
- **agent**: Alternative to `email`: also matched on the agent's email address.
- **agent_name**: The agent's name, matched against agent records case-insensitively. Use the name as it appears in Vela (for example `John Smith`), not a username. Where no agent matches, Vela creates one, but only when the `team` you sent already exists. Check the spelling before you send a batch.
- **team**: The team the call belongs to. The team has to exist in Vela already, because an upload never creates one. A team Vela cannot match is dropped, and that also stops a new agent being created from `agent_name`.
- **department**: Department the call should be attributed to.
- **direction**: Call direction: `inbound` or `outbound`.
- **tags**: Classification labels for the call, as an array of strings (for example `["complaint", "billing"]`). Tags are also where identifiers from your own systems belong, such as a queue name, a campaign, or a ticket reference, so they travel with the interaction and can be filtered on in Vela. Anything with a field of its own belongs in that field instead, so send call direction as `direction` rather than as a tag.
- **contact**: The customer's phone number, as a string or a number. Vela stores it exactly as you send it, so keep the format consistent across your integration. This is what [Search by Phone Number](../number-search-guide.md) matches on, and sending it here is what makes an interaction findable by number.
- **date_of_call**: When the call took place, formatted `DD/MM/YYYY, HH:mm:ss` (for example `15/01/2025, 14:30:00`). Times are read as **Africa/Johannesburg**, so convert before sending if your system records another timezone. If omitted, the upload time is used. Send the exact format: a value Vela cannot parse falls back to the upload time, so the call is dated when you sent it rather than when it happened.
- **interaction_id**: Your own reference for the call. It is stored as the call's filename.
- **validate_metadata**: Set it to make Vela reject a request whose metadata it cannot use, instead of accepting it and filling in a default. See the note below.

:::warning Metadata problems are silent by default
Vela records the fields it can use and fills in defaults for the ones it cannot, so the upload succeeds either way. An unmatched `team` or `department`, a `direction` that is not `inbound` or `outbound`, `tags` sent as a string rather than an array, and an unparseable `date_of_call` all behave this way.

Send `validate_metadata` to change that. Vela then returns a **400** naming the field it could not use, which is the safer setting while you are building an integration.

Either way, check the first few calls of a new integration under **Interactions → Calls** and confirm the agent, team, direction, and tags landed as you intended.
:::

:::info Allocation check
The endpoint checks the organisation's monthly allocated duration before it issues upload credentials. Where the allocation has been used up, or none is set, it returns **400** `Allocation exceeded` and no upload takes place.
:::

**Response Format**: The response carries the two things the second request needs. `url` is where the audio goes, and `fields` is a set of form values that authorise that upload.

**Sample Response:**
```json
{
    "url": "<upload_url>",
    "fields": { "<form field>": "<value>" }
}
```

Send every entry in `fields` back unchanged, as form fields, alongside the audio. Both samples below do this by spreading `fields` into the second request. The storage service issues that set and can change it, so pass through whatever arrives rather than hard-coding the keys.

**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests, json

# Step 1: Get upload credentials
response = requests.post(
    "https://api.botlhale.tech/asr/async/upload/vela",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json",
    },
    json={
        "org_id": "your_org_id",
        "metadata": {"email": "agent@example.com", "date_of_call": "15/01/2025, 14:30:00"},
    },
)
result = response.json()

# Step 2: Upload the audio file
files = [('file', ('call.wav', open('/path/to/audio/call.wav', 'rb'), 'audio/wav'))]
requests.post(result['url'], data=result['fields'], files=files)
```

</TabItem>
<TabItem value="nodejs" label="NodeJs - Request" >

```js
const request = require('request');
const fs = require('fs');

// Step 1: Get upload credentials
request.post({
  url: 'https://api.botlhale.tech/asr/async/upload/vela',
  headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' },
  json: {
    org_id: 'your_org_id',
    metadata: { email: 'agent@example.com', date_of_call: '15/01/2025, 14:30:00' }
  }
}, (err, res) => {
  const { url, fields } = res.body;

  // Step 2: Upload the audio file
  request.post({
    url,
    formData: { ...fields, file: fs.createReadStream('/path/to/audio/call.wav') }
  }, (err, res) => console.log(res.body));
});
```

</TabItem>
</Tabs>





**Error Responses:**

| Status | Message | Cause |
| :--- | :--- | :--- |
| 404 | `Organisation not found` | `org_id` does not match an organisation. |
| 400 | `Missing fileName` | The request did not name the file being uploaded. |
| 400 | `Allocation exceeded` | The organisation has used its monthly duration, or has no allocation set. A newly created organisation that has not been activated returns this. |
| 400 | `Could not find agent with the provided metadata` | Raised when `validate_metadata` is set and no agent matched. |
| 400 | `Team not found` | Raised when `validate_metadata` is set and `team` did not match. |
| 400 | `Department not found` | Raised when `validate_metadata` is set and `department` did not match. |
| 400 | `Invalid date of call. Correct format is DD/MM/YYYY, HH:mm:ss` | `date_of_call` could not be parsed, and `validate_metadata` was set. |
| 400 | `Invalid interaction direction. Options are outbound or inbound` | `direction` was something else, and `validate_metadata` was set. |
| 400 | `Invalid interaction tags. Tags must be an array.` | `tags` was sent as a string, and `validate_metadata` was set. |
| 400 | `Invalid notify email` | `notifyEmail` is not a valid address, and `validate_metadata` was set. |

The wider platform's status codes, including **401** for an expired token and **429** for rate limiting, are listed under [Error Codes](https://api-docs.botlhale.ai/) in the published reference.


---

## Chats

:::info Authentication
Every request needs an `Authorization: Bearer <token>` header, from [Authentication](#authentication) above. The token expires after 24 hours.
:::

**POST Request**

```
https://api.botlhale.tech/chats/upload/vela
```

`Authorization: Bearer <ProvidedToken>`

Below are the attributes and the formats of each attribute required in the body.

| Body Params      | Type   | Requirement | Description                                              |
|------------------|--------|-------------|----------------------------------------------------------|
| org_id            | string | Required    | Organisation ID provided to you by Botlhale AI           |
| chats            | Array  | Required    | Array of message objects                                 |
| metadata         | Object | Optional    | Chat metadata. See description below.                    |

Metadata object: 
- **email** (string): Email address of the agent in the chat.
- **agent** (string): Alternative to `email`: also matched on the agent's email address. If no agent is matched, the chat is left unassigned.
- **agent_name** (string): The agent's name, matched case-insensitively. Use the name as it appears in Vela, not a username. Sent together with `team`, it creates the agent when no existing record matches, so check the spelling before you send a batch.
- **team** (string): Team the chat should be attributed to.
- **department** (string): Department the chat should be attributed to.
- **direction** (string): `inbound` or `outbound`. Defaults to `inbound`.
- **tags** (array): Classification labels for the chat, as an array of strings.
- **contact** (string or number): The customer's phone number, stored exactly as sent. See the note under the calls endpoint above.
- **date** (string): When the chat took place, formatted `DD/MM/YYYY, HH:mm` (for example `28/11/2025, 14:30`), read as **Africa/Johannesburg**. Seconds are accepted as well. If omitted, the upload time is used. If omitted, the upload time is used. Send the exact format: a value Vela cannot parse falls back to the upload time, so the chat is dated when you sent it rather than when it happened.
- **language** (string): Language code applied to every message in the chat. When set, it overrides the `language` on the individual message objects. Leave it out if your messages carry their own language codes. Codes take the form `en-ZA`, and the ones recognised are listed under [Supported Languages](https://api-docs.botlhale.ai/).
- **interaction_id** (string): Your own reference for the chat. It is stored as the chat's filename.
- **notifyEmail** (string): An email address to notify when the chat's analysis is complete.
- **validate_metadata** (boolean): Set it to make Vela reject a request whose metadata it cannot use, instead of accepting it and filling in a default. See the note below.


Message object:

- **message** (string): Text that was sent.
- **time** (string): Format `DD/MM/YYYY, HH:mm`, read as **Africa/Johannesburg**. Seconds are accepted as well.
- **sender** (string): `agent`, `user`, or `bot`, in lower case. Response time is measured from each `user` message to the `agent` or `bot` message that answers it.

:::warning Send `sender` in lower case
Vela matches these three values exactly. A capitalised `Agent` still stores the message and shows it in the transcript, so the upload looks correct. Vela reads it as neither an agent nor a bot reply, though, so the conversation drops out of the response time average.

The wider Botlhale reference shows `Agent` capitalised for this field. Lower case is what Vela reads.
:::
- **language** (string): Language code. Optional, and ignored when `metadata.language` is set.

:::info Chat allocation
Chats are counted against a separate monthly chat allocation, not the duration allocation used for calls. Once the organisation reaches that allocation, the endpoint returns an error.
:::

**Response Format**

The endpoint accepts the request and starts the analysis in the background, so a success response means the chat was accepted rather than processed. The body carries the chat's ID:

```json
{
    "message": "Chat successfully created.",
    "id": "68f2a1c4e9b7d3a80f5c2e11"
}
```

Keep that `id` to match what you sent against what you find. To confirm the analysis finished, look under **Interactions → Chats**, or set `notifyEmail` and wait for the completion email.

| Status | Error | Cause |
|--------|-------|-------|
| 404 | `Organisation not found` | `org_id` does not match an organisation. |
| 400 | `Monthly chats allocation exceeded` | The organisation has used its chat allocation. |
| 400 | `Could not find agent with the provided metadata` | Raised when `validate_metadata` is set and no agent matched. |
| 400 | `Team not found` | Raised when `validate_metadata` is set and `team` did not match. |
| 400 | `Department not found` | Raised when `validate_metadata` is set and `department` did not match. |
| 400 | `Invalid date of chat. Correct format is DD/MM/YYYY, HH:mm:ss` | `date` could not be parsed, and `validate_metadata` was set. The message names the format with seconds, though minutes alone are accepted. |
| 400 | `Invalid interaction direction. Options are outbound or inbound` | `direction` was something else, and `validate_metadata` was set. |
| 400 | `Invalid interaction tags. Tags must be an array.` | `tags` was sent as a string, and `validate_metadata` was set. |
| 400 | `Invalid contact. Contact must be a string or number` | `contact` was another type, and `validate_metadata` was set. |
| 400 | `Invalid notify email` | `notifyEmail` is not a valid address, and `validate_metadata` was set. |
| 500 | `Something went wrong with the upload` | The request could not be read, usually because `chats` is not valid JSON. |

:::warning Metadata problems are silent
Vela matches each metadata field as it creates the chat, and drops the ones it cannot match. A field it cannot use leaves the chat created without it, so you get a success response either way. An unmatched `team`, a `direction` that is not `inbound` or `outbound`, `tags` sent as a string rather than an array, an unparseable `date`, and a malformed `notifyEmail` all behave this way.

Send `validate_metadata` to change that. Vela then returns a **400** naming the field it could not use, which is the safer setting while you are building an integration.

Check the first few chats of a new integration under **Interactions → Chats** and confirm the agent, team, direction, and tags landed as you intended.
:::

**Example of body**

```python 
chats: [ 
    { "message": "Sawubona, ngithumele imali izolo kodwa ayikafiki. Ngingenzani?", "time": "06/08/2024, 09:15:00", "sender": "user", "language": "zu-ZA" }, 
    { "message": "Sawubona! Ngingu-bot lokwesekwa. Ngiyaxolisa ukuzwa ukuthi imali ayikafiki. Ake sibheke ndawonye.", "time": "06/08/2024, 09:15:00", "sender": "bot", "language": "zu-ZA" }, 
    { "message": "Ngicela unginike inombolo yesazisi noma ikhodi yesithenjwa yokuthumela imali.", "time": "06/08/2024, 09:16:00", "sender": "bot", "language": "zu-ZA" }, 
    { "message": "Nansi inombolo yesazisi: 1234567890.", "time": "06/08/2024, 09:17:00", "sender": "user", "language": "zu-ZA" }
]

```

**Request Example**

```python 
import json
import requests

url = "https://api.botlhale.tech/chats/upload/vela"

chats = [ 
        { "message": "Sawubona, ngithumele imali izolo kodwa ayikafiki. Ngingenzani?", "time": "06/08/2024, 09:15:00", "sender": "user", "language": "zu-ZA" }, 
        { "message": "Sawubona! Ngingu-bot lokwesekwa. Ngiyaxolisa ukuzwa ukuthi imali ayikafiki. Ake sibheke ndawonye.", "time": "06/08/2024, 09:15:00", "sender": "bot", "language": "zu-ZA" }, 
        { "message": "Ngicela unginike inombolo yesazisi noma ikhodi yesithenjwa yokuthumela imali.", "time": "06/08/2024, 09:16:00", "sender": "bot", "language": "zu-ZA" }, 
        { "message": "Nansi inombolo yesazisi: 1234567890.", "time": "06/08/2024, 09:17:00", "sender": "user", "language": "zu-ZA" }
    ]
data = {
    'org_id': 'your_org_id',
    'chats': chats,
}

headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  'Content-Type': 'application/json',
}

response = requests.post(url, json=data, headers=headers)

print(response.status_code)
print(response.text) 
print(json.dumps(response.json(), indent=4))
```



## Exporting Calls

Pulls analysed calls back out of Vela, for reporting in your own tools rather than reading them in the platform.

```
GET https://api.botlhale.tech/calls/export/vela
```

Everything is a query parameter, and only `org_id` is required:

| Parameter | Description |
| :--- | :--- |
| `org_id` | Required. Your Vela organisation identifier |
| `start_date` and `end_date` | The period to export, formatted `DD-MM-YYYY` (for example `01-11-2025`) |
| `departments`, `teams`, `agents` | Comma-separated names or IDs to narrow the export |
| `min_score` and `max_score` | Only calls scoring inside the range |
| `page` and `count_per_page` | Paging, for exports too large to take in one request |

Note the date format. It is `DD-MM-YYYY` here, with dashes, while `date_of_call` on upload is `DD/MM/YYYY, HH:mm:ss` with slashes. The two are not interchangeable.

The reply does not hold the calls themselves. It gives you a link to fetch them:

```json
{
  "file_name": "Exports/calls_export_..._20251125_102753.json",
  "presigned_url": "https://storage.example.com/exports/calls_export.json?signature=...",
  "status": "success"
}
```

Download `presigned_url` to get the export. Presigned links expire, so fetch the file as part of the same job rather than storing the link to use later.

:::tip Scoring reports without a person exporting them
This is the endpoint to build a recurring report on. Filter by team or agent, take a score range, and page through the result rather than exporting the whole period at once.

For a one-off, the **Export** control on the Agent Scorecard **Results** tab is quicker. See [Build an Agent Scorecard](../agent-scorecard-guide.md#4-read-the-results).
:::

---

## Checking Your Organisation

Reports what your organisation is entitled to and how much of it has been used.

```
GET https://api.botlhale.tech/organisations/vela/{OrgID}
```

The reply covers the limits behind several things this documentation refers to:

| Field | What it tells you |
| :--- | :--- |
| `active` | Whether the organisation is activated. Uploads against an inactive organisation do not process |
| `monthlyAllocatedDuration` and `currentDurationUse` | The allocation in seconds, and how much has been used |
| `stopWhenAllocationExceeded` | Whether processing halts once the allocation runs out |
| `scorecardLimit`, `smartSearchLimit`, `painPointsLimit` | The caps your plan sets |
| `coachingEnabled` | Whether the Coaching add-on is on |
| `numberOfActiveAgents`, `numberOfTeams`, `numberOfDepartments` | The size of your structure |
| `users` | Each user's name, email, role, access level, team, department, and whether they can view redactions |

Administrators see the same two figures under **Settings → Organisation**, as **Allocated Monthly Duration** and **Current Duration Usage**. See [Organisation Configuration](../settings-config/organisation-configuration.md).

Checking `currentDurationUse` against `monthlyAllocatedDuration` before a large batch is the reliable way to know whether it processes. It answers the same question as asking your Account Manager, without waiting for a reply.


---

## Related

- [Upload Your Data](../data-upload.md): upload through Vela instead of the API
- [System Requirements](../getting-started/system-requirements.md): the formats and size limits these endpoints accept
- [Security and Compliance](../security-compliance.md): where the recordings and transcripts you send are held, and how they are encrypted

## Need Help?

**Contact Support:** support@botlhale.ai