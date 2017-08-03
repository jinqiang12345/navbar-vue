<template>
  <div class="navbar">
    <ul class="menu">
      <li class="menuitem animated" v-for="item in items" :key="item.index"><i class="fa" :class="item.class" aria-hidden="true"></i>{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {class: 'fa-address-book', text: '导航一'},
        {class: 'fa-bandcamp', text: '导航二'},
        {class: 'fa-etsy', text: '导航三'},
        {class: 'fa-id-badge', text: '导航四'},
        {class: 'fa-quora', text: '导航五'},
        {class: 'fa-snowflake-o', text: '导航六'}
      ]
    }
  }
}
</script>
<style scoped>
@-webkit-keyframes move {
  0% {
    padding-left: 0;
  }
  50% {
    background-color: #3b8070;
    opacity: 0.8;
    color: #fff;
    padding-left:90%;
  }
  100% {
    padding-left: 0;
  }
}

@keyframes move {
  0% {
    padding-left: 0;
  }
  50% {
    background-color: #3b8070;
    opacity: 0.8;
    color: #fff;
    padding-left:90%;
  }
  100% {
    padding-left: 0;
  }
}
  .navbar {
    width: 200px;
    transform:rotate(90deg) translateY(-50%);
    -ms-transform:rotate(90deg) translateY(-50%); /* IE 9 */
    -webkit-transform:rotate(90deg) translateY(-50%); /* Safari and Chrome */
  }
  .menu {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .menu li {
    width: 100%;
    display: inline-block;
    background-color: #3b8070;
    border: 1px solid #fff;
    height: 30px;
    font-size: 0.9em;
    font-style: italic;
    font-weight: lighter;
    line-height: 30px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;
    box-shadow: 2px 2px 3px #8492A6;
  }
  .menu li:hover {
    width: 150%;
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
</style>
