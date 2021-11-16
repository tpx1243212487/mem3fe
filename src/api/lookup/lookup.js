import request from '@/utils/request'
const api_name = `http://localhost:8888/mem3/host`

//url: '/user/login',

// export function getPageList() {
//   return request({
//     url: `${api_name}/showHosts`,
//     method: 'get',
//     params: {}
//   })
// }

export default {
  getPageList() {
    return request({
      url: `${api_name}/showHosts`,
      method: 'get',
      params: {}
    })
  }
}