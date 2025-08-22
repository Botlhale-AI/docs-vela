---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📤 Get Your Data into Vela Quickly

Upload your call and chat data to start analyzing customer interactions and improving team performance. This guide shows you the fastest ways to get your data into Vela and start seeing insights.

## 🎯 What You Can Achieve

By uploading your data to Vela, you can:
- [ ] **Analyze every customer interaction** automatically
- [ ] **Identify patterns and trends** across your team
- [ ] **Spot training opportunities** for agents
- [ ] **Track customer satisfaction** over time
- [ ] **Generate insights** that improve your business

---

## 🚀 Choose Your Upload Method

### Option 1: Manual Upload (Recommended for New Users)
**Best for**: Getting started quickly with existing call files

| **Setup Time** | **Processing Time** | **Best For** |
|----------------|-------------------|--------------|
| **5 minutes** | **Within hours** | Individual files, small batches, testing |

**Want to automate this?** Check out [API Integration](./api.md) for automated uploads

#### Step-by-Step Process
- [ ] **Go to "Calls"** in the left sidebar
- [ ] **Click "Batch Upload"** button
- [ ] **Select your call files** - We support most audio formats
- [ ] **Click "Upload"** and wait for processing

> 💡 **Why this matters**: You can start analyzing your data immediately without any technical setup.

### Option 2: FTP Integration (For Larger Organizations)
**Best for**: Organizations with automated call recording systems

| **Setup Time** | **Processing Time** | **Best For** |
|----------------|-------------------|--------------|
| **1-2 business days** | **Automatically as calls are recorded** | Large organizations, automated systems |

#### Setup Process
- [ ] **Contact your Vela Account Manager** to set up FTP integration
- [ ] **Provide FTP credentials** for your call recording server
- [ ] **Configure automatic sync** - Data flows automatically
- [ ] **Monitor upload status** through the Vela dashboard

> 💡 **Why this matters**: Once set up, your data flows automatically without manual intervention.

---

## 📋 Supported Data Formats

### Call Recordings
| **Format Type** | **Supported Formats** | **File Size Limit** |
|-----------------|---------------------|-------------------|
| **Audio formats** | WAV, MP3, M4A, FLAC | Up to 3 GB per upload |
| **Video formats** | MP4, AVI (audio will be extracted) | Up to 3 GB per upload |
| **Batch uploads** | Multiple files at once | No limit on number of files |

### Chat Data
| **Format Type** | **Supported Formats** | **Requirements** |
|-----------------|---------------------|------------------|
| **Text formats** | JSON, CSV, TXT | Structured data with timestamps |
| **Structured data** | Agent and customer messages | Sender, timestamp, message content |
| **Metadata** | Session information | Agent IDs, customer IDs |

### Data Requirements
- [ ] **Call recordings**: Clear audio quality for best transcription
- [ ] **Chat data**: Properly formatted with sender, timestamp, and message content
- [ ] **Metadata**: Agent information, call dates, customer IDs (if available)

---

## 🛠️ Getting Started with Manual Upload

### Step 1: Prepare Your Files
- [ ] **Organize your call recordings** in a folder
- [ ] **Ensure files are in supported formats** (WAV, MP3, etc.)
- [ ] **Check file sizes** (under 3 GB each)
- [ ] **Optional**: Create a zip file for easier upload

### Step 2: Upload Your Data
- [ ] **Navigate to "Calls"** in Vela
- [ ] **Click "Batch Upload"**
- [ ] **Select your files** or drag and drop
- [ ] **Review the upload summary**
- [ ] **Click "Upload"** to start processing

### Step 3: Monitor Processing
- [ ] **Check upload status** in the Calls section
- [ ] **Wait for processing** (typically 1-2 hours)
- [ ] **Review results** once processing is complete
- [ ] **Start analyzing** your data in the dashboard

---

## 🔧 Setting Up Automated Uploads

### For Organizations with Existing Systems
If you have an existing call recording system, we can integrate directly:

| **Step** | **Action** | **Details** |
|----------|------------|-------------|
| **1** | **Contact your Vela Account Manager** | Provide system details and requirements |
| **2** | **Provide system details** | Call recording system type, data storage location, current data format |
| **3** | **Set up integration** | We'll configure the connection |
| **4** | **Test the connection** | Ensure data flows correctly |
| **5** | **Go live** | Automated uploads begin |

### Integration Options
| **Integration Type** | **Best For** | **Setup Complexity** |
|---------------------|--------------|---------------------|
| **FTP/SFTP servers** | Direct file transfer | Medium |
| **Cloud storage** | AWS S3, Google Cloud, Azure | Low |
| **API integration** | Custom data feeds | High |
| **Database connections** | Direct database access | High |

