import { ADD_PRODUCT_COUNT, ADD_NEW_PRODUCT_TO_CART, SET_CART_PRODUCT_CHECK_BY_ID, CHANGE_ALL_CHECK_STATUS} from './const/mutations-const'
export default {
	[ADD_PRODUCT_COUNT](state, product){
    product.count += 1
	},
	[ADD_NEW_PRODUCT_TO_CART](state, product){
    state.cartProductList.push(product)
	},
	[SET_CART_PRODUCT_CHECK_BY_ID](state, payload){
    payload.cartProduct.check = payload.check
	},
	[CHANGE_ALL_CHECK_STATUS](state, status){
		state.cartProductList.forEach(item => item.check = status)
	}
}