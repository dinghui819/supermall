import Vue from 'vue'
import VurRouter from 'vue-router'

// 通过懒加载引入相关文件
const Home = () => import ("views/home/Home.vue")
const Category = () => import  ('views/category/Category')
const User = () => import  ('views/user/User')
const Cart = () => import ('views/cart/Cart')

Vue.use(VurRouter)

// 配置映射关系
const routes = [
  {
    path: '',
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
// 创建router
const router = new VurRouter({
  routes
})
// 导出router
export default router