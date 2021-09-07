import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import { getSubCategoryList } from '../../services/Sub_category_services'
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
		additional_cart_info : {}
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