module.exports = {
    title: 'Cookie Master Usage Document',
    description: 'Cookie Master Usage Document',
    base: '/cookie-master-doc/',
    dest: 'docs',
    themeConfig: {
        sidebar: [
          {
            title: 'Copy All Cooie',
            path: '/copy',
            sidebarDepth: 0,
          },
          {
            title: 'Flat Copy',
            path: '/flat-copy',
          },
          {
            title: 'Clear All Cookie',
            path: '/clear',
          },
          {
            title: 'Import Cookie From Clipboard',
            path: '/import',
          },
          {
            title: 'Add Cookie',
            path: '/add',
          },
          {
            title: 'Single Cookie Operate',
            path: '/single-operate',
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
