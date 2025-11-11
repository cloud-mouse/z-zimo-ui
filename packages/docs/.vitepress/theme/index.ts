import DefaultTheme from 'vitepress/theme'
import { type App } from 'vue'
import ZZimoUI from 'z-zimo-ui'
import { ElementPlusContainer } from '@vitepress-preview/component'

import '@vitepress-preview/component/style.css'
import 'z-zimo-ui/dist/index.css'
import "./styles/index.scss";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: { app: App }) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('demo-preview', ElementPlusContainer)
    ctx.app.use(ZZimoUI)
  },
}
