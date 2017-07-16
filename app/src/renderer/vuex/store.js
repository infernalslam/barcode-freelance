import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
// function CSV
// function getCSV (JSONData) {
//   /* eslint-disable */
//   var arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData
//   var CSV = 'ศูนย์ต้นทุน,เลขที่สินค้าคงคลัง,สินทรัพย์,คำอธิบายของสินทรัพย์,เลขที่ผลิตภัณฑ์,วันที่โอนเป็นทุน,มูลค่าที่ได้มา,ค่าเสื่อมสะสม,วิธีการที่ได้มา,จำนวน,รูปภาพ' + '\r\n'
//   for (var i = 0; i < arrData.length; i++) {
//     var row = ''
//     for (var index in arrData[i]) {
//       row += '"' + arrData[i][index] + '",'
//     }
//     row.slice(0, row.length - 1)
//     CSV += row + '\r\n'
//   }
//   // console.log('JSONData: ', CSV)
//   var csvContent = "data:text/csv;charset=utf-8,"
//   csvContent += CSV
//   var encodedUri = encodeURI(csvContent)
//   window.open(encodedUri)
// }

export default new Vuex.Store({
  state: {
    data: '',
    covertSource: [],
    covertHeaders: [],
    totalExcel: [],
    barcodeDataMatch: [],
    state: null
  },
  getters: {
    data: state => state.data,
    covertSource: state => state.covertSource,
    covertHeaders: state => state.covertHeaders,
    barcodeDataMatch: state => state.barcodeDataMatch.reverse(),
    state: state => state.state
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
    },
    addNewDataVuex (context, payload) {
      context.commit('addNewDataVuex', payload)
    },
    delTableData (context, payload) {
      context.commit('delTableData', payload)
    },
    downloadFunction (context) {
      context.commit('downloadFunction')
    },
    barcodeDataMatch (context, payload) {
      context.commit('barcodeDataMatch', payload)
    },
    updatePic (context, payload) {
      context.commit('updatePic', payload)
    }
  },
  mutations: {
    saveData (state, payload) {
      state.data = JSON.parse(payload)
      console.log(state.data)
    },
    async covertSource (state) {
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
            else if (Object.keys(state.data[i])[j] === 'จำนวน') arr.id10 = state.data[i]['จำนวน']
            else if (Object.keys(state.data[i])[j] === 'รูปภาพ') arr.id11 = state.data[i]['รูปภาพ']
          }
        }
        source.push(arr)
        state.covertSource = await source
        arr = {}
        console.log('covertSource :', state.covertSource)
      }
    },
    covertHeaders (state) {
      let headers = Object.keys(state.data[0]).length
      let arr = []
      for (let i = 0; i <= headers - 1; i++) {
        arr.push({ id: Object.keys(state.data[0])[i] })
      }
      state.covertHeaders = arr
      console.log('headers :', state.covertHeaders)
    },
    edit (state, payload) {
      console.log('payload :-> ', payload)
      let index = state.covertSource.findIndex(i => i.id2 === payload.id2)
      state.covertSource[index] = payload
      console.log(state.covertSource[index])
    },
    addNewDataVuex (state, payload) {
      let data = {
        id1: payload['ศูนย์ต้นทุน'],
        id2: payload['เลขที่สินค้าคงคลัง'],
        id3: payload['สินทรัพย์'],
        id4: payload['คำอธิบายของสินทรัพย์'],
        id5: payload['เลขที่ผลิตภัณฑ์'],
        id6: payload['วันที่โอนเป็นทุน'],
        id7: payload['มูลค่าที่ได้มา'],
        id8: payload['ค่าเสื่อมสะสม'],
        id9: payload['วิธีการที่ได้มา']
      }
      console.log('payload ', data)
      state.covertSource.push(data)
    },
    delTableData (state, payload) {
      let index = state.covertSource.findIndex(i => i.id2 === payload.id2)
      console.log(state.covertSource[index])
      state.covertSource.splice(index, 1)
    },
    async downloadFunction (state) {
      var arr = []
      var count = 0
      while (count < state.covertSource.length) {
        let cur = {
          'ศูนย์ต้นทุน': state.covertSource[count].id1,
          'เลขที่สินค้าคงคลัง': state.covertSource[count].id2,
          'สินทรัพย์': state.covertSource[count].id3,
          'คำอธิบายของสินทรัพย์': state.covertSource[count].id4,
          'เลขที่ผลิตภัณฑ์': state.covertSource[count].id5,
          'วันที่โอนเป็นทุน': state.covertSource[count].id6,
          'มูลค่าที่ได้มา': state.covertSource[count].id7,
          'ค่าเสื่อมสะสม': state.covertSource[count].id8,
          'วิธีการที่ได้มา': state.covertSource[count].id9,
          'จำนวน': state.covertSource[count].id10,
          'รูปภาพ': state.covertSource[count].id11
        }
        arr.push(cur)
        count++
      }
      state.totalExcel = await arr
      var arrData = await typeof state.totalExcel !== 'object' ? JSON.parse(state.totalExcel) : state.totalExcel
      var CSV = 'ศูนย์ต้นทุน,เลขที่สินค้าคงคลัง,สินทรัพย์,คำอธิบายของสินทรัพย์,เลขที่ผลิตภัณฑ์,วันที่โอนเป็นทุน,มูลค่าที่ได้มา,ค่าเสื่อมสะสม,วิธีการที่ได้มา,จำนวน,รูปภาพ' + '\r\n'
      for (var i = 0; i < arrData.length; i++) {
        var row = ''
        for (var index in arrData[i]) {
          row += '"' + arrData[i][index] + '",'
        }
        row.slice(0, row.length - 1)
        CSV += row + '\r\n'
      }
      var csvContent = "data:text/csv;charset=utf-8,"
      csvContent += CSV
      var encodedUri = await encodeURI(csvContent)
      window.open(encodedUri)
    },
    barcodeDataMatch (state, payload) {
      var filter = state.covertSource.findIndex(i => i.id2 === payload)
      console.log('filter ', filter)
      if (filter === -1) {
        state.state = false
      }
      else {
        if (state.covertSource[filter].id10) {
          state.covertSource[filter].id10 = parseInt(state.covertSource[filter].id10) + 1
          var index = state.barcodeDataMatch.findIndex(i => i.id2 === payload)
          if (index === -1) state.barcodeDataMatch.push(state.covertSource[filter])
          else state.barcodeDataMatch[index] = state.covertSource[filter]
          state.state = true
        } else {
          state.state = false
        }
      }
    },
    updatePic (state, payload) {
      let index = state.covertSource.findIndex(i => i.id2 === payload.id)
      state.covertSource[index].id11 = payload.image
      console.log('vuex :', state.covertSource[index])
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
