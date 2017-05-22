export default [
  {
    path: '/',
    name: 'index',
    component: require('components/index')
  },
  {
    path: '*',
    redirect: '/'
  }
]
