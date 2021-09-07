import React, {Component} from 'react'
const Warrenty_option = (props) => {
	let warrenty_price = (props.warrenty_option.warrenty_price == 0 || props.warrenty_option.warrenty_price == "") ? "FREE" : `$${parseFloat(props.warrenty_option.warrenty_price).toFixed(2)}`;
	return (
		<div className="fix full mt_5 mb_5">
			<div className="fix floatleft five_by_ten">
				<p className="fs_14 lh_20 text_dark_ash">{props.warrenty_option.warrenty_details}</p>
			</div>
			<div className="fix floatleft three_by_ten">
				<p className="fs_14 font_bold lh_20">{warrenty_price}</p>
			</div>
			<div className="fix floatleft two_by_ten">
				<p className="fs_14 font_bold lh_20 textright cursor_pointer" onClick={() => props.removeWarrentyOption(props.warrent_index)}><i className="fas fa-trash-alt"></i></p>
			</div>
			
		</div>
	)
}
export default Warrenty_option