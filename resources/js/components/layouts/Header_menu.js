import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Header_menu extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<div className="fix full bb_1 border_bottom_solid border_bottom_ash pt_10 pb_10">
				<div className="fix nine_by_ten div_mid">
					<div className="fix floatleft half ">
						<div className="fix floatleft">
							<p className="fs_13 lh_20"><i className="fas fa-phone-square-alt text_sky_blue"></i> (403) 836-8484</p>
						</div>
						<div className="fix floatleft ml_20">
							<p className="fs_13 lh_20"><i className="fas fa-envelope-square text_sky_blue"></i> info@sarabella.ca</p>
							
						</div>
					</div>
					<div className="fix floatright half">
						<ul className="top_menu_ul fs_12 lh_20">

							<li className="floatright"><Link to='contact'><span  className="display_block pl_10 pr_10">Contact Us</span></Link></li>	
							<li className="floatright"><Link to='blog'><span  className="display_block pl_10 pr_10">Blog</span></Link></li>
							<li className="floatright"><Link to='gallery'><span  className="display_block pl_10 pr_10">Gallery</span></Link></li>
							<li className="floatright"><Link to='about'><span  className="display_block pl_10 pr_10">About Us</span></Link></li>
							<li className="floatright"><a href="#" className="track_my_order_menu display_block pl_10 pr_10">Track My Order</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Header_menu