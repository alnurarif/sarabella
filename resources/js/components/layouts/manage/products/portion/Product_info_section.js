import React, { Component } from 'react'
import Border from '../../../../Border'
const Product_info_section = (props) => {
	return (
		<div className="fix full mt_10">
			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Description</p>
			<Border />
			<textarea 
			className="full h_150 border_box mt_10 mb_10" 
			name="product_info_description" 
			onChange={(e) => props.changeInput(e)} 
			defaultValue={props.allState.product_info_description}/>
			
			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Features</p>
			<Border />
			{props.allState.product_info_features.map((feature,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {feature} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeFeature(index)}></i></p>
			))}
			<div className="fix full mt_10">
				<input 
				className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="product_info_feature_text" 
				onChange={(e) => props.changeInput(e)}
				value={props.allState.product_info_feature_text}/>
				<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addFeature(e)}>ADD</button>
			</div>

			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Options</p>
			<Border />
			
			{props.allState.product_info_options.map((option,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {option} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeOption(index)}></i></p>
			))}
			<div className="fix full mt_10">
				<input 
				className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="product_info_option_text" 
				onChange={(e) => props.changeInput(e)}
				value={props.allState.product_info_option_text}/>
				<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addOption(e)}>ADD</button>
			</div>

			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Motorizations</p>
			<Border />
			
			{props.allState.product_info_motorizations.map((motorization,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {motorization} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeMotorization(index)}></i></p>
			))}
			<div className="fix full mt_10">
				<input 
				className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="product_info_motorization_text" 
				onChange={(e) => props.changeInput(e)}
				value={props.allState.product_info_motorization_text}/>
				<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addMotorization(e)}>ADD</button>
			</div>

			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Recommendations</p>
			<Border />
			
			{props.allState.product_info_recommendations.map((recommendation,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {recommendation} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeRecommendation(index)}></i></p>
			))}
			<div className="fix full mt_10">
				<input 
				className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
				name="product_info_recommendation_text" 
				onChange={(e) => props.changeInput(e)}
				value={props.allState.product_info_recommendation_text}/>
				<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addRecommendation(e)}>ADD</button>
			</div>


			<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Specification & Installation</p>
			<Border />

			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Width</p>
				{props.allState.specification_widths.map((specification_width,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_width} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationWidth(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_width_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_width_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationWidth(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Height</p>
				{props.allState.specification_heights.map((specification_height,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_height} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationHeight(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_height_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_height_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationHeight(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Min inside-mount depth</p>
				{props.allState.specification_min_inside_mount_depths.map((specification_min_inside_mount_depth,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_min_inside_mount_depth} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationMinInsideMountDepth(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_min_inside_mount_depth_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_min_inside_mount_depth_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationMinInsideMountDepth(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Min flush-mount depth</p>
				{props.allState.specification_min_flush_mount_depths.map((specification_min_flush_mount_depth,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_min_flush_mount_depth} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationMinFlushMountDepth(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_min_flush_mount_depth_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_min_flush_mount_depth_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationMinFlushMountDepth(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Headrail dimensions</p>
				{props.allState.specification_headrail_dimensions.map((specification_headrail_dimension,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_headrail_dimension} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationHeadrailDimension(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_headrail_dimension_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_headrail_dimension_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationHeadrailDimension(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Min outside-mount space</p>
				{props.allState.specification_min_outside_mount_spaces.map((specification_min_outside_mount_space,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_min_outside_mount_space} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationMinOutsideMountSpace(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_min_outside_mount_space_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_min_outside_mount_space_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationMinOutsideMountSpace(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Min flush inside-mount depth</p>
				{props.allState.specification_min_flush_inside_mount_depths.map((specification_min_flush_inside_mount_depth,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_min_flush_inside_mount_depth} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationMinFlushInsideMountDepth(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_min_flush_inside_mount_depth_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_min_flush_inside_mount_depth_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationMinFlushInsideMountDepth(e)}>ADD</button>
				</div>
			</div>
			<div className="fix full pr_10 pl_10 border_box">
				<p className="fs_14 font_bold lh_24 mt_20 mb_10 border_box text_dark_ash">Min outside-mount depth</p>
				{props.allState.specification_min_outside_mount_depths.map((specification_min_outside_mount_depth,index) => (
				<p className="fs_13 lh_20 text_dark_ash" key={index}>- {specification_min_outside_mount_depth} <i className="fas fa-times cursor_pointer" onClick={() => props.production_info_section_methods.removeSpecificationMinOutsideMountDepth(index)}></i></p>
				))}
				<div className="fix full mt_10">
					<input 
					className="w_300 h_30 pl_5 pr_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft"
					name="specification_min_outside_mount_depth_text" 
					onChange={(e) => props.changeInput(e)}
					value={props.allState.specification_min_outside_mount_depth_text}/>
					<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => props.production_info_section_methods.addSpecificationMinOutsideMountDepth(e)}>ADD</button>
				</div>
			</div>
		</div>
	)
}

export default Product_info_section