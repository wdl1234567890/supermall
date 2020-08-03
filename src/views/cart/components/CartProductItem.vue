<template>
  <div class="cart-product-item">
    <el-row type="flex">
      <el-col :span="2">
        <div class="check-button">
          <check-button :is-check="cartProductItem.check" @click.native="checkChange"/>
        </div>
      </el-col>
      <el-col :span="6">
        <el-image :src="cartProductItem.image" fit="cover" class="item-image">
          <div slot="error" class="image-slot">
	          <i class="el-icon-picture-outline error-icon"></i>
	        </div>
	        <div slot="placeholder" class="image-slot">
	          <i class="placeholder-icon">fuling</i>
	        </div>
        </el-image>
      </el-col>
      <el-col :span="16" class="flex-column right-aside">
        <el-row>
          <el-col :span="24" class="over-text-ellipsis item-title"><span>{{cartProductItem.title}}</span></el-col>
          <el-col :span="24" class="over-text-ellipsis item-desc"><span>{{cartProductItem.desc}}</span></el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="12"><span class="price-view">￥{{cartProductItem.price}}</span></el-col>
          <el-col :span="12" class="count-view"><span>x{{cartProductItem.count}}</span></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import CheckButton from './CheckButton'

import { CHANGE_CART_PRODUCT_BY_ID } from 'vuex-const/action-const'

export default {
  name: 'CartProductItem',
  props: {
    cartProductItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkChange(){
      this.$store.dispatch(CHANGE_CART_PRODUCT_BY_ID, this.cartProductItem.id)
    }
  }
}
</script>

<style scoped>
.cart-product-item{
	padding: 8px 15px 8px 5px;
	border-bottom: 1px solid #eee;
  color: var(--text-color)
}
.right-aside{
  justify-content: space-between;
}
.count-view{
  text-align: right;
}
.item-image{
	width: 90%;
	height: 100px;
  border-radius: 6px;
  vertical-align: middle;
}
.item-title{
  color: #555;
  font-size: 19px;
  margin-bottom: 15px;
}
.item-desc{
  font-size: 16px;
}
.check-button{
  line-height: 100px;
}
.price-view{
  color: darkorange;
}
.count-view, .price-view{
  font-size: 18px;
}
</style>
