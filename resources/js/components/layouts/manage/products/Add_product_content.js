import {checkColorExistsInAvailableColor,storeNewProduct} from '../../../../services/Product_services'
import Shipping_and_production_section from './portion/Shipping_and_production_section'
import Measure_and_install_section from './portion/Measure_and_install_section'
import {makeAnObjectOfLaravelError} from '../../../../functions/Error_functions'
import {getSubCategoryList} from '../../../../services/Sub_category_services'
import {getCategoryList} from '../../../../services/Category_services'
import Product_info_section from './portion/Product_info_section'
import {getColorList} from '../../../../services/Color_services'
import Warrenty_option from './portion/Warrenty_option'
import Available_color from './portion/Available_color'
import Selected_color from './portion/Selected_color'
import {Link,withRouter} from 'react-router-dom'
import React, { Component } from 'react'
import Border from '../../../Border'

class Add_product_content extends Component{
	state = {
		product_name : '',
		product_main_category : '',
		product_sub_category : '',
		unit_price : '',
		selling_price : '',
		offer_price : '',
		offer_price_type : '%',
		delivery_time : '1',
		delivery_charge : '0',
		samples_available_or_not : '0',
		short_description : '',
		short_feature_text : '',
		short_features : [],
		mount_type_inside : '1',
		mount_type_outside : '1',
		width_inch : '12',
		width_8ths : '0',
		height_inch : '12',
		height_8ths : '0',
		minimum_quantity : '0',
		maximum_quantity : '0',
		total_product_number : '0',
		has_features : '0',
		product_info : '',
		measure_and_install : '',
		shipping_and_production : '',
		product_main_category_list : [],
		product_sub_category_list : [],
		product_sub_category_temporary_list : [],
		selected_colors : [],
		product_available_colors : [],
		selected_sample_available_or_not : '0',
		warrenty_options : [],
		warrenty_details : '',
		warrenty_price : '',
		active_down_tab : 'product_info',
		images : [],

		product_info_description : '',
		product_info_feature_text : '',
		product_info_option_text : '',
		product_info_motorization_text : '',
		product_info_recommendation_text : '',
		product_info_features : [],
		product_info_options : [],
		product_info_motorizations : [],
		product_info_recommendations : [],

		specification_width_text : '',
		specification_height_text : '',
		specification_min_inside_mount_depth_text : '',
		specification_min_flush_mount_depth_text : '',
		specification_headrail_dimension_text : '',
		specification_min_outside_mount_space_text : '',
		specification_min_flush_inside_mount_depth_text : '',
		specification_min_outside_mount_depth_text : '',

		specification_widths : [],
		specification_heights : [],
		specification_min_inside_mount_depths : [],
		specification_min_flush_mount_depths : [],
		specification_headrail_dimensions : [],
		specification_min_outside_mount_spaces : [],
		specification_min_flush_inside_mount_depths : [],
		specification_min_outside_mount_depths : [],

		shipping_and_production_text : '',
		shipping_and_productions : [],
		shipping_policy : '',
		shipping_policy_note: '',


		is_cordless_lift_active : '1', 
		is_continuous_loop_active : '1', 
		is_motorization_active : '1', 
		cordless_lift_price : '', 
		ccl_price : '', 
		motorization_price : '', 
		is_ccl_lift_chain_location_active : '1',
		is_ccl_type_of_chain_active : '1', 

		chain_type_name : '',
		chain_type_price : '',

		ccl_chain_type_and_price : [],  
		is_motorization_remote_control_active : '1', 
		motorization_remote_control_price : '', 
		is_motorization_wifi_active : '1', 
		motorization_wifi_price : '',
		is_standard_roll_active : '1',
		is_reverse_roll_active : '1',
		standard_roll_price : '',
		reverse_roll_price : '',
		is_exposed_roll_active : '1',
		is_cassette_roll_active : '1',
		exposed_roll_price : '',
		cassette_roll_price : '',
		is_plain_hem_active : '1',
		is_wave_hem_active : '1',
		is_scallop_hem_active : '1',
		is_rounded_hem_active : '1',
		plain_hem_price : '',
		wave_hem_price : '',
		scallop_price : '',
		rounded_hem_price : '' 
	}
	updateActiveTab = (tabName) => {
		this.setState({
			active_down_tab : tabName
		})
	}
	showActiveTextarea = () => {
		// return (<textarea className="fix full h_250 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box" onChange={(e) => this.changeInput(e)} name={this.state.active_down_tab} defaultValue={this.state[this.state.active_down_tab]}></textarea>)
		if(this.state.active_down_tab == 'product_info'){
			return (
				<textarea className="fix full h_250 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box" onChange={(e) => this.changeInput(e)} name="product_info" defaultValue={this.state.product_info}>{this.state.product_info}</textarea>
			)
		}else if(this.state.active_down_tab == 'measure_and_install'){
			return (
				<textarea className="fix full h_250 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box" onChange={(e) => this.changeInput(e)} name="measure_and_install" defaultValue={this.state.measure_and_install}>{this.state.measure_and_install}</textarea>
			)
		}else if(this.state.active_down_tab == 'shipping_and_production'){
			return (
				<textarea className="fix full h_250 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box" onChange={(e) => this.changeInput(e)} name="shipping_and_production" defaultValue={this.state.shipping_and_production}>{this.state.shipping_and_production}</textarea>
			)
		}
	}

