<template>
  <div class="goods-param-view">
    <div v-if="showTable">
      <el-row type="flex" justify="space-between" v-for="item in goodsParam.sizes[0]" class="tr-class">
        <el-col v-for="param in item" :span="4">{{param}}</el-col>
      </el-row>
    </div>
    <div v-if="showTable" class="info-table">
      <el-row type="flex" v-for="item in goodsParam.infos" class="tr-class">
        <el-col :span="8">{{item.key}}</el-col>
        <el-col :span="16" class="info-value-color">{{item.value}}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsParamView',
  props: {
    goodsParam: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showTable(){
      return Object.keys(this.goodsParam).length != 0 && Object.keys(this.goodsParam.sizes).length != 0 && Object.keys(this.goodsParam.infos).length != 0
    }
  }
}
</script>

<style scoped>
.goods-param-view{
	padding: 25px 15px 25px;
	border-bottom: 5px solid #eee;
	color: var(--text-color);
	letter-spacing: 1px;
}
.tr-class{
	border-bottom: 1px solid #eee;
	padding: 13px 0;
}
.info-value-color{
	color: pink;
}
.info-table{
	border-top: 1px solid #eee;
}
</style>