import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/learnMore',
      name: 'learnMore',
      component: () => import('../views/learnMore.vue')
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
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/developers/wallet.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/developers/map.vue')
    },
    {
      path: '/path',
      name: 'path',
      component: () => import('../views/developers/path.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/developers/event.vue')
    },
    {
      path: '/aucet',
      name: 'aucet',
      component: () => import('../views/developers/aucet.vue')
    },
    {
      path: '/defi',
      name: 'defi',
      component: () => import('../views/defi.vue')
    },
    {
      path: '/origins',
      name: 'origins',
      component: () => import('../views/origins.vue')
    },
    {
      path: '/nfts',
      name: 'nfts',
      component: () => import('../views/nfts.vue')
    }
  ]
})

export default router
