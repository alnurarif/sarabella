import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Single_product_in_cart from '../layouts/cart/Single_product_in_cart'
class Cart_content extends Component{
	render(){
		// <div className="fix full">
		// 	<p className="fs_14 lh_28 text_dark_ash floatleft">Order Processing</p>
		// 	<p className="fs_14 lh_28 text_dark_ash floatright">$7.95</p>
		// </div>
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
							<div className="fix floatleft three_by_ten">
								<p className="fs_26 lh_30 text_dark_ash">REVIEW YOUR ORDER</p>
							</div>
							<div className="fix floatleft seven_by_ten">
								<div className="fix floatleft three_by_ten">
									<div className="fix floatright half">
										<a href="#" className="fs_18 text_sky_blue lh_24 font_bold">PRINT CART</a>
									</div>
									<div className="fix floatright half">
										<a href="#" className="fs_18 text_sky_blue lh_24 font_bold">EMAIL CART</a>
									</div>
								</div>
								<div className="fix floatleft seven_by_ten">
										<Link to='/checkout'><span className="fs_14 h_30 lh_30 pr_10 pl_10 bg_orange border_none text_white floatright ml_10 border_box">PROCEED TO CHECKOUT</span></Link>
										<button className="fs_14 h_30 lh_30 pr_10 pl_10 bg_sky_blue border_none text_white floatright ml_10 border_box">CONTINUE SHOPPING</button>
										<button className="fs_14 h_30 lh_30 pr_10 pl_10 bg_sky_blue border_none text_white floatright ml_10 border_box">SAVE FOR LATER</button>
								</div>	
							</div>
						</div>
					</div>
				</div>
				<div className="fix full">
				{
					this.props.allState.products_in_cart.map((single_product, index) => (
						<Single_product_in_cart key={index} allState={this.props.allState} product_info={single_product} productIndex={index} methods={this.props.methods}/>
					))
				}
					
				</div>





				<div className="fix full">
					<div className="fix nine_by_ten div_mid pt_10 pb_10">
						<p className="fs_14 text_dark_ash lh_22">Note: If you selected a cordless or motorization option, please disregard Lift Cord Location (as it does not apply to these options which have no cords).</p>
					</div>
					<div className="fix nine_by_ten div_mid pt_10 pb_10">
						<div className="fix full bg_sky_blue">
							<p className="fs_16 font_bold text_white lh_26 textcenter">PROFESIONAL MEASUREMENT & INSTALLATION +</p>
						</div>
					</div>
					<div className="fix nine_by_ten div_mid pt_10 pb_10">
						<div className="fix floatleft four_by_ten">
							<p className="fs_18 lh_28 textcenter text_sky_blue font_bold">ENTER PROMOTIONAL CODE</p>
							<div className="fix full mt_40 pl_10 pr_10 border_box">
								<input type="text" className="h_30 bt_1 bb_1 bl_1 border_top_ash border_bottom_ash border_left_ash border_top_solid border_bottom_solid border_left_solid border_right_none floatleft eight_by_ten border_box" value={this.props.allState.promotional_code} name="promotional_code" onChange={(e) => this.props.methods.changePromotionalCode(e)}/>
								<button className="fs_16 lh_30 two_by_ten bg_sky_blue text_white font_bold floatleft border_none border_box h_30">APPLY</button>
							</div>
						</div>
						<div className="fix floatleft six_by_ten pr_10 pl_10 border_box">
							<p className="fs_16 lh_26 text_dark_ash font_bold">SPECIAL INSTRUCTION</p>
							<textarea className="full h_80 bt_1 br_1 bb_1 bl_1 border_solid border_ash" value={this.props.allState.special_instruction} name="special_instruction" onChange={(e) => this.props.methods.changeSpecialInstruction(e)}></textarea>
						</div>
					</div>
					<div className="fix nine_by_ten div_mid pt_10 pb_10">
						<div className="fix floatleft half">
							<div className="fix full pt_10 pb_10"></div>
						</div>
						<div className="fix floatleft half">
							<div className="fix floatleft three_by_ten">
								<div className="fix full pt_10 pb_10"></div>
							</div>
							<div className="fix floatleft seven_by_ten">
								<div className="fix full">
									<p className="fs_14 lh_28 text_dark_ash floatleft">Subtotal</p>
									<p className="fs_14 lh_28 text_dark_ash floatright">${this.props.allState.subtotal}</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_28 text_red floatleft">TOTAL OFF</p>
									<p className="fs_14 lh_28 text_red floatright">- ${this.props.allState.total_off}</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_28 text_dark_ash floatleft">Shipping</p>
									<p className="fs_14 lh_28 text_dark_ash floatright">FREE</p>
								</div>
								<div className="fix full">
									<p className="fs_14 lh_28 text_dark_ash floatleft">Warranty</p>
									<p className="fs_14 lh_28 text_dark_ash floatright">{(this.props.allState.total_warrenty == 0) ? 'FREE' : `${this.props.allState.total_warrenty}`}</p>
								</div>
								
								<div className="fix full">
									<p className="fs_18 lh_32 text_sky_blue floatleft font_bold">TOTAL</p>
									<p className="fs_18 lh_32 text_sky_blue floatright font_bold">${this.props.allState.total}</p>
								</div>
									





							</div>
						</div>
					</div>

					<div className="fix nine_by_ten div_mid pt_10 pb_10">
						<button className="fs_16 lh_30 h_30 font_bold text_white bg_sky_blue border_none pr_16 pl_16 floatright ml_10 border_box cursor_pointer">CONTINUE SHOPPING</button>
						<button className="fs_16 lh_30 h_30 font_bold text_white bg_orange border_none pr_16 pl_16 floatright ml_10 border_box cursor_pointer" onClick={(e) => this.props.methods.goToCheckOut()}>PROCEED TO CHECKOUT</button>
						<button className="fs_16 lh_30 h_30 font_bold text_white bg_sky_blue border_none pr_16 pl_16 floatright ml_10 border_box cursor_pointer">SAVE FOR LATER</button>
					</div>
				</div>
			</>
		)
	}
}

export default Cart_content