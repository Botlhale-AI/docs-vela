import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '654'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '860'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2e4'),
            routes: [
              {
                path: '/docs/Agents',
                component: ComponentCreator('/docs/Agents', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/back-up-Agents',
                component: ComponentCreator('/docs/back-up-Agents', '626'),
                exact: true
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
    component: ComponentCreator('/', 'ee1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
