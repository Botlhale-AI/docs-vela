---
id: troubleshooting-guide
title: Troubleshooting Guide
sidebar_label: Troubleshooting Guide
sidebar_position: 1
---

# Troubleshooting Guide

This guide consolidates common issues reported by administrators, team leads, and agents, and provides step-by-step resolutions. Where issues appear in multiple areas of the platform, cross-references are included.

If you cannot resolve an issue using this guide, contact support at **support@botlhale.ai**. When doing so, include your browser type and version, operating system, a description of the issue, and any screenshots.

---

## Login and Authentication Issues

**Problem:** Cannot log in — the page shows an error or the login button does not respond.

**Cause:** JavaScript or cookies may be disabled in the browser, or the browser cache may contain stale session data.

**Solution:**
1. Confirm that JavaScript and cookies are enabled in your browser settings.
2. Clear your browser cache and cookies, then reload the login page.
3. Try logging in using a supported browser: Chrome (recommended), Firefox, Edge, or Safari.
4. If the problem persists, try disabling any browser extensions — especially ad blockers or script blockers — and attempt the login again.

---

**Problem:** SSO login fails — clicking "Sign in with Google" or "Sign in with Microsoft" redirects to an error page.

**Cause:** The SSO configuration in Vela Settings may have incorrect OAuth credentials, or the user's email domain does not match the configured identity provider.

**Solution:**
1. Ask your administrator to navigate to **Settings → Authentication** and verify that the OAuth credentials are correct.
2. Confirm that your email address uses a domain that matches the configured SSO provider.
3. If your organisation enforces MFA through Google Workspace or Microsoft Azure AD, complete the MFA prompt as required by your identity provider.
4. If the issue only affects one user, ask the administrator to verify that the user's account exists in Vela and that the email address matches exactly.

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

**Cause:** The new password does not meet the platform's requirements.

**Solution:**
Ensure your password is at least 8 characters long and includes at least one letter, one number, and one special character (for example, `@`, `#`, or `!`).

---

**Problem:** Session expires unexpectedly and the user is logged out during work.

**Cause:** The user may be working in incognito or private browsing mode, where session persistence is limited.

**Solution:**
1. Use a standard browser window rather than incognito or private mode.
2. Avoid clearing browser data while a session is active.
3. If your organisation enforces session timeout policies through an SSO provider, contact your IT administrator.

---

## Upload Issues

### Single Call Upload

**Problem:** Single call upload fails immediately after clicking "Upload".

**Cause:** The audio file is not in a supported format, or the file is corrupted.

**Solution:**
1. Confirm the file is in WAV or MP3 format. Other audio formats are not supported.
2. Play the file locally on your device to confirm it is not corrupted.
3. Ensure all required form fields are completed: Agent, Direction, and the audio file itself.
4. If the file plays locally but still fails to upload, try a different browser or check your internet connection stability.

---

**Problem:** Single call upload appears to complete but the call never appears in the Interactions list.

**Cause:** The call may still be processing, or it was uploaded with metadata that places it outside your current filter view.

**Solution:**
1. Wait for the in-app notification confirming processing is complete before expecting the call to appear in the list.
2. Check that the date range and scope filters on the Interactions page include the period and team for the uploaded call.
3. Refresh the page if the call does not appear after the processing notification arrives.

---

### Bulk Upload

**Problem:** Bulk upload fails or returns errors on the metadata CSV.

**Cause:** Column names in the CSV do not match the expected template, the CSV is not UTF-8 encoded, or some files listed in the CSV are missing from the ZIP.

**Solution:**
1. Download the metadata CSV template directly from the upload page and use it as your starting point — do not rename or reorder columns.
2. Ensure the CSV is saved with UTF-8 encoding. In Microsoft Excel, use "Save As" and select "CSV UTF-8 (comma delimited)".
3. Verify that every filename listed in the `filename` column (including the file extension) is present in the ZIP archive.
4. Confirm that `agent_name` values match agent names exactly as they appear in Vela. Unmatched names will cause those rows to fail.
5. Confirm that `department` and `team` values match existing records in Vela exactly.

---

**Problem:** Bulk upload succeeds but some calls fail to process and do not appear.

**Cause:** Individual files in the batch may have format issues, or their metadata rows contained errors.

**Solution:**
1. Review the upload results screen — it will indicate which files failed and the reason.
2. Correct the identified issues and re-upload only the failed files.
3. Confirm each audio file is a valid WAV or MP3 that plays on your device.

