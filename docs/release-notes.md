---
sidebar_position: 1
title: Release Notes
description: "What has changed in each release of Vela, newest first."
type: reference
---

# Release Notes

What has changed in each release of Vela, newest first.

<!-- DRAFT: the next release. Everything below is on the dev branch and not yet on main,
     so it is commented out until it ships. Uncomment the section when the release lands,
     and open a documentation task for each item marked "needs a page".

## Version 2.2

### New Features

#### Cautions
A formal record when performance falls below standard, under **Coaching → Cautions**. Vela detects candidates from category scores, a manager sends one using a template, and the agent acknowledges it with a signature. Escalations email HR with the caution attached as a PDF, and a **Cautions** tab appears under Notifications.

The route is `warnings` and the label is **Cautions**, so both names appear depending on where you look. Needs a page in the Coaching Portal documentation.

#### Terms and Conditions on first sign-in
Users now accept **Terms and Conditions for Service Access and Usage** before they can use Vela. The terms open on their own after signing in, and the rest of the platform stays out of reach until the user ticks **I have read and agree to the Terms and Conditions for Service Access and Usage** and selects **Accept & Continue**.

Acceptance is recorded against the user and carries a version number, so publishing a new version asks everyone to accept again on their next sign-in. Agents are not asked, as the Coaching Portal is outside the check, and API integrations are unaffected. Needs a short section in [Administrator Setup](./getting-started/quick-start/administrator-setup.md) and [Team Lead Quick Start](./getting-started/quick-start/team-lead-quick-start.md).

#### Conditional scorecard questions
A scorecard question can now depend on another question's answer. Set **Conditional** on the question, choose a **Parent Question** and the **Triggering Answer**, and the question only applies when the parent was answered that way. This is a more precise alternative to relying on the AI to mark a question N/A. Needs adding to [Scorecard Fields](./reference/scorecard-fields.md) and [Build an Agent Scorecard](./agent-scorecard-guide.md).

