import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../pages/Home') },
    { path: '/products', component: () => import('../pages/Products') },
    { path: '/culture', component: () => import('../pages/Culture') },
    {
      path: '/team-building',
      component: () => import('../pages/TeamBuilding')
    },
    {
      path: '/delete-account',
      component: () => import('../pages/DeleteAccount')
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
