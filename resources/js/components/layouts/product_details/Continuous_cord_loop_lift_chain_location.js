import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Continuous_cord_loop_lift_chain_location extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix full mt_10">
				<div className="fix full">
					<div className="fix nine_by_ten floatleft">
						<p className="fs_14 lh_22 text_dark_ash">Lift Cord Location</p>
					</div>
				</div>
				<select className="border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10" name="ccl_lift_cord_location" onChange={(e) => this.props.methods.setLiftCordLocation(e)}>
					<option value="left">Left</option>
					<option value="right">Right</option>
				</select>
			</div>
		)
	}
}
export default Continuous_cord_loop_lift_chain_location

