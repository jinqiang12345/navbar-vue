<template>
  <div class="cart">
    <b-list-group>
      <b-list-group-item active>Your Cart</b-list-group-item>
      <b-list-group-item v-show="!products.length"><i>Please add some products to cart.</i></b-list-group-item>
      <b-list-group-item v-for="p in products" :key="p.index" class="list">
        {{ p.title }} - {{ p.price | currency }} x <b-badge pill style="background-color: #fff;color:#3b8070;margin-left:10px">{{ p.quantity }}</b-badge>
      </b-list-group-item>
      <b-list-group-item active>Total: ${{ total | currency }}</b-list-group-item>
    </b-list-group>
    <br>
    <b-tooltip :content="checkoutStatus" placement="right">
      <b-btn variant="outline-success" :disabled="!products.length" @click="checkout(products)">Checkout</b-btn>
    </b-tooltip>
    <br>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    <br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products)
    }
  }
}
</script>
<style scoped>
  .list {
  background-color: #3b8070;
  color: #fff;
  text-align: center;
  }
</style>
