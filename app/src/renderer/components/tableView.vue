<template lang="html">
<div>

<!-- <a class="button is-success" @click="add  = true">เพิ่มข้อมูล</a>
<a class="button is-info" @click="download()">ดาวน์โหลดข้อมูล</a>
<div class="field has-addons">
  <p class="control">
    <input class="input" type="text" placeholder="search">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div> -->

<div class="columns">
  <div class="column is-1"><a class="button is-success" @click="add  = true">เพิ่มข้อมูล</a></div>
  <div class="column is-2"><a class="button is-info" @click="download()">บันทึกข้อมูล</a></div>
  <div class="column is-6"></div>
  <div class="column is-3">
    <div class="field has-addons">
      <p class="control">
        <input class="input"  v-model="text" type="text" placeholder="search">
      </p>
      <p class="control">
        <a class="button is-info" @click="sortData(text)">Search</a>
      </p>
    </div>
  </div>
</div>


<br><br>

  <table class="table">
    <thead>
    <tr>
      <!-- <th v-for="h in covertHeaders">  {{ h.id }} </th> -->
      <th>ศูนย์ต้นทุน</th>
      <th>เลขที่สินค้าคงคลัง</th>
      <th>เลขสินทรัพย์</th>
      <th>คำอธิบายของสินทรัพย์</th>
      <th>หมายเลขครุภัณฑ์</th>
      <th>วิธีการที่ได้มา</th>
      <th>จำนวน</th>
      <!-- <th>รูปภาพ</th> -->
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
      <!-- <td>{{ src.id6 }}</td> -->
      <!-- <td>{{ src.id7 }}</td> -->
      <td>{{ src.id8 }}</td>
      <!-- <td>{{ src.id9 }}</td> -->
      <td>{{ src.id10 }}</td>
      <!-- <td>{{ src.id11 }}</td> -->
      <td><a class="button is-info" @click="edit(src.id2)">แก้ไขข้อมูล</a></td>
      <td><a class="button is-danger" @click="del(src)">ลบ</a></td>
    </tr>
  </tbody>
  </table>

  <br>

  <!-- modal -->
      <div  class="modal" :class=" {'is-active' : show} ">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ข้อมูลสินค้า</p>
          <button class="delete" @click="show = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">

            <h4 class="title-text">รูปภาพ</h4>
            <div class="columns">
              <div class="column is-12">
                <!-- <div v-if="image !== '' && editData.id11 === '' ">
                  <img :src="image" /> <br>
                </div>
                <div v-if="editData !== '' ">
                  <img :src="editData.id11" /> <br>
                </div> -->
                <img :src="image" v-if="image === '' " width="200" height="300"/>
                <img :src="editData.id11" v-if=" editData.id11 !== '' " width="200" height="300"/>
                <br>
                <input type="file" @change="upload">
              </div>
            </div>

            <h4 class="title-text">รหัสสินค้า</h4>
            <div class="columns">
              <div class="column">
                <div class="field">
                    <label class="label">ศูนย์ต้นทุน</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id1">
                    </p>
                  </div>
              </div>
              <div class="column">
                <div class="field">
                    <label class="label">เลขที่สินค้าคงคลัง	</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id2">
                    </p>
                  </div>
              </div>
              <div class="column">
                <div class="field">
                    <label class="label">สินทรัพย์</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id3">
                    </p>
                  </div>
              </div>
            </div>
            <h4 class="title-text">รายละเอียดสินค้า</h4>
            <div class="columns">
                <div class="column">
                  <div class="field">
                      <label class="label">เลขที่ผลิตภัณฑ์</label>
                      <p class="control">
                        <input class="input is-success" type="text" v-model="editData.id5">
                      </p>
                    </div>
                </div>
                <div class="column">
                  <div class="field">
                      <label class="label">วันที่โอนเป็นทุน</label>
                      <p class="control">
                        <input class="input is-success" type="text" v-model="editData.id6">
                      </p>
                    </div>
                </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                    <label class="label">คำอธิบายของสินทรัพย์</label>
                    <p class="control">
                      <textarea class="textarea is-success" type="text" v-model="editData.id4"  rows="4" cols="50" />
                    </p>
                  </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="field">
                    <label class="label">มูลค่าที่ได้มา</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id7" />
                    </p>
                  </div>
              </div>
              <div class="column">
                <div class="field">
                    <label class="label">ค่าเสื่อมสะสม</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id8" />
                    </p>
                  </div>
              </div>
            </div>
            <h4 class="title-text">รายละเอียดคลังสินค้า</h4>
            <div class="columns">
              <div class="column">
                <div class="field">
                    <label class="label">วิธีการได้มา</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id9" />
                    </p>
                  </div>
              </div>
              <div class="column">
                <div class="field">
                    <label class="label">จำนวนทั้งหมด</label>
                    <p class="control">
                      <input class="input is-success" type="text" v-model="editData.id10" />
                    </p>
                  </div>
              </div>
              <div class="column">
                <div class="field">
                    <label class="label">หน่วย</label>
                    <div class="select is-success">
                      <!-- <input class="input is-success" type="text" v-model="editData.id13" /> -->
                      <select v-model="editData.id13">
                        <option value="ชุด">ชุด</option>
                        <option value="ชิ้น">ชิ้น</option>
                        <option value="เครื่อง">เครื่อง</option>
                      </select>
                    </div>
                  </div>
              </div>
            </div>
            <!-- <h4 class="title-text">รายละเอียดสินค้า</h4> -->
            <!-- <input type="text" :placeholder="place.id1" v-model="editData.id1"> <br>
            <input type="text" :placeholder="place.id2" v-model="editData.id2"> <br>
            <input type="text" :placeholder="place.id3" v-model="editData.id3"> <br>
            <input type="text" :placeholder="place.id4" v-model="editData.id4"> <br>
            <input type="text" :placeholder="place.id5" v-model="editData.id5"> <br>
            <input type="text" :placeholder="place.id6" v-model="editData.id6"> <br>
            <input type="text" :placeholder="place.id7" v-model="editData.id7"> <br>
            <input type="text" :placeholder="place.id8" v-model="editData.id8"> <br>
            <input type="text" :placeholder="place.id9" v-model="editData.id9"> <br> -->
          </div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="addEdit(editData)">ยืนยัน</a>
          <a class="button is-info" @click="print(editData.id2)">พิมพ์รายงาน</a>
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

        <h4 class="title-text">รูปภาพ</h4>
        <div class="columns">
          <div class="column is-12">
            <img :src="image" v-if="image === '' " />
            <img :src="addNewData.id11" v-if=" addNewData.id11 !== '' " />
            <input type="file" @change="upload">
          </div>
        </div>

        <h4 class="title-text">รหัสสินค้า</h4>
        <div class="columns">
          <div class="column">
            <div class="field">
                <label class="label">ศูนย์ต้นทุน</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id1">
                </p>
              </div>
          </div>
          <div class="column">
            <div class="field">
                <label class="label">เลขที่สินค้าคงคลัง	</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id2">
                </p>
              </div>
          </div>
          <div class="column">
            <div class="field">
                <label class="label">สินทรัพย์</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id3">
                </p>
              </div>
          </div>
        </div>

        <h4 class="title-text">รายละเอียดสินค้า</h4>
        <div class="columns">
            <div class="column">
              <div class="field">
                  <label class="label">เลขที่ผลิตภัณฑ์</label>
                  <p class="control">
                    <input class="input is-success" type="text" v-model="addNewData.id5">
                  </p>
                </div>
            </div>
            <div class="column">
              <div class="field">
                  <label class="label">วันที่โอนเป็นทุน</label>
                  <p class="control">
                    <input class="input is-success" type="text" v-model="addNewData.id6">
                  </p>
                </div>
            </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
                <label class="label">คำอธิบายของสินทรัพย์</label>
                <p class="control">
                  <textarea class="textarea is-success" type="text" v-model="addNewData.id4"  rows="4" cols="50" />
                </p>
              </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
                <label class="label">มูลค่าที่ได้มา</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id7" />
                </p>
              </div>
          </div>
          <div class="column">
            <div class="field">
                <label class="label">ค่าเสื่อมสะสม</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id8" />
                </p>
              </div>
          </div>
        </div>
        <h4 class="title-text">รายละเอียดคลังสินค้า</h4>
        <div class="columns">
          <div class="column">
            <div class="field">
                <label class="label">วิธีการได้มา</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id9" />
                </p>
              </div>
          </div>
          <div class="column">
            <div class="field">
                <label class="label">จำนวน</label>
                <p class="control">
                  <input class="input is-success" type="text" v-model="addNewData.id10" />
                </p>
              </div>
          </div>
        </div>

        <!-- <input type="text" placeholder="ศูนย์ต้นทุน" v-model="addNewData.id1"> <br>
        <input type="text" placeholder="เลขที่สินค้าคงคลัง" v-model="addNewData.id2"> <br>
        <input type="text" placeholder="สินทรัพย์" v-model="addNewData.id3"> <br>
        <input type="text" placeholder="คำอธิบายของสินทรัพย์" v-model="addNewData.id4"> <br>
        <input type="text" placeholder="เลขที่ผลิตภัณฑ์" v-model="addNewData.id5"> <br>
        <input type="text" placeholder="วันที่โอนเป็นทุน" v-model="addNewData.id6"> <br>
        <input type="text" placeholder="มูลค่าที่ได้มา" v-model="addNewData.id7"> <br>
        <input type="text" placeholder="ค่าเสื่อมสะสม" v-model="addNewData.id8"> <br>
        <input type="text" placeholder="วิธีการที่ได้มา" v-model="addNewData.id9"> <br>
        <input type="text" placeholder="จำนวน" v-model="addNewData.id10"> <br>
        <input type="text" placeholder="รูปภาพ" v-model="addNewData.id11"> <br> -->
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
      add: false,
      addNewData: {},
      image: '',
      text: ''
    }
  },
  methods: {
    ...mapActions([
      'covertSource',
      'covertHeaders',
      'addNewDataVuex',
      'delTableData',
      'downloadFunction',
      'updatePic'
    ]),
    sortData (id) {
      let index = this.covertSource.findIndex(i => i.id2 === id)
      if (index === -1) {
        // not found
        alert('not Found!')
      } else {
        this.editData = this.covertSource[index]
        this.show = true
      }
    },
    edit (src) {
      this.editData = this.covertSource.filter(i => i.id2 === src)[0]
      // this.editData = this.editData[0]
      this.show = true
      console.log(this.editData)
    },
    addEdit (editData) {
      this.$store.dispatch('edit', editData)
      this.editData = {}
      this.image = ''
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
        'วิธีการที่ได้มา': this.addNewData.id9,
        'จำนวน': this.addNewData.id10,
        'รูปภาพ': this.addNewData.id11
      }
      console.log(data)
      this.$store.dispatch('addNewDataVuex', data)
      this.add = false
    },
    del (src) {
      // wait user interface for delete in table
      this.$store.dispatch('delTableData', src)
    },
    download () {
      this.$store.dispatch('downloadFunction')
    },
    upload (e) {
      console.log('this id : ', this.editData.id2) // global
      var files = e.target.files || e.dataTransfer.files
      console.log('file - ', files)
      if (!files.length) return
      this.createImg(files[0])
    },
    print (id) {
      // var content
      // var content = document.getElementById(id)
      // console.log(content)
      // console.log(document.body)
      // var printWindow = window.open('', '', 'height=400, width=1050,scrollbars=1')
      // if(content.outerHTML) content = content.outerHTML
      // var x = document.body
      // document.body = content
      // console.log(content)
      // var frame = document.createElement('div')
      // frame.innerHTML = content
      // console.log(content)
      // console.log(frame.innerHTML)
      // var res = document.body.innerHTML
      // var res = document.body
      // var pr = document.getElementById(id).innerHTML
      // document.body.innerHTML = content
      // document.body.innerHTML += content
      // console.log('before :', document.body.innerHTML)
      // console.log(typeof content)
      // document.body = content
      window.print()
      this.show = false
      // document.body = x
      // document.body.innerHTML = res
      // console.log('after :', document.body.innerHTML)
      // window.close()
      // document.body.innerHTML = res
    },
    createImg (files) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
        let data = {
          image: vm.image,
          id: this.editData.id2
        }
        this.$store.dispatch('updatePic', data)
      }
      reader.readAsDataURL(files)
    }
  },
  computed: {
    ...mapGetters([
      'covertSource',
      'covertHeaders'
    ])
    // ,
    // sortData () {
    //   return this.covertSource.filter(item => {
    //     return item.id2.indexOf(this.text) > -1
    //   })
    // }
  },
  async mounted () {
    this.$store.dispatch('covertHeaders')
    let x = await this.$store.dispatch('covertSource')
  }
}
</script>

<style lang="css">
.title-text {
  border-bottom: solid 2px #4ECD00;
  padding-bottom: 6px;
}

@page {
  size: A4;
  margin: 0;
  page-break-after: always;
}
@media print {
    body img {
       width: 35%;
    }
    .modal-card-foot {
      display: none;
    }
}
</style>
