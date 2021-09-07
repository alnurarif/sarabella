import Axios from 'axios'
export const getSubCategoryList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/sub_categories`)
	.then((res) => {
		return res.data
	})
}
export const getSubCategoryBySlug = async (slug) => {
	console.log(slug)
	return await Axios.get(`${process.env.MIX_APP_URL}/api/sub_categories/get_by_slug/${slug}`)
	.then((res) => {
		return res.data;
	});
};
export const getSubCategory = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/sub_categories/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const storeNewSubCategory = async (data) => {
	//data.user_id = 1 // eita login kora user r id hobe
	return await Axios.post(`${process.env.MIX_APP_URL}/api/sub_categories`, data)
	.then((res) => {
		return res.data
	})
}
export const updateSubCategory = async (id, data) => {
	// data.user_id = 1;
	return await Axios.put(`${process.env.MIX_APP_URL}/api/sub_categories/${id}`,data)
	.then((res) => {
		return res.data;
	});
};

export const deleteSubCategory = async (id) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/sub_categories/${id}`)
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