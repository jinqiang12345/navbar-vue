<template>
  <div class="navbar">
    <ul class="menu">
      <li class="menuitem animated" v-for="item in items" :style="item.width" :key="item.index"><i class="fa" :class="item.class" aria-hidden="true"></i>{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {class: 'fa-address-book', width: 'height:300px', text: '导航六'},
        {class: 'fa-bandcamp', width: 'height:270px', text: '导航五'},
        {class: 'fa-etsy', width: 'height:240px', text: '导航四'},
        {class: 'fa-superpowers', width: 'height:210px', text: '导航三'},
        {class: 'fa-quora', width: 'height:180px', text: '导航二'},
        {class: 'fa-snowflake-o', width: 'height:150px', text: '导航一'}
      ]
    }
  }
}
</script>
<style scoped>
@-webkit-keyframes move {
  0% {
  }
  30% {
    background-color: #3b8070;
    height: 300px;
    opacity: 0.8;
    color: #fff;
  }
  60% {
    background-color: #333;
    opacity: 0.5;
    color: #fff;
  }
  100% {
    background-color: #fff;
    color: #3b8070;
  }
}

@keyframes move {
  0% {
  }
  30% {
    background-color: #3b8070;
    height: 300px;
    opacity: 0.8;
    color: #fff;
  }
  60% {
    background-color: #333;
    opacity: 0.5;
    color: #fff;
  }
  100% {
    background-color: #fff;
    color: #3b8070;
  }
}
  body {
    padding: 0;
  }
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    padding: 0;
    z-index: 100;
    transform:rotate(90deg);
    -ms-transform:rotate(-45deg); /* IE 9 */
    -webkit-transform:rotate(0deg); /* Safari and Chrome */
  }
  .menu {
    margin: 0;
    padding: 0;
  }
  .menu li {
    display: inline-block;
    width: 30px;
    background-color: #3b8070;
    border: 1px solid #fff;
    font-size: 0.9em;
    font-style: italic;
    font-weight: lighter;
    line-height: 30px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    margin-right: 5px;
    box-shadow: 2px 2px 3px #8492A6;
    writing-mode: horizonta-tb-lr;
  }
  .menu li:hover {
    height: 150%;
    background-color: #fff;
    border: 1px solid #3b8070;
    color: #3b8070;
    -webkit-animation-name: move;
            animation-name: move;
    -webkit-animation-duration: 2s;
            animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
  }
  .menu li:active {
    background-color: #fff;
    color: #3b8070;
  }
  .menu li:hover~.menuitem{
    filter: blur(2px);
    -webkit-fliter: blur(2px);
    -o-fliter: blur(2px);
    -ms-fliter: blur(2px);
    -moz-fliter: blur(2px);
  }
  .menu li:hover i {
    font-size: 20px;
  }
  .fa {
    margin-right: 5%;
  }
  @media only screen and (max-width: 800px) {
    .navbar {
      display: none;
    }
  }
</style>
