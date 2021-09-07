import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import { get, set } from '../../helpers/Local_storage_helper'
import { getSubCategoryList } from '../../services/Sub_category_services'
import Header_logo_search from '../layouts/Header_logo_search'
import Secondary_menu from '../layouts/Secondary_menu'
import Payment_social from '../layouts/Payment_social'
import Cart_content from '../layouts/Cart_content'
import Track_popup from '../layouts/Track_popup'
import Header_menu from '../layouts/Header_menu'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'

class Cart extends Component{
	constructor(props){
		super(props)
	}
	state = {
		categories : [],
		products_in_cart : [],
		subtotal : '0',
		total_off : '0',
		total_warrenty : '',
		sub_categories : [],
		sections : [],
		promotional_code : '',
		special_instruction : '',
	}
	methods = {
		getCategories : async () => {
			let categoryList = await getCategoryList()
			this.setState({
				categories : categoryList.data
			})
			
		},
		getLiftPrice : (product) => {
			let liftPrice = 0
			if(product.selected_lift_system == 'cordless'){
				liftPrice = (product.cordless_price == null) ? '0' : product.cordless_price
			}else if(product.selected_lift_system == 'continuous_cord_loop'){
				let chainTypePrice = (product.ccl_chain_type_price == null) ? '0' : product.ccl_chain_type_price
				liftPrice = parseFloat(product.ccl_price) + parseFloat(chainTypePrice)
			}else if(product.selected_lift_system == 'motorization'){
				let motorization_remote_price = (product.motorization_remote_price == null) ? '0' : product.motorization_remote_price
				let motorization_wifi_price = (product.motorization_wifi_price == null) ? '0' : product.motorization_wifi_price
				liftPrice = parseFloat(product.motorization_price) + parseFloat(motorization_remote_price) + parseFloat(motorization_wifi_price)
			}
			return liftPrice
		},
		getRollPositionPrice : (product) => {
			let rollPositionPrice = 0
			if(product.selected_roll_position == 'standard_roll'){
				rollPositionPrice = (product.standard_roll_price == null) ? '0' : product.standard_roll_price
			}else if(product.selected_roll_position == 'reverse_roll'){
				rollPositionPrice = (product.reverse_roll_price == null) ? '0' : product.reverse_roll_price
			}
			return rollPositionPrice
		},
		getHeadRailsPrice : (product) => {
			let headRailsPrice = 0
			if(product.selected_headrails == 'exposed_roll'){
				headRailsPrice = (product.exposed_roll_price == null) ? '0' : product.exposed_roll_price
			}else if(product.selected_headrails == 'cassette'){
				headRailsPrice = (product.cassette_price == null) ? '0' : product.cassette_price
			}
			return headRailsPrice
		},
		getBottomHemStylePrice : (product) => {
			let bottomHemStylePrice = 0
			if(product.selected_bottom_hem_style == 'plain_hem'){
				bottomHemStylePrice = (product.plain_hem_price == null) ? '0' : product.plain_hem_price
			}else if(product.selected_bottom_hem_style == 'wave_hem'){
				bottomHemStylePrice = (product.wave_hem_price == null) ? '0' : product.wave_hem_price
			}else if(product.selected_bottom_hem_style == 'scallop_hem'){
				bottomHemStylePrice = (product.scallop_hem_price == null) ? '0' : product.scallop_hem_price
			}else if(product.selected_bottom_hem_style == 'rounded_hem'){
				bottomHemStylePrice = (product.rounded_hem_price == null) ? '0' : product.rounded_hem_price
			}
			return bottomHemStylePrice
		},
		getTotalWidth : (product) => {
			return parseFloat(product.width_inch)+parseFloat(product.width_8ths)
		},
		getTotalHeight : (product) => {
			return parseFloat(product.height_inch)+parseFloat(product.height_8ths)
		},
		getOfferPrice : (product) => {
			let product_quantity = product.product_quantity
			let liftPrice = this.methods.getLiftPrice(product)
			let rollPositionPrice = this.methods.getRollPositionPrice(product)
			let headRailsPrice = this.methods.getHeadRailsPrice(product)
			let bottomHemStylePrice = this.methods.getBottomHemStylePrice(product)
			
			

			let product_unit_price = (product.product.unit_price === undefined || product.product.unit_price === null) ? 0 : parseFloat(product.product.unit_price).toFixed(2)
			let product_offer_value = (product.product.offer_price === undefined) ? 0 : parseFloat(product.product.offer_price).toFixed(2)
			let product_offer_type = (product.product.offer_price_type === undefined) ? '%' : product.product.offer_price_type
			let product_offer_price = 0
			let product_sell_price = 0

			

			let current_total_width_inch = this.methods.getTotalWidth(product)
			let current_total_height_inch = this.methods.getTotalHeight(product)
			let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)

			let per_square_feet_price = parseFloat(product.per_square_feet_price_without_off).toFixed(8)
			let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			
			let sell_price = total_square_feet_price


			sell_price = parseFloat(sell_price)+parseFloat(liftPrice)+parseFloat(rollPositionPrice)+parseFloat(headRailsPrice)+parseFloat(bottomHemStylePrice)
			let total_price = parseFloat(sell_price) * parseFloat(product_quantity)

			// return total_price
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
			return product_offer_price
		},
		getWarrenty : (product) => {
			let product_quantity = product.product_quantity
			let active_warrenty_price = product.active_warrenty.warrenty_option_price
			let total_active_warrenty_price = parseFloat(active_warrenty_price) * parseFloat(product_quantity)
			return total_active_warrenty_price
		},
		getProductSubTotal : (product) => {
			let product_quantity = product.product_quantity
			let liftPrice = this.methods.getLiftPrice(product)
			let rollPositionPrice = this.methods.getRollPositionPrice(product)
			let headRailsPrice = this.methods.getHeadRailsPrice(product)
			let bottomHemStylePrice = this.methods.getBottomHemStylePrice(product)
			
			

			let product_unit_price = (product.product.unit_price === undefined || product.product.unit_price === null) ? 0 : parseFloat(product.product.unit_price).toFixed(2)
			let product_offer_value = (product.product.offer_price === undefined) ? 0 : parseFloat(product.product.offer_price).toFixed(2)
			let product_offer_type = (product.product.offer_price_type === undefined) ? '%' : product.product.offer_price_type
			let product_offer_price = 0
			let product_sell_price = 0

			

			let current_total_width_inch = this.methods.getTotalWidth(product)
			let current_total_height_inch = this.methods.getTotalHeight(product)
			let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)

