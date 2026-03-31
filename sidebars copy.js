// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Quick Start Team Lead & Admin',
      collapsible: true,
      collapsed: false,
      items: ['quick-start'],
    },
    {
      type: 'category',
      label: 'Quick Start Guide for Agents',
      collapsible: true,
      collapsed: false,
      items: ['agent-quick-start'],
    },
    {
      type: 'category',
      label: 'Dashboard',
      collapsible: true,
      collapsed: true,
      items: ['Dashboard'],
    },
    {
      type: 'category',
      label: 'Interactions',
      collapsible: true,
      collapsed: true,
      items: ['Calls'],
    },
    {
      type: 'category',
      label: 'Interactions - Chats',
      collapsible: true,
      collapsed: true,
      items: ['Chats'],
    },
    {
      type: 'category',
      label: 'Agents',
      collapsible: true,
      collapsed: true,
      items: ['Agents'],
    },
    {
      type: 'category',
      label: 'Notifications',
      collapsible: true,
      collapsed: true,
      items: ['Notifications'],
    },
    {
      type: 'category',
      label: 'Reports',
      collapsible: true,
      collapsed: true,
      items: ['Reports'],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsible: true,
      collapsed: true,
      items: ['Settings'],
    },
    {
      type: 'category',
      label: 'Smart Detector',
      collapsible: true,
      collapsed: true,
      items: [
        'smart-detector-overview',
        'smart-search-guide',
        'agent-scorecard-guide',
        'knowledge-base-guide',
      ],
    },
    {
      type: 'category',
      label: 'Data Management',
      collapsible: true,
      collapsed: true,
      items: ['data-upload', 'compression_method'],
    },
    {
      type: 'link',
      label: 'API & Integration',
      href: 'https://docs-apis.botlhale.xyz',
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsible: true,
      collapsed: true,
      items: ['faq'],
    },

  ],
};

export default sidebars;
