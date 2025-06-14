import request from '@/utils/request'
// 封装请求的方式
export function addAddress(data) {
  return request({
    url: 'basic/address/',
    method: 'post',
    data
  })
}

export function getAddress(data) {
  return request({
    url: 'basic/address/',
    method: 'get',
    data
  })
}

export function updateAddress(id, data) {
  return request({
    url: 'basic/address/' + id + '/',
    method: 'patch',
    data
  })
}
