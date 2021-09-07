import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {
	getSectionList,
	deleteSection,
	deleteDataByIdFromLocalList,
	getDataByNameFromLocalList} from '../../../../services/Section_services'
import Button from '../../../common_elements/Button'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class View_sections_content extends Component{
	state = {
		sections : [],
		temporary_sections : [],
		selectedSectionId : null,
		search_data : ''
	}
	updateSearch = (e) => {
		this.setState({
			search_data : e.target.value 
		})
	}
	componentDidMount(){
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
	deleteDataFromLocal = (id) => {
		let sections = deleteDataByIdFromLocalList('id',this.state.selectedSectionId,this.state.sections)
		this.setState({
			sections,
			temporary_sections : sections
		})
	}
	searchByName = () => {
		let foundSections = getDataByNameFromLocalList(this.state.search_data, this.state.sections)
		this.setState({
			temporary_sections : foundSections
		})
	}
	deleteConfirmation = (id) => {
		this.setState({
			selectedSectionId : id 
		})

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='fix custom-ui'>
						<div className='fix w_300 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash'>
							<div className="fix full pt_5 pr_10 pb_5 pl_5 border_box bg_brown2">
								<p className="fs_14 text_white font_bold">Are you sure?</p>
							</div>
							<div className="fix full pt_5 pr_10 pb_5 pl_5 border_box">
								<p className="fs_14 mt_20 text_dark_ash">Do you want to delete this data?</p>
								<div className="fix full mt_20 floatright">
									<Button 
									buttonTitle="No"
									buttonBackground="bg_green"
									buttonFontSize="fs_12"
									buttonPaddingTop="pt_5"
									buttonPaddingBottom="pb_5"
									buttonPaddingRight="pr_10"
									buttonPaddingLeft="pl_10"
									buttonFontWeight="font_bold"
									buttonTextSection="text_white"
									buttonMarginLeft="ml_5"
									buttonMarginRight="mr_5"
									buttonFloat="floatright"
									buttonFunction={() => {
										onClose()
									}}/>

									<Button 
									buttonTitle="Yes"
									buttonBackground="bg_red"
									buttonFontSize="fs_12"
									buttonPaddingTop="pt_5"
									buttonPaddingBottom="pb_5"
									buttonPaddingRight="pr_10"
									buttonPaddingLeft="pl_10"
									buttonFontWeight="font_bold"
									buttonTextSection="text_white"
									buttonMarginLeft="ml_5"
									buttonMarginRight="mr_5"
									buttonFloat="floatright"
									buttonFunction={() => {
										deleteSection(this.state.selectedSectionId)
										this.getSections(() => {onClose()})
										this.setState({
											selectedSectionId : null
										})
										
									}}/>

								</div>
							</div>
						</div>
					</div>
				);
			}
		});
	}
	render(){
		
		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">View Sections</p>
					<Link to='/manage/sections/add_section'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">Add Section</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">View and Manage Sections</p>
				</div>
				<div className="fix full bt_1 border_top_ash border_top_solid"></div>
				<div className="fix full mt_20 mb_20">
					<button className="bg_brown2 text_white font_bold fs_14 floatright h_30 pl_16 pr_16 border_none" onClick={this.searchByName}>Search</button>
					<input type="text" name="search" placeholder="Search" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash pl_5 pr_5 w_150 border_box floatright" onChange={(e) => this.updateSearch(e)}/>
				</div>
				<div className="fix full">
					<table className="full text_dark_ash fs_14 lh_26">
						<thead >
							<tr className="bg_ash">
								<th><input type="checkbox"/></th>
								<th>Sl.</th>
								<th>Name</th>
								<th>Created</th>
								<th style={{width : '120px'}}>Action</th>
							</tr>
						</thead>
						<tbody className="textcenter">
							{
								(this.state.temporary_sections.length > 0) ?
									this.state.temporary_sections.map((section, index) => (
										<tr key={index}>
											<td><input type="checkbox"/></td>
											<td>{index+1}</td>
											<td>{section.name}</td>
											<td>{moment(section.created_at).format('YYYY-MM-DD')}</td>
											<td>
												<Link to={`/manage/sections/edit_section/${section.id}`}>
													<p className="cursor_pointer ml_2 mr_2 fs_14 textcenter font_bold text_dark_ash display_inline_block"><i className="fas fa-edit"></i></p>
												</Link>
												<p className="cursor_pointer ml_2 mr_2 fs_14 textcenter font_bold text_dark_ash display_inline_block" onClick={() => this.deleteConfirmation(section.id)}><i className="fas fa-trash-alt"></i></p>
											</td>
										</tr>
									))
								:
									<tr><td colSpan="100%"> <p className="fs_14 text_dark_ash font_bold textcenter">No Data!</p></td></tr>
							}
							
							
						</tbody>
					</table>
				</div>
			</div>	
		)
	}
}
export default View_sections_content

