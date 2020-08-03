<template>
  <div class="cart-product-list">
    <CartProductItem v-for="item in cartProductList" :cartProductItem="item" :key="item.id"/>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem'
export default {
  name: 'CartProductList',
  props: {
    cartProductList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    CartProductItem
  }
}
</script>

<style scoped>

</style>