			let per_square_feet_price = parseFloat(product.per_square_feet_price_without_off).toFixed(8)
			let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			
			let sell_price = total_square_feet_price


			sell_price = parseFloat(sell_price)+parseFloat(liftPrice)+parseFloat(rollPositionPrice)+parseFloat(headRailsPrice)+parseFloat(bottomHemStylePrice)
			let total_price = parseFloat(sell_price) * parseFloat(product_quantity)

			return total_price
			// let offer_text = ''
			// if(product_offer_type == '%'){
			// 	product_offer_price = ((total_price * product_offer_value) / 100).toFixed(2)
			// 	product_sell_price = parseFloat(total_price - ((total_price * product_offer_value) / 100)).toFixed(2)
			// 	offer_text = product_offer_value + '%'		
			// }else{
			// 	product_offer_price = product_offer_value
			// 	product_sell_price = parseFloat(total_price - product_offer_value).toFixed(2)
			// 	offer_text = product_offer_type + product_offer_value
			// }
		},
		getProductTotal : (product) => {
			let product_quantity = product.product_quantity
			let liftPrice = this.methods.getLiftPrice(product)
			let rollPositionPrice = this.methods.getRollPositionPrice(product)
			let headRailsPrice = this.methods.getHeadRailsPrice(product)
			let bottomHemStylePrice = this.methods.getBottomHemStylePrice(product)
			
			

			let product_unit_price = (product.product.unit_price === undefined || product.product.unit_price === null) ? 0 : parseFloat(product.product.unit_price).toFixed(2)
			let product_offer_value = (product.product.offer_price === undefined) ? 0 : parseFloat(product.product.offer_price).toFixed(2)
			let product_offer_type = (product.product.offer_price_type === undefined) ? '%' : product.product.offer_price_type
			let product_offer_price = 0
			let product_sell_price = 0

			

			let current_total_width_inch = this.methods.getTotalWidth(product)
			let current_total_height_inch = this.methods.getTotalHeight(product)
			let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)

			let per_square_feet_price = parseFloat(product.per_square_feet_price_without_off).toFixed(8)
			let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			
			let sell_price = total_square_feet_price


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
			return product_sell_price
		},
		setProductsToShow : () => {
			let products_in_cart = get('products_in_cart')
			products_in_cart = (products_in_cart != null) ? JSON.parse(products_in_cart) : []
			this.setState({
				products_in_cart
			}, () => {
				this.methods.updateTotalSection()
			})
		},
		goToCheckOut : () => {
			const { history } = this.props
			let additional_cart_info = {
				subtotal : this.state.subtotal,
				total_off : this.state.total_off,
				total_warrenty : this.state.total_warrenty,
				promotional_code : this.state.promotional_code,
				total : this.state.total,
				special_instruction : this.state.special_instruction,
			}
			set('additional_cart_info', JSON.stringify(additional_cart_info))
			history.push(`/checkout`)
		},
		updateTotalSection : () => {
			let subtotal = 0
			let total_off = 0
			let total_warrenty = 0
			let total = 0
			this.state.products_in_cart.map((product, index) => {
				subtotal = (parseFloat(subtotal) + parseFloat(this.methods.getProductSubTotal(product))).toFixed(2)
				total_off = (parseFloat(total_off) + parseFloat(this.methods.getOfferPrice(product))).toFixed(2)
				total_warrenty = (parseFloat(total_warrenty) + parseFloat(this.methods.getWarrenty(product))).toFixed(2)
				total = (parseFloat(total) + parseFloat(this.methods.getProductTotal(product))).toFixed(2)
			})
			total = (parseFloat(total) + parseFloat(total_warrenty)).toFixed(2)
			this.setState({
				subtotal,
				total_off,
				total_warrenty,
				total
			})
		},
		changeQuantity : (e, productIndex) => {
		    let products_in_cart = [...this.state.products_in_cart];
		    let product = {...products_in_cart[productIndex]};
		    product.product_quantity = e.target.value
		    products_in_cart[productIndex] = product;
		    this.setState({
		    	products_in_cart
		    }, () => {
		    	this.methods.updateTotalSection()
		    })
		},
		changePromotionalCode : (e) => {
			let promotional_code = e.target.value
			this.setState({
				promotional_code
			})
		},
		changeSpecialInstruction : (e) => {
			let special_instruction = e.target.value
			this.setState({
				special_instruction
			})
		},
		changeRoomName : (e, productIndex) => {
		    let products_in_cart = [...this.state.products_in_cart];
		    let product = {...products_in_cart[productIndex]};
		    product.room_name = e.target.value
		    products_in_cart[productIndex] = product;
		    this.setState({products_in_cart});
		},
		changeNotes : (e, productIndex) => {
		    let products_in_cart = [...this.state.products_in_cart];
		    let product = {...products_in_cart[productIndex]};
		    product.notes = e.target.value
		    products_in_cart[productIndex] = product;
		    this.setState({products_in_cart});
		},
		removeProduct : (e, productIndex) => {
			let products_in_cart = this.state.products_in_cart
			let local_storage_product = get('products_in_cart')
			local_storage_product = (local_storage_product != null) ? JSON.parse(local_storage_product) : []

			let new_products_in_cart = local_storage_product.filter(product => product.id!=products_in_cart[productIndex].id)
			
			set('products_in_cart', JSON.stringify(new_products_in_cart))
			
			products_in_cart.splice(productIndex, 1)
			this.setState({
				products_in_cart
			})
		},
		updatePrice : () => {
			let product_quantity = this.state.product_quantity
			let liftPrice = this.methods.getLiftPrice()
			let rollPositionPrice = this.methods.getRollPositionPrice()
			let headRailsPrice = this.methods.getHeadRailsPrice()
			let bottomHemStylePrice = this.methods.getBottomHemStylePrice()
			
			let product_unit_price = (this.state.product.unit_price === undefined || this.state.product.unit_price === null) ? 0 : parseFloat(this.state.product.unit_price).toFixed(2)
			let product_offer_value = (this.state.product.offer_price === undefined) ? 0 : parseFloat(this.state.product.offer_price).toFixed(2)
			let product_offer_type = (this.state.product.offer_price_type === undefined) ? '%' : this.state.product.offer_price_type
			let product_offer_price = 0
			let product_sell_price = 0

			let current_total_width_inch = this.methods.getTotalWidth()
			let current_total_height_inch = this.methods.getTotalHeight()
			let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)
			
			// let total_square_feet_price = parseFloat(this.state.per_square_feet_price_without_off).toFixed(8)

			let per_square_feet_price = parseFloat(this.state.per_square_feet_price_without_off).toFixed(8)

			let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			// let total_square_feet_price = (parseFloat(this.state.per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			
			let sell_price = total_square_feet_price
			// let sell_price = this.state.product_sell_price
			
			let active_warrenty_price = this.state.active_warrenty.warrenty_option_price
			sell_price = parseFloat(sell_price)+parseFloat(liftPrice)+parseFloat(rollPositionPrice)+parseFloat(headRailsPrice)+parseFloat(bottomHemStylePrice)+parseFloat(active_warrenty_price)
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
			this.methods.setTotalPrice(parseFloat(product_sell_price).toFixed(2))
			
			this.methods.visible_unvisible_add_to_cart()
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
		}
	}
	componentDidMount(){
		this.methods.getCategories()
		this.methods.setProductsToShow()
		this.methods.getSubCategories()
		this.methods.getSections()
	}
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods} />
				<Cart_content allState={this.state} methods={this.methods} />
				<Payment_social allState={this.state} methods={this.methods} />
				<Disclaimer allState={this.state} methods={this.methods} />
				<Footer allState={this.state} methods={this.methods} />
				<Track_popup allState={this.state} methods={this.methods} />
			</div>
		)
	}
}

export default Cart