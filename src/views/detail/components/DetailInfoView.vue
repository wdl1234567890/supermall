<template>
  <div class="detail-info-view">
    <div class="desc-view">
      <div class="start">~~~~</div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end">~~~~</div>
    </div>
    <div class="keyword" v-if="showDetailInfo">{{detailInfo.detailImage[0].key}}</div>
    <div class="image-view" v-if="showDetailInfo">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" @load="load"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfoView',
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showDetailInfo(){
      return Object.keys(this.detailInfo).length != 0 && Object.keys(this.detailInfo.detailImage).length != 0
    }
  },
  methods: {
    load(){
      this.$bus.$emit('imageLoaded')
    }
  }
}
</script>

<style scoped>
.detail-info-view{
	padding: 10px 11px 25px;
	border-bottom: 5px solid #eee;
}
.desc-view{
	margin-bottom: 5px; 
	letter-spacing: 1px;
	line-height: 25px;
}
.desc{
  color: #999;
	padding: 7px 3px;
}
.start, .end{
	font-size: 12px;
	color: #999;
}
.end{
	text-align: right;
}
.keyword{
	color: var(--text-color);
  font-size: 17px;
  padding: 10px 0 15px;
  letter-spacing: 1px;
}
.image-view img{
	width: 100%;
}
</style>