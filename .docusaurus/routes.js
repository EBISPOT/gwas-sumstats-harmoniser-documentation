import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug', '347'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug/config',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug/config', '910'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug/content',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug/content', '627'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug/globalData', 'ee0'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug/metadata', 'bc1'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug/registry', '6dd'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/gwas_harmoniser_documentation/__docusaurus/debug/routes', 'ff5'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog', '959'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog/archive',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog/archive', '420'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog/authors',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog/authors', 'a0c'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog/authors/yueji',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog/authors/yueji', 'c4c'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog/tags',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog/tags', '0c5'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog/tags/Sumstats',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog/tags/Sumstats', '8cf'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/blog/welcome',
    component: ComponentCreator('/gwas_harmoniser_documentation/blog/welcome', '4b2'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/markdown-page',
    component: ComponentCreator('/gwas_harmoniser_documentation/markdown-page', '19d'),
    exact: true
  },
  {
    path: '/gwas_harmoniser_documentation/',
    component: ComponentCreator('/gwas_harmoniser_documentation/', '8f6'),
    routes: [
      {
        path: '/gwas_harmoniser_documentation/',
        component: ComponentCreator('/gwas_harmoniser_documentation/', '6b6'),
        routes: [
          {
            path: '/gwas_harmoniser_documentation/',
            component: ComponentCreator('/gwas_harmoniser_documentation/', 'b95'),
            routes: [
              {
                path: '/gwas_harmoniser_documentation/category/introduction',
                component: ComponentCreator('/gwas_harmoniser_documentation/category/introduction', '097'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/category/output-explanation',
                component: ComponentCreator('/gwas_harmoniser_documentation/category/output-explanation', '4a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/category/reference-guides',
                component: ComponentCreator('/gwas_harmoniser_documentation/category/reference-guides', '1c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/category/tutorial',
                component: ComponentCreator('/gwas_harmoniser_documentation/category/tutorial', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Explanation/output-file-explanation',
                component: ComponentCreator('/gwas_harmoniser_documentation/Explanation/output-file-explanation', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Explanation/output-folder-structure',
                component: ComponentCreator('/gwas_harmoniser_documentation/Explanation/output-folder-structure', '564'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/how-to-guide',
                component: ComponentCreator('/gwas_harmoniser_documentation/how-to-guide', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Introduction/Genome-Build-Mapping',
                component: ComponentCreator('/gwas_harmoniser_documentation/Introduction/Genome-Build-Mapping', '60a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Introduction/Harmonising-the-variants',
                component: ComponentCreator('/gwas_harmoniser_documentation/Introduction/Harmonising-the-variants', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Introduction/Orientation-of-palindromic-variants',
                component: ComponentCreator('/gwas_harmoniser_documentation/Introduction/Orientation-of-palindromic-variants', 'ddf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Introduction/Quality-control',
                component: ComponentCreator('/gwas_harmoniser_documentation/Introduction/Quality-control', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Reference-guide/Hm_code',
                component: ComponentCreator('/gwas_harmoniser_documentation/Reference-guide/Hm_code', 'ef0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Reference-guide/Usefult-link',
                component: ComponentCreator('/gwas_harmoniser_documentation/Reference-guide/Usefult-link', 'db5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Tutorials/Getting-Start',
                component: ComponentCreator('/gwas_harmoniser_documentation/Tutorials/Getting-Start', 'f82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Tutorials/Preparing-Input-Files',
                component: ComponentCreator('/gwas_harmoniser_documentation/Tutorials/Preparing-Input-Files', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Tutorials/Preparing-Reference-Files',
                component: ComponentCreator('/gwas_harmoniser_documentation/Tutorials/Preparing-Reference-Files', '8c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Tutorials/Preparing-the-Executor',
                component: ComponentCreator('/gwas_harmoniser_documentation/Tutorials/Preparing-the-Executor', '17d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Tutorials/Running-the-Pipeline',
                component: ComponentCreator('/gwas_harmoniser_documentation/Tutorials/Running-the-Pipeline', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/Tutorials/Running-the-Pipeline-batch',
                component: ComponentCreator('/gwas_harmoniser_documentation/Tutorials/Running-the-Pipeline-batch', '891'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gwas_harmoniser_documentation/',
                component: ComponentCreator('/gwas_harmoniser_documentation/', '0c0'),
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
