import { defineConfig, type DefaultTheme } from 'vitepress'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
export const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

export const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
export const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'Vite 3 Docs (release)',
          link: 'https://vitejs.dev'
        },
        {
          text: 'Vite 2 Docs',
          link: 'https://v2.vitejs.dev'
        }
      ]
    case 'release':
      return [
        {
          text: 'Vite 2 Docs',
          link: 'https://v2.vitejs.dev'
        }
      ]
  }
})()

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://main.vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://main.vitejs.dev'

export const sharedConfig = defineConfig({
  title: 'Sigma Streaming Platform',
  description: 'Modern Streaming Platform',

  head: [
    [
      'script',
      {
        type: 'text/javascript',
        src: 'https://unpkg.com/@stoplight/elements/web-components.min.js'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'twitter:description', content: ogDescription }],
    ['meta', { property: 'twitter:title', content: ogTitle }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:url', content: ogUrl }]
  ],

  vue: { reactivityTransform: true },

  cleanUrls: 'without-subfolders',

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern:
        'https://pr.new/sigmaott/docs.sigmaott.com/edit/develop/docs/:path',
      text: 'Edit this page'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/SigmaOTT' }],

    // algolia: {
    //   appId: 'BX3OD935AJ',
    //   apiKey: 'a9242e5892567a7ebcff8f1ca782bced',
    //   indexName: 'sigmaott',
    //   searchParameters: {
    //     facetFilters: ['tags:en']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev'
    // },

    footer: {
      copyright: 'Copyright © 2018-present Thudo JSC'
    }
  }
})
