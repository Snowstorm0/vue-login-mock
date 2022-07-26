import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    username: '代码的路'
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state, token){
      state.token = token ;
      localStorage.setItem("token",token);
    },
    resetState(state){
      state.token = '';
      localStorage.clear();
  }
  
  },
  actions: {
  },
  modules: {
  }
})


