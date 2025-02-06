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
    icon: 'fas fa-tachometer-alt',
  },
  {
    title: 'Calls',
    link: '/docs/Calls',
    description: 'Learn how to review call recordings and hone in on specific calls.',
    icon: 'fas fa-phone',
  },
  {
    title: 'Smart Detector',
    link: '/docs/Smart Detector',
    description: 'Learn how to build and manage complex search queries.',
    icon: 'fas fa-search',
  },
  {
    title: 'Agents',
    link: '/docs/Agents',
    description: 'Learn how to review and export insights specific to agent performance.',
    icon: 'fas fa-user-tie',
  },
  {
    title: 'Reports',
    link: '/docs/Reports',
    description: 'Learn how to create and view custom reports.',
    icon: 'fas fa-chart-line',
  },
  {
    title: 'Notifications',
    link: '/docs/Notifications',
    description: 'Learn how to manage your platform and alert preferences.',
    icon: 'fas fa-bell',
  },
  {
    title: 'Settings',
    link: '/docs/Settings',
    description: 'Learn how to manage your platform settings.',
    icon: 'fas fa-cogs',
  },
  {
    title: 'Data Upload',
    link: '/docs/Data Upload',
    description: 'Learn how to upload call recordings.',
    icon: 'fas fa-upload',
  },
  {
    title: 'APIs',
    link: '/docs/Data Upload',
    description: 'Learn more about our APIS.',
    icon: 'fas fa-code',
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

function Feature({ title, link, description, icon }) {
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
        <div className={styles.featureHeader}>
          <i className={`${icon} ${styles.featureIcon}`}></i>
          <h3 className={clsx(styles.featureTitle)}>{title}</h3>
        </div>
        <p className={clsx(styles.featureDescription)}>{description}</p>
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
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Vela Documentation</h1>
            <p className={styles.heroSubtitle}>
              <b>Call Centre Analytics Tool</b>: Monitor 100% of your calls regardless of the languages spoken
              <br />
            </p>
            <div className={styles.getStarted} onClick={scrollToFeatures}>
              Get Started
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img src={logo} alt="Vela Logo" className={styles.heroLogo} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className={styles.videosSection}>
        <Heading as="h2" className={styles.sectionHeading}>
        Get Started: Tutorial Videos
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