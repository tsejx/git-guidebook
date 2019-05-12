module.exports = {
  base: '/git-guidebook/',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    [
      'keyword',
      {
        content: 'git,gitflow,git push,git pull,Git',
      },
    ],
  ],
  description: '代码版本管理工具知识图谱',
  title: 'Git-Guidebook',
  themeConfig: {
    repo: 'tsejx/Git-Guidebook',
    logo: '/favicon.png',
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: '主页', link: '/' },
      { text: 'JavaScript', link: 'https://tsejx.github.io/JavaScript-Guidebook/'}
    ],
    displayAllHeaders: true,
    sidebarDepth: 1,
    sidebar: [
        'setup-and-config',
        'getting-and-creating-projects',
        'basic-snapshotting',
        'branching-and-merging',
        'sharing-and-updating-projects',
        'inspection-and-comparison',
        // 'debugging',
        'patching',
        'commit-guide-standard',
        'recommend',
    ],
    lastUpdated: '最近更新时间',
  },
  //   vueThemes: {
  //     links: {
  //       github: 'https://github.com/tsejx/Git-Guidebook',
  //     },
  //   },
  plugins: [
    // [
    //   '@vuepress/pwa',
    //   {
    //     serviceWorker: {
    //       updatePopup: {
    //         message: '新内容已准备就绪',
    //         buttonText: '刷新',
    //       },
    //     },
    //   },
    // ],
    // '@vuepress/back-to-top',
  ],
};
