import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/pages/login/login'

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      redirect:{path:'/login'}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {title: '登录'},
    }

  ]
})

export default router
