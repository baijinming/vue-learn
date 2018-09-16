import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import('@/views/login/login'),
  layout: () => import('@/views/layout/layout'),
  index: () => import('@/views/layout/index'),
  users: () => import('@/views/users/users'),
  adduser: () => import('@/views/users/adduser'),
  redactuser: () => import('@/views/users/redactuser'),
  sortlist: ()=> import('@/views/sort/sortlist'),
  addsort: () => import('@/views/sort/addsort'),
  redactsort: () => import('@/views/sort/redactsort'),
  bookslist: () => import('@/views/books/bookslist'),
  redactbook: () => import('@/views/books/redactbook')
}

const router = new Router({
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
        },
        {
          path: 'users',
          meta: {
            title: '管理员列表'
          },
          component: components.users
        },
        {
          path: 'adduser',
          meta: {
            title: '添加管理员'
          },
          component: components.adduser
        },
        {
          path: 'redactuser',
          name: 'redactuser',
          meta: {
            title: '修改管理员'
          },
          component: components.redactuser
        },
        {
          path: 'sortlist',
          meta: {
            title: '分类列表'
          },
          component: components.sortlist
        },
        {
          path: 'addsort',
          meta: {
            title: '添加分类'
          },
          component: components.addsort
        },
        {
          path: 'redactsort',
          name: 'redactsort',
          meta: {
            title: '分类修改'
          },
          component: components.redactsort
        },
        {
          path: 'bookslist',
          meta: {
            title: '图书列表'
          },
          component: components.bookslist
        },
        {
          path: 'redactbook',
          name: 'redactbook',
          meta: {
            title: '图书修改'
          },
          component: components.redactbook
        },
      ]
    }
  ]
})

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router;
