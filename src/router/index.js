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
    component: () => import('../views/back/LoginAdmin.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/back/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/ProductsAdmin.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/back/OrdersAdmin.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/back/CouponsAdmin.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/front/UserBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/front/UserProducts.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/front/UserProduct.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/UserCart.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
