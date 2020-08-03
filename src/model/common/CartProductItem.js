export default class CartProductItem{
	constructor(id = -1, title, desc, image, price, count = 1, check = true){
		this.id = id
		this.title = title
		this.desc = desc
		this.image = image
		this.price = price
    this.count = count
    this.check = check
	}
}