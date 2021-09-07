import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Disclaimer extends Component{

	render(){
		let support = []
		let our_story = []	
		this.props.allState.sections.map((single_section, index) => {
			if(single_section.name.toLowerCase() == 'SUPPORT'.toLowerCase()){
				single_section.pages.map((single_page, index) => {
					support.push(single_page);	
				})
			}
			if(single_section.name.toLowerCase() == 'OUR STORY'.toLowerCase()){
				single_section.pages.map((single_page, index) => {
					our_story.push(single_page);	
				})
			}

		})
		return (
			<div className="fix full bg_light_sky_blue pt_20 pb_10 bb_1 border_bottom_ash border_bottom_solid">
				<div className="fix div_mid nine_by_ten">
					<div className="fix floatleft forty_percent">
						<div className="fix div_mid full">
							<p className="fs_16 text_dark_ash font_bold">BLINDS AND SHADES</p>
							<div className="fix pt_10 pb_10 full textjustify">
								{this.props.allState.sub_categories.map((single_sub_category, index) => (
									
									<div className="fix floatleft half border_box" key={index}>
										<Link to={`/public/category/${single_sub_category.url}`}><p className="fs_14 lh_22 text_dark_ash">{single_sub_category.name}</p></Link>
									</div>	
								))}
							</div>
						</div>
					</div>
					<div className="fix floatleft sixty_percent">
						<div className="fix div_mid ninty_by_ten">
							<div className="fix floatleft one_by_3">
								<div className="fix div_mid full">
									<p className="fs_16 text_dark_ash font_bold">SUPPORT</p>
									<div className="fix pt_10 pb_10 nine_by_ten textjustify">
										
										{
											support.map((single_page, index) => (
												<div className="fix floatleft full border_box" key={index}>
													<Link to={`/public/c_page/${single_page.link}`}><p className="fs_14 lh_22 text_dark_ash">{single_page.name}</p></Link>
												</div>
											))
										}
									</div>
								</div>
							</div>
							<div className="fix floatleft one_by_3">
								<div className="fix div_mid ninty_by_ten">
									<p className="fs_16 text_dark_ash font_bold">OUR STORY</p>
									<div className="fix pt_10 pb_10 nine_by_ten textjustify">
										
										{
											our_story.map((single_page, index) => (
												<div className="fix floatleft full border_box" key={index}>
													<Link to={`/public/c_page/${single_page.link}`}><p className="fs_14 lh_22 text_dark_ash">{single_page.name}</p></Link>
												</div>
											))
										}
									</div>
								</div>
							</div>
							<div className="fix floatleft one_by_3">
								<div className="fix div_mid ninty_by_ten">
									<p className="fs_16 text_dark_ash font_bold">SOCIAL MEDIA</p>
									<div className="fix pt_10 pb_10 nine_by_ten textjustify">
										<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
											<p className="fs_30 lh_35 text_blue">
												<i className="fab fa-facebook"></i>
											</p>
										</div>
										<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
											<p className="fs_30 lh_35 text_red">
												<i className="fab fa-youtube"></i>
											</p>
										</div>
										<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
											<p className="fs_30 lh_35 text_sky_blue">
												<i className="fab fa-twitter-square"></i>
											</p>
										</div>
										<div className="fix thirteen_percent floatleft round_5 mr_10 textcenter">
											<p className="fs_30 lh_35 text_blue">
												<i className="fab fa-linkedin"></i>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}
export default Disclaimer