import axios from 'axios';

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout:1000
  })
  // 2.axios拦截器
  //2.1 拦截器的作用
  instance.interceptors.request.use(config =>{
    return config
  },err =>{
    console.log(err);
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res =>{
    return res
  }, err =>{
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)
}
