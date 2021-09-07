import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Order_confirmed_content extends Component{
	render(){
		return (
			<>
				<div class="fix full bg_ash">
					<div class="fix nine_by_ten div_mid pt_20 pb_20">
						<div class="fix full">
							<div class="fix floatleft sixteen_percent">
								<div class="fix div_mid ninty_percent">
									<p class="fs_14 lh_18 text_dark_ash">SATISFACTION GUARANTEED</p>
								</div>
							</div>
							<div class="fix floatleft sixteen_percent">
								<div class="fix div_mid ninty_percent">
									<p class="fs_14 lh_18 text_dark_ash">SECURE CREATE ACCOUNT & SAVE CART</p>
								</div>
							</div>
							<div class="fix floatleft sixteen_percent">
								<div class="fix div_mid ninty_percent">
									<div class="fix floatleft two_by_ten">
										<p class="fs_26 lh_36 font_bold text_dark_ash">1</p>
									</div>
									<div class="fix floatleft eight_by_ten">
										<p class="fs_14 lh_18 text_dark_ash">SHOPPING<br/>CART</p>
									</div>
								</div>
							</div>
							<div class="fix floatleft sixteen_percent">
								<div class="fix div_mid ninty_percent">
									<div class="fix floatleft two_by_ten">
										<p class="fs_26 lh_36 font_bold text_dark_ash">2</p>
									</div>
									<div class="fix floatleft eight_by_ten">
										<p class="fs_14 lh_18 text_dark_ash">ACCOUNT<br/>LOGIN</p>
									</div>
								</div>
							</div>
							<div class="fix floatleft sixteen_percent">
								<div class="fix div_mid ninty_percent">
									<div class="fix floatleft two_by_ten">
										<p class="fs_26 lh_36 font_bold text_dark_ash">3</p>
									</div>
									<div class="fix floatleft eight_by_ten">
										<p class="fs_14 lh_18 text_dark_ash">SHIPPING/<br/>PAYMENT</p>
									</div>
								</div>
							</div>
							<div class="fix floatleft sixteen_percent">
								<div class="fix div_mid ninty_percent">
									<div class="fix floatleft two_by_ten">
										<p class="fs_26 lh_36 font_bold text_dark_ash">4</p>
									</div>
									<div class="fix floatleft eight_by_ten">
										<p class="fs_14 lh_18 text_dark_ash">ORDER<br/>CONFIRMATION</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="fix full">
					<div class="fix nine_by_ten div_mid pt_20 pb_20">
						<div class="fix full mt_50 pb_30 bb_1 border_bottom_ash border_bottom_solid">
							<div class="fix floatleft full">
								<p class="fs_26 lh_30 text_dark_ash">THANKS FOR YOUR ORDER!</p>
							</div>
						</div>
					</div>
				</div>
				<div class="fix full">
					<div class="fix nine_by_ten div_mid pt_10 pb_30">
						<div class="fix full">
							<p class="fs_14 lh_20 text_dark_ash">You have asked us to call you to complete your order. Your order has been saved. We will contact you within 1 business day to assist you with completing your order. Note that your order will only go into production once payment has been completed.</p>
							
						</div>
						<div class="fix full mt_20">
							<p class="fs_14 lh_20 text_dark_ash">Please refer to your order number 1191415 when corresponding with SelectBlindsCanada.ca.</p>
						</div>
						<div class="fix full mt_60">
							<div class="fix half floatleft">
								<p class="fs_14 lh_30 text_dark_ash">Order Number: <span class="font_bold">1191415</span></p>

								<p class="fs_14 lh_30 text_dark_ash">Order Date: <span class="font_bold">2020-12-08</span></p>
							</div>
							<div class="fix half floatleft">
								<p class="fs_16 lh_20 text_dark_ash">SHIPPING ADDRESS</p>

								<p class="fs_14 lh_18 text_dark_ash mt_10">Den Bill Mon Til</p>
								<p class="fs_14 lh_18 text_dark_ash">Test Address</p>
								<p class="fs_14 lh_18 text_dark_ash">Chitagong, BC V5A 2R8</p>

								<p class="fs_12 lh_18 text_dark_ash mt_10">We cannot ship to P.O. Boxes.</p>
								<p class="fs_12 lh_18 text_dark_ash">We ship only to the 10 provinces and 3 territories in Canada.</p>
							</div>
						</div>
						<div class="fix full mt_20">
							<p class="fs_16 lh_20 text_dark_ash font_bold">Order Summery</p>
						</div>
						<div class="fix full mt_20">
							<div class="fix full div_mid pt_20 pb_20">
								<div class="fix floatleft half">
									<div class="fix full">
										<div class="fix floatleft three_by_ten border_box pt_10 pr_10 pb_10 pl_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
											<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} class="vertical_align_middle full" alt=""/>
										</div>
										<div class="fix floatleft seven_by_ten pr_10 pl_10 border_box">
											<p class="fs_20 lh_30 text_sky_blue">3% SheerWeave Super Value Solar Roller Shades</p>
											<p class="fs_20 lh_30 text_dark_ash mt_14">24 1/4" W x 36 3/8" H</p>
											<p class="fs_12 lh_20 mt_14 text_dark_ash">COLOR</p>
											<div class="fix full">
												<div class="fix h_40 w_40 pt_5 pr_5 pb_5 pl_5 bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box bg_purple floatleft"></div>
												<p class="fs_12 lh_40 ml_14 text_dark_ash floatleft">Purple</p>

											</div>
										
										</div>
									</div>
									<div class="fix full pt_20">
										<p class="fs_16 lh_24 font_bold text_sky_blue">FEATURES</p>
										<div class="fix full">
											<p class="fs_14 lh_20 text_dark_ash">Mount Type - Outside</p>
											<p class="fs_14 lh_20 text_dark_ash">Roll Position - Standard Roll</p>
											<p class="fs_14 lh_20 text_dark_ash">Headrails - Exposed Roll</p>
											<p class="fs_14 lh_20 text_dark_ash">Lift Style - Cordless Lift</p>
										</div>
									</div>
								</div>
								<div class="fix floatleft half bg_ash border_box pt_10 pr_10 pb_10 pl_10">
									<div class="fix full cart_table">
										<div class="fix full cart_header bg_sky_blue">
											<div class="fix floatleft three_by_ten">
												<p class="fs_14 lh_22 text_white font_bold textcenter">WARRANTY</p>
											</div>
											<div class="fix floatleft two_by_ten">
												<p class="fs_14 lh_22 text_white font_bold textcenter">UNIT PRICE</p>
											</div>
											<div class="fix floatleft two_by_ten">
												<p class="fs_14 lh_22 text_white font_bold textcenter">QTY</p>
											</div>
											<div class="fix floatleft three_by_ten">
												<p class="fs_14 lh_22 text_white font_bold textcenter">TOTALS</p>
											</div>
										</div>
										<div class="fix full cart_header bg_white">
											<div class="fix floatleft three_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
												<p class="floatleft text_dark_ash fs_14 lh_18 eight_by_ten">3-Year Limited Warranty</p>
												<p class="floatright text_dark_ash fs_14 lh_18 two_by_ten">FREE</p>
											</div>
											<div class="fix floatleft two_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
												<p class="text_dark_ash fs_14 lh_18 textcenter">$265.44</p>
											</div>
											<div class="fix floatleft two_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
												<p class="text_dark_ash fs_14 lh_18 textcenter">1</p>
											</div>
											<div class="fix floatleft three_by_ten pt_5 pr_5 pb_5 pl_5 border_box">
												<p class="fs_14 lh_18 textright text_dark_ash line_through">$264.44</p>
												<p class="fs_14 lh_18 textright text_red">55% OFF -145.99</p>
												<p class="fs_16 lh_20 textright text_dark_ash font_bold">$119.45</p>
											</div>
										</div>

									</div>
									<div class="fix full mt_30">
										<div class="fix floatleft half pt_10 pb_10 pr_5 pl_5 border_box">
											<p class="fs_14 lh_22 text_dark_ash font_bold">ROOM</p>
											<p class="fs_14 lh_20 text_dark_ash mt_10">Test Room Text</p>
										</div>
										<div class="fix floatleft half pt_10 pb_10 pr_5 pl_5 border_box">
											<p class="fs_14 lh_22 text_dark_ash font_bold">NOTES</p>
											<p class="fs_14 lh_20 text_dark_ash mt_10">Test Notes Text</p>
										</div>
									</div>
									<div class="fix full mt_100">
										
									</div>
								</div>
							</div>
						</div>
						<div class="fix full mt_20">
							<div class="fix floatleft seven_by_ten pt_10 pb_10 border_box"></div>
							<div class="fix floatright three_by_ten">
								<div class="fix full">
									<p class="fs_14 lh_28 text_dark_ash floatleft">Subtotal</p>
									<p class="fs_14 lh_28 text_dark_ash floatright">$265.44</p>
								</div>
								<div class="fix full">
									<p class="fs_14 lh_28 text_red floatleft">55% OFF</p>
									<p class="fs_14 lh_28 text_red floatright">- $145.99</p>
								</div>
								<div class="fix full">
									<p class="fs_14 lh_28 text_dark_ash floatleft">Shipping</p>
									<p class="fs_14 lh_28 text_dark_ash floatright">FREE</p>
								</div>
								<div class="fix full">
									<p class="fs_14 lh_28 text_dark_ash floatleft">Warranty</p>
									<p class="fs_14 lh_28 text_dark_ash floatright">FREE</p>
								</div>
								<div class="fix full">
									<p class="fs_14 lh_28 text_dark_ash floatleft">Order Processing</p>
									<p class="fs_14 lh_28 text_dark_ash floatright">$7.95</p>
								</div>
								<div class="fix full">
									<p class="fs_14 lh_28 text_dark_ash floatleft">GST (5 %)</p>
									<p class="fs_14 lh_28 text_dark_ash floatright">$7.70</p>
								</div>
								<div class="fix full">
									<p class="fs_18 lh_32 text_sky_blue floatleft font_bold">TOTAL (BEFORE TAXES)</p>
									<p class="fs_18 lh_32 text_sky_blue floatright font_bold">$127.40</p>
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