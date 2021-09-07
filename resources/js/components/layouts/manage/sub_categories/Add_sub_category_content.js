import React, { Component } from 'react'
import Border from '../../../Border'
import {Link,withRouter} from 'react-router-dom'
import {storeNewSubCategory} from '../../../../services/Sub_category_services'
import {getCategoryList} from '../../../../services/Category_services'
import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
class Add_sub_category_content extends Component{
	state = {
		name : '',
		description : '',
		categories :'',
		url : '',
		image : null,
		is_active : '1',
		errors : {},
		categories_to_show : []

	}
	componentDidMount(){
		this.getCategories()
	}
	getCategories = async (callback = () => {}) => {
		let response = await getCategoryList()
		this.setState({
			categories_to_show : response.data
		})
		callback()
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
	updateCategory = (e) => {
		
		let categories_array = this.state.categories.split(',')

		//if checkbox is checked and not exist in array then push other wise remove
		if(e.target.checked){
			if(categories_array.includes(e.target.value) == false){
				categories_array.push(e.target.value) 
			}
		}else{
			if(categories_array.includes(e.target.value) == true){
				categories_array.splice(categories_array.indexOf(e.target.value), 1) 
			}
		}

		//make it string again
		let categories_id_text = ''
		for(let category_id in categories_array){
			categories_id_text += categories_array[category_id]+','
		}
		categories_id_text = categories_id_text.replace(/^\,|\,$/g, '');

		this.setState({
			categories : categories_id_text
		})


	}
	
	submitForm = async (e) => {
		e.preventDefault();
		const { history } = this.props
		let dataToStore = {
			name : this.state.name,
			description : this.state.description,
			categories : this.state.categories,
			url : this.state.url,
			image : this.state.image,
			is_active : this.state.is_active
		}
		const response = await storeNewSubCategory(dataToStore)
		if(response.success){
			this.setState({
				name : '',
				description : '',
				categories : '',
				url : '',
				image : '',
				is_active : ''
			})
			history.push(`/manage/sub_categories/view_sub_categories`)
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
	onChangeSubCategoryPhoto = (e) => {
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
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Add Sub Category</p>
					<Link to='/manage/sub_categories/view_sub_categories'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Sub Categories</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Add New Sub Category</p>
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
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Description</p>
									{ this.getError('description') }
									<textarea 
									type="text" 
									className="all_border_solid_ash_1 text_field_padding_lr_5 h_200 ninty_eight_percent" 
									name="description" 
									value={this.state.description} 
									onChange={(e) => {
										this.changeInput(e)
									}}/>
								</div>
							</div>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Categories</p>
									{ this.getError('categories') }
									<div className="fix full mt_10">
										{this.state.categories_to_show.map((category, index) => (
											<div className="fix full mb_5" key={index}>
												<input className="floatleft h_20" type="checkbox" value={category.id} name="category" onChange={(e) => {this.updateCategory(e)}} />
												<p className="fs_14 lh_22 floatleft text_dark_ash ml_5">{category.name.toUpperCase()}</p>
											</div>
										))

										}
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
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<input 
			                        id="subCategoryPhoto"
			                        type="file"
			                        onChange={(e) => this.onChangeSubCategoryPhoto(e)}
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

export default withRouter(Add_sub_category_content)