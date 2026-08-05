---
id: administrator-setup
title: Administrator Setup
sidebar_position: 0
type: tutorial
---

# Administrator Setup
Before anyone else can use Vela, an administrator configures authentication, departments and teams, users and agents, the Agent Scorecard, organisation-wide Smart Searches, the Knowledge Base, and data privacy.

**To score your interactions, you need the Agent Scorecard in place (Step 4)**, so work through these in order.

---

## What You'll Complete

- ✅ Configure authentication
- ✅ Create your organisational structure (departments and teams)
- ✅ Add users individually or in bulk
- ✅ Set up the Agent Scorecard so interactions can be scored
- ✅ Create organisation-wide Smart Searches for compliance monitoring
- ✅ Build the Knowledge Base
- ✅ Configure data privacy (redaction)
- ✅ Confirm the pipeline works end to end


---

## Before You Begin

You need:

- **An administrator account.** Your Vela organisation is provisioned by the Botlhale team, and your account must have the Admin role.
- **The email addresses of the people who will use Vela.** For SSO, these must match their Google or Microsoft accounts.

---

## Plan Before You Configure

The steps below set the platform up. A few decisions shape how you configure each one, so they are worth making before you start:

- **Your structure**: the departments and teams that mirror your real reporting lines.
- **Your scorecard standards**: the specific, observable behaviours you score agents against.
- **Your compliance searches**: the language you need to monitor for, so Smart Searches are ready before calls arrive.
- **Your redaction policy**: which sensitive details to mask.

