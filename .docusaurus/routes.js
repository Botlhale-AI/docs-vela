import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '348'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c4f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '356'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1b4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '342'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '28f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '28d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e7f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c86'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '723'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'b20'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '331'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b62'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '8e6'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b3b'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd84'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '967'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a6e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2a9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'daa'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1f3'),
            routes: [
              {
                path: '/docs/Agents',
                component: ComponentCreator('/docs/Agents', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Calls',
                component: ComponentCreator('/docs/Calls', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Dashboard',
                component: ComponentCreator('/docs/Dashboard', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Upload',
                component: ComponentCreator('/docs/Data Upload', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Notifications',
                component: ComponentCreator('/docs/Notifications', 'b23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/release-notes',
                component: ComponentCreator('/docs/release-notes', '7c0'),
                exact: true
              },
              {
                path: '/docs/Reports',
                component: ComponentCreator('/docs/Reports', 'd6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Settings',
                component: ComponentCreator('/docs/Settings', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Smart Detector',
                component: ComponentCreator('/docs/Smart Detector', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'eb5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
