---
id: administrator-setup
title: Administrator Setup
sidebar_label: Administrator Setup
sidebar_position: 0
---

# Quick Start Guide for Administrators

Welcome to Vela. As an Administrator, you have the highest level of access and the most critical setup responsibilities. **No one on your team can use the platform effectively until you complete this setup.** This guide walks you through the essential configuration steps before agents and team leads go live.

:::info Your Role in Vela
Administrators configure the platform structure — departments, teams, users, scorecards, and compliance monitors. Once setup is complete, team leads and agents can use the platform without further administrator involvement in day-to-day operations.
:::

---

## What You'll Complete

- ✅ Configure authentication
- ✅ Create your organisational structure (departments and teams)
- ✅ Add users individually or in bulk
- ✅ Set up the Agent Scorecard so interactions can be scored
- ✅ Create organisation-wide Smart Searches for compliance monitoring
- ✅ (Optional) Build the Knowledge Base


---

## Step 1: Configure Authentication (5 minutes)

Choose how users will log in to Vela.

### Option A: Single Sign-On (SSO)

If your organisation uses Google Workspace or Microsoft Azure AD, SSO allows users to log in with their existing credentials.

1. Navigate to **Settings**
2. Go to the **Authentication** section
3. Enable **Google OAuth** or **Microsoft Azure AD** and follow the configuration steps
4. Test the SSO login with your own account before rolling out to users

### Option B: Email and Password

If SSO is not available, users log in with an email and password. Passwords must meet these requirements:
- At least 8 characters
- At least one letter, one number, and one special character

Accounts are created with temporary credentials and users are prompted to set their own password on first login.

![Login options](../../../img/screenshots/settings/login-options.png)

---

## Step 2: Create Departments and Teams

Departments and teams must be created before you add users — users are assigned to teams, and teams belong to departments.

### Create Departments First

1. Navigate to **Settings → Users → Org Table**
2. Click **Create**
3. Select **Department**
4. Enter the department name (e.g., "Customer Service", "Sales")
5. Save and repeat for each department

### Then Create Teams

1. From the same **Org Table** view, click **Create**
2. Select **Team**
3. Enter the team name and assign it to a department
4. Save and repeat for each team

![Create Dept / Team](../../../img/screenshots/settings/create-dept-team.png)

:::tip Mirror Your Organisation
Structure your departments and teams to reflect real-world reporting lines. This ensures that team leads and agents have the correct data scope and that reports are organised meaningfully.
:::

---

## Step 3: Add Users

You can add users one at a time or import many at once using a CSV file.

### Option A: Bulk Import via CSV

For onboarding multiple users at once:

1. Navigate to **Settings → Users** (or **Agents → Bulk Upload**)
2. Download the CSV template from the upload page
3. Fill in the CSV with the following columns:

```csv
name,email,department,team
John Smith,john.smith@company.com,Customer Service,Support Team
Mary Johnson,mary.johnson@company.com,Sales,Sales Team
```

**Required columns:**

| Column | Description |
|--------|-------------|
| `name` | Full name of the user |
| `email` | Email address (must be unique across the platform) |
| `department` | Must match an existing department name exactly |
| `team` | Must match an existing team name exactly |

4. Upload the completed CSV
5. Choose how to handle unmatched departments or teams: create them automatically, or skip those rows
6. Review the import results and address any errors

![Bulk upload agents](../../../img/screenshots/settings/agent-bulk.png)

### Option B: Add Users Individually

1. Navigate to **Settings → Users**
2. Click **Add User**
3. Enter name, email, and assign their department, team, role, and view scope

### Setting Roles and Scopes

Each user needs:
- **Role**: Admin (full platform control) or User (operational access)
- **View scope**: What data they can see
  - **Organisational** — all departments and teams
  - **Departmental** — their department only
  - **Team** — their immediate team only

---

## Step 4: Set Up the Agent Scorecard

