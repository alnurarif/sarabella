import Axios from 'axios'
export const getCategoryList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/categories`)
	.then((res) => {
		return res.data
	})
}
export const getCategory = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/categories/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const storeNewCategory = async (data) => {
	//data.user_id = 1 // eita login kora user r id hobe
	return await Axios.post(`${process.env.MIX_APP_URL}/api/categories`, data)
	.then((res) => {
		return res.data
	})
}
export const updateCategory = async (id, data) => {
	// data.user_id = 1;
	return await Axios.put(`${process.env.MIX_APP_URL}/api/categories/${id}`,data)
	.then((res) => {
		return res.data;
	});
};

export const deleteCategory = async (id) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/categories/${id}`)
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