---
id: system-requirements
title: System Requirements
sidebar_label: System Requirements
sidebar_position: 0
---

# System Requirements

This page outlines the technical requirements and specifications needed to use Vela effectively. Ensure your setup meets these requirements for optimal performance and functionality.

---

## Browser Requirements

### Supported Browsers

Vela is a web-based platform that works best with modern browsers. We officially support:

| Browser | Minimum Version | Recommended Version | Performance Notes |
|---------|----------------|---------------------|-------------------|
| **Google Chrome** | 90+ | Latest stable | Best performance (recommended) |
| **Mozilla Firefox** | 88+ | Latest stable | Excellent performance |
| **Safari** | 14+ | Latest stable | Good performance on macOS/iOS |
| **Microsoft Edge** | 90+ | Latest stable | Excellent performance |

:::tip Best Performance
For the best experience, we recommend using **Google Chrome** or **Microsoft Edge** (Chromium-based). These browsers provide the fastest processing speeds and most reliable performance, especially when working with large datasets or bulk uploads.
:::

### Browser Features Required

Vela requires the following browser features to be enabled:

- **JavaScript** - Must be enabled (essential for platform functionality)
- **Cookies** - Required for authentication and session management
- **Local Storage** - Used for user preferences and temporary data
- **WebSockets** - For real-time notifications and updates
- **Audio Playback** - Required for call review functionality

:::warning Incognito/Private Mode
While Vela works in incognito or private browsing modes, some features may be limited. For full functionality, use standard browsing mode.
:::

### Browser Extensions

**Compatible:**
- Most password managers (LastPass, 1Password, Bitwarden)
- Accessibility tools and screen readers
- Standard security extensions

**May Cause Issues:**
- Aggressive ad blockers (may interfere with platform features)
- Script blockers (will prevent platform from functioning)
- Network monitoring tools (may slow performance)

If you experience issues, try disabling extensions temporarily to identify conflicts.

---

## Network Requirements

### Internet Connection

**Minimum Requirements:**
- **Download speed:** 5 Mbps
- **Upload speed:** 2 Mbps (10 Mbps recommended for bulk uploads)
- **Latency:** < 100ms
- **Connection type:** Stable broadband or fiber connection

**Recommended for Optimal Performance:**
- **Download speed:** 25 Mbps or higher
- **Upload speed:** 10 Mbps or higher
- **Latency:** < 50ms
- **Connection reliability:** Wired connection preferred over Wi-Fi for bulk uploads

### Bandwidth Considerations

**Typical bandwidth usage by activity:**

| Activity | Approximate Bandwidth |
|----------|----------------------|
| Dashboard viewing | 0.5 - 1 MB per session |
| Interaction review (audio playback) | 0.5 - 2 MB per minute |
| Single call upload (5 min call) | 5 - 15 MB |
| Bulk upload (1 GB) | 1 GB + overhead |
| Report generation | 1 - 5 MB per report |

:::info Bulk Upload Planning
When uploading large batches of calls (approaching the 3GB limit), ensure you have sufficient bandwidth and time allocated. A 3GB upload on a 10 Mbps connection will take approximately 40 minutes of upload time (plus processing time after upload completes).
:::

### Firewall and Security

**Required outbound access:**
- HTTPS (port 443) to Vela platform domains
- WebSocket connections for real-time features
- Access to CDN domains for static assets

**Recommended whitelist domains:**

- *.botlhale.ai
- *.cloudflare.com (for CDN services)

If your organisation uses a restrictive firewall or proxy, contact your IT department to ensure these domains are accessible.

---

## File Format Requirements

### Audio Files (Calls)

**Supported Formats:**

| Format | Extension | Recommended Use | Notes |
|--------|-----------|----------------|-------|
| **WAV** | `.wav` | High-quality recordings | Uncompressed, larger file sizes |
| **MP3** | `.mp3` | Standard recordings | Compressed, smaller file sizes |

**Audio Specifications:**

**Minimum Requirements:**
- **Sample rate:** 8 kHz (phone quality)
- **Bit rate:** 64 kbps
- **Channels:** Mono or Stereo
- **Duration:** No minimum or maximum (recommended: under 2 hours per file)

**Recommended Specifications:**
- **Sample rate:** 16 kHz or higher
- **Bit rate:** 128 kbps or higher
- **Channels:** Stereo (for better speaker separation)
- **Format:** WAV for highest accuracy, MP3 for efficiency

:::tip Audio Quality Impact
Higher quality audio (16 kHz+, 128 kbps+) produces more accurate transcriptions and better AI analysis, especially for multilingual content and speech recognition.
:::

**File Size Considerations:**
- **Single upload:** No strict limit, but files over 500 MB may take longer to process
- **Bulk upload:** Individual files within ZIP should be reasonable size (< 2 GB each)
- **Processing time:** Longer files take more time to process

### Chat Conversations

