import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start/building',
      name: 'startBuilding',
      component: () => import('../views/developers/startBuilding.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/developers/join.vue')
    },
    {
      path: '/privacy/policy',
      name: 'privacyPolicy',
      component: () => import('../views/developers/privacyPolicy.vue')
    },
    {
      path: '/terms/use',
      name: 'termsOfUse',
      component: () => import('../views/developers/termsOfUse.vue')
    },
  ]
})

export default router
