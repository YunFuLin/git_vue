// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/reset.css' //引入公共样式
import '../static/css/global.css' //引入公共样式
import 'lib-flexible/flexible' //移动端适配lib-flexible

//按需加载vux-ui组件
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
