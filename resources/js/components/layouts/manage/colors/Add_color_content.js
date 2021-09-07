import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import {storeNewColor} from '../../../../services/Color_services'
import {Link,withRouter} from 'react-router-dom'
import React, { Component } from 'react'
import Border from '../../../Border'
class Add_color_content extends Component{
	state = {
		name : '',
		image : null,
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
	
	submitForm = async (e) => {
		e.preventDefault();
		const { history } = this.props
		let dataToStore = {
			name : this.state.name,
			image : this.state.image,
			is_active : this.state.is_active
		}
		const response = await storeNewColor(dataToStore)
		if(response.success){
			this.setState({
				name : '',
				image : '',
				is_active : ''
			})
			history.push(`/manage/colors/view_colors`)
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
	onChangeColorPhoto = (e) => {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length)
			return;
		this.createImage(files[0]);
	}
	createImage = (file) => {
		let reader = new FileReader();
		reader.onload = (e) => {
			this.setState({
				image : e.target.result
			})
		};
		reader.readAsDataURL(file);
	}
	render(){

		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Add Color</p>
					<Link to='/manage/colors/view_colors'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Colors</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Add New Color</p>
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
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Status</p>
									{ this.getError('is_active') }
									<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="is_active" onChange={(e) => this.changeInput(e)}>
										<option value="1">Active</option>
										<option value="0">Inactive</option>
									</select>
								</div>
							</div>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<input 
			                        id="colorPhoto"
			                        type="file"
			                        onChange={(e) => this.onChangeColorPhoto(e)}
			                        />
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

export default withRouter(Add_color_content)