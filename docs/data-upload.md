---
sidebar_position: 8
title: Data Upload Guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Your Data into Vela

Upload your call and chat data to start analysing customer interactions and improving team performance.

---

## Upload Methods

### Manual Upload

Use the Vela interface to upload files directly. Best for getting started and for ad-hoc uploads.

#### Single Call Upload

1. Click **Interactions → Calls** in the left sidebar
2. Click **Upload**
3. Select the **Upload** tab
4. Fill in the form: Agent, Direction, Tags (optional)
5. Select your audio file (WAV or MP3) or drag and drop it into the upload area
6. Click **Upload**

#### Bulk Call Upload

1. Prepare a ZIP archive containing your audio files and a `metadata.csv` file inside the same archive
2. Click **Interactions → Calls → Upload**
3. Select the **Bulk Upload** tab
4. Upload your ZIP file
5. Monitor processing status — you will receive an in-app notification when complete

**Metadata CSV format:**
```csv
filename,agent_name,team,department,direction,tags
call_001.mp3,john.smith,Sales Team,Sales,inbound,sales;product_inquiry
call_002.wav,mary.jones,Support Team,Customer Service,outbound,follow_up
```

Download the metadata template from the upload page to ensure correct column names.

#### Chat Upload

1. Click **Interactions → Chats → Upload**
2. Select the **Upload** tab for a single chat or **Bulk Upload** for multiple
3. Upload your JSON file(s)

Chat files must follow the Vela JSON schema — see [System Requirements](./getting-started/system-requirements.md) for the full format.

---

### FTP Integration

For organisations with automated call recording systems, Vela can ingest calls automatically from an FTP/SFTP server on a scheduled basis.

Contact your Vela Account Manager to set up FTP integration. You will need to provide your FTP server credentials (host, port, username, password, and path).

---

### API Upload

Upload call recordings or chat data programmatically via the Vela API.

**Call recordings endpoint:** `https://api.botlhale.ai/asr/async/upload/vela`

**Step 1 — Get upload credentials:**
```python
import requests, json

response = requests.post(
    "https://api.botlhale.ai/asr/async/upload/vela",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    data={
        'org_id': 'your_org_id',
        'metadata': json.dumps({"email": "agent@example.com", "date_of_call": "2025-01-15"})
    }
)
result = response.json()
```

**Step 2 — Upload the audio file:**
```python
files = [('file', ('call.wav', open('call.wav', 'rb'), 'audio/wav'))]
requests.post(result['url'], data=result['fields'], files=files)
```

**Chat upload endpoint:** `https://api.botlhale.ai/chats/upload/vela`

See the [API Documentation](./advanced/api-documentation.md) for full request formats and the chat payload schema.

---

## Supported Formats

| Type | Formats | Size limit |
|------|---------|------------|
| Single audio upload | WAV, MP3 | Up to 1 GB |
| Bulk upload (ZIP) | WAV or MP3 + metadata.csv | Up to 3 GB recommended |
| Chat | JSON (Vela schema) | — |

---

## Processing

Once uploaded, Vela queues files for processing — transcription, speaker identification, sentiment analysis, keyword detection, intent classification, and automatic scorecard evaluation all run as part of the same pipeline.

Processing time depends on file length, audio quality, and current server load. You will receive an in-app notification when processing is complete.

---

## Troubleshooting

| Problem | Likely cause | Solution |
|---------|-------------|----------|
| Upload fails | Unsupported format or file too large | Verify WAV or MP3 format; keep ZIP under 3 GB |
| Processing fails | Poor audio quality or corrupted file | Verify the file plays locally before uploading |
| Metadata errors | CSV column names wrong or missing files | Download the template; ensure all filenames in the CSV exist in the ZIP |
| Slow processing | Large batch or peak server load | Upload during off-peak hours; split large batches |

---

## Next Steps

- [Calls](./Calls.md) — Review and score uploaded call interactions
- [Chats](./Chats.md) — Review uploaded chat interactions
- [System Requirements](./getting-started/system-requirements.md) — Full file format specifications
- [API Documentation](./advanced/api-documentation.md) — Automate uploads via API
