---
sidebar_position: 9
---

# API Documentation

Welcome to the Vela API documentation. This guide walks you through everything you need to know about integrating with the Vela platform programmatically.

## Overview

The Vela API allows you to:
- Upload call recordings and chat data
- Retrieve analytics and insights
- Manage agents and teams
- Access reports and dashboards
- Configure Smart Detector settings

## Authentication

All API requests require authentication using an API token.

### Getting Your API Token

1. **Log in** to your Vela platform
2. **Navigate to Settings** → **API Keys**
3. **Generate a new API key** or use an existing one
4. **Copy the token** for use in your API requests

### Using Your API Token

Include your API token in the request headers:

```bash
Authorization: Bearer YOUR_API_TOKEN_HERE
```

**Example:**
```bash
curl -H "Authorization: Bearer abc123def456" \
     -H "Content-Type: application/json" \
     https://api.botlhale.xyz/v1/calls
```

## Base URL

All API endpoints use the following base URL:

```
https://api.botlhale.xyz/v1
```

## Rate Limits

- **Standard Plan**: 100 requests per minute
- **Professional Plan**: 500 requests per minute
- **Enterprise Plan**: 1000 requests per minute

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

### Error Response Format

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request was invalid",
    "details": {
      "field": "call_id",
      "issue": "Required field missing"
    }
  }
}
```

## Endpoints

### Calls

#### Upload Call Recording

**POST** `/calls/upload`

Upload a call recording for processing and analysis.

**Request Body:**
```json
{
  "org_id": "string",
  "agent_email": "string",
  "call_date": "2024-01-15T10:30:00Z",
  "file_url": "string",
  "metadata": {
    "call_duration": 300,
    "customer_id": "string",
    "call_type": "inbound"
  }
}
```

**Response:**
```json
{
  "call_id": "string",
  "status": "processing",
  "estimated_completion": "2024-01-15T10:35:00Z"
}
```

#### Get Call Details

**GET** `/calls/{call_id}`

Retrieve detailed information about a specific call.

**Response:**
```json
{
  "call_id": "string",
  "agent": {
    "name": "string",
    "email": "string",
    "team": "string"
  },
  "call_details": {
    "duration": 300,
    "silent_time": 45,
    "topic": "billing",
    "sentiment": "positive"
  },
  "transcript": "string",
  "analytics": {
    "keywords": ["string"],
    "intents": ["string"],
    "pain_points": ["string"]
  }
}
```

#### List Calls

**GET** `/calls`

Retrieve a list of calls with optional filtering.

**Query Parameters:**
- `start_date` (optional): Filter calls from this date
- `end_date` (optional): Filter calls until this date
- `agent_id` (optional): Filter by specific agent
- `team_id` (optional): Filter by specific team
- `limit` (optional): Number of results to return (default: 50)
- `offset` (optional): Number of results to skip (default: 0)

**Response:**
```json
{
  "calls": [
    {
      "call_id": "string",
      "agent": "string",
      "date": "2024-01-15T10:30:00Z",
      "duration": 300,
      "topic": "string",
      "sentiment": "string"
    }
  ],
  "total": 100,
  "limit": 50,
  "offset": 0
}
```

### Chats

#### Upload Chat Data

**POST** `/chats/upload`

Upload chat conversation data for analysis.

**Request Body:**
```json
{
  "org_id": "string",
  "agent_email": "string",
  "chat_date": "2024-01-15T10:30:00Z",
  "messages": [
    {
      "sender": "customer",
      "message": "string",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "chat_duration": 300,
    "customer_id": "string",
    "chat_type": "live_chat"
  }
}
```

**Response:**
```json
{
  "chat_id": "string",
  "status": "processing",
  "estimated_completion": "2024-01-15T10:32:00Z"
}
```

#### Get Chat Details

**GET** `/chats/{chat_id}`

Retrieve detailed information about a specific chat.

**Response:**
```json
{
  "chat_id": "string",
  "agent": {
    "name": "string",
    "email": "string",
    "team": "string"
  },
  "chat_details": {
    "duration": 300,
    "response_time": 45,
    "topic": "support",
    "sentiment": "neutral"
  },
  "messages": [
    {
      "sender": "string",
      "message": "string",
      "timestamp": "2024-01-15T10:30:00Z",
      "sentiment": "string"
    }
  ],
  "analytics": {
    "keywords": ["string"],
    "intents": ["string"],
    "pain_points": ["string"]
  }
}
```

### Agents

#### List Agents

**GET** `/agents`

Retrieve a list of agents in your organisation.

**Query Parameters:**
- `team_id` (optional): Filter by specific team
- `department_id` (optional): Filter by specific department
- `active` (optional): Filter by active status (true/false)

**Response:**
```json
{
  "agents": [
    {
      "agent_id": "string",
      "name": "string",
      "email": "string",
      "team": "string",
      "department": "string",
      "active": true,
      "performance_score": 85.5
    }
  ],
  "total": 50
}
```

#### Get Agent Performance

**GET** `/agents/{agent_id}/performance`

Retrieve performance metrics for a specific agent.

**Query Parameters:**
- `start_date` (optional): Start date for performance data
- `end_date` (optional): End date for performance data

**Response:**
```json
{
  "agent_id": "string",
  "name": "string",
  "performance": {
    "total_calls": 150,
    "average_score": 85.5,
    "average_duration": 300,
    "customer_satisfaction": 4.2,
    "resolution_rate": 0.92
  },
  "trends": {
    "score_trend": [85, 86, 87, 85, 88],
    "volume_trend": [30, 32, 28, 35, 31]
  }
}
```

### Smart Detector

#### Create Smart Search

**POST** `/smart-detector/searches`

Create a new Smart Search query.

**Request Body:**
```json
{
  "name": "Customer Complaints",
  "description": "Detect customer complaints in calls",
  "scope": "organisation",
  "phrases": ["I'm not happy", "This is terrible", "I want to complain"],
  "filters": {
    "call_duration_min": 60,
    "sentiment": "negative"
  },
  "notifications": true
}
```

**Response:**
```json
{
  "search_id": "string",
  "name": "string",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### Get Smart Search Results

**GET** `/smart-detector/searches/{search_id}/results`

Retrieve results for a specific Smart Search.

**Query Parameters:**
- `start_date` (optional): Start date for results
- `end_date` (optional): End date for results
- `limit` (optional): Number of results to return

**Response:**
```json
{
  "search_id": "string",
  "name": "string",
  "results": [
    {
      "call_id": "string",
      "date": "2024-01-15T10:30:00Z",
      "agent": "string",
      "matched_phrases": ["I'm not happy"],
      "confidence": 0.95
    }
  ],
  "total_matches": 25
}
```

### Reports

#### Generate Report

**POST** `/reports/generate`

Generate a custom report.

**Request Body:**
```json
{
  "report_type": "agent_performance",
  "parameters": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "agents": ["agent1", "agent2"],
    "metrics": ["call_volume", "average_score", "resolution_rate"]
  },
  "format": "pdf"
}
```

**Response:**
```json
{
  "report_id": "string",
  "status": "generating",
  "estimated_completion": "2024-01-15T10:35:00Z",
  "download_url": "string"
}
```

#### Get Report Status

**GET** `/reports/{report_id}`

Check the status of a report generation request.

**Response:**
```json
{
  "report_id": "string",
  "status": "completed",
  "download_url": "string",
  "created_at": "2024-01-15T10:30:00Z",
  "completed_at": "2024-01-15T10:32:00Z"
}
```

## Webhooks

### Setting Up Webhooks

Configure webhooks to receive real-time notifications about events in your Vela account.

#### Create Webhook

**POST** `/webhooks`

Create a new webhook endpoint.

**Request Body:**
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["call.completed", "smart_search.matched"],
  "secret": "your-webhook-secret"
}
```

**Response:**
```json
{
  "webhook_id": "string",
  "url": "string",
  "events": ["string"],
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z"
}
```

### Webhook Events

#### Call Completed

Triggered when a call recording has been processed and analysed.

```json
{
  "event": "call.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "call_id": "string",
    "agent": "string",
    "duration": 300,
    "sentiment": "positive",
    "topic": "billing"
  }
}
```

#### Smart Search Matched

Triggered when a Smart Search query finds a match.

```json
{
  "event": "smart_search.matched",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "search_id": "string",
    "search_name": "string",
    "call_id": "string",
    "matched_phrases": ["string"],
    "confidence": 0.95
  }
}
```

## SDKs and Libraries

### Python SDK

```bash
pip install vela-sdk
```

**Example Usage:**
```python
from vela import VelaClient

