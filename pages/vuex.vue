<template>
  <div>
    <p style="text-align: center;margin-top:50px">
      <b-tooltip content="about">
        <b-btn variant="outline-success"><nuxt-link to="/about" class="no-style">About</nuxt-link></b-btn>
      </b-tooltip>
      <b-tooltip content="home">
        <b-btn variant="outline-success"><nuxt-link to="/" class="no-style">Home</nuxt-link></b-btn>
      </b-tooltip>
      <b-tooltip content="nav">
        <b-btn variant="outline-success"><nuxt-link to="/nav" class="no-style">Nav</nuxt-link></b-btn>
      </b-tooltip>
      <br>
      <p style="width:400px;margin: 0 auto">
      <productlist/>
      <br>
      <br>
      <cart/>
      </p>
    </p>
  </div>
</template>

<script>
  import productlist from '~/components/productlist.vue'
  import cart from '~/components/cart.vue'

  export default {
    components: {
      productlist,
      cart
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
