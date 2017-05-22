<template lang="html">
<div>


  <table class="table">
    <thead>
    <tr>
      <th v-for="h in covertHeaders">  {{ h.id }} </th>
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
    </tr>
  </tbody>
  </table>

  <br>
</div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'tableView',
  data() {
    return {
      sourceData: []
    }
  },
  methods: {
    ...mapActions([
      'covertSource',
      'covertHeaders'
    ])
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
