---
sidebar_position: 7
title: API Reference
type: reference
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Reference
Endpoint reference for sending call recordings and chat transcripts to Vela programmatically. For uploading through the platform instead, see [Upload Your Data](../data-upload.md).

## Calls

:::tip important
> You need to include an `Authentication Token` in request headers. Your Account Manager issues your API token. Contact **support@botlhale.ai** if you do not have one.
:::

**Endpoint URL:**
```
https://api.botlhale.xyz/asr/async/upload/vela
```

**Description:**
This endpoint accepts a call recording for processing by Vela. It validates the organisation's allocation and returns upload credentials for securely transferring the audio file.

**Parameters:**

| Parameter      | Requirement | Description                                              |
|----------------|-------------|----------------------------------------------------------|
| org_id         | Required    | Identifier for the organisation submitting the call.     |
| metadata       | Optional    | A JSON object containing the information below.          |

All `metadata` fields are optional:

- **email**: Email address of the agent who participated in the call.
- **agent**: Alternative to `email`: also matched on the agent's email address.
- **agent_name**: The agent's name, matched against agent records case-insensitively. Use the name as it appears in Vela (for example `John Smith`), not a username.
- **team**: Team the call should be attributed to.
- **department**: Department the call should be attributed to.
- **direction**: Call direction: `inbound` or `outbound`.
- **tags**: Classification labels for the call, as an array of strings (for example `["complaint", "billing"]`).
- **date_of_call**: When the call took place, formatted `DD/MM/YYYY, HH:mm:ss` (for example `15/01/2025, 14:30:00`). If omitted or unparseable, the upload time is used.
- **interaction_id**: Your own reference for the call.
- **contact**: The customer's contact, as a string or number.
- **notifyEmail**: An email address to notify when the call's analysis is complete.
- **validate_metadata**: Set to `true` to reject the upload with an error when a field is invalid, such as an unparseable date or an unmatched agent, team, or department. Without it, invalid fields fall back to defaults.

:::info **Allocation Check**
The API verifies that the organisation is within its monthly allocated duration. If the allocation has been exceeded, an error is returned.
:::

**Response Format**: The response returns a JSON object containing an `url` and `fields` required to complete the audio file upload.

**Sample Response:**
```json
{
    "fields": { ... },
    "url": "<upload_url>"
}
```

**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests, json

# Step 1: Get upload credentials
response = requests.post(
    "https://api.botlhale.xyz/asr/async/upload/vela",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    data={
        "org_id": "your_org_id",
        "metadata": json.dumps({"email": "agent@example.com", "date_of_call": "15/01/2025, 14:30:00"})
    }
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
  url: 'https://api.botlhale.xyz/asr/async/upload/vela',
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' },
  formData: {
    org_id: 'your_org_id',
    metadata: JSON.stringify({ email: 'agent@example.com', date_of_call: '15/01/2025, 14:30:00' })
  }
}, (err, res) => {
  const { url, fields } = JSON.parse(res.body);

  // Step 2: Upload the audio file
  request.post({
    url,
    formData: { ...fields, file: fs.createReadStream('/path/to/audio/call.wav') }
  }, (err, res) => console.log(res.body));
});
```

</TabItem>
</Tabs>





## Chats

:::tip important
> You need to include an `Authentication Token` in request headers. Your Account Manager issues your API token. Contact **support@botlhale.ai** if you do not have one.
:::

**POST Request**

```
https://api.botlhale.xyz/chats/upload/vela
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
- **agent_name** (string): The agent's name, matched case-insensitively. Use the name as it appears in Vela, not a username.
- **team** (string): Team the chat should be attributed to.
- **department** (string): Department the chat should be attributed to.
- **direction** (string): `inbound` or `outbound`. Defaults to `inbound`.
- **tags** (array): Classification labels for the chat, as an array of strings.
- **date** (string): Format `DD/MM/YYYY, HH:mm:ss`. Date and time the chat took place. If omitted or unparseable, the upload time is used.
- **language** (string): Language code applied to every message in the chat. When set, it overrides the `language` on the individual message objects. Leave it out if your messages carry their own language codes.
- **interaction_id** (string): Your own reference for the chat.
- **contact** (string or number): The customer's contact.
- **notifyEmail** (string): An email address to notify when the chat's analysis is complete.
- **validate_metadata** (boolean): Set to `true` to reject the upload with an error when a field is invalid, instead of falling back to defaults.      


