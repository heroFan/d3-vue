import request from '@/utils/request'

export function login(data) {
  return request({
    // url: 'server/user/login.json',
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    // url: 'server/user/info.json',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
