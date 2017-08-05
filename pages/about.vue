<template>
  <div>
    <b-button class="btn"><nuxt-link to="/" class="no-style">Home page</nuxt-link></b-button>
    <b-button class="btn"><nuxt-link to="/nav" class="no-style">Nav</nuxt-link></b-button>
    <b-button class="btn"><nuxt-link to="/vuex" class="no-style">Vuex</nuxt-link></b-button>
    <b-button v-for="user in users" :key="user.id"  class="btn">
      <nuxt-link :to="'/users/'+user.id" class="no-style">{{ user.name }}</nuxt-link>
    </b-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return { users: data }
  }
}
</script>
<style scoped>
  .no-style {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
  .btn {
    background-color: #3b8070;
    display: block;
    margin: 0 auto;
    color: #fff;
  }
  .btn:hover {
    transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
  .btn:hover .no-style {
    text-decoration: line-through;
  }
</style>
