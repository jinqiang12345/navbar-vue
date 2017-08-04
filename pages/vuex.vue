<template>
  <div>
    <p style="text-align: center">
      <br>
      <b-tooltip content="+1">
        <b-btn variant="outline-success" @click="increment">{{ counter }}</b-btn>
      </b-tooltip>
      <br>
      <br>
      <br>
      <b-tooltip content="pp">
        <b-btn variant="outline-success" @click="setzz">{{ zz }}</b-btn>
      </b-tooltip>
      <br>
      <br>
      <br>
      <b-tooltip content="about">
        <b-btn variant="outline-success" @click="setzz"><nuxt-link to="/about" class="no-style">About</nuxt-link></b-btn>
      </b-tooltip>
      <br>
      <br>
      <br>
      <b-tooltip content="home">
        <b-btn variant="outline-success" @click="setzz"><nuxt-link to="/home" class="no-style">Home</nuxt-link></b-btn>
      </b-tooltip>
      <br>
      <br>
      <br>
      <b-tooltip content="nav">
        <b-btn variant="outline-success" @click="setzz"><nuxt-link to="/nav" class="no-style">Nav</nuxt-link></b-btn>
      </b-tooltip>
    </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'counter', 'zz'
    ]),
    methods: {
      increment () { this.$store.commit('increment') },
      setzz () { this.$store.commit('setzz', 'pp') }
    }
  }
</script>
<style scoped>
  .no-style {
    text-decoration: none;
    color: #3b8070;
  }
  .no-style:hover {
    color: #fff;
  }
</style>
