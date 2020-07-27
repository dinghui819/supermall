import { request } from './request'
// 请求轮播和小导航recommend
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

// 请求商品列表数据
export function getHomeGoods(type,page) {
  return request ({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}