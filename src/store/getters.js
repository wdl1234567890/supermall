export default {
	getCartProductList(state){
		return state.cartProductList
	},
	getCartProductListLength(state){
		return state.cartProductList.length	
	},
	getCartProductItemLength(state){
		if(!state.cartProductList.length)return 0
		return state.cartProductList.reduce((totalCount, item) => totalCount + item.count, 0)	
	},
	getCartProductCheckLength(state){
		if(!state.cartProductList.length)return 0
    return state.cartProductList.filter(item => item.check).length;
	},
	findCartProductById(state, id){
    return id => state.cartProductList.find(item => item.id == id)
	},
	isAllCheck(state){
		return state.cartProductList.length != 0 && state.cartProductList.every(item => item.check)
	},
	allCheckPrice(state){
		if(!state.cartProductList.length)return 0
    return state.cartProductList.filter(item => item.check).reduce((preSum, item) => preSum + item.price * item.count, 0);
	},
	allCheckCount(state){
		if(!state.cartProductList.length)return 0
    return state.cartProductList.filter(item => item.check).reduce((totalCount, item) => totalCount + item.count, 0)
	}
}