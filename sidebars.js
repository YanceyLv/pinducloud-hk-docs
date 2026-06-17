// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    {
      type: 'category',
      label: '快速开始',
      collapsed: false,
      items: ['intro', 'quickstart', 'auth'],
    },
    {
      type: 'category',
      label: 'AI 接口',
      collapsed: false,
      items: ['chat-completions', 'images', 'models'],
    },
    {
      type: 'category',
      label: '平台能力',
      collapsed: false,
      items: ['errors', 'pricing', 'rate-limits'],
    },
  ],
};

export default sidebars;
