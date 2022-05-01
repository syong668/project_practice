import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/front/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/back/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/back/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/ProductsAdmin.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
