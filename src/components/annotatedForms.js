import React from 'react';
import Hotspots from './Hotspots';

import scorecardScopeImg from '@site/img/screenshots/scorecared1.png';
import scorecardQuestionImg from '@site/img/screenshots/scorecard2.png';
import searchTopImg from '@site/img/screenshots/smart1.png';
import searchBottomImg from '@site/img/screenshots/smart2.png';
import singleUploadImg from '@site/img/screenshots/data_upload/upload2.png';

/*
 * The annotated form screenshots, one component each, so the pin text lives
 * in a single place and both the guide and the quick start show the same
 * thing. Import from '@site/src/components/annotatedForms'.
 */

export function ScorecardScopeForm() {
  return (
    <Hotspots
      src={scorecardScopeImg}
      alt="The top of the Agents Scorecard Create tab, with the Create tab selected and the Scorecard Scope, Interactions, and Historical Search settings above the question list"
      points={[
        { x: 29.2, y: 34.3, title: 'Scorecard Scope', body: 'Which parts of the organisation the scorecard applies to. An interaction is scored against the scorecards covering the agent who handled it.' },
        { x: 44.9, y: 52.2, title: 'Interactions', body: 'All, Calls, or Chats. This covers the whole set, so one scorecard cannot mix call-only and chat-only questions.' },
        { x: 42.8, y: 68.3, title: 'Historical Search', body: 'Runs the scorecard against interactions already in Vela. Choose All historical calls or a Specific date range. It cannot be added later.' },
      ]}
    />
  );
}

export function ScorecardQuestionForm() {
  return (
    <Hotspots
      src={scorecardQuestionImg}
      alt="The Agent Scorecard question form, with the Question, Category, Expected Outcome, Weight, Search Status, Search Type, Apply To, Auto-Fail, Compliance Question, and Always Applicable fields"
      points={[
        { x: 26.1, y: 16.4, title: 'Question', body: 'The behaviour being assessed, phrased so it can be answered yes or no.' },
        { x: 26.1, y: 35.7, title: 'Category', body: "A grouping label such as Opening, Compliance, or Closing. Categories are what produce an agent's strengths and weaknesses, and where Coaching is enabled they also decide which course an agent picks up." },
        { x: 70.3, y: 35.6, title: 'Expected Outcome', body: 'Which answer counts as a pass. Set it to match how you phrased the question.' },
        { x: 88.6, y: 35.6, title: 'Weight', body: 'How much this question contributes, relative to the others. The range is 1 to 5.' },
        { x: 28.1, y: 47.3, title: 'Search Status', body: 'Whether the question runs against incoming interactions.' },
        { x: 42.2, y: 47.3, title: 'Search Type', body: 'Whether the AI answers it, or a reviewer does it manually. A manual question stays N/A until someone sets an outcome.' },
        { x: 57.8, y: 47.3, title: 'Apply To', body: 'Inbound calls, outbound calls, or all calls.' },
        { x: 71.4, y: 47.3, title: 'Auto-Fail', body: 'Failing this question takes the whole interaction to 0.0%, with the score earned on the other questions shown in brackets beside it.' },
        { x: 91.7, y: 47.3, title: 'Compliance Question', body: 'Counts this question towards the Compliance Score instead of the Quality Score. Every question counts towards the Overall Score either way.' },
        { x: 30.2, y: 58.8, title: 'Always Applicable', body: 'Whether the AI may answer N/A, or only Yes and No. Set to Yes, a question that did not apply costs the agent a No.' },
      ]}
    />
  );
}

export function SmartSearchFormTop() {
  return (
    <Hotspots
      src={searchTopImg}
      alt="The top of the New Smart Search form: Smart Search Title, Search Status, Description, Search Scope, and Link To Search"
      points={[
        { x: 15, y: 33.5, title: 'Smart Search Title', body: 'A short name for the search. It shows in the search list and on every alert it raises.' },
        { x: 52, y: 33.5, title: 'Search Status', body: 'Active starts the search matching once you save. Inactive saves the definition without running it.' },
        { x: 15, y: 45, title: 'Description', body: 'What the search looks for. Vela reads this when matching, so it shapes the results.' },
        { x: 15, y: 61.5, title: 'Search Scope', body: 'How far the search reaches. The options depend on your own access level.' },
        { x: 15, y: 79, title: 'Link To Search', body: 'Ties this search to another, so a match needs both. Covered under More Search Options.' },
      ]}
    />
  );
}

export function SmartSearchFormBottom() {
  return (
    <Hotspots
      src={searchBottomImg}
      alt="The rest of the New Smart Search form: Example Phrases, Search Filter, Historical Search, Notifications, Knowledge Base, and the Create Smart Search button"
      points={[
        { x: 15, y: 27, title: 'Example Phrases', body: 'Select Add and enter each phrase a person might use.' },
        { x: 15, y: 40, title: 'Search Filter', body: 'Narrows the match to specific intents, keywords, topics, pain points, or agents. Select Add Filter.' },
        { x: 15, y: 59, title: 'Historical Search', body: 'Runs the search against interactions uploaded before you created it. Set at creation, and cannot be added later.' },
        { x: 15, y: 68, title: 'Notifications', body: 'Alerts you each time a new match is detected. This one you can change later.' },
        { x: 15, y: 78, title: 'Knowledge Base', body: 'Judges matches against one of your own documents rather than general knowledge.' },
        { x: 83, y: 88, title: 'Create Smart Search', body: 'Saves the search. It starts matching new interactions straight away.' },
      ]}
    />
  );
}

export function SingleCallUploadForm() {
  return (
    <Hotspots
      src={singleUploadImg}
      alt="The Single Upload tab of the call Uploads page, with the Single Upload and Bulk Upload tabs above the Agent, Direction, and Tags fields, the drag-and-drop area, and the Upload button"
      points={[
        { x: 61.5, y: 20.7, title: 'Single Upload and Bulk Upload', body: 'Single Upload takes one recording. Bulk Upload takes many at once, as a ZIP archive.' },
        { x: 17.2, y: 34.4, title: 'Agent', body: 'The agent who handled the call, and the only required field. The list is filtered by your access level, Team and Department fill in from your choice, and + Create an agent adds one without leaving the page.' },
        { x: 20.8, y: 44.6, title: 'Direction', body: 'Inbound or outbound. Optional.' },
        { x: 17.7, y: 52.8, title: 'Tags', body: 'Labels such as complaint, sales, or billing. Optional, and worth setting, since you can filter and report on them afterwards.' },
        { x: 54.7, y: 69.9, title: 'The upload area', body: 'Drag the recording in, or select browse your device. WAV or MP3, up to 1 GB.' },
      ]}
    />
  );
}
