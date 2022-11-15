import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { viConfig } from './vi'

import { sharedConfig } from './shareConfig'

export default defineConfig({
  ...sharedConfig,
  locales: {
    // en: { label: 'English', lang: 'en', ...enConfig },
    vi: { label: 'Tiếng Việt', lang: 'vi', ...viConfig }
  }
})
