<template>
  <div class="tabar">
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'Tabar'
}
</script>

<style>
  .tabar{
    display: flex;
    
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>