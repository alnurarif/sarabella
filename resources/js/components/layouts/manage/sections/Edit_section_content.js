import React, { Component } from 'react'
import Border from '../../../Border'
import {Link,withRouter} from 'react-router-dom'
import {getSection,updateSection} from '../../../../services/Section_services'
import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import Button from '../../../common_elements/Button'
class Edit_section_content extends Component{
	state = {
		id : '',
		name : '',
		errors : {}

	}
	componentDidMount(){
		this.getSectionInfo()
	}
	getSectionInfo = async () => {
		let response = await getSection(this.props.match.params.id)
		this.setState({
			id : response.data.id,
			name : response.data.name,
		})
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
			name : this.state.name,
		}
		const response = await updateSection(this.state.id,dataToStore)
		if(response.success){
			this.setState({
				id : '',
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
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Edit Section</p>
					<Link to='/manage/sections/view_sections'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Sections</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Edit Section</p>
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
							<Button 
							buttonTitle="Update"
							buttonBackground="bg_brown2"
							buttonFontSize="fs_14"
							buttonPaddingTop="pt_5"
							buttonPaddingBottom="pb_5"
							buttonPaddingRight="pr_16"
							buttonPaddingLeft="pl_16"
							buttonFontWeight="font_bold"
							buttonTextSection="text_white"
							buttonMarginLeft="ml_5"
							buttonMarginRight="mr_5"
							buttonFloat="clear_both"
							buttonFunction={()=>console.log('')}/>
						</div>
					</form>
				</div>
							
			</div>
		)
	}
}

export default withRouter(Edit_section_content)