import React, { Component } from 'react'
const Pay_billing_address_form = (props) => {
    return (
		<div className="fix full">
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="First Name" value={props.allState.pb_first_name} name="pb_first_name" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Last Name" value={props.allState.pb_last_name} name="pb_last_name" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Street Address" value={props.allState.pb_street_address} name="pb_street_address" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Apt, Ste, Unit, Bldg (Optional)" value={props.allState.pb_unit} name="pb_unit" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="City" value={props.allState.pb_city} name="pb_city" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Province" value={props.allState.pb_province} name="pb_province" onChange={(e) => props.methods.changeInput(e)}/>
				<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10 ml_10" placeholder="Postal Code" value={props.allState.pb_postal_code} name="pb_postal_code" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Phone Number" value={props.allState.pb_phone_number} name="pb_phone_number" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
		</div>
	)
}
export default Pay_billing_address_form