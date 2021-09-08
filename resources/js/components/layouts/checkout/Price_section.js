import React, { Component } from 'react'
const Price_section = (props) => {
    return (
        <div className="fix floatleft three_by_ten">
			<div className="fix ninty_five_percent div_mid bg_ash border_box pt_10 pr_10 pb_10 pl_10 bb_1 border_bottom_ash border_bottom_solid">
				<p className="fs_14 lh_30 text_dark_ash">ORDER SUMMARY</p>
				<div className="fix full">
					<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Subtotal</p>
					<p className="fs_14 lh_30 text_dark_ash floatright half textright">${props.allState.additional_cart_info.subtotal}</p>
				</div>
				<div className="fix full">
					<p className="fs_14 lh_30 text_red floatleft half textleft">TOTAL OFF</p>
					<p className="fs_14 lh_30 text_red floatright half textright">- ${props.allState.additional_cart_info.total_off}</p>
				</div>
				<div className="fix full">
					<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Shipping</p>
					<p className="fs_14 lh_30 text_dark_ash floatright half textright">FREE</p>
				</div>
				<div className="fix full">
					<p className="fs_14 lh_30 text_dark_ash floatleft half textleft">Warranty</p>
					<p className="fs_14 lh_30 text_dark_ash floatright half textright">{(props.allState.additional_cart_info.total_warrenty == 0) ? 'FREE' : `$${props.allState.additional_cart_info.total_warrenty}`}</p>
				</div>
				<div className="fix full">
					<p className="fs_22 lh_40 text_sky_blue floatleft half textleft font_bold">TOTAL</p>
					<p className="fs_22 lh_40 text_sky_blue floatright half textright font_bold">${props.allState.additional_cart_info.total}</p>
				</div>
			</div>

			<div className="fix ninty_five_percent div_mid bg_ash border_box pt_10 pr_10 pb_10 pl_10 bb_1 border_bottom_ash border_bottom_solid textcenter">
				<button className="border_none bg_sky_blue text_white fs_16 ninty_percent lh_40 font_bold mb_10">Review Order Details</button>
				<button className="border_none bg_sky_blue text_white fs_16 ninty_percent lh_40 font_bold mb_10">Edit Order</button>
			</div>
		</div>
    )
}
export default Price_section
