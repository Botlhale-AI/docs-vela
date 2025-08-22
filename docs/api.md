---
sidebar_position: 9
---

# Integrate Vela with Your Systems

Your call center doesn't exist in a vacuum. Vela's API lets you connect your existing systems, automate data flow, and build custom integrations that fit your unique business needs. Whether you're a developer or just want to automate some workflows, we'll show you how to make Vela work with your tech stack.

## What You Can Achieve

APIs are the secret sauce that makes everything work together. Here's what you'll unlock:

**Stop manual uploads forever** - Automate data flow from your existing call recording systems
**Build your dream dashboard** - Create custom dashboards that integrate with your business tools
**Work smarter, not harder** - Create automated workflows that trigger actions based on call insights
**Know your customers better** - Integrate with your CRM to enhance customer profiles with call data
**Build the future** - Develop custom applications that leverage Vela's analytics

## Common Integration Scenarios

### Scenario 1: Automated Call Recording Upload
**Business Goal**: Eliminate manual data upload and ensure all calls are analyzed

**Use Case**: Your call center uses an existing recording system that stores calls in a database or file system. You want to automatically send all new recordings to Vela for analysis.

**Solution**: Build an integration that monitors your recording system and uploads new calls via API.

### Scenario 2: Real-Time Alert Integration
**Business Goal**: Respond immediately to critical customer issues

**Use Case**: When Vela detects a customer complaint or compliance issue, you want to automatically create a ticket in your help desk system or send an alert to your team.

**Solution**: Use webhooks to receive real-time notifications and trigger your existing workflows.

### Scenario 3: Custom Analytics Dashboard
**Business Goal**: Combine Vela data with other business metrics

**Use Case**: You want to create a custom dashboard that shows call center performance alongside sales data, customer satisfaction scores, and other KPIs.

**Solution**: Use the API to retrieve Vela analytics and combine them with data from other systems.

### Scenario 4: CRM Integration
**Business Goal**: Enhance customer profiles with call insights

**Use Case**: When a customer calls, you want to automatically update their CRM profile with call sentiment, issues discussed, and agent performance.

**Solution**: Use webhooks to receive call completion events and update your CRM system.

## Getting Started with API Integration

### Step 1: Set Up Authentication
1. **Log in** to your Vela platform
2. **Go to "Settings" → "API Keys"**
3. **Generate a new API key** for your integration
4. **Copy the token** for use in your API requests

**Security Best Practice**: Store your API token securely and never expose it in client-side code.

### Step 2: Choose Your Integration Approach

#### Option A: Direct API Integration
**Best for**: Custom applications, automated workflows, real-time data access

**When to use**:
- Building custom dashboards
- Creating automated workflows
- Integrating with existing business systems
- Real-time data processing

#### Option B: Webhook Integration
**Best for**: Event-driven workflows, real-time notifications, automated responses

**When to use**:
- Receiving alerts for important events
- Triggering actions based on call insights
- Real-time notification systems
- Automated ticket creation

#### Option C: Batch Processing
**Best for**: Large data uploads, historical data migration, scheduled updates

**When to use**:
- Migrating existing call data
- Scheduled data synchronization
- Bulk data processing
- Offline data upload

## API Fundamentals

### Base URL
All API endpoints use this base URL:
```
https://api.botlhale.xyz/v1
```

### Authentication
Include your API token in all requests:
```bash
Authorization: Bearer YOUR_API_TOKEN_HERE
```

### Rate Limits
- **Standard Plan**: 100 requests per minute
- **Professional Plan**: 500 requests per minute
- **Enterprise Plan**: 1000 requests per minute

**Pro Tip**: Implement exponential backoff for rate limit handling to ensure reliable integration.

## Core API Use Cases

### Uploading Call Data Automatically

#### Use Case: Call Recording System Integration
**Business Need**: Automatically analyze all calls from your existing recording system

**Implementation**:
1. **Monitor your recording system** for new files
2. **Upload via API** when new recordings are available
3. **Track processing status** to ensure successful analysis
4. **Handle errors** gracefully for failed uploads

**Example Code**:
```python
import requests
import os
from datetime import datetime

def upload_call_recording(file_path, agent_email, call_date):
    url = "https://api.botlhale.xyz/v1/calls/upload"
    headers = {
        "Authorization": "Bearer YOUR_API_TOKEN",
        "Content-Type": "application/json"
    }
    
    data = {
        "org_id": "your_org_id",
        "agent_email": agent_email,
        "call_date": call_date.isoformat(),
        "file_url": file_path
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()
```

### Retrieving Analytics Data

#### Use Case: Custom Dashboard Integration
**Business Need**: Build a custom dashboard that combines Vela analytics with other business data

