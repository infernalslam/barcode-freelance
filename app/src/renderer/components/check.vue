<template lang="html">
<div>
  <div class="file-input-wrapper">
    <label class="file-input-button">อัปเดตฐานข้อมูล <input type="file" @change="onFileChange" /> </label>
    <router-link to="/"  class="button is-danger" style="float: right;"><b>กลับ</b></router-link>
  </div>

  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class="field">
        <label class="label">Barcode</label>
        <p class="control">
          <input class="input" :class="{ 'is-success': state }"  type="text" placeholder="barcode" id="barcode" autofocus v-model="barcode" v-on:keyup.13="submit">
        </p>
        <p class="help is-success" v-if=" state === true ">This stock is available</p>
        <p class="help is-danger"  v-if=" state === false ">This stock is not available</p>
        <p class="help is-info"   v-if=" state === null ">Ready to scan</p>
      </div>

      <hr>

    <div v-for="src in barcodeDataMatch">
      <article class="message is-success">
        <div class="message-header">Successs ::: {{ src.id2 }}</div>
        <div class="message-body">
          <strong>{{ src.id4 }}</strong>
          &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp
          &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp
          <h1 style="font-size: 40px;'">X {{ src.id10 }}</h1>
          <!-- <span>จำนวนของ {{ src.id10 }} ชิ้น</span> -->
        </div>
    </article>
    <br>
  </div>

    </div>
  </div>

</div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'check',
  data () {
    return {
      barcode: '',
      dataComponents: '',
      barcodeData: {}
    }
  },
  mounted () {
    document.getElementById('barcode').focus()
  },
  methods: {
    async submit () {
      this.$store.dispatch('barcodeDataMatch', this.barcode)
    },
    onFileChange (e) {
      let vm = this
      let reader = new FileReader()
      let file = e.target.files[0]
      reader.onload = (event) => {
        // console.log(reader.result)
        vm.dataComponents = vm.CSV2JSON(reader.result)
        // log state
        console.log('this check ', typeof vm.dataComponents)
        vm.$store.dispatch('saveData', vm.dataComponents)
        console.log('vuex', typeof vm.data)
        vm.$store.dispatch('covertSource')
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
    },
    ...mapActions([
      'covertSource',
      'covertHeaders',
      'barcodeDataMatch'
    ])
  },
  computed: {
    ...mapGetters(['covertSource', 'data', 'barcodeDataMatch', 'state'])
  }
}
</script>

<style scoped>


</style>
