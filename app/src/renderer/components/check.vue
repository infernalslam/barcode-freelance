<template lang="html">
<div>
  <div class="file-input-wrapper">
    <label class="file-input-button">อัปเดตฐานข้อมูล <input type="file" @change="onFileChange" /> </label>
  </div>
  <br>
    fix code  <input type="text" id="barcode" autofocus v-model="barcode" v-on:keyup.13="submit">
  <router-link to="/"  class="button is-danger" ><b>กลับ</b></router-link>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'check',
  data () {
    return {
      barcode: '',
      data: ''
    }
  },
  mounted () {
    document.getElementById('barcode').focus()
  },
  methods: {
    submit () {
      console.log('this is my barcode : ', this.barcode)
    },
    onFileChange (e) {
      let vm = this
      let reader = new FileReader()
      let file = e.target.files[0]
      reader.onload = (event) => {
        // console.log(reader.result)
        vm.data = vm.CSV2JSON(reader.result)
        // log state
        console.log('this check ', vm.data)
        // vm.$store.dispatch('saveData', vm.data)
        if (vm.data) vm.state = true
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


</style>
