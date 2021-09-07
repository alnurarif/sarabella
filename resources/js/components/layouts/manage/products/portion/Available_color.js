import React, { Component } from 'react'

const Available_color = (props) => {
	return (
		<div className="fix five_percent floatleft pt_5 pr_5 pb_5 pl_5 border_box cursor_pointer" onClick={() => props.selectColor(props.colorIndex)}>
			<div className="fix ninty_eight_percent div_mid bg_brown2 h_40 bt_1 br_1 bb_1 bl_1 border_solid border_ash border_box">
				<img 
				src={`${process.env.MIX_APP_URL}/uploads/colors/${props.colorInfo.image}`} 
				className="full vertical_align_middle h_full text_dark_ash"
				alt={props.colorInfo.name}/>
			</div>
		</div>
	)
}

export default Available_color