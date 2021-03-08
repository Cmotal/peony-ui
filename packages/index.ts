// Basic
import { App } from 'vue'
import pnButton from './components/Button/index'

import version from '../package.json'
const components = [pnButton]

const install = (app) => {
  components.forEach((component) => {
    app.use(component)
  })
}

const peony = {
  version,
  install
}

export { version, pnButton }

export default peony
