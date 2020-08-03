<template>
  <div class="flex-row align-items-center cart-tab-bar">
    <div class="flex-row align-items-center" @click="changeAllCheck">
      <check-button class="all-check-button" :is-check="isAllCheck"/>
      <span class="all-check-text">全选</span>
    </div>
    <div class="flex-row align-items-center all-price-show">
      <span>合计：</span>
      <span>￥{{allCheckPrice}}</span>
    </div>
    <div class="go-to-cal" @click="goToCal">去计算({{allCheckCount}})</div>
  </div>
</template>

<script>

import CheckButton from './CheckButton'

import { mapGetters } from 'vuex'
import { CHANGE_ALL_CHECK_STATUS } from 'vuex-const/mutations-const'

export default {
  name: 'CartTabBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['isAllCheck', 'allCheckPrice', 'allCheckCount'])
  },
  methods: {
    changeAllCheck(){
      let allCheckStatus = this.isAllCheck
      this.$store.commit(CHANGE_ALL_CHECK_STATUS, !allCheckStatus)
    },
    goToCal(){
      this.$emit('goToCal')
    }
  }
}
</script>

<style scoped>
.cart-tab-bar{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 49px;
	height: 44px;
	background-color: #eee;
	padding-left: 12px;
}
.all-check-text{
	color: var(--text-color);
	margin-left: 8px;
}
.align-items-center{
	align-items: center;
}
.all-price-show{
	margin-left: 30px;
	color: #555;
  font-size: 17px;
}
.go-to-cal{
	height: 100%;
	padding: 0 24px;
	background-color: red;
	color: #fff;
	font-size: 15px;
	line-height: 44px;
	position: absolute;
	right: 0;
}
</style>