Message object:

- **message** (string): Text that was sent.
- **time** (string): Format `DD/MM/YYYY, HH:mm:ss`.
- **sender** (string): `agent`, `user`, or `bot`. Response time is measured from each `user` message to the `agent` or `bot` message that answers it.
- **language** (string): Language code. Optional, and ignored when `metadata.language` is set.

:::info Chat allocation
Chats are counted against a separate monthly chat allocation, not the duration allocation used for calls. Once the organisation reaches that allocation, the endpoint returns an error.
:::

**Response Format**

On success the endpoint returns the Vela ID of the new chat. Analysis runs afterwards, so a success response means the chat was accepted, not that it has finished processing.

```json
{
    "message": "Chat successfully created.",
    "id": "<chat_id>"
}
```

| Status | Error | Cause |
|--------|-------|-------|
| 404 | `Organisation not found` | `org_id` does not match an organisation. |
| 400 | `Monthly chats allocation exceeded` | The organisation has used its chat allocation. |
| 400 | Validation message | A metadata field is invalid and `validate_metadata` is set. |
| 500 | `Something went wrong with the upload` | The request could not be processed. |

Set `notifyEmail` if you want an email when the chat's analysis completes.

**Example of body**

```python 
chats: [ 
    { "message": "Sawubona, ngithumele imali izolo kodwa ayikafiki. Ngingenzani?", "time": "06/08/2024, 09:15", "sender": "user", "language": "zu-ZA" }, 
    { "message": "Sawubona! Ngingu-bot lokwesekwa. Ngiyaxolisa ukuzwa ukuthi imali ayikafiki. Ake sibheke ndawonye.", "time": "06/08/2024, 09:15", "sender": "bot", "language": "zu-ZA" }, 
    { "message": "Ngicela unginike inombolo yesazisi noma ikhodi yesithenjwa yokuthumela imali.", "time": "06/08/2024, 09:16", "sender": "bot", "language": "zu-ZA" }, 
    { "message": "Nansi inombolo yesazisi: 1234567890.", "time": "06/08/2024, 09:17", "sender": "user", "language": "zu-ZA" }
]

```

**Request Example**

```python 
import json
import requests

url = "https://api.botlhale.xyz/chats/upload/vela"

chats = [ 
        { "message": "Sawubona, ngithumele imali izolo kodwa ayikafiki. Ngingenzani?", "time": "06/08/2024, 09:15", "sender": "user", "language": "zu-ZA" }, 
        { "message": "Sawubona! Ngingu-bot lokwesekwa. Ngiyaxolisa ukuzwa ukuthi imali ayikafiki. Ake sibheke ndawonye.", "time": "06/08/2024, 09:15", "sender": "bot", "language": "zu-ZA" }, 
        { "message": "Ngicela unginike inombolo yesazisi noma ikhodi yesithenjwa yokuthumela imali.", "time": "06/08/2024, 09:16", "sender": "bot", "language": "zu-ZA" }, 
        { "message": "Nansi inombolo yesazisi: 1234567890.", "time": "06/08/2024, 09:17", "sender": "user", "language": "zu-ZA" }
    ]
data = {
    'org_id': 'your_org_id',
    'chats': json.dumps(chats)

    
}

headers = {
  'Authorization': 'Bearer YOUR_API_TOKEN',
}

response = requests.post(url, data=data, headers=headers)

print(response.status_code)
print(response.text) 
print(json.dumps(response.json(), indent=4))
```



## Related

- [Upload Your Data](../data-upload.md): upload through the platform instead of the API
- [System Requirements](../getting-started/system-requirements.md): the formats and size limits these endpoints accept
- [Security and Compliance](../security-compliance.md): where the recordings and transcripts you send are held, and how they are encrypted

## Need Help?

:::info
[Contact us](mailto:support@botlhale.ai) with any questions.
:::