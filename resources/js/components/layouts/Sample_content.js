import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Sample_content extends Component{
	render(){
		return (
			<div className="fix full bg_light_sky_blue">
				<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
					<p className="fs_12 text_sky_blue">>> Blinds Home >> Free Samples</p>
				</div>

				<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
					<div className="fix floatleft seven_by_ten">
						<div className="fix full">
							<h1 className="fs_40 lh_50 mt_20 text_sky_blue font_bold textcenter">ORDER FREE SAMPLES</h1>
							<p className=" width fs_20 lh_28 mb_10 text_dark_ash textcenter">Get up to 12 samples shipped right to your door... FREE!</p>
							<div className="fix ninty_percent bt_2 border_top_ash border_top_solid mb_20 div_mid"></div>
						</div>
						<div className="fix full bg_sky_blue">
							<p className="fs_18 lh_30 textcenter text_white font_bold">SELECT YOUR SAMPLES</p>
						</div>	
						<div className="fix full">
							<div className="fix full mt_20">
								<div className="fix floatleft one_by_3">
									<div className="fix floatleft two_by_ten">
										<div className="fix div_mid h_30 w_30 round_half bg_sky_blue bt_2 br_2 bb_2 bl_2 border_solid border_ash">
											<p className="fs_14 textcenter font_bold lh_30 text_white">1</p>
										</div>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 text_dark_ash lh_30">Select a category & product</p>
									</div>
								</div>
								<div className="fix floatleft one_by_3">
									<div className="fix floatleft two_by_ten">
										<div className="fix div_mid h_30 w_30 round_half bg_sky_blue bt_2 br_2 bb_2 bl_2 border_solid border_ash">
											<p className="fs_14 textcenter font_bold lh_30 text_white">2</p>
										</div>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 text_dark_ash lh_30">Click on the sample colours you like.</p>
									</div>
								</div>
								<div className="fix floatleft one_by_3">
									<div className="fix floatleft two_by_ten">
										<div className="fix div_mid h_30 w_30 round_half bg_sky_blue bt_2 br_2 bb_2 bl_2 border_solid border_ash">
											<p className="fs_14 textcenter font_bold lh_30 text_white">3</p>
										</div>
									</div>
									<div className="fix floatleft eight_by_ten">
										<p className="fs_14 text_dark_ash lh_30">Click checkout on your Samples cart.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="fix full mt_30">
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent mb_10">
								<div className="fix div_mid ninty_two_percent position_relative bt_1 br_1 bb_1 bl_1 border_solid border_ash cursor_pointer">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full vertical_align_middle"/>
									<div className="fix full position_absolute bottom_0 left_0 bg_black_transparent pt_10 pb_10 pr_10 pb_10 border_box">
										<p className="fs_14 lh_20 text_white textcenter">HONEYCOMB/CELLULAR SHADES</p>
									</div>
								</div>
							</div>
						</div>
						<div className="fix full bg_sky_blue">
							<p className="fs_18 lh_30 textcenter text_white font_bold">PLEASE CHOOSE A PRODUCT</p>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Select Light Filtering Fabric Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-minus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full pt_10">
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product2.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product3.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product4.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
							<div className="fix floatleft twelve_half_percent h_180 textcenter mb_10">
								<div className="fix div_mid ninty_five_percent h_140 bt_1 br_1 bb_1 bl_1 border_solid border_ash round_3">
									<img src={`${process.env.MIX_APP_URL}/images/product5.jpg`} className="full"/>
									<p className="fs_12 textcenter lh_20">Perfect White</p>
								</div>
								<button className="fs_12 ninty_five_percent pt_5 pb_5 text_white bg_sky_blue font_bold mt_5 border_none">Free Sample</button>
							</div>
						</div>	

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Select Blackout Fabric Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Designer Fabric Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Premium Light Filtering Fabric Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Supper Value Vinyl Blackout Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Value Vinyl Blackout Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Premium Vinyl Blackout Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Premium Blackout Fabric Roller Shades</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Economy Vinyl Blackout Roller Shades - Quick Shop</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>

						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Signature Vinyl Blackout Roller Shades - Quick Shop</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>


						<div className="fix full bg_very_light_ash2 mt_10">
							<div className="fix floatleft half">
								<p className="fs_14 lh_30 text_sky_blue pl_10">Fabric Blackout Roller Shades - Quick Shop</p>
							</div>
							<div className="fix floatleft half">
								<ul>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16">SHOP</li>
									<li className="floatright text_dark_ash lh_30 font_bold pr_16 pl_16"><i className="fas fa-plus"></i></li>
								</ul>
							</div>
						</div>	

						<div className="fix full mt_10">
							<p className="fs_14 lh_20 text_red mt_30">By ordering samples, you are guaranteed today's sale pricing for 2 weeks.</p>
							<p className="fs_12 lh_20 text_red mt_30">* Next business day delivery to most metropoliton areas if sample order place by 2 PM EST. It may take up to 3 business days to rural or remote locations. $20 charge is refundable upon placement of a window covering window within 30 days of your sample order. Just enter your sample order ID in the Special Instructions section of your order.</p>
						</div>

					</div>
					<div className="fix floatleft three_by_ten">
						<div className="fix div_mid ninty_percent">
							<div className="fix full div_mid">
								<div className="fix four_by_ten floatleft">
									<img src={`${process.env.MIX_APP_URL}/images/shipping_icon.png`} className="ninty_percent vertical_align_middle"/>
								</div>
								<div className="fix six_by_ten floatleft">
									<p className="fs_30 textcenter text_sky_blue lh_40 font_bold mt_20">FREE</p>
									<p className="fs_14 textcenter font_bold">Samples ship the next day.</p>
								</div>
							</div>
							<div className="fix eighty_percent bt_2 border_top_ash border_top_solid mb_20 div_mid"></div>
							<div className="fix full">
								<div className="fix four_by_ten floatleft">
									<img src={`${process.env.MIX_APP_URL}/images/fedex_shipping_icon.png`} className="ninty_percent vertical_align_middle"/>
								</div>
								<div className="fix six_by_ten floatleft">
									<p className="fs_30 textcenter text_sky_blue lh_40 font_bold mt_20">$20 <span className="fs_14">Refundable</span></p>
									<p className="fs_14 textcenter font_bold">Get them even faster with FedEx overnight shipping.</p>
								</div>
								<div className="fix full bg_sky_blue">
									<p className="fs_18 lh_30 textcenter text_white font_bold">SAMPLES CART</p>
								</div>	
								<div className="fix full bg_very_light_ash3 pt_10 pr_10 pb_10 pl_10 border_box">
									<p className="fs_16 text_dark_ash textleft lh_20">Value Cordless Light Filteriing Honeycomb Shades</p>
									<div className="fix full mt_20">
										<div className="fix floatleft seven_by_ten">
											<div className="fix floatleft two_by_ten">
												<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} className="ninty_percent vertical_align_middle"/>
											</div>
											<div className="fix floatleft eight_by_ten">
												<p className="fs_14 text_dark_ash lh_30 ml_10 font_bold">Gray</p>
											</div>
										</div>
										<div className="fix floatleft three_by_ten">
											<p className="fs_14 text_dark_ash lh_30 ml_10 font_bold textright">FREE <i className="fas fa-times-circle"></i></p>
										</div>

									</div>
									<div className="fix full">
										<p className="fs_14 font_bold text_sky_blue textright">Clear All</p>
									</div>
									<div className="fix full textcenter">
										<button className="bg_green fs_20 pt_10 pb_10 ninty_percent border_none mt_20 text_white">CHECKOUT</button>
										<button className="bg_sky_blue fs_20 pt_10 pb_10 ninty_percent border_none mt_20 text_white">CONTINUE SHOPPING</button>
									</div>

									<p className="text_red fs_14 lh_20 textcenter mt_20">By ordering samples, your are guaranteed today's sale pricing for 2 weeks</p>
								</div>
							</div>
						</div>
					</div>
					
					
				</div>

			</div>
		)
	}
}

export default Sample_content