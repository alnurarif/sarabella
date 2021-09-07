import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Shipping_and_production_tab extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let product = (this.props.allState.product === undefined) ? {} : this.props.allState.product
		let product_shipping_productions = (product.shipping_and_production === undefined) ? [] : JSON.parse(product.shipping_and_production)
		let product_shipping_policy = (product.shipping_policy === undefined) ? '' : product.shipping_policy
		let product_shipping_policy_note = (product.shipping_policy_note === undefined) ? '' : product.shipping_policy_note
		return (
			<div className="fix full bt_1 br_1 bb_1 bl_1 border_solid border_ash">
				<h1 className="fs_20 lh_24 font_bold text_dark_ash ml_10 mt_10">Shipping & Production</h1>
				<div className="fix half floatleft pr_10 border_box">
					<div className={(product_shipping_productions.length > 0) ? "fix full block" : "display_none" }>
						{
							product_shipping_productions.map( (shipping_and_production, index) => (
								<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {shipping_and_production}</p>

							) )
						}
					</div>

					<div className={(product_shipping_policy_note != '') ? "fix full block" : "display_none" }>
						{
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_20 mb_5">{product_shipping_policy_note}</p>
						}
					</div>

					<div className={(product_shipping_policy_note != '') ? "fix full block" : "display_none" }>
						{
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_20 mb_5 font_bold">{product_shipping_policy_note}</p>
						}
					</div>
				</div>
			</div>
		)
	}
}
export default Shipping_and_production_tab

