import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../views/Home/index.vue'
import Recommended from '../views/Home/views/Recommended/index.vue'
import Frontend from '../views/Home/views/Frontend/index.vue'
import Backend from '../views/Home/views/Backend/index.vue'

import Fire from '../views/Fire/index.vue'
import Search from '../views/Search/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: "Home",
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/recommended'
      },
      {
        path: '/recommended',
        component: Recommended,
      },
      {
        path: '/frontend',
        component: Frontend,
      },
      {
        path: '/backend',
        component: Backend,
      }
    ]
  },
  // {
  //   path: '/search',
  //   name: "Search",
  //   component: Search
  // },
  // {
  //   path: '/fire',
  //   name: "Fire",
  //   component: Fire
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
