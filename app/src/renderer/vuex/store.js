import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: '',
    covertSource: [],
    covertHeaders: []
  },
  getters: {
    data: state => state.data,
    covertSource: state => state.covertSource,
    covertHeaders: state => state.covertHeaders
  },
  actions: {
    saveData (context, payload) {
      context.commit('saveData', payload)
    },
    covertSource (context) {
      context.commit('covertSource')
    },
    covertHeaders (context) {
      context.commit('covertHeaders')
    },
    edit (context, payload) {
      context.commit('edit', payload)
    }
  },
  mutations: {
    saveData (state, payload) {
      state.data = JSON.parse(payload)
    },
    covertSource (state) {
      let headers = Object.keys(state.data[0]).length
      let multple = Object.keys(state.data[0]).length - 1
      let arr = {}
      let source = []
      for (let i = 0; i < state.data.length; i++) {
        for (var j = 0; j <= headers - 1; j++) {
          if (j <= multple) {
            if (Object.keys(state.data[i])[j] === 'ศูนย์ต้นทุน') arr.id1 = state.data[i]['ศูนย์ต้นทุน']
            else if (Object.keys(state.data[i])[j] === 'เลขที่สินค้าคงคลัง') arr.id2 = state.data[i]['เลขที่สินค้าคงคลัง']
            else if (Object.keys(state.data[i])[j] === 'สินทรัพย์') arr.id3 = state.data[i]['สินทรัพย์']
            else if (Object.keys(state.data[i])[j] === 'คำอธิบายของสินทรัพย์') arr.id4 = state.data[i]['คำอธิบายของสินทรัพย์']
            else if (Object.keys(state.data[i])[j] === 'เลขที่ผลิตภัณฑ์') arr.id5 = state.data[i]['เลขที่ผลิตภัณฑ์']
            else if (Object.keys(state.data[i])[j] === 'วันที่โอนเป็นทุน') arr.id6 = state.data[i]['วันที่โอนเป็นทุน']
            else if (Object.keys(state.data[i])[j] === 'มูลค่าที่ได้มา') arr.id7 = state.data[i]['มูลค่าที่ได้มา']
            else if (Object.keys(state.data[i])[j] === 'ค่าเสื่อมสะสม') arr.id8 = state.data[i]['ค่าเสื่อมสะสม']
            else if (Object.keys(state.data[i])[j] === 'วิธีการที่ได้มา') arr.id9 = state.data[i]['วิธีการที่ได้มา']
          }
        }
        source.push(arr)
        state.covertSource = source
        arr = {}
      }
    },
    covertHeaders (state) {
      let headers = Object.keys(state.data[0]).length
      let arr = []
      for (let i = 0; i <= headers - 1; i++) {
        arr.push({ id: Object.keys(state.data[0])[i] })
      }
      state.covertHeaders = arr
    },
    edit (state, payload) {
      let index = state.covertSource.findIndex(i => i.id2 === payload.id2)
      state.covertSource[index] = payload
      console.log(state.covertSource[index])
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
