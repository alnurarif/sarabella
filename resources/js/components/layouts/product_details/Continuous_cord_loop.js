import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Continuous_cord_loop extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix floatleft twenty_five_percent cursor_pointer position_relative" onClick={(e) => this.props.methods.setLiftSystemType('continuous_cord_loop')}>
				{this.props.allState.selected_lift_system == 'continuous_cord_loop' && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
				<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
					<img src={`${process.env.MIX_APP_URL}/images/feature_lift_system_continuous_cord_loop.jpg`} className="full vertical_align_middle" />	
					<div className="fix full mt_10">
						<div className="fix full">
							<div className="fix nine_by_ten floatleft">
								<p className="fs_14 lh_22 text_dark_ash">Continuous Cord Loop</p>
							</div>
						</div>
						<div className="fix full">
							<p className="fs_14 lh_22 text_dark_ash font_bold">{(this.props.allState.product.ccl_price == null) ? 'Free' : this.props.allState.product.ccl_price}</p>
							{this.props.methods.showCclLiftChainLocation()}
							{this.props.methods.showCclChainType()}	
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Continuous_cord_loop

