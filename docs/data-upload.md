---
sidebar_position: 8
title: Upload Your Data
type: how-to
---

# Upload Your Data
Upload your call and chat data to start analysing customer interactions and improving team performance.

Recordings and transcripts you upload are encrypted in transit and at rest, and sensitive details in transcripts are masked. See [Security and Compliance](./security-compliance.md).

---

## Upload Methods

### Manual Upload

Use Vela to upload files directly. Best for getting started and for ad-hoc uploads.

#### Single Call Upload

1. Click **Interactions → Calls** in the left sidebar
2. Click **Upload**
3. Select the **Single Upload** tab
4. Fill in the form: choose the **Agent** (Team and Department fill in automatically), then optionally set **Direction** and **Tags**
5. Select your audio file (WAV or MP3) or drag and drop it into the upload area
6. Click **Upload**

![The Single Upload form, with the agent, direction, and tags fields above the dropzone](../img/screenshots/data_upload/upload2.png)

#### Bulk Call Upload

Bulk upload brings in many recordings at once from a single ZIP archive. Use it to import your existing recordings when you first set up Vela, or to bring in a batch of calls later.

**Step 1: Prepare your audio files**

Confirm every file is WAV or MP3, then compress them into a single ZIP archive. Keep the archive under the 3 GB limit, and split larger sets into several batches.

**Step 2: Prepare the metadata file**

Create a `metadata.csv` describing each recording, and place it inside the same ZIP archive as the audio files.

```csv
filename,agent_name,team,department,direction,tags
call_001.mp3,John Smith,Sales Team,Sales,inbound,sales;product_inquiry
call_002.wav,Mary Jones,Support Team,Customer Service,outbound,follow_up;resolution
```

![The Add Metadata modal on the Bulk Upload page, listing the metadata.csv columns above Download Template](../img/screenshots/calls/metadata.png)

| Column | Description | Example |
| :--- | :--- | :--- |
| `filename` | The exact audio file name, including the extension | `call_001.mp3` |
| `agent_name` | The agent's name as recorded in Vela | `John Smith` |
| `team` | The team the agent belongs to | `Sales Team` |
| `department` | The agent's department | `Customer Service` |
| `direction` | Call direction | `inbound` or `outbound` |
| `tags` | Classification labels, semicolon-separated | `sales;product_inquiry` |

`agent_name`, `team`, and `department` are matched case-insensitively, so `John Smith` and `john smith` both work. They match on the **name** as recorded in Vela, so a username or email such as `john.smith` does not match.

:::tip Start from the template
Download the `metadata.csv` template from the upload page and build your file from it. Mismatched column names are the most common cause of bulk upload failures.
:::

**Step 3: Upload**

1. Click **Interactions → Calls → Upload**
2. Select the **Bulk Upload** tab
3. Upload your ZIP file
4. Monitor processing status. Vela emails you when processing completes, depending on your notification settings
5. Review the results screen and address any failed rows

![The Bulk Upload tab, with the Add Metadata button and the .zip dropzone](../img/screenshots/calls/bulk.png)

:::tip Test with a small batch first
Upload five to ten files before committing a large historical dataset. Confirming that agent, team, and department names match correctly on a small batch is far less disruptive than discovering a systematic error after thousands of files.
:::

#### Chat Upload

1. Click **Interactions → Chats → Upload**
2. Select the **Upload** tab for a single chat or **Bulk Upload** for multiple
3. Upload your file
4. Monitor processing status until the upload completes

:::warning The two tabs take different file formats
**Upload** accepts a **CSV** file containing the messages of one chat. **Bulk Upload** accepts **JSON**. The dropzone rejects the wrong format, so check which tab you are on before preparing the file.

On the **Upload** tab you can also set **Agent**, **Tags**, and an **Interaction ID**, all optional except the agent. Use **See this example** on the page for the exact CSV layout.
:::

![The chat Upload tab, with the agent, tags, and interaction ID fields above the CSV dropzone](../img/screenshots/chats/upload.png)

Bulk chat files must follow the Vela JSON schema. This is an array of conversations, each with `metadata` and a `messages` array:

```json
[
  {
    "metadata": {
      "date": "DD/MM/YYYY, HH:mm:ss",
      "agent": "agent@example.com",
      "interaction_id": "<your_reference>",
      "language": "en-ZA"
    },
    "messages": [
      {
        "message": "message 1",
        "time": "DD/MM/YYYY, HH:mm:ss",
        "sender": "user",
        "language": "en-ZA"
      }
    ]
  }
]
```

Every message must have `message`, `time`, and `sender`. `sender` must be `user`, `agent`, or `bot`.

For the complete specification, including size limits, see [System Requirements](./getting-started/system-requirements.md).

---

### API Upload

Upload call recordings or chat data programmatically via the Vela API. You need an API token first. See the [API Reference](./advanced/api-documentation.md) for how to obtain one, and for the full request and response formats.

**Call recordings endpoint:** `https://api.botlhale.xyz/asr/async/upload/vela`