#### Access to more than one team or department
A user can be given access to several teams or departments rather than one. Affects [Roles and Access Levels](./settings-config/access-control.md), [Access Level](./reference/glossary.md#access-level), and the access tables on [User and Team Management](./settings-config/user-management.md).

#### New ways to narrow a list
Filter interactions by pain point and by dominant language, filter on the Agent Performance pages, and set a date range on the Smart Search list. Predefined Smart Searches by industry are offered when you create a search.

#### Smaller changes
- Dashboard charts are clickable, opening the interactions behind a figure.
- Scorecard questions are grouped by category in accordions on the Create tab.
- Interactions show a comment count, and comments and replies are counted separately.
- Knowledge Base documents added by URL can be refreshed, rebuilding their embeddings.
- Users can leave an organisation themselves.
- Unread notification indicators appear in the navigation bar and the drawer.
- Course reminders are sent, and packages carry a coaching courses limit.

-->

## Version 2.1

Version 2.1 brings new features and improvements.

### New Features

#### Agent Coaching Portal
The Coaching Portal for agents brings:
- **Courses Management**: Assign and track training courses with progress monitoring
- **Awards System**: Recognise and reward high performers with digital awards
{/* Cautions is on the dev branch and absent from origin/main, so the line that
    announced "Warnings Management" here was removed. Restore it when Cautions
    ships, and link the Coaching Portal page for it. */}
- **Agent Dashboard**: Personalised dashboard showing performance, courses, and achievements
- **Interactive Learning**: Course completion with quizzes and assessments
- **Notifications**: Instant notifications for courses, awards, and warnings. See [Manage Notifications](./features/notifications.md).

The Coaching Portal is an add-on with its own documentation. Creating courses, tracking completion, and managing awards are covered in the [Vela Coaching Portal documentation](https://docs-coaching.botlhale.xyz). On this side, [Turn What You Find into Coaching](./features/monitor-agent-performance.md#4-turn-what-you-find-into-coaching) covers the step before that: finding the gap a course should target.


<!-- ### Knowledge Base
We've added the ability to upload your knowledge base and a well-defined description for your documents into Vela. This feature is available as an add-on and allows Vela to analyse calls more effectively and assess agent performance based on your specific business context.

### Scorecard Results
View the results of the agent scorecard at a question level. Find this on the new Results tab on the Agent Scorecard page in the Smart Detector.

### Smart Search Insights
Vela now provides explanations for smart search results, giving you deeper context and understanding behind the data.

### Filtered Historical Smart Searches & Scorecards
Apply newly created smart searches and scorecard questions to a selected subset of historical interactions, giving you greater flexibility and precision when reviewing past performance.

### Interactions Section
Chats are now available in Vela! The Calls page has been moved into the new Interactions section, which now includes both Calls and Chats for improved data segmentation.

### Data Upload APIs
The chats API allows clients to send their chat text data to Botlhale for processing on Vela. The call API allows clients to send their call voice data to Botlhale for processing on Vela.

### Interactions Metadata
Include rich interaction metadata when sending and loading your interactions to Vela (manually via the platform's Upload functionality, or automatically via APIs). -->

### Improvements

<!-- ### Redaction
We've improved the quality of the redaction model.

### User Segmentation
We've created three classes of admin and user views: Organisational, Departmental and Team. Teams belong to departments, and departments belong to an organisation which houses everything.

### Smart Detector Filtering
We've expanded the filtering capabilities of the smart search and agent checklist tables. Filter by a wider range of table metrics, making it that much quicker to find the search or checklist you're looking for.

### Created vs Detected Smart Search Terms
This improvement allows users to distinguish between smart search terms (topics, intents, and pain points) detected by Vela and those that have been manually created in Vela. This shows you where each search term came from, so you can manage them with that in mind.

### Model Accuracy
We've enhanced the accuracy of our multilingual ASR (transcription) models, resulting in greater precision and more dependable insights.

### Checklists Are Scorecards
We've renamed Agent Checklists to Agent Scorecards to better reflect their purpose. This new name more accurately represents their role in evaluating agent performance, making it clearer and more intuitive for users. -->

#### UI/UX Improvements
- **Redesigned Modals**: Updated modal components for better user experience
- **Better Visual Design**: Updated styling and layout for improved usability

<!-- ## Bug Fixes -->

<!-- ### Dashboard Configuration
We have resolved an issue that caused dashboard configurations to reset on reload.

### Users Table
We've updated the users page for a better user experience! Now, only the table scrolls horizontally, keeping the rest of the page static for improved navigation and readability. -->

### What's Next?

#### Enhanced Coaching Features
Work on the Coaching Portal continues.

#### Improving Smart Detector
Work on [Smart Detector](./smart-detector-overview.md) continues.

#### Voice ID Notifications
- We'll automatically send emails to agents who have not submitted a sample for Voice ID. Voice profiles are set up today in [Manage Agents and Teams](./features/manage-agents-and-teams.md#4-set-up-voice-profiles).

#### Vela Redesign
We're continuing to redesign Vela's UI for an even better user experience with:
- Modern design system
- Improved accessibility

#### Advanced Analytics
We're adding more analytics and reporting features to help you better understand your team's performance and customer interactions.

We're constantly working to make Vela better. Stay tuned for more updates, and as always, we'd love to hear your feedback at product@botlhale.ai.

Thank you for being a valued part of our community!

Warm regards,  
The Vela Team

---

## Related

The pages that cover what shipped in this release:

* [Monitor Agent Performance](./features/monitor-agent-performance.md): the Dashboard and Agents views behind the coaching loop, including how courses are assigned by score.
* [Manage Notifications](./features/notifications.md): what triggers a notification, and how to control which ones reach you.
* [Manage Agents and Teams](./features/manage-agents-and-teams.md): adding agents, voice profiles, and moving people between teams.
* [Review and Score Interactions](./features/quality-assurance-tools.md): the Interactions lists for calls and chats, and how to comment to coach.
* [Smart Detector](./smart-detector-overview.md): the section Smart Search, Smart Questions, and the Agent Scorecard sit under.
* [Upload Your Data](./data-upload.md): loading calls and chats, manually or through the API.
* [Vela Coaching Portal documentation](https://docs-coaching.botlhale.xyz): courses, awards, warnings, and the agent's own view of them. A separate site, because Coaching is an add-on.

---

## Need Help?

**Contact Support:** support@botlhale.ai
