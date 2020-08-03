<template>
  <div class="mall-tabar">
    <tabar>
		  <tabar-item v-for="tabarItem in tabar" :icon-src="tabarItem.iconSrc" :icon-text="tabarItem.iconText" :key="tabarItem.id" :path="tabarItem.path" :icon-active-src="tabarItem.iconActiveSrc"/>
		</tabar>
  </div>
</template>

<script>
import { Tabar, TabarItem } from 'components/common/tabar'
export default {
  name: 'MallTabar',
  components: {
    Tabar,
    TabarItem
  },
  props: {
    tabar: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>

