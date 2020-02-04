import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_flag:false
  },
  mutations: {
    show_login(state){
      state.login_flag = true
    },
    disshow_login(state){
      state.login_flag = false
    }
  },
  actions: {
  },
  modules: {
  }
})
