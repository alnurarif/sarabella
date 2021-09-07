import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Shop_by_color_single extends Component{
	constructor(props){
		super(props)
	}
	render(){
		
		return (
			<div className="fix floatleft one_by_10 mt_10 mb_20">
				<div className="fix div_mid ninty_percent h_100 round_5 bg_dark_ash bt_2 br_2 bb_2 bl_2 border_dark_ash border_solid">
					<img src={`./uploads/colors/${this.props.colorImage}`} className="full"/>
				</div>
				<p className="fs_14 font_bold textcenter mt_10">{this.props.colorName}</p>
			</div>
		)
	}
}

export default Shop_by_color_single