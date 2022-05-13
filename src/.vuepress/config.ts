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
      { text: '📢 Overview', collapsible: false, children: [
        { text: 'Introduction', link: '/overview/#introduction' },
        { text: 'Meet the DAM Platform', link: '/overview/#meet-the-dam-platform' },
        { text: 'Features and Benefits ', link: '/overview/#features-and-benefits ' }
      ]},      { text: '📱 Mobile application', link: '/mobile-app' },
      { text: '💻 Back Office', collapsible: false, children: [
        { text: 'Login', link: '/backofficetest/#login' },
        { text: 'My Profile', link: '/backofficetest/#my-profile' },
        { text: 'Acceptance Network Enrolment', link: '/backofficetest/#acceptance-network-enrolment' },
        { text: 'Dashboard', link: '/backofficetest/#dashboard' },
        { text: 'Assets Management', link: '/backofficetest/#assets-management' },
        { text: 'Assets rates', link: '/backofficetest/#assets-rates-management' },
        { text: 'Loyalty Programs', link: '/backofficetest/#loyalty-programs' },
        { text: 'Organisation Management', link: '/backofficetest/#organisation-management' },
        { text: 'Establishments', link: '/backofficetest/#establishments' },
        { text: 'Wallet Management', link: '/backofficetest/#wallet-management' },
        { text: 'KYC Management', link: '/backofficetest/#kyc-management' },
        { text: 'Transactions Management', link: '/backofficetest/#transactions-management' },
        { text: 'Cash-in', link: '/backofficetest/#cash-in' },
        { text: 'Bills', link: '/backofficetest/#bills' },
        { text: 'Blockchain Transactions', link: '/backofficetest/#blockchain-transactions' },
        { text: 'Rules on Transactions', link: '/backofficetest/#rules-on-transactions' },
        { text: 'User And EndUser Management', link: '/backofficetest/#user-and-enduser-management' },
        { text: 'Users', link: '/backofficetest/#users' },
        { text: 'EndUsers', link: '/backofficetest/#endusers' },
        { text: 'Permissions And Rights', link: '/backofficetest/#permissions-and-rights' },
        { text: 'Cash-out', link: '/backofficetest/#cash-out' },
        { text: 'Audit Trail', link: '/backofficetest/#audit-trail' },
        { text: 'Instance Administration', link: '/backofficetest/#instance-administration' }
      ]},
      { text: '✔️ General rules', collapsible: false, children: [
        { text: 'Password Policy', link: '/general-rules/#password-policy' },
        { text: 'Phone number', link: '/general-rules/#phone-number-management-rules' },
        { text: 'Pagination', link: '/general-rules/#pagination' },
        { text: 'Available currencies', link: '/general-rules/#available-currencies' },
        { text: 'Multi-tab browser', link: '/general-rules/#multi-tab-browser' },
        { text: 'Communication language', link: '/general-rules/#communication-language' },
        { text: 'Blocked countries', link: '/general-rules/#blocked-countries' }
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
