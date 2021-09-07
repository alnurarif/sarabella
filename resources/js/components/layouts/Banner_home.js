import React, { Component } from 'react'

class Banner_home extends Component{
	render(){
		return (
			<div className="fix full">
				<div className="fix full position_relative">
					<img className="full" src={`${process.env.MIX_APP_URL}/images/banner_img.jpg`} alt="banner"/>
					<div className="fix position_absolute t_150 l_50">
						<h1 className="fs_60 text_blue font_bold">MAKE YOUR<br/>HOME SMARTER</h1>
						<p className="fs_40 font_bold text">Bring changes to your life</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner_home