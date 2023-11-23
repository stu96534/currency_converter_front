import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import converter from '../views/Converter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path: '/converter',
      name: 'nation',
      component: () => import('../views/Nation.vue'),
      children: [{ path: ':id', name: 'converter', component: converter, props: true }],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

export default router
