<template>
  <div class="goods-list">
    <goods-list-item v-for="(product, index) in productList" 
           :key="index" 
           :id="showId(product)"
           :image="showImage(product)" 
           :title="product.title" 
           :price="product.price | toNumber" 
           :sale="showSell(product) | toNumber" 
           class="goods-list-item" 
           @load="load"/>
  </div>
</template>

<script>

import GoodsListItem from './goods-list-item/GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
    productList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
  methods: {
    load(e){
      this.$emit('load', e)
    }
  },
  computed: {
    showImage(){
      return p => {
        return p.image || p.show.img
      }
    },
    showId(){
      return p => {
        return p.iid || p.shop_id
      }
    },
    showSell(){
      return p => {
        return p.sale || p.itemSale
      }
    }
  },
  filters: {
    toNumber(str){
      return parseFloat(str)
    }
  }
}
</script>

<style scoped>
.goods-list-item{
	break-inside: avoid;
}
.goods-list{
	column-count: 2;
	column-gap: 13px;
  padding: 15px 13px 10px
}
</style>