import React, {Component} from 'react'
import { getSectionList } from '../../services/Section_services'
import { getSubCategoryList } from '../../services/Sub_category_services'
import Header_menu from '../layouts/Header_menu'
import Header_logo_search from '../layouts/Header_logo_search'
import Secondary_menu from '../layouts/Secondary_menu'
import Sample_content from '../layouts/Sample_content'
import Payment_social from '../layouts/Payment_social'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'
import Track_popup from '../layouts/Track_popup'
class Sample extends Component{
	state = {
		sub_categories : [],
		sections : []
	}
	methods = {
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
		this.methods.getSubCategories()
		this.methods.getSections()
	}
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods} />
				<Sample_content allState={this.state} methods={this.methods} />
				<Payment_social allState={this.state} methods={this.methods} />
				<Disclaimer allState={this.state} methods={this.methods} />
				<Footer allState={this.state} methods={this.methods} />
				<Track_popup allState={this.state} methods={this.methods} />
			</div>
		)
	}
}

export default Sample