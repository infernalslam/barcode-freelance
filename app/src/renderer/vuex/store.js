import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 0
  },
  getters: {
    number: state => state.number
  },
  actions: {},
  mutations: {},
  strict: process.env.NODE_ENV !== 'production'
})
