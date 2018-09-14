import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import('@/views/login/login'),
  layout: () => import('@/views/layout/layout'),
  index: () => import('@/views/layout/index')
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      meta: {
        title: '后台登录页面'
      },
      component: components.login
    },
    {
      path: '/layout',
      meta: {
        title: '后台管理页面'
      },
      redirect: '/layout/index',
      component: components.layout,
      children: [
        {
          path: 'index',
          component: components.index
        }
      ]
    }
  ]
})
