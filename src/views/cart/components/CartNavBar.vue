<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <template v-slot:center>
        <span class="cart-title">购物车({{cartProductItemCount}})</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'CartNavBar',
  props: {
    cartProductItemCount: {
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.cart-nav-bar{
  background-color: pink;
}
.cart-title{
  color: #fff;
  font-size: 19px;
  letter-spacing: 1px;
}
</style>