---

**Problem:** Bulk upload times out before completing.

**Cause:** The ZIP archive exceeds the recommended 3 GB limit, or the upload connection is too slow.

**Solution:**
1. Split large batches into smaller ZIP archives, each under 3 GB.
2. Upload during off-peak hours (evenings or weekends) when server load is lower.
3. Use a wired internet connection rather than Wi-Fi for large uploads, and ensure your upload speed meets at least the recommended 10 Mbps.
4. Do not navigate away from the upload page while a bulk upload is in progress.

---

## Processing Issues

**Problem:** Uploaded calls are not appearing in the Interactions list.

**Cause:** Processing time varies depending on call length, audio quality, number of speakers, and server load. The call may still be queued or processing.

**Solution:**
1. Wait for the in-app notification confirming processing is complete. Do not assume a failure until that notification has been received.
2. Check that the Interactions list filters (date range, scope, agent) are not excluding the call you are looking for.
3. If a call has remained in a processing state for an unusually long time with no notification, contact support with the filename and upload time.

---

**Problem:** Processed calls appear in the list but show no score.

**Cause:** No active Agent Scorecard exists with a scope that covers the relevant team or department, so the AI has no criteria to score against.

**Solution:**
1. Ask your administrator to navigate to **Smart Detector → Agent Scorecard** and confirm that an active scorecard exists.
2. Check the scope of the scorecard — it must cover the department or team the agent belongs to.
3. Once a scorecard is active, newly processed calls will be scored automatically.

---

**Problem:** The AI summary, sentiment, or keywords are missing from a processed call.

**Cause:** The audio quality may be too low for accurate processing, or an incorrect language was specified at upload.

**Solution:**
1. Check the audio quality of the original file. Very low bitrate or heavily compressed audio reduces analysis accuracy. For best results, use a 16 kHz sample rate and 128 kbps bitrate or higher.
2. Confirm that the correct language was specified at upload if your calls are in a language other than English.
3. If the problem affects multiple recent uploads rather than a single file, contact support.

---

## Dashboard and Performance Issues

**Problem:** The Dashboard shows no data or displays empty charts.

**Cause:** No interactions have been uploaded yet, or the current date range and scope filters are not returning any data.

**Solution:**
1. Confirm that calls or chats have been uploaded and that processing is complete. The Dashboard only reflects interactions that have finished processing.
2. Check the date range selector — ensure it covers the period you expect to see data for.
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

**Cause:** Browser local storage may have been cleared, resetting saved preferences.

**Solution:**
1. After customising the dashboard, confirm you clicked **Save** before navigating away.
2. Avoid clearing browser data between sessions, as dashboard preferences are stored in browser local storage.
3. Do not use incognito or private mode if you want customisations to persist across sessions.

---

## Scorecard and Scoring Issues

**Problem:** An agent's score appears incorrect or seems to miss context from the conversation.

**Cause:** AI scoring is based on the criteria defined in your organisation's Agent Scorecard. Complex situations, cultural nuances, or contextual details that the AI cannot reliably detect from the transcript may result in an outcome that does not match your judgement.

**Solution:**
1. Open the interaction detail view and navigate to the **Scorecard** section.
2. Click the **Automatic** or **Manual** tab to review the individual scored items.
3. Click the edit icon (pencil) in the Outcome column header to enter edit mode.
4. Adjust individual outcomes (Yes / No / N/A) as needed, based on your review of the call.
5. Click **Save Changes**. Your manual score takes precedence over the AI score.

---

**Problem:** The Scorecard section is missing from an interaction.

**Cause:** No active scorecard with the correct scope covers the team or department this agent belongs to.

**Solution:**
1. Ask your administrator to navigate to **Smart Detector → Agent Scorecard** and create or activate a scorecard.
2. Ensure the scorecard scope is set to cover the relevant team, department, or organisation.

---

**Problem:** Changes to scorecard criteria (questions or weights) do not appear to affect existing scores.

**Cause:** Scorecard changes apply to interactions processed after the change is saved. Already-processed interactions retain the scores calculated at the time of processing.

**Solution:**
Re-review and manually score affected historical interactions where the change is significant. For bulk re-scoring needs, contact support.

---

## Smart Search and Alert Issues

**Problem:** A Smart Search is not producing any matches, even though you expect it to.

**Cause:** The search may not be active, the scope may not cover the relevant teams, or the search was created without the Historical Search option, so it only applies to future uploads.

