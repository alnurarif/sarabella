export const existsInFreeSampleCart = (product_color, free_sample_cart) => {
	let found = false
	free_sample_cart.map((single_sample, index) => {
		if(product_color.id == single_sample.id)
			found = true
	
	})
	return found
}