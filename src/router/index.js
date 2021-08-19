import Vue from 'vue'
import VueRouter from 'vue-router'
import overviewRouter from './overview.js'
import campaignsRouter from './campaigns.js'
import analyticsRouter from './analytics.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/overview/dashboard'
  },
  ...overviewRouter,
  ...campaignsRouter,
  ...analyticsRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
