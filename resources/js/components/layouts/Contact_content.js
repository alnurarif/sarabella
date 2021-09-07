import React, {Component} from 'react'

class Contact_content extends Component{
	render(){
		return (
			<div className="fix full bg_light_sky_blue">
				<div className="fix nine_by_ten div_mid mb_20">
					<p className="fs_26 lh_36 textcenter font_bold pt_40 pb_40">Contact Us</p>
					<div className="fix full">
						<div className="fix floatleft half">
							<p className="fs_24 font_bold lh_30 mb_20">Our Office</p>
							<p className="lh_20 fs_14 text_dark_ash font_bold mb_10">Head Office:</p>
							<p className="lh_20 fs_14 text_dark_ash">Test Location, Address</p>
							<p className="lh_20 fs_14 text_dark_ash">Contact No: +9483XXXXXXX</p>
							<p className="lh_20 fs_14 text_dark_ash">Email: test@hotmail.com</p>

							<p className="lh_20 fs_14 text_dark_ash font_bold mb_10 mt_30">Branch:</p>
							<p className="lh_20 fs_14 text_dark_ash">Test Location, Address</p>
							<p className="lh_20 fs_14 text_dark_ash">Contact No: +9483XXXXXXX</p>
							<p className="lh_20 fs_14 text_dark_ash">Email: test@hotmail.com</p>
						</div>
						<div className="fix floatleft half">
							<p className="fs_14 lh_20 font_bold">Name</p>
							<input type="text" className="h_30 full bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box mb_10"/>
							<p className="fs_14 lh_20 font_bold">Email</p>
							<input type="text" className="h_30 full bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box mb_10"/>
							<p className="fs_14 lh_20 font_bold">Message</p>
							<textarea className="h_150 full bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box"></textarea>
							<button className="full border_none bg_sky_blue fs_16 text_white font_bold lh_30 cursor_pointer">Submit</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact_content