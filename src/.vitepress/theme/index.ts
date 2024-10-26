// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme, { VPButton } from 'vitepress/theme'
import VFDownload from './VFDownload.vue'
import VFLayout from './VFLayout.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout: VFLayout,
    enhanceApp({ app }) {
        app.component('VFDownload', VFDownload)
        app.component('VPButton', VPButton)
    }
} satisfies Theme
