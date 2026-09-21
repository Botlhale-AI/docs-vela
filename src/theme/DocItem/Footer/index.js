import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

/**
 * Wraps the stock footer (tags, edit link, last-updated line) and adds a
 * feedback line beneath it. A mail link with the page title in the subject
 * works without a backend. Vote buttons with nowhere to send a vote would be
 * a control that does nothing, which CLAUDE.md lists as a defect class, so
 * there are none.
 */
export default function FooterWrapper(props) {
  const {metadata} = useDoc();
  const subject = encodeURIComponent(`Documentation feedback: ${metadata.title}`);
  return (
    <>
      <Footer {...props} />
      <div className={styles.feedback}>
        <div className={styles.feedbackTitle}>Was this page helpful?</div>
        <div className={styles.feedbackMessage}>
          Tell support what is missing or wrong:{' '}
          <a href={`mailto:support@botlhale.ai?subject=${subject}`}>support@botlhale.ai</a>
        </div>
      </div>
    </>
  );
}
