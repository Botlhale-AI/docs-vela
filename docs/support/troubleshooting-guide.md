---
id: troubleshooting-guide
title: General Issues
description: "Fix sign-in, upload, processing, Dashboard, redaction, audio, and browser problems."
sidebar_position: 1
type: troubleshooting
---

# General Issues

This guide gives the steps to fix common problems with signing in, uploads, processing, the Dashboard, redaction, audio playback, and the browser.

For interactions sent from your own systems through the API, see [Integration Problems](./integration-troubleshooting.md). For a missing or incorrect score, or a Smart Search matching too much or too little, see [Smart Detector Issues](./smart-detector-issues.md).

If this guide does not resolve your issue, see [Need Help?](#need-help) at the end of this page.

---

## Start Here

Find your symptom, rather than reading from the top.

| What you are seeing | Where to look |
| :--- | :--- |
| Signing in with email and password fails with a message | [Login and Authentication](#login-and-authentication-issues) |
| SSO sign-in returns you to the Sign In page with an error | [Login and Authentication](#login-and-authentication-issues) |
| The password reset email does not arrive | [Login and Authentication](#login-and-authentication-issues) |
| A new password is rejected | [Login and Authentication](#login-and-authentication-issues) |
| Signed out while you are working | [Login and Authentication](#login-and-authentication-issues) |
| A single call upload fails, or **Upload** is missing or cannot be selected | [Single Call Upload](#single-call-upload) |
| A bulk upload rejects the metadata CSV | [Bulk Upload](#bulk-upload) |
| A bulk upload succeeds, but some calls never appear | [Bulk Upload](#bulk-upload) |
| A bulk upload times out | [Bulk Upload](#bulk-upload) |
| An upload sent from your own system failed or never arrived | [Integration Problems](./integration-troubleshooting.md) |
| A **401**, a token problem, or an integration that stopped working | [Integration Problems](./integration-troubleshooting.md) |
| Interactions arrive with the wrong agent, team, or date | [Integration Problems](./integration-troubleshooting.md) |
| Interactions uploaded but still not listed | [Processing Issues](#processing-issues) |
| An interaction listed but with no summary, sentiment, or keywords | [Processing Issues](#processing-issues) |
| An interaction listed but with no score | [Smart Detector Issues](./smart-detector-issues.md#scorecard-and-scoring-issues) |
| A score looks wrong, or reads `0.0%` with a figure in brackets | [Smart Detector Issues](./smart-detector-issues.md#scorecard-and-scoring-issues) |
| A Smart Search matches nothing, matches too much, or cannot be created | [Smart Detector Issues](./smart-detector-issues.md#smart-search-and-alert-issues) |
| The Dashboard is empty | [Dashboard and Performance](#dashboard-and-performance-issues) |
| The Dashboard forgets your changes | [Dashboard and Performance](#dashboard-and-performance-issues) |
| Names or numbers replaced with placeholders in a transcript | [Redaction and Access](#redaction-and-access-issues) |
| An access request has had no answer | [Redaction and Access](#redaction-and-access-issues) |
| A transcript still masked after **View Redactions** was granted | [Redaction and Access](#redaction-and-access-issues) |
| Something that should be masked appears in a transcript | [Redaction and Access](#redaction-and-access-issues) |
| Audio does not play | [Audio Playback](#audio-playback-issues) |
| A transcript timestamp jumps to the wrong point in the audio | [Audio Playback](#audio-playback-issues) |
| Audio plays but is hard to understand | [Audio Playback](#audio-playback-issues) |
| Vela does not load, shows `ERR_NAME_NOT_RESOLVED`, or shows a blank screen | [Browser Issues](#browser-issues) |
| Vela runs slowly, or charts take a long time to load | [Browser Issues](#browser-issues) |

One symptom is worth naming, because it looks like normal behaviour:

- **An upload sent through the API returns success and nothing appears.** The interaction reached somewhere other than your Vela organisation. See [Integration Problems](./integration-troubleshooting.md). For an upload made in Vela itself, see [Processing Issues](#processing-issues).

---

## Login and Authentication Issues

**Problem:** Signing in with email and password fails.

**Cause:** Selecting **Sign In** always responds with a message. Which one appears tells you what to do next.

**Solution:**
- `Please fill in all fields.` Enter both an email address and a password before selecting **Sign In**.
- `Invalid credentials` The email or password does not match an account. Check for a typo, or select **Forgot your password?** to reset it. See [Resetting a Forgotten Password](../settings-config/account-security.md#resetting-a-forgotten-password).
- `You are registered as an agent. Please log in on the agent coaching portal.` The address belongs to an agent account. Agents sign in to the Agent Portal, reached with **Go to Agent Portal Login** on this page.
- `Too many login attempts. Your account has been blocked. Please contact support for assistance` Ten wrong passwords in a row block the account, and every attempt after that, right or wrong, reads `Your account has been blocked. Please contact support for assistance`. A successful sign-in resets the count. Contact **support@botlhale.ai** to lift the block.
- `We have sent you an email. Please verify your email address.` The account exists but has not been confirmed. Open the invitation email and select **Confirm Account** before signing in.
- `We have sent you an email. Please reset your password before logging in.` A new account sets its own password before its first sign-in. Select **Forgot your password?** to request the reset link, then follow it in the **Reset Your Password** email. {/* VERIFIED 2026-10-05 on origin/vela-fly: app/api/auth/[...nextauth]/route.js throws this when force_password_change is set, which addUser sets for every new user (commit e0f70e3d, not on origin/main, which is why it was not found there). */} {/* ENGINEERING (known bug, documented as intended): on this path app/api/login/route.js@vela-fly sends a reset email only when !user.password, so despite the message no reset email is sent. An unconfirmed user gets "Confirm Your Email Address", and confirming does not clear the flag. Intended: this path sends Reset Your Password. Forgot your password? works. */}
- `Something went wrong` or `An unexpected error occurred. Please try again later.` Vela could not complete the request. Try again in a moment, and contact support if it continues.

If the page fails to load at all, that is a different problem. See [Browser Issues](#browser-issues).

---

**Problem:** SSO login fails. Selecting "Sign in with Google" or "Sign in with Microsoft" returns you to the Sign In page with an error message.

**Cause:** Vela checks that the signed-in email already has an account before completing SSO sign-in. Where it does not, the page reads `You have not been cleared to create an account on Vela. Please contact sales@botlhale.ai to create an account.` SSO never creates an account on its own.

**Solution:**
1. Confirm your administrator has added you in **Settings → Users**, using the exact email address your Google or Microsoft account signs in with.
2. If your organisation enforces MFA through Google Workspace or Microsoft Azure AD, complete the MFA prompt as required by your identity provider.
3. If the page shows a different message, or SSO fails for everyone, contact **support@botlhale.ai** to check the SSO configuration. It is set at deployment level, not in Settings.

---

**Problem:** Password reset email does not arrive.

**Cause:** The email may have been filtered to spam or quarantined by your organisation's email security, or the address entered does not match an existing account.

**Solution:**
1. Check your spam or junk mail folder.
2. Where your organisation quarantines external email, ask your IT team to release the message and to allow email from Vela.
3. Confirm you entered the correct email address after selecting **Forgot your password?**.
4. If no account exists for that address, ask your administrator to check that your user account has been created in **Settings → Users**.
5. Contact support if the email still does not arrive after checking the above.

---

**Problem:** Password is rejected when creating a new account or resetting.

**Cause:** The new password does not meet Vela's requirements.

**Solution:**
1. Check your password against the rules in [Password Requirements](../settings-config/account-security.md#password-requirements). The most common causes are a missing special character or a password under the minimum length.
2. If a password that meets every rule is still rejected, contact support.

---

**Problem:** Your session ends and you are signed out while you are working.

**Cause:** Vela signs you out after 24 hours without activity. Each time you use Vela, the 24 hours start again. Being signed out while you are working usually means something cleared your cookies.

**Solution:**
1. Sign in again.
2. Keep browser data while you are signed in, and turn off any setting that clears cookies automatically.
3. If you are still signed out while working, contact support.

---

## Upload Issues

### Single Call Upload

**Problem:** A single call upload fails, or **Upload** is missing or cannot be selected.

**Cause:** The audio file is not in a supported format, the file is corrupted, or it is over the 1 GB single-file limit.

**Solution:**
1. Check the file size. A file over 1 GB is rejected the moment you add it, with the message `file too big!`. Split or re-encode it to bring it under the limit.
2. Confirm the file is in WAV or MP3 format. Other audio formats are not supported.
3. Play the file locally on your device to confirm it is not corrupted.
4. Ensure the required fields are completed. **Agent**, **Team**, **Department**, and the audio file are all required, and the Upload button stays disabled until each has a value. Choosing an agent fills in their team and department for you. For an agent recorded with **No Team** or **No Department**, give them a team first in [Manage Agents and Teams](../features/manage-agents-and-teams.md), because Vela files each call under the agent's own team. **Direction** and **Tags** are optional.
5. If **Upload** is missing from the Calls list, open **Interactions → Calls** directly, not from a Smart Search or a phone number search. If it is still missing, your organisation is not active yet, so ask your Account Manager.
6. If selecting **Upload** does nothing and a message says you have reached the limit for Batch Upload, the monthly allocation is used up and **Halt call analysis** is set. Ask an administrator to check [Organisation Configuration](../settings-config/organisation-configuration.md).
7. If the file plays locally but still fails to upload, try a different browser, and check that your internet connection is stable.
8. If it still fails, contact support with the filename.

A single call that appears to upload but never shows up in the Interactions list is the same issue as an upload not appearing generally. See [Processing Issues](#processing-issues) below.

---

### Bulk Upload

**Problem:** Bulk upload fails or returns errors on the metadata CSV.

**Cause:** Column names in the CSV do not match the expected template, the CSV was saved in Excel's **CSV UTF-8** format, or some files listed in the CSV are missing from the ZIP.

**Solution:**
1. Download the metadata CSV template from the upload page and use it as your starting point. Keep the column headings exactly as they are. Vela finds each column by its heading, so a renamed column is not read.
2. In Microsoft Excel, use **Save As** and choose **CSV (Comma delimited)**, not **CSV UTF-8 (Comma delimited)**. The UTF-8 option adds a hidden character before the first heading, so Vela cannot find the `filename` column and rejects the file with `CSV file does not contain 'filename' header`. {/* Verified 2026-10-01 by running vela-data's csv-parser 3.2.0 (unchunk/route.js, dev-hold): a byte-order mark makes the first header read as \uFEFFfilename, so headers.includes('filename') fails. Not yet confirmed with a live upload. */}
3. Verify that every filename listed in the `filename` column (including the file extension) is present in the ZIP archive.
4. Confirm that `agent_name` values correspond to agent names in Vela. Matching is case-insensitive, but it matches on the agent's **name**. A username or email such as `john.smith` does not match `John Smith`.
5. Check the spelling of `department` and `team` values. These are also matched case-insensitively. A name Vela does not recognise creates a new agent, team, or department within your access level, so a typo files calls under a new agent, team, or department rather than failing.
6. If the CSV is still rejected, contact support with the error message.

---

**Problem:** Bulk upload succeeds but some calls fail to process and do not appear.

**Cause:** Individual files in the batch may have format issues, or their metadata rows contained errors. Or, where **Halt call analysis** is set, the monthly allocation ran out partway through the batch, and the rest were skipped.

**Solution:**
1. Check which calls from the batch appear in the Interactions list, and identify which are missing.
2. Check the summary email. It counts any files skipped because the monthly allocation ran out. If any were, ask an administrator to check [Organisation Configuration](../settings-config/organisation-configuration.md).
3. Confirm each missing audio file is a valid WAV or MP3 that plays on your device, with a lower-case `.wav` or `.mp3` extension. Vela reads those two extensions only, so rename any file ending in `.WAV` or `.MP3`, and its `filename` in `metadata.csv`, then upload it again.
4. Check the metadata row for each missing file. A misspelt `agent_name`, `team`, or `department` files the call under a newly created agent, team, or department, so look for it under an agent you did not expect in **Agents → Agent Details**.
5. Correct the issues and re-upload only the affected files.
6. If a corrected file still does not appear, contact support with the filename and upload time.

---

**Problem:** Bulk upload times out before completing.

**Cause:** The upload connection is too slow or drops during a long transfer. A ZIP over 3 GB cannot cause this, because Vela rejects it as soon as you add it, with `file too big!`.

**Solution:**
1. Split large batches into smaller ZIP archives, so each transfer is short enough to finish before the connection drops.
2. Upload during off-peak hours (evenings or weekends) when server load is lower.
3. Use a wired internet connection rather than Wi-Fi for large uploads, as a stable connection matters more than raw speed over a long transfer.
4. Stay on the upload page while a bulk upload is in progress. Leaving the page stops the upload.
5. If a smaller ZIP on a stable connection still times out, contact support.

---

## Processing Issues

**Problem:** An uploaded call, or an upload of many, is not appearing in the Interactions list.

**Cause:** Processing time varies depending on call length, audio quality, number of speakers, and server load, so the call may still be queued or processing. A call whose date, team, or agent falls outside the list's current filters is hidden the same way.

**Solution:**
1. Allow time for processing to finish before assuming a failure. A single upload emails the address you sign in with when it is complete. A bulk upload sends a summary to users who have **New Alerts Detected** ticked under email notifications. On the [Lite](../reference/glossary.md#lite) version that setting is hidden, and the summary goes to every user.
2. Check that the Interactions list filters (date range, scope, agent) are not excluding the call you are looking for.
3. Turn **Show unsupported calls** on, at the top left of the list. Some calls processed under earlier releases are marked unsupported, and the list leaves them out by default, so a missing older call may be present but hidden. {/* VERIFIED 2026-09-21 against vela-data app/api/notifications/route.js: the flag was set by a language check, which is now hard-coded (let isEnglish = true), so the branch that sets supported = false is unreachable and no call processed on the current build is marked unsupported. Calls processed under earlier releases keep the flag, which is why the toggle still matters. */}
4. If a call has still not appeared after an unusually long time, and no notification has arrived, contact support with the filename and upload time. Say whether the same file has been uploaded before, because a repeat behaves differently from a new upload.

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
2. Check the date range selector covers the dates you expect to see data for.
3. Select **Filter** on the Dashboard and check the scope. It may be set narrower than the agents you are looking for, so widen it to the department or the organisation and see whether the figures appear.
4. If the figures still do not appear, contact support.

A Dashboard that loads slowly or leaves charts not rendering is the same issue as Vela running slowly generally. See [Browser Issues](#browser-issues) below.

---

**Problem:** Dashboard customisation changes are not saved between sessions.

**Cause:** The changes were not saved before you left the page. Saved preferences are stored against your user profile, not in your browser, so they follow you across devices and browsers, and clearing browser data does not reset them.

**Solution:**
1. Customise the Dashboard again, and select **Save Changes** before you leave the page. Closing the modal any other way discards your selection.
2. If your saved layout still does not appear after signing in again, contact support.

---

## Redaction and Access Issues

**Problem:** Names, numbers, or other details in a transcript are replaced with placeholders.

**Cause:** Your organisation has redaction turned on, so transcripts show placeholders for everyone, administrators included, until someone with access reveals them. Vela masks the entity types your administrator has configured.

**Solution:**
1. Open the interaction and select **Request Redacted Access**. Your request goes to an administrator.
2. An administrator approves or declines the request, and you are notified of the outcome. An approval lasts 24 hours for that interaction.
3. If you need standing access rather than per-interaction access, ask an administrator to enable **View Redactions** on your account in **Settings → Users**. {/* UNVERIFIED: the standing grant is never read on vela-fly. See the marker in access-control.md. Raised as a product bug. */}

Administrators reveal unmasked content with **Review Redacted Info** and do not need to request access.

See [Access Requests](../settings-config/access-requests-audits.md).

---

**Problem:** An access request was sent, and nothing has happened.

**Cause:** Requests wait for an administrator to act on them. The only prompt they get is the notification raised when the request was made.

**Solution:**
1. Ask an administrator to check **Settings → Requests**. Requests sit there until approved or declined.
2. Where the request is urgent, ask directly rather than waiting. An administrator can already see the unmasked content and can tell you what you need.
3. Where you need this often, standing **View Redactions** is the better answer than repeated requests. {/* UNVERIFIED: standing grant never read on vela-fly. See access-control.md. */}

---

**Problem:** A transcript still shows masked text after **View Redactions** was granted.

{/* UNVERIFIED: on vela-fly the standing View Redactions grant is never read (see access-control.md), so for a non-administrator the steps below may not reveal anything. Step 4, an access request for the interaction, is the route that works. Raised as a product bug. */}

**Cause:** Once redaction is configured, masking is what everyone sees by default, administrators included. The unmasked version is revealed on demand rather than shown automatically.

**Solution:**
1. Open the interaction and select **Review Redacted Info** to reveal the unmasked content.
2. Where the control is absent, reload the page or reopen the interaction.
3. Confirm the permission was set on your account in **Settings → Users**, rather than granted for one interaction only.
4. If the control is still absent, request access for the interaction and contact **support@botlhale.ai**.

---

**Problem:** Something that should have been masked appears in a transcript.

**Cause:** Only the entity types your administrator has configured are masked, so anything outside that list passes through. Spoken detail that the transcript records in an unusual form can also be missed.

**Solution:**
1. Check which entity types are ticked under **Redactable Entities** in **Settings → Organisations → This Org**, and add the missing one. See [Organisation Configuration](../settings-config/organisation-configuration.md).
2. Enabling a type takes effect at once on every interaction, old and new. Reopen the interaction to see it masked.
3. Report anything that should have been caught by an enabled type to **support@botlhale.ai**, with the interaction and the entity type, so the detection can be improved.

:::caution Treat an exposure as an incident
Personal information appearing where it should not is a data protection matter, not only a product fault. Tell whoever is accountable for data protection at your organisation, rather than handling it as a support ticket alone.
:::

---

## Audio Playback Issues

**Problem:** Audio does not play in the interaction detail view.

**Cause:** The browser may be blocking audio for the Vela site, or the correct audio output device may not be selected.

**Solution:**
1. Check that your browser has permission to play audio. In Chrome or Edge, look for the speaker or lock icon in the address bar and confirm audio is not blocked for the Vela site.
2. Check your system audio output: ensure the correct device is selected and the volume is not muted.
3. If the issue only affects one specific call, the original file may be corrupted. Try playing a different call to determine whether the problem affects every call or only that file.
4. Try a different supported browser to rule out a browser-specific issue.
5. If no audio plays on any call, and everyone at your organisation is affected, ask your IT department to confirm the storage domains under [Firewall and Proxy](../getting-started/system-requirements.md#firewall-and-proxy) are reachable. Vela streams recordings from file storage, so a firewall that blocks those domains leaves the rest of Vela working while audio fails.

---

**Problem:** Selecting a timestamp in the transcript does not jump to the correct point in the audio.

**Cause:** The audio file had not finished loading when the timestamp was selected, or the page did not display correctly.

**Solution:**
1. Wait until the audio has fully loaded before selecting timestamps.
2. Refresh the page and try again.
3. If the problem persists across page refreshes, try a different supported browser.
4. If it still jumps to the wrong point, contact support with the interaction and the timestamp.

---

**Problem:** Audio plays but the quality is very poor or difficult to understand.

**Cause:** The original recording was captured at a low sample rate or bitrate, or there was significant background noise in the source call.

**Solution:**
1. Improve the quality of your call recordings at source. Vela cannot improve on the source recording, so a clearer recording gives clearer playback and more accurate transcription.

---

## Browser Issues

**Problem:** Vela does not load, shows a connection error such as `ERR_NAME_NOT_RESOLVED`, or displays a blank screen.

**Cause:** Something between your browser and Vela is blocking it, usually a script blocker or a network rule.

**Solution:**
1. Disable browser extensions and reload. Ad blockers and script blockers are the usual cause, so turn them off one at a time to find which.
2. Confirm your browser is one Vela supports, and that JavaScript is on. See [System Requirements](../getting-started/system-requirements.md).
3. Clear the cache and cookies, then reload.
4. Where everyone at your organisation is affected at once, it is a network rule rather than a browser. Ask your IT department to confirm the domains under [Firewall and Proxy](../getting-started/system-requirements.md#firewall-and-proxy) are reachable. Call audio, images, and the metadata CSV template load from the storage domains on that list, so blocking them breaks playback and downloads.

---

**Problem:** Vela runs slowly, or charts take a long time to load.

**Cause:** The view is returning more data than it needs to. A wide date range across a whole organisation is the usual reason, rather than the browser or the device.

**Solution:**
1. Narrow the date range, and use **Filter** to cover less of the organisation. For example, use "This Week" instead of a multi-month range.
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
