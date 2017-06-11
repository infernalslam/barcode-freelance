<template lang="html">
<div>
    fix code  <input type="text" id="barcode" autofocus v-model="barcode" v-on:keyup.13="submit">
  <router-link to="/"  class="button is-danger" ><b>กลับ</b></router-link>
</div>
</template>

<script>
export default {
  name: 'check',
  data () {
    return {
      barcode: ''
    }
  },
  mounted () {
    document.getElementById('barcode').focus()
  },
  methods: {
    submit () {
      console.log('this is my barcode : ', this.barcode)
    }
  }
}
</script>

<style lang="css">
</style>
