import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { get, set } from '../../helpers/Local_storage_helper'
class Header_logo_search extends Component{
	constructor(){
		super()
	}
	render(){
		let products_in_cart = JSON.parse(get('products_in_cart'))

		let number_of_products_in_cart = products_in_cart.length
		return (
			<div className="fix full bb_1 border_bottom_solid border_bottom_ash pt_10 pb_10">
				<div className="fix div_mid nine_by_ten">
					<div className="fix floatleft three_by_ten">
						<Link to='/'><img className="header_logo" src={`${process.env.MIX_APP_URL}/images/logo.png`} alt="Logo" /></Link>
					</div>
					<div className="fix floatleft four_by_ten textcenter">
						<div className="fix div_mid ninty_five_percent mt_10">
							<input type="text" className="six_by_ten bt_1 bb_1 bl_1 border_top_solid border_bottom_solid border_left_solid border_top_ash border_bottom_ash border_left_ash btlr_5 bblr_5 h_30 border_right_none floatleft fs_14 pt_5 pb_5 pl_5 border_box" placeholder="Search Prducts"/>
							<select name="category" id="" className="three_by_ten bt_1 bb_1 border_top_solid border_bottom_solid border_top_ash border_bottom_ash h_30 border_right_none border_left_none floatleft fs_14 pt_5 pb_5 border_box">
								<option value="">All Categories</option>
							</select>
							<button className="one_by_ten cursor_pointer bt_1 bb_1 br_1 border_top_solid border_bottom_solid border_right_solid border_top_ash border_bottom_ash border_right_ash h_30 border_right_none border_left_none floatleft fs_14 pt_5 pb_5 border_box bg_white btrr_5 bbrr_5"><i className="fas fa-search"></i></button>
							
						</div>
					</div>
					<div className="fix floatleft three_by_ten">
						<div className="fix floatright pr_5 pl_5 lh_52 position_relative">
							<Link to='/cart'>
								<div className="position_absolute t_10 r_0 lh_16 h_16 pl_5 pr_5 round_half bg_sky_blue ">
									<p className="fs_12 text_white textcenter font_bold">{number_of_products_in_cart}</p>
								</div>
								<p className="fs_20">
									<i className="fas fa-shopping-basket"></i>
								</p>
							</Link>
							
						</div>
						
						<div className="fix floatright pr_5 pl_5 lh_52">
							<p className="fs_20"><i className="far fa-heart"></i></p>
						</div>
						<div className="fix floatright pr_5 pl_5 lh_52">
							<a href="account_login.html"><p className="fs_20"><i className="far fa-user"></i></p></a>
						</div>
					</div>	
				</div>
				
			</div>
		)
	}
}

export default Header_logo_search 