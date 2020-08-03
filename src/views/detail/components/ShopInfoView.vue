<template>
  <div class="shop-info-view">
    <div class="flex-row shop-logo-name-view">
      <div class="shop-logo-view">
        <img :src="shopInfo.logo" class="shop-logo"/>
      </div>
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="shop-detail-info-view">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="9" class="left-aside">
          <el-row>
            <el-col :span="12" class="text-center">
              <el-row>
                <el-col :span="24" class="margin-bottom">{{shopInfo.sells | formatToTenThousand}}</el-col>
                <el-col :span="24" class="font-size-14">总销量</el-col>
              </el-row>
            </el-col>
            <el-col :span="12" class="text-center">
              <el-row>
                <el-col :span="24" class="margin-bottom">{{shopInfo.goodsCount}}</el-col>
                <el-col :span="24" class="font-size-14">全部宝贝</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="3">
          <div class="line"></div>
        </el-col>
        <el-col :span="10" class="right-aside">
          <el-row>
            <el-col :span="24">
              <el-row v-for="(item, index) in shopInfo.score" :class="{'margin-bottom': marginBottom(index), 'high-degree': item.isBetter, 'low-degree': !item.isBetter}">
                <el-col :span="15" class="text-center">{{item.name}}</el-col>
                <el-col :span="6" class="shop-score">{{item.score}}</el-col>
                <el-col :span="3">
                  <span class="degree">{{degreeText(item.isBetter)}}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="button-view">
      <span class="goto-shop-button">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfoView',
  data(){
    return {
    }
  },
  props: {
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    degreeText(){
      return (isBetter) => {
        return isBetter ? '高' : '低'
      }
    },
    marginBottom(){
      return (index) => {
        return index != (this.shopInfo.score.length - 1)
      }
    }
  },
  filters: {
    formatToTenThousand(number){
      if(number >= 10000){
        number = (number / 10000).toFixed(1) + '万'
      }
      return number
    }
  }
}
</script>

<style scoped>
.shop-info-view{
	padding: 25px 15px;
	border-bottom: 5px solid #eee;
	color: var(--text-color);
}
.button-view{
	text-align:center;
}
.goto-shop-button{
	padding: 8px 40px;
	border-radius: 10px;
	background-color: #eee;
	display: inline-block;

}
.shop-logo-name-view{
	align-items: center;
}
.shop-logo-view{
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 1px solid #ccc;
  display:inline-block;
	margin-right: 10px;
	overflow: hidden;
}
.shop-logo{
	width: 100%;
	height: 100%;
	vertical-align: middle;
}
.shop-name{
	font-size:18px;
	color: var(--text-color)
}
.shop-detail-info-view{
	padding: 30px 0;
}
.margin-bottom{
	margin-bottom: 9px;
}
.line{
	background-color: #eee;
	height: 40px;
	width: 2px;
	margin: 0 auto;
}
.degree{
	padding: 1px;
	border-radius: 4px;
	color: #fff;
}
.low-degree .degree{
  background-color: red;
}
.low-degree .shop-score{
	color: red;
}
.high-degree .degree{
	background-color: green;
}
.high-degree .shop-score{
	color: green;
}
.right-aside{
	font-size: 14px;
}
.left-aside{
	font-size: 16px;
}
.text-center{
	text-align: center;
}
.font-size-14{
	font-size: 14px;
}
</style>