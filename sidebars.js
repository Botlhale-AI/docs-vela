// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: ['quick-start'],
    },
    {
      type: 'category',
      label: 'Dashboard',
      collapsible: true,
      collapsed: true,
      items: ['dashboard'],
    },
    {
      type: 'category',
      label: 'Interactions - Calls',
      collapsible: true,
      collapsed: true,
      items: ['calls'],
    },
    {
      type: 'category',
      label: 'Interactions - Chats',
      collapsible: true,
      collapsed: true,
      items: ['chats'],
    },
    {
      type: 'category',
      label: 'Agents',
      collapsible: true,
      collapsed: true,
      items: ['agents'],
    },
    {
      type: 'category',
      label: 'Notifications',
      collapsible: true,
      collapsed: true,
      items: ['notifications'],
    },
    {
      type: 'category',
      label: 'Reports',
      collapsible: true,
      collapsed: true,
      items: ['reports'],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsible: true,
      collapsed: true,
      items: ['settings'],
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
      items: ['data-upload'],
    },

  ],
};

export default sidebars;
