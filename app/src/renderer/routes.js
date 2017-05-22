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
    path: '*',
    redirect: '/'
  }
]
