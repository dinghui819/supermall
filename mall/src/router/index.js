import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import ('../views/home/Home')
const Category = () => import  ('../views/category/Category')
const User = () => import  ('../views/user/User')
const Cart = () => import ('../views/cart/Cart')
// 1.安装插件
Vue.use(VueRouter)

// 配置映射关系
const routes =[
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  }
]

// 2创建路由对象
const router = new VueRouter({
  routes,
  mode:"history"
})

// 3.导出router
export default router