	componentDidMount(){
		this.getCategories(() => {
			this.setState({
				product_main_category : this.state.product_main_category_list[0].id.toString()
			})			
		})
		this.getColors()
		this.getSubCategories(() => {
			let temporary_categories = this.state.product_sub_category_list
			.filter((subCategory) => {
				let categories_array = subCategory.categories.split(',')
				for(let i in categories_array){
					if(categories_array[i] == this.state.product_main_category_list[0].id.toString()){
						return true
					}
				}
			})
			.map((subCategory,index) => {
				return subCategory
			})

			this.setState({
				product_sub_category : (temporary_categories[0]) ? temporary_categories[0].id.toString() : '',
				product_sub_category_temporary_list : temporary_categories,
			})
		})
	}
	removeWarrentyOption = (index) => {
		let warrenty_options = this.state.warrenty_options
		warrenty_options.splice(index, 1)
		this.setState({
			warrenty_options
		})
	}
	removeChainType = (e,index) => {
		let ccl_chain_type_and_price = this.state.ccl_chain_type_and_price
		ccl_chain_type_and_price.splice(index,1)
		this.setState({
			ccl_chain_type_and_price
		})		
	}
	addWarrenty = (e) => {
		e.preventDefault()
		let warrenty_details = this.state.warrenty_details
		let warrenty_price = this.state.warrenty_price
		let warrenty_options = this.state.warrenty_options
		warrenty_options.push({
			warrenty_details,
			warrenty_price
		})
		this.setState({
			warrenty_details : '',
			warrenty_price : '',
			warrenty_options
		})
	}
	changeHasFeature = (e) => {
		if(e.target.checked){
			this.setState({
				has_features : '1'
			})
		}else{
			this.setState({
				has_features : '0'
			})
		}
	}
	changeSamplesAvailableOrnot = (e) => {
		this.setState({
			[e.target.name] : e.target.value,
			selected_sample_available_or_not : e.target.value
		})
	}
	getCategories = async (callback = () => {}) => {
		let response = await getCategoryList()
		this.setState({
			product_main_category_list : response.data
		})
		callback()
	}
	getSubCategories = async (callback = () => {}) => {
		let response = await getSubCategoryList()
		this.setState({
			product_sub_category_list : response.data,
			temporary_sub_categories : response.data
		})
		callback()
	}
	getColors = async (callback = () => {}) => {
		let response = await getColorList()
		this.setState({
			product_available_colors : response.data
		})
		callback()	
	}
	changeCategory = (e) => {
		let temporary_categories = this.state.product_sub_category_list
		.filter((subCategory) => {
			let categories_array = subCategory.categories.split(',')
			for(let i in categories_array){
				if(categories_array[i] == e.target.value){
					return true
				}
			}
		})
		.map((subCategory,index) => {
			return subCategory
		})

		this.setState({
			product_main_category : e.target.value,
			product_sub_category : (temporary_categories[0]) ? temporary_categories[0].id.toString() : '',
			product_sub_category_temporary_list : temporary_categories,

		})

	}
	changeSubCategory = (e) => {
		this.setState({
			product_sub_category : e.target.value,
		})
	}
	changeInput = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	selectColor = (index) => {
		let selectedColor = this.state.product_available_colors[index]
		let selectedColors = this.state.selected_colors
		selectedColor.has_free_sample = 0
		if(selectedColors.length > 0){
			selectedColor = checkColorExistsInAvailableColor(selectedColor, selectedColors) 
			if(selectedColor !== null){
				selectedColor.has_free_sample = 0
				selectedColors.push(selectedColor)	
			}
			
		}else{
			selectedColors.push(selectedColor)
		}
		
		// let selected_colors = this.state.selected_colors
		// this.state.product_available_colors
		// .filter((color,index) => {
		// 	selected_colors
		// })
		// .map((color,index) => {

		// })
		this.setState({
			selected_colors : selectedColors
		})
		
		// <div className="fix two_by_ten floatleft">
		// 				<div className="fix seventy_percent div_mid h_100 cursor_pointer border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash">
		// 					<p className="fs_14 lh_20 mt_20 textcenter text_dark_ash">Add New Color</p>
		// 					<p className="fs_14 lh_20 textcenter text_dark_ash">+</p>
		// 				</div>
		// 			</div>
	}
	removeColor = (index) => {
		let selectedColors = this.state.selected_colors
		selectedColors = selectedColors.filter((color,thisIndex) => {
			return index !== thisIndex
		})
		this.setState({
			selected_colors : selectedColors
		})
	}
	hasFreeSample = (index, value) => {
		let selected_colors = this.state.selected_colors
		selected_colors[index].has_free_sample = value
		this.setState({
			selected_colors
		})
	}
	noColorMessage = () => {

		if(this.state.selected_colors.length == 0){
			return <p className="fs_14 lh_22 text_dark_ash textcenter">No color selected!!!</p>	
		} 
	}
	changeMountType = (e) => {
		if(e.target.checked){
			this.setState({
				[e.target.name] : '1'
			})
		}else{
			this.setState({
				[e.target.name] : '0'
			})
		}
		
	}
	submitForm = async (e) => {

		e.preventDefault()
		const { history } = this.props
				
		let dataToStore = {
			name : this.state.product_name,
			main_category : this.state.product_main_category,
			sub_category : this.state.product_sub_category,
			unit_price : this.state.unit_price,
			selling_price : this.state.selling_price,
			offer_price : this.state.offer_price,
			offer_price_type : this.state.offer_price_type,
			delivery_time : this.state.delivery_time,
			delivery_charge : this.state.delivery_charge,
			sample_available : this.state.samples_available_or_not,
			short_description : this.state.short_description,
			short_features : this.state.short_features,
			mount_type_inside : this.state.mount_type_inside,
			mount_type_outside : this.state.mount_type_outside,
			width_inch : this.state.width_inch,
			width_8ths : this.state.width_8ths,
			height_inch : this.state.height_inch,
			height_8ths : this.state.height_8ths,
			minimum_quantity : this.state.minimum_quantity,
			maximum_quantity : this.state.maximum_quantity,
			total_product_number : this.state.total_product_number,
			has_features : this.state.has_features,
			selected_colors : this.state.selected_colors,
			warrenty_options : this.state.warrenty_options,
			product_info_description : this.state.product_info_description,
			product_info_features : this.state.product_info_features,
			product_info_options : this.state.product_info_options,
			product_info_motorizations : this.state.product_info_motorizations,
			product_info_recommendations : this.state.product_info_recommendations,
			specification_widths : this.state.specification_widths,
			specification_heights : this.state.specification_heights,
			specification_min_inside_mount_depths : this.state.specification_min_inside_mount_depths,
			specification_min_flush_mount_depths : this.state.specification_min_flush_mount_depths,
			specification_headrail_dimensions : this.state.specification_headrail_dimensions,
			specification_min_outside_mount_spaces : this.state.specification_min_outside_mount_spaces,
			specification_min_flush_inside_mount_depths : this.state.specification_min_flush_inside_mount_depths,
			specification_min_outside_mount_depths : this.state.specification_min_outside_mount_depths,
			shipping_and_production : this.state.shipping_and_productions,
			shipping_policy : this.state.shipping_policy,
			shipping_policy_note : this.state.shipping_policy_note,
			images : this.state.images,

			is_cordless_lift_active : this.state.is_cordless_lift_active,
			is_continuous_loop_active : this.state.is_continuous_loop_active,
			is_motorization_active : this.state.is_motorization_active,
			cordless_lift_price : this.state.cordless_lift_price,
			ccl_price : this.state.ccl_price,
			motorization_price : this.state.motorization_price,
			is_ccl_lift_chain_location_active : this.state.is_ccl_lift_chain_location_active,
			is_ccl_type_of_chain_active : this.state.is_ccl_type_of_chain_active,
			ccl_chain_type_and_price : this.state.ccl_chain_type_and_price,
			is_motorization_remote_control_active : this.state.is_motorization_remote_control_active,
			motorization_remote_control_price : this.state.motorization_remote_control_price,
			is_motorization_wifi_active : this.state.is_motorization_wifi_active,
			motorization_wifi_price : this.state.motorization_wifi_price,
			is_standard_roll_active : this.state.is_standard_roll_active,
			is_reverse_roll_active : this.state.is_reverse_roll_active,
			standard_roll_price : this.state.standard_roll_price,
			reverse_roll_price : this.state.reverse_roll_price,
			is_exposed_roll_active : this.state.is_exposed_roll_active,
			is_cassette_roll_active : this.state.is_cassette_roll_active,
			exposed_roll_price : this.state.exposed_roll_price,
			cassette_roll_price : this.state.cassette_roll_price,
			is_plain_hem_active : this.state.is_plain_hem_active,
			is_wave_hem_active : this.state.is_wave_hem_active,
			is_scallop_hem_active : this.state.is_scallop_hem_active,
			is_rounded_hem_active : this.state.is_rounded_hem_active,
			plain_hem_price : this.state.plain_hem_price,
			wave_hem_price : this.state.wave_hem_price,
			scallop_price : this.state.scallop_price,
			rounded_hem_price : this.state.rounded_hem_price
		}
		const response = await storeNewProduct(dataToStore)
		
		if(response.success){
			this.setState({
				name : '',
				image : '',
				is_active : ''
			})
			history.push(`/manage/products/view_products`)
		}else{

			let errorObject = await makeAnObjectOfLaravelError(response);
			this.setState({
				errors : errorObject
			})
		}

		console.log(productObject)		
		// let minimum_quantity = this.state.
		// let maximum_quantity = this.state.
		// let total_product_number = this.state.
		// let has_features = this.state.
		// let product_info = this.state.
		// let measure_and_install = this.state.
		// let shipping_and_production = this.state.
		

		
		
		// product_main_category_list
		// product_sub_category_list
		// product_sub_category_temporary_list
		// selected_colors
		// product_available_colors
		// selected_sample_available_or_not
		// has_feature
		// warrenty_options
		// warrenty_details
		// warrenty_price

	}
	onChangeProductSamplePhoto = (e, index) => {
		e.preventDefault()
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length)
			return;
		this.createProductSampleImage(files[0],index);
	}
	createProductSampleImage = (file,index) => {
		let reader = new FileReader();
		reader.onload = (e) => {
			let selected_colors = this.state.selected_colors
			selected_colors[index].sample_image = e.target.result
			this.setState({
				selected_colors
			});
		};
		reader.readAsDataURL(file);
	}
	onChangeProductPhoto = (e) => {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length)
			return;
		this.createImage(files[0]);
	}
	createImage = (file) => {
		let reader = new FileReader();
		reader.onload = (e) => {
			let images = this.state.images
			images.push(e.target.result)
			this.setState({
				images
			})
		};
		reader.readAsDataURL(file);
	}
	production_info_section_methods = {
		addFeature : (e) => {
			e.preventDefault()
			let features = this.state.product_info_features
			if(this.state.product_info_feature_text != '') features.push(this.state.product_info_feature_text) 
			this.setState({
				product_info_features : features,
				product_info_feature_text : ''
			})
		},
		removeFeature : (index) => {
			let product_info_features = this.state.product_info_features
			product_info_features.splice(index, 1)
			this.setState({
				product_info_features
			})
		},
		addOption : (e) => {
			e.preventDefault()
			let options = this.state.product_info_options
			if(this.state.product_info_option_text != '') options.push(this.state.product_info_option_text) 
			this.setState({
				product_info_options : options,
				product_info_option_text : ''
			})
		},
		removeOption : (index) => {
			let product_info_options = this.state.product_info_options
			product_info_options.splice(index, 1)
			this.setState({
				product_info_options
			})
		},
		addMotorization : (e) => {
			e.preventDefault()
			let motorizations = this.state.product_info_motorizations
			if(this.state.product_info_motorization_text != '') motorizations.push(this.state.product_info_motorization_text) 
			this.setState({
				product_info_motorizations : motorizations,
				product_info_motorization_text : ''
			})
		},
		removeMotorization : (index) => {
			let product_info_motorizations = this.state.product_info_motorizations
			product_info_motorizations.splice(index, 1)
			this.setState({
				product_info_motorizations
			})
		},
		addRecommendation : (e) => {
			e.preventDefault()
			let recommendations = this.state.product_info_recommendations
			if(this.state.product_info_recommendation_text != '') recommendations.push(this.state.product_info_recommendation_text) 
			this.setState({
				product_info_recommendations : recommendations,
				product_info_recommendation_text : ''
			})
		},
		removeRecommendation : (index) => {
			let product_info_recommendations = this.state.product_info_recommendations
			product_info_recommendations.splice(index, 1)
			this.setState({
				product_info_recommendations
			})
		},
		addSpecificationWidth : (e) => {
			e.preventDefault()
			let specification_widths = this.state.specification_widths
			if(this.state.specification_width_text != '') specification_widths.push(this.state.specification_width_text) 
			this.setState({
				specification_widths,
				specification_width_text : ''
			})
		},
		removeSpecificationWidth : (index) => {
			let specification_widths = this.state.specification_widths
			specification_widths.splice(index, 1)
			this.setState({
				specification_widths
			})
		},
		addSpecificationHeight : (e) => {
			e.preventDefault()
			let specification_heights = this.state.specification_heights
			if(this.state.specification_height_text != '') specification_heights.push(this.state.specification_height_text) 
			this.setState({
				specification_heights,
				specification_height_text : ''
			})
		},
		removeSpecificationHeight : (index) => {
			let specification_heights = this.state.specification_heights
			specification_heights.splice(index, 1)
			this.setState({
				specification_heights
			})
		},
		addSpecificationMinInsideMountDepth : (e) => {
			e.preventDefault()
			let specification_min_inside_mount_depths = this.state.specification_min_inside_mount_depths
			if(this.state.specification_min_inside_mount_depth_text != '') specification_min_inside_mount_depths.push(this.state.specification_min_inside_mount_depth_text) 
			this.setState({
				specification_min_inside_mount_depths,
				specification_min_inside_mount_depth_text : ''
			})
		},
		removeSpecificationMinInsideMountDepth : (index) => {
			let specification_min_inside_mount_depths = this.state.specification_min_inside_mount_depths
			specification_min_inside_mount_depths.splice(index, 1)
			this.setState({
				specification_min_inside_mount_depths
			})
		},
		addSpecificationMinFlushMountDepth : (e) => {
			e.preventDefault()
			let specification_min_flush_mount_depths = this.state.specification_min_flush_mount_depths
			if(this.state.specification_min_flush_mount_depth_text != '') specification_min_flush_mount_depths.push(this.state.specification_min_flush_mount_depth_text) 
			this.setState({
				specification_min_flush_mount_depths,
				specification_min_flush_mount_depth_text : ''
			})
		},
		removeSpecificationMinFlushMountDepth : (index) => {
			let specification_min_flush_mount_depths = this.state.specification_min_flush_mount_depths
			specification_min_flush_mount_depths.splice(index, 1)
			this.setState({
				specification_min_flush_mount_depths
			})
		},
		addSpecificationHeadrailDimension : (e) => {
			e.preventDefault()
			let specification_headrail_dimensions = this.state.specification_headrail_dimensions
			if(this.state.specification_headrail_dimension_text != '') specification_headrail_dimensions.push(this.state.specification_headrail_dimension_text) 
			this.setState({
				specification_headrail_dimensions,
				specification_headrail_dimension_text : ''
			})
		},
		removeSpecificationHeadrailDimension : (index) => {
			let specification_headrail_dimensions = this.state.specification_headrail_dimensions
			specification_headrail_dimensions.splice(index, 1)
			this.setState({
				specification_headrail_dimensions
			})
		},
		addSpecificationMinOutsideMountSpace : (e) => {
			e.preventDefault()
			let specification_min_outside_mount_spaces = this.state.specification_min_outside_mount_spaces
			if(this.state.specification_min_outside_mount_space_text != '') specification_min_outside_mount_spaces.push(this.state.specification_min_outside_mount_space_text) 
			this.setState({
				specification_min_outside_mount_spaces,
				specification_min_outside_mount_space_text : ''
			})
		},
		removeSpecificationMinOutsideMountSpace : (index) => {
			let specification_min_outside_mount_spaces = this.state.specification_min_outside_mount_spaces
			specification_min_outside_mount_spaces.splice(index, 1)
			this.setState({
				specification_min_outside_mount_spaces
			})
		},
		addSpecificationMinFlushInsideMountDepth : (e) => {
			e.preventDefault()
			let specification_min_flush_inside_mount_depths = this.state.specification_min_flush_inside_mount_depths
			if(this.state.specification_min_flush_inside_mount_depth_text != '') specification_min_flush_inside_mount_depths.push(this.state.specification_min_flush_inside_mount_depth_text) 
			this.setState({
				specification_min_flush_inside_mount_depths,
				specification_min_flush_inside_mount_depth_text : ''
			})
		},
		removeSpecificationMinFlushInsideMountDepth : (index) => {
			let specification_min_flush_inside_mount_depths = this.state.specification_min_flush_inside_mount_depths
			specification_min_flush_inside_mount_depths.splice(index, 1)
			this.setState({
				specification_min_flush_inside_mount_depths
			})
		},
		addSpecificationMinOutsideMountDepth : (e) => {
			e.preventDefault()
			let specification_min_outside_mount_depths = this.state.specification_min_outside_mount_depths
			if(this.state.specification_min_outside_mount_depth_text != '') specification_min_outside_mount_depths.push(this.state.specification_min_outside_mount_depth_text) 
			this.setState({
				specification_min_outside_mount_depths,
				specification_min_outside_mount_depth_text : ''
			})
		},
		removeSpecificationMinOutsideMountDepth : (index) => {
			let specification_min_outside_mount_depths = this.state.specification_min_outside_mount_depths
			specification_min_outside_mount_depths.splice(index, 1)
			this.setState({
				specification_min_outside_mount_depths
			})
		}
	}
	measure_and_install_section_methods = {

	}
	shipping_and_production_section_methods = {
		addShippingAndProduction : (e) => {
			e.preventDefault()
			let shipping_and_productions = this.state.shipping_and_productions
			if(this.state.shipping_and_production_text != '') shipping_and_productions.push(this.state.shipping_and_production_text) 
			this.setState({
				shipping_and_productions,
				shipping_and_production_text : ''
			})
		},
		removeShippingAndProduction : (index) => {
			let shipping_and_productions = this.state.shipping_and_productions
			shipping_and_productions.splice(index, 1)
			this.setState({
				shipping_and_productions
			})
		}
	}
	product_details_section = () => {
		if(this.state.active_down_tab == 'product_info'){
			return (
				<Product_info_section 
				production_info_section_methods={this.production_info_section_methods}
				changeInput={this.changeInput}
				allState={this.state}
				/>
			)
		}else if(this.state.active_down_tab == 'measure_and_install'){
			return (
				<Measure_and_install_section 
				measure_and_install_section_methods={this.measure_and_install_section_methods}
				changeInput={this.changeInput}
				allState={this.state}
				/>
			)
		}else if(this.state.active_down_tab == 'shipping_and_production'){
			return (
				<Shipping_and_production_section 
				shipping_and_production_section_methods={this.shipping_and_production_section_methods}
				changeInput={this.changeInput}
				allState={this.state}
				/>
			)
		}
	}
	changeCheckBox = (e) => {
		if(e.target.checked){
			this.setState({
				[e.target.name] : '1'
			})
		}else{
			this.setState({
				[e.target.name] : '0'
			})
		}
	}
	addChainTypePrice = (e) => {
		e.preventDefault()
		let newChainType = {
			'chain_type_name' : this.state.chain_type_name,
			'chain_type_price' : this.state.chain_type_price
		}
		let chainTypes = this.state.ccl_chain_type_and_price
		chainTypes.push(newChainType)
		this.setState({
			ccl_chain_type_and_price : chainTypes,
			chain_type_name : '',
			chain_type_price : ''
		})
	}
	addShortFeature = (e) => {
		e.preventDefault()

		let short_feature_text = this.state.short_feature_text
		let short_features = this.state.short_features
		
		short_features.push(short_feature_text)
		
		this.setState({
			short_features,
			short_feature_text : ''
		})
	}
	removeShortFeature = (e,index) => {
		e.preventDefault()
		let short_features = this.state.short_features
		short_features.splice(index, 1)
		this.setState({
			short_features
		})
	}
	
	render(){

		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">Add Product</p>
					<Link to='/manage/products/view_products'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">View Products</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">Add New Product</p>
				</div>
				<Border />
				<form onSubmit={(e) => this.submitForm(e)}>
					<div className="fix full mt_20">
						<div className="fix floatleft three_by_ten">
							<input 
	                        id="productPhoto"
	                        type="file"
	                        ref={(ref) => this.upload = ref}
	                        style={{display: 'none'}}
	                        onChange={(e) => this.onChangeProductPhoto(e)}
	                        />
							<div className="fix ninty_five_percent div_mid pt_10 pr_10 pb_10 pl_10 border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash">
								<img src={(this.state.images.length > 0) ? this.state.images[0] : `${process.env.MIX_APP_URL}/images/no_color_md.jpg`} className="full vertical_align_middle"/>
							</div>
							<div className="fix ninty_five_percent div_mid mt_10">
								<div className="fix floatleft h_40 one_by_ten cursor_pointer">
									<p className="fs_30 lh_40 cursor_pointer" onClick={()=>{this.upload.click()}} ><i className="fas fa-plus-square"></i></p>
								</div>
								<div className="fix floatleft h_40 nine_by_ten">
									<div className="fix w_max_content">
										{this.state.images.map((image,index) => (
											<div className="fix h_full w_40 floatleft pt_5 pr_5 pb_5 pl_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_ash mr_5 cursor_pointer" key={index}>
												<img src={image} className="full vertical_align_middle"/>
											</div>	
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="fix floatleft seven_by_ten">
							<div className="fix floatleft full">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Product Name</p>
								<input type="text" className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="product_name" onChange={(e) => this.changeInput(e)}/>
							</div>
							<div className="fix floatleft half">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Select Main Category</p>
								<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="product_main_category_list" onChange={(e) => this.changeCategory(e)}>
									{
										this.state.product_main_category_list.map((category,index) => (
											<option value={category.id} key={index}>{category.name}</option>
										))
									}
								</select>
							</div>
							<div className="fix floatleft half">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Select Sub Category</p>
								<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="product_sub_category_list" onChange={(e) => this.changeSubCategory(e)}>
									{
										this.state.product_sub_category_temporary_list.map((subCategory,index) => (
											<option value={subCategory.id} key={index}>{subCategory.name}</option>
										))
									}
								</select>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Unit Price</p>
								<input type="number" step="0.01" min="0" name="unit_price" className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" onChange={(e) => this.changeInput(e)}/>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Offer Price</p>
								<input type="number" step="0.01" min="0" name="offer_price" className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" onChange={(e) => this.changeInput(e)}/>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Offer Price Type</p>
								<select 
								className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10 ninty_eight_percent" 
								name="offer_price_type" 
								onChange={(e) => this.changeInput(e)}>
									<option value="%">%</option>
									<option value="CAD">CAD</option>
								</select>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Selling Price</p>
								<p className="fs_14 lh_30 text_dark_ash font_bold">{(this.state.offer_price_type == "%") ? parseFloat(this.state.unit_price - ((this.state.unit_price * this.state.offer_price) / 100)).toFixed(2) : (this.state.unit_price - this.state.offer_price)}</p>
								<input value={(this.state.offer_price_type == "%") ? parseFloat(this.state.unit_price - ((this.state.unit_price * this.state.offer_price) / 100)).toFixed(2) : (this.state.unit_price - this.state.offer_price)} type="number" name="selling_price" className="display_none all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" onChange={(e) => this.changeInput(e)}/>
							</div>
							<div className="fix floatleft half">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Delivery Time (Day/Days)</p>
								<select 
								className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 full mr_10 ninty_eight_percent" 
								name="delivery_time" 
								onChange={(e) => this.changeInput(e)}>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
									<option value="13">13</option>
									<option value="14">14</option>
									<option value="15">15</option>
									<option value="16">16</option>
									<option value="17">17</option>
									<option value="18">18</option>
									<option value="19">19</option>
									<option value="20">20</option>
									<option value="21">21</option>
									<option value="22">22</option>
									<option value="23">23</option>
									<option value="24">24</option>
									<option value="25">25</option>
									<option value="26">26</option>
									<option value="27">27</option>
									<option value="28">28</option>
									<option value="29">29</option>
									<option value="30">30</option>
									<option value="31">31</option>
									<option value="32">32</option>
									<option value="33">33</option>
									<option value="34">34</option>
									<option value="35">35</option>
									<option value="36">36</option>
									<option value="37">37</option>
									<option value="38">38</option>
									<option value="39">39</option>
									<option value="40">40</option>
									<option value="41">41</option>
									<option value="42">42</option>
									<option value="43">43</option>
									<option value="44">44</option>
									<option value="45">45</option>
									<option value="46">46</option>
									<option value="47">47</option>
									<option value="48">48</option>
									<option value="49">49</option>
									<option value="50">50</option>
									<option value="51">51</option>
									<option value="52">52</option>
									<option value="53">53</option>
									<option value="54">54</option>
									<option value="55">55</option>
									<option value="56">56</option>
									<option value="57">57</option>
									<option value="58">58</option>
									<option value="59">59</option>
									<option value="60">60</option>
									<option value="61">61</option>
									<option value="62">62</option>
									<option value="63">63</option>
									<option value="64">64</option>
									<option value="65">65</option>
									<option value="66">66</option>
									<option value="67">67</option>
									<option value="68">68</option>
									<option value="69">69</option>
									<option value="70">70</option>
								</select>
							</div>
							<div className="fix floatleft half">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Delivery Charge</p>
								<input type="number" step="0.01" min="0" name="delivery_charge" className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" value={this.delivery_charge} onChange={(e) => this.changeInput(e)}/>
							</div>
							<div className="fix floatleft full">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Samples Available or Not?</p>
								<div className="fix floatleft full mt_10">
									<div className="fix floatleft three_by_ten floatleft">
										<input 
										className="floatleft h_20 lh_22" 
										type="radio" 
										name="samples_available_or_not"
										value="1" 
										checked={this.state.selected_sample_available_or_not === "1"}
										onChange={(e) => this.changeSamplesAvailableOrnot(e)}/>
										<p className="fs_14 lh_22 text_dark_ash floatleft ml_10">Yes</p>
									</div>
									<div className="fix floatleft three_by_ten floatleft">
										<input 
										className="floatleft h_20 lh_22" 
										type="radio" 
										name="samples_available_or_not"
										value="0" 
										checked={this.state.selected_sample_available_or_not === "0"}
										onChange={(e) => this.changeSamplesAvailableOrnot(e)}/>
										<p className="fs_14 lh_22 text_dark_ash floatleft ml_10">No</p>
									</div>
								</div>
							</div>

							<div className="fix floatleft full">
								<p className="fs_14 lh_22 text_dark_ash font_bold mt_16">Short Features</p>
								{this.state.short_features.map((short_feature,index) => (
								<p className="fs_13 lh_20 text_dark_ash" key={index}>- {short_feature} <i className="fas fa-times cursor_pointer" onClick={(e) => this.removeShortFeature(e,index)}></i></p>
								))}
								<input type="text" className="floatleft all_border_solid_ash_1 text_field_padding_lr_5 h_30 fifty_percent" name="short_feature_text" value={this.state.short_feature_text} onChange={(e) => this.changeInput(e)}/>
								<button type="button" className="floatleft bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => this.addShortFeature(e)}>Add</button>
							</div>
						</div>
					</div>
					<div className="fix full border_box mt_10">
						<div className="fix full bg_brown2">
							<div className="fix full floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">1. Select Color</p>
							</div>
						</div>
					</div>
					<div className="fix full mt_20">
						<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Available Colors</p>
						<Border />
						<div className="fix full">
							{
								this.state.product_available_colors.map((color,index) => (
									<Available_color key={index} selectColor={this.selectColor} hasFreeSample={this.hasFreeSample} colorInfo={color} colorIndex={index}/>
								))
							}
							
							
						</div>
						<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Selected Colors</p>
						<Border />
						<div className="fix full floatleft mt_10">
							
							{
								this.state.selected_colors.map((color,index) => (
									<Selected_color 
									key={index} 
									colorInfo={color} 
									selectedColorIndex={index} 
									removeColor={this.removeColor} 
									onChangeProductSamplePhoto = {this.onChangeProductSamplePhoto}
									hasFreeSample={this.hasFreeSample}/>
								))
							}
							{this.noColorMessage()}
							
						</div>
						
					</div>
					<div className="fix full border_box mt_10">
						<div className="fix full bg_brown2">
							<div className="fix full floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">2. Select Size, Mount Type & Quantity</p>
							</div>
						</div>
					</div>
					<div className="fix full">
						<p className="fs_14 font_bold lh_24 mt_10 border_box text_dark_ash">Mount Type</p>
						<Border />
						<div className="fix full mt_10">
							<div className="fix sixteen_percent floatleft">
								<div className="fix ninty_five_percent div_mid bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box textcenter pt_5 pr_5 pb_5 pl_5">
									<img src={`${process.env.MIX_APP_URL}/images/w_cloth_mount_1.jpg`} className="full vertical_align_middle h_full text_dark_ash"/>
									<p className="fs_14 textcenter mt_10 lh_22 text_dark_ash">Inside</p>
								</div>
								<div className="fix ninty_five_percent div_mid textcenter mt_10">
									<input 
									type="checkbox" 
									name="mount_type_inside" 
									checked={this.state.mount_type_inside=='1'} 
									onChange={(e) => this.changeMountType(e)}/>
								</div>
							</div>
							<div className="fix sixteen_percent floatleft">
								<div className="fix ninty_five_percent div_mid bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash border_box textcenter pt_5 pr_5 pb_5 pl_5">
									<img src={`${process.env.MIX_APP_URL}/images/w_cloth_mount_2.jpg`} className="full vertical_align_middle h_full text_dark_ash"/>
									<p className="fs_14 textcenter mt_10 lh_22 text_dark_ash">Outside</p>
								</div>
								<div className="fix ninty_five_percent div_mid textcenter mt_10">
									<input 
									type="checkbox"
									name="mount_type_outside" 
									checked={this.state.mount_type_outside=='1'} 
									onChange={(e) => this.changeMountType(e)}/>
								</div>
							</div>
						</div>
						<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Enter Measurements</p>
						<Border />
						<p className="fs_12 mt_5 lh_20 text_sky_blue"><span className="fs_14 font_bold text_white pl_10 pr_10 bg_brown2">TIP</span> Measure and Install</p>
						<div className="fix full">
							<div className="fix half floatleft">
								<div className="fix w_200 floatleft h_200 pt_10 pr_10 pb_10 pl_10 border_box">
									<img src={`${process.env.MIX_APP_URL}/images/default_width.jpg`} className="full vertical_align_middle"/>
								</div>
								<div className="fix sixty_percent floatleft pt_10 border_box">
									<p className="fs_14 lh_20 text_dark_ash">Width (inches)</p>
									<div className="fix full mt_5">
										<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 w_100 mr_10" name="width_inch" onChange={(e) => this.changeInput(e)}>
											<option value="12">12</option>
											<option value="13">13</option>
											<option value="14">14</option>
											<option value="15">15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
											<option value="20">20</option>
											<option value="21">21</option>
											<option value="22">22</option>
											<option value="23">23</option>
											<option value="24">24</option>
											<option value="25">25</option>
											<option value="26">26</option>
											<option value="27">27</option>
											<option value="28">28</option>
											<option value="29">29</option>
											<option value="30">30</option>
											<option value="31">31</option>
											<option value="32">32</option>
											<option value="33">33</option>
											<option value="34">34</option>
											<option value="35">35</option>
											<option value="36">36</option>
											<option value="37">37</option>
											<option value="38">38</option>
											<option value="39">39</option>
											<option value="40">40</option>
											<option value="41">41</option>
											<option value="42">42</option>
											<option value="43">43</option>
											<option value="44">44</option>
											<option value="45">45</option>
											<option value="46">46</option>
											<option value="47">47</option>
											<option value="48">48</option>
											<option value="49">49</option>
											<option value="50">50</option>
											<option value="51">51</option>
											<option value="52">52</option>
											<option value="53">53</option>
											<option value="54">54</option>
											<option value="55">55</option>
											<option value="56">56</option>
											<option value="57">57</option>
											<option value="58">58</option>
											<option value="59">59</option>
											<option value="60">60</option>
											<option value="61">61</option>
											<option value="62">62</option>
											<option value="63">63</option>
											<option value="64">64</option>
											<option value="65">65</option>
											<option value="66">66</option>
											<option value="67">67</option>
											<option value="68">68</option>
											<option value="69">69</option>
											<option value="70">70</option>
											<option value="71">71</option>
											<option value="72">72</option>
											<option value="73">73</option>
											<option value="74">74</option>
											<option value="75">75</option>
											<option value="76">76</option>
											<option value="77">77</option>
											<option value="78">78</option>
											<option value="79">79</option>
											<option value="80">80</option>
											<option value="81">81</option>
											<option value="82">82</option>
											<option value="83">83</option>
											<option value="84">84</option>
											<option value="85">85</option>
											<option value="86">86</option>
											<option value="87">87</option>
											<option value="88">88</option>
											<option value="89">89</option>
											<option value="90">90</option>
											<option value="91">91</option>
											<option value="92">92</option>
											<option value="93">93</option>
											<option value="94">94</option>
											<option value="95">95</option>
											<option value="96">96</option>
											<option value="97">97</option>
											<option value="98">98</option>
											<option value="99">99</option>
											<option value="100">100</option>
											<option value="101">101</option>
											<option value="102">102</option>
											<option value="103">103</option>
											<option value="104">104</option>
											<option value="105">105</option>
											<option value="106">106</option>
											<option value="107">107</option>
											<option value="108">108</option>
											<option value="109">109</option>
											<option value="110">110</option>
											<option value="111">111</option>
											<option value="112">112</option>
											<option value="113">113</option>
											<option value="114">114</option>
											<option value="115">115</option>
											<option value="116">116</option>
											<option value="117">117</option>
											<option value="118">118</option>
											<option value="119">119</option>
											<option value="120">120</option>
											<option value="121">121</option>
											<option value="122">122</option>
											<option value="123">123</option>
											<option value="124">124</option>
											<option value="125">125</option>
											<option value="126">126</option>
											<option value="127">127</option>
											<option value="128">128</option>
											<option value="129">129</option>
											<option value="130">130</option>
											<option value="131">131</option>
											<option value="132">132</option>
											<option value="133">133</option>
											<option value="134">134</option>
											<option value="135">135</option>
											<option value="136">136</option>
											<option value="137">137</option>
											<option value="138">138</option>
											<option value="139">139</option>
											<option value="140">140</option>
											<option value="141">141</option>
											<option value="142">142</option>
											<option value="143">143</option>
											<option value="144">144</option>
											<option value="145">145</option>
											<option value="146">146</option>
											<option value="147">147</option>
											<option value="148">148</option>
											<option value="149">149</option>
											<option value="150">150</option>
											<option value="151">151</option>
											<option value="152">152</option>
											<option value="153">153</option>
											<option value="154">154</option>
											<option value="155">155</option>
											<option value="156">156</option>
											<option value="157">157</option>
											<option value="158">158</option>
											<option value="159">159</option>
											<option value="160">160</option>
											<option value="161">161</option>
											<option value="162">162</option>
											<option value="163">163</option>
											<option value="164">164</option>
											<option value="165">165</option>
											<option value="166">166</option>
											<option value="167">167</option>
											<option value="168">168</option>
											<option value="169">169</option>
											<option value="170">170</option>
											<option value="171">171</option>
											<option value="172">172</option>
											<option value="173">173</option>
											<option value="174">174</option>
											<option value="175">175</option>
											<option value="176">176</option>
											<option value="177">177</option>
											<option value="178">178</option>
											<option value="179">179</option>
											<option value="180">180</option>
											<option value="181">181</option>
											<option value="182">182</option>
											<option value="183">183</option>
											<option value="184">184</option>
											<option value="185">185</option>
											<option value="186">186</option>
											<option value="187">187</option>
											<option value="188">188</option>
											<option value="189">189</option>
											<option value="190">190</option>
											<option value="191">191</option>
											<option value="192">192</option>
										</select>
										<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 w_100 mr_10" name="width_8ths" onChange={(e) => this.changeInput(e)}>
											<option value="0">0</option>
											<option value="0.125">1/8</option>
											<option value="0.25">1/4</option>
											<option value="0.375">3/8</option>
											<option value="0.5">1/2</option>
											<option value="0.625">5/8</option>
											<option value="0.75">3/4</option>
											<option value="0.875">7/8</option>
										</select>
									</div>
								</div>
							</div>
							<div className="fix half floatleft">
								<div className="fix w_200 floatleft h_200 pt_10 pr_10 pb_10 pl_10 border_box">
									<img src={`${process.env.MIX_APP_URL}/images/default_height.jpg`} className="full vertical_align_middle"/>
								</div>
								<div className="fix sixty_percent floatleft pt_10 border_box">
									<p className="fs_14 lh_20 text_dark_ash">Height (inches)</p>
									<div className="fix full mt_5">
										<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 w_100 mr_10" name="height_inch" onChange={(e) => this.changeInput(e)}>
											<option value="12">12</option>
											<option value="13">13</option>
											<option value="14">14</option>
											<option value="15">15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
											<option value="20">20</option>
											<option value="21">21</option>
											<option value="22">22</option>
											<option value="23">23</option>
											<option value="24">24</option>
											<option value="25">25</option>
											<option value="26">26</option>
											<option value="27">27</option>
											<option value="28">28</option>
											<option value="29">29</option>
											<option value="30">30</option>
											<option value="31">31</option>
											<option value="32">32</option>
											<option value="33">33</option>
											<option value="34">34</option>
											<option value="35">35</option>
											<option value="36">36</option>
											<option value="37">37</option>
											<option value="38">38</option>
											<option value="39">39</option>
											<option value="40">40</option>
											<option value="41">41</option>
											<option value="42">42</option>
											<option value="43">43</option>
											<option value="44">44</option>
											<option value="45">45</option>
											<option value="46">46</option>
											<option value="47">47</option>
											<option value="48">48</option>
											<option value="49">49</option>
											<option value="50">50</option>
											<option value="51">51</option>
											<option value="52">52</option>
											<option value="53">53</option>
											<option value="54">54</option>
											<option value="55">55</option>
											<option value="56">56</option>
											<option value="57">57</option>
											<option value="58">58</option>
											<option value="59">59</option>
											<option value="60">60</option>
											<option value="61">61</option>
											<option value="62">62</option>
											<option value="63">63</option>
											<option value="64">64</option>
											<option value="65">65</option>
											<option value="66">66</option>
											<option value="67">67</option>
											<option value="68">68</option>
											<option value="69">69</option>
											<option value="70">70</option>
											<option value="71">71</option>
											<option value="72">72</option>
											<option value="73">73</option>
											<option value="74">74</option>
											<option value="75">75</option>
											<option value="76">76</option>
											<option value="77">77</option>
											<option value="78">78</option>
											<option value="79">79</option>
											<option value="80">80</option>
											<option value="81">81</option>
											<option value="82">82</option>
											<option value="83">83</option>
											<option value="84">84</option>
											<option value="85">85</option>
											<option value="86">86</option>
											<option value="87">87</option>
											<option value="88">88</option>
											<option value="89">89</option>
											<option value="90">90</option>
											<option value="91">91</option>
											<option value="92">92</option>
											<option value="93">93</option>
											<option value="94">94</option>
											<option value="95">95</option>
											<option value="96">96</option>
											<option value="97">97</option>
											<option value="98">98</option>
											<option value="99">99</option>
											<option value="100">100</option>
											<option value="101">101</option>
											<option value="102">102</option>
											<option value="103">103</option>
											<option value="104">104</option>
											<option value="105">105</option>
											<option value="106">106</option>
											<option value="107">107</option>
											<option value="108">108</option>
											<option value="109">109</option>
											<option value="110">110</option>
											<option value="111">111</option>
											<option value="112">112</option>
											<option value="113">113</option>
											<option value="114">114</option>
											<option value="115">115</option>
											<option value="116">116</option>
											<option value="117">117</option>
											<option value="118">118</option>
											<option value="119">119</option>
											<option value="120">120</option>
											<option value="121">121</option>
											<option value="122">122</option>
											<option value="123">123</option>
											<option value="124">124</option>
											<option value="125">125</option>
											<option value="126">126</option>
											<option value="127">127</option>
											<option value="128">128</option>
											<option value="129">129</option>
											<option value="130">130</option>
											<option value="131">131</option>
											<option value="132">132</option>
											<option value="133">133</option>
											<option value="134">134</option>
											<option value="135">135</option>
											<option value="136">136</option>
											<option value="137">137</option>
											<option value="138">138</option>
											<option value="139">139</option>
											<option value="140">140</option>
											<option value="141">141</option>
											<option value="142">142</option>
											<option value="143">143</option>
											<option value="144">144</option>
											<option value="145">145</option>
											<option value="146">146</option>
											<option value="147">147</option>
											<option value="148">148</option>
											<option value="149">149</option>
											<option value="150">150</option>
											<option value="151">151</option>
											<option value="152">152</option>
											<option value="153">153</option>
											<option value="154">154</option>
											<option value="155">155</option>
											<option value="156">156</option>
											<option value="157">157</option>
											<option value="158">158</option>
											<option value="159">159</option>
											<option value="160">160</option>
											<option value="161">161</option>
											<option value="162">162</option>
											<option value="163">163</option>
											<option value="164">164</option>
											<option value="165">165</option>
											<option value="166">166</option>
											<option value="167">167</option>
											<option value="168">168</option>
											<option value="169">169</option>
											<option value="170">170</option>
											<option value="171">171</option>
											<option value="172">172</option>
											<option value="173">173</option>
											<option value="174">174</option>
											<option value="175">175</option>
											<option value="176">176</option>
											<option value="177">177</option>
											<option value="178">178</option>
											<option value="179">179</option>
											<option value="180">180</option>
											<option value="181">181</option>
											<option value="182">182</option>
											<option value="183">183</option>
											<option value="184">184</option>
											<option value="185">185</option>
											<option value="186">186</option>
											<option value="187">187</option>
											<option value="188">188</option>
											<option value="189">189</option>
											<option value="190">190</option>
											<option value="191">191</option>
											<option value="192">192</option>
										</select>
										<select className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 w_100 mr_10" name="height_8ths" onChange={(e) => this.changeInput(e)}>
											<option value="0">0</option>
											<option value="0.125">1/8</option>
											<option value="0.25">1/4</option>
											<option value="0.375">3/8</option>
											<option value="0.5">1/2</option>
											<option value="0.625">5/8</option>
											<option value="0.75">3/4</option>
											<option value="0.875">7/8</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						
						<div className="fix full mt_20">
							<div className="fix half floatleft">
								<p className="fs_14 lh_20 text_dark_ash">Quantity</p>
								<div className="fix full mt_5">
									<input type="number" step="0.01" min="0" className="w_160 h_30 pr_5 pl_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft mr_10" placeholder="Minimum Quantity" name="minimum_quantity" onChange={(e) => this.changeInput(e)}/>
									<input type="number" step="0.01" min="0" className="w_160 h_30 pr_5 pl_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft mr_10" placeholder="Maximum Quantity" name="maximum_quantity" onChange={(e) => this.changeInput(e)}/>
								</div>							
							</div>
							<div className="fix half floatleft">
								<p className="fs_14 lh_20 text_dark_ash">Total Products</p>
								<div className="fix full mt_5">
									<input type="number" step="0.01" min="0" className="w_160 h_30 pr_5 pl_5 border_box bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash floatleft mr_10" placeholder="Number of Product" name="total_product_number" onChange={(e) => this.changeInput(e)}/>
								</div>
							</div>
						</div>

					</div>
					
					<div className="fix full border_box mt_10">
						<div className="fix full bg_brown2">
							<div className="fix half floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">4. Select Warrenty Options</p>
							</div>
							<div className="fix half floatright pr_10 border_box">
								<input type="checkbox" name="has_features" onChange={(e) => this.changeHasFeature(e)} className="h_20 floatright"/>
							</div>
						</div>
					</div>
					<div className="fix full pr_10 pl_10 border_box mt_10 mb_20">
						<p className="fs_14 font_bold lh_24 mt_10 border_box text_dark_ash">Lift System</p>
						<Border />
						<div className="fix full mt_10">
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_lift_system_cordless.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_cordless_lift_active" checked={this.state.is_cordless_lift_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Cordless</p>
											</div>
										</div>
										<div className={(this.state.is_cordless_lift_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number"
											step="0.01" 
											min="0"
											name="cordless_lift_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											onChange={(e) => this.changeInput(e)}
											value={this.state.cordless_lift_price}
											placeholder="Price"
											/>										
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_lift_system_continuous_cord_loop.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_continuous_loop_active" checked={this.state.is_continuous_loop_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Continuous Cord Loop</p>
											</div>
										</div>
										<div className={(this.state.is_continuous_loop_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number"
											step="0.01"
											min="0"
											name="ccl_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											onChange={(e) => this.changeInput(e)}
											placeholder="Price"
											value={this.state.ccl_price}
											/>
											<div className="fix full mt_10">
												<div className="fix one_by_ten floatleft">
													<input className="h_22" type="checkbox" name="is_ccl_lift_chain_location_active" checked={this.state.is_ccl_lift_chain_location_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
												</div>
												<div className="fix nine_by_ten floatleft">
													<p className="fs_13 lh_22 text_dark_ash">Lift Chain Location</p>
												</div>
											</div>
											<div className="fix full mt_10">
												<div className="fix one_by_ten floatleft">
													<input className="h_22" type="checkbox" name="is_ccl_type_of_chain_active" checked={this.state.is_ccl_type_of_chain_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
												</div>
												<div className="fix nine_by_ten floatleft">
													<p className="fs_13 lh_22 text_dark_ash">Chain Type</p>
												</div>
											</div>
											<div className={(this.state.is_ccl_type_of_chain_active != '1') ? "display_none" : "fix full mt_10"}>
												<div className="fix full">
													{this.state.ccl_chain_type_and_price.map((singleChainType,index) => (
														<p className="fs_13 lh_22 text_dark_ash" key={index}>- {singleChainType.chain_type_name} (${singleChainType.chain_type_price})  <i className="fas fa-times cursor_pointer" onClick={(e) => this.removeChainType(e,index)}></i></p>
													))}
												</div>
												<div className="fix four_by_ten floatleft">
													<input 
													type="text" 
													name="chain_type_name" 
													className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
													value={this.state.chain_type_name} 
													onChange={(e) => this.changeInput(e)}
													placeholder="Name"/>		
												</div>
												<div className="fix four_by_ten floatleft">
													<input 
													type="number" 
													step="0.01"
													min="0"
													name="chain_type_price" 
													className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
													value={this.state.chain_type_price} 
													onChange={(e) => this.changeInput(e)}
													placeholder="Price"/>
												</div>
												<div className="fix two_by_ten floatleft">
													<button className="floatright bg_brown2 fs_12 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => this.addChainTypePrice(e)}>ADD</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_lift_system_motorization.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_motorization_active" checked={this.state.is_motorization_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Motorization</p>
											</div>
										</div>
										<div className={(this.state.is_motorization_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="motorization_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.motorization_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
											<div className="fix full mt_10">
												<div className="fix one_by_ten floatleft">
													<input className="h_22" type="checkbox" name="is_motorization_remote_control_active" checked={this.state.is_motorization_remote_control_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
												</div>
												<div className="fix nine_by_ten floatleft">
													<p className="fs_13 lh_22 text_dark_ash">Remote Control</p>
												</div>
											</div>
											<div className={(this.state.is_motorization_remote_control_active != '1') ? "display_none" : "fix full"} >
												<input 
												type="number"
												step="0.01" 
												min="0"

												name="motorization_remote_control_price" 
												className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
												value={this.state.motorization_remote_control_price}
												placeholder="Price"
												onChange={(e) => this.changeInput(e)}/>
											</div>
											<div className="fix full mt_10">
												<div className="fix one_by_ten floatleft">
													<input className="h_22" type="checkbox" name="is_motorization_wifi_active" checked={this.state.is_motorization_wifi_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
												</div>
												<div className="fix nine_by_ten floatleft">
													<p className="fs_13 lh_22 text_dark_ash">WIFI</p>
												</div>
											</div>
											<div className={(this.state.is_motorization_wifi_active != '1') ? "display_none" : "fix full"} >
												<input 
												type="number" 
												step="0.01"
												min="0"
												name="motorization_wifi_price" 
												className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
												value={this.state.motorization_wifi_price}
												placeholder="Price"
												onChange={(e) => this.changeInput(e)}/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Roll Position</p>
						<Border />
						<div className="fix full mt_10">
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_roll_position_standard_roll.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_standard_roll_active" checked={this.state.is_standard_roll_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Standard Roll</p>
											</div>
										</div>
										<div className={(this.state.is_standard_roll_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="standard_roll_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.standard_roll_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_roll_position_reverse_roll.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_reverse_roll_active" checked={this.state.is_reverse_roll_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Reverse Roll</p>
											</div>
										</div>
										<div className={(this.state.is_reverse_roll_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="reverse_roll_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.reverse_roll_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Headrails</p>
						<Border />
						<div className="fix full mt_10">
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_headrails_exposed_roll.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_exposed_roll_active" checked={this.state.is_exposed_roll_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Exposed Roll</p>
											</div>
										</div>
										<div className={(this.state.is_exposed_roll_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="exposed_roll_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.exposed_roll_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_headrails_cassete.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_cassette_roll_active" checked={this.state.is_cassette_roll_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Cassette</p>
											</div>
										</div>
										<div className={(this.state.is_cassette_roll_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="cassette_roll_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.cassette_roll_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<p className="fs_14 font_bold lh_24 mt_20 border_box text_dark_ash">Bottom Hem Style</p>
						<Border />
						<div className="fix full mt_10">
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_bottom_hem_style_plain_hem.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_plain_hem_active" checked={this.state.is_plain_hem_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Plain Hem</p>
											</div>
										</div>
										<div className={(this.state.is_plain_hem_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="plain_hem_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.plain_hem_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_bottom_hem_style_wave.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_wave_hem_active" checked={this.state.is_wave_hem_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Wave</p>
											</div>
										</div>
										<div className={(this.state.is_wave_hem_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="wave_hem_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.wave_hem_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_bottom_hem_style_scallop.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_scallop_hem_active" checked={this.state.is_scallop_hem_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Scallop</p>
											</div>
										</div>
										<div className={(this.state.is_scallop_hem_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="scallop_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.scallop_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
							<div className="fix floatleft twenty_five_percent">
								<div className="fix ninty_five_percent div_mid border_box pt_10 pr_10 pb_10 pl_10 bt_2 br_2 bb_2 bl_2 border_solid border_dark_ash">
									<img src={`${process.env.MIX_APP_URL}/images/feature_bottom_hem_style_rounded.jpg`} className="full vertical_align_middle" />	
									<div className="fix full mt_10">
										<div className="fix full">
											<div className="fix one_by_ten floatleft">
												<input className="h_22" type="checkbox" name="is_rounded_hem_active" checked={this.state.is_rounded_hem_active == '1'} onChange={(e) => this.changeCheckBox(e)} className="h_20"/>
											</div>
											<div className="fix nine_by_ten floatleft">
												<p className="fs_14 lh_22 text_dark_ash">Rounded</p>
											</div>
										</div>
										<div className={(this.state.is_rounded_hem_active != '1') ? "display_none" : "fix full"} >
											<input 
											type="number" 
											step="0.01"
											min="0"
											name="rounded_hem_price" 
											className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" 
											value={this.state.rounded_hem_price}
											placeholder="Price"
											onChange={(e) => this.changeInput(e)}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>



					<div className="fix full border_box mt_10">
						<div className="fix full bg_brown2">
							<div className="fix full floatleft">
								<p className="fs_14 font_bold lh_24 pr_10 pl_10 text_white floatleft">4. Select Warrenty Options</p>
							</div>
						</div>
					</div>
					<div className="fix full pr_10 pl_10 border_box mt_20 mb_20">
						<div className="fix floatleft two_by_ten pr_20 pl_20 border_box">
							<img src={`${process.env.MIX_APP_URL}/images/warranty_icon.png`} className="eighty_percent vertical_align_middle"/>
						</div>
						<div className="fix floatleft five_by_ten">
							{
								this.state.warrenty_options.map((warrenty_option,index) => (
									<Warrenty_option key={index} warrenty_option={warrenty_option} warrent_index={index} removeWarrentyOption={this.removeWarrentyOption}/>
								))
							}
							
							<div className="fix full">
								<div className="fix floatleft five_by_ten">
									<input type="text" className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="warrenty_details" placeholder="Type warrenty details" value={this.state.warrenty_details} onChange={(e) => this.changeInput(e)}/>
								</div>
								<div className="fix floatleft three_by_ten">
									<input type="text" className="all_border_solid_ash_1 text_field_padding_lr_5 h_30 ninty_eight_percent" name="warrenty_price" placeholder="Free/Price" value={this.state.warrenty_price} onChange={(e) => this.changeInput(e)}/>
								</div>
								<div className="fix floatright two_by_ten">
									<button className="floatright bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30" onClick={(e) => this.addWarrenty(e)}>ADD</button>
								</div>
							</div>
						</div>
					</div>
					<div className="fix full mt_20">
						<div className={(this.state.active_down_tab == 'product_info') ? "bt_1 br_1 bb_1 bl_1 border_solid border_brown border_box fix floatleft pt_6 pr_10 pb_6 pl_10 bg_white textcenter mr_2 cursor_pointer" : "bt_1 br_1 bb_1 bl_1 border_solid border_brown border_box fix floatleft pt_6 pr_10 pb_6 pl_10 bg_brown2 textcenter mr_2 cursor_pointer"}>
							<p className={(this.state.active_down_tab == 'product_info') ? "fs_14 fs_14 font_bold text_brown" : "fs_14 fs_14 font_bold text_white"} onClick={(e) => this.updateActiveTab('product_info')}>Product Info</p>
						</div>
						<div className={(this.state.active_down_tab == 'measure_and_install') ? "bt_1 br_1 bb_1 bl_1 border_solid border_brown border_box fix floatleft pt_6 pr_10 pb_6 pl_10 bg_white textcenter mr_2 cursor_pointer display_none" : "bt_1 br_1 bb_1 bl_1 border_solid border_brown border_box fix floatleft pt_6 pr_10 pb_6 pl_10 bg_brown2 textcenter mr_2 cursor_pointer display_none"}>
							<p className={(this.state.active_down_tab == 'measure_and_install') ? "fs_14 fs_14 font_bold text_brown" : "fs_14 fs_14 font_bold text_white"} onClick={(e) => this.updateActiveTab('measure_and_install')}>Measure & Install</p>
						</div>
						<div className={(this.state.active_down_tab == 'shipping_and_production') ? "bt_1 br_1 bb_1 bl_1 border_solid border_brown border_box fix floatleft pt_6 pr_10 pb_6 pl_10 bg_white textcenter mr_2 cursor_pointer" : "bt_1 br_1 bb_1 bl_1 border_solid border_brown border_box fix floatleft pt_6 pr_10 pb_6 pl_10 bg_brown2 textcenter mr_2 cursor_pointer"}>
							<p className={(this.state.active_down_tab == 'shipping_and_production') ? "fs_14 fs_14 font_bold text_brown" : "fs_14 fs_14 font_bold text_white"} onClick={(e) => this.updateActiveTab('shipping_and_production')}>Shipping & Production</p>
						</div>
					</div>
					<div className="fix full">
						{this.product_details_section()}
					</div>
					<div className="fix full mt_10">
						<button type="submit" className="floatright bg_brown2 fs_14 pr_16 pl_16 font_bold text_white border_none cursor_pointer h_30">Add Product</button>
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(Add_product_content)