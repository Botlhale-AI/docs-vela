---
id: troubleshooting-guide
title: General Issues
description: "Fix sign-in, upload, processing, Dashboard, redaction, audio, and browser problems."
sidebar_position: 1
type: troubleshooting
---

# General Issues

This guide consolidates common issues reported by administrators, team leads, and agents, and provides step-by-step resolutions. Where an issue appears in more than one area of Vela, this guide cross-references it.

For interactions sent from your own systems through the API, see [Integration Problems](./integration-troubleshooting.md). For a missing or incorrect score, or a Smart Search matching too much or too little, see [Smart Detector Issues](./smart-detector-issues.md).

If this guide does not resolve your issue, see [Need Help?](#need-help) at the end of this page.

---

## Start Here

Find your symptom, rather than reading from the top.

| What you are seeing | Where to look |
| :--- | :--- |
| Cannot sign in, or signed out mid-session | [Login and Authentication](#login-and-authentication-issues) |
| An upload made in Vela failed or never arrived | [Upload Issues](#upload-issues) |
| An upload sent from your own system failed or never arrived | [Integration Problems](./integration-troubleshooting.md) |
| A **401**, a token problem, or an integration that stopped working | [Integration Problems](./integration-troubleshooting.md) |
| Interactions arrive with the wrong agent, team, or date | [Integration Problems](./integration-troubleshooting.md) |
| Interactions uploaded but still not listed | [Processing Issues](#processing-issues) |
| An interaction listed but with no summary, sentiment, or keywords | [Processing Issues](#processing-issues) |
| An interaction listed but with no score | [Smart Detector Issues](./smart-detector-issues.md#scorecard-and-scoring-issues) |
| The Dashboard is empty, or forgets your changes | [Dashboard and Performance](#dashboard-and-performance-issues) |
| A score looks wrong, or reads `0.0%` with a figure in brackets | [Smart Detector Issues](./smart-detector-issues.md#scorecard-and-scoring-issues) |
| A Smart Search matches nothing, matches too much, or cannot be created | [Smart Detector Issues](./smart-detector-issues.md#smart-search-and-alert-issues) |
| Names or numbers replaced with placeholders in a transcript | [Redaction and Access](#redaction-and-access-issues) |
| Audio does not play, or jumps to the wrong point | [Audio Playback](#audio-playback-issues) |
| A blank screen, or Vela running slowly | [Browser Issues](#browser-issues) |

One symptom is worth naming, because it looks like normal behaviour:

- **An upload returns success and nothing appears.** The interaction reached somewhere other than your Vela organisation. See [Integration Problems](./integration-troubleshooting.md).

---

## Login and Authentication Issues

**Problem:** Signing in with email and password fails.

**Cause:** Selecting **Sign In** always responds with a message. Which one appears tells you what to do next.

**Solution:**
- `Please fill in all fields.` Enter both an email address and a password before selecting **Sign In**.
- `Invalid credentials. Please try again.` The email or password does not match an account. Check for a typo, or select **Forgot your password?** to reset it.
- `We have sent you an email. Please verify your email address.` The account exists but has not been confirmed. Open the invitation email and select **Confirm Account** before signing in.
- `We have sent you an email. Please reset your password before logging in.` The account needs its password reset before it can sign in. Check the email for the reset link.
- `An unexpected error occurred. Please try again later.` The request to Vela failed rather than being refused. Try again in a moment, and contact support if it continues.

If the page fails to load at all, that is a different problem. See [Browser Issues](#browser-issues).

---

**Problem:** SSO login fails. Selecting "Sign in with Google" or "Sign in with Microsoft" redirects to an error page.

**Cause:** Vela checks that the signed-in email already has an account before completing SSO sign-in. Where it does not, the page reads `You have not been cleared to create an account on Vela. Please contact sales@botlhale.ai to create an account.` SSO never creates an account on its own.

**Solution:**
1. Confirm your administrator has added you in **Settings → Users**, using the exact email address your Google or Microsoft account signs in with.
2. If your organisation enforces MFA through Google Workspace or Microsoft Azure AD, complete the MFA prompt as required by your identity provider.
3. If the page shows a different message, or SSO fails for everyone, Botlhale needs to check the OAuth configuration. It is set at deployment level and cannot be changed from Settings. Contact **support@botlhale.ai**.

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

**Cause:** A session lasts 24 hours from when you sign in, in any browser mode. What reads as unexpected is usually that limit being reached, or something clearing your cookies before it is.

**Solution:**
1. Sign in again. Being signed out after 24 hours is expected rather than a fault.
2. Avoid clearing browser data, or a setting that clears cookies automatically, while a session is active.
3. If your organisation enforces a shorter session limit through an SSO provider, that ends the session sooner than 24 hours. Contact your IT administrator.

---

## Upload Issues

### Single Call Upload

**Problem:** Single call upload fails immediately after selecting "Upload".

**Cause:** The audio file is not in a supported format, the file is corrupted, or it is over the 1 GB single-file limit.

**Solution:**
1. Check the file size. A file over 1 GB is rejected the moment you add it, with the message `file too big!`. Split or re-encode it to bring it under the limit.
2. Confirm the file is in WAV or MP3 format. Other audio formats are not supported.
3. Play the file locally on your device to confirm it is not corrupted.
4. Ensure the required fields are completed. **Agent**, **Team**, **Department**, and the audio file are all required, and the Upload button stays disabled until each has a value. Choosing an agent fills in their team and department for you, so an agent recorded with **No Team** or **No Department** leaves those fields empty and blocks the upload with no message. **Direction** and **Tags** are optional.
5. If the file plays locally but still fails to upload, try a different browser or check your internet connection stability.

A single call that appears to upload but never shows up in the Interactions list is the same issue as an upload not appearing generally. See [Processing Issues](#processing-issues) below.

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

**Problem:** An uploaded call, or an upload of many, is not appearing in the Interactions list.

**Cause:** Processing time varies depending on call length, audio quality, number of speakers, and server load, so the call may still be queued or processing. Metadata that places it outside your current filter view produces the same symptom.

**Solution:**
1. Allow time for processing to finish before assuming a failure. Vela emails you when it is complete, if you have email notifications enabled.
2. Check that the Interactions list filters (date range, scope, agent) are not excluding the call you are looking for.
3. Turn **Show unsupported calls** on, at the top left of the list. Vela marks some calls unsupported and leaves them out of the list by default, so a missing call may be present but hidden. {/* UNVERIFIED: the cause historically documented here, an unsupported language, could not be confirmed against current source. Needs engineering to confirm what currently sets a call unsupported. */}
4. If a call has still not appeared after an unusually long time, and no notification has arrived, contact support with the filename and upload time.

:::note Two people upload the same call and wait different lengths of time
Processing is queued rather than instant, and the queue is shared, so the wait depends on what is ahead of a call rather than on who uploaded it. Two uploads of the same recording minutes apart can finish an hour apart.

That is expected. What is not expected is a call that never arrives at all. Report those with the filename and the upload time rather than waiting longer. Say whether the same file has been uploaded before, because a repeat behaves differently from a new upload.
:::

---

**Problem:** The AI summary, sentiment, or keywords are missing from a processed call.

**Cause:** The audio quality may be too low for accurate transcription. The summary, sentiment, and keywords all depend on the transcript, so a poor transcript weakens all of them.

**Solution:**
1. Check the audio quality of the original file. Heavily compressed audio, background noise, and overlapping speakers all reduce analysis accuracy.
2. If the problem affects multiple recent uploads rather than a single file, contact support.

An interaction that finished processing but carries no score is a scorecard problem rather than a processing one. See [Smart Detector Issues](./smart-detector-issues.md#scorecard-and-scoring-issues).

---

## Dashboard and Performance Issues

**Problem:** The Dashboard shows no data or displays empty charts.

**Cause:** No interactions have been uploaded yet, or the current date range and scope filters are not returning any data.

**Solution:**
1. Confirm that calls or chats have been uploaded and that processing is complete. The Dashboard only reflects interactions that have finished processing.
2. Check the date range selector covers the period you expect to see data for.
3. Check the scope filter. It may be set narrower than the agents you are looking for, so widen it to the department or the organisation and see whether the figures appear.

A Dashboard that loads slowly or leaves charts not rendering is the same issue as Vela running slowly generally. See [Browser Issues](#browser-issues) below.

---

**Problem:** Dashboard customisation changes are not saved between sessions.

**Cause:** The changes were not saved before navigating away.

**Solution:**
1. After customising the dashboard, confirm you selected **Save Changes** before navigating away. Closing the modal any other way discards your selection.
2. Dashboard preferences are stored against your user profile, not in your browser, so they follow you across devices and browsers. Clearing browser data does not reset them.
3. If your saved layout still does not appear after signing in again, contact support.

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

**Problem:** An access request was sent, and nothing has happened.

**Cause:** Requests wait for an administrator to act on them. The only prompt they get is the notification raised when the request was made.

**Solution:**
1. Ask an administrator to check **Settings → Requests**. Requests sit there until approved or declined.
2. Where the request is urgent, ask directly rather than waiting. An administrator can already see the unmasked content and can tell you what you need.
3. Where you need this often, standing **View Redactions** is the better answer than repeated requests.

---

**Problem:** A transcript still shows masked text after **View Redactions** was granted.

**Cause:** Masking is what everyone sees by default, administrators included. The unmasked version is revealed on demand rather than shown automatically.

**Solution:**
1. Open the interaction and select **Review Redacted Info** to reveal the unmasked content.
2. Where the control is absent, reload the page or reopen the interaction. Redaction access is read fresh each time the interaction loads, not from your sign-in session, so signing out and back in makes no difference.
3. Confirm the permission was set on your account in **Settings → Users**, rather than granted for one interaction only.

---

**Problem:** Something that should have been masked appears in a transcript.

**Cause:** Only the entity types your administrator has configured are masked, so anything outside that list passes through. Spoken detail that the transcript records in an unusual form can also be missed.

**Solution:**
1. Check which entity types are enabled in **Settings**, and add the missing one. See [Organisation Configuration](../settings-config/organisation-configuration.md).
2. Adding a type applies to interactions processed afterwards. Interactions already processed keep the masking they were given.
3. Report anything that should have been caught by an enabled type to **support@botlhale.ai**, with the interaction and the entity type, so the detection can be improved.

:::caution Treat an exposure as an incident
Personal information appearing where it should not is a data protection matter, not only a product fault. Tell whoever is accountable for data protection at your organisation, rather than handling it as a support ticket alone.
:::

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

**Cause:** The audio file had not finished loading when the timestamp was selected, or the page did not display correctly.

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

## Browser Issues

**Problem:** Vela does not load, or displays a blank screen.

**Cause:** Something between your browser and Vela is blocking it, usually a script blocker or a network rule.

**Solution:**
1. Disable browser extensions and reload. Ad blockers and script blockers are the usual cause, so turn them off one at a time to find which.
2. Confirm your browser is one Vela supports, and that JavaScript is on. See [System Requirements](../getting-started/system-requirements.md).
3. Clear the cache and cookies, then reload.
4. Where everyone at your organisation is affected at once, it is a network rule rather than a browser. Ask your IT department to confirm the domains under [Firewall and Proxy](../getting-started/system-requirements.md#firewall-and-proxy) are reachable. Vela loads call audio, images, and the metadata CSV template from Amazon S3, so blocking it breaks playback and downloads as well as the application.

---

**Problem:** Vela runs slowly, or charts take a long time to load.

**Cause:** The view is returning more data than it needs to. A wide date range across a whole organisation is the usual reason, rather than the browser or the device.

**Solution:**
1. Narrow the date range, and use **View By** or **Filter** to cover less of the organisation. For example, use "This Week" instead of a multi-month range.
2. Where a single interaction is slow to open, check its length. A long recording carries a long transcript and takes longer to display.
3. Where every view is slow but other sites are fine, clear the cache and try a second supported, up-to-date browser to confirm it is Vela rather than the machine.
4. Where the same narrow view is still slow, contact support with the page, the date range, and the scope you had set.

---

## Related

- [Smart Detector Issues](./smart-detector-issues.md): a missing or incorrect score, and Smart Search problems
- [Integration Problems](./integration-troubleshooting.md): problems with interactions sent through the API
- [Frequently Asked Questions](./faq.md): short answers to common questions, rather than steps for a problem
- [Upload Your Data](../data-upload.md): the upload procedures these entries refer to
- [System Requirements](../getting-started/system-requirements.md): browsers, formats, and network requirements

## Need Help?

If this guide does not resolve your issue, contact **support@botlhale.ai**. Include:

- Browser type and version
- Operating system
- A clear description of the issue and the steps that led to it
- Screenshots or any error messages displayed on screen
