import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
import './assets/css/index.css'
import ElementUI from 'element-ui'
import vueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css'
// 引入ueditor
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

// Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(vueQuillEditor)

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
