import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from '../../css/custom.module.css';
import logo from '/static/img/VELA.png';

const FeatureList = [
  {
    title: 'Agent Performance',
    link: '/docs/features/monitor-agent-performance',
    description: 'Monitor performance and spot trends before they become problems.',
    icon: 'fas fa-tachometer-alt',
  },
  {
    title: 'Quality Assurance',
    link: '/docs/features/quality-assurance-tools',
    description: 'Review calls and chats, score them consistently, and turn findings into coaching.',
    icon: 'fas fa-clipboard-check',
  },
  {
    title: 'Smart Questions',
    link: '/docs/smart-questions-guide',
    description: 'Ask questions of your interactions without affecting agent scores.',
    icon: 'fas fa-circle-question',
  },
  {
    title: 'Smart Search',
    link: '/docs/smart-search-guide',
    description: 'Automate issue detection and catch complaints before they escalate.',
    icon: 'fas fa-search',
  },
  {
    title: 'Knowledge Base',
    link: '/docs/knowledge-base-guide',
    description: 'Give the AI your own policies and procedures to score against.',
    icon: 'fas fa-book',
  },
  {
    title: 'Reports',
    link: '/docs/features/custom-reporting',
    description: 'Generate custom reports to share insights with stakeholders.',
    icon: 'fas fa-chart-line',
  },
  {
    title: 'Notifications',
    link: '/docs/features/notifications',
    description: 'Configure alerts to stay informed about important events.',
    icon: 'fas fa-bell',
  },
  {
    title: 'Settings',
    link: '/docs/settings-config/access-control',
    description: 'Manage your platform settings and organisation configuration.',
    icon: 'fas fa-cogs',
  },
  {
    title: 'Data Upload',
    link: '/docs/data-upload',
    description: 'Upload call and chat recordings to start analysing your data.',
    icon: 'fas fa-upload',
  },
  {
    title: 'Troubleshooting',
    link: '/docs/support/troubleshooting-guide',
    description: 'Step-by-step solutions to common issues.',
    icon: 'fas fa-wrench',
  },
  {
    title: 'FAQ',
    link: '/docs/support/faq',
    description: 'Find quick answers to common questions about Vela.',
    icon: 'fas fa-question-circle',
  },
  {
    title: 'Coaching Portal',
    link: 'https://docs-coaching.botlhale.xyz',
    description: 'Manage teams, create courses, and track agent progress.',
    icon: 'fas fa-graduation-cap',
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
    title: '4. Agents Scorecard',
    videoId: 'xIpKvq829Ms',
  },
];

function Feature({ title, link, description, icon }) {
  const handleClick = () => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className={clsx('col col--4')}>
      <div
        className={clsx(
          styles.featureCard,
          'card shadow--md',
          'padding--lg',
          'margin-bottom--lg'
        )}
        onClick={handleClick}
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
            <div className={styles.heroButtons}>
              <Link to="/docs/getting-started/quick-start/team-lead-quick-start" className={styles.quickStart}>
                Get Started
              </Link>
              {/* <div className={styles.getStarted} onClick={scrollToFeatures}>
              Explore Features
              </div> */}
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img src={logo} alt="Vela Logo" className={styles.heroLogo} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className={styles.featuresSection}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section> */}

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
