const {
  description
} = require('../../package');
const flow = require('./configure/flow');
const contributors = require('./configure/contributors');

module.exports = {
  title: 'cocomat',
  slogan: '在线代理平台，支持免代理访问测试环境',
  description: description,
  head: [
    [
      'link',
      { rel: 'icon', href: 'favicon.png' }
    ]
  ],
  themeConfig: {
    previewLink: 'https://demo-edu.cocos.com/cocomat/index.html', // 预览页链接，等部署好 cocomat 的 demo site 后把地址回填到这里
    title: 'cocomat',
    logo: '/favicon.png',
    slogan: 'CocosCreator 公用组件库',
    repo: '',
    issuesLink: '',
    editLinks: false,
    lastUpdated: true,
    sidebarDepth: 2,
    docBtn: {
      text: '快速开始 →',
      link: '/guide/'
    },
    flow,
    contributors,
    footer: {
      lisence: 'MIT',
      copyright: '',
      repoLink: '',
    },
    friendLink: [
      {
        name: '腾讯开源',
        href: 'https://opensource.tencent.com/',
      },
    ],
    sidebar: {
      '/guide/': [{
        title: '概述',
        collapsable: false,
        children: [
          'Usage',
        ]
      }, {
        title: 'UI 组件',
        collapsable: false,
        children: [
          'CCMSDFLabel',
          'CCMToast',
          "CCMBackBtn",
          "CCMFitWidget",
          "CCMPicker",
          "CCMCategoryView",
          "CCMVideo",
          "CCMHanziWrite"
        ]
      }, {
        title: '资源组件',
        collapsable: false,
        children: [
          'CCMResLoader',
          'CCMResLeakChecker'
        ]
      }, {
        title: '工具组件',
        collapsable: false,
        children: [
          'CCMSceneManager',
          'CCMAudioManager',
          'CCMCapture',
          "CCMUtils",
          "CCMImageLoader",
          "CCMSpineLoader",
          "CCMBinding"
        ]
      }],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}