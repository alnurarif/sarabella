import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Home_mid_product_single extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let features = (this.props.productFeatures === undefined) ? [] : JSON.parse(this.props.productFeatures)
		let colors = (this.props.productColors === undefined) ? [] : this.props.productColors
		let colorsToShow = colors.slice(0, 5)
		let moreToShow = colors.length - colorsToShow.length
		let product = (this.props.product === undefined) ? {} : this.props.product
		let product_unit_price = (product.unit_price === undefined) ? 0 : parseFloat(product.unit_price).toFixed(2)
		let product_offer_value = (product.offer_price === undefined) ? 0 : parseFloat(product.offer_price).toFixed(2)
		let product_offer_type = (product.offer_price_type === undefined) ? '%' : product.offer_price_type
		let product_offer_price = 0
		let product_sell_price = 0
		if(product_offer_type == '%'){
			product_offer_price = ((product_unit_price * product_offer_value) / 100).toFixed(2)
			product_sell_price = parseFloat(product_unit_price - ((product_unit_price * product_offer_value) / 100)).toFixed(2)
		}else{
			product_offer_price = product_offer_value
			product_sell_price = parseFloat(product_unit_price - product_offer_value).toFixed(2)
		}
		return (
			<div className="fix floatleft one_by_4 mt_10 pb_10">
				<div className="fix div_mid eighty_five_percent textcenter box_shadow_ash_1 pt_10 pr_10 pb_10 pl_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
					<img src={`./uploads/products/${this.props.productImage}`} className="full"/>
					<Link to={`/public/product/${product.id}`}><p className="textleft fs_16 font_bold text_dark_ash lh_22 h_40">{this.props.productName}</p></Link>
					<p className="textleft fs_16 lh_22 font_bold"><span className="line_through">${product_unit_price}</span> <span className="text_error">${product_sell_price}*</span></p>
					<div className="fix full mt_5">
						<div className="fix floatleft eight_by_ten">
							{
								colorsToShow.map( (color,index) => (
									<div className="fix floatleft h_30 two_by_ten" key={index}>
										<div className="fix eighty_percent h_eighty_percent bt_2 br_2 bb_2 bl_2 border_solid border_ash">
											<img src={`./uploads/colors/${color.image}`} className="full"/>
										</div>
									</div>

								))
							}
						</div>
						<div className="fix floatleft two_by_ten"><p className="fs_14 lh_22 font_bold text_dark_ash">{moreToShow} More</p></div>
					</div>
					<div className="fix full mt_5 textleft h_90">
						{
							features.map( (feature, index) => (
								<p className="text_dark_ash fs_16" key={index}>- {feature}</p>
							))
						}
					</div>
					<div className="fix six_by_ten div_mid mt_10">
						<p className="floatleft fs_12 text_yellow"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
						<p className="floatleft fs_12 ml_5 text_sky_blue">42 Ratings</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Home_mid_product_single
