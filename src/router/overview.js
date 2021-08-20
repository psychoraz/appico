import DashboardPage from '../views/overview/DashboardPage.vue'
import DummyPage from '../views/DummyPage.vue'

const sideMenu = [
  { name: 'Overview-Dashboard', icon: 'icon-dashboard' },
  { name: 'Overview-Support', icon: 'icon-support' },
  { name: 'Overview-Files', icon: 'icon-files' },
  { name: 'Overview-Mail', icon: 'icon-mail' },
  { name: 'Overview-Settings', icon: 'icon-settings' }
]

export default [
  {
    path: '/overview/dashboard',
    name: 'Overview-Dashboard',
    component: DashboardPage,
    meta: { sideMenu }
  },
  {
    path: '/overview/support',
    name: 'Overview-Support',
    component: DummyPage,
    meta: { sideMenu }
  },
  {
    path: '/overview/files',
    name: 'Overview-Files',
    component: DummyPage,
    meta: { sideMenu }
  },
  {
    path: '/overview/mail',
    name: 'Overview-Mail',
    component: DummyPage,
    meta: { sideMenu }
  },
  {
    path: '/overview/settings',
    name: 'Overview-Settings',
    component: DummyPage,
    meta: { sideMenu }
  }
]