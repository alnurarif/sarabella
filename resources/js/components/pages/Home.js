import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSubCategoryList } from '../../services/Sub_category_services'
import { getProductList } from '../../services/Product_services'
import { getColorList } from '../../services/Color_services'
import { getSectionList } from '../../services/Section_services'
import Header_logo_search from '../layouts/Header_logo_search'
import Secondary_menu from '../layouts/Secondary_menu'
import Payment_social from '../layouts/Payment_social'
import Home_contents from '../layouts/Home_contents'
import Header_menu from '../layouts/Header_menu'
import Banner_home from '../layouts/Banner_home'
import Track_popup from '../layouts/Track_popup'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'
class Home extends Component{
	constructor(props){
		super(props)
	}
	state = {
		categories : [],
		sub_categories : [],
		products : [],
		colors : [],
		sections : [],
		activeCategory : null
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
		getProducts : async () => {
			let productList = await getProductList()
			this.setState({
				products : productList.data
			})
			
		},
		getColors : async () => {
			let colorList = await getColorList()
			this.setState({
				colors : colorList.data
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
		this.methods.getSubCategories()
		this.methods.getProducts()
		this.methods.getColors()
		this.methods.getSections()
	}
	render(){

		return (
			<div>
				<Header_menu
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Header_logo_search
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Secondary_menu
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Banner_home
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Home_contents
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Payment_social
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Disclaimer
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Footer
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
				<Track_popup
				common={this.props.common} 
				allState={this.state} 
				methods={this.methods}
				/>
			</div>
		)
	}
}

export default Home