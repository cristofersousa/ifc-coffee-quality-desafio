
# Setup inicial 

```sh
npm create vite@latest cafe-championship -- --template vue
cd cafe-championship
npm install
npm install vue-router@4
```
> Configurando o arquivo main.js com vue-router

```js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // ← Importante

const app = createApp(App)

app.use(router)   // ← Registrar o router

app.mount('#app')

```

> Configurando o arquivo router

```js
import { createRouter, createWebHistory } from 'vue-router'

// Importação das Views (Páginas)
import HomeView from '../views/HomeView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import RankingView from '../views/RankingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Dashboard - Campeonato de Cafés' }
  },
  {
    path: '/avaliacoes',
    name: 'avaliacoes',
    component: AvaliacoesView,
    meta: { title: 'Avaliações' }
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView,
    meta: { title: 'Ranking Geral' }
  },
  // Rota coringa (404) - Opcional
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Página não encontrada' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll behavior (voltar ao topo ao mudar de rota)
  scrollBehavior() {
    return { top: 0 }
  }
})

// Atualizar título da página dinamicamente
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Campeonato SCA'
  next()
})

export default router
```
