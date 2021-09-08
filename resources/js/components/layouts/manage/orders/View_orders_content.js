import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {
	getOrderList,
	deleteOrder,
	deleteDataByIdFromLocalList,
	getDataByNameFromLocalList} from '../../../../services/Order_services'
import Button from '../../../common_elements/Button'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class View_orders_content extends Component{
	state = {
		orders : [],
		temporary_orders : [],
		selectedOrderId : null,
		search_data : ''
	}
	updateSearch = (e) => {
		this.setState({
			search_data : e.target.value 
		})
	}
	componentDidMount(){
		this.getOrders()
	}
	getOrders = async (callback = () => {}) => {
		let response = await getOrderList()
		this.setState({
			orders : response.data,
			temporary_orders : response.data
		})
		callback()
	}
	deleteDataFromLocal = (id) => {
		let orders = deleteDataByIdFromLocalList('id',this.state.selectedOrderId,this.state.orders)
		this.setState({
			orders,
			temporary_orders : orders
		})
	}
	searchByName = () => {
		let foundOrders = getDataByNameFromLocalList(this.state.search_data, this.state.orders)
		this.setState({
			temporary_orders : foundOrders
		})
	}
	deleteConfirmation = (id) => {
		this.setState({
			selectedOrderId : id 
		})

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='fix custom-ui'>
						<div className='fix w_300 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash'>
							<div className="fix full pt_5 pr_10 pb_5 pl_5 border_box bg_brown2">
								<p className="fs_14 text_white font_bold">Are you sure?</p>
							</div>
							<div className="fix full pt_5 pr_10 pb_5 pl_5 border_box">
								<p className="fs_14 mt_20 text_dark_ash">Do you want to delete this data?</p>
								<div className="fix full mt_20 floatright">
									<Button 
									buttonTitle="No"
									buttonBackground="bg_green"
									buttonFontSize="fs_12"
									buttonPaddingTop="pt_5"
									buttonPaddingBottom="pb_5"
									buttonPaddingRight="pr_10"
									buttonPaddingLeft="pl_10"
									buttonFontWeight="font_bold"
									buttonTextColor="text_white"
									buttonMarginLeft="ml_5"
									buttonMarginRight="mr_5"
									buttonFloat="floatright"
									buttonFunction={() => {
										onClose()
									}}/>

									<Button 
									buttonTitle="Yes"
									buttonBackground="bg_red"
									buttonFontSize="fs_12"
									buttonPaddingTop="pt_5"
									buttonPaddingBottom="pb_5"
									buttonPaddingRight="pr_10"
									buttonPaddingLeft="pl_10"
									buttonFontWeight="font_bold"
									buttonTextColor="text_white"
									buttonMarginLeft="ml_5"
									buttonMarginRight="mr_5"
									buttonFloat="floatright"
									buttonFunction={() => {
										deleteOrder(this.state.selectedOrderId)
										this.getOrders(() => {onClose()})
										this.setState({
											selectedOrderId : null
										})
										
									}}/>

								</div>
							</div>
						</div>
					</div>
				);
			}
		});
	}
	render(){
		
		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">View Orders</p>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">View and Manage Orders</p>
				</div>
				<div className="fix full bt_1 border_top_ash border_top_solid"></div>
				<div className="fix full mt_20 mb_20">
					<button className="bg_brown2 text_white font_bold fs_14 floatright h_30 pl_16 pr_16 border_none" onClick={this.searchByName}>Search</button>
					<input type="text" name="search" placeholder="Search" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash pl_5 pr_5 w_150 border_box floatright" onChange={(e) => this.updateSearch(e)}/>
				</div>
				<div className="fix full">
					<table className="full text_dark_ash fs_14 lh_26">
						<thead >
							<tr className="bg_ash">
								<th><input type="checkbox"/></th>
								<th>Sl.</th>
								<th>Customer Name</th>
								<th>Status</th>
								<th>Created</th>
								<th style={{width : '120px'}}>Action</th>
							</tr>
						</thead>
						<tbody className="textcenter">
							{
								(this.state.temporary_orders.length > 0) ?
									this.state.temporary_orders.map((order, index) => (
										<tr key={index}>
											<td><input type="checkbox"/></td>
											<td>{index+1}</td>
											<td>{order.customer.name}</td>
											<td>{(order.is_active == 0) ? 'Inactive' : 'Active'}</td>
											<td>{moment(order.created_at).format('YYYY-MM-DD')}</td>
											<td>
												<Link to={`/manage/orders/view_order/${order.id}`}>
													<p className="cursor_pointer ml_2 mr_2 fs_14 textcenter font_bold text_dark_ash display_inline_block"><i className="fas fa-eye"></i></p>
												</Link>
												
											</td>
										</tr>
									))
								:
									<tr><td colSpan="100%"> <p className="fs_14 text_dark_ash font_bold textcenter">No Data!</p></td></tr>
							}
							
						</tbody>
					</table>
				</div>
			</div>	
		)
	}
}
export default View_orders_content

