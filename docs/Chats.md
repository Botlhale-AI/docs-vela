---
sidebar_position: 8
draft: true
---

# Analyse Chat Conversations

The Chats section of Interactions lets you upload digital chat transcripts, review AI-generated analysis, score agent performance, and add coaching feedback — all in the same workflow as voice calls.

---

## Uploading a Chat Interaction

Chat data must be submitted as a structured file. The upload page offers two tabs: **Upload** (single chat via CSV) and **Bulk Upload** (multiple chats via JSON).

### Single Chat Upload

Use this when you want to review one chat in detail or add it for coaching purposes.

1. Go to **Interactions** in the left sidebar, then select the **Chats** tab.
2. Click **Upload**.
3. Select the **Upload** tab (single upload).
4. Complete the form:
   - **Agent** — select from the dropdown, or click **Create an agent** to add a new one
   - **Team** — auto-populated from the selected agent; adjust if needed
   - **Department** — select the relevant department
   - **Tags** — optional classification labels (defined at organisation level)
   - **Interaction ID** — optional reference ID for your own records
5. Drag and drop your CSV file into the drop zone, or click **browse your device**.
6. Click **Upload**.

### Bulk Chat Upload

Use this to upload a batch of chat sessions at once.

1. Go to **Interactions → Chats**.
2. Click **Upload**, then select the **Bulk Upload** tab.
3. Prepare your JSON file. It must follow the required format — see [JSON Format](#json-format-for-bulk-chat-upload) below and the full specification in [System Requirements](./system-requirements.md).
4. Drag and drop the JSON file into the drop zone, or click **browse your device**.
5. Click **Upload**.

> If your monthly chat allocation is exhausted, the upload button will be disabled. Contact your Vela Account Manager to review your plan.

---

## JSON Format for Bulk Chat Upload

Your JSON file must be an array of chat session objects. Each session requires a `metadata` block and a `messages` array:

```json
[
    {
        "metadata": {
            "date": "23/09/2025, 14:30",
            "agent": "agent@yourcompany.com",
            "interaction_id": "chat_12345",
            "language": "en-ZA"
        },
        "messages": [
            {
                "message": "Hello, how can I help you today?",
                "time": "23/09/2025, 14:30",
                "sender": "agent",
                "language": "en-ZA"
            },
            {
                "message": "I need help with my billing",
                "time": "23/09/2025, 14:31",
                "sender": "customer",
                "language": "en-ZA"
            }
        ]
    }
]
```

**Field notes:**

- `metadata.agent` — must be the agent's email address as registered in Vela
- `sender` — must be either `"agent"` or `"customer"`
- `language` — language code for the message (used for multilingual analysis)
- Messages must be in chronological order

See [System Requirements](./system-requirements.md) for the complete specification including all supported language codes.

---

## Reviewing a Chat Interaction

Once a chat has been processed, click on any row in the Chats list to open the detail view. The detail view shows the same AI analysis components as calls:

### Conversation Transcript

The transcript displays each message in chronological order, with the sender (agent or customer) identified visually. Use the search bar to find specific words or phrases within the conversation.

### Summary

An AI-generated overview of the chat session, including the main topic discussed, whether the issue was resolved, and any notable moments in the conversation.

### Sentiment

The overall sentiment (Positive, Neutral, or Negative) for the interaction, plus a view of how sentiment shifted across the conversation. Use this to identify the point at which a customer's mood improved or declined.

### Keywords

Important terms and phrases detected in the chat — including compliance-related words, product or service mentions, and sentiment-bearing language.

### Alerts

Any alerts raised against this chat by your organisation's Smart Search rules. Each alert links back to the rule that triggered it. Mark an alert as resolved once you have reviewed and acted on it.

### Intent

The AI-classified purpose of the chat session (for example: Support, Sales, Billing, Complaint). Intent is visible in the detail view and aggregated on the Dashboard.

### Scorecard

The automatic scorecard evaluates the chat against your organisation's Agent Scorecard criteria and produces a weighted score. To override an AI outcome:

1. Locate the **Scorecard** section.
2. Use the **Automatic** or **Manual** tab to find the item you want to change.
3. Click the **edit icon** (pencil) in the Outcome column header to enter edit mode.
4. Adjust the outcome (Yes / No / N/A) for any item.
5. Click **Save Changes** — the score is recalculated using your edits.

### Pain Points

Customer frustration indicators identified by the AI — such as repeated explanations, unresolved issues, or unclear communication.

---

## Adding Comments and Coaching Feedback

Comments let you leave feedback directly on an individual chat interaction, visible to the agent.

1. Scroll to the **Comments** section at the bottom of the detail view.
2. Click **Add Comment**.
3. Write your feedback. Be specific — reference what the agent said or did well, and what they should do differently.
4. To notify the agent, include `@AgentName` in your comment. The agent will receive an in-app notification. Comments without an `@` mention are visible to team leads only.
5. Submit the comment.

Agents can respond to comments, creating a two-way coaching thread on the interaction.

---

## Filtering and Searching Chats

### Search

Use the search bar at the top of the Chats list to find interactions by keyword. The search runs against the transcript content.

### Filter

Click **Filter** to open the filter panel. Available filters for chats include:

- **Agent** — one or more specific agents
- **Team** — one or more teams (visible based on your access level)
- **Department** — available at organisational access level
- **Handle time** — range in seconds
- **Response time** — average time between messages, in seconds
- **Alerts** — number of alerts raised
- **Agent score** — percentage range
- **Tags** — classification labels assigned at upload
- **Direction** — All, Inbound, or Outbound
- **Topic** — topics detected by Smart Search
- **Reviewed** — filter by whether the interaction has been reviewed

Click **Save Changes** in the filter panel to apply your selection. Click **clear all fields** to reset.

### Sort

Use the **Sort** control to order the list by date, agent name, score, or other available columns.

---

## Chat Metrics on the Dashboard

Chat performance metrics appear on the Dashboard alongside call metrics. Switch to **Chats only** using the Interaction Type filter to see chat-specific data, including:

- **No. Chats** — total chat interactions in the selected period
- **Ave Response Time** — average time between messages across conversations
- **Sentiment Distribution** — breakdown of Positive, Neutral, and Negative chats
- **Intent Distribution** — what customers were trying to achieve

---

## Best Practices for Chat QA

- **Prioritise chats with negative sentiment** — use the sentiment filter to surface conversations where the customer's mood declined
- **Use the score range filter** — quickly identify chats that scored below your team's threshold
- **Check Smart Search alerts** — Smart Search rules apply to both calls and chats; alerts in the Smart Detector may relate to chat interactions
- **Add comments for coaching** — feedback left directly on an interaction gives agents concrete examples to learn from

---

## Next Steps

| **For Smart Monitoring** | **For Team Management** | **For Quality Assurance** |
|-------------------------|------------------------|-------------------------|
| [Set Up Smart Monitoring](./smart-detector-overview.md) | [Improve Agent Performance](./Agents.md) | [Create Agent Scorecards](./agent-scorecard-guide.md) |

### See also
- [Call Analysis](./Calls.md) — Analyse voice interactions
- [Dashboard Overview](./Dashboard.md) — Monitor digital performance trends
- [Agent Performance](./Agents.md) — Coach your team effectively
- [Smart Search](./smart-search-guide.md) — Find patterns in digital conversations
- [System Requirements](./system-requirements.md) — Chat JSON format specification

## Need Help?

- **Contact Support**: support@botlhale.ai
