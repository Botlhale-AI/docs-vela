import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../../css/custom.module.css';
import logo from '/static/img/VELA.png';

const FeatureList = [
  {
    title: 'Dashboard',
    link: '/docs/dashboard',
    description: 'Monitor performance and spot trends before they become problems.',
    icon: 'fas fa-tachometer-alt',
  },
  {
    title: 'Interactions - Calls',
    link: '/docs/calls',
    description: 'Review call recordings and identify customer pain points automatically.',
    icon: 'fas fa-phone',
  },
  {
    title: 'Interactions - Chats',
    link: '/docs/chats',
    description: 'Review chats and identify customer pain points automatically.',
    icon: 'fas fa-phone',
  },
  {
    title: 'Smart Detector',
    link: '/docs/smart-detector-overview',
    description: 'Automate issue detection and catch complaints before they escalate.',
    icon: 'fas fa-search',
  },
  {
    title: 'Agents',
    link: '/docs/agents',
    description: 'Improve agent performance with AI-powered insights.',
    icon: 'fas fa-user-tie',
  },
  {
    title: 'Reports',
    link: '/docs/reports',
    description: 'Generate custom reports to share insights with stakeholders.',
    icon: 'fas fa-chart-line',
  },
  {
    title: 'Notifications',
    link: '/docs/notifications',
    description: 'Configure alerts to stay informed about important events.',
    icon: 'fas fa-bell',
  },
  {
    title: 'Settings',
    link: '/docs/settings',
    description: 'Manage your platform settings and organization configuration.',
    icon: 'fas fa-cogs',
  },
  {
    title: 'Data Management',
    link: '/docs/data-upload',
    description: 'Upload call and chat recordings to start analyzing your data.',
    icon: 'fas fa-upload',
  }
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
              <b>Call Centre Analytics Tool</b>: Monitor 100% of your calls regardless of the languages spoken.
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
