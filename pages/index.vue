<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <nuxt-link to="/about" class="about">Axios</nuxt-link><br>
      <nuxt-link to="/table" class="about">Table</nuxt-link><br>
      <nuxt-link to="/nav" class="about">nav</nuxt-link><br>
      <nuxt-link to="/vuex" class="about">vuex</nuxt-link><br>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.about {
  color: #333;
  font-size: 8vh;
  text-shadow: 2px 2px 3px #999;
  text-decoration: none;
}
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