For how to make these decisions well, see [Best Practices: Setting Up for Success](../../advanced/best-practices.md#setting-up-for-success).

---

## Step 1: Configure Authentication

Choose how users log in to Vela.

### Option A: Single Sign-On (SSO)

Users can sign in with their existing Google or Microsoft account. The **Sign in with Google** and **Sign in with Microsoft** buttons are on the login page for everyone, so there is nothing to switch on and no configuration in Settings.

The only requirement is that the person already exists in Vela. Add them first (Step 3), using the same email address as their Google or Microsoft account. If someone signs in with an email that has not been added to Vela, sign-in is refused.

Users who sign in through SSO manage their password with Google or Microsoft, so the **Security** tab is hidden for them in Vela.

### Option B: Email and Password

If SSO is not available, users log in with an email and password. Passwords must meet these requirements:
- At least 8 characters
- At least one letter
- At least one number
- At least one special character (for example `@`, `#`, or `!`)

Vela emails each new user a password and a verification link. They must click the link before they can sign in. Vela does not force a password change afterwards, so tell users to set their own under **Settings → Security**.

![Login options](../../../img/screenshots/settings/login-options.png)

---

## Step 2: Create Departments and Teams

Create departments and teams before you add users. Users are assigned to teams, and teams belong to departments.

### Create Departments First

1. Navigate to **Settings → Users → Org Table**
2. Click **Create**
3. Select **Department**
4. Enter the department name (for example, "Customer Service" or "Sales")
5. Save and repeat for each department

### Then Create Teams

1. From the same **Org Table** view, click **Create**
2. Select **Team**
3. Enter the team name and assign it to a department
4. Save and repeat for each team

![Create Dept / Team](../../../img/screenshots/settings/create-dept-team.png)

:::tip Mirror Your Organisation
Set your departments and teams up to match your real reporting lines. Each team lead then sees the right data, and reports line up with how the organisation actually works.
:::

---

## Step 3: Add Users and Agents

You add two kinds of record in this step.

- **Agents**, whose interactions are analysed. Add them individually, or import many at once from a CSV.
- **Users**, who log in to Vela. Add these one at a time in **Settings → Users**.

:::warning Bulk import creates agents, not users
If you are onboarding team leads or administrators, add them individually in Step 3B. A CSV import does not give them a login. See [Glossary](../../reference/glossary.md) for the full distinction.
:::

### Step 3A: Bulk Import Agents via CSV

:::note Adding one agent
To add a single agent, go to **Agents → Agent Details** and click **Add Agent**, then fill in their name, email, department, and team.
:::

For onboarding many agents at once:

1. Navigate to **Agents → Agent Details**
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
| `name` | Full name of the agent |
| `email` | Email address (must be unique across the platform) |
| `department` | Must match an existing department name. Matching ignores case |
| `team` | Must match an existing team name. Matching ignores case |

4. Upload the completed CSV
5. Choose how to handle unmatched departments or teams: **create them automatically**, or **skip** the rows that reference them
6. Review the import results and address any errors

![The Add an Agent modal on the Batch Upload tab, with the create and skip options](../../../img/screenshots/settings/agent-bulk.png)

:::note What each agent receives
Adding an agent, singly or in bulk, emails them an invitation to the Agent Portal. Vela also asks them for a voice sample. That sample builds a Voice ID, which helps Vela attribute calls to the right agent. Agents who have not submitted one are sent a reminder.
:::

### Step 3B: Add Users Individually

1. Navigate to **Settings → Users**
2. Click **Add User**
3. Enter name, email, and assign their department, team, role, and access level

![Add users](../../../img/screenshots/settings/users_add.png)

### Setting Roles and Access

Each user needs:
- **Role**: Admin (full platform control) or User (operational access)
- **Access level**: what data they can see
  - **Organisational**: all departments and teams
  - **Departmental**: their department only
  - **Team**: their immediate team only

---

## Step 4: Set Up the Agent Scorecard

The Agent Scorecard defines the evaluation criteria used to score every interaction. **A scorecard is what lets Vela score your interactions**, which makes this the most important configuration step.

1. Navigate to **Smart Detector → Agent Scorecard**
2. Open the **Create** tab
3. Set the **scope** (organisation, department, or team) that the scorecard applies to
4. Write your scorecard questions. Each one is a yes/no evaluation point, configured as below.
5. Click **Create** to save the scorecard. Its questions are active as soon as it is created.

**For each question, configure:**

| Property | Description |
|----------|-------------|
| **Question** | A specific, observable behaviour (for example, "Did the agent verify the customer's identity?") |
| **Category** | A grouping label (for example, "Opening", "Compliance", or "Closing") |
| **Expected Outcome** | Which answer, Yes or No, counts as a pass |
| **Weight** | Relative importance in the overall score |
| **Auto-Fail** | If enabled, failing this item flags the interaction as auto-failed |
| **Apply To** | Inbound calls, outbound calls, or all calls |

![The Agents Scorecard list, showing existing questions and their status](../../../img/screenshots/smart_search/smart5.png)
![The top of the question form: scorecard scope and historical search](../../../img/screenshots/smart_search/smart7.png)
![The rest of the question form, ending in Add Question and Create](../../../img/screenshots/smart_search/smart8.png)

{/* RESHOOT: smart8.png predates Always Applicable, Compliance Question, and Interactions, verified against smart_detector/agents_checklist/createForm.jsx. Low priority: this page deliberately covers a subset of the fields and scorecard-fields.md holds the full list, so the form simply offers more than the shot shows. */}

:::tip Write Concrete Questions
Write each question so that the AI, and human reviewers, can give a clear yes or no answer. Prefer specific criteria like "Did the agent use the customer's name at least once?" over vague ones like "Was the agent professional?"
:::

---

## Step 5: Create Smart Searches

Smart Searches automatically monitor all processed interactions for keywords, phrases, and patterns you define. Set these up before calls are uploaded so monitoring begins immediately.

A Smart Search flags an interaction when the phrases or conditions you define are detected in it.

1. Navigate to **Smart Detector → Smart Search**
2. Click **New Smart Search**
3. Configure a compliance monitor, for example:
   - **Smart Search Title:** `Compliance: Guarantee Language`
   - **Description:** `Flags interactions where guarantee language is used`
   - **Example Phrases:** `I guarantee`, `guaranteed approval`, `you will definitely`
   - **Search Scope:** Organisation (to apply across all teams)
   - **Search Status:** Active
   - **Notifications:** Enable if you want alerts when matches are detected
4. Click **Create Smart Search**

![The New Smart Search form: title, status, description, and scope](../../../img/screenshots/smart_search/11.png)
![The rest of the form: Example Phrases, Search Filter, Historical Search, and Notifications](../../../img/screenshots/smart_search/12.png)

Repeat for each compliance or quality monitoring rule your organisation requires.

---

## Step 6: Build the Knowledge Base

The Knowledge Base stores your organisation's procedures, product information, and policies. Link a document to a scorecard question, a Smart Search, or a Smart Question, and the AI uses it as reference rather than generic criteria. See [Knowledge Base](../../knowledge-base-guide.md).

1. Navigate to **Smart Detector → Knowledge Base**
2. On the **PDF Upload** tab, drag and drop your PDF files, or click to select them
3. Set the **scope** (organisation, department, or team), and optionally add a description
4. Click **Upload Files**

![knowledge base](../../../img/screenshots/settings/knowledge_base.png)

---

## Step 7: Configure Redaction

Vela can automatically mask sensitive information in transcripts, such as ID numbers and payment details. Configure this before real interactions are uploaded.

In **Settings → Organisations**, choose which entity types Vela should redact.

![Redaction](../../../img/screenshots/settings/redaction.png) 

Once redaction is configured, masked details are hidden from everyone by default, administrators included. Administrators, and any user you grant **View Redactions**, can reveal the unmasked version on a transcript with **Review Redacted Info**. Everyone else sees only the masked version. They can request access to a specific interaction, which you approve in **Settings → Requests**, or you can grant **View Redactions** on the account in **Settings → Users**. See [Access Requests](../../settings-config/access-requests-audits.md) for the full workflow.

---

## Step 8: Confirm the Pipeline Works

Before you hand Vela over, upload one test interaction and confirm it processes from start to finish. This proves authentication, the scorecard, and redaction are working together.

1. Upload a single test call in **Interactions → Calls** (see [Upload Your Data](../../data-upload.md))
2. Wait for processing to finish. Vela emails you when the analysis is ready, depending on your notification settings
3. Open the processed interaction and confirm it has a transcript, a scorecard outcome, and, if you configured redaction, masked details
4. If an organisation-wide Smart Search should have matched, check that it appears in that search's results

A scorecard outcome on that interaction confirms your scorecard reaches the test agent's team. If the outcome is missing, check that an active Agent Scorecard covers that team, and see the troubleshooting below.

---

## You're Ready

Once all eight steps are complete, your platform is ready for use.

**Hand-off checklist:**
- ✅ Point team leads to the [Team Lead Quick Start](./team-lead-quick-start.md) guide
- ✅ If your organisation uses the Coaching Portal, direct agents to the [Vela Coaching Portal documentation](https://docs-coaching.botlhale.xyz)

---

## Troubleshooting for Administrators

For general platform issues, such as uploads, playback, or the app not loading, see the [Troubleshooting Guide](../../support/troubleshooting-guide.md). The items below are specific to setup.

**Users can't log in via SSO**  
The email must already exist in Vela and match the Google or Microsoft account the user signs in with. Confirm you have added the person (Step 3) using that exact email address. Sign-in is refused for any email that has not been added.

**Bulk agent import errors**  
Check that the CSV has all required columns (name, email, department, team) and that none are empty. Team and department names must match those created in Step 2, unless you use the create option during import.

**Interactions are not being scored**  
Confirm that an active Agent Scorecard exists with a scope that covers the relevant team or department. The AI scores each interaction against that scorecard, so its scope determines which interactions get scored.

**Smart Search not matching expected interactions**  
Check that the search status is set to **Active** and that the scope covers the relevant team or department. If you want historical calls matched, enable the **Historical Search** option when creating the search.

---

## Next Steps

- [Best Practices](../../advanced/best-practices.md): advanced configuration guidance
- [Build Your Knowledge Base](../../knowledge-base-guide.md): uploading, scoping, and linking documents
- [Set Up Smart Search](../../smart-search-guide.md): advanced search configuration