The Agent Scorecard defines the evaluation criteria used to score every interaction. **Without a scorecard, interactions cannot be scored.** This is the most important configuration step for platform functionality.

1. Navigate to **Smart Detector → Agent Scorecard**
2. Click **Create**

![Scorecard builder](../../../img/screenshots/smart_search/smart5.png)

3. Write your scorecard questions — each question is a yes/no evaluation point:

![Define criteria](../../../img/screenshots/smart_search/smart7.png)
![Define criteria](../../../img/screenshots/smart_search/smart8.png)

**For each question, configure:**

| Property | Description |
|----------|-------------|
| **Question** | A specific, observable behaviour (e.g. "Did the agent verify the customer's identity?") |
| **Category** | A grouping label (e.g. "Opening", "Compliance", "Closing") |
| **Weight** | Relative importance in the overall score |
| **Auto-Fail** | If enabled, failing this item fails the entire evaluation |
| **Direction** | Inbound, outbound, or both |

4. Set the **scope** (organisation, department, or team) for which teams this scorecard applies to
5. Save and activate the scorecard

:::tip Write Concrete Questions
Write each question so that the AI — and human reviewers — can give a clear yes or no answer. Avoid vague criteria like "Was the agent professional?" Prefer specific ones like "Did the agent use the customer's name at least once?"
:::

---

## Step 5: Create Organisation-Wide Smart Searches

Smart Searches automatically monitor all processed interactions for keywords, phrases, and patterns you define. Set these up before calls are uploaded so monitoring begins immediately.

1. Navigate to **Smart Detector → Smart Search**
2. Click **Create New Smart Search**
3. Configure a compliance monitor, for example:
   - **Title:** `Compliance — Mandatory Closing Statement`
   - **Description:** `Flags interactions where the agent did not use the required closing statement`
   - **Phrases:** Add the required phrases agents must say
   - **Scope:** Organisation (to apply across all teams)
   - **Notifications:** Enable if you want alerts when matches are detected

4. Save and activate

Repeat for each compliance or quality monitoring rule your organisation requires.

---

## Step 6: Build the Knowledge Base (Optional)

The Knowledge Base stores your organisation's procedures, product information, and policies. When linked to a Smart Search, it helps the AI evaluate agents against your specific standards rather than generic criteria.

1. Navigate to **Smart Detector → Knowledge Base**
2. Click **Upload**
3. Upload PDF documents or URLs containing your company policies, scripts, or procedures
4. Set the **scope** (organisation, department, or team) and add a description for each document

---

## You're Ready

Once steps 1–5 are complete, your platform is ready for use.

**Hand-off checklist:**
- ✅ Point team leads to the [Team Lead Quick Start](./team-lead-quick-start.md) guide
- ✅ Direct agents to the [Agent Quick Start](./agent-quick-start.md) guide
- ✅ Confirm at least one test call has been uploaded and processed successfully

---

## Troubleshooting for Administrators

**Users can't log in via SSO**  
Verify the SSO configuration in Settings. Ensure the correct OAuth credentials are entered and that the user's email domain matches the configured provider.

**Bulk user import errors**  
Check that department and team names in the CSV match exactly what was created in Step 2. Ensure the CSV uses UTF-8 encoding and that no required columns are missing or empty.

**Interactions are not being scored**  
Confirm that an active Agent Scorecard exists with a scope that covers the relevant team or department. Without a scorecard, the AI cannot generate scores.

**Smart Search not matching expected interactions**  
Check that the search status is set to **Active** and that the scope covers the correct teams. If you want historical calls matched, enable the **Historical Search** option when creating the search.

---

## Next Steps

- [Best Practices](../../advanced/best-practices.md) — Advanced configuration and optimisation guidance
- [Agent Scorecard Guide](../../agent-scorecard-guide.md) — Detailed scorecard building reference
- [Knowledge Base Guide](../../knowledge-base-guide.md) — Full guide to building and managing your knowledge base
- [Smart Search Guide](../../smart-search-guide.md) — Advanced search configuration
