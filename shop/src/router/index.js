import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Echarts from '../views/Echarts.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect: '/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/Home',
      component:Home
    }
  ]
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },{
  //   path: '/Echarts',
  //   name: 'Echarts',
  //   component: Echarts
  // },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path==='/login')
//   next()
// })
export default router
