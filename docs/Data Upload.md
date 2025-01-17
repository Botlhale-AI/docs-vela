---
sidebar_position: 8
---

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

### Calls

**POST Request**

```
 https://vela-server.botlhale.xyz/api/call
```

`Authorization: Bearer <ProvidedToken>`


| Body Params      | Type   | Requirement | Description                                              |
|------------------|--------|-----------|----------------------------------------------------------|
| orgID            | string | Required  | Organisation ID provided to you by Botlhale AI           |
| call            | mp3/wav | Required  | This will be the call file (mp3/wav)          |
| metadata    | Object | Optional  | Call metadata. See description below. |

Metadata object: 
- **agent** (string): This is the email address of the agent in the call. If omitted, will infer agent from voice ID if voice ID is enabled for the organisation or leave agent as unspecified otherwise.
- **date** (string): Format (DD/MM/YYYY, HH:mm). Date and time that the call was recorded. If omitted, the last modified date of the call file will be used.             


### Chats

**POST Request**

```
 https://vela-server.botlhale.xyz/api/chats
```

`Authorization: Bearer <ProvidedToken>`

Below are the attributes and the formats of each attribute required in the body.

| Body Params      | Type   | Requirement | Description                                              |
|------------------|--------|-----------|----------------------------------------------------------|
| orgID            | string | Required  | Organisation ID provided to you by Botlhale AI           |
| chats   | Array | Required  | Array of message objects                                 |


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






## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::
