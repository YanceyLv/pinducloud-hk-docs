// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PinduCloud API Platform',
  tagline: 'OpenAI 兼容 API 网关',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.pinducloud.cc',
  baseUrl: '/',

  organizationName: 'pinducloud',
  projectName: 'pindu-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'PinduCloud API',
        logo: {
          alt: 'PinduCloud Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: '文档',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '快速开始',
            items: [
              {
                label: '快速接入',
                to: '/docs/quickstart',
              },
              {
                label: 'API 鉴权',
                to: '/docs/auth',
              },
            ],
          },
          {
            title: 'AI 接口',
            items: [
              {
                label: 'Chat Completions',
                to: '/docs/chat-completions',
              },
              {
                label: '图像生成',
                to: '/docs/images',
              },
              {
                label: '模型列表',
                to: '/docs/models',
              },
            ],
          },
          {
            title: '平台能力',
            items: [
              {
                label: '错误处理',
                to: '/docs/errors',
              },
              {
                label: '价格说明',
                to: '/docs/pricing',
              },
              {
                label: '限流策略',
                to: '/docs/rate-limits',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PinduCloud.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
