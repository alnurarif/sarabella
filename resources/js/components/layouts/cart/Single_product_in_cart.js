import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { convertFractionToDiv, getMountTypeName, getLiftStyeName, getRollPositionName, getHeadRailName, getBottomHemStyleName } from '../../../services/Product_services'
class Single_product_in_cart extends Component{
	constructor(props){
		super(props)
	}
	methods = {
		getLiftPrice : () => {
			let liftPrice = 0
			if(this.props.product_info.selected_lift_system == 'cordless'){
				liftPrice = (this.props.product_info.cordless_price == null) ? '0' : this.props.product_info.cordless_price
			}else if(this.props.product_info.selected_lift_system == 'continuous_cord_loop'){
				let chainTypePrice = (this.props.product_info.ccl_chain_type_price == null) ? '0' : this.props.product_info.ccl_chain_type_price
				liftPrice = parseFloat(this.props.product_info.ccl_price) + parseFloat(chainTypePrice)
			}else if(this.props.product_info.selected_lift_system == 'motorization'){
				let motorization_remote_price = (this.props.product_info.motorization_remote_price == null) ? '0' : this.props.product_info.motorization_remote_price
				let motorization_wifi_price = (this.props.product_info.motorization_wifi_price == null) ? '0' : this.props.product_info.motorization_wifi_price
				liftPrice = parseFloat(this.props.product_info.motorization_price) + parseFloat(motorization_remote_price) + parseFloat(motorization_wifi_price)
			}
			return liftPrice
		},
		getRollPositionPrice : () => {
			let rollPositionPrice = 0
			if(this.props.product_info.selected_roll_position == 'standard_roll'){
				rollPositionPrice = (this.props.product_info.standard_roll_price == null) ? '0' : this.props.product_info.standard_roll_price
			}else if(this.props.product_info.selected_roll_position == 'reverse_roll'){
				rollPositionPrice = (this.props.product_info.reverse_roll_price == null) ? '0' : this.props.product_info.reverse_roll_price
			}
			return rollPositionPrice
		},
		getHeadRailsPrice : () => {
			let headRailsPrice = 0
			if(this.props.product_info.selected_headrails == 'exposed_roll'){
				headRailsPrice = (this.props.product_info.exposed_roll_price == null) ? '0' : this.props.product_info.exposed_roll_price
			}else if(this.props.product_info.selected_headrails == 'cassette'){
				headRailsPrice = (this.props.product_info.cassette_price == null) ? '0' : this.props.product_info.cassette_price
			}
			return headRailsPrice
		},
		getBottomHemStylePrice : () => {
			let bottomHemStylePrice = 0
			if(this.props.product_info.selected_bottom_hem_style == 'plain_hem'){
				bottomHemStylePrice = (this.props.product_info.plain_hem_price == null) ? '0' : this.props.product_info.plain_hem_price
			}else if(this.props.product_info.selected_bottom_hem_style == 'wave_hem'){
				bottomHemStylePrice = (this.props.product_info.wave_hem_price == null) ? '0' : this.props.product_info.wave_hem_price
			}else if(this.props.product_info.selected_bottom_hem_style == 'scallop_hem'){
				bottomHemStylePrice = (this.props.product_info.scallop_hem_price == null) ? '0' : this.props.product_info.scallop_hem_price
			}else if(this.props.product_info.selected_bottom_hem_style == 'rounded_hem'){
				bottomHemStylePrice = (this.props.product_info.rounded_hem_price == null) ? '0' : this.props.product_info.rounded_hem_price
			}
			return bottomHemStylePrice
		},
		getTotalWidth : () => {
			return parseFloat(this.props.product_info.width_inch)+parseFloat(this.props.product_info.width_8ths)
		},
		getTotalHeight : () => {
			return parseFloat(this.props.product_info.height_inch)+parseFloat(this.props.product_info.height_8ths)
		}
	}
	render(){
		let product_quantity = this.props.product_info.product_quantity
		let liftPrice = this.methods.getLiftPrice()
		let rollPositionPrice = this.methods.getRollPositionPrice()
		let headRailsPrice = this.methods.getHeadRailsPrice()
		let bottomHemStylePrice = this.methods.getBottomHemStylePrice()
		
		

		let product_unit_price = (this.props.product_info.product.unit_price === undefined || this.props.product_info.product.unit_price === null) ? 0 : parseFloat(this.props.product_info.product.unit_price).toFixed(2)
		let product_offer_value = (this.props.product_info.product.offer_price === undefined) ? 0 : parseFloat(this.props.product_info.product.offer_price).toFixed(2)
		let product_offer_type = (this.props.product_info.product.offer_price_type === undefined) ? '%' : this.props.product_info.product.offer_price_type
		let product_offer_price = 0
		let product_sell_price = 0

		

		let current_total_width_inch = this.methods.getTotalWidth()
		let current_total_height_inch = this.methods.getTotalHeight()
		let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)

		

