import axios from 'axios'

let csharpApi = axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:8080',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

// 处理axios响应
csharpApi.interceptors.response.use(function (response) {
  return response
}, function (err) {
  return Promise.reject(err)
})

function fetchCycle () {
  let arr = [1, 2, 3, 4, 5]
  return new Promise((resolve, reject) => {
    if (arr.length > 0) {
      resolve(arr)
    }
    reject(new Error('no lyric'))
  })
}

export default {
  fetchCycle
}
