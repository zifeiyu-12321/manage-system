import Vue from 'vue'
import SvgIcon from '../components/common/SvgIcon.vue'// 引入 svg 组件

// 全局注册
Vue.component('svg-icon', SvgIcon)

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('./icon', false, /\.svg$/)
requireAll(req)