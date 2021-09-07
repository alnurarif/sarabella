import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Payment_process_top_section from '../common_elements/Payment_process_top_section'
class Checkout_content extends Component{
	render(){
		return (
			<>
				<div className="fix full bg_ash">
					<div className="fix nine_by_ten div_mid pt_20 pb_20">
						<Payment_process_top_section />
					</div>
				</div>
				<div className="fix full">
					<div className="fix nine_by_ten div_mid pt_20 pb_20">
						<div className="fix full mt_50 pb_30 bb_1 border_bottom_ash border_bottom_solid">
							<div className="fix floatleft full">
								<p className="fs_26 lh_30 text_dark_ash">CHECKOUT AND REVIEW</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full">
					<div className="fix nine_by_ten div_mid pt_10 pb_30">
						<div className="fix floatleft seven_by_ten">
							<div className="fix ninty_five_percent div_mid">
								<div className="fix full bg_sky_blue pr_10 pl_10 border_box">
									<p className="fs_16 lh_30 text_white font_bold">1. SHIPPING ADDRESS</p>
								</div>
								<p className="fs_14 lh_18 mt_20 text_dark_ash">We do not ship to PO Boxes without a physical address</p>
								<div className="fix full mt_20">
									<div className="fix half floatleft mt_10">
										<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="First Name" />
									</div>
									<div className="fix half floatleft mt_10">
										<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Last Name" />
									</div>
									<div className="fix half floatleft mt_10">
										<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Street Address" />
									</div>
									<div className="fix half floatleft mt_10">
										<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Apt, Ste, Unit, Bldg (Optional)" />
									</div>
									<div className="fix half floatleft mt_10">
										<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="City" />
									</div>
									<div className="fix half floatleft mt_10">
										<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Province" />
										<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10 ml_10" placeholder="Postal Code" />
									</div>
									<div className="fix half floatleft mt_10">
										<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Phone Number" />
									</div>
								</div>
								<div className="fix full bg_sky_blue pr_10 pl_10 border_box mt_30">
									<p className="fs_16 lh_30 text_white font_bold">2. PAYMENT & BILLING ADDRESS</p>
								</div>
								<div className="fix full mt_20">
									<div className="fix full">
										<div className="fix three_by_ten floatleft">
											<div className="fix floatleft three_by_ten">
												<input type="radio"/>
											</div>
											<div className="fix floatleft seven_by_ten">
												<p className="fs_16 lh_20 font_bold text_dark_ash">Credit Card</p>
											</div>
										</div>
										<div className="fix three_by_ten floatleft">
											<div className="fix floatleft three_by_ten">
												<input type="radio"/>
											</div>
											<div className="fix floatleft seven_by_ten">
												<p className="fs_16 lh_20 font_bold text_dark_ash">Paypal</p>
											</div>
										</div>
									</div>
									<div className="fix full mt_20">
										<div className="fix full bt_1 br_1 bb_1 bl_1 border_solid border_ash bg_very_light_ash pt_10 pr_10 pb_10 pl_10 border_box">
											<div className="fix full floatleft">
												<div className="fix floatleft five_percent">
													<input type="radio" className="h_20"/>
												</div>
												<div className="fix floatleft ninty_five_percent">
													<p className="fs_16 lh_20 font_bold text_dark_ash">Pay with credit card</p>
												</div>
											</div>
											<div className="fix full mt_50 mb_20">
												<p className="fs_16 lh_20 text_dark_ash">PAYMENT INFORMATION</p>	
											</div>
											
											<div className="fix full">
												<div className="fix forty_percent floatleft">
													<input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10" placeholder="Credit Card Number" />
												</div>
												<div className="fix fifteen_percent floatleft">
													<input type="number" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10"/>
												</div>
												<div className="fix five_percent floatleft">
													<p className="fs_16 lh_30 text_dark_ash full textcenter">/</p>
												</div>
												<div className="fix fifteen_percent floatleft">
													<input type="number" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10"/>
												</div>
												<div className="fix fifteen_percent floatleft">
													<input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10" placeholder="CCV" />
												</div>
												<div className="fix five_percent floatleft">
													
												</div>
												<div className="fix fifteen_percent floatleft"></div>
											</div>

											<div className="fix full floatleft mt_30 mb_20">
												<div className="fix floatleft five_percent">
													<input type="radio" className="h_20"/>
												</div>
												<div className="fix floatleft ninty_five_percent">
													<p className="fs_16 lh_20 font_bold text_dark_ash">Call me for my credit card information</p>
												</div>
											</div>

											<div className="fix full mt_10 mb_10">
												<p className="fs_16 lh_20 text_dark_ash">BILLING ADDRESS</p>	
											</div>

											<div className="fix full floatleft mt_10 mb_10">
												<div className="fix floatleft five_percent">
													<input type="checkbox" className="h_20"/>
												</div>
												<div className="fix floatleft ninty_five_percent">
													<p className="fs_16 lh_20 text_dark_ash">Same as shipping address</p>
												</div>
											</div>

											<div className="fix full mt_10 mb_10">
												<p className="fs_16 lh_20 text_dark_ash">Please add a new address</p>	
											</div>
											<div className="fix full">
												<div className="fix half floatleft mt_10">
													<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="First Name" />
												</div>
												<div className="fix half floatleft mt_10">
													<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Last Name" />
												</div>
												<div className="fix half floatleft mt_10">
													<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Street Address" />
												</div>
												<div className="fix half floatleft mt_10">
													<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Apt, Ste, Unit, Bldg (Optional)" />
												</div>
												<div className="fix half floatleft mt_10">
													<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="City" />
												</div>
												<div className="fix half floatleft mt_10">
													<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Province" />
													<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10 ml_10" placeholder="Postal Code" />
												</div>
												<div className="fix half floatleft mt_10">
													<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Phone Number" />
												</div>
											</div>
										</div>

									</div>
								</div>
								<div className="fix full bg_sky_blue pr_10 pl_10 border_box mt_30">
									<p className="fs_16 lh_30 text_white font_bold">3. TERMS & CONDITIONS</p>
								</div>
								<div className="fix full">
									<div className="fix floatleft half">
										<p className="fs_16 lh_20 mt_20 mb_20 text_dark_ash">HOW DID YOU HEAR ABOUT US?</p>
										<select name="" id="">
											<option value="">Please Select</option>
										</select>
									</div>
									<div className="fix floatleft half">
										<div className="fix ninty_percent div_mid pt_10 pr_10 pb_10 pl_10 bg_very_light_ash border_box mt_20">
											<div className="fix full">
												<div className="fix floatleft one_by_ten">
													<input type="checkbox" className="h_20"/>
												</div>
												<div className="fix floatleft nine_by_ten">
													<p className="fs_14 lh_20 text_dark_ash">Yes, I would like to receive special offers and the latest news for Select Blinds Canada.</p>
												</div>
											</div>
											<div className="fix full mt_10">
												<Link to='/order_confirmed'><span className="bg_sky_blue text_white font_bold fs_16 lh_30 pl_20 pr_20 border_none h_30 border_box display_inline_block">PLACE ORDER</span></Link>
											</div>
											<div className="fix full mt_20">
												<p className="fs_12 text_dark_ash lh_18">By placing your order, you are agreeing with the <a href="#" className="text_sky_blue">Colour Disclaimer</a>, <a href="#" className="text_sky_blue">terms and conditions</a> and <a href="#" className="text_sky_blue">satisfaction guarantee</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="fix floatleft three_by_ten">
							<div className="fix ninty_five_percent div_mid bg_ash border_box pt_10 pr_10 pb_10 pl_10 bb_1 border_bottom_ash border_bottom_solid">
								<p className="fs_14 lh_30 text_dark_ash">ORDER SUMMARY</p>
								<div className="fix full">
									<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Subtotal</p>
									<p className="fs_14 lh_30 text_dark_ash floatright half textright">$265.44</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_30 text_red floatleft half textleft">55% OFF</p>
									<p className="fs_14 lh_30 text_red floatright half textright">- $145.99</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Shipping</p>
									<p className="fs_14 lh_30 text_dark_ash floatright half textright">FREE</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Warranty</p>
									<p className="fs_14 lh_30 text_dark_ash floatright half textright">FREE</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Order Processing</p>
									<p className="fs_14 lh_30 text_dark_ash floatright half textright">$7.95</p>
								</div>
								<div className="fix full">
									<p className="fs_22 lh_40 text_sky_blue floatleft half textleft font_bold">TOTAL</p>
									<p className="fs_22 lh_40 text_sky_blue floatright half textright font_bold">$127.40</p>
								</div>
							</div>

							<div className="fix ninty_five_percent div_mid bg_ash border_box pt_10 pr_10 pb_10 pl_10 bb_1 border_bottom_ash border_bottom_solid textcenter">
								<button className="border_none bg_sky_blue text_white fs_16 ninty_percent lh_40 font_bold mb_10">Review Order Details</button>
								<button className="border_none bg_sky_blue text_white fs_16 ninty_percent lh_40 font_bold mb_10">Edit Order</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Checkout_content