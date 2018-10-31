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
// Vue.config.silent = true 取消Vue所有的日志与警告
// Vue.config.devtools = true 配置是否允许检查代码 线上版本为false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
