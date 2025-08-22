---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Your Data into Vela Quickly

Upload your call and chat data to start analyzing customer interactions and improving team performance. This guide shows you the fastest ways to get your data into Vela and start seeing insights.

## What You Can Achieve

By uploading your data to Vela, you can:
- **Analyze every customer interaction** automatically
- **Identify patterns and trends** across your team
- **Spot training opportunities** for agents
- **Track customer satisfaction** over time
- **Generate insights** that improve your business

## Choose Your Upload Method

### Option 1: Manual Upload (Recommended for New Users)
**Best for**: Getting started quickly with existing call files

**Time to set up**: 5 minutes
**Data processed**: Within hours

**Want to automate this?** Check out [API Integration](./api.md) for automated uploads

#### Step-by-Step Process
1. **Go to "Calls"** in the left sidebar
2. **Click "Batch Upload"** button
3. **Select your call files** - We support most audio formats
4. **Click "Upload"** and wait for processing

**Why this matters**: You can start analyzing your data immediately without any technical setup.

### Option 2: FTP Integration (For Larger Organizations)
**Best for**: Organizations with automated call recording systems

**Time to set up**: 1-2 business days
**Data processed**: Automatically as calls are recorded

#### Setup Process
1. **Contact your Vela Account Manager** to set up FTP integration
2. **Provide FTP credentials** for your call recording server
3. **Configure automatic sync** - Data flows automatically
4. **Monitor upload status** through the Vela dashboard

**Why this matters**: Once set up, your data flows automatically without manual intervention.

## Supported Data Formats

### Call Recordings
- **Audio formats**: WAV, MP3, M4A, FLAC
- **Video formats**: MP4, AVI (audio will be extracted)
- **File size**: Up to 3 GB per upload
- **Batch uploads**: Multiple files at once

### Chat Data
- **Text formats**: JSON, CSV, TXT
- **Structured data**: Agent and customer messages with timestamps
- **Metadata**: Session information, agent IDs, customer IDs

### Data Requirements
- **Call recordings**: Clear audio quality for best transcription
- **Chat data**: Properly formatted with sender, timestamp, and message content
- **Metadata**: Agent information, call dates, customer IDs (if available)

## Getting Started with Manual Upload

### Step 1: Prepare Your Files
1. **Organize your call recordings** in a folder
2. **Ensure files are in supported formats** (WAV, MP3, etc.)
3. **Check file sizes** (under 3 GB each)
4. **Optional**: Create a zip file for easier upload

### Step 2: Upload Your Data
1. **Navigate to "Calls"** in Vela
2. **Click "Batch Upload"**
3. **Select your files** or drag and drop
4. **Review the upload summary**
5. **Click "Upload"** to start processing

### Step 3: Monitor Processing
- **Check upload status** in the Calls section
- **Wait for processing** (typically 1-2 hours)
- **Review results** once processing is complete
- **Start analyzing** your data in the dashboard

## Setting Up Automated Uploads

### For Organizations with Existing Systems
If you have an existing call recording system, we can integrate directly:

1. **Contact your Vela Account Manager**
2. **Provide system details**:
   - Call recording system type
   - Data storage location
   - Current data format
3. **Set up integration** - We'll configure the connection
4. **Test the connection** - Ensure data flows correctly
5. **Go live** - Automated uploads begin

### Integration Options
- **FTP/SFTP servers** - Direct file transfer
- **Cloud storage** - AWS S3, Google Cloud, Azure
- **API integration** - Custom data feeds
- **Database connections** - Direct database access

## API Integration for Developers

### Upload Call Recordings via API
For organizations with custom systems, use our API to upload data programmatically:

**Endpoint**: `https://api.botlhale.xyz/asr/async/upload/vela`

**Required Parameters**:
- `org_id` - Your organization identifier
- `metadata` - Call information including agent email and call date

**Example Request**:
```json
{
  "org_id": "your_org_id",
  "metadata": {
    "email": "agent@company.com",
    "date_of_call": "2024-01-15T10:30:00Z"
  }
}
```

