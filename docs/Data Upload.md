---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Data Upload

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
## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::
