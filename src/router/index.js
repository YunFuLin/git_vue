import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/pages/login/login'
import Home from '@/pages/home/home' //主页
import Record from '@/pages/record/record' //题库
import Message from '@/pages/message/message' //信息
import Me from '@/pages/me/me' //我的

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      redirect:{path:'/login'}
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      meta: { showTab: true }
    },
    {
      path: '/record',
      component: Record,
      meta: { showTab: true }
    },
    {
      path: '/message',
      component: Message,
      meta: { showTab: true }
    },
    {
      path: '/me',
      component: Me,
      meta: { showTab: true }
    },


  ]
})

export default router
