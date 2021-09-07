import React, { Component } from 'react'

class Payment_social extends Component{
	render(){
		return (
			<div className="fix full">
				<div className="fix nine_by_ten div_mid pt_20 pb_20">
					<div className="fix floatleft twenty_five_percent">
						<p className="fs_16 text_dark_ash font_bold">Payment Methods</p>
						<div className="fix pt_10 pb_10">
							<div className="fix fifteen_percent floatleft round_5 mr_10 bg_very_light_ash textcenter box_shadow_ash_1 bt_1 br_1 bb_1 bl_1 border_ash border_solid">
								<img src={`${process.env.MIX_APP_URL}/images/cash_on_delivery_icon.png`} className="ninty_percent"/>
							</div>
							<div className="fix fifteen_percent floatleft round_5 mr_10 bg_very_light_ash textcenter box_shadow_ash_1 bt_1 br_1 bb_1 bl_1 border_ash border_solid">
								<img src={`${process.env.MIX_APP_URL}/images/visa_icon.png`} className="ninty_percent"/>
							</div>
							<div className="fix fifteen_percent floatleft round_5 mr_10 bg_very_light_ash textcenter box_shadow_ash_1 bt_1 br_1 bb_1 bl_1 border_ash border_solid">
								<img src={`${process.env.MIX_APP_URL}/images/master_card_icon.png`} className="ninty_percent"/>
							</div>
							<div className="fix fifteen_percent floatleft round_5 mr_10 bg_very_light_ash textcenter box_shadow_ash_1 bt_1 br_1 bb_1 bl_1 border_ash border_solid">
								<img src={`${process.env.MIX_APP_URL}/images/bkash_icon.png`} className="ninty_percent"/>
							</div>
						</div>
					</div>
					<div className="fix floatleft twenty_five_percent">
						<p className="fs_16 text_dark_ash font_bold">Follow Us</p>
						<div className="fix pt_10 pb_10">
							<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
								<p className="fs_30 lh_35 text_blue">
									<i className="fab fa-facebook"></i>
								</p>
							</div>
							<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
								<p className="fs_30 lh_35 text_red">
									<i className="fab fa-youtube"></i>
								</p>
							</div>
							<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
								<p className="fs_30 lh_35 text_sky_blue">
									<i className="fab fa-twitter-square"></i>
								</p>
							</div>
							<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
								<p className="fs_30 lh_35 text_blue">
									<i className="fab fa-linkedin"></i>
								</p>
							</div>
						</div>
					</div>
					<div className="fix floatleft twenty_five_percent">
						<p className="fs_16 text_dark_ash font_bold">Verified by</p>
						<div className="fix pt_10 pb_10">
							<img src={`${process.env.MIX_APP_URL}/images/pci_dss.png`} />
						</div>
					</div>
					<div className="fix floatleft twenty_five_percent">
						<p className="fs_14 text_dark_ash"><span className="font_italic">Sign up for emails and </span><span className="font_bold">get exclusive offers!</span></p>
						<div className="fix pt_10 pb_10">
							<input type="text" name="subscribe" className="six_by_ten h_30 floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash pl_10 pr_10" placeholder="Enter Email Address"/>
							<button className="cursor_pointer h_30 floatleft thirty_percent bg_sky_blue text_white border_none">SUBSCRIBE</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Payment_social