import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Outside_mount_type extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="fix floatleft two_by_ten cursor_pointer position_relative" onClick={(e) => this.props.methods.setMountType('outside')}>
				{this.props.allState.selected_mount_type == 'outside' && <img src={`${process.env.MIX_APP_URL}/images/tick.png`} className="t_0 r_0 position_absolute w_15 h_15"/>}
				<div className="fix ninty_five_percent div_mid pt_10 pr_10 pb_10 pl_10 border_box bt_2 br_2 bb_2 bl_2 border_solid border_ash">
					<img src={`${process.env.MIX_APP_URL}/images/w_cloth_mount_2.jpg`} className="full vertical_align_middle"/>
					<p className="fs_14 textcenter lh_40">Outside</p>
				</div>
			</div>
		)
	}
}
export default Outside_mount_type
