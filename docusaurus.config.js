import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vela - Docs',
  tagline: "Documentation",
  url: 'https://docs-vela.botlhale.xyz', 
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Botlhale-AI', 
  projectName: 'docs-vela', 
  deploymentBranch: 'gh-pages', 
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: '/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Botlhale AI Logo',
        src: '/img/VELA.png',
      },
      items: [
        { to: '/', label: 'Home', position: 'right' },
        { to: '/docs/release-notes', label: 'Release Notes', position: 'right' }, // Add this line
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    head: [
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        },
      },
    ],
  }
 
};

export default config;