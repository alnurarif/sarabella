import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Motorization extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix floatleft twenty_five_percent cursor_pointer position_relative" onClick={(e) => this.props.methods.setLiftSystemType('motorization')}>
				{this.props.allState.selected_lift_system == 'motorization' && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
				<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
					<img src={`${process.env.MIX_APP_URL}/images/feature_lift_system_motorization.jpg`} className="full vertical_align_middle" />	
					<div className="fix full mt_10">
						<div className="fix full">
							<div className="fix nine_by_ten floatleft">
								<p className="fs_14 lh_22 text_dark_ash">Motorization</p>
							</div>
						</div>
						<div className={(this.props.allState.product.is_motorization_active != '1') ? "display_none" : "fix full"} >
							<p className="fs_14 lh_22 text_dark_ash font_bold">{(this.props.allState.product.motorization_price == null) ? 'Free' : this.props.allState.product.motorization_price}</p>
							<div className={(this.props.allState.product.is_motorization_remote_control_active != '1') ? "display_none" : "fix full"}>
								<div className="fix nine_by_ten floatleft">
									<p className="fs_13 lh_22 text_dark_ash">Remote Control</p>
								</div>
							</div>
							<div className={(this.props.allState.product.is_motorization_remote_control_active != '1') ? "display_none" : "fix full"}>
								<select className="border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10" name="motorization_remote_control_price" onChange={(e) => this.props.methods.setMotorizationRemoteControllPrice(e)}>
									<option value="0">No Remote</option>
									<option value={this.props.allState.product.motorization_remote_control_price}>{`$${this.props.allState.product.motorization_remote_control_price}`}</option>
								</select>
							</div>
							<div className={(this.props.allState.product.is_motorization_wifi_active != '1') ? "display_none" : "fix full"}>
								<div className="fix nine_by_ten floatleft">
									<p className="fs_13 lh_22 text_dark_ash">WIFI</p>
								</div>
							</div>
							<div className={(this.props.allState.product.is_motorization_wifi_active != '1') ? "display_none" : "fix full"} >
								<select className="border_box all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10" name="motorization_wifi_price" onChange={(e) => this.props.methods.setMotorizationWifiPrice(e)}>
									<option value="0">No WIFI</option>
									<option value={this.props.allState.product.motorization_wifi_price}>{`$${this.props.allState.product.motorization_wifi_price}`}</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Motorization

