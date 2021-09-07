import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
class Secondary_menu extends Component{
	constructor(props){
		super(props)
	}
	state = {
		active_menu : 0,
		active_sub_category_for_menu : {}
	}
	methods = {
		menuActivate : (menuNumber) => {
			this.setState({
				active_menu : menuNumber
			})
		},
		menuDeactivate : () => {
			this.setState({
				active_menu : 0
			})
		},

		changeCategoryInfo : (sub_category) => {
			this.setState({
				active_sub_category_for_menu : sub_category
			})
		}
	}
	// <div className="fix div_mid nine_by_ten">
	// 					<ul className="main_menu div_mid fit_content">
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(1)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block bg_sky_blue text_white" href="sample.html">FREE SAMPLES</a></li>
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(2)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">WINDOW BLINDS & SHADES</a></li>
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(3)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">POPULAR FEATURES</a></li>
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(4)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">MOTORIZED BLINDS</a></li>
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(5)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">SHOP BY NEED/ROOM</a></li>
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(6)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">HELP CENTRE</a></li>
	// 						<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(7)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">SALE</a></li>
	// 					</ul>
	// 				</div>
	render(){
		let {categories, sub_categories} = this.props.allState
		let active_category = categories[this.props.allState.activeCategory]
		console.log(active_category)
		return (
			<>
				<div className="fix full bb_1 border_bottom_solid border_bottom_ash">
					<div className="fix div_mid nine_by_ten">
						<ul className="main_menu div_mid">
							<li className="floatleft" onMouseEnter={() => this.methods.menuActivate(1)} onMouseLeave={() => this.methods.menuDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block bg_sky_blue text_white" href="sample.html">FREE SAMPLES</a></li>
							{
								categories.map((single_category, index) => (
									<li key={index} className="floatleft" onMouseEnter={() => this.props.methods.activeCategory(index)} onMouseLeave={() => this.props.methods.categoryDeactivate()}><a className="lh_30  fs_14 pr_25 pl_25 display_block" href="#">{single_category.name.toUpperCase()}</a></li>
								))
							}
						
						</ul>
					</div>
				</div>
				{(active_category !== undefined &&  active_category.sub_categories.length > 0 && 
					<div className="full position_relative" onMouseEnter={() => this.props.methods.activeCategory(this.props.allState.activeCategory)} onMouseLeave={() => this.props.methods.categoryDeactivate()}>
						<div className="fix full position_absolute bg_white br_1 bb_1 bl_1 border_bottom_ash border_bottom_solid border_right_ash border_right_solid border_left_solid border_left_ash border_box" style={{zIndex : '10', minHeight: '300px'}}>
							<div className="fix ninty_percent div_mid pt_10 pr_10 pb_10 pl_10">
								<div className="fix half floatleft">
									{
										active_category.sub_categories.map((sub_category, index) => (
											<div className="fix half floatleft big_menu_link cursor_pointer pl_10 pr_10 border_box" onMouseEnter={() => this.methods.changeCategoryInfo(sub_category)} key={index}>
												<Link to={`/public/category/${sub_category.url}`}><p className="fs_14 lh_22 text_dark_ash">{sub_category.name}</p></Link>

											</div>
										))
									}
									
								</div>
								<div className="fix half floatleft bg_ash pt_10 pr_10 pb_10 pl_10 border_box">
									<div className="fix half floatleft pl_10 pr_10 border_box">
										<h1 className="fs_20 lh_32 text_black mb_10">{(this.state.active_sub_category_for_menu.name === undefined) ? 'WINDOW BLINDS & SHADES' : this.state.active_sub_category_for_menu.name}</h1>
										{(this.state.active_sub_category_for_menu.description === undefined) ? <p className="fs_14 lh_22 text_black">Browse our selection of custom window blinds & shades – made to your exact specifications. From honeycomb/cellular, roller and sheer shades, to faux wood, mini and vertical blinds, you are sure to find the perfect window covering for every room in your home.</p> : this.state.active_sub_category_for_menu.description}
									</div>
									<div className="fix half floatleft pl_10 pr_10 border_box">
										{(this.state.active_sub_category_for_menu.image === undefined) ? <img src={`${process.env.MIX_APP_URL}/images/window-blinds-and-shades.jpg`} className="full"/> : <img src={`${process.env.MIX_APP_URL}/uploads/sub_categories/${this.state.active_sub_category_for_menu.image}`} className="full"/>}
									</div>
								</div>
							</div>
						</div>
					</div>
					)
				}
			</>
		)
	}
}

export default Secondary_menu