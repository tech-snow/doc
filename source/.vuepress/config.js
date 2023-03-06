module.exports = {
    title: 'Document',
    description: 'Document',
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
