import React, {Component} from 'react'
import Head from '../../../layouts/manage/Head'
import Left_menu from '../../../layouts/manage/Left_menu'
import View_pages_content from '../../../layouts/manage/pages/View_pages_content'
class View_pages extends Component{
	render(){
		return (
			<>
				<Head />
				<div className="fix full bg_ash">
					<div className="fix floatleft twenty_percent bg_black border_box">
						<div className="fix full ninty_five_percent textcenter pt_20 pb_20">
							<img src={`${process.env.MIX_APP_URL}/images/default-user-photo.png`} className="fifty_percent vertical_align_middle"/>
						</div>
						<Left_menu />
					</div>
					<div className="fix floatleft eighty_percent bg_ash mt_10">
						<View_pages_content />
					</div>
				</div>
			</>
		)
	}
}

export default View_pages