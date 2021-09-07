import Axios from 'axios'
export const getSectionList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/sections`)
	.then((res) => {
		return res.data
	})
}
export const getSection = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/sections/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const storeNewSection = async (data) => {
	//data.user_id = 1 // eita login kora user r id hobe
	return await Axios.post(`${process.env.MIX_APP_URL}/api/sections`, data)
	.then((res) => {
		return res.data
	})
}
export const updateSection = async (id, data) => {
	// data.user_id = 1;
	return await Axios.put(`${process.env.MIX_APP_URL}/api/sections/${id}`,data)
	.then((res) => {
		return res.data;
	});
};

export const deleteSection = async (id) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/sections/${id}`)
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