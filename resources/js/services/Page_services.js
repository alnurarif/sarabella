import Axios from 'axios'
export const getPageList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/pages`)
	.then((res) => {
		return res.data
	})
}
export const getPage = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/pages/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const getPageBySlug = async (slug) => {
	console.log(slug)
	return await Axios.get(`${process.env.MIX_APP_URL}/api/pages/get_by_slug/${slug}`)
	.then((res) => {
		return res.data;
	});
};
export const storeNewPage = async (data) => {
	//data.user_id = 1 // eita login kora user r id hobe
	return await Axios.post(`${process.env.MIX_APP_URL}/api/pages`, data)
	.then((res) => {
		return res.data
	})
}
export const updatePage = async (id, data) => {
	// data.user_id = 1;
	return await Axios.put(`${process.env.MIX_APP_URL}/api/pages/${id}`,data)
	.then((res) => {
		return res.data;
	});
};

export const deletePage = async (id) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/pages/${id}`)
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