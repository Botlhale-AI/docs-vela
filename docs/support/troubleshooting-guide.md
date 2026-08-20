---
id: troubleshooting-guide
title: Troubleshooting Guide
description: "Step-by-step fixes for the issues administrators, team leads, and agents report most."
sidebar_position: 1
type: troubleshooting
---

# Troubleshooting Guide

This guide consolidates common issues reported by administrators, team leads, and agents, and provides step-by-step resolutions. Where an issue appears in more than one area of Vela, this guide cross-references it.

If this guide does not resolve your issue, see [Need Help?](#need-help) at the end of this page.

---

## Login and Authentication Issues

**Problem:** Cannot sign in. The page shows an error, or the login button does not respond.

**Cause:** JavaScript or cookies may be disabled in the browser, or the browser cache may contain stale session data.

**Solution:**
1. Confirm that JavaScript and cookies are enabled in your browser settings.
2. Clear your browser cache and cookies, then reload the login page.
3. Try logging in using a supported browser. These are Chrome (recommended), Firefox, Edge, and Safari.
4. If the problem persists, disable your browser extensions, especially ad blockers or script blockers, then try again.

---

**Problem:** SSO login fails. Selecting "Sign in with Google" or "Sign in with Microsoft" redirects to an error page.

**Cause:** The OAuth credentials configured for your organisation may be incorrect, or the user's email domain does not match the configured identity provider.

**Solution:**
1. Confirm that your email address uses a domain that matches the configured SSO provider.
2. If your organisation enforces MFA through Google Workspace or Microsoft Azure AD, complete the MFA prompt as required by your identity provider.
3. If the issue only affects one user, ask your administrator to verify that the user's account exists in Vela and that the email address matches.
4. If SSO fails for everyone, Botlhale needs to check the OAuth configuration. It is set at deployment level and cannot be changed from Settings. Contact **support@botlhale.ai**.

---

**Problem:** Password reset email does not arrive.

**Cause:** The email may have been filtered to spam, or the address entered does not match an existing account.

**Solution:**
1. Check your spam or junk mail folder.
2. Confirm you entered the correct email address on the "Forgot your password?" screen.
3. If no account exists for that address, ask your administrator to check that your user account has been created in **Settings → Users**.
4. Contact support if the email still does not arrive after checking the above.

---

**Problem:** Password is rejected when creating a new account or resetting.

**Cause:** The new password does not meet Vela's requirements.

**Solution:**
Check your password against the rules in [Password Requirements](../settings-config/account-security.md#password-requirements). The most common causes are a missing special character or a password under the minimum length.

---

**Problem:** Session expires unexpectedly and you are logged out during work.

**Cause:** You may be working in incognito or private browsing mode, where session persistence is limited.

**Solution:**
1. Use a standard browser window rather than incognito or private mode.
2. Avoid clearing browser data while a session is active.
3. If your organisation enforces session timeout policies through an SSO provider, contact your IT administrator.

---

## Upload Issues

### Single Call Upload

**Problem:** Single call upload fails immediately after selecting "Upload".

**Cause:** The audio file is not in a supported format, or the file is corrupted.

**Solution:**
1. Confirm the file is in WAV or MP3 format. Other audio formats are not supported.
2. Play the file locally on your device to confirm it is not corrupted.
3. Ensure the required fields are completed. **Agent**, **Team**, **Department**, and the audio file are all required, and the Upload button stays disabled until each has a value. Choosing an agent fills in their team and department for you, so an agent recorded with **No Team** or **No Department** leaves those fields empty and blocks the upload with no message. **Direction** and **Tags** are optional.
4. If the file plays locally but still fails to upload, try a different browser or check your internet connection stability.

---

**Problem:** Single call upload appears to complete but the call never appears in the Interactions list.

**Cause:** The call may still be processing, or it was uploaded with metadata that places it outside your current filter view.

**Solution:**
1. Allow time for processing to finish before expecting the call to appear in the list. Vela emails you when it is complete, if you have email notifications enabled.
2. Check that the date range and scope filters on the Interactions page include the period and team for the uploaded call.
3. Refresh the page if the call does not appear once processing has finished.

---

### Bulk Upload

**Problem:** Bulk upload fails or returns errors on the metadata CSV.

**Cause:** Column names in the CSV do not match the expected template, the CSV is not UTF-8 encoded, or some files listed in the CSV are missing from the ZIP.

**Solution:**
1. Download the metadata CSV template from the upload page and use it as your starting point. Do not rename or reorder the columns.
2. Ensure the CSV is saved with UTF-8 encoding. In Microsoft Excel, use "Save As" and select "CSV UTF-8 (comma delimited)".
3. Verify that every filename listed in the `filename` column (including the file extension) is present in the ZIP archive.
4. Confirm that `agent_name` values correspond to agent names in Vela. Matching is case-insensitive, but it matches on the agent's **name**. A username or email such as `john.smith` does not match `John Smith`.
5. Confirm that `department` and `team` values correspond to existing records in Vela. These are also matched case-insensitively.

---

**Problem:** Bulk upload succeeds but some calls fail to process and do not appear.

**Cause:** Individual files in the batch may have format issues, or their metadata rows contained errors.

**Solution:**
1. Check which calls from the batch appear in the Interactions list, and identify which are missing.
2. Confirm each missing audio file is a valid WAV or MP3 that plays on your device.
3. Check the metadata row for each missing file, particularly that `agent_name`, `team`, and `department` correspond to records that exist in Vela.
4. Correct the issues and re-upload only the affected files.

---

**Problem:** Bulk upload times out before completing.

**Cause:** The ZIP archive exceeds the 3 GB limit, or the upload connection is too slow.

**Solution:**
1. Split large batches into smaller ZIP archives, each under 3 GB.
2. Upload during off-peak hours (evenings or weekends) when server load is lower.
3. Use a wired internet connection rather than Wi-Fi for large uploads, as a stable connection matters more than raw speed over a long transfer.
4. Do not navigate away from the upload page while a bulk upload is in progress.

---

## Processing Issues

**Problem:** Uploaded calls are not appearing in the Interactions list.

**Cause:** Processing time varies depending on call length, audio quality, number of speakers, and server load. The call may still be queued or processing.

**Solution:**
1. Allow time for processing to finish before assuming a failure. Vela emails you when it is complete, if you have email notifications enabled.
2. Check that the Interactions list filters (date range, scope, agent) are not excluding the call you are looking for.
3. Turn **Show unsupported calls** on, at the top left of the list. A call whose language Vela could not transcribe is marked unsupported and left out of the list by default, so it is present but hidden.
4. If a call has still not appeared after an unusually long time, and no notification has arrived, contact support with the filename and upload time.

---

**Problem:** Processed calls appear in the list but show no score.

**Cause:** No scorecard question is scoped to the relevant team or department, so the AI has no criteria to score against.

**Solution:**
1. Ask your administrator to open **Smart Detector → Agents Scorecard** and confirm that questions exist with **Search Status** set to Enabled.
2. Check the scope of the scorecard. It must cover the department or team the agent belongs to, and its **Interactions** setting must match the channel: a scorecard set to Chats never scores a call.
3. Once a scorecard is active, newly processed calls are scored automatically. It does not reach back over calls already processed unless it was created with Historical Search on. See [Build an Agent Scorecard](../agent-scorecard-guide.md).

---

**Problem:** The AI summary, sentiment, or keywords are missing from a processed call.

**Cause:** The audio quality may be too low for accurate transcription. The summary, sentiment, and keywords all depend on the transcript, so a poor transcript weakens all of them.

**Solution:**
1. Check the audio quality of the original file. Heavily compressed audio, background noise, and overlapping speakers all reduce analysis accuracy.
2. If the problem affects multiple recent uploads rather than a single file, contact support.

---

## Dashboard and Performance Issues

**Problem:** The Dashboard shows no data or displays empty charts.

**Cause:** No interactions have been uploaded yet, or the current date range and scope filters are not returning any data.

**Solution:**
1. Confirm that calls or chats have been uploaded and that processing is complete. The Dashboard only reflects interactions that have finished processing.
2. Check the date range selector covers the period you expect to see data for.
3. Check the scope filter to confirm you are viewing data for your team, department, or organisation as appropriate.

---

**Problem:** The Dashboard is loading slowly or charts are not rendering.

**Cause:** The selected date range or scope is very large, requiring a high volume of data to be loaded. Browser performance issues may also contribute.

**Solution:**
1. Narrow the date range to reduce the data volume (for example, use "This Week" instead of a multi-month range).
2. Close unnecessary browser tabs to free up memory.
3. Clear the browser cache and reload the page.
4. Ensure your browser is a supported, up-to-date version. Chrome and Edge offer the best performance.

---

**Problem:** Dashboard customisation changes are not saved between sessions.

**Cause:** The changes were not saved before navigating away.

**Solution:**
1. After customising the dashboard, confirm you selected **Save Changes** before navigating away. Closing the modal any other way discards your selection.
2. Dashboard preferences are stored against your user profile, not in your browser, so they follow you across devices and browsers. Clearing browser data does not reset them.
3. If your saved layout still does not appear after signing in again, contact support.

---

## Scorecard and Scoring Issues

**Problem:** An agent's score appears incorrect or seems to miss context from the conversation.

**Cause:** AI scoring is based on the criteria defined in your organisation's Agent Scorecard. Complex situations, cultural nuances, or contextual details that the AI cannot reliably detect from the transcript may result in an outcome that does not match your judgement.

**Solution:**
Override the individual scorecard items you disagree with. Your edited outcome takes precedence over the AI's, and the score is recalculated.

See [Complete a Manual Scorecard](../features/quality-assurance-tools.md#a-complete-a-manual-scorecard) for the full steps.

---

**Problem:** The Scorecard section is missing from an interaction.

**Cause:** No scorecard question is scoped to the team or department this agent belongs to.

**Solution:**
1. Ask your administrator to navigate to **Smart Detector → Agents Scorecard** and create or activate a scorecard.
2. Ensure the scorecard scope is set to cover the relevant team, department, or organisation.

---

**Problem:** A newly added scorecard question does not appear on interactions that were already scored.

**Cause:** Which questions an interaction was scored against is fixed when it is processed. A question added afterwards is not applied to it.

**Solution:**
1. Accept the gap and start the new measurement from the date you added the question. This is usually the right choice.
2. If an older interaction must be scored against it, upload the recording again so it is processed from scratch. That leaves two interactions for one conversation, so delete the earlier copy if you do not want duplicates.
3. For a large number of interactions, contact **support@botlhale.ai**.

:::note Editing a question is different from adding one
Editing an existing question's **weight**, **Auto-Fail**, **Compliance**, or **Expected Outcome** does apply backwards. Interactions already scored against that question are re-scored from the current settings the next time you open them, including their **Initial** scores. See [How Scoring Works](../explanation/how-scoring-works.md).
:::

The **Rerun Scorecard** button, on the **Scorecard** tab in **Automatic** view, is a separate case. It appears only when an interaction has no automatic scorecard yet, for example because none covered it when it was processed. It does not re-score an interaction that already has a score, and it is not available to agents.

---

**Problem:** An interaction shows a score of 0.0%, with a different percentage in brackets beside it.

**Cause:** The interaction failed a question marked **Auto-Fail**, which fails the whole interaction whatever else went well. The bracketed figure is the score earned on every other question.

**Solution:**
1. Open the **Scorecard** tab to see which Auto-Fail question failed.
2. Read the bracketed figure when coaching. An agent who scored `0.0% (90.0%)` did good work and missed one critical step.
3. If interactions are auto-failing more often than you expect, review which questions have Auto-Fail enabled. It is meant for critical compliance breaches rather than quality issues.

This is working as configured, not a scoring error. See [How Scoring Works](../explanation/how-scoring-works.md).

---

## Smart Search and Alert Issues

**Problem:** A Smart Search is not producing any matches, even though you expect it to.

**Cause:** The search may not be active, the scope may not cover the relevant teams, or the search was created without the Historical Search option, so it only applies to future uploads.

**Solution:**
1. Navigate to **Smart Detector → Smart Search** and confirm the search status is **Active**.
2. Check the scope setting. A search scoped to one team does not match interactions from other teams.
3. Review the phrases in your search. Very specific phrasing may not match the exact wording used in recorded calls. Add variations and synonyms to improve coverage.
4. Confirm the interactions you expect to match were uploaded after the search was created. A search only applies to earlier interactions if **Historical Search** was enabled when it was created.

---

**Problem:** A Smart Search is producing too many results, many of which are irrelevant.

**Cause:** The search phrases are too broad or too common, matching unrelated conversations.

**Solution:**
1. Edit the search and make the phrases more specific. For example, replace a generic word like "problem" with a more precise phrase like "I want to cancel my account".
2. Review false-positive matches to identify what language is triggering them, and refine accordingly.

---

**Problem:** In-app notifications are not arriving for Smart Search matches.

**Cause:** The notification option was not enabled when the search was created.

**Solution:**
Open the Smart Search and confirm its **Notifications** setting is on. You can change this at any time by editing the search. Matches still appear in the search results view regardless of the notification setting.

---

**Problem:** Alerts are accumulating faster than the team can review them.

**Cause:** Too many Smart Searches are active, or the searches are too broad, generating a high volume of matches.

**Solution:**
1. Review all active Smart Searches and deactivate any that are no longer relevant.
2. Tighten the phrasing in searches that generate excessive matches.
3. Prioritise work by sorting the Smart Search list by **Results** in descending order, and addressing the searches generating the most matches first.

---

**Problem:** **New Smart Search** is greyed out and cannot be selected.

**Cause:** Your organisation has reached the number of Smart Searches its plan allows. Most plans include five. No message explains this on the page.

**Solution:**
1. Check your allowance under **Settings → Organisations**, where **show package details** lists the **Smart Search Limit**.
2. Set a search you are not using to **Inactive**. Only Active searches count towards the limit, so deactivating one frees a place immediately and keeps the search for later. Deleting works too, and you lose the definition.
3. If you need more, ask your Account Manager about a higher limit.

---

## Redaction and Access Issues

**Problem:** Names, numbers, or other details in a transcript are replaced with placeholders.

**Cause:** Your organisation has redaction enabled, and your account does not have **View Redactions**. Vela masks the entity types your administrator has configured.

**Solution:**
1. Open the interaction and request access to the unmasked version. Your request goes to an administrator.
2. An administrator approves or declines the request, and you are notified of the outcome.
3. If you need standing access rather than per-interaction access, ask an administrator to enable **View Redactions** on your account in **Settings → Users**.

Administrators can reveal unmasked content on demand and do not need to request access.

See [Access Requests](../settings-config/access-requests-audits.md).

---

## Audio Playback Issues

**Problem:** Audio does not play in the interaction detail view.

**Cause:** The browser's audio permissions may be blocked, the output device may not be selected, or the browser requires explicit permission to play audio on the site.

**Solution:**
1. Check that your browser has permission to play audio. In Chrome or Edge, look for the speaker or lock icon in the address bar and confirm audio is not blocked for the Vela site.
2. Check your system audio output: ensure the correct device is selected and the volume is not muted.
3. If the issue only affects one specific call, the original file may be corrupted. Try playing a different call to determine whether the problem affects every call or only that file.
4. Try a different supported browser to rule out a browser-specific issue.
5. If no audio plays on any call, and everyone at your organisation is affected, ask your IT department to confirm that `*.amazonaws.com` is reachable. Vela streams recordings from Amazon S3, so a firewall that blocks it leaves the rest of Vela working while audio fails.

---

**Problem:** Selecting a timestamp in the transcript does not jump to the correct point in the audio.

**Cause:** The audio file had not finished loading when the timestamp was selected, or the page did not render correctly.

**Solution:**
1. Wait until the audio has fully loaded before selecting timestamps.
2. Refresh the page and try again.
3. If the problem persists across page refreshes, try a different supported browser.

---

**Problem:** Audio plays but the quality is very poor or difficult to understand.

**Cause:** The original recording was captured at a low sample rate or bitrate, or there was significant background noise in the source call.

**Solution:**
This is a characteristic of the source recording, so Vela cannot improve on it. Improving the quality of your call recordings at source produces clearer playback and more accurate transcription.

---

## Browser and Performance Issues

**Problem:** Vela does not load, or displays a blank screen.

**Cause:** JavaScript may be disabled, or a browser extension (such as an ad blocker or script blocker) may be preventing Vela from loading.

**Solution:**
1. Confirm that JavaScript is enabled in your browser settings.
2. Disable browser extensions one at a time to identify whether any are blocking Vela. Aggressive ad blockers and script blockers are the most common culprits.
3. Clear browser cache and cookies, then reload.
4. Try a different supported browser (Chrome, Edge, Firefox, or Safari).
5. If the problem affects everyone at your organisation simultaneously, it may be a network or firewall issue. Contact your IT department to confirm that `*.botlhale.ai`, `*.botlhale.xyz`, and `*.amazonaws.com` are all reachable on your network. Vela loads call audio, images, and the metadata CSV template from Amazon S3, so a firewall that blocks it leaves Vela loading while audio playback and template downloads fail.

---

**Problem:** Vela runs slowly, or charts take a long time to load.

**Cause:** Too many browser tabs are open, the device does not meet recommended specifications, or the selected date range is returning a very large dataset.

**Solution:**
1. Close unnecessary browser tabs.
2. Clear the browser cache.
3. Narrow the date range or scope on dashboards and report views.
4. Use Chrome or Edge (Chromium-based) for the best performance.
5. If the device is older or low on memory, try the same view on another machine to confirm whether the slowdown is device-related.

---

**Problem:** Features behave unexpectedly or parts of a page do not render correctly.

**Cause:** The browser version may be outdated, or a browser extension may be interfering with Vela.

**Solution:**
1. Update your browser to the latest stable version.
2. Disable all extensions and reload the page.
3. If the problem only appears in one browser, try a different supported browser to confirm whether it is browser-specific.
4. If the issue persists across multiple browsers and devices, contact support with a description of the behaviour and a screenshot.

---

## Related

- [Frequently Asked Questions](./faq.md): short answers to common questions, rather than steps for a problem
- [Upload Your Data](../data-upload.md): the upload procedures these entries refer to
- [How Scoring Works](../explanation/how-scoring-works.md): why a score reads the way it does
- [System Requirements](../getting-started/system-requirements.md): browsers, formats, and network requirements

## Need Help?

If this guide does not resolve your issue, contact **support@botlhale.ai**. Include:

- Browser type and version
- Operating system
- A clear description of the issue and the steps that led to it
- Screenshots or any error messages displayed on screen
