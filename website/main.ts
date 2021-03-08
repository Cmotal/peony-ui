import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import peony from '../packages/index'
import '../packages/styles/theme-chalk/index.scss'
import 'vite-plugin-vuedoc/style.css'

const app = createApp(App)
app.use(peony)
app.use(router)
app.mount('#app')
