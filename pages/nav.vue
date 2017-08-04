<template>
  <div class="nav">
    <div class="head">
      <headtop/>
      <carousel/>
    </div>
    <navbar/>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import carousel from '~/components/carousel.vue'
import headtop from '~/components/headtop.vue'
export default {
  components: {
    navbar,
    carousel,
    headtop
  }
}
</script>
<style scoped>
  .head {
    width: 100%;
    background-color: #3b8070;
    border-bottom: 1px solid #fff;
    clear: both;
  }
  .carousel {
    margin-top: 300px;
  }
</style>
