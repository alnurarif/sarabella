import React, { Component } from 'react'

class Selected_color extends Component{
	constructor(props){
		super(props)
	}
	render() {
		let sample_image = (this.props.colorInfo.sample_image === undefined) ? `${process.env.MIX_APP_URL}/images/no_image.jpg` : this.props.colorInfo.sample_image
		return (
			<div className="fix sixteen_percent floatleft mt_5 mb_20">
				<div className="fix ninty_five_percent div_mid">
					<div className="fix full add_color_div border_box">
						<div className="fix ninty_five_percent div_mid bt_1 br_1 bb_1 bl_1 border_box border_solid border_dark_ash h_100 bg_white position_relative">
							<img src={`${process.env.MIX_APP_URL}/uploads/colors/${this.props.colorInfo.image}`} alt={this.props.colorInfo.name} className="h_full full vertical_align_middle"/>
							<p 
							className="t_0 fs_34 font_bold display_none textcenter lh_100 cursor_pointer position_absolute full h_full" 
							onClick={(e) => this.props.removeColor(this.props.selectedColorIndex)}
							style={{'backgroundColor' : '#4a4a4a8a'}}><i className="fas fa-times"></i></p>
						</div>
						<p className="fs_14 lh_24 text_dark_ash textcenter mb_20">{this.props.colorInfo.name}</p>
					</div>
					<div className="fix full textcenter mt_6">
						<input 
	                    id={`sampleColorPhoto_${this.props.selectedColorIndex}`}
	                    type="file"
	                    ref={(ref) => this.upload = ref}
	                    style={{display: 'none'}}
	                    onChange={(e) => this.props.onChangeProductSamplePhoto(e, this.props.selectedColorIndex)}
	                    />
						<button 
						type="button"
						className="mt_5 mb_5 h_30 bg_brown2 text_white font_bold pr_16 pl_16 border_none"
						onClick={()=>{this.upload.click()}}
						>Add Sample</button>
						<div className="fix ninty_five_percent div_mid bt_1 br_1 bb_1 bl_1 border_box border_solid border_dark_ash h_100 bg_white">
							<img src={sample_image} alt={this.props.colorInfo.name} style={{"width" : "100%", "height" : "100%"}}/>
						</div>
						<button type="button" className="mt_5 h_30 bg_brown2 text_white font_bold pr_16 pl_16 border_none">Free Sample</button>
						<div className="fix full mt_5">
							<div className="fix half floatleft">
								<input 
								type="radio" 
								className="h_20 floatleft mr_10" 
								onChange={(e) => this.props.hasFreeSample(this.props.selectedColorIndex,1)}
								checked={this.props.colorInfo.has_free_sample === 1}
								/>
								<p className="fs_14 text_dark_ash floatleft lh_20">Yes</p>
							</div>
							<div className="fix half floatleft">
								<input 
								type="radio" 
								className="h_20 floatleft mr_10" 
								onChange={(e) => this.props.hasFreeSample(this.props.selectedColorIndex,0)}
								checked={this.props.colorInfo.has_free_sample === 0}
								/>
								<p className="fs_14 text_dark_ash floatleft lh_20">No</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Selected_color