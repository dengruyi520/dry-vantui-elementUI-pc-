import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    // },

    //移动端期末考试 分类 排序 点击返回顶部 

    //     {
    //       path: '/drymobile',
    //       name: 'mobile',
    //       redirect: '/mobile/home',
    //       component: () => import('@/views/mobile/mobile'),
    //       children: [{
    //           path: '/mobile/home',
    //           name: 'home',
    //           component: () => import('@/views/mobile/home')
    //         },
    //         {
    //           path: '/mobile/cart',
    //           name: 'cart',
    //           component: () => import('@/views/mobile/cart')
    //         },
    //       ]
    //     },
    //     {
    //       path: '/mobile/drylogin',
    //       name: 'login',
    //       component: () => import('@/views/mobile/login')
    //     },
    //     {
    //       path: '/mobile/search',
    //       name: 'search',
    //       component: () => import('@/views/mobile/search')
    //     },





    // p7项目 移动端
    // {
    //   path: '/dry/7',
    //   name: '7',
    //   component: () => import('@/views/dry/7')
    // },


    // dry elementui +vantui 项目
    {
      path: '/home',
      name: 'home',
      // redirect: '/mobile/home',
      component: () => import('@/views/dengry/home'),
      children: [{
          path: '/goods',
          name: 'goods',
          component: () => import('@/views/dengry/goods')
        },
        {
          path: '/collect',
          name: 'collect',
          component: () => import('@/views/dengry/collect')
        },
      ]
    },



  ]
})