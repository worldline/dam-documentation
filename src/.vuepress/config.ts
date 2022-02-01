import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { WebpackBundlerOptions } from '@vuepress/bundler-webpack/lib/types'

export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
  // site config
  base: "/dam-documentation/",
  lang: 'en-US',
  title: 'DAM documentation',
  description: 'Discover what Worldline\'s asset management platform based on the blockchain has to offer',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }], //favicon
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5AB5D3' }]
  ],
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo-light.png',
    logoDark: '/logo-dark.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'API doc', link: '/api' }
    ],
    sidebar: [
      { text: '🔤 Lexicon', link: '/lexicon' },
      { text: '📢 Overview', link: '/overview' },
      { text: '📱 Mobile application', link: '/mobile-app' },
      { text: '💻 Back Office', link:'/backoffice/', children: [
        { text: 'Login', link: '/backoffice/login' },
        { text: 'My profile', link: '/backoffice/profile' },
        { text: 'Acceptance network enrolment', link: '/backoffice/acceptance-network-enrolment' },
        { text: 'Dashboard', link: '/backoffice/dashboard' },
        { text: 'Assets management', link: '/backoffice/asset-management' },
        { text: 'Oganisation management', link: '/backoffice/organisation-management' },
        { text: 'Wallet management', link: '/backoffice/wallet-management' },
        { text: 'Transaction management', link: '/backoffice/transaction-management' },
        { text: 'Audit trail', link: '/backoffice/audit-trail' }
      ]},
      { text: '✔️ General rules', collapsible: false, children: [
        { text: 'Password', link: '/general-rules/#password' },
        { text: 'Phone number', link: '/general-rules/#phone-number' }
      ]},
      { text: '📜 Annexes', link: '/annexes' }
    ],
    editLink: false,
    lastUpdated: false,
    contributors: false
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ]
  ],
  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    chainWebpack: config => {
      config.module
        .rule('yaml')
        .test(/\.ya?ml?$/)
        .use('json-loader')
        .loader('json-loader')
        .end()
        .use('yaml-loader')
        .loader('yaml-loader')
    }
  }
})
