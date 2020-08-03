<template>
  <div class="feature-info-view">
    <div class="feature-info-view-title">本周流行</div>
    <div class="feature-info-view-show">
      <RoundInfoView v-for="featureInfo in featureInfos" :linkSrc="featureInfo.link" :src="featureInfo.image" :text="featureInfo.title" class="feature-info-view-item"/>
    </div>
  </div>
</template>

<script>

/*
 *引入组件
 */
import RoundInfoView from './common/RoundInfoView'


export default {
  name: 'FeatureInfoView',
  components: {
    RoundInfoView
  },
  props: {
    featureInfos: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.feature-info-view{
	padding: 17px 0 0px;
}
.feature-info-view-title{
	text-align: center;
	color: var(--text-color);
	font-weight: bold;
	letter-spacing: 1px;
  font-size: 16px;
}
.feature-info-view-show{
	display: flex;
	flex-wrap: wrap;
  padding: 16px 0 0px;
}
.feature-info-view-show >>> .round-info-view{
	flex-basis:93.75px;
}
.feature-info-view-item{
	margin-bottom: 15px;
}
</style>