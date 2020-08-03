<template>
  <div class="recommend-view">
    
    <recommend v-for="recommend in recommends" :key="recommend.acm" :src="recommend.image" :text="recommend.title" :linkSrc="recommend.link"/>
  </div>
</template>

<script>
import Recommend from './common/RoundInfoView'
export default {
  name: 'RecommendView',
  components: {
    Recommend
  },
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend-view{
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 10px solid var(--background-color);
}

</style>