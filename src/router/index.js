import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Aplikasi from '../views/AplikasiKu.vue'

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
  ]
})

export default router
