import DummyPage from '../views/DummyPage.vue'

const sideMenu = [
  { name: 'Analytics-Dashboard', icon: 'icon-dashboard' },
  { name: 'Analytics-Settings', icon: 'icon-settings' }
]

export default [
  {
    path: '/analytics/dashboard',
    name: 'Analytics-Dashboard',
    component: DummyPage,
    meta: { sideMenu }
  },
  {
    path: '/analytics/settings',
    name: 'Analytics-Settings',
    component: DummyPage,
    meta: { sideMenu }
  }
]