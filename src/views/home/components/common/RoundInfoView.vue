<template>
  <div class="round-info-view">
    <a class="round-info-view-item" :href="linkSrc">
      <img :src="src" class="round-info-view-image"/>
      <div>{{text}}</div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'RoundInfoView',
  props: {
    linkSrc: String,
    src: String,
    text: String
  }
}
</script>

<style scoped>
.round-info-view{
  flex: 1;
  text-align: center;
  font-size: 15px;
}

.round-info-view-image{
  width: 70px;
  height: 70px;
  border-radius: 70px;
  margin-bottom: 10px;
  vertical-align: middle;
}
</style>