---

## 🔌 API Integration for Developers

### Upload Call Recordings via API
For organizations with custom systems, use our API to upload data programmatically:

**Endpoint**: `https://api.botlhale.xyz/asr/async/upload/vela`

**Required Parameters**:
- `org_id` - Your organization identifier
- `file` - Audio file (WAV, MP3, M4A, FLAC)
- `metadata` - Call information (optional)

**Example Request**:
```python
import requests

url = "https://api.botlhale.xyz/v1/asr/async/upload/vela"
headers = {
    "Authorization": "Bearer YOUR_API_TOKEN"
}

files = {
    'file': open('call_recording.wav', 'rb')
}

data = {
    'org_id': 'your_org_id',
    'metadata': '{"agent_id": "123", "customer_id": "456"}'
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())
```

### Upload Chat Data via API
**Endpoint**: `https://api.botlhale.xyz/chat/upload`

**Example Request**:
```python
import requests
import json

url = "https://api.botlhale.xyz/v1/chat/upload"
headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}

chat_data = {
    "org_id": "your_org_id",
    "conversation": [
        {
            "sender": "agent",
            "message": "Hello, how can I help you today?",
            "timestamp": "2024-01-15T10:30:00Z",
        },
        {
            "sender": "customer",
            "message": "I have a question about my account",
            "timestamp": "2024-01-15T10:31:00Z",
        }
    ]
}

response = requests.post(url, headers=headers, json=chat_data)
print(response.json())
```

---

## ⏱️ Data Processing Timeline

### Typical Processing Times
| **File Size** | **Processing Time** | **What Happens** |
|---------------|-------------------|------------------|
| **Small files** (< 10 MB) | **15-30 minutes** | Transcription, analysis, insights generation |
| **Medium files** (10-100 MB) | **30-60 minutes** | Full processing with detailed analysis |
| **Large files** (> 100 MB) | **1-2 hours** | Comprehensive analysis with all features |

### Factors Affecting Processing Time
- [ ] **File size** - Larger files take longer to process
- [ ] **Audio quality** - Clear audio processes faster
- [ ] **System load** - Peak times may be slower
- [ ] **Analysis depth** - More detailed analysis requires more time

---

## 🔍 Monitoring Your Data

### Check Upload Status
- [ ] **Go to "Calls"** or "Chats" section
- [ ] **Look for processing indicators** (spinning icons, progress bars)
- [ ] **Check the status column** for each file
- [ ] **Review any error messages** if uploads fail

### Understanding Status Messages
| **Status** | **What It Means** | **Action** |
|------------|-------------------|------------|
| **Uploading** | File is being transferred | Wait for completion |
| **Processing** | Analysis is in progress | Wait for completion |
| **Complete** | Ready for analysis | Start using the data |
| **Failed** | Upload or processing failed | Check error details and retry |

### Troubleshooting Upload Issues
| **Problem** | **Common Cause** | **Solution** |
|-------------|------------------|--------------|
| **Upload fails** | File too large, unsupported format | Check file size and format requirements |
| **Processing fails** | Poor audio quality, corrupted file | Verify file integrity and audio quality |
| **Slow processing** | Large files, system load | Wait for completion or try during off-peak hours |

---

## 📊 Data Quality Best Practices

### Before Upload
- [ ] **Check audio quality** - Clear, audible recordings work best
- [ ] **Verify file formats** - Use supported formats for best results
- [ ] **Organize files** - Group related recordings together
- [ ] **Include metadata** - Agent IDs, customer IDs, timestamps

### After Upload
- [ ] **Review processing results** - Check for any issues
- [ ] **Verify data accuracy** - Ensure transcripts are correct
- [ ] **Monitor insights** - Look for patterns and trends
- [ ] **Optimize processes** - Improve efficiency over time

---

## 🔗 Next Steps

| **For Data Monitoring** | **For Automation** | **For Analysis** |
|------------------------|-------------------|------------------|
| [📊 Monitor Performance](./dashboard.md) | [🔧 API Integration](./api.md) | [📞 Analyze Calls](./calls.md) |

## 🆘 Need Help?

- 📧 **Contact Support**: support@botlhale.ai
- 📤 **Upload Assistance**: Get help with file preparation and upload
- 🔧 **Integration Support**: Technical help for API and FTP setup
- 📚 **Navigation Guide**: [Find the right documentation](./navigation-guide.md) for your needs
