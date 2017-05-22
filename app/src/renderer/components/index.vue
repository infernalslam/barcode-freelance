<template>
  <div>
    <section class="hero is-success is-fullheight is-bg">

      <div class="hero-body">
        <div class="container">


          <div class="container has-text-centered">
            <h1 class="title"> ระบบจัดการออเดอร์ </h1>
          </div>

          <div class="columns">

            <div class="column">
              <div class="column">
                <div class="card">
                  <img src="https://fitm-messenger-e96c4.firebaseapp.com/static/img/title1.f18ad57.svg">
                  <div class="card-detail">
                    <h1 style="color: #000;"><b>กรอกข้อมูล</b></h1>
                    <b>กรอกข้อมูลเเละอัปเดตข้อมูล</b>
                    <br>
                    <router-link to="/form"  class="button is-danger" ><b>เลือก</b></router-link>
                  </div>
                </div>
              </div>
            </div>




            <div class="column">
              <div class="column">
                <div class="card">
                  <img src="https://fitm-messenger-e96c4.firebaseapp.com/static/img/title1.f18ad57.svg">
                  <div class="card-detail">
                    <h1 style="color: #000;"><b>ดาว์นโหลดฐานข้อมูล</b></h1>
                    <b>ดาว์นโหลดข้อมูลใส่ mobile </b>
                    <br>
                    <button  class="button is-danger"><b>เลือก</b></button>
                  </div>
                </div>
              </div>
            </div>






            <div class="column">
              <div class="column">
                <div class="card">
                  <img src="https://fitm-messenger-e96c4.firebaseapp.com/static/img/title1.f18ad57.svg">
                  <div class="card-detail">
                    <h1 class="title" style="color: #000;"><b>เช็คสินค้า</b></h1>
                    <b>เช็คสินค้า</b>
                    <br>
                    <button  class="button is-danger"><b>เลือก</b></button>
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
  background: linear-gradient(135deg,#1a8efa,#5931b5);
}
.card {
  clear: both;
  height: 200px;
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

</style>
