import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class Plain_hem extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let product = (this.props.allState.product === undefined) ? {} : this.props.allState.product
		let product_features = (product.product_info_features === undefined) ? [] : JSON.parse(product.product_info_features)
		let product_options = (product.product_info_options === undefined) ? [] : JSON.parse(product.product_info_options)
		let product_motorizations = (product.product_info_motorizations === undefined) ? [] : JSON.parse(product.product_info_motorizations)
		let product_recommendations = (product.product_info_recommendations === undefined) ? [] : JSON.parse(product.product_info_recommendations)
		let product_specification_widths = (product.specification_widths === undefined) ? [] : JSON.parse(product.specification_widths)
		let product_specification_heights = (product.specification_heights === undefined) ? [] : JSON.parse(product.specification_heights)
		let product_specification_min_inside_mount_depths = (product.specification_min_inside_mount_depths === undefined) ? [] : JSON.parse(product.specification_min_inside_mount_depths)
		let product_specification_min_flush_mount_depths = (product.specification_min_flush_mount_depths === undefined) ? [] : JSON.parse(product.specification_min_flush_mount_depths)
		let product_specification_headrail_dimensions = (product.specification_headrail_dimensions === undefined) ? [] : JSON.parse(product.specification_headrail_dimensions)
		let product_specification_min_outside_mount_spaces = (product.specification_min_outside_mount_spaces === undefined) ? [] : JSON.parse(product.specification_min_outside_mount_spaces)
		let product_specification_min_flush_inside_mount_depths = (product.specification_min_flush_inside_mount_depths === undefined) ? [] : JSON.parse(product.specification_min_flush_inside_mount_depths)
		let product_specification_min_outside_mount_depths = (product.specification_min_outside_mount_depths === undefined) ? [] : JSON.parse(product.specification_min_outside_mount_depths)
		return (
			<div className="fix full bt_1 br_1 bb_1 bl_1 border_solid border_ash">
				<h1 className="fs_20 lh_24 font_bold text_dark_ash ml_10 mt_10">Product Information</h1>
				<div className="fix half floatleft pr_10 border_box">
					<div className={(this.props.allState.product.product_info_description !="") ? "fix full block" : "display_none" }>
						<p className="fs_14 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10 font_bold">Description</p>
						<p className="fs_12 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10">{product.product_info_description}</p>
					</div>
					<div className={(product_features.length > 0) ? "fix full block" : "display_none" }>
						<p className="fs_14 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10 font_bold">Features</p>
						{
							product_features.map( (feature, index) => (
								<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {feature}</p>

							) )
						}
					</div>
					<div className={(product_options.length > 0) ? "fix full block" : "display_none" }>
						<p className="fs_14 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10 font_bold">Options</p>
						{
							product_options.map( (option, index) => (
								<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {option}</p>

							) )
						}
					</div>
					<div className={(product_motorizations.length > 0) ? "fix full block" : "display_none" }>
						<p className="fs_14 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10 font_bold">Motorizations</p>
						{
							product_motorizations.map( (motorization, index) => (
								<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {motorization}</p>

							) )
						}
					</div>
				</div>
				<div className="fix half floatleft pr_10 pl_10 border_box">
					<div className={(product_recommendations.length > 0) ? "fix full block" : "display_none" }>
						<p className="fs_14 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10 font_bold">Recommendations & Limitations</p>
						{
							product_recommendations.map( (recommendation, index) => (
								<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {recommendation}</p>

							) )
						}
					</div>
					<p className="fs_14 lh_20 text_dark_ash mt_10 mr_10 mb_10 ml_10 font_bold">Specifications and Installation</p>
					<div className={(product_specification_widths.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Width</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_widths.map( (specification_width, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_width}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_heights.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Height</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_heights.map( (specification_height, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_height}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_min_inside_mount_depths.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Min inside-mount depth</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_min_inside_mount_depths.map( (specification_min_inside_mount_depth, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_min_inside_mount_depth}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_min_flush_mount_depths.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Min flush-mount depth</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_min_flush_mount_depths.map( (specification_min_flush_mount_depth, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_min_flush_mount_depth}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_headrail_dimensions.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Headrail dimensions</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_headrail_dimensions.map( (specification_headrail_dimension, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_headrail_dimension}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_min_outside_mount_spaces.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Min outside-mount space</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_min_outside_mount_spaces.map( (specification_min_outside_mount_space, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_min_outside_mount_space}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_min_flush_inside_mount_depths.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Min flush inside-mount depth</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_min_flush_inside_mount_depths.map( (specification_min_flush_inside_mount_depth, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_min_flush_inside_mount_depth}</p>
								) )
							}	
						</div>
					</div>
					<div className={(product_specification_min_outside_mount_depths.length > 0) ? "fix full block" : "display_none" }>
						<div className="fix half floatleft">
							<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5 font_bold">Min outside-mount depth</p>
						</div>
						<div className="fix half floatleft">
							{
								product_specification_min_outside_mount_depths.map( (specification_min_outside_mount_depth, index) => (
									<p className="fs_12 lh_20 text_dark_ash mr_10 ml_10 mt_5 mb_5" key={index}>- {specification_min_outside_mount_depth}</p>
								) )
							}	
						</div>
					</div>
					
					
					
				</div>
				
			</div>
		)
	}
}
export default Plain_hem

