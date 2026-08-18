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
A: Vela is designed for call centre teams: agents, team leads, and administrators. Team leads and administrators work in the main platform, where what they see depends on their role and access level. Agents sign in to a separate Agent Portal. See [Settings Access by Role](../settings-config/access-control.md).

**Q: A feature in the documentation is missing from my sidebar. Why?**  
A: Your organisation's edition decides which features appear. On a [Lite](../reference/glossary.md#lite) edition, Smart Search and Smart Questions are unavailable, so the **Alerts** tab and the Alerts column do not appear and some Dashboard and report metrics are hidden. Your Account Manager can confirm which edition you have.

**Q: What languages does Vela support for transcription?**  
A: Vela supports 11 South African languages: Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho (Southern Sotho), Sepedi (Northern Sotho), Setswana, siSwati, Tshivenda, and Xitsonga. The Vela interface is in English.

{/* UNVERIFIED: the 11-name list matches the `languages` array in settings/preferences.jsx, but that array is the per-user language preference, not a declared transcription list. Backend transcription takes language codes (en-ZA, zu-ZA) and routes through a translation service rather than a fixed list. Confirm the transcription-supported set with the product team before restating it. */}

---

## Uploads & Data

**Q: What file formats are supported for call uploads?**  
A: Audio files must be in `.wav` or `.mp3` format. A metadata CSV file is required for bulk uploads but is not needed when uploading a single call.

**Q: What is the difference between a single upload and a bulk upload?**  
A: A single upload lets you upload one audio file at a time using a short form (agent, direction, tags, and the file). A bulk upload lets you upload many files at once in a ZIP archive, along with a metadata CSV that assigns each file to an agent, team, department, and direction.

**Q: How do I know when my bulk upload has finished processing?**  
A: Vela emails you when processing is complete. You can also monitor progress from the Interactions page. Processed calls appear in the list as they complete.

**Q: How long does it take for calls to process?**  
A: Processing time depends on call length, audio quality, and current server load. Shorter calls complete faster than longer ones. Avoid navigating away from the page during a large bulk upload.

**Q: My upload failed. What should I check?**  
A: For single uploads, verify the file is a valid WAV or MP3 that plays on your device, and is under 1 GB. For bulk uploads, check that your CSV column names match the template exactly, all files listed in the CSV are present in the ZIP, and the ZIP is under the 3 GB limit. Files above the limit are rejected before the upload starts.

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
A: Where Coaching is enabled, administrators and team leads create courses in the **Coaching** section and give each one a trigger score range. Vela then assigns courses on an evaluation cycle, so agents receive the courses their scores qualify them for rather than being picked individually. Agents see what they have been given in their portal, with completion status. Coaching is an add-on, so it appears in the navigation only when it is enabled for your organisation.

---

## Account & Security

**Q: How do I sign in?**  
A: You can sign in using your email and password, or with **Sign in with Google** or **Sign in with Microsoft** if your organisation uses Single Sign-On.

**Q: I forgot my password. How do I reset it?**  
A: On the login page, select **Forgot your password?** and enter your email address. Vela emails you a link to reset it.

**Q: Does Vela support multi-factor authentication (MFA)?**  
A: Vela does not have native MFA. If your organisation uses Single Sign-On (Google or Microsoft), MFA can be enforced through your identity provider. Contact your IT administrator for setup.

**Q: What are the password requirements?**  
A: A minimum length and a mix of character types. See [Password Requirements](../settings-config/account-security.md#password-requirements) for the full list and how to change your password.

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