**Solution:**
1. Navigate to **Smart Detector → Smart Search** and confirm the search status is **Active**.
2. Check the scope setting — a search scoped to a specific team will not match interactions from other teams.
3. If you want the search to run against calls that were already uploaded, the **Historical Search** option must have been enabled at creation. If it was not, recreate the search with that option enabled.
4. Review the phrases in your search. Very specific phrasing may not match the exact wording used in recorded calls. Add variations and synonyms to improve coverage.

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
The in-app notification setting is configured at creation time. If notifications were not enabled, recreate the search with the **Notifications** toggle turned on. Matches will still appear in the search results view regardless of the notification setting.

---

**Problem:** Alerts are accumulating faster than the team can review them.

**Cause:** Too many Smart Searches are active, or the searches are too broad, generating a high volume of matches.

**Solution:**
1. Review all active Smart Searches and deactivate any that are no longer relevant.
2. Tighten the phrasing in searches that generate excessive matches.
3. Prioritise work by sorting Smart Search results by match count (highest first) and addressing the most frequent issues first.

---

## Audio Playback Issues

**Problem:** Audio does not play in the interaction detail view.

**Cause:** The browser's audio permissions may be blocked, the output device may not be selected, or the browser requires explicit permission to play audio on the site.

**Solution:**
1. Check that your browser has permission to play audio. In Chrome or Edge, look for the speaker or lock icon in the address bar and confirm audio is not blocked for the Vela site.
2. Check your system audio output: ensure the correct device is selected and the volume is not muted.
3. If the issue only affects one specific call, the original file may be corrupted. Try playing a different call to determine whether the problem is platform-wide or specific to that file.
4. Try a different supported browser to rule out a browser-specific issue.

---

**Problem:** Clicking a timestamp in the transcript does not jump to the correct point in the audio.

**Cause:** A brief browser loading delay or a page rendering issue.

**Solution:**
1. Wait until the audio has fully loaded before clicking timestamps.
2. Refresh the page and try again.
3. If the problem persists across page refreshes, try a different supported browser.

---

**Problem:** Audio plays but the quality is very poor or difficult to understand.

**Cause:** The original recording was captured at a low sample rate or bitrate, or there was significant background noise in the source call.

**Solution:**
This is a characteristic of the source recording and cannot be improved within the platform. For future uploads, source audio recorded at a 16 kHz sample rate and 128 kbps bitrate or higher will produce clearer playback and more accurate transcription.

---

## Browser and Performance Issues

**Problem:** The platform does not load or displays a blank screen.

**Cause:** JavaScript may be disabled, or a browser extension (such as an ad blocker or script blocker) may be preventing the platform from loading.

**Solution:**
1. Confirm that JavaScript is enabled in your browser settings.
2. Disable browser extensions one at a time to identify whether any are blocking the platform. Aggressive ad blockers and script blockers are the most common culprits.
3. Clear browser cache and cookies, then reload.
4. Try a different supported browser (Chrome, Edge, Firefox, or Safari).
5. If the problem affects everyone at your organisation simultaneously, it may be a network or firewall issue. Contact your IT department to confirm that the domains `*.botlhale.ai` and `*.cloudflare.com` are accessible on your network.

---

**Problem:** The platform runs slowly or charts take a long time to load.

**Cause:** Too many browser tabs are open, the device does not meet recommended specifications, or the selected date range is returning a very large dataset.

**Solution:**
1. Close unnecessary browser tabs.
2. Clear the browser cache.
3. Narrow the date range or scope on dashboards and report views.
4. Use Chrome or Edge (Chromium-based) for the best performance.
5. Ensure your device meets the recommended specifications: a quad-core processor at 2.0 GHz or better and at least 8 GB of RAM.

---

**Problem:** Features behave unexpectedly or parts of a page do not render correctly.

**Cause:** The browser version may be outdated, or a browser extension may be interfering with the platform.

**Solution:**
1. Update your browser to the latest stable version.
2. Disable all extensions and reload the page.
3. If the problem only appears in one browser, try a different supported browser to confirm whether it is browser-specific.
4. If the issue persists across multiple browsers and devices, contact support with a description of the behaviour and a screenshot.

---

## Getting Help

If you cannot resolve an issue using this guide, contact support at **support@botlhale.ai**. Please include:

- Browser type and version
- Operating system
- A clear description of the issue and the steps that led to it
- Screenshots or any error messages displayed on screen
