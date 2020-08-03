<template>
  <div class="cart">
    <cart-nav-bar :cartProductItemCount="getCartProductItemLength"/>
    <scroll class="cart-product-list-scroll" ref="cartScroll">
      <cart-product-list :cartProductList="getCartProductList"/>
    </scroll>
    <cart-tab-bar @goToCal="goToCal"/>
  </div>
</template>

<script>

/*
 *引入组件
 */

import Scroll from 'components/common/scroll/Scroll'

import CartNavBar from './components/CartNavBar'
import CartProductList from './components/CartProductList'
import CartTabBar from './components/CartTabBar'

/*
 *引入vuex相关信息
 */
import { mapGetters } from 'vuex'

export default {
  name: 'cart',
  components: {
    Scroll,
    CartNavBar,
    CartProductList,
    CartTabBar
  },
  computed: {
    ...mapGetters(['getCartProductList', 
    'getCartProductListLength',
    'getCartProductItemLength', 'getCartProductCheckLength'])
  },
  activated(){
    this.$refs.cartScroll.refresh()
  },
  methods: {
    goToCal(){
      if(!this.getCartProductListLength){
        this.$toast.show('购物车空空如也')
      }else if(!this.getCartProductCheckLength){
        this.$toast.show('请先选择商品')
      }
    }
  }
}
</script>

<style scoped>
.cart-product-list-scroll{
	position: fixed;
	left: 0;
	right: 0;
	top: 44px;
	bottom: 93px;
	overflow: hidden;
}
</style>
