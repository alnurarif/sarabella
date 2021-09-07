import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Standard_roll extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix floatleft twenty_five_percent cursor_pointer position_relative" onClick={(e) => this.props.methods.setRollPositionType('standard_roll')}>
				{this.props.allState.selected_roll_position == 'standard_roll' && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
				<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
					<img src={`${process.env.MIX_APP_URL}/images/feature_roll_position_standard_roll.jpg`} className="full vertical_align_middle" />	
					<div className="fix full mt_10">
						<div className="fix full">
							<div className="fix nine_by_ten floatleft">
								<p className="fs_14 lh_22 text_dark_ash">Standard Roll</p>
							</div>
						</div>
						<div className={(this.props.allState.product.is_standard_roll_active != '1') ? "display_none" : "fix full"} >
							<p className="fs_14 lh_22 text_dark_ash font_bold">{(this.props.allState.product.standard_roll_price == null) ? 'Free' : this.props.allState.product.standard_roll_price}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Standard_roll

