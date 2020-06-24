import Vue from 'vue'
import VueRouter from 'vue-router'

let Home = () => import('@/views/Home.vue')
let Login = () => import("@/views/Login.vue")

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router