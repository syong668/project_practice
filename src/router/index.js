import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
    path: '/',
    name: 'Index',
    component: () => import('../views/front/UserIndex.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/UserHome.vue')
      },
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
      },
      {
        path: 'checkfrom',
        component: () => import('../views/front/UserCheckFrom.vue')
      },
      {
        path: 'checkout/:orderID',
        component: () => import('../views/front/UserCheckout.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/UserAbout.vue')
      },
      {
        path: 'reserve',
        component: () => import('../views/front/UserReserve.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/front/UserFavorite.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
