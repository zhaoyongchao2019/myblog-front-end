import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {loginApi,valiApi} from '../api/login'

export default new Vuex.Store({
  state: {
    login_flag:false,
    username:''
  },
  mutations: {
    show_login(state){
      state.login_flag = true
    },
    disshow_login(state){
      state.login_flag = false
    },
    setusername(state,payload){
      // 改变state里的 username
      state.username = payload
    }
  },
  actions: {
    async tologin({commit},{user,password}){
      let res = await loginApi(user,password)
        let {username,token} = res
        // 提交到 mutations
        commit("setusername",username)
        // token 具有时效性 登录成功 把token存在本地存储
        localStorage["token"] = token
        if(this.state.username){
          commit('disshow_login')
        }
        else{
          alert('登录失败')
        }
    },
    async valiApi({commit}){
      const { username, token } = await valiApi();
      commit('setusername', username);
      localStorage["token"] = token
      return username !== undefined;
    }
  },
  modules: {
  }
})
