<template>
  <b-list-group>
    <b-list-group-item v-for="p in products" :key="p.index" class="list">
    {{ p.title }} - ${{ p.price | currency }}
    <br>
    <b-button
      variant="danger"
      style="position:absolute; right:10px; top:13px"
      size="sm"
      :disabled="!p.inventory"
      @click="addToCart(p)">
      Add to cart
    </b-button>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
<style scoped>
  .list {
  background-color: #3b8070;
  color: #fff;
  }
</style>
