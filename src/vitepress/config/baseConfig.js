/**
 * This file is intended to be required from VitePress
 * consuming project's config file.
 *
 * It runs in Node.js.
 */

// for local-linked development
const deps = ['@vue/theme', '@vueuse/core', 'body-scroll-lock']
const Unocss = require('unocss/vite').default
const presetIcons = require('@unocss/preset-icons').default
const { presetAttributify, presetUno } = require('unocss')
const transformerDirective = require('@unocss/transformer-directives').default



const colors = ['red', 'green', 'blue', 'gray', 'yellow', 'dark']
const safelist = []

// colors.forEach((color) => {
//   safelist.push(`bg-${color}-500`)
//   safelist.push(`hover:bg-${color}-400`)
//   safelist.push(`border-${color}-600`)
//   safelist.push(`hover:border-${color}-500`)
// })

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = async () => ({
  vite: {
    ssr: {
      noExternal: deps
    },
    optimizeDeps: {
      exclude: deps
    },
    plugins: [
      Unocss({
        presets: [presetAttributify(), presetUno(), presetIcons()],
        safelist,
        transformers: [
          transformerDirective(),
        ],
        theme: {
          colors: {
            primary: {
              DEFAULT: 'var(--docs-color-primary)',
              100: 'var(--docs-color-primary-100)',
            },
            text: {
              DEFAULT: 'var(--docs-color-text)',
              100: 'var(--docs-color-text-100)',
            },
            border: 'var(--docs-color-border)',
            background: {
              DEFAULT: 'var(--docs-color-background)',
              100: 'var(--docs-color-background-100)',
              200: 'var(--docs-color-background-200)',
              300: 'var(--docs-color-background-300)',
            },
          },
        }
      }),
    ]
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg'
      }
    ],
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            'link',
            {
              rel: 'preload',
              href: '/assets/inter-latin.7b37fe23.woff2',
              as: 'font',
              type: 'font/woff2',
              crossorigin: 'anonymous'
            }
          ]
        ]
      : []),
    [
      'script',
      {},
      require('fs').readFileSync(
        require('path').resolve(
          __dirname,
          './inlined-scripts/applyDarkMode.js'
        ),
        'utf-8'
      )
    ]
  ],

  markdown: {
    highlight: await require('./highlight')()
  },

  shouldPreload: (link) => {
    // make algolia chunk prefetch instead of preload
    return !link.includes('Algolia')
  }
})
