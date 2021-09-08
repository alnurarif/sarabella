import Axios from 'axios'

export const orderForProduct = async (data) => {
	//data.user_id = 1 // eita login kora user r id hobe
	return await Axios.post(`${process.env.MIX_APP_URL}/api/orders`, data)
	.then((res) => {
		return res.data
	})
}
export const getOrderList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/orders`)
	.then((res) => {
		return res.data
	})
}
export const getOrder = async (id) => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/orders/${id}`)
	.then((res) => {
		return res.data;
	});
};
export const deleteOrder = async (id) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/orders/${id}`)
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