import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import secondary from '@/views/secondary'
import info from '@/views/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/secondary',
      name: 'secondary',
      component: secondary
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
