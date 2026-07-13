import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CafesView from '../views/CafesView.vue'
import AvaliarView from '../views/AvaliarView.vue'
import RankingView from '../views/RankingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Dashboard - Campeonato de Cafés' }
  },
  {
    path: '/cafes',
    name: 'cafes',
    component: CafesView,
    meta: { title: 'Cafés' }
  },
  {
    path: '/avaliar',
    name: 'avaliar',
    component: AvaliarView,
    alias: ['/avaliacoes'],
    meta: { title: 'Avaliação' }
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView,
    meta: { title: 'Ranking Geral' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Campeonato SCA'
  next()
})

export default router