---
sidebar_position: 1
draft: true
---

# Dashboard & Analytics

The Dashboard is your command center for monitoring performance, identifying trends, and making data-driven decisions about your team's development needs.

## Dashboard Overview

### Date Range Controls
Located in the top-right corner, these filters allow you to focus your analysis:

- **Quick Select**: Today, Yesterday, This Week, Last Week, This Month, Last Month
- **Custom Range**: Select specific date periods for targeted analysis

### Scope Selection
Choose your data view based on your access permissions:
- **Organisation**: All teams and departments (Admin level)
- **Department**: Your department's teams (Department Manager level)
- **Team**: Your specific team only (Team Lead level)

![Dashboard header showing date range picker and scope selector](../img/screenshots/dashboard/dashboard01.png)

## Core Performance Metrics

### Agent Performance Indicators

#### Average Agent Score
- **Range**: 0-100 scale
- **Calculation**: Weighted average of all agent interaction scores in selected period
- **Use case**: Quick assessment of overall team performance quality

#### Agent Scores Distribution
- **Visualisation**: Histogram showing score ranges
- **Identifies**: Performance clustering and outliers
- **Action triggers**: Agents consistently below threshold need immediate coaching

#### Talk to Listen Ratio
- **Calculation**: Agent talking time ÷ Customer talking time
- **Optimal range**: Typically 0.7-1.2 (varies by industry)
- **High ratios**: May indicate agents talking too much, not listening enough
- **Low ratios**: Could suggest engagement issues or lack of product knowledge

### Interaction Volume Metrics

#### No. Calls / No. Chats
- **Purpose**: Workload distribution and capacity planning
- **Trends**: Identify peak times and staffing needs
- **Quality correlation**: High volume periods may show score decreases

#### Ave Call Duration
- **Benchmarking**: Compare against industry standards and internal targets
- **Efficiency indicator**: Longer calls aren't always better - depends on resolution quality
- **Training needs**: Consistently long calls may indicate knowledge gaps

#### Average Silent Time
- **Ideal range**: Minimal silent periods indicate smooth interaction flow
- **High silent time**: May indicate system issues, knowledge gaps, or training needs

### Alert and Quality Monitoring

#### No. Alerts
- **What they are**: Alerts are raised when a Smart Search match is found in a processed interaction
- **Status**: Each alert can be marked as **Resolved** or remains **Unresolved**

#### Resolved vs. Unresolved Alerts
- **Resolved**: Alerts that a team lead has reviewed and closed
- **Unresolved**: Open alerts requiring attention
- **Trend analysis**: Use the ratio to track how promptly your team is acting on flagged interactions

![Dashboard grid showing key performance metrics with color-coded indicators](../img/screenshots/dashboard/dashboard06.png)

## Advanced Analytics Metrics

### Customer Experience Indicators

#### Sentiment Distribution
- **Categories**: Positive, Neutral, Negative
- **Visualisation**: Pie chart or doughnut chart showing proportions
- **Trend tracking**: Daily/weekly sentiment changes
- **Alert thresholds**: Significant negative sentiment increases

#### Pain Point Analysis
- **Top 10 Pain Points (Detected)**: AI-identified customer frustration indicators
- **Bottom 10 Pain Points**: Less common but still important issues
- **Organisational vs. Detected**: Compare AI findings with your known issues
- **Resolution tracking**: How effectively pain points are being addressed

### Operational Intelligence

#### Language Distribution
- **Multi-language support**: Breakdown of interaction languages
- **Resource planning**: Staffing for language-specific support needs
- **Quality consistency**: Ensure performance standards across all languages

#### Intent Distribution
- **Customer purposes**: Sales, Support, Complaints, Information requests
- **Resource allocation**: Match agent skills with customer intents
- **Training focus**: Address gaps in specific intent handling

#### Keyword Distribution
- **Trending terms**: Most frequently mentioned topics
- **Compliance monitoring**: Track required phrases and procedures
- **Product/service insights**: Customer focus areas and concerns

### Team Performance Metrics

#### Team Scores Distribution
- **Comparison**: Performance across different teams
- **Benchmarking**: Identify high-performing team practices
- **Resource allocation**: Support for underperforming teams

#### Agent Distribution
- **Workload balance**: Ensure equitable interaction distribution
- **Performance correlation**: Relationship between volume and quality
- **Capacity planning**: Optimal team sizing decisions

## Dashboard Customisation

### Metric Selection
1. **Access customisation**: Click the "Customise" button
2. **Choose metrics**: Select from available metrics
3. **Chart types**: Select table, bar, line, pie, or doughnut visualisations for each metric
4. **Save configuration**: Save your customised view for future sessions

### Chart Type Optimisation
- **Table Format**: Best for detailed data comparison and exact values
- **Bar Charts**: Ideal for comparing categories (team performance, agent rankings)
- **Line Charts**: Perfect for trend analysis over time
- **Pie/Doughnut Charts**: Effective for proportion visualisation (sentiment distribution, language breakdown etc)

![Dashboard customisation interface with drag-and-drop metric selection](../img/screenshots/dashboard/dashboard05.png)

### Filter Combinations
**Multi-dimensional Analysis**:
- Date + Scope: "Last month's departmental performance"
- Interaction type + Team: "Team A's call performance or chat performance"


## Performance Interpretation Guide

### Score Trends Analysis
**Improving Trends**:
- Consistent score increases over time
- Positive coaching effectiveness
- Successfully implemented training programs

**Stable Trends**:
- Consistent performance within acceptable range
- May indicate need for advanced training to drive improvement
- Consider recognition programs to maintain motivation

**Declining Trends**:
- Immediate intervention required
- Review recent changes in processes, systems, or team composition
- Implement focused coaching and additional training

### Alert Pattern Recognition
**High Alert Volume Patterns**:
- **Time-based**: Specific days/hours with more issues
- **Agent-specific**: Individual performance concerns
- **System-related**: Technical issues affecting service quality
- **Process-related**: Training gaps or procedure unclear

**Resolution Effectiveness**:
- **Fast resolution**: Good training and clear procedures
- **Slow resolution**: Need for process improvement or additional resources
- **Recurring issues**: Systemic problems requiring root cause analysis

---



---

## Next Steps

| **For Team Management** | **For Reporting** | **For Automation** |
|------------------------|------------------|-------------------|
| [Improve Agent Performance](./agents.md) | [Generate Reports](./reports.md) | [Configure Notifications](./notifications.md) |

### See also
- [Data Upload Guide](./data-upload.md) - Get your data into Vela first
- [Agent Performance](./agents.md) - Detailed agent coaching and development
- [Smart Monitoring](./smart-detector-overview.md) - Set up automated alerts
- [API & Integration](./api.md) - Connect Vela with your existing systems

## Need Help?

- **Contact Support**: support@botlhale.ai