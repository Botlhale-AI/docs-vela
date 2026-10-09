---
sidebar_position: 0
title: Frequently Asked Questions
description: "Short answers to the most common questions about Vela."
type: reference
---

# Frequently Asked Questions

Short answers to the most common questions about Vela. For step-by-step help with a problem, see [General Issues](./troubleshooting-guide.md).

## General

**Q: What is Vela?**  
A: Vela is a platform that helps call centres analyse conversations, track performance, and improve customer experience using automated quality assurance.

**Q: Who can use Vela?**  
A: Vela is designed for call centre teams, meaning agents, team leads, and administrators. Team leads and administrators work in the main platform, where what they see depends on their role and access level. Where your organisation uses the Coaching Portal, agents sign in to a separate Agent Portal. See [Roles and Access Levels](../settings-config/access-control.md).

**Q: A feature in the documentation is missing from my sidebar. Why?**  
A: Your organisation's version decides which features appear. On a [Lite](../reference/glossary.md#lite) version, Smart Search and Smart Questions are unavailable, so the **Alerts** tab and the Alerts column do not appear and some Dashboard and report metrics are hidden. Your Account Manager can confirm which version you have.

**Q: What languages does Vela support for transcription?**  
A: Vela supports the 11 spoken official South African languages. These are Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho (Southern Sotho), Sepedi (Northern Sotho), Setswana, siSwati, Tshivenda, and Xitsonga. The Vela interface is in English.

{/* Verified with the engineering lead on 27 October 2025: Vela supports the 11 spoken official South African languages, and this list was confirmed item by item. Swahili and Kinyarwanda appear in the botlhale-apis README because that API serves products beyond Vela; they are not Vela transcription languages. Bengali, Shona, Portuguese, and Mandarin were in beta at that date and are deliberately not listed here. */}

---

## Uploads & Data

**Q: What file formats are supported for call uploads?**  
A: Audio files must be in `.wav` or `.mp3` format. A metadata CSV file is required for bulk uploads but is not needed when uploading a single call.

**Q: What is the difference between a single upload and a bulk upload?**  
A: A single upload lets you upload one audio file at a time using a short form (agent, team, department, and the file, with optional direction and tags). A bulk upload lets you upload many files at once in a ZIP archive, along with a metadata CSV that assigns each file to an agent, team, department, and direction.

