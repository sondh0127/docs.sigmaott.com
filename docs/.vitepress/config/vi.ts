import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import SidebarBuilder from '@sigmaott/vitepress-sidebar-builder'

const ogUrl = 'https://vitejs.dev/en/'
const ogDescription = 'Next Generation Frontend Tooling'

export const viConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    // editLink: {
    //   pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
    //   text: 'Suggest changes to this page'
    // },

    nav: [
      {
        text: 'Bắt đầu',
        link: '/vi/sigma-streaming-platform/01-get-started/1-introduction.md'
      },
      {
        text: 'Các thành phần',
        items: [
          { text: 'Sigma Transcode Live', link: '/vi/sigma-transcode-live/' },
          { text: 'Sigma Livestream', link: '/vi/sigma-livestream/' },
          { text: 'Sigma Interactive', link: '/vi/sigma-interactive/' },
          { text: 'Sigma Linear Right Management', link: '/vi/sigma-lrm/' },
          { text: 'Sigma Machine', link: '/vi/sigma-machine/' },
          { text: 'Sigma DAI', link: '/vi/sigma-dai/' }
        ]
      },
      {
        text: 'APIs',
        items: [
          {
            text: 'Sigma Interactive Apis',
            link: '/apis/sigma-interactive'
          },
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
      { text: 'Đội ngũ', link: '/vi/teams/', activeMatch: '/vi/teams/' },
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
      '/vi/sigma-streaming-platform/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './docs/vi/sigma-streaming-platform',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/vi/sigma-transcode-live/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './docs/vi/sigma-transcode-live',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/vi/sigma-machine/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-machine', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-lrm/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-lrm', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-dai/': [
        ...SidebarBuilder.get.foldersAndOrder('./docs/vi/sigma-dai', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/vi/sigma-livestream/': [
        {
          text: 'About',
          items: [
            {
              text: 'Introduction',
              link: '/vi/sigma-livestream/1.about/1.introduction'
            },
            {
              text: 'Infrastructure',
              link: '/vi/sigma-livestream/1.about/2.Infrastructure.md'
            },
            {
              text: 'Low Latency Streaming',
              link: '/vi/sigma-livestream/1.about/3.low-latency-streaming.md'
            }
          ]
        }
      ],
      '/vi/sigma-interactive/': [
        {
          text: 'Get Started',
          items: [
            {
              text: 'Introduction',
              link: '/vi/sigma-interactive/1.get-started/1.introduction'
            },
            {
              text: 'Get Started',
              link: '/vi/sigma-interactive/1.get-started/2.get-started'
            }
          ]
        }
      ]
    }
  }
}
