var ExposeConfig = {
  extraMenus: [
    {
      groupTitle: '拓展', // 大标题文本 （如需支持多语言，请在zh-CN.js、zh-TW.js、en-US.js中配置多语言文本）
      groupLinks: [
        {
          menuTitle: 'TG交流群', // 标题文本
          menuIcon: 'gauge', // 图标：https://phosphoricons.com/ 自选
          menuPath: 'https://t.me/paopaodog_group', // 链接地址
          needSubscribe: false, // true：需要订阅后才能查看 false：无需订阅即可查看
          isExternal: true // true：打开新窗口 false：内嵌
        },
        {
          menuTitle: 'IOS共享账号',
          menuIcon: 'book-open-text',
          menuPath: 'https://aunlock.laogoubi.net/s/087a3e7613ba9b02910d1e370fac8f5a',
          needSubscribe: true,
          isExternal: false
        }
      ]
    }
  ]
}
