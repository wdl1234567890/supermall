import { request } from 'network/request'

export function getDetail(id){
  return request({
  	url: 'detail',
  	params: {
  	  iid: id
  	}
  })
}

export function getRecommend(){
	return request({
		url: 'recommend'
	})
}

export class GoodsInfo{
	constructor(itemInfo, columns, services){
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns.splice(0,columns.length - 1)
		this.columns.push(services[services.length - 1].name)
		this.services = services.splice(0,services.length - 1)
		this.realPrice = itemInfo.lowNowPrice
	}
}

export class ShopInfo{
	constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
	}
}

export class GoodsParam{
	constructor(info, rule){
		this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
	}
}