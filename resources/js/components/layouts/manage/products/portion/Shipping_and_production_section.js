import React, { Component } from 'react'
import Border from '../../../../Border'
const Shipping_and_production_section = (props) => {
	return (
		<div className="fix full mt_10">
			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Shipping & Production</p>
			<Border />
			{props.allState.shipping_and_productions.map((shipping_and_production,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {shipping_and_production} <i className="fas fa-times cursor_pointer" onClick={() => props.shipping_and_production_section_methods.removeShippingAndProduction(index)}></i></p>
			))}
			<div className="fix full mt_10">
				<input 
				className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="shipping_and_production_text" 
				onChange={(e) => props.changeInput(e)}
				value={props.allState.shipping_and_production_text}/>
				<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.shipping_and_production_section_methods.addShippingAndProduction(e)}>ADD</button>
			</div>
			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Shipping Policy</p>
			<Border />
			<div className="fix full mt_10">
				<textarea 
				className="full h_200 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="shipping_policy" 
				onChange={(e) => props.changeInput(e)}
				defaultValue={props.allState.shipping_policy}/>
				
			</div>
			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Shipping Policy Note</p>
			<Border />
			<div className="fix full mt_10">
				<textarea 
				className="full h_200 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="shipping_policy_note" 
				onChange={(e) => props.changeInput(e)}
				defaultValue={props.allState.shipping_policy_note}/>
				
			</div>

		</div>
	)
}

export default Shipping_and_production_section