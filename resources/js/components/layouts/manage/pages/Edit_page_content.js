import React, { Component } from 'react'
import Border from '../../../Border'
import {Link,withRouter} from 'react-router-dom'
import {getPage,updatePage} from '../../../../services/Page_services'
import {getSectionList} from '../../../../services/Section_services'
import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import Button from '../../../common_elements/Button'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,convertToRaw, ContentState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
class Edit_page_content extends Component{
	state = {
		id : '',
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
	componentDidMount(){
		this.getPageInfo()
		this.getSections()
	}
	getSections = async (callback = () => {}) => {
		let response = await getSectionList()
		this.setState({
			sections : response.data,
			temporary_sections : response.data
		})
		callback()
	}
	getPageInfo = async () => {
		let response = await getPage(this.props.match.params.id)
		let selected_sections = response.data.sections.map(section => section.id)
		// console.log(getPageInfo);
		
		this.setState({
			id : response.data.id,
			name : response.data.name,
			link : response.data.link,
			content : response.data.content,
			selected_sections
		}, () => {
			const html = this.state.content;
			const contentBlock = htmlToDraft(html);
			if (contentBlock) {
				console.log(contentBlock);
				const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
				const editorState = EditorState.createWithContent(contentState);
				this.setState ({
					editorState
				})
			}
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
	submitForm = async (e) => {
		e.preventDefault();
		const { history } = this.props
		let dataToStore = {
			name : this.state.name,
			link : this.state.link,
			content : this.state.content,
			selected_sections : this.state.selected_sections
		}
		const response = await updatePage(this.state.id,dataToStore)
		if(response.success){
			this.setState({
				id : '',
				name : '',
				link : '',
				content : '',
				sections : [],
				selected_sections : []
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
		const { editorState } = this.state;
		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Edit Page</p>
					<Link to='/manage/pages/view_pages'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Pages</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Edit Page</p>
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
									{ this.getError('content') }
									
								</div>
							</div>
							<Editor
							editorState={editorState}
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
									<select value={this.state.selected_sections} className="all_border_solid_ash_1 text_field_padding_lr_5 h_60 ninty_eight_percent" onChange={(e) => this.changeSection(e)} name="selected_sections" id="selected_sections" multiple>
										{this.state.sections.map((single_section, index) => (
											<option value={single_section.id} key={index}>{single_section.name}</option>

										))}
									</select>
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
							buttonTextPage="text_white"
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

export default withRouter(Edit_page_content)