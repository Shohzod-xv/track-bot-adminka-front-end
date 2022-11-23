import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../views/UsersView.vue')
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: () => import('../views/DriversView.vue')
    }
  ]
})

export default router
