import React, { Component } from 'react'
const Shipping_address_form = (props) => {
    return (
		<div className="fix full mt_20">
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="First Name" value={props.allState.sa_first_name} name="sa_first_name" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Last Name" value={props.allState.sa_last_name} name="sa_last_name" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Street Address" value={props.allState.sa_street_address} name="sa_street_address" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Apt, Ste, Unit, Bldg (Optional)" value={props.allState.sa_unit} name="sa_unit" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="City" value={props.allState.sa_city} name="sa_city" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Province" value={props.allState.sa_province} name="sa_province" onChange={(e) => props.methods.changeInput(e)}/>
				<input type="text" className="forty_percent floatleft border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10 ml_10" placeholder="Postal Code" value={props.allState.sa_postal_code} name="sa_postal_code" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
			<div className="fix half floatleft mt_10">
				<input type="text" className="ninty_eight_percent border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash h_30 pr_10 pl_10" placeholder="Phone Number" value={props.allState.sa_phone_number} name="sa_phone_number" onChange={(e) => props.methods.changeInput(e)}/>
			</div>
		</div>
	)
}
export default Shipping_address_form