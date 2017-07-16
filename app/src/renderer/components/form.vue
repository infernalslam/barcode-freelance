<template lang="html">
  <div>
    <section class="hero is-fullheight is-bg">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-right nav-menu">
              <span class="nav-item">
                <router-link to="/" class="button is-outlined"> <b>กลับไปหน้าเเรก</b></router-link> &nbsp&nbsp

                <div class="file-input-wrapper">
                  <label class="file-input-button">อัปเดตฐานข้อมูล <input type="file" @change="onFileChange" /> </label>
                </div>
              </span>
            </div>
          </div>
        </header>
      </div>
      <div class="hero-body">
        <div class="container">
          <table-view v-if="state"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import tableView from './tableView'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'form',
  components: {
    tableView
  },
  data () {
    return {
      data: '',
      state: false
    }
  },
  mounted () {
    this.state = false
  },
  methods: {
    onFileChange (e) {
      let vm = this
      let reader = new FileReader()
      let file = e.target.files[0]
      reader.onload = (event) => {
        // console.log(reader.result)
        vm.data = vm.CSV2JSON(reader.result)
        vm.$store.dispatch('saveData', vm.data)
        // if (vm.data) vm.state = true
        setTimeout(() => {
          vm.state = true
        }, 5000)
        // console.log('this.data : ', vm.data)
      }
      reader.readAsText(file)
    },
    CSV2JSON (csv) {
      var array = this.CSVToArray(csv)
      var objArray = []
      for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {}
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
          var key = array[0][k]
          objArray[i - 1][key] = array[i][k]
        }
      }
      var json = JSON.stringify(objArray)
      var str = json.replace(/},/g, "},\r\n")
      return str
    },
    CSVToArray (strData, strDelimiter) {
      strDelimiter = (strDelimiter || ",");
      var objPattern = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
      var arrData = [[]]
      var arrMatches = null
      while (arrMatches = objPattern.exec(strData)) {
          var strMatchedDelimiter = arrMatches[1];
          if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
              arrData.push([]);
          }
          if (arrMatches[2]) {
              var strMatchedValue = arrMatches[2].replace(
              new RegExp("\"\"", "g"), "\"");
          } else {
              var strMatchedValue = arrMatches[3];
          }
          arrData[arrData.length - 1].push(strMatchedValue);
      }
      return (arrData);
    }
  }
}
</script>

<style scoped>
.file-input-wrapper {
  display: inline-block;
  overflow-y: hidden;
}
.file-input-wrapper .file-input-button {
  color: white;
  border: 1px solid #222;
  background: #222;
  box-sizing: border-box;
  font-family: sans-serif;
  width: 140px;
  height: 40px;
  display: inline;
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  /*margin-top: 20px;*/
  margin-top: 2px;
  padding-top: 9px;
  text-align: center;
  transition: color 500ms, background-color 500ms;
  -moz-transition: color 500ms, background-color 500ms;
  -webkit-transition: color 500ms, background-color 500ms;
  -o-transition: color 500ms, background-color 500ms;
  -ie-transition: color 500ms, background-color 500ms;
}
.file-input-wrapper .file-input-button:hover {
  color: #000000;
  background: rgba(68, 68, 68, 0.2);
  text-decoration: none;
}
.file-input-wrapper input {
  display: none;
}

</style>
