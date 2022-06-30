import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/vars.css'
import './styles/elements.styles.min.css'
import './styles/override.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  }
}
