<template>
  <div v-if="showGoodsInfo" class="flex-column goods-info-view">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="priceView">
      <span class="nowPrice">{{goodsInfo.newPrice}}</span>
      <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discount" class="discount-icon">{{goodsInfo.discount}}</span>
    </div>
    <div class="flex-row infosView">
      <span v-for="item in goodsInfo.columns">{{item}}</span>
    </div>
    <div class="flex-row stateView">
      <div v-for="item in goodsInfo.services" class="flex-row per-state">
        <img :src="item.icon"/>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfoView',
  props: {
    goodsInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showGoodsInfo(){
      return Object.keys(this.goodsInfo).length != 0
    }
  }
}
</script>

<style scoped>
.goods-info-view{
	padding: 10px 11px 0 11px;
	border-bottom: 5px solid #eee;
	--grey-color: #ccc;
}
.title{
	color: var(--text-color);
	font-size: 22px;
	letter-spacing: 1px;
	font-weight: bold;
  padding: 5px 0;
}
.priceView{
	padding: 6px 0;
}
.nowPrice{
	color: pink;
	font-size: 22px;
}
.oldPrice{
	color: var(--grey-color);
	text-decoration: line-through;
	font-size: 15px;
	margin: 0 3px;
}
.discount-icon{
	display: inline-block;
	background-color: pink;
	padding: 2px 8px;
	text-align: center;
	color: #fff;
	font-size: 18px;
	border-radius: 16px;
}
.infosView, .stateView{
	justify-content: space-between;
}
.infosView{
	color: var(--grey-color);
	font-size: 12px;
	padding: 10px 0;
	border-bottom: 1px solid #eee;
}
.stateView{
	font-size: 14px;
	color: var(--text-color);
	padding: 18px 0;
}
.stateView img{
	width: 15px;
	height: 15px;
	vertical-align: middle;
	margin-right: 2px;
}
.per-state{
	align-items: center;
}
</style>