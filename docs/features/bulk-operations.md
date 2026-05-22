---
sidebar_position: 0
title: Bulk Uploading Calls and Metadata
---

# Bulk Uploading Calls and Metadata

The Bulk Upload feature allows Team Leads and Administrators to process large batches of recorded calls efficiently. This is crucial for initial setup or processing daily/weekly call volumes.

:::warning Recommended Limits
Vela advises keeping bulk uploads to a maximum of **3GB per batch** for optimal processing speeds and performance. Uploads of up to 3GB are possible, but may require increased processing time.
:::

## 1. Preparation Requirements

Before starting the upload, you must prepare both your audio files and the corresponding metadata file.

### A. Prepare Audio Files

1.  **Supported Formats:** Ensure all your audio files are in either **WAV** or **MP3** format.
2.  **Archive the Files:** Compress all the audio files you wish to upload into a single **ZIP archive**.
3.  **Maximum Size:** Keep the ZIP file under the recommended 3GB size limit.

### B. Prepare the Metadata File

You must create a `metadata.csv` file that provides Vela with the necessary context for each call.

1.  **Download the Template:** Download the `metadata.csv` example file available from the upload interface to ensure correct formatting.
2.  **Required Columns:** Your CSV file **must** contain the following six columns with these exact names:

| Column Name | Description | Example Value(s) |
| :--- | :--- | :--- |
| `filename` | The **exact** file name of the audio file (including the extension). | `call_001.mp3` or `call_002.wav`. |
| `agent_name` | The name of the agent who handled the call. | `john.smith`. |
| `team` | The team the agent belongs to. | `Sales Team`. |
| `department` | The agent's department name. | `Customer Service`. |
| `direction` | The call direction. | `inbound` or `outbound`. |
| `tags` | Relevant classification tags (semicolon-separated). | `sales;product_inquiry` or `complaint;billing`. |

## 2. Bulk Upload Process

Once your ZIP archive and `metadata.csv` file are ready, follow these steps:

1.  Navigate to **Interactions** → **Calls**.
2.  Click **"Bulk Upload"**.
3.  Upload your prepared **ZIP file** (containing both the audio files and the `metadata.csv`).
4.  **Monitor Processing Status:** Large batches may take several minutes to process depending on the volume.
5.  **Review Upload Results:** Check for any errors in the processing queue. If there are metadata errors, you can download an error report, correct the `metadata.csv`, and re-upload the corrected batch.

:::tip Efficiency Tip
Try to upload large batches during **off-peak hours** to ensure optimal processing speed and faster analysis completion.
:::

## 3. Uploading Chat Interactions

Chat interactions are uploaded using a different file format:

* **Format:** Chat data must be uploaded as a **JSON file**.
* **Structure:** The JSON file requires a specific array structure containing `metadata` (date, agent, ID, language) and an array of individual `messages`.

```json
[
  {
    "metadata": {
      "date": "DD/MM/YYYY, HH:mm",
      "agent": "agent@example.com",
      "interaction_id": "<interaction_id>",
      "language": "en-ZA"
    },
    "messages": [
      {
        "message": "message 1",
        "time": "DD/MM/YYYY, HH:mm",
        "sender": "user",
        "language": "en-ZA"
      }
    ]
  }
]
```

### Process for Chat Uploads

1. Navigate to **Interactions → Chats**.  
2. Upload the correctly formatted **JSON file**.  
3. Monitor the **processing status** until the upload is complete.  
