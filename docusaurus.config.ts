import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Open Infrastructure Services LLC',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openinfrastructure.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'openinfrastructure', // Usually your GitHub org/user name.
  // projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'services',
          sidebarPath: './sidebarServices.ts',
          routeBasePath: 'services'
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/bgimage.css'
          ]
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'technical',
        path: 'technical',
        routeBasePath: 'technical',
        sidebarPath: './sidebarTechnical.ts',
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'OIS',
      logo: {
        alt: 'Open Infrastructure Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/about', label: "About", position: 'left'},
        {to: '/services', label: "Services", position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/technical', label: 'Technical', position: 'left'},
        {href: 'https://holos.run', label: 'Holos', position: 'left'},
        {to: '/contact', label: "Contact", position: 'left'},
        {
          href: 'https://github.com/openinfrastructure',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Open Infrastructure Services, LLC.`,
    },
    prism: {
      // Enable additional languages for syntax highlighting here
      // https://prismjs.com/#supported-languages
      additionalLanguages: ['python', 'puppet', 'diff'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
