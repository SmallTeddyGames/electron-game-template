import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
      {
          path: '/',
          name: 'home',
          component: () => import('../components/HelloWorld.vue')
      }
  ]
})

export default router
