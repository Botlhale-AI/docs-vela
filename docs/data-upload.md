---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Data Upload

## Overview

The Vela platform offers two methods for uploading your call data, depending on your current storage solution:

1. **Automatic Upload via FTP:**
    - **Suitable for:** Users who store call data on an FTP server. 
    - **Benefits:** Automated updates, no manual intervention required.

    **Requirements:**

    - An FTP server where your call data resides. 
    - Shared access credentials provided to Botlhale AI during onboarding.

    **Process:**
    1. During onboarding, share access credentials for your FTP server with Botlhale AI. 
    2. Botlhale AI establishes a connection and synchronises your call data automatically. 
    3. Call data appears in the `Calls` screen on the Vela platform.

2. **Manual Batch Upload**:
    - **Suitable for**: Users who do not store call data on an FTP server. 
    - **Benefits**: Flexible uploading for various data sources.

    **Process:**
    1. Navigate to the `Calls` screen on the Vela platform.
    2. Click the `Batch Upload` button. 
    3. Select and upload a zip file containing your call data. 
    4. Click `Upload` to initiate the process.
    5. Upon successful upload, your call data appears in the `Calls` screen table.

:::note TECHNICAL NOTES:
- Both methods support uploading various call data formats, including CSV, TSV, and JSON. 
- The batch upload function accepts zip files with a maximum size of 3 GB. 
- For larger datasets, consider contacting Botlhale AI support for alternative upload options. Ensure your call data adheres to the specified format and schema requirements for successful processing.
:::

## Vela Integration

### Vela APIs

#### Calls

:::tip important
> You need to include an `Authentication Token` in request headers. See the [Authentication](api.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Endpoint URL:**
```
https://api.botlhale.xyz/asr/async/upload/vela
```

**Description:**
This API endpoint generates a presigned URL and associated credentials that allow for the secure upload of a call recording. This feature is designed for integration with Vela, enabling organisations to seamlessly upload call data for processing.

**Parameters:**

| Parameter      | Requirement | Description                                              |
|----------------|-------------|----------------------------------------------------------|
| org_id         | Required    | Identifier for the organisation submitting the call.     |
| metadata       | Optional    | A JSON containing the information below.              |

- **email**: Email address of the agent who participated in the call.
- **date_of_call**: The date when the call took place.                     

:::info **Endpoint Behaviour**

Before generating the presigned URL and upload credentials, the endpoint forwards the provided `org_id`, `email`, and `date_of_call` to Vela for logging and processing. Vela responds with `minute_allocation` and `voice_id` statuses. The API performs the following checks:

- **Minute Allocation Check:** The API verifies if the organisation (`org_id`) is within its `minute_allocation`. If the organisation has exceeded its allocation, an error is thrown.
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





#### Chats

:::tip important
> You need to include an `Authentication Token` in request headers. See the [Authentication](api.md#authentication) page of this documentation for information on how to generate authentication token codes.
:::

**Endpoint URL:**
```
https://api.botlhale.xyz/chat/upload/vela
```

**Description:**
This API endpoint allows you to upload chat conversation data to the Vela platform for analysis. The endpoint accepts chat transcripts and associated metadata for processing and integration into your analytics dashboard.

**Parameters:**

| Parameter      | Requirement | Description                                              |
|----------------|-------------|----------------------------------------------------------|
| org_id         | Required    | Identifier for the organisation submitting the chat.     |
| chat_data      | Required    | JSON object containing the chat conversation data.       |
| metadata       | Optional    | Additional information about the chat session.           |

**Chat Data Format:**
- **messages**: Array of message objects containing timestamp, sender, and content
- **session_id**: Unique identifier for the chat session
- **agent_id**: Identifier for the agent handling the chat
- **customer_id**: Identifier for the customer (if available)
- **start_time**: Chat session start timestamp
- **end_time**: Chat session end timestamp

**Sample Request:**
```json
{
    "org_id": "your_org_id",
    "chat_data": {
        "session_id": "chat_12345",
        "agent_id": "agent_001",
        "customer_id": "customer_789",
        "start_time": "2024-01-15T10:30:00Z",
        "end_time": "2024-01-15T10:45:00Z",
        "messages": [
            {
                "timestamp": "2024-01-15T10:30:00Z",
                "sender": "customer",
                "content": "Hello, I need help with my account"
            },
            {
                "timestamp": "2024-01-15T10:30:15Z",
                "sender": "agent",
                "content": "Hi! I'd be happy to help you with your account. What specific issue are you experiencing?"
            }
        ]
    },
    "metadata": {
        "channel": "website",
        "department": "customer_support"
    }
}
```

**Response Format:**
```json
{
    "status": "success",
    "message": "Chat data uploaded successfully",
    "chat_id": "vela_chat_12345",
    "processing_status": "queued"
}
```

**Request Example**

<Tabs>
<TabItem value="py" label="Python" default>

```py
import requests
import json

url = "https://api.botlhale.xyz/chat/upload/vela"

headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}

payload = {
    "org_id": "your_org_id",
    "chat_data": {
        "session_id": "chat_12345",
        "agent_id": "agent_001",
        "customer_id": "customer_789",
        "start_time": "2024-01-15T10:30:00Z",
        "end_time": "2024-01-15T10:45:00Z",
        "messages": [
            {
                "timestamp": "2024-01-15T10:30:00Z",
                "sender": "customer",
                "content": "Hello, I need help with my account"
            },
            {
                "timestamp": "2024-01-15T10:30:15Z",
                "sender": "agent",
                "content": "Hi! I'd be happy to help you with your account."
            }
        ]
    },
    "metadata": {
        "channel": "website",
        "department": "customer_support"
    }
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(response.text)
```

</TabItem>
<TabItem value="nodejs" label="Node.js" >

```js
const axios = require('axios');

const url = 'https://api.botlhale.xyz/chat/upload/vela';

const headers = {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
};

const payload = {
    org_id: 'your_org_id',
    chat_data: {
        session_id: 'chat_12345',
        agent_id: 'agent_001',
        customer_id: 'customer_789',
        start_time: '2024-01-15T10:30:00Z',
        end_time: '2024-01-15T10:45:00Z',
        messages: [
            {
                timestamp: '2024-01-15T10:30:00Z',
                sender: 'customer',
                content: 'Hello, I need help with my account'
            },
            {
                timestamp: '2024-01-15T10:30:15Z',
                sender: 'agent',
                content: 'Hi! I\'d be happy to help you with your account.'
            }
        ]
    },
    metadata: {
        channel: 'website',
        department: 'customer_support'
    }
};

axios.post(url, payload, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });
```

</TabItem>
</Tabs>

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::
