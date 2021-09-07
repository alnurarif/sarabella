import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Home_top_product_single extends Component{
	constructor(props){
		super(props)
	}
	render(){
		
		return (
			<div className="fix floatleft two_by_ten mt_10 pb_10">
				<div className="fix div_mid eight_by_ten textcenter box_shadow_ash_1 pt_10 pr_10 pb_10 pl_10 bt_1 br_1 bb_1 bl_1 border_solid border_ash">
					<img src={`./uploads/sub_categories/${this.props.productImage}`} className="full"/>
					<Link to={`/public/category/${this.props.productUrl}`}><span className="mt_10 fs_16 font_bold text_dark_ash lh_22 h_80 display_block">{this.props.productName}</span></Link>
				</div>
			</div>
		)
	}
}

export default Home_top_product_single