import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vela - Docs',
  tagline: "Documentation",
  url: 'https://docs-vela.botlhale.ai',
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
      // The 2026 rebuild replaced the flat pages and the /docs/user-guides/
      // tree. These keep every address that was live before it from 404ing.
      // Checked against the live sitemap on 2026-08-28.
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          // Flat pages that moved into sections
          { from: '/docs/Calls', to: '/docs/features/quality-assurance-tools' },
          { from: '/docs/chats', to: '/docs/features/quality-assurance-tools' },
          { from: '/docs/Dashboard', to: '/docs/features/monitor-agent-performance' },
          { from: '/docs/agents', to: '/docs/features/manage-agents-and-teams' },
          { from: '/docs/reports', to: '/docs/features/custom-reporting' },
          { from: '/docs/notifications', to: '/docs/features/notifications' },
          { from: '/docs/settings', to: '/docs/settings-config/access-control' },
          { from: '/docs/api', to: '/docs/advanced/api-documentation' },
          { from: '/docs/faq', to: '/docs/support/faq' },
          { from: '/docs/support/release-notes', to: '/docs/release-notes' },
          { from: '/docs/navigation-guide', to: '/docs/getting-started/platform-overview' },
          { from: '/docs/compression_method', to: '/docs/data-upload' },

          // Quick starts
          { from: '/docs/quick-start', to: '/docs/getting-started/quick-start/team-lead-quick-start' },
          { from: '/docs/agent-quick-start', to: '/docs/getting-started/platform-overview' },
          {
            from: '/docs/getting-started/quick-start/agent-quick-start-nested',
            to: '/docs/getting-started/platform-overview',
          },

          // Former feature pages
          { from: '/docs/features/ai-analysis-transcription', to: '/docs/features/quality-assurance-tools' },
          { from: '/docs/features/bulk-operations', to: '/docs/data-upload' },
          { from: '/docs/features/multi-language-support', to: '/docs/getting-started/platform-overview' },
          { from: '/docs/advanced/advanced-workflows', to: '/docs/advanced/best-practices' },
          { from: '/docs/advanced/system-integrations', to: '/docs/advanced/api-documentation' },

          // The team lead user guides
          { from: '/docs/user-guides/team-lead/agent-management', to: '/docs/features/manage-agents-and-teams' },
          { from: '/docs/user-guides/team-lead/dashboard-analytics', to: '/docs/features/monitor-agent-performance' },
          { from: '/docs/user-guides/team-lead/coaching-training', to: '/docs/features/monitor-agent-performance' },
          { from: '/docs/user-guides/team-lead/interactions-management', to: '/docs/features/quality-assurance-tools' },
          { from: '/docs/user-guides/team-lead/reports-insights', to: '/docs/features/custom-reporting' },
          { from: '/docs/user-guides/team-lead/settings-administration', to: '/docs/settings-config/access-control' },
          { from: '/docs/user-guides/team-lead/smart-detector', to: '/docs/smart-detector-overview' },

          // The agent user guides. That content now lives in the Coaching
          // Portal documentation, which is a separate site, so these land on
          // the overview page that routes an agent to it.
          { from: '/docs/user-guides/agent/personal-dashboard', to: '/docs/getting-started/platform-overview' },
          { from: '/docs/user-guides/agent/my-interactions', to: '/docs/getting-started/platform-overview' },
          { from: '/docs/user-guides/agent/training-portal', to: '/docs/getting-started/platform-overview' },
          { from: '/docs/user-guides/agent/awards-recognition', to: '/docs/getting-started/platform-overview' },
        ],
      },
    ],
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