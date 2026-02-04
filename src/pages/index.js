/**
 * Home Page Component
 * Main landing page for the Docusaurus site
 * Improved by bytte AI
 */
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * Homepage header component (currently disabled)
 * Uncomment and use this component to display a hero banner at the top of the homepage
 * 
 * @returns {JSX.Element} Hero banner with title, tagline, and CTA button
 */
// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Get Started - 5min
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

/**
 * Home page component
 * Renders the main landing page with layout and features
 * 
 * @returns {JSX.Element} The home page layout with features section
 */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* Uncomment to enable homepage header */}
      {/* <HomepageHeader /> */}
      
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
