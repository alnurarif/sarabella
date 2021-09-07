import React, { Component } from 'react'

class Track_popup extends Component{
	render(){
		return (
			<div className="fix w_300 h_100 bg_sky_blue_light bt_1 br_1 bb_1 bl_1 border_solid border_ash pt_10 pr_10 pb_10 pl_10 position_absolute display_none" id="track_order_pop_up">
				<div className="fix full">
					<p className='fs_14 lh_14 textright cursor_pointer close_pop_up'><i className="fas fa-times"></i></p>
				</div>
				<p className="fs_12 text_dark_ash textcenter lh_14">Enter order information to track</p>
				<div className="fix full mt_5">
					<div className="fix half floatleft">
						<input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_percent div_mid pl_10 pr_10 border_box" placeholder="Order Number"/>
					</div>
					<div className="fix half floatleft">
						<input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_percent div_mid pl_10 pr_10 border_box" placeholder="Email"/>
					</div>
				</div>
				<div className="fix full textcenter">
					<button className="h_30 bg_sky_blue text_white font_bold fs_14 lh_20 pr_16 pl_16 border_none mt_10">Submit</button>
				</div>
			</div>
		)
	}
}

export default Track_popup