import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Aplikasi from '../views/AplikasiKu.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aplikasiku',
      name: 'aplikasi',
      component: Aplikasi
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
