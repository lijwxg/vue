import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 全部导入手动配置element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

/* 导入全局样式表 */
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
