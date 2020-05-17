import Vue from 'vue'
import App from './App.vue'

// 引入公共样式及样式重置
import '@/assets/style/common.css'
import '@/assets/style/reset.css'

// 全局引入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入路由
import router from './router/index.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
