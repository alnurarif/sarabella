import React, { Component } from 'react'
import Border from '../../../Border'
import {Link,withRouter} from 'react-router-dom'
import {getOrder} from '../../../../services/Order_services'
import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import Button from '../../../common_elements/Button'
class View_order_content extends Component{
	state = {
		order : '',
		order_details : '',
	}
	componentDidMount(){
		
	}
	getOrderInfo = async () => {
		let order_response = await getOrder(this.props.match.params.id)
		// let order_details_response = await getOrderDetails(this.props.match.params.id)
		this.setState({
			order : order_response.data,
			// order_details : order_details_response
		})
	}
	componentWillMount() {
        this.getOrderInfo()
    }
	render(){
		let order = this.state.order
		let customer_name = (order.customer !== undefined) ? order.customer.name : ''
		let subtotal = (order.customer !== undefined) ? order.subtotal : ''
		let total = (order.customer !== undefined) ? order.total : ''
		let total_off = (order.customer !== undefined) ? order.total_off : ''
		let total_warrenty = (order.customer !== undefined) ? order.total_warrenty : ''
		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">View Order</p>
					<Link to='/manage/orders/view_orders'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Categories</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">View Order</p>
				</div>
				<Border />
				<div className="fix full mt_20">
					<p className="fs_14 lh_22 text_dark_ash font_bold">Customer Name</p>
					<p className="fs_14 lh_22 text_dark_ash">{customer_name}</p>

					<p className="fs_14 lh_22 text_dark_ash font_bold">Sub Total</p>
					<p className="fs_14 lh_22 text_dark_ash">{subtotal}</p>

					<p className="fs_14 lh_22 text_dark_ash font_bold">Total</p>
					<p className="fs_14 lh_22 text_dark_ash">{total}</p>

					<p className="fs_14 lh_22 text_dark_ash font_bold">Total Off</p>
					<p className="fs_14 lh_22 text_dark_ash">{total_off}</p>

					<p className="fs_14 lh_22 text_dark_ash font_bold">Total Warrenty</p>
					<p className="fs_14 lh_22 text_dark_ash">{total_warrenty}</p>

				</div>
							
			</div>
		)
	}
}

export default withRouter(View_order_content)