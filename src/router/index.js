import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '*',
    redirect: '/404',
    meta: { 
      title: '404',
      hidden: false
     },
  },
  {
    path: '/',
    redirect: '/home',
    meta: { 
      title: '首页',
      hidden: false
     },
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
    meta: { 
      title: '登录',
      hidden: false
     },
  },
  {
    path: '/',
    component: () => import('../components/common/Layout.vue'),
    meta: { 
      title: '自述文件',
      hidden: false
     },
    children: [
      {
        path: '/home',
        component: () => import('../pages/Home.vue'),
        meta: { 
          title: '系统首页',
          hidden: false,
          icon: 'home'
         }
      },
      {
        path: '/404',
        component: () => import('../pages/404.vue'),
        meta: { 
          title: '404',
          hidden: true,
          icon: 'lx-home'
         }
      },
      {
        path: '/form',
        component: () => import(''),
        meta: { 
          title: '表单组件',
          hidden: false,
          icon: 'lx-calendar'
         },
         children: [
           {
             path: '/table',
             component: () => import('../pages/Form.vue'),
             meta: { 
              title: '基本表单',
              hidden: false,
              icon: 's-data'
             },
           },
           {
             path: '/table',
             component: () => import('../pages/Table.vue'),
             meta: { 
              title: '常用表格',
              hidden: false,
              icon: 's-marketing'
             },
           },
         ]
      }
    ]
  }
]

export default new Router({ routes })