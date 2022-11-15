import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import SidebarBuilder from '@sigmaott/vitepress-sidebar-builder'

const ogUrl = 'https://vitejs.dev/en/'
const ogDescription = 'Next Generation Frontend Tooling'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
        text: 'Guides',
        link: '/en/sigma-streaming-platform/01-get-started/1-introduction.md'
      },
      {
        text: 'Components',
        items: [
          { text: 'Sigma Transcode Live', link: '/en/sigma-transcode-live/' },
          { text: 'Sigma Livestream', link: '/en/sigma-livestream/' },
          { text: 'Sigma Interactive', link: '/en/sigma-interactive/' },
          { text: 'Sigma Linear Right Management', link: '/en/sigma-lrm/' },
          { text: 'Sigma Machine', link: '/en/sigma-machine/' },
          { text: 'Sigma DAI', link: '/en/sigma-dai/' }
        ]
      },
      {
        text: 'APIs',
        items: [
          {
            text: 'Sigma Interactive Apis',
            link: '/en/apis/sigma-interactive'
          },
          {
            text: 'Sigma Linear Right Management Apis',
            link: '/en/apis/sigma-lrm'
          },
          {
            text: 'Sigma Transcode Live Apis',
            link: '/en/apis/sigma-transcode-live'
          },
          { text: 'Sigma Dynamic Ads Insert Apis', link: '/en/apis/sigma-dai' }
        ]
      },
      { text: 'Teams', link: '/en/teams/', activeMatch: '/en/teams/' },
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
      '/en/sigma-streaming-platform/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './en/docs/sigma-streaming-platform',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/en/sigma-transcode-live/': [
        ...SidebarBuilder.get.foldersAndOrder(
          './en/docs/sigma-transcode-live',
          {
            collapsed: false,
            collapsible: true,
            partialFileNamesToIgnore: ['_partial']
          }
        )
      ],
      '/en/sigma-machine/': [
        ...SidebarBuilder.get.foldersAndOrder('./en/docs/sigma-machine', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-lrm/': [
        ...SidebarBuilder.get.foldersAndOrder('./en/docs/sigma-lrm', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-dai/': [
        ...SidebarBuilder.get.foldersAndOrder('./en/docs/sigma-dai', {
          collapsed: false,
          collapsible: true,
          partialFileNamesToIgnore: ['_partial']
        })
      ],
      '/en/sigma-livestream/': [
        {
          text: 'About',
          items: [
            {
              text: 'Introduction',
              link: '/en/sigma-livestream/1.about/1.introduction'
            },
            {
              text: 'Infrastructure',
              link: '/en/sigma-livestream/1.about/2.Infrastructure.md'
            },
            {
              text: 'Low Latency Streaming',
              link: '/en/sigma-livestream/1.about/3.low-latency-streaming.md'
            }
          ]
        }
      ],
      '/en/sigma-interactive/': [
        {
          text: 'Get Started',
          items: [
            {
              text: 'Introduction',
              link: '/en/sigma-interactive/1.get-started/1.introduction'
            },
            {
              text: 'Get Started',
              link: '/en/sigma-interactive/1.get-started/2.get-started'
            }
          ]
        }
      ]
    }
  }
}
