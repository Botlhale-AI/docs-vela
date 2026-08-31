---
sidebar_position: 0
title: Frequently Asked Questions
description: "Short answers to the most common questions about Vela."
type: reference
---

# Frequently Asked Questions

Short answers to the most common questions about Vela. For step-by-step help with a problem, see the [Troubleshooting Guide](./troubleshooting-guide.md).

## General

**Q: What is Vela?**  
A: Vela is a platform that helps call centres analyse conversations, track performance, and improve customer experience using automated quality assurance.

**Q: Who can use Vela?**  
A: Vela is designed for call centre teams, meaning agents, team leads, and administrators. Team leads and administrators work in the main platform, where what they see depends on their role and access level. Agents sign in to a separate Agent Portal. See [Roles and Access Levels](../settings-config/access-control.md).

**Q: A feature in the documentation is missing from my sidebar. Why?**  
A: Your organisation's edition decides which features appear. On a [Lite](../reference/glossary.md#lite) edition, Smart Search and Smart Questions are unavailable, so the **Alerts** tab and the Alerts column do not appear and some Dashboard and report metrics are hidden. Your Account Manager can confirm which edition you have.

**Q: What languages does Vela support for transcription?**  
A: Vela supports the 11 spoken official South African languages. These are Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho (Southern Sotho), Sepedi (Northern Sotho), Setswana, siSwati, Tshivenda, and Xitsonga. The Vela interface is in English.

{/* Verified with the engineering lead on 27 October 2025: Vela supports the 11 spoken official South African languages, and this list was confirmed item by item. Swahili and Kinyarwanda appear in the botlhale-apis README because that API serves products beyond Vela; they are not Vela transcription languages. Bengali, Shona, Portuguese, and Mandarin were in beta at that date and are deliberately not listed here. */}

---

## Uploads & Data

**Q: What file formats are supported for call uploads?**  
A: Audio files must be in `.wav` or `.mp3` format. A metadata CSV file is required for bulk uploads but is not needed when uploading a single call.

**Q: What is the difference between a single upload and a bulk upload?**  
A: A single upload lets you upload one audio file at a time using a short form (agent, direction, tags, and the file). A bulk upload lets you upload many files at once in a ZIP archive, along with a metadata CSV that assigns each file to an agent, team, department, and direction.

**Q: How do I know when my bulk upload has finished processing?**  
A: Vela emails you when processing is complete. You can also monitor progress from the Interactions page. Processed calls appear in the list as they complete.

**Q: How long does it take for calls to process?**  
A: Processing is queued, so the wait depends on what is ahead of your call rather than on who uploaded it. Two people uploading the same recording minutes apart can finish an hour apart. Call length and audio quality also matter. Avoid navigating away from the page during a large bulk upload.

**Q: My upload failed. What should I check?**  
A: For single uploads, verify the file is a valid WAV or MP3 that plays on your device, and is under 1 GB. For bulk uploads, check that your CSV column names match the template exactly, all files listed in the CSV are present in the ZIP, and the ZIP is under the 3 GB limit. Files above the limit are rejected before the upload starts.

---

## Integrations & API

**Q: Which organisation ID do I use?**  
A: The Vela one. Where more than one has been issued to you, only the Vela organisation ID connects an upload to your Vela account. Sending another can return a success response while nothing appears under **Interactions**.

**Q: My integration worked for months and now returns 401. What changed?**  
A: The access token expired. Access tokens are short-lived and refresh tokens are not, so exchange the refresh token for a new access token at `POST /auth/generate` rather than signing in again. Build that refresh into the integration. See [API Reference](../advanced/api-documentation.md#authentication).

**Q: Uploads return `Allocation exceeded`. Why?**  
A: The organisation has used its monthly duration, or has none set. A new organisation that has not been activated returns the same error. Check `currentDurationUse` against `monthlyAllocatedDuration`, or ask your Account Manager to activate it.

**Q: Can I create departments, teams, or agents through the API?**  
A: Agents, yes. Sending `agent_name` with a `team` that already exists creates the agent. Teams and departments have to exist in Vela first, because an upload never creates one.

**Q: My calls arrive but the date is wrong. What do I send?**  
A: `date_of_call` in the format `DD/MM/YYYY, HH:mm:ss`, with the comma and the seconds. Times are read as **Africa/Johannesburg**. A value Vela cannot read falls back to the upload time, which is why every call ends up dated the day you sent it.

**Q: Is there a starter scorecard I can load?**  
A: Vela has no import or template feature, so there is nothing to load yourself. Ask your Account Manager, who can set up a first scorecard for you to work from. Replace its questions with your own procedures before you rely on the scores. See [Build an Agent Scorecard](../agent-scorecard-guide.md).

---

## Dashboard & Performance

**Q: Why don't I see any data on my Dashboard?**  
A: If no calls or chats have been uploaded yet, performance data does not appear. Upload interactions to start seeing metrics.

**Q: Can I customise my Dashboard?**  
A: Yes. Select the **Customise** button on the Dashboard to add, remove, or rearrange the metrics displayed.

**Q: Why is an agent's score lower or higher than I expected?**  
A: Vela's AI produces the first score, based on your organisation's scorecard criteria. If the AI missed important context, you can override individual scorecard items. Your manual score takes precedence over the AI's assessment. See [Review and Score Interactions](../features/quality-assurance-tools.md).

**Q: What does a negative sentiment score mean?**  
A: It means the AI detected that the customer's tone was mostly negative, showing frustration, dissatisfaction, or distress. It does not necessarily mean the agent performed poorly. Some calls start and end negatively whatever the agent does.

---

## Agents & Coaching

**Q: Can agents see their own call transcripts and scores?**  
A: Yes. Agents log in to their own Agent Portal, where they can view their interactions, read transcripts, see their scores, and review coaching comments left by their team lead.

**Q: How do agents receive coaching feedback?**  
A: When a team lead adds a comment and tags the agent using the @ mention, the agent receives an in-app notification and can read and respond to the comment in their Agent Portal.

**Q: How does training work for agents?**  
A: Courses are assigned by score, not by name. You build a course, set the **Training Initiation Score Range** that qualifies an agent for it, and Vela assigns it on the next evaluation cycle. Agents work through what they receive in the Agent Portal. Coaching is an add-on, so it appears in the navigation only where it is enabled. See the [Coaching Portal documentation](https://docs-coaching.botlhale.xyz).

---

## Account & Security

**Q: How do I sign in?**  
A: You can sign in using your email and password, or with **Sign in with Google** or **Sign in with Microsoft** if your organisation uses Single Sign-On.

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
- [Troubleshooting Guide](./troubleshooting-guide.md): step-by-step solutions to common issues
- [Video Tutorials](./video-tutorials.md): the main workflows shown rather than written

---

## Need Help?

**Contact Support:** support@botlhale.ai
