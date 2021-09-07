import React, { Component } from 'react'

import Home_mid_product_second from './Home_mid_product_second'
import Home_top_product from './Home_top_product'
import Home_mid_product from './Home_mid_product'
import Shop_by_color_single from './home/Shop_by_color_single'
class Home_contents extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix full bg_light_sky_blue">
				<div className="fix div_mid nine_by_ten">
					<h1 className="pt_10 pb_10 fs_24 font_bold">SHOP BY CUSTOM WINDOW BLINDS AND SHADES</h1>
				</div>
				<div className="fix full bg_white nine_by_ten div_mid bb_1 border_bottom_solid border_bottom_ash">
					<div className="fix floatleft six_by_ten">
						<p className="fs_16 text_dark_ash lh_46 pl_10">Order custom-made window blinds for a perfect fit in your home - 100% guaranteed.</p>
					</div>
					<div className="fix floatleft textright four_by_ten pt_8">
						<a href="#" className="font_bold mr_10 bt_1 br_1 bb_1 bl_1 border_ash border_solid display_inline_block pt_5 pb_5 pl_10 pr_10 fs_16 text_dark_ash">SHOW ALL</a>
					</div>
				</div>
				<Home_top_product 
				allState={this.props.allState} 
				methods={this.props.methods}/>

				<div className="fix div_mid nine_by_ten">
					<h1 className="pt_10 pb_10 fs_24 font_bold">MOST POPULAR PRODUCTS</h1>
				</div>

				<div className="fix full bg_white nine_by_ten div_mid bb_1 border_bottom_solid border_bottom_ash">
					<div className="fix floatleft six_by_ten">
						<p className="fs_16 text_dark_ash lh_46 pl_10">Order custom-made window blinds for a perfect fit in your home - 100% guaranteed.</p>
					</div>
					<div className="fix floatleft textright four_by_ten pt_8">
						<a href="#" className="font_bold mr_10 bt_1 br_1 bb_1 bl_1 border_ash border_solid display_inline_block pt_5 pb_5 pl_10 pr_10 fs_16 text_dark_ash">SHOW ALL</a>
					</div>
				</div>

				<Home_mid_product 
				allState={this.props.allState}
				methods={this.props.methods} />

				<div className="fix div_mid nine_by_ten">
					<h1 className="pt_10 pb_10 fs_24 font_bold">SHOP BY COLOR</h1>
				</div>

				<div className="fix full bg_white nine_by_ten div_mid bb_1 border_bottom_solid border_bottom_ash">
					<div className="fix floatleft six_by_ten">
						<p className="fs_16 text_dark_ash lh_46 pl_10">Order custom-made window blinds for a perfect fit in your home - 100% guaranteed.</p>
					</div>
				</div>

				<div className="fix nine_by_ten bg_white div_mid">
					{
						this.props.allState.colors.map( (color,index) => (
							<Shop_by_color_single 
							key={index}
							colorName={color.name}
							colorImage={color.image}
							/>
						))
					}
				</div>


				<div className="fix div_mid nine_by_ten">
					<h1 className="pt_10 pb_10 fs_24 font_bold">MOST REVIEWED PRODUCTS</h1>
				</div>

				<div className="fix full bg_white nine_by_ten div_mid bb_1 border_bottom_solid border_bottom_ash">
					<div className="fix floatleft six_by_ten">
						<p className="fs_16 text_dark_ash lh_46 pl_10">Order custom-made window blinds for a perfect fit in your home - 100% guaranteed.</p>
					</div>
					<div className="fix floatleft textright four_by_ten pt_8">
						<a href="#" className="font_bold mr_10 bt_1 br_1 bb_1 bl_1 border_ash border_solid display_inline_block pt_5 pb_5 pl_10 pr_10 fs_16 text_dark_ash">SHOW ALL</a>
					</div>
				</div>

				<Home_mid_product_second 
				allState={this.props.allState}
				methods={this.props.methods}/>
				
				<div className="fix full h_30"></div>
				<div className="fix nine_by_ten bg_very_light_ash div_mid">
					<p className="fs_30 textcenter mt_20 mb_10">Customer Reviews</p>
					<p className="fs_20 textcenter text_yellow mb_30">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
					</p>
					<div className="fix nine_by_ten div_mid mb_30 position_relative">
						<div className="fix position_absolute w_40 h_40 round_half bg_white textcenter right_0 t_half bt_1 br_1 bb_1 bl_1 border_solid border_ash">
							<p className="fs_20 lh_40"><i className="fas fa-angle-right"></i></p>
						</div>
						<div className="fix position_absolute w_40 h_40 round_half bg_white textcenter l_0 t_half bt_1 br_1 bb_1 bl_1 border_solid border_ash">
							<p className="fs_20 lh_40"><i className="fas fa-angle-left"></i></p>
						</div>
						<div className="fix nine_by_ten div_mid bg_white round_5 pt_40 pr_40 pb_40 pl_40 mt_30 mb_30" style={{boxShadow: "0px 0px 13px #b9b9b9"}} >
							<div className="fix full">
								<div className="fix w_max_content">
									
									<div className="fix floatleft w_400 floatleft">
										<div className="fix nine_by_ten div_mid">
											<div className="fix nine_by_ten div_mid bt_1 br_1 bb_1 bl_1 border_solid border_ash pt_30 pr_30 pb_30 pl_30 border_box h_full round_5">	
												<p className="fs_12 text_dark_ash font_bold textjustify lh_20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
											<div className="fix nine_by_ten pt_20 pr_20 pb_20 pl_20 border_box mt_10">
												<div className="fix three_by_ten floatleft">
													<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} alt="profile" className="seven_by_ten round_half"/>
												</div>
												<div className="fix seven_by_ten floatleft textleft">
													<div className="fix full mb_10">
														<p className="fs_13 font_bold floatleft">Frenchie Blubex</p> <p className="text_ash textright floatright font_bold">20 may, 2017</p>
													</div>
													<div className="fix full">
														<p className="fs_16 text_yellow">
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="fix floatleft w_400 floatleft">
										<div className="fix nine_by_ten div_mid">
											<div className="fix nine_by_ten div_mid bt_1 br_1 bb_1 bl_1 border_solid border_ash pt_30 pr_30 pb_30 pl_30 border_box h_full round_5">	
												<p className="fs_12 text_dark_ash font_bold textjustify lh_20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
											<div className="fix nine_by_ten pt_20 pr_20 pb_20 pl_20 border_box mt_10">
												<div className="fix three_by_ten floatleft">
													<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} alt="profile" className="seven_by_ten round_half"/>
												</div>
												<div className="fix seven_by_ten floatleft textleft">
													<div className="fix full mb_10">
														<p className="fs_13 font_bold floatleft">Frenchie Blubex</p> <p className="text_ash textright floatright font_bold">20 may, 2017</p>
													</div>
													<div className="fix full">
														<p className="fs_16 text_yellow">
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="fix floatleft w_400 floatleft">
										<div className="fix nine_by_ten div_mid">
											<div className="fix nine_by_ten div_mid bt_1 br_1 bb_1 bl_1 border_solid border_ash pt_30 pr_30 pb_30 pl_30 border_box h_full round_5">	
												<p className="fs_12 text_dark_ash font_bold textjustify lh_20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
											<div className="fix nine_by_ten pt_20 pr_20 pb_20 pl_20 border_box mt_10">
												<div className="fix three_by_ten floatleft">
													<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} alt="profile" className="seven_by_ten round_half"/>
												</div>
												<div className="fix seven_by_ten floatleft textleft">
													<div className="fix full mb_10">
														<p className="fs_13 font_bold floatleft">Frenchie Blubex</p> <p className="text_ash textright floatright font_bold">20 may, 2017</p>
													</div>
													<div className="fix full">
														<p className="fs_16 text_yellow">
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="fix floatleft w_400 floatleft">
										<div className="fix nine_by_ten div_mid">
											<div className="fix nine_by_ten div_mid bt_1 br_1 bb_1 bl_1 border_solid border_ash pt_30 pr_30 pb_30 pl_30 border_box h_full round_5">	
												<p className="fs_12 text_dark_ash font_bold textjustify lh_20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
											<div className="fix nine_by_ten pt_20 pr_20 pb_20 pl_20 border_box mt_10">
												<div className="fix three_by_ten floatleft">
													<img src={`${process.env.MIX_APP_URL}/images/product.jpg`} alt="profile" className="seven_by_ten round_half"/>
												</div>
												<div className="fix seven_by_ten floatleft textleft">
													<div className="fix full mb_10">
														<p className="fs_13 font_bold floatleft">Frenchie Blubex</p> <p className="text_ash textright floatright font_bold">20 may, 2017</p>
													</div>
													<div className="fix full">
														<p className="fs_16 text_yellow">
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
															<i className="fas fa-star"></i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="fix div_mid nine_by_ten">
					<h1 className="pt_10 pb_10 fs_24 font_bold textcenter">CUSTOMIZE WITH CONFIDENCE</h1>
				</div>
				<div className="fix nine_by_ten bg_white div_mid bb_2 border_bottom_solid border_bottom_ash">
					<p className="fs_14 text_dark_ash textcenter font_bold lh_40">Order custom-made window blinds for a perfect fit in your home - 100% guaranteed.</p>
				</div>
				<div className="fix nine_by_ten bg_white div_mid pt_20 pb_20">
					<div className="fix half floatleft">
						<div className="fix div_mid ninty_percent">
							<img src={`${process.env.MIX_APP_URL}/images/work.png`} className="full vertical_align_middle h_full"/>
						</div>
					</div>
					<div className="fix half floatleft">
						<div className="fix div_mid seven_by_ten bt_1 br_1 bb_1 bl_1 border_solid border_white round_20 pt_10 pr_10 pb_20 pl_20 bg_sky_blue box_shadow_sky_blue_10 mt_50 mb_50">
							<p className="font_bold fs_16 lh_24">LET'S TALK BLINDS <span className="text_white">Live Chat>></span></p>
							<p className="font_bold fs_16 lh_24">MEASURE & INSTALL <span className="text_white">Guide>></span></p>
							<br/>
							<p className="font_bold fs_16 lh_24">WE'RE HERE TO HELP <span className="text_white">Contact US>></span></p>
							<p className="font_bold fs_16 lh_24 text_white">FREE DESIGN, MEASURE,</p> 
							<p className="font_bold fs_16 lh_24 text_white">& INSTALL HELP</p>
							<p className="font_bold fs_16 lh_24 text_white">(888) 685-1735</p>
							<br/>
							<p className="font_bold fs_16">PROFESSIONAL MEASURING & 
							<br/>INSTALLATION</p>
							<p className="fs_16 lh_24 text_white">HIRE A PROFESSIONAL>></p>
							<p className="fs_16 lh_24 text_white">$249 FULL HOME FOR DESIGNER <br/>COLLECTION>></p>

						</div>
					</div>
				</div>

				<div className="fix div_mid nine_by_ten">
					<h1 className="pt_10 pb_10 fs_24 font_bold textcenter">OUR VALUABLE PARTNER</h1>
				</div>
				<div className="fix nine_by_ten div_mid pt_20 pb_20">
					<div className="fix floatleft five_percent h_150">
						<div className="fix div_mid bg_very_light_ash round_half w_40 h_40 textcenter mt_eighty_percent cursor_pointer">
							<p className="fs_20 lh_40"><i className="fas fa-angle-left"></i></p>
						</div>
					</div>
					<div className="fix floatleft ninty_percent h_150">
						<div className="fix floatleft w_max_content">
							<div className="fix floatleft h_150 w_200">
								<div className="fix nine_by_ten div_mid h_full bg_white textcenter lh_150">
									<img src={`${process.env.MIX_APP_URL}/images/microsoft_icon.png`} className="six_by_ten vertical_align_middle"/>
								</div>
							</div>
							<div className="fix floatleft h_150 w_200">
								<div className="fix nine_by_ten div_mid h_full bg_white textcenter lh_150">
									<img src={`${process.env.MIX_APP_URL}/images/amazon_icon.png`} className="six_by_ten vertical_align_middle"/>
								</div>
							</div>
							<div className="fix floatleft h_150 w_200">
								<div className="fix nine_by_ten div_mid h_full bg_white textcenter lh_150">
									<img src={`${process.env.MIX_APP_URL}/images/apple_icon.png`} className="six_by_ten vertical_align_middle"/>
								</div>
							</div>
							<div className="fix floatleft h_150 w_200">
								<div className="fix nine_by_ten div_mid h_full bg_white textcenter lh_150">
									<img src={`${process.env.MIX_APP_URL}/images/google_drive_icon.png`} className="six_by_ten vertical_align_middle"/>
								</div>
							</div>
							<div className="fix floatleft h_150 w_200">
								<div className="fix nine_by_ten div_mid h_full bg_white textcenter lh_150">
									<img src={`${process.env.MIX_APP_URL}/images/google_icon.png`} className="six_by_ten vertical_align_middle"/>
								</div>
							</div>
							<div className="fix floatleft h_150 w_200">
								<div className="fix nine_by_ten div_mid h_full bg_white textcenter lh_150">
									<img src={`${process.env.MIX_APP_URL}/images/bitbucket_icon.png`} className="six_by_ten vertical_align_middle"/>
								</div>
							</div>

						</div>
					</div>
					<div className="fix floatleft five_percent h_150">
						<div className="fix div_mid bg_very_light_ash round_half w_40 h_40 textcenter mt_eighty_percent cursor_pointer">
							<p className="fs_20 lh_40"><i className="fas fa-angle-right"></i></p>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}

export default Home_contents