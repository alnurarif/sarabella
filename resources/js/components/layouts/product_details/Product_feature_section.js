import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Border from '../../Border'
class Product_feature_section extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<>
				<div className="fix full pr_10 pl_10 border_box">
					<div className="fix full bg_sky_blue">
						<div className="fix half floatleft">
							<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">3. Select Features</p>
						</div>
						<div className="fix half floatright">
							<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatright">
								<i className="fas fa-angle-down"></i>
								<i className="fas fa-angle-up"></i>
							</p>
						</div>
					</div>
				</div>

				<div className="fix full pr_10 pl_10 border_box mt_10 mb_20">
					<p className="fs_14 font_bold lh_24 mt_10 border_box text_dark_ash">Lift System</p>
					<Border />
					<div className="fix full mt_10">
						{this.props.methods.showCordlessLift()}
						{this.props.methods.showContinuousCordLoop()}
						{this.props.methods.showMotorization()}
					</div>

					<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Roll Position</p>
					<Border />
					<div className="fix full mt_10">
						{this.props.methods.showStandardRoll()}
						{this.props.methods.showReverseRoll()}
					</div>

					<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Headrails</p>
					<Border />
					<div className="fix full mt_10">
						{this.props.methods.showExposedRoll()}
						{this.props.methods.showCassette()}
					</div>

					<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Bottom Hem Style</p>
					<Border />
					<div className="fix full mt_10">
						{this.props.methods.showPlainHem()}
						{this.props.methods.showWaveHem()}
						{this.props.methods.showScallopHem()}
						{this.props.methods.showRoundedHem()}
					</div>
				</div>
			</>
		)
	}
}
export default Product_feature_section
