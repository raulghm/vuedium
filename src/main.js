// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})

router.beforeEach((to, from, next) => {
  vm.$store.commit('setHeaderAlt', false)
  vm.$store.commit('setPublishing', false)
  vm.$store.commit('setEdit', false)
  next()
})
