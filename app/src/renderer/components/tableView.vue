<template lang="html">
<div>

<a class="button is-success" @click="add  = true">เพิ่มข้อมูล</a>

  <table class="table">
    <thead>
    <tr>
      <th v-for="h in covertHeaders">  {{ h.id }} </th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="src in covertSource">
      <td>{{ src.id1 }}</td>
      <td>{{ src.id2 }}</td>
      <td>{{ src.id3 }}</td>
      <td>{{ src.id4 }}</td>
      <td>{{ src.id5 }}</td>
      <td>{{ src.id6 }}</td>
      <td>{{ src.id7 }}</td>
      <td>{{ src.id8 }}</td>
      <td>{{ src.id9 }}</td>
      <td><a class="button is-info" @click="edit(src)">แก้ไขข้อมูล</a></td>
      <td><a class="button is-danger">ลบ</a></td>
    </tr>
  </tbody>
  </table>

  <br>

  <!-- modal -->
      <div class="modal" :class=" {'is-active' : show} ">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">หน้าต่างแก้ไข {{ editData.id1 }}</p>
          <button class="delete" @click="show = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <input type="text" :placeholder="place.id1" v-model="editData.id1"> <br>
            <input type="text" :placeholder="place.id2" v-model="editData.id2"> <br>
            <input type="text" :placeholder="place.id3" v-model="editData.id3"> <br>
            <input type="text" :placeholder="place.id4" v-model="editData.id4"> <br>
            <input type="text" :placeholder="place.id5" v-model="editData.id5"> <br>
            <input type="text" :placeholder="place.id6" v-model="editData.id6"> <br>
            <input type="text" :placeholder="place.id7" v-model="editData.id7"> <br>
            <input type="text" :placeholder="place.id8" v-model="editData.id8"> <br>
            <input type="text" :placeholder="place.id9" v-model="editData.id9"> <br>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="addEdit(editData)">ยืนยัน</a>
          <a class="button" @click="show = false">ยกเลิก</a>
        </footer>
      </div>
    </div>

  <!-- modal -->



  <div class="modal" :class=" {'is-active' : add} ">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">เพิ่มข้อมูล</p>
      <button class="delete" @click="add = false"></button>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <input type="text" placeholder="ศูนย์ต้นทุน" v-model="addNewData.id1"> <br>
        <input type="text" placeholder="เลขที่สินค้าคงคลัง" v-model="addNewData.id2"> <br>
        <input type="text" placeholder="สินทรัพย์" v-model="addNewData.id3"> <br>
        <input type="text" placeholder="คำอธิบายของสินทรัพย์" v-model="addNewData.id4"> <br>
        <input type="text" placeholder="เลขที่ผลิตภัณฑ์" v-model="addNewData.id5"> <br>
        <input type="text" placeholder="วันที่โอนเป็นทุน" v-model="addNewData.id6"> <br>
        <input type="text" placeholder="มูลค่าที่ได้มา" v-model="addNewData.id7"> <br>
        <input type="text" placeholder="ค่าเสื่อมสะสม" v-model="addNewData.id8"> <br>
        <input type="text" placeholder="วิธีการที่ได้มา" v-model="addNewData.id9"> <br>
      </div>
    </section>
    <footer class="modal-card-foot">
      <a class="button is-success" @click="addDataStore()">ยืนยัน</a>
      <a class="button" @click="add = false">ยกเลิก</a>
    </footer>
  </div>
  </div>



</div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'tableView',
  data() {
    return {
      sourceData: [],
      show: false,
      editData: {},
      place: {},
      add: false,
      addNewData: {}
    }
  },
  methods: {
    ...mapActions([
      'covertSource',
      'covertHeaders',
      'editData'
    ]),
    edit (src) {
      this.editData = src
      this.place = src
      this.show = true
    },
    addEdit (editData) {
      this.$store.dispatch('edit', editData)
      this.editData = {}
      this.show = false
    },
    addDataStore () {
      let data = {
        'ศูนย์ต้นทุน': this.addNewData.id1,
        'เลขที่สินค้าคงคลัง': this.addNewData.id2,
        'สินทรัพย์': this.addNewData.id3,
        'คำอธิบายของสินทรัพย์': this.addNewData.id4,
        'เลขที่ผลิตภัณฑ์': this.addNewData.id5,
        'วันที่โอนเป็นทุน': this.addNewData.id6,
        'มูลค่าที่ได้มา': this.addNewData.id7,
        'ค่าเสื่อมสะสม': this.addNewData.id8,
        'วิธีการที่ได้มา': this.addNewData.id9
      }
      console.log(data)
    }
  },
  computed: {
    ...mapGetters([
      'covertSource',
      'covertHeaders'
    ])
  },
  mounted () {
    this.$store.dispatch('covertHeaders')
    this.$store.dispatch('covertSource')
  }
}
</script>

<style lang="css">
</style>
