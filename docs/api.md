---
sidebar_position: 9
draft: true
---

# Integrate Vela with Your Systems

Your call centre doesn't exist in a vacuum. Vela's API lets you connect your existing systems, automate data flow, and build custom integrations that fit your unique business needs.

## What You Can Achieve

APIs enable seamless integration between systems. You'll be able to:

| **Automation** | **Integration** | **Customisation** |
|----------------|-----------------|-------------------|
| Stop manual uploads forever | Build your dream dashboard | Work smarter, not harder |
| Know your customers better | Build the future | Create automated workflows |

---

## Common Integration Scenarios

### Scenario 1: Automated Call Recording Upload
**Business Goal**: Eliminate manual data upload and ensure all calls are analysed

**Use Case**: Your call centre uses an existing recording system that stores calls in a database or file system. You want to automatically send all new recordings to Vela for analysis.

**Solution**: Build an integration that monitors your recording system and uploads new calls via API.

### Scenario 2: Automated Alert Integration
**Business Goal**: Respond promptly to critical customer issues identified in call analysis

**Use Case**: When Vela detects a customer complaint or compliance issue in analysed calls, you want to automatically create a ticket in your help desk system or send an alert to your team.

**Solution**: Use webhooks to receive automated notifications and trigger your existing workflows.

### Scenario 3: Custom Analytics Dashboard
**Business Goal**: Combine Vela data with other business metrics

**Use Case**: You want to create a custom dashboard that shows call centre performance alongside sales data, customer satisfaction scores, and other KPIs.

**Solution**: Use the API to retrieve Vela analytics and combine them with data from other systems.

### Scenario 4: CRM Integration
**Business Goal**: Enhance customer profiles with call insights

**Use Case**: When a customer calls, you want to automatically update their CRM profile with call sentiment, issues discussed, and agent performance.

**Solution**: Use webhooks to receive call completion events and update your CRM system.

---

## Getting Started with API Integration

### Step 1: Set Up Authentication
1. **Log in** to your Vela platform
2. **Contact your Account Manager** to set up API access
3. **Receive your authentication credentials** for integration
4. **Use session-based authentication** for API requests

> **Security Best Practice**: Store your authentication credentials securely and never expose them in client-side code.

### Step 2: Choose Your Integration Approach

| **Approach** | **Best For** | **When to Use** |
|--------------|--------------|-----------------|
| Direct API Integration | Custom applications, automated workflows, call analytics data access | Building custom dashboards, creating automated workflows, integrating with existing business systems, call analytics data processing |
| Webhook Integration | Event-driven workflows, automated notifications, automated responses | Receiving alerts for important events, triggering actions based on call insights, automated notification systems, automated ticket creation |
| Batch Processing | Large data uploads, historical data migration, scheduled updates | Migrating existing call data, scheduled data synchronization, bulk data processing, offline data upload |

---

## API Fundamentals

### Base URL
All API endpoints use this base URL:
```bash
https://your-vela-domain.com/api
```

> **Note**: Replace `your-vela-domain.com` with your actual Vela platform domain.

### Authentication
Vela uses NextAuth.js for authentication. Include your session token in all requests:
```bash
Authorization: Bearer YOUR_SESSION_TOKEN_HERE
```

> **Note**: Session tokens are obtained through the standard login process and managed by NextAuth.js.

### Rate Limits
Rate limits are configured based on your organisation's package and usage patterns. Contact your Account Manager for specific rate limit information.

---

## Core API Endpoints

### Upload Call Recordings
```bash
POST /interactions/calls
```

**Required Parameters**:
- `org_id` - Your organisation identifier
- `file` - Audio file (WAV or MP3)
- `metadata` - Call information (optional)

**Example Request**:
```python
import requests

url = "https://api.botlhale.ai/asr/async/upload/vela"
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

:::info Additional API Endpoints
For the complete list of available API endpoints — including chat uploads, analytics, and integrations — see the [Official API Documentation](./advanced/api-documentation.md) or contact your Account Manager.
:::

---

## Advanced Integration Patterns

| **Pattern** | **Description** | **Implementation** |
|-------------|-----------------|-------------------|
| Data Synchronization | Keep Vela data in sync with your existing systems | Scheduled sync jobs, incremental updates, conflict resolution, error handling |
| Event-Driven Architecture | React to Vela events automatically | Webhook endpoints, event processing pipelines, action triggers, monitoring and alerting |
| Custom Analytics Pipeline | Build advanced analytics using Vela data | Data extraction, transformation and enrichment, custom analytics and machine learning, results storage and visualisation |

---

## Best Practices for API Integration

### Security and Authentication
- **Secure token storage** - Never hardcode API tokens
- **Token rotation** - Regularly update authentication credentials
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

---

## Troubleshooting Common Integration Issues

| **Problem** | **Solution** |
|-------------|--------------|
| Authentication Problems | Verify API token is correct and not expired, check token permissions and scope, ensure token is included in request headers |
| Rate Limiting Issues | Implement exponential backoff retry logic, reduce request frequency, use batch operations to reduce API calls |
| Data Upload Failures | Verify file format and size requirements, check network connectivity and timeouts, validate request payload structure |
| Webhook Delivery Issues | Verify webhook endpoint is accessible, check webhook URL and authentication, monitor webhook delivery logs |

---

## Measuring Success

| **Key Metrics** | **Success Indicators** |
|-----------------|------------------------|
| Data synchronization accuracy | Reduced manual work |
| API response times | Improved data accuracy |
| Error rates | Improved response times |
| Data quality | Enhanced insights |

---

## Next Steps

| **For Data Management** | **For Automation** | **For Analytics** |
|------------------------|-------------------|------------------|
| [Get Your Data into Vela](./data-upload.md) | [Configure Notifications](./Notifications.md) | [Analyse Interactions](./Calls.md) |

### See also
- [Data Upload Guide](./data-upload.md) - Manual and automated data uploads
- [Smart Monitoring](./smart-detector-overview.md) - Set up automated alerts
- [Dashboard Integration](./Dashboard.md) - Connect your data to dashboards
- [Settings Configuration](./Settings.md) - Configure your API settings
- [Official API Documentation](https://docs-apis.botlhale.ai) - Complete API reference and examples

## Need Help?

- **Contact Support**: support@botlhale.ai
- **API Documentation**: [Official Botlhale API Docs](https://docs-apis.botlhale.ai)
