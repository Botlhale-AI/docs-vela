import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import logo from '/static/img/VELA.png';

const FeatureList = [
  {
    title: 'Dashboard',
    link: '/docs/Dashboard',
    description: 'Learn how to view and customise your call insights.',
  },
  {
    title: 'Calls',
    link: '/docs/Calls',
    description: 'Learn how to review call recordings and hone in on specific calls.',
  },
  {
    title: 'Smart Search',
    link: '/docs/Smart Search',
    description: 'Learn how to build and manage complex search queries.',
  },
  {
    title: 'Agents',
    link: '/docs/Agents',
    description: 'Learn how to review and export insights specific to agent performance.',
  },
  {
    title: 'Reports',
    link: '/docs/Reports',
    description: 'Learn how to create and view custom reports.',
  },
  {
    title: 'Notifications',
    link: '/docs/Notifications',
    description: 'Learn how to manage your platform and alert preferences.',
  },
  {
    title: 'Settings',
    link: '/docs/Settings',
    description: 'Learn how to manage your platform settings.',
  },
  {
    title: 'Data Upload',
    link: '/docs/Data Upload',
    description: 'Learn how to upload call recordings.',
  },
];

const ytVideos = [
  {
    title: '1. Introduction to Vela',
    videoId: 'WJtiehO9TFg',
  },
  {
    title: '2. Set up your Dashboard',
    videoId: 'vmt7ObY0raw',
  },
  {
    title: '3. Set Up Smart Search',
    videoId: 'JnAdtNkXYtc',
  },
  {
    title: '4. Set Up Agent Search',
    videoId: 'kx__FITaBWw',
  },
  {
    title: '5. Agent Checklist',
    videoId: 'xIpKvq829Ms',
  },
];

function Feature({ title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div
        className={clsx(
          styles.featureCard,
          'card shadow--md',
          'padding--lg',
          'margin-bottom--lg'
        )}
        onClick={() => (window.location.href = link)}
        style={{ cursor: 'pointer' }}
      >
        <h3 className={clsx(styles.featureTitle)}>{title}</h3>
        <p className={clsx(styles.featureDescription)}>{description}</p>
        <a
          href={link}
          className={clsx(styles.featureLink, 'button button--link')}
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}

function YoutubeVideo({ title, videoId }) {
  return (
    <div className={clsx('col col--6')}>
      <div
        className={clsx(
          styles.videoCard,
          'card shadow--md',
          'padding--lg',
          'margin-bottom--lg'
        )}
      >
        <iframe
          title={title}
          width="100%"
          height="250px"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          className={styles.videoFrame}
        ></iframe>
        <Heading as="p" className={clsx(styles.videoTitle)}>
          {title}
        </Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const scrollToFeatures = () => {
    document.querySelector(`.${styles.featuresSection}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src={logo} alt="Vela Logo" className={styles.heroLogo} />
          <h1 className={styles.heroTitle}>Vela Documentation</h1>
          <p className={styles.heroSubtitle}>
            Your multilingual call centre speech analytics platform for actionable insights.
          </p>
          <div className={styles.heroButtons}>
            <button onClick={scrollToFeatures} className={clsx(styles.ctaButton)}>
              Get Started →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <Heading as="h2" className={styles.sectionHeading}>
          Explore Features
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className={styles.videosSection}>
        <Heading as="h2" className={styles.sectionHeading}>
          Tutorial Videos
        </Heading>
        <div className="row">
          {ytVideos.map((props, idx) => (
            <YoutubeVideo key={idx} {...props} />
          ))}
        </div>
      </section>
    </div>
  );
}
