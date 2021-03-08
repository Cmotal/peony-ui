import { App } from 'vue'
import pnButton from './src/Button.vue'

pnButton.install = (app: App): void => {
  app.component(pnButton.name, pnButton)
}

export default pnButton