**Q: How do I know when my bulk upload has finished processing?**  
A: Watch **Interactions → Calls**, where calls appear as they finish. A single upload also emails the address you sign in with. A bulk upload sends a summary to users who have **New Alerts Detected** ticked under email notifications. On the [Lite](../reference/glossary.md#lite) version that setting is hidden, and the summary goes to every user.

**Q: How long does it take for calls to process?**  
A: Processing is queued, so the wait depends on what is ahead of your call, and on its length and audio quality. Keep the page open during a large bulk upload, because your browser is still sending the file and leaving the page stops the upload.

**Q: My upload failed. What should I check?**  
A: For single uploads, verify the file is a valid WAV or MP3 that plays on your device, and is under 1 GB. For bulk uploads, check that your CSV column names match the template exactly, all files listed in the CSV are present in the ZIP, and the ZIP is under the 3 GB limit. Files above the limit are rejected before the upload starts. See [General Issues](./troubleshooting-guide.md#upload-issues).

---

## Integrations & API

**Q: Which organisation ID do I use?**  
A: The Vela one. Where more than one has been issued to you, only the Vela organisation ID connects an upload to your Vela account. Sending another can return a success response while nothing appears under **Interactions**.

**Q: My integration worked for months and now returns 401. What changed?**  
A: The access token expired. Access tokens are short-lived, and refresh tokens last far longer, so exchange the refresh token for a new access token at `POST /auth/generate`. Build that refresh into the integration. If the refresh token itself stops working, sign in again at `POST /auth/login`. See [API Reference](../advanced/api-documentation.md#authentication).

**Q: Uploads return `Allocation exceeded`. Why?**  
A: The organisation has used its monthly duration, or has none set. A new organisation that has not been activated returns the same error. Check `currentDurationUse` against `monthlyAllocatedDuration`, or ask your Account Manager to activate it. See [Integration Problems](./integration-troubleshooting.md).

**Q: Can I create departments, teams, or agents through the API?**  
A: Agents, yes. Sending `agent_name` with a `team` that already exists creates the agent. Teams and departments have to exist in Vela first, because an API upload never creates one.

**Q: My calls arrive but the date is wrong. What do I send?**  
A: `date_of_call` day first, in the format `DD/MM/YYYY, HH:mm:ss`. Times are read as **Africa/Johannesburg**. A value Vela cannot read falls back to the upload time, which is why every call can end up dated the day you sent it. A year-first date, or a month-first date with a day of 12 or less, is read as the wrong date with no error. See [API Reference](../advanced/api-documentation.md).

**Q: Why does the same call appear twice?**  
A: Vela files every upload as a new interaction, so a recording sent twice appears twice. Make sure your integration sends each recording once. See [Integration Problems](./integration-troubleshooting.md).

**Q: Some chats I sent never appear. Why?**  
A: Check the message times. Vela lists a chat once it has a length, measured from its first message to its last, so give each message the time it was actually sent. See [Integration Problems](./integration-troubleshooting.md).

**Q: Is there a starter scorecard I can load?**  
A: Vela has no import or template feature, so there is nothing to load yourself. Ask your Account Manager, who can set up a first scorecard for you to work from. {/* UNVERIFIED: no source or other page confirms that Account Managers set up a first scorecard. Needs the account team to confirm. */} Replace its questions with your own procedures before you rely on the scores. See [Build an Agent Scorecard](../agent-scorecard-guide.md).

---

## Dashboard & Performance

**Q: Why is my Dashboard empty?**  
A: If no calls or chats have been uploaded yet, performance data does not appear. Upload interactions to start seeing metrics. If you have uploaded, check that the date range and the **Filter** settings on the Dashboard include them. See [General Issues](./troubleshooting-guide.md).

**Q: Can I customise my Dashboard?**  
A: Yes. Select the **Customise** button on the Dashboard to add or remove the metrics displayed, and to choose how each is charted.

**Q: Why is an agent's score lower or higher than I expected?**  
A: Vela's AI produces the first score, based on your organisation's scorecard criteria. If the AI missed important context, you can override individual scorecard questions. Your manual score takes precedence over the AI's assessment. See [Review and Score Interactions](../features/quality-assurance-tools.md).

**Q: What does a negative sentiment score mean?**  
A: It means the AI detected that the customer's tone was mostly negative, showing frustration, dissatisfaction, or distress. It does not necessarily mean the agent performed poorly. Some calls start and end negatively whatever the agent does.

**Q: How do I get fewer alert emails?**  
A: Three settings decide it. Each Smart Search has its own **Notifications** setting, so turn it off on searches you only check on their results page. In **Settings → Notifications**, untick **New Alerts Detected** under email notifications to stop alert emails entirely, or set the email frequency to **Daily** to get one summary a day. See [Manage Notifications](../features/notifications.md).

---

## Agents & Coaching

**Q: Can agents see their own call transcripts and scores?**  
A: Where your organisation uses the Coaching Portal, yes. Agents log in to their own Agent Portal, where they can view their interactions, read transcripts, see their scores, and review coaching comments left by their team lead. **Agent View Permissions**, under **Coaching → Preferences**, decides whether they see all of their interactions or only the reviewed ones.

**Q: How do agents receive coaching feedback?**  
A: Where your organisation uses the Coaching Portal, a team lead types **@** in a new comment and selects **@agent**, and the comment is shared with the agent. They read and respond to it on that interaction in their Agent Portal. They are not notified, so they find it by opening the interaction.

{/* UNVERIFIED: the per-Category measurement. No implementation exists on vela origin/main. The only one, lib/coachingCycle.js on origin/dev (#842), scores each agent on their overall score and never reads the award's or course's Category. Full note under Category in docs-coaching-portal's glossary.md. Needs the product owner to decide which is intended. */}

**Q: How does training work for agents?**  
A: Courses are assigned by score, not by name. You build a course around one scorecard category, set the **Training Initiation Score Range** that qualifies an agent for the course, and Vela assigns the course on the next evaluation cycle. Agents work through what they receive in the Agent Portal. Coaching is an add-on, so it appears in the navigation only where it is enabled. See [Create and Assign Courses](https://docs-coaching.botlhale.xyz/docs/team-leads/create-and-assign-courses).

---

## Account & Security

**Q: How do I sign in?**  
A: You can sign in using your email and password, or with **Sign in with Google** or **Sign in with Microsoft** if your Vela account uses the same email address as your Google or Microsoft account.

**Q: I forgot my password. How do I reset it?**  
A: On the login page, select **Forgot your password?** and enter your email address. Vela emails you a link to reset it.

**Q: Does Vela support multi-factor authentication (MFA)?**  
A: Vela does not have native MFA. If your organisation uses Single Sign-On (Google or Microsoft), MFA can be enforced through your identity provider. Contact your IT administrator for setup.

**Q: What are the password requirements?**  
A: At least 8 characters, with at least one letter, one number, and one special character such as `@`, `#`, or `!`. See [Account and Security](../settings-config/account-security.md#password-requirements) for how to change it.

---

## Support

**Q: Where can I get help if I run into issues?**  
A: Contact **support@botlhale.ai**. Include your browser type and version, operating system, a description of the issue, and any screenshots or error messages.

---

## Related

- [System Requirements](../getting-started/system-requirements.md): supported browsers, file formats, and network requirements
- [Team Lead Quick Start](../getting-started/quick-start/team-lead-quick-start.md): get up and running
- [Coaching Portal Documentation](https://docs-coaching.botlhale.xyz): courses, awards, and progress for team leads, and the agent's own portal
- [General Issues](./troubleshooting-guide.md): step-by-step fixes for sign-in, upload, dashboard, redaction, audio, and browser problems
- [Smart Detector Issues](./smart-detector-issues.md): a missing or incorrect score, and Smart Search problems
- [Integration Problems](./integration-troubleshooting.md): problems with interactions sent through the API
- [Video Tutorials](./video-tutorials.md): the main workflows shown rather than written

---

## Need Help?

**Contact Support:** support@botlhale.ai