**Step 1: Get upload credentials**
```python
import requests, json

response = requests.post(
    "https://api.botlhale.xyz/asr/async/upload/vela",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    data={
        'org_id': 'your_org_id',
        'metadata': json.dumps({"email": "agent@example.com", "date_of_call": "15/01/2025, 14:30:00"})
    }
)
result = response.json()
```

**Step 2: Upload the audio file**
```python
files = [('file', ('call.wav', open('call.wav', 'rb'), 'audio/wav'))]
requests.post(result['url'], data=result['fields'], files=files)
```

**Chat upload endpoint:** `https://api.botlhale.xyz/chats/upload/vela`

See the [API Reference](./advanced/api-documentation.md) for full request formats and the chat payload schema.

---

## Supported Formats

| Type | Formats | Size limit |
|------|---------|------------|
| Single audio upload | WAV, MP3 | 1 GB |
| Bulk upload (archive) | WAV or MP3 + metadata.csv, in a ZIP | 3 GB |
| Single chat upload | CSV | 1 MB |
| Bulk chat upload | JSON (Vela schema) | 1 MB |

Audio files above their limit are rejected before the upload starts, with a "file too big" message.

:::note Chat file size
The chat upload page states a 1 MB maximum. Split large exports into several files rather than uploading one big one. A failed upload then costs you one small file rather than the whole export.
:::

---

## Processing

Once uploaded, Vela queues files for processing. Transcription, speaker identification, sentiment analysis, keyword detection, intent classification, and automatic scorecard evaluation all run as part of the same pipeline.

Processing time depends on file length, audio quality, and current server load. Vela emails you when processing is complete, depending on your notification settings.

---

## Confirm It Arrived

Open **Interactions → Calls** or **Interactions → Chats** and check that your files are listed. A bulk upload also shows a results screen naming any rows it could not process, so read that before assuming the whole batch succeeded.

Until processing finishes, an interaction has no transcript, no score, and no analysis. Give it time before treating a missing score as a failure, and see [Troubleshooting](#troubleshooting) below if it stays that way.

---

## Troubleshooting

| Problem | Likely cause | Solution |
| :--- | :--- | :--- |
| Upload fails | Unsupported format or file too large | Use WAV or MP3. Keep a single call under 1 GB and a ZIP under 3 GB |
| Chat upload fails | The file format does not match the tab. **Upload** takes CSV, **Bulk Upload** takes JSON | Check which tab you are on, then supply that format |
| Bulk chat upload fails | Malformed JSON, or JSON that does not match the Vela schema | Validate the JSON, and confirm every message has `message`, `time`, and `sender` |
| Processing fails | Poor audio quality or corrupted file | Verify the file plays locally before uploading |
| Slow processing | Large batch or peak server load | Split large batches, and run a big historical import overnight |

### Bulk Metadata Errors

A bulk upload checks the `metadata.csv` before it processes anything. If it returns one of these, fix the CSV and upload again:

| Error message | Cause | Fix |
| :--- | :--- | :--- |
| `CSV file does not contain 'filename' header` | The CSV has no `filename` column | Add a `filename` column. The template already has the right headers |
| `Mismatch between .wav/.mp3 files and CSV entries` | A `filename` in the CSV is not in the ZIP, or a file in the ZIP is not listed | Make every `filename` match a file in the ZIP exactly, including the extension |
| `Invalid direction value in CSV` | A `direction` value is not `inbound`, `outbound`, or blank | Use `inbound`, `outbound`, or leave it blank |
| `Agent 'X' cannot be created without a team` | The CSV names a new agent with no team | Add that agent's `team` and `department` to the row |
| `Department name 'X' exceeds the maximum length of 30 characters` | A new department or team name is too long. The same limit applies to both | Shorten the name to 30 characters or fewer |
| `Team name 'X' contains invalid characters` | The name uses a character outside the allowed set | Use letters, numbers, spaces, hyphens, underscores, or ampersands only |
| `You are trying to create a new department but you don't have permissions to do that` | Creating a department needs organisational access, and creating a team needs departmental or organisational access | Ask an administrator to create it first, or choose the skip option during import |

A bulk upload can create departments and teams that the CSV names but Vela does not have yet, within your own access level. Creating a department needs organisational access. Creating a team needs departmental or organisational access.

New department and team names must be 30 characters or fewer, and use only letters, numbers, spaces, hyphens, underscores, and ampersands. A name containing a slash, apostrophe, or full stop is rejected.

---

## Related

- [Review and Score Interactions](./features/quality-assurance-tools.md): review and score what you have uploaded
- [System Requirements](./getting-started/system-requirements.md): the full format and size specifications
- [API Reference](./advanced/api-documentation.md): send calls and chats programmatically
- [Security and Compliance](./security-compliance.md): where uploaded recordings and transcripts are held, how they are encrypted, and how they are backed up

## Need Help?

**Contact Support:** support@botlhale.ai
