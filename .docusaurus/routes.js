import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug', 'df0'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/config',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/config', '420'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/content',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/content', '7f5'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/globalData', 'ca2'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/metadata', '4a3'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/registry', 'a89'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/__docusaurus/debug/routes', 'ef2'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog', '0f8'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog/archive',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog/archive', 'e69'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog/authors',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog/authors', 'f36'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog/authors/yueji',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog/authors/yueji', 'b3d'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog/tags',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog/tags', '035'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog/tags/Sumstats',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog/tags/Sumstats', '419'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/blog/welcome',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/blog/welcome', '66b'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/markdown-page',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/markdown-page', '7fa'),
    exact: true
  },
  {
    path: '/gwas-sumstats-harmoniser-documentation/',
    component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/', 'a5b'),
    routes: [
      {
        path: '/gwas-sumstats-harmoniser-documentation/',
        component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/', 'cbc'),
        routes: [
          {
            path: '/gwas-sumstats-harmoniser-documentation/',
            component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/', '703'),
            routes: [
              {
                path: '/gwas-sumstats-harmoniser-documentation/category/introduction',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/category/introduction', '5f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/category/output-explanation',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/category/output-explanation', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/category/reference-guides',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/category/reference-guides', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/category/tutorial',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/category/tutorial', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Explanation/output-file-explanation',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Explanation/output-file-explanation', 'db5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Explanation/output-folder-structure',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Explanation/output-folder-structure', '1c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/how-to-guide',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/how-to-guide', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Introduction/Genome-Build-Mapping',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Introduction/Genome-Build-Mapping', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Introduction/Harmonising-the-variants',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Introduction/Harmonising-the-variants', 'bb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Introduction/Orientation-of-palindromic-variants',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Introduction/Orientation-of-palindromic-variants', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Introduction/Quality-control',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Introduction/Quality-control', '91c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Limitations',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Limitations', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Reference-guide/Hm_code',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Reference-guide/Hm_code', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Reference-guide/Usefult-link',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Reference-guide/Usefult-link', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Tutorials/Getting-Start',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Tutorials/Getting-Start', '614'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Tutorials/Preparing-Input-Files',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Tutorials/Preparing-Input-Files', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Tutorials/Preparing-Reference-Files',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Tutorials/Preparing-Reference-Files', 'ba9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Tutorials/Preparing-the-Executor',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Tutorials/Preparing-the-Executor', '664'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Tutorials/Running-the-Pipeline',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Tutorials/Running-the-Pipeline', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/Tutorials/Running-the-Pipeline-batch',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/Tutorials/Running-the-Pipeline-batch', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas-sumstats-harmoniser-documentation/',
                component: ComponentCreator('/gwas-sumstats-harmoniser-documentation/', 'e5b'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
