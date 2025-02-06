---
sidebar_position: 2
---

# Calls

The Vela call screen serves as the primary interface for in-depth analysis of individual customer interactions. It presents a comprehensive table log of all processed calls, organized by metadata points that facilitate efficient navigation and exploration.

![alt text](calls.png)

Each entry within the log table includes: 
- **Call ID**: Unique identifier for the call occurrence. 
- **Date**: Precise timestamp of the call occurrence. 
- **Agent ID**: Unique identifiers for the agent involved in the call occurrence. 
- **Duration**: Total length of the call occurrence. 
- **Silent Time**: Total length of time during which both parties (agent or customer) are silent in the call occurrence. 
- **Issues**: Number of issues detected by the Smart Search in the call occurrence. For more information, see the [Smart Detector](/docs/Smart%20Detector) section of this documentation. 
- **Team**: Name of the team to which the call was originally routed.
- **Call Tags**: These are the tags associated with a call. You can customise these as you like.
- **Detailed View**: Clicking on a call entry opens a dedicated page presenting a comprehensive view of the call occurrence. This view will be discussed in the next subsection.

The Vela call screen facilitates efficient navigation and manipulation of your contact center data. 

Users can:  
- **Sort**: Order entries by any table column, except the Detailed View column, for streamlined identification of specific call segments. 
- **Filter**: Apply targeted criteria based on various parameters like duration, silent time, issues, date, agent ID, and team, enabling focused analysis on relevant interactions. 
- **Export**: Download the entire table as a CSV file for further analysis in external data visualization or statistical software tools. 

## Call Tags

![alt text](call-tags.png)

## Detailed Call View 

The Vela detailed call screen provides a comprehensive interface for in-depth analysis of individual customer interactions. It goes beyond a simple call log by presenting a multi-faceted view of the conversation. 

This screen integrates several key elements: 
- **Full Transcript**: A textual representation of the entire conversation. 
- **Audio Playback**: An audio box allowing you to replay the call recording. 
- **Smart Search**: This customizable, automated intelligence section leverages advanced natural language processing and machine learning algorithms to generate a concise summary, identify prominent keywords, categorize key issues and customer intents, gauge overall sentiment, and even assess agent performance metrics like adherence to scripts and resolution effectiveness. For more information around setting up this feature, see the [Smart Search](/docs/Smart%20Search) section of this documentation.

![alt text](detailed-calls.png)

### Transcript 

The Vela transcript facilitates deeper analysis and collaboration through several key features:

- **Commenting**: Team members can annotate specific sections of the transcript by leaving comments visible to others. Clicking the **comment** button allows you to add your annotation and tag relevant team members.  
- **Language Translation**: For non-English call recordings, the transcript offers translation capabilities. Toggle between the original language and English with a dedicated button, allowing you to understand the conversation regardless of the spoken language. 
- **Utterance Details**: The vertical menu found in each speech bubble in the transcript reveals additional information specific to the utterance, including: 

    - **Sentiment**: The perceived emotional tone of the speaker. 
    - **Intent**: The inferred underlying goal or purpose of the speaker's statement. 
    - **Confidence**: The level of certainty associated with the model's interpretation of the utterance, expressed as a percentage for transparency. 
    - **Language**: The specific language used in the utterance, identified by automatic language detection.

### Audio Playback 

The audio playback section provides the following convenient controls for reviewing individual customer interactions.

- **Play/Pause**: Initiate or halt playback of the call recording using the designated button. 
- **Playback Speed Modulation**: Adjusting the playback speed of the call recording. This functionality is accessible through the vertical menu adjacent to the volume control. 
- **Download Capability**: Download the call recording to your local device. Click the **download** button, also located in the vertical menu. Select your preferred file format and download location when prompted.

### Smart Search 

The **Smart Search** section harnesses advanced natural language processing (NLP) and machine learning algorithms to dissect individual calls.

This automated analysis generates valuable insights, presented right on the screen: 
- **Summary:** Provides a concise overview of the call's key points, highlighting the main topics discussed and potential outcomes. 
- **Keywords**: Identifies prominent terms and phrases used throughout the conversation, revealing recurring themes and areas of customer focus.  
- **Issues**: Presents the results of automated issue detection within the call.
- **Intents**: Classifies the customer's overall goals and desired outcomes within the call, based on their expressed needs and the conversation flow. 
- **Sentiment**: Gauges the emotional tone of the agent and the customer throughout the interaction, measuring the prevalence of positive, negative, or neutral sentiment. 
- **Agent Score**: Evaluates the agent's performance based on pre-defined criteria like adherence to scripts.

## Contact us

:::info
We are here to help! Please [contact us](mailto:support@botlhale.ai) with any questions.
:::