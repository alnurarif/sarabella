import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Continuous_cord_loop_chain_type extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let product = (this.props.allState.product === undefined) ? {} : this.props.allState.product
		let chain_type_price = (product.ccl_chain_type_and_price === undefined) ? [] : JSON.parse(product.ccl_chain_type_and_price)
		console.log(chain_type_price)
		return (
			<div className="fix full mt_10">
				<div className="fix full">
					<div className="fix nine_by_ten floatleft">
						<p className="fs_14 lh_22 text_dark_ash">Chain Type</p>
					</div>
				</div>
				<select className="border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10" name="ccl_lift_chain_location" onChange={(e) => this.props.methods.changeChainType(e)}>
					{
						chain_type_price.map((singleChainTypePrice, index) => (
							<option value={`${singleChainTypePrice.chain_type_name},${(singleChainTypePrice.chain_type_price === null) ? 0 : singleChainTypePrice.chain_type_price}`} key={index}>{singleChainTypePrice.chain_type_name} - {(singleChainTypePrice.chain_type_price === null) ? 'Free' : `$${singleChainTypePrice.chain_type_price}`}</option>
						))
					}
				</select>
			</div>
		)
	}
}
export default Continuous_cord_loop_chain_type