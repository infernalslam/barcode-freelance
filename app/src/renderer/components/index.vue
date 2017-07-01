<template>
  <div>
    <section class="hero is-fullheight is-bg">
      <div class="hero-body">
        <div class="container">
          <div class="container has-text-centered">
            <div class="break"><h1 class="title title-text"> ระบบจัดการออเดอร์ </h1></div>
            <br>
          </div>
          <div class="columns">
            <div class="column">
              <div class="column">
                <div class="card">
                  <div class="card-detail">
                    <img src="../../../../static/file.jpg" width="178.56px" height="160px">
                    <h1 style="color: #000;"><b>กรอกข้อมูล</b></h1>
                    <b>กรอกข้อมูลเเละอัปเดตข้อมูล</b>
                    <br>
                    <router-link to="/form"  class="button is-danger" ><b>เลือก</b></router-link>
                  </div>
                </div>
                <br>
                <div class="card">
                  <div class="card-detail">
                    <img src="../../../../static/logo.png" width="178.56px" height="160px">
                    <h3 class="title" style="color: #000;"><b>เช็คสินค้า</b></h3>
                    <b>เช็คสินค้า</b>
                    <br>
                    <router-link to="/check"  class="button is-danger" ><b>เลือก</b></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style>
.is-bg {
  /*background: linear-gradient(to right, rgba(164,179,87,1) 0%, rgba(117,137,12,1) 100%);*/
}
.card {
  clear: both;
  height: 200px;
  width: auto;
  margin-left: 25%;
  margin-right: 25%;
  display: block;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}
.card img {
    height: 160px;
    float: left;
}
.card .card-detail {
    margin-left: 90px;
}
.break {
  margin-left: 25%;
  margin-right: 25%;
}

</style>
