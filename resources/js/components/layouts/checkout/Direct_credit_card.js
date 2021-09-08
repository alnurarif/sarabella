import React, { Component } from 'react'
const Direct_credit_card = (props) => {
    return (
        <div className="fix full">
            <div className="fix full mt_50 mb_20">
                <p className="fs_16 lh_20 text_dark_ash">PAYMENT INFORMATION</p>    
            </div>
            
            <div className="fix full">
                <div className="fix forty_percent floatleft">
                    <input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10" placeholder="Credit Card Number" name="pb_credit_card_number" value={props.allState.pb_credit_card_number} onChange={(e) => props.methods.changeInput(e)}/>
                </div>
                <div className="fix fifteen_percent floatleft">
                    <select className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10" name="pb_credit_card_month" onChange={(e) => props.methods.changeCreditCardMonth(e)}>
                    {
                        props.createMonthOptions()
                    }
                    </select>
                </div>
                <div className="fix five_percent floatleft">
                    <p className="fs_16 lh_30 text_dark_ash full textcenter">/</p>
                </div>
                <div className="fix fifteen_percent floatleft">
                    <select className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10" name="pb_credit_card_year" onChange={(e) => props.methods.changeCreditCardYear(e)}>
                    {
                        props.createYearOptions()
                    }
                    </select>
                </div>
                <div className="fix fifteen_percent floatleft">
                    <input type="text" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash ninty_five_percent div_mid border_box pl_10 pr_10" placeholder="CCV" name="pb_ccv" value={props.allState.pb_ccv} onChange={(e) => props.methods.changeInput(e)}/>
                </div>
                <div className="fix five_percent floatleft">
                    
                </div>
                <div className="fix fifteen_percent floatleft"></div>
            </div>
        </div>
    )
}
export default Direct_credit_card