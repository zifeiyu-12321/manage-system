import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/common/Layout.vue'

Vue.use(Router)

export const routes = [
  {
    path: '*',
    redirect: '/404',
    meta: { title: '404', },
  },
  {
    path: '',
    redirect: '/home',
    meta: { title: '重定向', },
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
    meta: { title: '登录', },
  },
  {
    path: '/',
    component: Layout,
    meta: { title: '布局组件', },
    children: [
      {
        path: '/home',
        component: () => import('../pages/Home.vue'),
        meta: { title: '系统首页', }
      },
      {
        path: '/form',
        component: () => import('../pages/Form.vue'),
        meta: { title: '基本表单', },
      },
      {
        path: '/table',
        component: () => import('../pages/Table.vue'),
        meta: { title: '常用表格', },
      },
      {
        path: '/404',
        component: () => import('../pages/404.vue'),
        meta: { title: '404', }
      },
      {
        path: '/tabs',
        component: () => import('../pages/Tabs.vue'),
        meta: { title: 'tab选项卡', }
      },
      {
        path: '/editor',
        component: () => import('../pages/Editor.vue'),
        meta: { title: '富文本编辑器', }
      },
      {
        path: '/markdown',
        component: () => import('../pages/Markdown.vue'),
        meta: { title: 'markdown编辑器', }
      },
      {
        path: '/map',
        component: () => import('../pages/MapUse.vue'),
        meta: { title: '高德地图', }
      },
      {
        path: '/dragTable',
        component: () => import('../pages/DragTable.vue'),
        meta: { title: '拖拽列表', }
      },
      {
        path: '/dragFrame',
        component: () => import('../pages/DragFrame.vue'),
        meta: { title: '拖拽弹框', }
      },
    ]
  }
]

export default new Router({ routes })