import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Payment_process_top_section from '../common_elements/Payment_process_top_section'
import Direct_credit_card from './checkout/Direct_credit_card'
import Shipping_address_form from './checkout/Shipping_address_form'
import Pay_billing_address_form from './checkout/Pay_billing_address_form'
import Price_section from './checkout/Price_section'
class Checkout_content extends Component{
	showIfPayWithCard = () => {
		if(this.props.allState.pb_credit_card_way == 'direct')
			return (<Direct_credit_card 
				allState={this.props.allState} 
				methods={this.props.methods}
				createMonthOptions={this.createMonthOptions}
				createYearOptions={this.createYearOptions}/>)
	}
	createMonthOptions = () => {
		let items = []    
		for (let i = 1; i <= 12; i++) {             
		  items.push(<option key={i} value={i}>{i}</option>)
		}
		return items
	}
	createYearOptions = () => {
		
		let items = []
		let current_year = new Date().getFullYear()
		let ten_years_latter = current_year + 10         
		for (let i = current_year; i <= ten_years_latter; i++) {             
		  items.push(<option key={i} value={i}>{i}</option>)   
		}
		return items
	}
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
								<Shipping_address_form allState={this.props.allState} methods={this.props.methods}/>
								
								<div className="fix full bg_sky_blue pr_10 pl_10 border_box mt_30">
									<p className="fs_16 lh_30 text_white font_bold">2. PAYMENT & BILLING ADDRESS</p>
								</div>
								<div className="fix full mt_20">
									<div className="fix full">
										<div className="fix three_by_ten floatleft">
											<div className="fix floatleft three_by_ten">
												<input type="radio" name="pb_payment_method" value="credit_card" checked={this.props.allState.pb_payment_method == 'credit_card'} onChange={(e) => this.props.methods.changePaymentMethod(e)}/>
											</div>
											<div className="fix floatleft seven_by_ten">
												<p className="fs_16 lh_20 font_bold text_dark_ash">Credit Card</p>
											</div>
										</div>
										<div className="fix three_by_ten floatleft">
											<div className="fix floatleft three_by_ten">
												<input type="radio" name="pb_payment_method" value="paypal" checked={this.props.allState.pb_payment_method == 'paypal'} onChange={(e) => this.props.methods.changePaymentMethod(e)}/>
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
													<input type="radio" className="h_20" name="pb_credit_card_way" value="direct" checked={this.props.allState.pb_credit_card_way == 'direct'} onChange={(e) => this.props.methods.changeCreditCardWay(e)}/>
												</div>
												<div className="fix floatleft ninty_five_percent">
													<p className="fs_16 lh_20 font_bold text_dark_ash">Pay with credit card</p>
												</div>
											</div>
											{this.showIfPayWithCard()}
											
											<div className="fix full floatleft mt_30 mb_20">
												<div className="fix floatleft five_percent">
													<input type="radio" className="h_20" name="pb_credit_card_way" value="by_call" checked={this.props.allState.pb_credit_card_way == 'by_call'} onChange={(e) => this.props.methods.changeCreditCardWay(e)}/>
												</div>
												<div className="fix floatleft ninty_five_percent">
													<p className="fs_16 lh_20 font_bold text_dark_ash">Call me for my credit card information</p>
												</div>
											</div>
											{(this.props.allState.pb_credit_card_way == 'by_call') &&
												<textarea className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_100 pr_10 pl_10" value={this.props.allState.pb_credit_card_comment} name="pb_credit_card_comment" onChange={(e) => this.props.methods.changeInput(e)}></textarea>
											}
											<div className="fix full mt_10 mb_10">
												<p className="fs_16 lh_20 text_dark_ash">BILLING ADDRESS</p>	
											</div>

											<div className="fix full floatleft mt_10 mb_10">
												<div className="fix floatleft five_percent">
													<input type="checkbox" className="h_20" name="pb_same_as_shipping_address" onChange={(e) => this.props.methods.changeSameAsShippingAddress(e)} checked={this.props.allState.pb_same_as_shipping_address == '1'}/>
												</div>
												<div className="fix floatleft ninty_five_percent">
													<p className="fs_16 lh_20 text_dark_ash">Same as shipping address</p>
												</div>
											</div>

											<div className="fix full mt_10 mb_10">
												<p className="fs_16 lh_20 text_dark_ash">Please add a new address</p>	
											</div>
											<Pay_billing_address_form allState={this.props.allState} methods={this.props.methods}/>
											
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
													<input type="checkbox" className="h_20"  name="like_to_recieve_special_offer" onChange={(e) => this.props.methods.changeLikeToRecieveSpecialOffer(e)} checked={this.props.allState.like_to_recieve_special_offer == '1'}/>
												</div>
												<div className="fix floatleft nine_by_ten">
													<p className="fs_14 lh_20 text_dark_ash">Yes, I would like to receive special offers and the latest news for Select Blinds Canada.</p>
												</div>
											</div>
											<div className="fix full mt_10">
												<button className="bg_sky_blue text_white font_bold fs_16 lh_30 pl_20 pr_20 border_none h_30 border_box display_inline_block cursor_pointer" onClick={(e) => this.props.methods.placeOrder(e)}>PLACE ORDER</button>
											</div>
											<div className="fix full mt_20">
												<p className="fs_12 text_dark_ash lh_18">By placing your order, you are agreeing with the <a href="#" className="text_sky_blue">Colour Disclaimer</a>, <a href="#" className="text_sky_blue">terms and conditions</a> and <a href="#" className="text_sky_blue">satisfaction guarantee</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Price_section allState={this.props.allState} methods={this.props.methods} />
					</div>
				</div>
			</>
		)
	}
}

export default Checkout_content