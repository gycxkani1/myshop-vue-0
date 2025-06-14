import request from '@/utils/request'
// 封装请求的方式
export function login(data) {
    return request({
      url: 'login/',
      method: 'post',
      data
    })
  }

  export function reg(data) {
    return request({
      url: 'users/users/',
      method: 'post',
      data
    })
  }

  export function addcart(data) {
    return request({
      url: 'order/cart/',
      method: 'post',
      data
    })
  }

  export function getcart(data) {
    return request({
      url: 'order/cart/',
      method: 'get',
      data
    })
  }

  export function goodscategory(data) {
    return request({
      url: 'goods/goodscategory/',
      method: 'get',
      data
    })
  }
