<template>
  <div class="car">
    <b-carousel controls indicators :interval="5000" height="500px" background="#3b8070">

  <!-- Text slides -->
      <b-carousel-slide height="500px" img="http://placeskull.com/1800/500/ABABAB/-1/0">
      </b-carousel-slide>

  <!-- Slides with custom text -->
      <b-carousel-slide height="500px" img="http://placeskull.com/1800/500/1C90F3/-1/0">
      </b-carousel-slide>

  <!-- Slides with image -->
      <b-carousel-slide height="500px" img="http://placeskull.com/1800/500/f44336/-1/0">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .car{
    z-index: 1;
    width: 100%;
  }
</style>
