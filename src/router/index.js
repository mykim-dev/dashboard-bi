import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue')
  },
  {
    path: '/dashboardmake',
    name: 'dashboardmake',
    component: () => import(/* webpackChunkName: "dashboardmake" */ '../views/DashboardMake.vue')
  },
  {
    path: '/dashboardlist',
    name: 'dashboardlist',
    component: () => import(/* webpackChunkName: "dashboardmake" */ '../views/DashboardList.vue')
  },
  {
    path: '/reportmake',
    name: 'reportmake',
    component: () => import(/* webpackChunkName: "reportmake" */ '../views/ReportMake.vue')
  },
  {
    path: '/reportlist',
    name: 'reportlist',
    component: () => import(/* webpackChunkName: "reportlist" */ '../views/ReportList.vue')
  },
  {
    path: '/reportview',
    name: 'reportview',
    component: () => import(/* webpackChunkName: "reportview" */ '../views/ReportView.vue')
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import(/* webpackChunkName: "reportview" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
