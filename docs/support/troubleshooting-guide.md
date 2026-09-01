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

## Start Here

Find your symptom, rather than reading from the top.

| What you are seeing | Where to look |
| :--- | :--- |
| Cannot sign in, or signed out mid-session | [Login and Authentication](#login-and-authentication-issues) |
| An upload made in Vela failed or never arrived | [Upload Issues](#upload-issues) |
| An upload sent from your own system failed or never arrived | [Integration and API](#integration-and-api-issues) |
| A **401**, a token problem, or an integration that stopped working | [Integration and API](#integration-and-api-issues) |
| Interactions arrive with the wrong agent, team, or date | [Integration and API](#integration-and-api-issues) |
| Interactions uploaded but still not listed | [Processing Issues](#processing-issues) |
| An interaction listed but with no score or no analysis | [Processing Issues](#processing-issues) |
| The Dashboard is empty, slow, or forgets your changes | [Dashboard and Performance](#dashboard-and-performance-issues) |
| A score looks wrong, or reads `0.0%` with a figure in brackets | [Scorecard and Scoring](#scorecard-and-scoring-issues) |
| A Smart Search matches nothing, matches too much, or cannot be created | [Smart Search and Alerts](#smart-search-and-alert-issues) |
| Names or numbers replaced with placeholders in a transcript | [Redaction and Access](#redaction-and-access-issues) |
| Audio does not play, or jumps to the wrong point | [Audio Playback](#audio-playback-issues) |
| A blank screen, or Vela running slowly | [Browser Issues](#browser-issues) |

Two symptoms are worth naming, because both look like normal behaviour:

- **An upload returns success and nothing appears.** The interaction reached somewhere other than your Vela organisation. See [Integration and API](#integration-and-api-issues).
- **A score of `0.0%` with a higher figure in brackets.** The interaction auto-failed. The bracketed figure is what it earned otherwise. See [Scorecard and Scoring](#scorecard-and-scoring-issues).

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

## Integration and API Issues

These cover interactions sent from your own systems. For uploads made through Vela, see [Upload Issues](#upload-issues) above.

---

**Problem:** The upload returns a success response, but the interaction never appears under **Interactions**.

**Cause:** The request reached an organisation other than your Vela one. This happens where an organisation has more than one identifier, or where the request went to the development environment instead of production.

**Solution:**
1. Check that `org_id` is your **Vela** organisation identifier. Where more than one has been issued to you, only the Vela one connects an upload to your Vela account.
2. Check the base URL is `https://api.botlhale.tech`. Interactions sent to `https://dev.botlhale.tech` do not appear in your organisation, and recovering them means someone re-uploading them by hand.
3. Confirm the response carried an upload URL, and that your second request actually posted the file to it. The first request only asks for credentials.
4. Where all three are right, contact support with the file key and the time of the upload.

---

**Problem:** Uploads are rejected with **400** `Allocation exceeded`.

**Cause:** The organisation has used its monthly allocated duration, or has no allocation set at all. A newly created organisation that has not yet been activated returns the same error.

**Solution:**
1. Check the allocation with `GET /organisations/vela/{OrgID}`, comparing `currentDurationUse` against `monthlyAllocatedDuration`. See [API Reference](../advanced/api-documentation.md#checking-your-organisation).
2. Where the allocation reads zero, the organisation has not been activated. Your Account Manager activates it and sets the allocation.
3. Where it is genuinely used up, filter out recordings too short to evaluate before your next batch, so the remaining allocation goes on interactions worth scoring.

---

**Problem:** An integration that has been running for months suddenly returns **401**.

**Cause:** The access token expired. Access tokens are short-lived, and an integration that fetches one at startup and keeps using it stops working once it lapses.

**Solution:**
1. Exchange your refresh token for a new access token at `POST /auth/generate`. Refresh tokens last far longer.
2. Build the refresh into the integration rather than doing it by hand: refresh on a schedule, or whenever a request returns **401**. See [API Reference](../advanced/api-documentation.md#step-2-get-an-access-token).
3. Where the refresh token itself has stopped working, sign in again at `POST /auth/login` to get a new pair.

---

**Problem:** Generating a refresh token fails, or an old one keeps being used.

**Cause:** Each user can hold at most three active refresh tokens.

**Solution:**
1. Revoke one you no longer use at `POST /auth/revoke_token`, sending the account email and the token `id`.
2. The `id` comes back from `/auth/login` when the token is issued. Record it then, because it is the only way to revoke that token yourself.
3. Where the ids have been lost, support can clear the tokens for you.

---

**Problem:** Calls arrive in Vela, but every one is dated the day it was uploaded.

**Cause:** `date_of_call` could not be read, so Vela fell back to the upload time. The usual reason is a format that is close but not exact, such as `15/01/2025 14:30` in place of `15/01/2025, 14:30:00`.

**Solution:**
1. Send `DD/MM/YYYY, HH:mm:ss`, with the comma and the seconds, for example `15/01/2025, 14:30:00`.
2. Times are read as **Africa/Johannesburg**. Convert before sending where your system records another timezone, or every interaction lands at the wrong hour.
3. Set `validate_metadata` while you are building. Vela then returns a **400** naming the field it could not use, instead of accepting the upload and filling in a default.

---

**Problem:** Interactions arrive, but the agent, team, or department is missing or wrong.

**Cause:** Vela matches these fields against records that already exist, and drops the ones it cannot match. The upload still succeeds, so the problem surfaces only when you open the interaction and look.

**Solution:**
1. Check the values against the records in Vela. `agent_name` matches case-insensitively on the name as it appears on the agent record, not a username such as `john.smith`.
2. Create the team first. An upload never creates one, and an unmatched team also stops a new agent being created from `agent_name`.
3. Set `validate_metadata` so unmatched values are refused with `Team not found`, `Department not found`, or `Could not find agent with the provided metadata` rather than silently dropped.
4. Check the first few interactions of any new integration under **Interactions**, and confirm the agent, team, direction, and tags landed as you intended.

---

**Problem:** Chats are analysed, but average response time is missing or looks too low.

**Cause:** The `sender` value on the messages was not recognised. Vela matches `agent`, `user`, and `bot` exactly, in lower case.

**Solution:**
1. Send `sender` in lower case. A capitalised `Agent` still stores the message and shows it in the transcript, so the upload looks correct, while Vela leaves that reply out of the response time measure.
2. Check that customer messages are sent as `user`, since response time is measured from each `user` message to the reply that follows it.
3. Re-upload the affected chats once the casing is corrected. Response time is calculated when the chat is processed.

---

**Problem:** Requests that worked before now fail to connect at all.

**Cause:** The API base URL changed. Requests to the previous host no longer reach Vela.

**Solution:**
1. Use `https://api.botlhale.tech`.
2. Allow `*.botlhale.tech` through your firewall. See [System Requirements](../getting-started/system-requirements.md).
3. Where your integration was built by a third party, the base URL usually sits in a configuration file rather than in the code, so the change may not need a release.

---

## Processing Issues

**Problem:** Uploaded calls are not appearing in the Interactions list.

**Cause:** Processing time varies depending on call length, audio quality, number of speakers, and server load. The call may still be queued or processing.

**Solution:**
1. Allow time for processing to finish before assuming a failure. Vela emails you when it is complete, if you have email notifications enabled.
2. Check that the Interactions list filters (date range, scope, agent) are not excluding the call you are looking for.
3. Turn **Show unsupported calls** on, at the top left of the list. A call whose language Vela could not transcribe is marked unsupported and left out of the list by default, so it is present but hidden.
4. If a call has still not appeared after an unusually long time, and no notification has arrived, contact support with the filename and upload time.

:::note Two people upload the same call and wait different lengths of time
Processing is queued rather than instant, and the queue is shared, so the wait depends on what is ahead of a call rather than on who uploaded it. Two uploads of the same recording minutes apart can finish an hour apart.

That is expected. What is not expected is a call that never arrives at all. Report those with the filename and the upload time rather than waiting longer. Say whether the same file has been uploaded before, because a repeat behaves differently from a new upload.
:::

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
3. Check the scope filter. It may be set narrower than the agents you are looking for, so widen it to the department or the organisation and see whether the figures appear.

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

**Cause:** The AI scores against your organisation's Agent Scorecard, reading the transcript alone. Its answer can differ from yours where:

- The agent said the right thing in another language, or in words the AI did not match.
- The agent said the right thing using a local expression.
- The call was resolved in a way the transcript alone does not show.

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

**Cause:** Your organisation has reached the number of **Active** searches its plan allows, which is five unless your plan sets another number. No message explains this on the page.

**Solution:**
1. Check your allowance under **Settings → Organisations → This Org**, where **show package details** lists the **Smart Search Limit**.
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

**Problem:** An access request was sent, and nothing has happened.

**Cause:** Requests wait for an administrator to act on them. The only prompt they get is the notification raised when the request was made.

**Solution:**
1. Ask an administrator to check **Settings → Access Requests**. Requests sit there until approved or declined.
2. Where the request is urgent, ask directly rather than waiting. An administrator can already see the unmasked content and can tell you what you need.
3. Where you need this often, standing **View Redactions** is the better answer than repeated requests.

---

**Problem:** A transcript still shows masked text after **View Redactions** was granted.

**Cause:** Masking is what everyone sees by default, administrators included. The unmasked version is revealed on demand rather than shown automatically.

**Solution:**
1. Open the interaction and select **Review Redacted Info** to reveal the unmasked content.
2. Where the control is absent, sign out and back in. Access changes are read when your session starts.
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
1. Narrow the date range, and use **View By** or **Filter** to cover less of the organisation.
2. Where a single interaction is slow to open, check its length. A long recording carries a long transcript and takes longer to render.
3. Where every view is slow but other sites are fine, clear the cache and try a second supported browser to confirm it is Vela rather than the machine.
4. Where the same narrow view is still slow, contact support with the page, the date range, and the scope you had set.

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
