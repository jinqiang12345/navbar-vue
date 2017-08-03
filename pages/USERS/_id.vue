<template>
  <div class="user animated" :class="{flash: active}" @click="out">
    <h3>{{ name }}</h3>
    <h4>{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p>{{ phone }}</p>
    <p><nuxt-link to="/">home page</nuxt-link></p>
    <br><br>
    <div class="container">
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    out: function () {
      this.active = !this.active
    }
  },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style scoped>
  .user{
    text-align: center;
    margin-top: 100px;
    font-family: sans-serif;
  }
  .container {
    position: relative;
    width: 200px;
    height: 200px;
    padding: 5px;
    border: 5px solid rgb(118, 218, 255);
    border-radius: 50%;
    overflow: hidden;
  }
   .wave {
     position: absolute;
     left: 3px;
     top: 3px;
     width: 184px;
     height: 184px;
     background-color: rgb(118, 218, 255);
     border-radius: 50%;
   }
   .wave::before, .wave::after {
     content: "";
     position: absolute;
     width: 368px;
     height: 368px;
     top: 0;
     left: 50%;
     background-color: rgba(255, 255, 255, .5);
     border-radius: 45%;
     transform: translate(-50%, -70%) rotate(0);
     -webkit-transform: translate(-50%, -70%) rotate(0);
     animation: rotate 6s linear infinite;
     -webkit-animation: rotate 6s linear infinite;
     z-index: 10;
   }
   .wave::after {
     border-radius: 47%;
     background-color: rgba(255, 255, 255, .9);
     animation: rotate 10s liner -5s infinite;
     -webkit-animation: rotate 10s linear -5s infinite;
     z-index: 20;
   }
  @-webkit-keyframes rotate {
    50% {
      -webkit-transform: translate(-50%, -73%) rotateZ(180deg);
              transform: translate(-50%, -73%) rotateZ(180deg);
    }
    100% {
      -webkit-transform: translate(-50%, -70%) rotateZ(360deg);
              transform: translate(-50%, -70%) rotateZ(360deg);
    }
  }

  @keyframes rotate {
    50% {
      -webkit-transform: translate(-50%, -73%) rotateZ(180deg);
              transform: translate(-50%, -73%) rotateZ(180deg);
    }
    100% {
      -webkit-transform: translate(-50%, -70%) rotateZ(360deg);
              transform: translate(-50%, -70%) rotateZ(360deg);
    }
  }
</style>
