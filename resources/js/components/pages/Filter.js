import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import { getSubCategoryBySlug,getSubCategoryList } from '../../services/Sub_category_services'
import { getColorList } from '../../services/Color_services'
import { NavLink, Link, withRouter } from 'react-router-dom'
import Header_logo_search from '../layouts/Header_logo_search'
import Secondary_menu from '../layouts/Secondary_menu'
import Filter_content from '../layouts/Filter_content'
import Payment_social from '../layouts/Payment_social'
import Header_menu from '../layouts/Header_menu'
import Track_popup from '../layouts/Track_popup'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'
class Filter extends Component{
	constructor(props){
		super(props)
	}
	state = {
		categories : [],
		slug : '',
		sub_category : {},
		colors : [],
		products_to_show : [],
		selected_color : {},
		cordless_checked : 0,
		continuous_cord_loop_checked : 0,
		motorization_checked : 0,
		standard_roll_checked : 0,
		reverse_roll_checked : 0,
		exposed_roll_checked : 0,
		cassette_checked : 0,
		plain_hem_checked : 0,
		wave_hem_checked : 0,
		scallop_hem_checked : 0,
		rounded_hem_checked : 0,
		sub_categories : [],
		sections : []
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
		changeSelectedFeature : (e) => {
			let this_checkbox_value = (e.target.checked) ? 1 : 0
			this.setState({
				[e.target.name] : this_checkbox_value
			}, () => {
				this.methods.applyFilter()
			})
		},
		applyFilter : () => {
			let products_to_show = []
			this.state.sub_category.products.map((product, index) => {
				let dont_push_this_product = true
				let found_color = false
				product.colors.map((color, colorIndex) => {
					if(color.id == this.state.selected_color.id){
						found_color = true
					}
				})
				if(found_color == false){
					dont_push_this_product = false
				}
				if(this.state.cordless_checked == 1 && product.is_cordless_lift_active != 1){ dont_push_this_product = false }
				if(this.state.continuous_cord_loop_checked == 1 && product.is_continuous_loop_active != 1){ dont_push_this_product = false} 
				if(this.state.motorization_checked == 1 && product.is_motorization_active != 1){ dont_push_this_product = false} 
				if(this.state.standard_roll_checked == 1 && product.is_standard_roll_active != 1){ dont_push_this_product = false} 
				if(this.state.reverse_roll_checked == 1 && product.is_reverse_roll_active != 1){ dont_push_this_product = false} 
				if(this.state.exposed_roll_checked == 1 && product.is_exposed_roll_active != 1){ dont_push_this_product = false} 
				if(this.state.cassette_checked == 1 && product.is_cassette_roll_active != 1){ dont_push_this_product = false} 
				if(this.state.plain_hem_checked == 1 && product.is_plain_hem_active != 1){ dont_push_this_product = false} 
				if(this.state.wave_hem_checked == 1 && product.is_wave_hem_active != 1){ dont_push_this_product = false} 
				if(this.state.scallop_hem_checked == 1 && product.is_scallop_hem_active != 1){ dont_push_this_product = false} 
				if(this.state.rounded_hem_checked == 1 && product.is_rounded_hem_active != 1){ dont_push_this_product = false} 			

				if( dont_push_this_product == true) products_to_show.push(product)

				this.setState({
					products_to_show
				})
			})
		},
		getProductsOfThisColor : (color) => {
			this.setState({
				selected_color : color
			}, () => {
				this.methods.applyFilter()	
			})
			
		},
		getSubCategoryBySlug : async () => {
			let subCategoryInfo = await getSubCategoryBySlug(this.props.match.params.slug)
			this.setState({
				sub_category : subCategoryInfo.data
			}, () => {
				this.setState({
					products_to_show : this.state.sub_category.products
				})
			})
		},
		getAllColors : async () => {
			let colors = await getColorList()
			this.setState({
				colors : colors.data
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
		this.setState({
			slug : this.props.match.params.slug
		})
		this.methods.getCategories()
		this.methods.getSubCategoryBySlug()
		this.methods.getAllColors()
		this.methods.getSubCategories()
		this.methods.getSections()
	}
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods}/>
				<Filter_content allState={this.state} methods={this.methods}/>
				<Payment_social allState={this.state} methods={this.methods}/>
				<Disclaimer allState={this.state} methods={this.methods}/>
				<Footer allState={this.state} methods={this.methods}/>
				<Track_popup allState={this.state} methods={this.methods}/>
			</div>
		)
	}
}

export default withRouter(Filter)