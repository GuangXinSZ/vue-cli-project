import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import './assets/css/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Mint)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
