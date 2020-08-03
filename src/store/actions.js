import { ADD_PRODUCT_COUNT, ADD_NEW_PRODUCT_TO_CART, SET_CART_PRODUCT_CHECK_BY_ID } from './const/mutations-const'
import { ADD_TO_CART, CHANGE_CART_PRODUCT_BY_ID} from './const/action-const'
export default {
  [ADD_TO_CART](context,product){
    return new Promise((resolve, reject) => {
      let oldProduct = context.getters.findCartProductById(product.id)
      if(oldProduct){
        context.commit(ADD_PRODUCT_COUNT, oldProduct)
        resolve('商品数量加一')
      }else{
        context.commit(ADD_NEW_PRODUCT_TO_CART, product)
        resolve('加入新商品')
      }
    })
  },
  [CHANGE_CART_PRODUCT_BY_ID](context, id){
    let cartProduct = context.getters.findCartProductById(id)
    context.commit(SET_CART_PRODUCT_CHECK_BY_ID, {
    	cartProduct,
    	check: !(cartProduct.check)
    })
  }
}