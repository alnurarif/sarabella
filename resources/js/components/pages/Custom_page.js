import React, {Component} from 'react'

import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import { getSubCategoryList } from '../../services/Sub_category_services'
import { getPageBySlug } from '../../services/Page_services'
import { set, get } from '../../helpers/Local_storage_helper'
import { NavLink, Link, withRouter } from 'react-router-dom'

import Custom_page_content from '../layouts/Custom_page_content'
import Header_logo_search from '../layouts/Header_logo_search'
import Payment_social from '../layouts/Payment_social'
import Secondary_menu from '../layouts/Secondary_menu'
import Track_popup from '../layouts/Track_popup'
import Header_menu from '../layouts/Header_menu'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'


class Custom_page extends Component{
	constructor(props){
		super(props)
	}
	state = {
		categories : [],
		slug : '',
		page : {},
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
		getPageBySlug : async () => {
			let pageInfo = await getPageBySlug(this.state.slug)
			this.setState({
				page : pageInfo.data
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
		this.setState({
			slug : this.props.match.params.slug
		}, () => {
			this.methods.getCategories()
			this.methods.getPageBySlug()
			this.methods.getSubCategories()
		})
		this.methods.getSections()
		
	}
	
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods}/>
				<Custom_page_content allState={this.state} methods={this.methods}/>
				<Payment_social allState={this.state} methods={this.methods}/>
				<Disclaimer allState={this.state} methods={this.methods}/>
				<Footer allState={this.state} methods={this.methods}/>
				<Track_popup allState={this.state} methods={this.methods}/>
			</div>
		)
	}
}

export default withRouter(Custom_page)