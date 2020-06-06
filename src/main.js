import Vue from 'vue'
import App from './App.vue'

// 引入公共样式及样式重置
import '@/assets/style/common.css'
import '@/assets/style/reset.css'

import './svg-icon/index'

// 全局引入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入路由
import router from './router/index.js'

import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 引入地图
// import aMap from 'vue-amap'

// Vue.use(aMap)

// aMap.initAMapApiLoader({
//   key: '高德地图中的key',
//   plugin: ['AMap.Geolocation']
// })

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