**Required Format:**
- **File type:** JSON (`.json`)
- **Encoding:** UTF-8
- **Structure:** Specific Vela JSON schema (see [Chat Upload Guide](/docs/user-guides/team-lead/interactions-management#chat-upload-process))

**JSON Structure Example:**
```json
[
    {
        "metadata": {
            "date": "DD/MM/YYYY, HH:mm",
            "agent": "agent@example.com",
            "interaction_id": "unique_identifier",
            "language": "en-ZA"
        },
        "messages": [
            {
                "message": "Message text here",
                "time": "DD/MM/YYYY, HH:mm",
                "sender": "agent|customer",
                "language": "en-ZA"
            }
        ]
    }
]
```
:::warning Chat Format Validation
Ensure your JSON files follow the exact structure shown above. Invalid JSON format will cause upload failures. Use a JSON validator before uploading if you encounter issues.
:::

## Bulk Upload Files

### Archive Requirements

| Specification | Requirement | Notes |
|--------------|-------------|-------|
| **Format** | ZIP (`.zip`) | Standard ZIP compression |
| **Maximum size** | 3 GB (recommended) | Larger batches may time out |
| **Contents** | Audio files + metadata.csv | All files referenced in CSV must be present |
| **Metadata format** | CSV (`.csv`) | UTF-8 encoding required |

**Metadata CSV Structure:**
```csv
filename,agent_name,team,department,direction,tags
call_001.mp3,John Smith,Sales Team,Sales,inbound,sales;product_inquiry
call_002.wav,Mary Jones,Support Team,Customer Service,outbound,follow_up;resolution
```
Required CSV Columns:

filename - Exact audio file name (including extension)
agent_name - Agent identifier (must match existing agent in system)
team - Team assignment
department - Department name
direction - "inbound" or "outbound"
tags - Semicolon-separated classification labels (optional)

:::tip Metadata Template
Download the metadata.csv template from the Vela upload interface to ensure correct formatting. This prevents common upload errors.
:::

## Agent Management Files

### Bulk Agent Import

**Format Requirements**

| Specification       | Requirement        |
|---------------------|--------------------|
| File type           | CSV (.csv)         |
| Encoding            | UTF-8              |
| Required columns    | `name`, `email`, `department`, `team` |

**CSV Example**

```csv
name,email,department,team
John Smith,john.smith@company.com,Sales,Sales Team
Mary Johnson,mary.johnson@company.com,Customer Service,Support Team
```
### Data Validation Rules

- Email addresses must be unique across the platform
- Team and department names should match existing entries (or use create option)
- No empty required fields

## Performance Specifications

### Processing Times

Processing time varies depending on call duration, audio quality, number of speakers, and server load. Longer calls take more time to process. For accurate estimates in your environment, contact support.

**Factors affecting processing time**
- Audio quality (clearer audio processes faster)  
- Number of speakers (more speakers require more analysis)  
- Background noise levels (clean audio processes faster)  
- Language complexity (some languages require more processing)  
- Server load (peak times may increase queue times)

### Bulk Upload Performance

Bulk upload and processing times depend on total file size, number of files, your upload bandwidth, and server load. Large batches should be uploaded during off-peak hours to ensure optimal processing speed.

:::warning Processing During Peak Hours
Bulk uploads initiated during **business hours (9 AM – 5 PM)** may experience longer processing times. For large batches, consider uploading during **off-peak hours** (evenings or weekends).
:::

---

## Screen Resolution & Display

### Minimum Display Requirements

**Desktop / Laptop**
- Minimum resolution: **1280 × 720** (HD)  
- Recommended: **1920 × 1080** (Full HD) or higher  
- Aspect ratio: **16:9** or **16:10**

**Tablet**
- Minimum resolution: **1024 × 768**  
- Recommended: **1280 × 800** or higher  
- Orientation: Portrait & landscape supported

**Mobile**
- Minimum resolution: **375 × 667** (iPhone SE size)  
- Recommended: **414 × 896** or larger  
- Orientation: Portrait optimised, landscape supported

**Display Recommendations**
- Prefer monitors **15" or larger** for desktop work  
- Color depth: **24-bit true color** (16.7M colors)  
- Brightness: Adjustable for comfortable extended use  
- Multiple monitors: Supported — use one for Vela, another for reference materials

:::info Dashboard Customisation
Vela's dashboard automatically adjusts layout based on screen size. Larger displays show more metrics simultaneously, while smaller screens use scrollable layouts.
:::

---

## Hardware Recommendations

### Desktop / Laptop

**Minimum**
- Processor: Dual-core 1.6 GHz or equivalent  
- RAM: 4 GB  
- Storage: Minimal (browser cache only)  
- Audio: Basic audio output for call playback

**Recommended**
- Processor: Quad-core 2.0 GHz or better  
- RAM: 8 GB+  
- Storage: SSD preferred for faster browser performance  
- Audio: Quality headphones or speakers for clear call review

### Mobile Devices

**Minimum**
- iOS: iPhone 8 or newer (iOS 14+)  
- Android: Android 8.0+  
- RAM: 2 GB  
- Storage: 500 MB free space

**Recommended**
- iOS: iPhone 11 or newer (latest iOS)  
- Android: Android 11+ with Chrome browser  
- RAM: 4 GB+  
- Storage: 2 GB free space

---

## Authentication Requirements

### Supported Methods
- **Single Sign-On (SSO)**  
  - Google OAuth (Google Workspace)  
  - Microsoft Azure AD (Enterprise AD)  
- **Traditional Authentication**  
  - Email and Password

### Password Requirements
- Minimum **8 characters**  
- At least **one letter** (a–z, A–Z)  
- At least **one number** (0–9)  
- At least **one special character** (e.g., `@`, `#`, `!`)

**Example valid passwords**
- `SecurePass123!`  
- `Vela2024@CallCenter`  
- `MyQA#System99`

:::tip Password Management
We recommend using a password manager (LastPass, 1Password, Bitwarden) to generate and store strong passwords securely.
:::

### Multi-Factor Authentication (MFA)
- Vela does not have native MFA. If your organisation uses SSO (Google or Microsoft), MFA can be enforced through your identity provider's own settings.
- Contact your IT administrator to enable MFA via Google Workspace or Microsoft Azure AD.

---

## Data Storage & Export

### Local Storage Usage
Vela uses browser local storage for:
- UI preferences and dashboard customisation  
- Temporary session data  
- Recently viewed interactions (cache)

**Storage requirements:** typically **< 50 MB per user**

:::info Clearing Browser Data
If you clear your browser cache or cookies, you'll need to log in again and may need to re-customise dashboard preferences.
:::

### Export File Formats

| Data Type | Available Formats | Use Case |
|---|---|---|
| Reports | PDF, DOCX | Presentations and analysis |

---

## Accessibility

- **Screen Reader Support:** JAWS, NVDA, VoiceOver, TalkBack  
- **Keyboard Navigation:** Full support (Tab, Enter, Space, Esc, arrow keys)  
- **Common shortcuts:**  
  - `Ctrl/Cmd + F` — Search within page  
  - `Tab` / `Shift + Tab` — Navigate forward/backward  
  - `Esc` — Close modal/dialog
- **Visual Accessibility:**  
  - Light mode and Darkmode support
  - Resizable text (browser zoom up to 200%)  
  - Clear focus indicators  

---

## Regional & Language Support

### Platform Languages
- English (primary)  

### Transcription Languages
Vela supports the 11 official South African languages: Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho (Southern Sotho), Sepedi (Northern Sotho), Setswana, siSwati, Tshivenda, and Xitsonga.

:::tip Language Accuracy
Transcription accuracy is highest when:
- Audio quality is good (minimal background noise)  
- Speakers have clear pronunciation  
- Correct language is specified during upload  
:::

### Regional Settings
- Date and time formats adapt automatically based on user location (configurable in preferences)  
- Timezone-aware handling for scheduled reports and timestamps  
- Locale-specific number and currency formats supported

---

## Security Requirements

### Secure Connection
- HTTPS only (TLS 1.2+) for all network traffic  
- Valid SSL certificate checks enforced  
- Session cookies flagged `Secure` and `HttpOnly`

### Data Protection
- Encryption in transit and at rest  
- Data residency options (store data in specified country/region)  
- Compliance posture includes GDPR, POPIA, and other regional regulations

### User Device Security
- Keep browsers up to date  
- Use reputable antivirus/anti-malware software  
- Avoid public Wi-Fi for sensitive operations  
- Lock devices when unattended

---

## Troubleshooting Common Issues

### Browser Issues
**Problem: Platform not loading**
- Clear browser cache and cookies  
- Disable conflicting browser extensions  
- Try a different supported browser (Chrome, Edge, Firefox)  
- Check internet connection stability

**Problem: Slow performance**
- Close unnecessary browser tabs  
- Clear cache  
- Reduce dashboard date range or scope

### Upload Issues
**Problem: File upload failing**
- Verify file format (WAV or MP3)  
- Ensure the file plays locally (not corrupted)  
- Check the metadata CSV matches the template and is UTF-8 encoded  
- Reduce batch size for large uploads

**Problem: Metadata errors**
- Ensure CSV column names match template exactly  
- Avoid special characters that may break parsing  
- Confirm all referenced files exist in the ZIP

### Audio Playback Issues
**Problem: Can't hear call recordings**
- Check browser audio permissions and output device  
- Verify system audio settings and volume  
- Try a different browser or device

For additional help, see the Troubleshooting Guide or contact support.

---

## Getting Help

If you have questions or encounter technical issues:

- **Email:** `support@botlhale.ai`  
<!-- - **In-app support chat:** available to logged-in users   -->

**Before contacting support, provide:**
- Browser type & version  
- Operating system details  
- Description of the issue & steps to reproduce  
- Screenshots or error messages (if available)

---

## Version Information

- **Document Version:** 2.0  
- **Last Updated:** September 2025  
- **Applies to:** Vela Platform v2.0 and above

:::info Regular Updates
System requirements and performance guidelines may change as the platform evolves. Check this page periodically for updates, especially before major browser or OS upgrades.
:::

---

## Next Steps

- [Platform Overview](../getting-started/platform-overview.md)  
- [Quick Start Guides](../getting-started/quick-start/)
