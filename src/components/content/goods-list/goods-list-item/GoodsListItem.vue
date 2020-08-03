<template>
  <div class="goods-list-item" @click="clickToDetail">
    <a href="javascript:;" class="goods-item">
      
      <img v-lazy="image" class="image" @load="load"/>
      <div class="goods-infos">
        <div class="title">{{title}}</div>
        <div class="number-infos">
          <span class="price">{{price}}</span>
          <span class="sale">{{sale}}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    id: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    sale: {
      type: Number,
      default: 0
    }
  },
  methods: {
    load(e){
      this.$bus.$emit('imageLoaded')
    },
    clickToDetail(){
      const url = '/detail/'+this.id
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.goods-item, .image{
	width: 100%;
}
.image{
  border-radius: 7px;
}
.goods-infos{
	text-align: center;
  padding: 5px 0 8px;
  font-size: 14px;
}
.title{
	color: var(--text-color);
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
  padding-bottom: 6px;
}
.price{
	 color: pink;
	 margin-right: 25px;
}
.sale{
	color: var(--text-color);
	position: relative;
}
.sale:before{
  content: '';
  position:absolute;
  width: 15px;
  height: 15px;
  top: 3px;
  left: -16px;
	background: url('~img/common/collect.svg');
  background-size: 100%;
}


</style>