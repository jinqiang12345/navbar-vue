<template>
  <div class="headtop">
    <b-navbar toggleable type="inverse" class="bar">
     <b-nav-toggle target="nav_collapse"></b-nav-toggle>
     <b-link class="navbar-brand" to="#">
       <span>vue</span>
     </b-link>
     <b-collapse is-nav id="nav_collapse">
       <b-nav is-nav-bar>
         <b-nav-item class="menu"><nuxt-link to="/about" class="no-style">About page</nuxt-link></b-nav-item>
         <b-nav-item class="menu"><nuxt-link to="/nav" class="no-style">Nav</nuxt-link></b-nav-item>
         <b-nav-item class="menu"><nuxt-link to="/vuex" class="no-style">Vuex</nuxt-link></b-nav-item>
       </b-nav>
       </b-nav>
     </b-collapse>
   </b-navbar>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .headtop {
    z-index: 100;
  }
  .bar {
    background-color: #3b8070;
  }
  .menu {
    color: #fff;
  }
  .menu:hover {
    text-decoration: line-through;
  }
  .Langitem {
    background-color: #fff;
    color:#333;
    outline: none;
  }
  .Langitem:hover {
    background-color: #3b8070;
    border: none;
  }
  .no-style {
    text-decoration: none;
    color:rgba(255, 255, 255, 0.5);
  }
</style>
