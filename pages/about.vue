<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
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
    display: inline-block;
  }
  .btn:hover {
    background-color: #fff;
    filter: blur(1px);
  }
  .btn:hover .no-style {
    color: #3b8070;
    text-decoration: line-through;
  }
</style>
