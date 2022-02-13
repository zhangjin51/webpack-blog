module.exports = {
  title: '感谢你来到我的博客',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ],
    // sidebar: [
    //   ['/', 'Home'],
    //   ['/guide/', 'Explicit link text']
    // ],
    sidebar: [{
      title: 'Group 1', // 必要的
      // path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: [
        '/'
      ]
    }, {
      title: 'Group 2',
      children: ['guide/'],
      initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    }],
    // sidebar: {
    //   '/about/': [
    //     '',
    //     'aaa'
    //   ],
    //   '/': [
    //     ''
    //   ]
    // },
  }
}