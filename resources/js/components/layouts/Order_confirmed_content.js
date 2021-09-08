import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { get,set } from '../../helpers/Local_storage_helper'
import Single_product_in_confirmed from '../layouts/order_confirmed/Single_product_in_confirmed'
class Order_confirmed_content extends Component{
	render(){
		let d = new Date()
		let today_date = new Date().toISOString().slice(0, 10)
		let order_number = JSON.parse(get('order_number'))
		let checkout_info = JSON.parse(get('checkout_info'))
		let products_in_cart = JSON.parse(get('products_in_cart'))
		let additional_cart_info = JSON.parse(get('additional_cart_info'))
		return (
			<>
				<div className="fix full bg_ash">
					<div className="fix nine_by_ten div_mid pt_20 pb_20">
						<div className="fix full">
							<div className="fix floatleft sixteen_percent">
								<div className="fix div_mid ninty_percent">
									<p className="fs_14 lh_18 text_dark_ash">SATISFACTION GUARANTEED</p>
								</div>
							</div>
							<div className="fix floatleft sixteen_percent">
								<div className="fix div_mid ninty_percent">
									<p className="fs_14 lh_18 text_dark_ash">SECURE CREATE ACCOUNT & SAVE CART</p>
								</div>
							</div>
							<div className="fix floatleft sixteen_percent">
								<div className="fix div_mid ninty_percent">
									<div className="fix floatleft two_by_ten">
										<p className="fs_26 lh_36 font_bold text_dark_ash">1</p>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 lh_18 text_dark_ash">SHOPPING<br/>CART</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft sixteen_percent">
								<div className="fix div_mid ninty_percent">
									<div className="fix floatleft two_by_ten">
										<p className="fs_26 lh_36 font_bold text_dark_ash">2</p>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 lh_18 text_dark_ash">ACCOUNT<br/>LOGIN</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft sixteen_percent">
								<div className="fix div_mid ninty_percent">
									<div className="fix floatleft two_by_ten">
										<p className="fs_26 lh_36 font_bold text_dark_ash">3</p>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 lh_18 text_dark_ash">SHIPPING/<br/>PAYMENT</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft sixteen_percent">
								<div className="fix div_mid ninty_percent">
									<div className="fix floatleft two_by_ten">
										<p className="fs_26 lh_36 font_bold text_dark_ash">4</p>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 lh_18 text_dark_ash">ORDER<br/>CONFIRMATION</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full">
					<div className="fix nine_by_ten div_mid pt_20 pb_20">
						<div className="fix full mt_50 pb_30 bb_1 border_bottom_ash border_bottom_solid">
							<div className="fix floatleft full">
								<p className="fs_26 lh_30 text_dark_ash">THANKS FOR YOUR ORDER!</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full">
					<div className="fix nine_by_ten div_mid pt_10 pb_30">
						<div className="fix full">
							<p className="fs_14 lh_20 text_dark_ash">You have asked us to call you to complete your order. Your order has been saved. We will contact you within 1 business day to assist you with completing your order. Note that your order will only go into production once payment has been completed.</p>
							
						</div>
						<div className="fix full mt_20">
							<p className="fs_14 lh_20 text_dark_ash">Please refer to your order number 1191415 when corresponding with SelectBlindsCanada.ca.</p>
						</div>
						<div className="fix full mt_60">
							<div className="fix half floatleft">
								<p className="fs_14 lh_30 text_dark_ash">Order Number: <span className="font_bold">#00000{order_number}</span></p>

								<p className="fs_14 lh_30 text_dark_ash">Order Date: <span className="font_bold">{today_date}</span></p>
							</div>
							<div className="fix half floatleft">
								<p className="fs_16 lh_20 text_dark_ash">SHIPPING ADDRESS</p>

								<p className="fs_14 lh_18 text_dark_ash mt_10">{checkout_info.sa_city}</p>
								<p className="fs_14 lh_18 text_dark_ash">{checkout_info.sa_street_address}</p>
								<p className="fs_14 lh_18 text_dark_ash">{checkout_info.sa_province}, {checkout_info.sa_postal_code}</p>

								<p className="fs_12 lh_18 text_dark_ash mt_10">We cannot ship to P.O. Boxes.</p>
								<p className="fs_12 lh_18 text_dark_ash">We ship only to the 10 provinces and 3 territories in Canada.</p>
							</div>
						</div>
						<div className="fix full mt_20">
							<p className="fs_16 lh_20 text_dark_ash font_bold">Order Summery</p>
						</div>
						<div className="fix full mt_20">
						{
							products_in_cart.map((single_product, index) => (
								<Single_product_in_confirmed key={index} allState={this.props.allState} product_info={single_product} productIndex={index} methods={this.props.methods}/>
							))
						}
						
						</div>
						<div className="fix full mt_20">
							<div className="fix floatleft seven_by_ten pt_10 pb_10 border_box"></div>
							<div className="fix floatright three_by_ten">
								<div className="fix full">
									<p className="fs_14 lh_28 text_dark_ash floatleft">Subtotal</p>
									<p className="fs_14 lh_28 text_dark_ash floatright">${additional_cart_info.subtotal}</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_28 text_red floatleft">TOTAL OFF</p>
									<p className="fs_14 lh_28 text_red floatright">- ${additional_cart_info.total_off}</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_28 text_dark_ash floatleft">Shipping</p>
									<p className="fs_14 lh_28 text_dark_ash floatright">FREE</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_28 text_dark_ash floatleft">Warranty</p>
									<p className="fs_14 lh_28 text_dark_ash floatright">${additional_cart_info.total_warrenty}</p>
								</div>
								<div className="fix full">
									<p className="fs_18 lh_32 text_sky_blue floatleft font_bold">TOTAL (BEFORE TAXES)</p>
									<p className="fs_18 lh_32 text_sky_blue floatright font_bold">${additional_cart_info.total}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Order_confirmed_content