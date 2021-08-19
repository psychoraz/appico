import DashboardPage from '../views/overview/DashboardPage.vue'
import DummyPage from '../views/DummyPage.vue'

export default [
  {
    path: '/overview/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/overview/support',
    name: 'Support',
    component: DummyPage
  },
  {
    path: '/overview/files',
    name: 'Files',
    component: DummyPage
  },
  {
    path: '/overview/mail',
    name: 'Mail',
    component: DummyPage
  },
  {
    path: '/overview/settings',
    name: 'Settings',
    component: DummyPage
  }
]