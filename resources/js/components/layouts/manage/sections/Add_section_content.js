import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import {storeNewSection} from '../../../../services/Section_services'
import {Link,withRouter} from 'react-router-dom'
import React, { Component } from 'react'
import Border from '../../../Border'
class Add_section_content extends Component{
	state = {
		name : '',
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
	
	submitForm = async (e) => {
		e.preventDefault();
		const { history } = this.props
		let dataToStore = {
			name : this.state.name
		}
		const response = await storeNewSection(dataToStore)
		if(response.success){
			this.setState({
				name : '',
			})
			history.push(`/manage/sections/view_sections`)
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
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Add Section</p>
					<Link to='/manage/sections/view_sections'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Sections</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Add New Section</p>
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

export default withRouter(Add_section_content)