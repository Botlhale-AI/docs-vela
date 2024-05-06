---
sidebar_position: 8
---

# Data Upload

The Vela platform offers two methods for uploading your call data, depending on your current storage solution:

1. **Automatic Upload via FTP:**
    - **Suitable for:** Users who store call data on an FTP server. 
    - **Benefits:** Automated updates, no manual intervention required.

    **Requirements:**

    - An FTP server where your call data resides. 
    - Shared access credentials provided to Botlhale AI during onboarding.

    **Process:**
    1. During onboarding, share access credentials for your FTP server with Botlhale AI. 
    2. Botlhale AI establishes a connection and synchronises your call data automatically. 
    3. Call data appears in the `Calls` screen on the Vela platform.

2. **Manual Batch Upload**:
    - **Suitable for**: Users who do not store call data on an FTP server. 
    - **Benefits**: Flexible uploading for various data sources.

    **Process:**
    1. Navigate to the `Calls` screen on the Vela platform.
    2. Click the `Batch Upload` button. 
    3. Select and upload a zip file containing your call data. 
    4. Click `Upload` to initiate the process.
    5. Upon successful upload, your call data appears in the `Calls` screen table.

:::note TECHNICAL NOTES:
- Both methods support uploading various call data formats, including CSV, TSV, and JSON. 
- The batch upload function accepts zip files with a maximum size of 3 GB. 
- For larger datasets, consider contacting Botlhale AI support for alternative upload options. Ensure your call data adheres to the specified format and schema requirements for successful processing.
:::

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::
