import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import {storeNewPage} from '../../../../services/Page_services'
import { getSectionList,	getDataByNameFromLocalList} from '../../../../services/Section_services'
import {Link,withRouter} from 'react-router-dom'
import React, { Component } from 'react'
import Border from '../../../Border'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
class Add_page_content extends Component{
	state = {
		name : '',
		link : '',
		content : '',
		sections : [],
		selected_sections : [],
		errors : {},
		editorState: EditorState.createEmpty()
	}
	changeSection = (e) => {
		let selected_sections = Array.from(e.target.selectedOptions, option => option.value)
		this.setState({
			selected_sections
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
	makeURL = () => {
		this.setState({
			link : this.state.name.toLowerCase().replace(/ /g, '-')
		})
	}
	componentDidMount(){
		this.getSections()
	}
	getSections = async (callback = () => {}) => {
		let response = await getSectionList()
		this.setState({
			sections : response.data		
		})
		callback()
	}
	submitForm = async (e) => {
		e.preventDefault();
		const { history } = this.props
		
		let dataToStore = {
			name : this.state.name,
			link : this.state.link,
			content : this.state.content,
			selected_sections : this.state.selected_sections
		}
		const response = await storeNewPage(dataToStore)
		if(response.success){
			this.setState({
				name : '',
				link : '',
				content : '',
				selected_section : []
			})
			history.push(`/manage/pages/view_pages`)
		}else{
			let errorObject = await makeAnObjectOfLaravelError(response);
			this.setState({
				errors : errorObject
			})
		}
	}
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState
		})
	}
	onContentStateChange = contentState => {
		this.setState({
			content : draftToHtml(contentState)
		})
	}
	getError = (field) => {
		return (field in this.state.errors) ? <span className="fs_12 text_red lh_22 ml_20 floatleft">{this.state.errors[field]}</span>: ''
	}
	render(){

		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Add Page</p>
					<Link to='/manage/pages/view_pages'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Pages</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Add New Page</p>
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
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Link</p>
									{ this.getError('link') }
									<input 
									type="text" 
									className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
									name="link" 
									value={this.state.link} 
									onChange={(e) => {
										this.changeName(e)
									}}/>
								</div>
							</div>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Content</p>
									
								</div>
							</div>
							<Editor
							editorState={this.state.editorState}
							wrapperClassName="wrapper-class"
							editorClassName="editor-class"
							editorStyle={{ border: "1px solid #cfcfcf" }} 
							toolbarClassName="toolbar-class"
							onEditorStateChange={this.onEditorStateChange}
							onContentStateChange={this.onContentStateChange}
							/>
							<div className="fix full mt_16">
								<div className="fix floatleft half">
									<p className="fs_14 lh_22 text_dark_ash font_bold floatleft">Add to Sections</p>
									{ this.getError('selected_sections') }
									<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_60 ninty_eight_percent" onChange={(e) => this.changeSection(e)} name="selected_sections" id="selected_sections" multiple>
										{this.state.sections.map((single_section, index) => (
											<option value={single_section.id} key={index}>{single_section.name}</option>

										))}
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

export default withRouter(Add_page_content)