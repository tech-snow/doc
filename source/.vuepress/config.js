module.exports = {
    title: '科技与冰雪运动相互支撑发展数据库（科技立项）',
    description: '文档数据库',
    base: '/cookie-master-doc/',
    dest: 'docs',
    themeConfig: {
        sidebar: [
          {
            title: '奥运普及',
            path: '/olympics',
            sidebarDepth: 0,
          },
          {
            title: '场馆建设',
            path: '/venue',
          },
          {
            title: '高水平训练',
            path: '/train',
          },
          {
            title: '赛事运营',
            path: '/operate',
          },
        ],
    },
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    markdown: {
      lineNumbers: true,
    },
}