		// let total_square_feet_price = parseFloat(this.props.product_info.per_square_feet_price_without_off).toFixed(8)

		let per_square_feet_price = parseFloat(this.props.product_info.per_square_feet_price_without_off).toFixed(8)

		let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
		// let total_square_feet_price = (parseFloat(this.props.product_info.per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
		
		let sell_price = total_square_feet_price
		// let sell_price = this.props.product_info.product_sell_price


		let active_warrenty_price = this.props.product_info.active_warrenty.warrenty_option_price
		let total_active_warrenty_price = parseFloat(active_warrenty_price) * parseFloat(product_quantity) 

		sell_price = parseFloat(sell_price)+parseFloat(liftPrice)+parseFloat(rollPositionPrice)+parseFloat(headRailsPrice)+parseFloat(bottomHemStylePrice)
		let total_price = parseFloat(sell_price) * parseFloat(product_quantity)
		

		let offer_text = ''


		if(product_offer_type == '%'){
			product_offer_price = ((total_price * product_offer_value) / 100).toFixed(2)
			product_sell_price = parseFloat(total_price - ((total_price * product_offer_value) / 100)).toFixed(2)
			offer_text = product_offer_value + '%'		
		}else{
			product_offer_price = product_offer_value
			product_sell_price = parseFloat(total_price - product_offer_value).toFixed(2)
			offer_text = product_offer_type + product_offer_value
		}
		product_sell_price = parseFloat(product_sell_price) + parseFloat(total_active_warrenty_price)
		// this.methods.setTotalPrice(parseFloat(product_sell_price).toFixed(2))
		
		// this.methods.visible_unvisible_add_to_cart()






		// let product_info = this.props.product_info

		// let product_unit_price = (product_info.product.unit_price === undefined || product_info.product.unit_price === null) ? 0 : parseFloat(product_info.product.unit_price).toFixed(2)
		// let product_offer_value = (product_info.product.offer_price === undefined) ? 0 : parseFloat(product_info.product.offer_price).toFixed(2)
		// let product_offer_type = (product_info.product.offer_price_type === undefined) ? '%' : product_info.product.offer_price_type

		// let product_offer_price = 0
		// let product_sell_price = 0

		// let offer_text = ''

