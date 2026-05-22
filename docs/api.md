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

### Scenario 2: Custom Analytics Dashboard
**Business Goal**: Combine Vela data with other business metrics

**Use Case**: You want to create a custom dashboard that shows call centre performance alongside sales data, customer satisfaction scores, and other KPIs.

**Solution**: Use the API to retrieve Vela analytics and combine them with data from other systems.

### Scenario 3: CRM Integration
**Business Goal**: Enhance customer profiles with call insights

**Use Case**: When a customer calls, you want to automatically update their CRM profile with call sentiment, issues discussed, and agent performance.

**Solution**: Use the API to retrieve call analysis results and push them to your CRM after processing is complete.

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
| Batch Processing | Large data uploads, historical data migration, scheduled updates | Migrating existing call data, scheduled data synchronisation, bulk data processing, offline data upload |

---

## API Fundamentals

### Base URL
All API endpoints use this base URL:
```bash
https://your-vela-domain.com/api
```

> **Note**: Replace `your-vela-domain.com` with your actual Vela platform domain.

### Authentication
Include your Bearer token in all requests:
```bash
Authorization: Bearer YOUR_API_TOKEN
```

> **Note**: API tokens are provided by your Vela Account Manager.

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
- `metadata` - Optional: `email` (agent email), `date_of_call`

Call uploads use a two-step process: first request upload credentials, then use them to upload the audio file.

**Example Request**:
```python
import requests, json

# Step 1: Get upload credentials
result = requests.post(
    "https://api.botlhale.ai/asr/async/upload/vela",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    data={
        'org_id': 'your_org_id',
        'metadata': json.dumps({"email": "agent@example.com", "date_of_call": "2025-01-15"})
    }
).json()

# Step 2: Upload the audio file
files = [('file', ('call.wav', open('call.wav', 'rb'), 'audio/wav'))]
requests.post(result['url'], data=result['fields'], files=files)
```

:::info Additional API Endpoints
For the complete list of available API endpoints — including chat uploads, analytics, and integrations — see the [Official API Documentation](./advanced/api-documentation.md) or contact your Account Manager.
:::

---

## Advanced Integration Patterns

| **Pattern** | **Description** | **Implementation** |
|-------------|-----------------|-------------------|
| Data Synchronisation | Keep Vela data in sync with your existing systems | Scheduled sync jobs, incremental updates, conflict resolution, error handling |
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

---

## Measuring Success

| **Key Metrics** | **Success Indicators** |
|-----------------|------------------------|
| Data synchronisation accuracy | Reduced manual work |
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
