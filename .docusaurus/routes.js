import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0aa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '850'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd45'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '55d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '25f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '65d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7f9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '846'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '7ff'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'f72'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd73'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '537'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '1df'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'be8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e5f'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '94d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4e0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e4b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '62a'),
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
    component: ComponentCreator('/', '6ba'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