		// if(product_offer_type == '%'){
		// 	product_offer_price = ((product_unit_price * product_offer_value) / 100).toFixed(2)
		// 	product_sell_price = parseFloat(product_unit_price - ((product_unit_price * product_offer_value) / 100)).toFixed(2)
		// 	offer_text = product_offer_value + '%'		
		// }else{
		// 	product_offer_price = product_offer_value
		// 	product_sell_price = parseFloat(product_unit_price - product_offer_value).toFixed(2)
		// 	offer_text = product_offer_type + product_offer_value
		// }
		// {this.props.allState.selected_sample_index == index && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
		return (
			<div className="fix nine_by_ten div_mid pt_20 pb_20">
				<div className="fix floatleft half">
					<div className="fix full">
						<div className="fix floatleft three_by_ten border_box pt_10 pr_10 pb_10 pl_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
							<img src={`${process.env.MIX_APP_URL}/uploads/products/${this.props.product_info.product.images[0].image_name}`} className="vertical_align_middle full" alt=""/>
						</div>
						<div className="fix floatleft seven_by_ten pr_10 pl_10 border_box">
							<p className="fs_20 lh_30 text_sky_blue">{this.props.product_info.product.name}</p>
							<p className="fs_20 lh_30 text_dark_ash mt_14">{this.props.product_info.width_inch} {convertFractionToDiv(this.props.product_info.width_8ths)}" W x {this.props.product_info.height_inch} {convertFractionToDiv(this.props.product_info.height_8ths)}" H</p>
							<p className="fs_12 lh_20 mt_14 text_dark_ash">COLOR</p>
							<div className="fix full">
								<div className="fix h_40 w_40 pt_5 pr_5 pb_5 pl_5 bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box floatleft">
									<img src={`${process.env.MIX_APP_URL}/uploads/colors/${this.props.product_info.selected_sample_color}`} className="vertical_align_middle full" alt=""/>
								</div>
								<p className="fs_12 lh_40 ml_14 text_dark_ash floatleft">{this.props.product_info.product.colors[this.props.product_info.selected_sample_index].name}</p>

							</div>
						
						</div>
					</div>
					<div className="fix full pt_20">
						<p className="fs_16 lh_24 font_bold text_sky_blue">FEATURES</p>
						<div className="fix full">
							{ (this.props.product_info.product.selected_mount_type != '') &&
							<p className="fs_14 lh_20 text_dark_ash">Mount Type - {getMountTypeName(this.props.product_info.selected_mount_type)}</p>
							}
							{ (this.props.product_info.selected_roll_position != '') &&
							<p className="fs_14 lh_20 text_dark_ash">Roll Position - {getRollPositionName(this.props.product_info.selected_roll_position)}</p>
							}
							{ (this.props.product_info.selected_headrails != '') &&
							<p className="fs_14 lh_20 text_dark_ash">Headrails - {getHeadRailName(this.props.product_info.selected_headrails)}</p>
							}
							{ (this.props.product_info.selected_lift_system != '') &&
							<p className="fs_14 lh_20 text_dark_ash">Lift Style - {getLiftStyeName(this.props.product_info.selected_lift_system)}</p>
							}
							{ (this.props.product_info.selected_bottom_hem_style != '') &&
							<p className="fs_14 lh_20 text_dark_ash">Bottom Hem Style - {getBottomHemStyleName(this.props.product_info.selected_bottom_hem_style)}</p>
							}
							
						</div>
					</div>
				</div>
				<div className="fix floatleft half bg_ash border_box pt_10 pr_10 pb_10 pl_10">
					<div className="fix full cart_table">
						<div className="fix full cart_header bg_sky_blue">
							<div className="fix floatleft four_by_ten">
								<p className="fs_14 lh_22 text_white font_bold textcenter">WARRANTY</p>
							</div>
							<div className="fix floatleft two_by_ten">
								<p className="fs_14 lh_22 text_white font_bold textcenter">UNIT PRICE</p>
							</div>
							<div className="fix floatleft one_by_ten">
								<p className="fs_14 lh_22 text_white font_bold textcenter">QTY</p>
							</div>
							<div className="fix floatleft three_by_ten">
								<p className="fs_14 lh_22 text_white font_bold textcenter">TOTALS</p>
							</div>
						</div>
						<div className="fix full cart_header bg_white">
							<div className="fix floatleft four_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
								<p className="floatleft text_dark_ash fs_13 lh_18 eight_by_ten">{this.props.product_info.active_warrenty.warrenty_option_detail}</p>
								<p className="floatright text_dark_ash fs_13 lh_18 two_by_ten">{(this.props.product_info.active_warrenty.warrenty_option_price == 0) ? 'FREE' : `$${(this.props.product_info.active_warrenty.warrenty_option_price*this.props.product_info.product_quantity).toFixed(2)}`}</p>
							</div>
							<div className="fix floatleft two_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
								<p className="text_dark_ash fs_13 lh_18 textcenter">${this.props.product_info.product.unit_price}</p>
							</div>
							<div className="fix floatleft one_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
								<input type="number" min="1" step="1" className="fs_13 pl_5 pr_5 border_box h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash full" value={this.props.product_info.product_quantity} name="product_quantity" onChange={(e) => this.props.methods.changeQuantity(e,this.props.productIndex)}/>
							</div>
							<div className="fix floatleft three_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
								<p className="fs_13 lh_18 textright text_dark_ash line_through">${parseFloat(total_price).toFixed(2)}</p>
								<p className="fs_13 lh_18 textright text_red">{offer_text} OFF -{parseFloat(product_offer_price).toFixed(2)}</p>
								<p className="fs_15 lh_20 textright text_dark_ash font_bold">${parseFloat(product_sell_price).toFixed(2)}</p>
							</div>
						</div>

					</div>
					<div className="fix full mt_30">
						<div className="fix floatleft half pt_10 pb_10 pr_5 pl_5 border_box">
							<p className="fs_14 lh_22 text_dark_ash font_bold">ROOM</p>
							<input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash full border_box pl_5 pr_5" value={this.props.product_info.room_name} name="room_name" onChange={(e) => this.props.methods.changeRoomName(e,this.props.productIndex)}/>
						</div>
						<div className="fix floatleft half pt_10 pb_10 pr_5 pl_5 border_box">
							<p className="fs_14 lh_22 text_dark_ash font_bold">NOTES</p>
							<input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash full border_box pl_5 pr_5" value={this.props.product_info.notes} name="notes" onChange={(e) => this.props.methods.changeNotes(e,this.props.productIndex)}/>
						</div>
					</div>
					<div className="fix full mt_100">
						<a href="#" className="display_block fs_14 lh_22 floatright bl_1 border_left_ash border_left_solid pl_16 pr_16 text_sky_blue cursor_pointer" onClick={(e) => this.props.methods.removeProduct(e,this.props.productIndex)}>Remove</a>
						<a href="#" className="display_block fs_14 lh_22 floatright bl_1 border_left_ash border_left_solid pl_16 pr_16 text_sky_blue">Add Similar</a>
						<a href="#" className="display_block fs_14 lh_22 floatright pl_16 pr_16 text_sky_blue">Edit</a>
					</div>
				</div>
			</div>
		)
	}
}
export default Single_product_in_cart
