import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f86'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '959'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '24f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7ec'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '535'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '5ef'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ded'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'fc9'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '0b6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '201'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '290'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '3d2'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ccd'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '506'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'df4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '543'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aab'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ef8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3af'),
            routes: [
              {
                path: '/docs/Agents',
                component: ComponentCreator('/docs/Agents', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Calls',
                component: ComponentCreator('/docs/Calls', '612'),
                exact: true
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
                path: '/docs/Smart Search',
                component: ComponentCreator('/docs/Smart Search', '5ca'),
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
    component: ComponentCreator('/', 'ee1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