### Upload Chat Data via API
Upload chat conversations for analysis:

**Endpoint**: `https://api.botlhale.xyz/chat/upload/vela`

**Required Parameters**:
- `org_id` - Your organization identifier
- `chat_data` - Structured chat conversation data

**Example Request**:
```json
{
    "org_id": "your_org_id",
    "chat_data": {
        "session_id": "chat_12345",
        "agent_id": "agent_001",
        "messages": [
            {
                "timestamp": "2024-01-15T10:30:00Z",
                "sender": "customer",
                "content": "Hello, I need help with my account"
            }
        ]
    }
}
```

## Best Practices for Data Upload

### File Organization
- **Use consistent naming** - Include date and agent information
- **Organize by date** - Group files by month or week
- **Include metadata** - Agent names, call types, customer IDs
- **Backup your data** - Keep copies of original files

### Quality Assurance
- **Check audio quality** - Ensure recordings are clear
- **Verify file formats** - Use supported formats for best results
- **Test with small batches** - Upload a few files first
- **Monitor processing** - Check for any errors or issues

### Security and Privacy
- **Secure file transfer** - Use encrypted connections
- **Data retention** - Follow your organization's policies
- **Access controls** - Limit who can upload data
- **Compliance** - Ensure data handling meets regulations

## Troubleshooting Common Issues

### Upload Failures
**Problem**: Files won't upload or upload fails
**Solutions**:
- Check file size (must be under 3 GB)
- Verify file format is supported
- Ensure stable internet connection
- Try uploading smaller batches

### Processing Delays
**Problem**: Data takes too long to process
**Solutions**:
- Check file quality and format
- Verify metadata is complete
- Contact support if delays persist
- Consider upgrading processing capacity

### Missing Data
**Problem**: Some calls or chats don't appear after upload
**Solutions**:
- Check upload status for each file
- Verify file formats are supported
- Review error logs for failed uploads
- Contact support for assistance

### API Integration Issues
**Problem**: API uploads aren't working
**Solutions**:
- Verify authentication credentials
- Check API endpoint URLs
- Review request format and parameters
- Test with simple requests first

## Data Processing Timeline

### Typical Processing Times
- **Small files** (< 10 MB): 15-30 minutes
- **Medium files** (10-100 MB): 30-60 minutes
- **Large files** (100 MB - 3 GB): 1-3 hours
- **Batch uploads**: Processed in parallel

### Factors Affecting Processing Time
- **File size** - Larger files take longer
- **Audio quality** - Clear audio processes faster
- **System load** - Peak times may be slower
- **File format** - Some formats process more efficiently

## Next Steps After Upload

### Immediate Actions
1. **Check processing status** - Monitor upload progress
2. **Review sample data** - Verify quality and accuracy
3. **Set up dashboard** - Configure your monitoring view
4. **Start analyzing** - Look for initial insights

### Ongoing Management
1. **Schedule regular uploads** - Set up automated processes
2. **Monitor data quality** - Check for issues regularly
3. **Update as needed** - Add new data sources
4. **Optimize processes** - Improve efficiency over time

## Next Steps

- **[Monitor Performance](./dashboard.md)** - Set up your dashboard to view uploaded data
- **[Improve Agent Performance](./agents.md)** - Use uploaded data for coaching
- **[Generate Reports](./reports.md)** - Create reports from your data
- **[Analyze Call Interactions](./calls.md)** - Deep dive into uploaded call data
- **[Set Up Smart Monitoring](./smart-detector-overview.md)** - Automate analysis of your data
- **[Integrate with Systems](./api.md)** - Set up automated data uploads

## Need Help?

- **Contact Support**: support@botlhale.ai
- **Upload Assistance**: Get help with file preparation and upload
- **Integration Support**: Technical help for API and FTP setup
- **Data Preparation**: Help with formatting and organizing your data
- **Processing Issues**: Assistance with data processing problems
