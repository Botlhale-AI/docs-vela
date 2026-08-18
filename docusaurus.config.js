import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vela - Docs',
  tagline: "Documentation",
  url: 'https://docs-vela.botlhale.xyz', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  favicon: 'img/favicon.ico',
  organizationName: 'Botlhale-AI', 
  projectName: 'docs-vela', 
  deploymentBranch: 'gh-pages', 
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: '/',
        },

        // The blog is off. It only ever held the four sample posts that ship
        // with create-docusaurus, it was never linked from the navbar or the
        // footer, and nothing in src/ referenced it. Set this back to
        // `{ showReadingTime: true }` and add a blog/ directory to turn it on.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.module.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
        docsRouteBasePath: ['docs'],
        ignoreFiles: [],
        indexPages: true,
        docsDir: 'docs',
        indexDocs: true,
        // There is no blog to index. Leaving this on makes the build warn that
        // blogDir does not exist. See the `blog: false` note in the preset.
        indexBlog: false,
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
        { to: '/docs/release-notes', label: 'Release Notes', position: 'right' },
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
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
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
  },

  scripts: [
    {
      src: '/js/themeToggle.js',
      async: true,
    },
    {
      src: '/js/hideHashLinks.js',
      async: true,
    },
  ],
};

export default config;