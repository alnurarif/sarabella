import Axios from 'axios'
export const getProductList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/products`)
	.then((res) => {
		return res.data
	})
}
export const getProductById = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/products/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const getProduct = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/products/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const storeNewProduct = async (data) => {
	//data.user_id = 1 // eita login kora user r id hobe
	return await Axios.post(`${process.env.MIX_APP_URL}/api/products`, data)
	.then((res) => {
		return res.data
	})
}
export const updateProduct = async (id, data) => {
	// data.user_id = 1;
	return await Axios.put(`${process.env.MIX_APP_URL}/api/products/${id}`,data)
	.then((res) => {
		return res.data;
	});
};

export const deleteProduct = async (id) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/products/${id}`)
	.then((res) => {
		return res.data;
	});
};

export const deleteDataByIdFromLocalList = (primaryKey = 'id', id, list) => {
	return list
	.filter((data) => { return (data[primaryKey] != id) ? true : false })
	.map((data) => { return  data })
}
export const getDataByNameFromLocalList = (searchString = '', list) => {
	return list
	.filter((data) => { return (data.name.toLowerCase().includes(searchString)) ? true : false })
	.map((data) => { return data })
}
export const checkColorExistsInAvailableColor = (selectedColor, selectedColors) => {
	let found = false
	selectedColors.forEach((color,index) => {
		if(!found){
			found = (color.id == selectedColor.id) ? true : false	
		}
		
	})
	return (!found) ? selectedColor : null
}
export const existsInProductCart = (product, product_cart) => {
	let found = false
	product_cart.map((single_product, index) => {
		if(product.id == single_product.id)
			found = true
	
	})
	return found
}
export const convertFractionToDiv = (value) => {
	let convertedValue = 0
	if(value == "0"){
		 convertedValue = "0"
	}else if(value == "0.125"){
		 convertedValue = "1/8";
	}else if(value == "0.25"){
		 convertedValue = "1/4";
	}else if(value == "0.375"){
		 convertedValue = "3/8";
	}else if(value == "0.5"){
		 convertedValue = "1/2";
	}else if(value == "0.625"){
		 convertedValue = "5/8";
	}else if(value == "0.75"){
		 convertedValue = "3/4";
	}else if(value == "0.875"){
		 convertedValue = "7/8";
	}
	return convertedValue
}
export const getMountTypeName = (value) => {
	let name = ''
	if(value == 'inside'){
		name = 'Inside'		
	}else if(value == 'outside'){
		name = 'Outside'		
	}
	return name
}
export const getLiftStyeName = (value) => {
	let name = ''
	if(value == 'cordless'){
		name = 'Cordless'		
	}else if(value == 'continuous_cord_loop'){
		name = 'Continuous Cord Loop'		
	}else if(value == 'motorization'){
		name = 'Motorization'		
	}
	return name
}
export const getRollPositionName = (value) => {
	let name = ''
	if(value == 'standard_roll'){
		name = 'Standard Roll'		
	}else if(value == 'reverse_roll'){
		name = 'Reverse Roll'		
	}
	return name
}
export const getHeadRailName = (value) => {
	let name = ''
	if(value == 'exposed_roll'){
		name = 'Exposed Roll'		
	}else if(value == 'cassette'){
		name = 'Cassette'		
	}
	return name
}
export const getBottomHemStyleName = (value) => {
	let name = ''
	if(value == 'plain_hem'){
		name = 'Plain Hem'		
	}else if(value == 'wave_hem'){
		name = 'Wave'		
	}else if(value == 'scallop_hem'){
		name = 'Scallop'		
	}else if(value == 'rounded_hem'){
		name = 'Rounded'		
	}
	return name
}