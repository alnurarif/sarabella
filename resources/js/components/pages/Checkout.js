import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import { getSubCategoryList } from '../../services/Sub_category_services'
import { orderForProduct } from '../../services/Order_services'
import { get,set } from '../../helpers/Local_storage_helper'
import Header_menu from '../layouts/Header_menu'
import Header_logo_search from '../layouts/Header_logo_search'
import Secondary_menu from '../layouts/Secondary_menu'
import Checkout_content from '../layouts/Checkout_content'
import Payment_social from '../layouts/Payment_social'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'
import Track_popup from '../layouts/Track_popup'
class Checkout extends Component{
	state = {
		categories : [],
		sub_categories : [],
		sections : [],
		additional_cart_info : {},
		sa_first_name : '',
		sa_last_name : '',
		sa_street_address : '',
		sa_unit : '',
		sa_city : '',
		sa_province : '',
		sa_postal_code : '',
		sa_phone_number : '',
		pb_payment_method : '',
		pb_credit_card_way : 'direct',
		pb_credit_card_number : '',
		pb_credit_card_comment : '',
		pb_ccv : '',
		pb_credit_card_month : '1',
		pb_credit_card_year : `${new Date().getFullYear()}`,
		pb_same_as_shipping_address : '0',
		pb_first_name : '',
		pb_last_name : '',
		pb_street_address : '',
		pb_unit : '',
		pb_city : '',
		pb_province : '',
		pb_postal_code : '',
		pb_phone_number : '',
		like_to_recieve_special_offer : '0'
	}
	methods = {
		getCategories : async () => {
			let categoryList = await getCategoryList()
			this.setState({
				categories : categoryList.data
			})
			
		},
		getSubCategories : async () => {
			let subCategoryList = await getSubCategoryList()
			this.setState({
				sub_categories : subCategoryList.data
			})
			
		},
		getSections : async () => {
			let sectionList = await getSectionList()
			this.setState({
				sections : sectionList.data
			})
		},
		activeCategory : (activeIndex) => {
			this.setState({
				activeCategory : activeIndex
			})
		},
		categoryDeactivate : () => {
			this.setState({
				activeCategory : null
			})
		},
		getAdditionalCartInfo : () => {
			let additional_cart_info = JSON.parse(get('additional_cart_info'))
			this.setState({
				additional_cart_info
			})
		},
		changeInput : (e) => {
			this.setState({
				[e.target.name] : e.target.value
			})
		},
		changePaymentMethod : (e) => {
			this.setState({
				pb_payment_method : e.target.value
			})
		},
		changeCreditCardWay : (e) => {
			this.setState({
				pb_credit_card_way : e.target.value
			})	
		},
		changeCreditCardMonth : (e) => {
			this.setState({
				pb_credit_card_month : e.target.value
			})
		},
		changeCreditCardYear : (e) => {
			this.setState({
				pb_credit_card_year : e.target.value
			})
		},
		changeSameAsShippingAddress : (e) => {
			let this_checkbox_value = (e.target.checked) ? '1' : '0'
			this.setState({
				pb_same_as_shipping_address : this_checkbox_value
			})
		},
		changeLikeToRecieveSpecialOffer : (e) => {
			let this_checkbox_value = (e.target.checked) ? '1' : '0'
			this.setState({
				like_to_recieve_special_offer : this_checkbox_value
			})	
		},
		placeOrder : async (e) => {
			const { history } = this.props
			let additional_cart_info = JSON.parse(get('additional_cart_info'))
			let products_in_cart = JSON.parse(get('products_in_cart'))
			let free_samples = JSON.parse(get('free_samples'))
			let checkout_info = {
				sa_first_name : this.state.sa_first_name,
				sa_last_name : this.state.sa_last_name,
				sa_street_address : this.state.sa_street_address,
				sa_unit : this.state.sa_unit,
				sa_city : this.state.sa_city,
				sa_province : this.state.sa_province,
				sa_postal_code : this.state.sa_postal_code,
				sa_phone_number : this.state.sa_phone_number,
				pb_payment_method : this.state.pb_payment_method,
				pb_credit_card_way : this.state.pb_credit_card_way,
				pb_credit_card_number : this.state.pb_credit_card_number,
				pb_credit_card_comment : this.state.pb_credit_card_comment,
				pb_ccv : this.state.pb_ccv,
				pb_credit_card_month : this.state.pb_credit_card_month,
				pb_credit_card_year : this.state.pb_credit_card_year,
				pb_same_as_shipping_address : this.state.pb_same_as_shipping_address,
				pb_first_name : this.state.pb_first_name,
				pb_last_name : this.state.pb_last_name,
				pb_street_address : this.state.pb_street_address,
				pb_unit : this.state.pb_unit,
				pb_city : this.state.pb_city,
				pb_province : this.state.pb_province,
				pb_postal_code : this.state.pb_postal_code,
				pb_phone_number : this.state.pb_phone_number,
				like_to_recieve_special_offer : this.state.like_to_recieve_special_offer,
			}
			let submission_data = {
				customer_id : Math.floor(Math.random() * 10) + 1,
				checkout_info,
				additional_cart_info,
				products_in_cart
			}
			const response = await orderForProduct(submission_data)
			// localStorage.removeItem('additional_cart_info');
			// localStorage.removeItem('products_in_cart');



			// return false;
			if(response.success){
				set('order_number', response.order_id)
				set('checkout_info', JSON.stringify(checkout_info))
				history.push(`/order_confirmed`)
			}
			// else{
			// 	let errorObject = await makeAnObjectOfLaravelError(response);
			// 	this.setState({
			// 		errors : errorObject
			// 	})
			// }
			// set('checkout_info', JSON.stringify(checkout_info))
		}
	}
	componentDidMount(){
		this.methods.getCategories()
		this.methods.getSubCategories()
		this.methods.getSections()
		this.methods.getAdditionalCartInfo()
	}
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods} />
				<Checkout_content allState={this.state} methods={this.methods} />
				<Payment_social allState={this.state} methods={this.methods} />
				<Disclaimer allState={this.state} methods={this.methods} />
				<Footer allState={this.state} methods={this.methods} />
				<Track_popup allState={this.state} methods={this.methods} />
			</div>
		)
	}
}

export default Checkout