**Implementation**:
1. **Retrieve agent performance** data via API
2. **Get call analytics** for specific time periods
3. **Combine with other data sources** (CRM, sales, etc.)
4. **Display in custom dashboard**

**Example Code**:
```python
def get_agent_performance(agent_id, start_date, end_date):
    url = f"https://api.botlhale.xyz/v1/agents/{agent_id}/performance"
    headers = {"Authorization": "Bearer YOUR_API_TOKEN"}
    
    params = {
        "start_date": start_date.isoformat(),
        "end_date": end_date.isoformat()
    }
    
    response = requests.get(url, headers=headers, params=params)
    return response.json()
```

### Real-Time Event Processing

#### Use Case: Automated Alert System
**Business Need**: Receive immediate notifications when important events occur

**Implementation**:
1. **Set up webhook endpoint** in your system
2. **Configure Vela webhooks** for specific events
3. **Process incoming events** in real-time
4. **Trigger appropriate actions** (create tickets, send alerts, etc.)

**Example Webhook Handler**:
```python
from flask import Flask, request

app = Flask(__name__)

@app.route('/webhook/vela', methods=['POST'])
def handle_vela_webhook():
    event = request.json
    
    if event['event'] == 'call.completed':
        # Process completed call
        call_data = event['data']
        
        # Check for customer complaints
        if call_data['sentiment'] == 'negative':
            create_support_ticket(call_data)
            
        # Update CRM with call insights
        update_customer_profile(call_data)
    
    return {'status': 'success'}

def create_support_ticket(call_data):
    # Integrate with your help desk system
    pass

def update_customer_profile(call_data):
    # Update CRM with call insights
    pass
```

## Advanced Integration Patterns

**Data Synchronization**: Keep Vela data in sync with your existing systems using scheduled sync jobs and incremental updates

**Event-Driven Architecture**: React to Vela events in real-time with webhook endpoints and event processing pipelines

**Custom Analytics Pipeline**: Build advanced analytics using Vela data through extraction, transformation, and custom processing

## Best Practices for API Integration

### Security and Authentication
- **Secure token storage** - Never hardcode API tokens
- **Token rotation** - Regularly update API keys
- **Access control** - Limit API access to necessary endpoints
- **Audit logging** - Track API usage for security monitoring

### Error Handling and Reliability
- **Implement retry logic** - Handle temporary failures gracefully
- **Rate limit handling** - Respect API rate limits
- **Data validation** - Validate data before sending to API
- **Monitoring** - Track API performance and errors

### Performance Optimization
- **Batch operations** - Group multiple requests when possible
- **Caching** - Cache frequently accessed data
- **Async processing** - Use asynchronous requests for better performance
- **Connection pooling** - Reuse HTTP connections

### Data Quality
- **Data validation** - Ensure data meets API requirements
- **Error logging** - Log and monitor data quality issues
- **Data transformation** - Clean and format data appropriately
- **Backup strategies** - Maintain data backups for reliability

## Troubleshooting Common Integration Issues

### Authentication Problems
**Problem**: API requests returning 401 Unauthorized errors
**Solutions**:
- Verify API token is correct and not expired
- Check token permissions and scope
- Ensure token is included in request headers
- Contact support if token issues persist

### Rate Limiting Issues
**Problem**: Receiving 429 Rate Limit Exceeded errors
**Solutions**:
- Implement exponential backoff retry logic
- Reduce request frequency
- Use batch operations to reduce API calls
- Consider upgrading to higher rate limit plan

### Data Upload Failures
**Problem**: Call recordings not uploading successfully
**Solutions**:
- Verify file format and size requirements
- Check network connectivity and timeouts
- Validate request payload structure
- Monitor upload status and retry failed uploads

### Webhook Delivery Issues
**Problem**: Webhooks not being received
**Solutions**:
- Verify webhook endpoint is accessible
- Check webhook URL and authentication
- Monitor webhook delivery logs
- Implement webhook retry logic

## Measuring Success

**Key Metrics**: Data synchronization accuracy, API response times, error rates, and data quality

**Success Indicators**: Reduced manual work, improved data accuracy, faster response times, and enhanced insights

## Next Steps

- **[Get Your Data into Vela](./data-upload.md)** - Learn about manual and automated data upload
- **[Configure Notifications](./notifications.md)** - Set up webhook-based alerts
- **[Analyze Interactions](./calls.md)** - Use API to retrieve detailed call data

## Need Help?

- **Contact Support**: api-support@botlhale.ai
- **Integration Consulting**: Get help with complex integration scenarios
- **Developer Resources**: Access SDKs, code samples, and technical documentation
