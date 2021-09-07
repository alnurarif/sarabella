import React, { Component } from 'react'
class Footer extends Component{
	render(){
		return (
			<div className="fix full bg_light_sky_blue">
				<div className="fix div_mid nine_by_ten pt_20 pb_20">
					<div className="fix floatleft half">
						<p className="fs_12 text_dark_ash">Copyright by &#169; SARABELLA 2020</p>
					</div>
					<div className="fix floatright half">
						<ul>
							<li className="floatright"><a href="#" className="fs_12 text_dark_ash display_block pr_10 pl_10">Privacy & Policy</a></li>
							<li className="floatright"><a href="#" className="fs_12 text_dark_ash display_block pr_10 pl_10">Terms & Conditions</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Footer