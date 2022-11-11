import { defineConfig } from 'vitepress'
import SidebarBuilder from '@stuyk/vitepress-sidebar-builder'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://main.vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://main.vitejs.dev'

export default defineConfig({
  title: 'Sigma Streaming Platform',
  description: 'Modern Streaming Platform',

  base: '/',

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

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    // editLink: {
    //   pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
    //   text: 'Suggest changes to this page'
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/SigmaOTT' }],

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en']
      }
    },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev'
    // },

    // localeLinks: {
    //   text: 'English',
    //   items: [
    //     { text: '简体中文', link: 'https://cn.vitejs.dev' },
    //     { text: '日本語', link: 'https://ja.vitejs.dev' },
    //     { text: 'Español', link: 'https://es.vitejs.dev' }
    //   ]
    // },

    footer: {
      copyright: 'Copyright © 2018-present Thudo JSC'
    },

    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Sigma Transcode Live', link: '/sigma-transcode-live/' },
          { text: 'Sigma Livestream', link: '/sigma-livestream/' },
          { text: 'Sigma Interactive', link: '/sigma-interactive/' }
        ]
      },
      {
        text: 'Apis',
        items: [
          { text: 'Sigma Interactive Apis', link: '/apis/sigma-interactive' },
          {
            text: 'Sigma Linear Right Management Apis',
            link: '/apis/sigma-lrm'
          },
          {
            text: 'Sigma Transcode Live Apis',
            link: '/apis/sigma-transcode-live'
          },
          { text: 'Sigma Dynamic Ads Insert Apis', link: '/apis/sigma-dai' }
        ]
      },
      { text: 'Teams', link: '/teams/', activeMatch: '/teams/' },
      {
        text: 'Links',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/SigmaOTT'
          }
        ]
      }
    ],

    sidebar: {
      '/sigma-transcode-live/': [
        {
          text: 'Giới thiệu',
          collapsible: true,
          // Retrieves all markdown files,
          // but does not retrieve any other files in this folder.
          // Ignores any files with '_partial' in their name.
          items: SidebarBuilder.get.filesAndOrder(
            'docs/sigma-transcode-live/01-introduction',
            ['_partial']
          )
        },
        {
          text: 'Bắt đầu',
          collapsible: true,
          // Retrieves all markdown files,
          // but does not retrieve any other files in this folder.
          // Ignores any files with '_partial' in their name.
          items: SidebarBuilder.get.filesAndOrder(
            'docs/sigma-transcode-live/02-get-started',
            ['_partial']
          )
        },

        {
          text: 'Resource: Kênh',
          collapsible: true,
          // Retrieves all markdown files,
          // but does not retrieve any other files in this folder.
          // Ignores any files with '_partial' in their name.
          items: SidebarBuilder.get.filesAndOrder(
            'docs/sigma-transcode-live/03-transcode-package-channel',
            ['_partial']
          )
        },

        {
          text: 'Resource: Kênh Sự kiện',
          collapsible: true,
          // Retrieves all markdown files,
          // but does not retrieve any other files in this folder.
          // Ignores any files with '_partial' in their name.
          items: SidebarBuilder.get.filesAndOrder(
            'docs/sigma-transcode-live/04-event-channel',
            ['_partial']
          )
        },

        {
          text: 'Quản lý và giám sát',
          collapsible: true,
          // Retrieves all markdown files,
          // but does not retrieve any other files in this folder.
          // Ignores any files with '_partial' in their name.
          items: SidebarBuilder.get.filesAndOrder(
            'docs/sigma-transcode-live/05-monitor-manage',
            ['_partial']
          )
        },

        {
          text: 'Manifest Filtering',
          collapsible: true,
          items: [
            {
              text: 'Manifest Filtering',
              link: '/sigma-transcode-live/06-manifest-filtering.md'
            }
          ]
        }
      ],
      '/sigma-livestream/': [
        {
          text: 'About',
          items: [
            {
              text: 'Introduction',
              link: '/sigma-livestream/1.about/1.introduction'
            },
            {
              text: 'Infrastructure',
              link: '/sigma-livestream/1.about/2.Infrastructure.md'
            },
            {
              text: 'Low Latency Streaming',
              link: '/sigma-livestream/1.about/3.low-latency-streaming.md'
            }
          ]
        }
      ],
      '/sigma-interactive/': [
        {
          text: 'Get Started',
          items: [
            {
              text: 'Introduction',
              link: '/sigma-interactive/1.get-started/1.introduction'
            },
            {
              text: 'Get Started',
              link: '/sigma-interactive/1.get-started/2.get-started'
            }
          ]
        }
      ]
    }
  }
})
