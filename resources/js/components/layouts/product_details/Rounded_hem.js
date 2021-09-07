import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Rounded_hem extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix floatleft twenty_five_percent cursor_pointer position_relative" onClick={(e) => this.props.methods.setBottomHemStyleType('rounded_hem')}>
				{this.props.allState.selected_bottom_hem_style == 'rounded_hem' && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
				<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
					<img src={`${process.env.MIX_APP_URL}/images/feature_bottom_hem_style_rounded.jpg`} className="full vertical_align_middle" />	
					<div className="fix full mt_10">
						<div className="fix full">
							<div className="fix nine_by_ten floatleft">
								<p className="fs_14 lh_22 text_dark_ash">Rounded</p>
							</div>
						</div>
						<div className={(this.props.allState.product.is_rounded_hem_active != '1') ? "display_none" : "fix full"} >
							<p className="fs_14 lh_22 text_dark_ash font_bold">{(this.props.allState.product.rounded_hem_price == null) ? 'Free' : this.props.allState.product.rounded_hem_price}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Rounded_hem

