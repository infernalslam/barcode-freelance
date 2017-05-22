import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: ''
  },
  getters: {
    number: state => state.number
  },
  actions: {
    saveData (context, payload) {
      context.commit('saveData', payload)
    }
  },
  mutations: {
    saveData (state, payload) {
      state.data = JSON.parse(payload)
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
