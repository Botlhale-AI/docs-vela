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
https://api.botlhale.xyz/asr/async/upload/vela
```

**Description:**
This API endpoint generates a presigned URL and associated credentials that allow for the secure upload of a call recording. This feature is designed for integration with Vela, enabling organizations to seamlessly upload call data for processing.

**Parameters:**

| Parameter      | Requirement | Description                                              |
|----------------|-------------|----------------------------------------------------------|
| org_id         | Required    | Identifier for the organization submitting the call.     |
| metadata       | Optional    | A JSON containing the information below.              |

- **email**: Email address of the agent who participated in the call.
- **date_of_call**: The date when the call took place.                     

:::info **Endpoint Behaviour**

Before generating the presigned URL and upload credentials, the endpoint forwards the provided `org_id`, `email`, and `date_of_call` to Vela for logging and processing. Vela responds with `minute_allocation` and `voice_id` statuses. The API performs the following checks:

- **Minute Allocation Check:** The API verifies if the organization (`org_id`) is within its `minute_allocation`. If the organization has exceeded its allocation, an error is thrown.
:::


**Response Format**: The response returns a JSON object containing a presigned URL and the necessary fields for secure data upload to an AWS S3 bucket.

**Sample Response:**
```json
{
    "fields": {
        "key": "<key>",
        "policy": "<policy>",
        "x-amz-algorithm": "<>",
        "x-amz-credential": "<>",
        "x-amz-date": "<>",
        "x-amz-security-token": "<>",
        "x-amz-signature": "<>"
    },
    "url": "upload_url"
}
```

Integrate this API into your application to request a presigned URL, which allows you to upload call recordings to the specified `upload_url` securely using the provided credentials and fields. Using the `upload_url` works the same as a normal upload.


**Upload via Presigned URL**

The generated presigned URL includes both a URL and additional fields that must be passed as part of the subsequent `HTTP POST` request. The following code demonstrates how to use the requests package with a presigned POST URL to perform a `POST` request for file upload.

**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests

url = "{{uploadUrl}}"

payload = {'AWSAccessKeyId': '{{fields-AWSAccessKeyId}}',
'key': '{{fields-key}}',
'policy': '{{fields-policy}}',
'signature': '{{fields-signature}}',
'x-amz-security-token': '{{fields-x-amz-security-token}}'}
files=[
  ('file',('tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav',open('KpALthHva/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav','rb'),'audio/wav'))
]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)

```

</TabItem>
<TabItem value="nodejs" label="NodeJs - Request" >

```js 
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': '{{uploadUrl}}',
  'headers': {
  },
  formData: {
    'AWSAccessKeyId': '{{fields-AWSAccessKeyId}}',
    'key': '{{fields-key}}',
    'policy': '{{fields-policy}}',
    'signature': '{{fields-signature}}',
    'x-amz-security-token': '{{fields-x-amz-security-token}}',
    'file': [
      fs.createReadStream('KpALthHva/tts_aw215n3s4ni4_IsiZulu_H127Bqf8aN08.wav')
    ]
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
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
https://api.botlhale.xyz/chats/vela
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

url = "https://api.botlhale.xyz/chats/upload/vela"

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