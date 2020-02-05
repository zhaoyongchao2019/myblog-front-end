import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// axios 请求拦截
axios.interceptors.request.use(function(response){
    // 在 headers 中设置authorization 属性放token，token是存在缓存中的
    response.headers.authorization = localStorage["token"]
    return response
}, function (error) {
    return Promise.reject(error);
  })
// axios 响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

// 登录的接口
export let loginApi = (user,password) => {
    return axios.post('/login',{user,password})
}

// 验证是否登录的接口
export let valiApi = () => {
    return axios.post('/validate')
}