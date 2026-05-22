---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vela APIs

## Calls

:::tip important
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Endpoint URL:**
```
https://api.botlhale.ai/asr/async/upload/vela
```

**Description:**
This endpoint accepts a call recording for processing by Vela. It validates the organisation's allocation and returns upload credentials for securely transferring the audio file.

**Parameters:**

| Parameter      | Requirement | Description                                              |
|----------------|-------------|----------------------------------------------------------|
| org_id         | Required    | Identifier for the organization submitting the call.     |
| metadata       | Optional    | A JSON object containing the information below.          |

- **email**: Email address of the agent who participated in the call.
- **date_of_call**: The date when the call took place.

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
    "https://api.botlhale.ai/asr/async/upload/vela",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    data={
        "org_id": "your_org_id",
        "metadata": json.dumps({"email": "agent@example.com", "date_of_call": "2025-01-15"})
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
  url: 'https://api.botlhale.ai/asr/async/upload/vela',
  headers: { 'Authorization': 'Bearer YOUR_API_TOKEN' },
  formData: {
    org_id: 'your_org_id',
    metadata: JSON.stringify({ email: 'agent@example.com', date_of_call: '2025-01-15' })
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
> You need to include an `Authentication Token` in request headers. See the [Authentication](API.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**POST Request**

```
https://api.botlhale.ai/chats/upload/vela
```

`Authorization: Bearer <ProvidedToken>`

Below are the attributes and the formats of each attribute required in the body.

| Body Params      | Type   | Requirement | Description                                              |
|------------------|--------|-------------|----------------------------------------------------------|
| org_id            | string | Required    | Organisation ID provided to you by Botlhale AI           |
| chats            | Array  | Required    | Array of message objects                                 |
| metadata         | Object | Optional    | Chat metadata. See description below.                    |

Metadata object: 
- **agent** (string): This is the email address of the agent in the chat. If omitted, will leave agent as unspecified.
- **date** (string): Format (DD/MM/YYYY, HH:mm). Date and time that the chat occured. If omitted, the current date will be used.      


Message object: 
- **message** (string): Text that was sent.                       
 - **time** (string): Format (DD/MM/YYYY, HH:mm).                  
 - **sender** (string): Agent, user, or bot.                       
 - **language** (string): Language code (optional).  

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

url = "https://api.botlhale.ai/chats/upload/vela"

chats = [ 
        { "message": "Sawubona, ngithumele imali izolo kodwa ayikafiki. Ngingenzani?", "time": "06/08/2024, 09:15", "sender": "user", "language": "zu-ZA" }, 
        { "message": "Sawubona! Ngingu-bot lokwesekwa. Ngiyaxolisa ukuzwa ukuthi imali ayikafiki. Ake sibheke ndawonye.", "time": "06/08/2024, 09:15", "sender": "bot", "language": "zu-ZA" }, 
        { "message": "Ngicela unginike inombolo yesazisi noma ikhodi yesithenjwa yokuthumela imali.", "time": "06/08/2024, 09:16", "sender": "bot", "language": "zu-ZA" }, 
        { "message": "Nansi inombolo yesazisi: 1234567890.", "time": "06/08/2024, 09:17", "sender": "user", "language": "zu-ZA" }
    ]
data = {
    'org_id': <<org_id>>,
    'chats': json.dumps(chats)

    
}

headers = {
  'Authorization': f'Bearer {token}',
}

response = requests.post(url, data=data, headers=headers)

print(response.status_code)
print(response.text) 
print(json.dumps(response.json(), indent=4))
```



## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::