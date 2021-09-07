import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Single_product from './filter/Single_product'
class Filter_content extends Component{
	render(){
		let allState = this.props.allState
		let sub_category = (allState.sub_category === undefined) ? {} : allState.sub_category
		let sub_category_name = (sub_category.name === undefined) ? '' : sub_category.name
		let sub_category_products = (allState.products_to_show === undefined) ? [] : allState.products_to_show
		
		return (
			<div className="fix full bg_light_sky_blue">
				<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
					<p className="fs_12 text_sky_blue">>> Home >> {sub_category_name}</p>
				</div>

				<div className="fix div_mid nine_by_ten pb_20">
					<img src={`${process.env.MIX_APP_URL}/images/banner.jpg`} className="full"/>
				</div>

				<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
					<div className="fix floatleft fifteen_percent">
						<p className="fs_14 font_bold lh_22">Filter By</p>
						<div className="fix full bt_1 border_top_ash border_top_solid"></div>
						<p className="fs_12 font_bold lh_24">Color</p>
						<div className="fix full">
							{
								this.props.allState.colors.map((color,index) => (
									<div className="fix floatleft twenty_five_percent mb_2" key={index} onClick={()=> this.props.methods.getProductsOfThisColor(color)}>
										<div className="fix ninty_five_percent div_mid border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash cursor_pointer pt_5 pr_5 pb_5 pl_5">
											<img className="full vertical_align_middle" src={`${process.env.MIX_APP_URL}/uploads/colors/${color.image}`} />
										</div>
									</div>
								))
							}
						</div>

						<p className="fs_12 font_bold lh_24">Options/Features</p>
						<div className="fix full mb_10">
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="cordless_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.cordless_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Cordless</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="continuous_cord_loop_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.continuous_cord_loop_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Continuous Cord Loop</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="motorization_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.motorization_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Motorization</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="standard_roll_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.standard_roll_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Standard Roll</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="reverse_roll_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.reverse_roll_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Reverse Roll</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="exposed_roll_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.exposed_roll_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Exposed Roll</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="cassette_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.cassette_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Cassette</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="plain_hem_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.plain_hem_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Plain Hem</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="wave_hem_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.wave_hem_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Wave Hem</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="scallop_hem_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.scallop_hem_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Scallop Hem</p>
								</div>
							</div>
							<div className="fix full">
								<div className="fix floatleft one_by_ten">
									<input type="checkbox" className="h_20" name="rounded_hem_checked" onChange={(e)=>this.props.methods.changeSelectedFeature(e)} checked={(this.props.allState.rounded_hem_checked == 1) ? true : false}/>
								</div>
								<div className="fix floatleft nine_by_ten">
									<p className="fs_14 lh_20 text_dark_ash">Rounded Hem</p>
								</div>
							</div>
							
						</div>
						<div className="fix full bt_1 border_top_ash border_top_solid"></div>
						<p className="fs_12 font_bold lh_40">Rating</p>
						<div className="fix full">
							<div className="fix floatleft sixty_percent">
								<div className="fix full">
									<p className="fs_12 lh_20">
										<span className="text_yellow">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
									</p>
								</div>
								<div className="fix full">
									<p className="fs_12 lh_20">
										<span className="text_yellow">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
										<span className="text_dark_ash">
											<i className="fas fa-star"></i>
										</span>
									</p>
								</div>
								<div className="fix full">
									<p className="fs_12 lh_20">
										<span className="text_yellow">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
										<span className="text_dark_ash">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
									</p>
								</div>
								<div className="fix full">
									<p className="fs_12 lh_20">
										<span className="text_yellow">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
										<span className="text_dark_ash">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
									</p>
								</div>
								<div className="fix full">
									<p className="fs_12 lh_20">
										<span className="text_yellow">
											<i className="fas fa-star"></i>
										</span>
										<span className="text_dark_ash">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</span>
									</p>
								</div>
							</div>
							<div className="fix floatleft forty_percent">
								<div className="fix full"><p className="fs_13 lh_20">&nbsp;</p></div>
								<div className="fix full"><p className="fs_13 lh_20 text_dark_ash">And Up</p></div>
								<div className="fix full"><p className="fs_13 lh_20 text_dark_ash">And Up</p></div>
								<div className="fix full"><p className="fs_13 lh_20 text_dark_ash">And Up</p></div>
								<div className="fix full"><p className="fs_13 lh_20 text_dark_ash">And Up</p></div>
							</div>
						</div>

					</div>
					<div className="fix floatleft eighty_five_percent pr_10 pl_10 border_box">
						<div className="fix full bb_1 border_bottom_solid border_bottom_ash">
							<div className="fix floatleft two_by_ten">
								<p className="fs_14 font_bold lh_20">{sub_category_name}</p>
								<p className="fs_12 lh_20">{sub_category_products.length} item(s) found in {sub_category_name}</p>
							</div>
							<div className="fix floatleft eight_by_ten">
								<div className="fix floatleft thirty_percent">
									
									<div className="fix floatleft one_by_3"><p className="text_dark_ash floatleft lh_30 fs_14 font_bold textcenter full">Size | Width:</p></div>
									<div className="fix floatleft one_by_3">
										<div className="fix div_mid ninty_percent border_box">
											<input type="text" className="ninty_five_percent h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash"/>
										</div>
									</div>
									<div className="fix floatleft one_by_3">
										<div className="fix div_mid ninty_percent border_box">
											<input type="text" className="ninty_five_percent h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash"/>
										</div>
									</div>
								</div>
								<div className="fix floatleft twenty_five_percent">
									<div className="fix floatleft one_by_3"><p className="text_dark_ash floatleft lh_30 fs_14 font_bold textcenter full">Height:</p></div>
									<div className="fix floatleft one_by_3">
										<div className="fix div_mid ninty_percent border_box">
											<input type="text" className="ninty_five_percent h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash"/>
										</div>
									</div>
									<div className="fix floatleft one_by_3">
										<div className="fix div_mid ninty_percent border_box">
											<input type="text" className="ninty_five_percent h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash"/>
										</div>
									</div>
								</div>
								<div className="fix floatleft thirty_five_percent">
									<div className="fix floatleft three_by_ten"><p className="text_dark_ash floatleft lh_30 fs_14 font_bold textcenter full">Sort by:</p></div>
									<div className="fix floatleft seven_by_ten">
										<div className="fix div_mid ninty_percent border_box">
											<select name="" id="" className="border_box ninty_five_percent h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
												<option value="">Select</option>
											</select>
										</div>
									</div>
								</div>
								<div className="fix floatleft ten_percent">
									<div className="fix floatleft four_by_ten"><p className="text_dark_ash floatleft lh_30 fs_14 font_bold textcenter full">View:</p></div>
									<div className="fix floatleft six_by_ten">
										<p className="text_dark_ash lh_30 fs_14 font_bold textright"><i className="fas fa-th-list"></i> <i className="fas fa-th-large"></i></p>
									</div>
								</div>
							</div>
						</div>
						<div className="fix full">
							{sub_category_products.map(( product, index ) => (
								<Single_product
								productImage={product.images[0].image_name} 
								productName={product.name} 
								key={index}
								productFeatures={product.short_features}
								productColors={product.colors}
								product={product}
								/>
							))}	
							{(sub_category_products.length == 0) && <h1 className="fs_20 font_bold lh_40 textcenter text_error">No product found!!</h1>}		
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Filter_content