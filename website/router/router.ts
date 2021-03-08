import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doc',
    name: 'Doc',
    component: Doc
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
