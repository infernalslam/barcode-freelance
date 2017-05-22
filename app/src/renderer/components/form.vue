<template lang="html">
  <div>
    <section class="hero is-success is-fullheight is-bg">


      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-right nav-menu">
              <span class="nav-item">
                <router-link to="/" class="button is-danger is-focused" style="color: #fff;"> <b>กลับไปหน้าเเรก</b></router-link> &nbsp&nbsp

                <div class="file-input-wrapper">
                  <label class="file-input-button">อัปเดตฐานข้อมูล <input type="file" @change="onFileChange" /> </label>
                  <!-- <input type="file" name="image" /> -->
                </div>

                <!-- <router-link to="/" class="button is-success is-focused" style="color: #fff;" @click="update()"> <b>อัปเดตฐานข้อมูล</b></router-link> -->
              </span>
            </div>
          </div>
        </header>
      </div>


      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Full Height title
          </h1>
          <h2 class="subtitle">
            Full Height subtitle
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'form',
  methods: {
    onFileChange (e) {
      let vm = this
      let reader = new FileReader()
      let file = e.target.files[0]
      reader.onload = (event) => {
        vm.parseCSV(reader.result)
      }
      reader.readAsText(file)
    },
    parseCSV (csv) {
      let newLine = (csv.indexOf('\n') > -1) ? '\n' : '\r'
      let lines = csv.split(newLine)
      let headers = lines[0].split(',')
      console.log('headers: ', headers)
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
