import React, { Component } from 'react'
import Border from '../../../Border'
import {Link,withRouter} from 'react-router-dom'
import {storeNewCategory} from '../../../../services/Category_services'
import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
class Add_category_content extends Component{
	state = {
		name : '',
		has_url : '0',
		selected_has_url :'0',
		url : '',
		is_active : '1',
		errors : {}

	}
	changeInput = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	changeName = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		},this.makeURL)
	}
	makeURL = () => {
		this.setState({
			url : this.state.name.toLowerCase().replace(/ /g, '-')
		})
	}
	updateUrl = (e) => {
		this.setState({
			[e.target.name] : e.target.value.toLowerCase().replace(/ /g, '-')
		})	
	}
	changeHasURL = (e) => {
		this.setState({
			[e.target.name] : e.target.value,
			selected_has_url : e.target.value
		})
	}
	submitForm = async (e) => {
		e.preventDefault();
		const { history } = this.props
		let dataToStore = {
			name : this.state.name,
			has_url : this.state.has_url,
			url : this.state.url,
			is_active : this.state.is_active
		}
		const response = await storeNewCategory(dataToStore)
		if(response.success){
			this.setState({
				name : '',
				has_url : '0',
				url : '',
				is_active : '1'
			})
			history.push(`/manage/categories/view_categories`)
		}else{
			let errorObject = await makeAnObjectOfLaravelError(response);
			this.setState({
				errors : errorObject
			})
		}
	}
	getError = (field) => {
		return (field in this.state.errors) ? <span className="fs_12 text_red lh_22 ml_20 floatleft">{this.state.errors[field]}</span>: ''
	}
	render(){

		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Add Category</p>
					<Link to='/manage/categories/view_categories'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Categories</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Add New Category</p>
				</div>
				<Border />
				<div className="fix full mt_20">
					<form onSubmit={(e) => this.submitForm(e)}>
						<div className="fix floatleft full">
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Name</p>
									{ this.getError('name') }
									<input 
									type="text" 
									className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
									name="name" 
									value={this.state.name} 
									onChange={(e) => {
										this.changeName(e)
									}}/>
								</div>
							</div>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Has URL</p>
									{ this.getError('has_url') }
									<div className="fix floatleft full mt_10">
										<div className="fix floatleft half">
											<input 
											type="radio" 
											className="floatleft h_20" 
											name="has_url" 
											value="0" 
											checked={this.state.selected_has_url === "0"}
											onChange={(e) => this.changeHasURL(e)}/>
											<p className="fs_14 lh_22 text_dark_ash floatleft ml_5">No</p>
										</div>
										<div className="fix floatleft half">
											<input 
											type="radio" 
											className="floatleft h_20" 
											name="has_url" 
											value="1"
											checked={this.state.selected_has_url === "1"} 
											onChange={(e) => this.changeHasURL(e)} />
											<p className="fs_14 lh_22 text_dark_ash floatleft ml_5">Yes</p>
										</div>
									</div>
								</div>
							</div>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">URL</p>
									{ this.getError('url') }
									<input 
									type="text" 
									className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
									name="url" 
									value={this.state.url} 
									onChange={(e) => {
										this.updateUrl(e)
									}}/>
								</div>
							</div>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Status</p>
									{ this.getError('is_active') }
									<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="is_active" onChange={(e) => this.changeInput(e)}>
										<option value="1">Active</option>
										<option value="0">Inactive</option>
									</select>
								</div>
							</div>
						</div>
						<div className="fix floatleft full mt_20">
							<button className="bg_brown2 fs_14 pr_16 pl_16 font_bold floatleft text_white border_none cursor_pointer h_30">ADD</button>
						</div>
					</form>
				</div>
							
			</div>
		)
	}
}

export default withRouter(Add_category_content)