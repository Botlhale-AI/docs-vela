import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dashboard',
    link: '/docs/Dashboard',
    description: (
      <>
        Learn how to view and customise your call insights.
      </>
    ),
  },
  {
    title: 'Calls',
    link: '/docs/Calls',
    description: (
      <>
        Learn how to upload call recordings and hone in on specific calls.
      </>
    ),
  },
  {
    title: ' Smart Search',
    link: '/docs/ Smart Search',
    description: (
      <>
        Learn how to build and manage complex search queries.
      </>
    ),
  },
  {
    title: 'Agents',
    link: '/docs/Agents',
    description: (
      <>
        Learn how to review and export insights specific to agent performance.
      </>
    ),
  },
  {
    title: 'Reports',
    link: '/docs/Reports',
    description: (
      <>
        Learn how to create and view custom reports.
      </>
    ),
  },
  {
    title: 'Notifications',
    link: '/docs/Notifications',
    description: (
      <>
        Learn how to manage your platform and alert preferences.
      </>
    ),
  },
  {
    title: 'Settings',
    link: '/docs/Settings',
    description: (
      <>
        Learn how to manage your platform settings.
      </>
    ),
  },
  {
    title: 'Data Upload',
    link: '/docs/Data Upload',
    description: (
      <>
        Learn how to manage your platform and alert preferences.
      </>
    ),
  },
];

const ytVideos = [
  {
    title: '1. Introduction to Vela',
    videoId: 'WJtiehO9TFg',
  },
  {
    title: '2. Navigating the Dashboard',
    videoId: 'vmt7ObY0raw',
  },
  {
    title: '3. Understanding Call Insights',
    videoId: 'JnAdtNkXYtc',
  },
  {
    title: '4. Advanced Search Features',
    videoId: 'kx__FITaBWw',
  },
  {
    title: '5. Managing Alerts and Notifications',
    videoId: 'xIpKvq829Ms',
  },
];

function Feature({ title, link, description }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div 
      className={clsx('col col--3', styles.feature, styles.border)}
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    >
      <div className={clsx(styles.content, 'text--center', 'padding-horiz--md')}>
        <h3 className={styles.title}>
          <a href={link} rel="noopener noreferrer">{title}</a>
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

function YoutubeVideo({ title, videoId }) {
  return (
    <div className={clsx('col col--3', styles.yt)}>
      <div className="padding-horiz--md">
        <iframe title={title} width="284.16px" height="159.13px" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
        <Heading as="p">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <Heading as="h2" className={styles.textheading}>Vela Documentation</Heading>
      <p className={styles.text}>Vela is a multilingual call centre speech analytics platform designed to provide comprehensive insights into customer interactions. It operates by facilitating the creation of search queries which automatically process and analyse 100% of calls conducted in the supported South African languages. This documentation suite serves as a comprehensive guide for call centre managers and analysts on utilising Vela's functionalities to extract valuable insights from customer interactions.</p>
      <section>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      <Heading as="h2" className={styles.textheading}>Vela Tutorial Videos</Heading>
      <div className="row">
        {ytVideos.map((props, idx) => (
          <YoutubeVideo key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
