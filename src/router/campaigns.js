import DummyPage from '../views/DummyPage.vue'

const sideMenu = [
  { name: 'Campaigns-Dashboard', icon: 'icon-dashboard' },
  { name: 'Campaigns-Support', icon: 'icon-support' },
  { name: 'Campaigns-Files', icon: 'icon-files' }
]

export default [
  {
    path: '/campaigns/dashboard',
    name: 'Campaigns-Dashboard',
    component: DummyPage,
    meta: { sideMenu }
  },
  {
    path: '/campaigns/support',
    name: 'Campaigns-Support',
    component: DummyPage,
    meta: { sideMenu }
  },
  {
    path: '/campaigns/files',
    name: 'Campaigns-Files',
    component: DummyPage,
    meta: { sideMenu }
  }
]