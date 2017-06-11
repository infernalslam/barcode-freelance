export default [
  {
    path: '/',
    name: 'index',
    component: require('components/index')
  },
  {
    path: '/form',
    name: 'form',
    component: require('components/form')
  },
  {
    path: '/check',
    name: 'check',
    component: require('components/check')
  },
  {
    path: '*',
    redirect: '/'
  }
]