client = VelaClient(api_token="your-token")

# Upload a call
call = client.calls.upload(
    org_id="your-org-id",
    agent_email="agent@company.com",
    call_date="2024-01-15T10:30:00Z",
    file_url="https://example.com/call.wav"
)

# Get call details
details = client.calls.get(call.call_id)
print(f"Call sentiment: {details.sentiment}")
```

### JavaScript SDK

```bash
npm install @vela/sdk
```

**Example Usage:**
```javascript
const { VelaClient } = require('@vela/sdk');

const client = new VelaClient('your-token');

// Upload a call
const call = await client.calls.upload({
  orgId: 'your-org-id',
  agentEmail: 'agent@company.com',
  callDate: '2024-01-15T10:30:00Z',
  fileUrl: 'https://example.com/call.wav'
});

// Get call details
const details = await client.calls.get(call.callId);
console.log(`Call sentiment: ${details.sentiment}`);
```

## Best Practices

### Error Handling

Always implement proper error handling in your API integrations:

```python
try:
    response = client.calls.upload(call_data)
except VelaAPIError as e:
    if e.status_code == 429:
        # Handle rate limiting
        time.sleep(60)
    elif e.status_code == 401:
        # Handle authentication errors
        refresh_token()
    else:
        # Handle other errors
        log_error(e)
```

### Rate Limiting

Respect the API rate limits and implement exponential backoff:

```python
import time

def make_request_with_backoff(client, request_func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return request_func()
        except VelaAPIError as e:
            if e.status_code == 429:
                wait_time = 2 ** attempt
                time.sleep(wait_time)
            else:
                raise
    raise Exception("Max retries exceeded")
```

### Data Validation

Always validate your data before sending it to the API:

```python
def validate_call_data(data):
    required_fields = ['org_id', 'agent_email', 'call_date']
    for field in required_fields:
        if field not in data:
            raise ValueError(f"Missing required field: {field}")
    
    # Validate email format
    if not is_valid_email(data['agent_email']):
        raise ValueError("Invalid email format")
```

## Support

For API support and questions:

- **Email**: api-support@botlhale.ai
- **Documentation**: https://docs.vela.botlhale.xyz/api
- **Status Page**: https://status.vela.botlhale.xyz

## Changelog

### Version 1.3 (Current)
- Added chat upload endpoints
- Enhanced Smart Detector API
- Improved error handling
- Added webhook support

### Version 1.2
- Added agent performance endpoints
- Enhanced reporting API
- Improved authentication

### Version 1.1
- Initial API release
- Basic call upload and retrieval
- Agent management endpoints
