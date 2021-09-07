import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import { getSubCategoryList } from '../../services/Sub_category_services'
import Header_menu from '../layouts/Header_menu'
import Header_logo_search from '../layouts/Header_logo_search'
import Secondary_menu from '../layouts/Secondary_menu'
import About_content from '../layouts/About_content'
import Payment_social from '../layouts/Payment_social'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'
import Track_popup from '../layouts/Track_popup'
class About extends Component{
	constructor(props){
		super(props)
	}
	state = {
		categories : [],
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
		this.methods.getSections()
	}
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods} />
				<About_content allState={this.state} methods={this.methods} />
				<Payment_social allState={this.state} methods={this.methods} />
				<Disclaimer allState={this.state} methods={this.methods} />
				<Footer allState={this.state} methods={this.methods} />
				<Track_popup allState={this.state} methods={this.methods} />
			</div>
		)
	}
}

export default About