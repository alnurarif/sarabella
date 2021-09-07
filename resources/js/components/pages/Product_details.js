import React, {Component} from 'react'
import { getCategoryList } from '../../services/Category_services'
import { getSectionList } from '../../services/Section_services'
import Continuous_cord_loop_lift_chain_location from '../layouts/product_details/Continuous_cord_loop_lift_chain_location'
import Continuous_cord_loop_chain_type from '../layouts/product_details/Continuous_cord_loop_chain_type'
import Shipping_and_product_tab from '../layouts/product_details/Shipping_and_product_tab'
import Product_feature_section from '../layouts/product_details/Product_feature_section'
import Measure_and_install_tab from '../layouts/product_details/Measure_and_install_tab'
import Continuous_cord_loop from '../layouts/product_details/Continuous_cord_loop'
import Outside_mount_type from '../layouts/product_details/Outside_mount_type'
import { existsInFreeSampleCart } from '../../services/Product_color_services'
import Inside_mount_type from '../layouts/product_details/Inside_mount_type'
import Product_info_tab from '../layouts/product_details/Product_info_tab'
import { getSubCategoryList } from '../../services/Sub_category_services'
import Product_details_content from '../layouts/Product_details_content'
import { existsInProductCart } from '../../services/Product_services'
import Standard_roll from '../layouts/product_details/Standard_roll'
import Cordless_lift from '../layouts/product_details/Cordless_lift'
import Motorization from '../layouts/product_details/Motorization'
import Reverse_roll from '../layouts/product_details/Reverse_roll'
import Exposed_roll from '../layouts/product_details/Exposed_roll'
import { getProductById } from '../../services/Product_services'
import Scallop_hem from '../layouts/product_details/Scallop_hem'
import Rounded_hem from '../layouts/product_details/Rounded_hem'
import Reviews_tab from '../layouts/product_details/Reviews_tab'
import Header_logo_search from '../layouts/Header_logo_search'
import { set, get } from '../../helpers/Local_storage_helper'
import { NavLink, Link, withRouter } from 'react-router-dom'
import Plain_hem from '../layouts/product_details/Plain_hem'
import Wave_hem from '../layouts/product_details/Wave_hem'
import Cassette from '../layouts/product_details/Cassette'
import Secondary_menu from '../layouts/Secondary_menu'
import Payment_social from '../layouts/Payment_social'
import Header_menu from '../layouts/Header_menu'
import Track_popup from '../layouts/Track_popup'
import Disclaimer from '../layouts/Disclaimer'
import Footer from '../layouts/Footer'

class Product_details extends Component{
	constructor(props){
		super(props)
	}
	state = {
		id : '',
		categories : [],
		sub_categories : [],
		product : {},
		selected_product_image : 0,
		active_tab : 'product_info',
		selected_sample_image : null,
		selected_sample_color : null,
		selected_sample_index : null,
		free_samples_in_cart : [],
		selected_mount_type : '',
		selected_lift_system : '',
		selected_roll_position : '',
		selected_headrails : '',
		selected_bottom_hem_style : '',
		width_inch : '0',
		width_8ths : '0',
		height_inch : '0',
		height_8ths : '0',
		product_quantity : '1',
		room_name : '',
		notes : '',
		cordless_price : '0',
		ccl_price : '0',
		motorization_price : '0',
		ccl_lift_cord_location : 'left',
		ccl_chain_type : '',
		ccl_chain_type_price : '0',
		motorization_remote : '0',
		motorization_wifi : '0',
		motorization_remote_price : '0',
		motorization_wifi_price : '0',
		standard_roll_price : '0',
		reverse_roll_price : '0',
		exposed_roll_price : '0',
		cassette_price : '0',
		plain_hem_price : '0',
		wave_hem_price : '0',
		scallop_hem_price : '0',
		rounded_hem_price : '0',
		product_sell_price : '0',
		total_price : '0',
		total_width : '0',
		total_height : '0',
		total_square_feet : '0',
		per_square_feet_price : '0',
		visible_add_to_cart : '0',
		active_warrenty : {},
		active_warrenty_index : 0,
		per_square_feet_price_without_off : '0',
		sections : []
	}
	methods = {
		getCategories : async () => {
			let categoryList = await getCategoryList()
			this.setState({
				categories : categoryList.data
			})
			
		},
		getSubCategories : async () => {
			let subCategoryList = await getSubCategoryList()
			this.setState({
				sub_categories : subCategoryList.data
			})
			
		},
		setTotalPrice : (total_price) => {
			this.setState({
				total_price
			})
		},
		visible_unvisible_add_to_cart : () => {
			
			let visible_flag = 0
			if(this.state.selected_mount_type == '') visible_flag++
			if(this.state.selected_sample_index == null) visible_flag++



			if(this.state.product.has_features != 0){
				let active_lift_number = 0
				let active_roll_position_number = 0
				let active_headrails_number = 0
				let active_bottom_hem_style = 0

				if(this.state.product.is_cordless_lift_active != 0) active_lift_number++
				if(this.state.product.is_continuous_loop_active != 0) active_lift_number++
				if(this.state.product.is_motorization_active != 0) active_lift_number++

				if(this.state.product.is_standard_roll_active != 0) active_roll_position_number++
				if(this.state.product.is_reverse_roll_active != 0) active_roll_position_number++

				if(this.state.product.is_exposed_roll_active != 0) active_headrails_number++
				if(this.state.product.is_cassette_roll_active != 0) active_headrails_number++

				if(this.state.product.is_plain_hem_active != 0) active_bottom_hem_style++
				if(this.state.product.is_wave_hem_active != 0) active_bottom_hem_style++
				if(this.state.product.is_scallop_hem_active != 0) active_bottom_hem_style++
				if(this.state.product.is_rounded_hem_active != 0) active_bottom_hem_style++


				if(this.state.selected_lift_system == '' && active_lift_number > 0) visible_flag++
				if(this.state.selected_roll_position == '' && active_roll_position_number > 0) visible_flag++
				if(this.state.selected_headrails == '' && active_headrails_number > 0) visible_flag++
				if(this.state.selected_bottom_hem_style == '' && active_bottom_hem_style > 0) visible_flag++

			}
			this.setState({
				visible_add_to_cart : (visible_flag > 0) ? '0' : '1'
			})
		},
		updatePrice : () => {
			
				

			let product_quantity = this.state.product_quantity
			let liftPrice = this.methods.getLiftPrice()
			let rollPositionPrice = this.methods.getRollPositionPrice()
			let headRailsPrice = this.methods.getHeadRailsPrice()
			let bottomHemStylePrice = this.methods.getBottomHemStylePrice()
			
			let product_unit_price = (this.state.product.unit_price === undefined || this.state.product.unit_price === null) ? 0 : parseFloat(this.state.product.unit_price).toFixed(2)
			let product_offer_value = (this.state.product.offer_price === undefined) ? 0 : parseFloat(this.state.product.offer_price).toFixed(2)
			let product_offer_type = (this.state.product.offer_price_type === undefined) ? '%' : this.state.product.offer_price_type
			let product_offer_price = 0
			let product_sell_price = 0

			let current_total_width_inch = this.methods.getTotalWidth()
			let current_total_height_inch = this.methods.getTotalHeight()
			let current_total_square_feet = parseFloat(current_total_width_inch)*parseFloat(current_total_height_inch)
			
			// let total_square_feet_price = parseFloat(this.state.per_square_feet_price_without_off).toFixed(8)

			let per_square_feet_price = parseFloat(this.state.per_square_feet_price_without_off).toFixed(8)

			let total_square_feet_price = (parseFloat(per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			// let total_square_feet_price = (parseFloat(this.state.per_square_feet_price)*parseFloat(current_total_square_feet)).toFixed(2)
			
			let sell_price = total_square_feet_price

			// let sell_price = this.state.product_sell_price
			
			let active_warrenty_price = this.state.active_warrenty.warrenty_option_price
			let total_active_warrenty_price = parseFloat(active_warrenty_price) * parseFloat(product_quantity) 
			sell_price = parseFloat(sell_price)+parseFloat(liftPrice)+parseFloat(rollPositionPrice)+parseFloat(headRailsPrice)+parseFloat(bottomHemStylePrice)
			let total_price = parseFloat(sell_price) * parseFloat(product_quantity)
			

			let offer_text = ''


			if(product_offer_type == '%'){
				product_offer_price = ((total_price * product_offer_value) / 100).toFixed(2)
				product_sell_price = parseFloat(total_price - ((total_price * product_offer_value) / 100)).toFixed(2)
				offer_text = product_offer_value + '%'		
			}else{
				product_offer_price = product_offer_value
				product_sell_price = parseFloat(total_price - product_offer_value).toFixed(2)
				offer_text = product_offer_type + product_offer_value
			}
			product_sell_price = parseFloat(product_sell_price) + parseFloat(total_active_warrenty_price)
			this.methods.setTotalPrice(parseFloat(product_sell_price).toFixed(2))
			
			this.methods.visible_unvisible_add_to_cart()
		},
		existInFreeSampleCart : (product_color) => {
			let found = false
			this.state.free_samples_in_cart.map((single_color_cart, index) => {
				if(single_color_cart.pivot.color_id == product_color.pivot.color_id && single_color_cart.pivot.product_id == product_color.pivot.product_id) found = true
			})
			return found
		},
		getLiftPrice : () => {
			let liftPrice = 0
			if(this.state.selected_lift_system == 'cordless'){
				liftPrice = (this.state.cordless_price == null) ? '0' : this.state.cordless_price
			}else if(this.state.selected_lift_system == 'continuous_cord_loop'){
				let chainTypePrice = (this.state.ccl_chain_type_price == null) ? '0' : this.state.ccl_chain_type_price
				liftPrice = parseFloat(this.state.ccl_price) + parseFloat(chainTypePrice)
			}else if(this.state.selected_lift_system == 'motorization'){
				let motorization_remote_price = (this.state.motorization_remote_price == null) ? '0' : this.state.motorization_remote_price
				let motorization_wifi_price = (this.state.motorization_wifi_price == null) ? '0' : this.state.motorization_wifi_price
				liftPrice = parseFloat(this.state.motorization_price) + parseFloat(motorization_remote_price) + parseFloat(motorization_wifi_price)
			}
			return liftPrice
		},
		getRollPositionPrice : () => {
			let rollPositionPrice = 0
			if(this.state.selected_roll_position == 'standard_roll'){
				rollPositionPrice = (this.state.standard_roll_price == null) ? '0' : this.state.standard_roll_price
			}else if(this.state.selected_roll_position == 'reverse_roll'){
				rollPositionPrice = (this.state.reverse_roll_price == null) ? '0' : this.state.reverse_roll_price
			}
			return rollPositionPrice
		},
		getHeadRailsPrice : () => {
			let headRailsPrice = 0
			if(this.state.selected_headrails == 'exposed_roll'){
				headRailsPrice = (this.state.exposed_roll_price == null) ? '0' : this.state.exposed_roll_price
			}else if(this.state.selected_headrails == 'cassette'){
				headRailsPrice = (this.state.cassette_price == null) ? '0' : this.state.cassette_price
			}
			return headRailsPrice
		},
		getBottomHemStylePrice : () => {
			let bottomHemStylePrice = 0
			if(this.state.selected_bottom_hem_style == 'plain_hem'){
				bottomHemStylePrice = (this.state.plain_hem_price == null) ? '0' : this.state.plain_hem_price
			}else if(this.state.selected_bottom_hem_style == 'wave_hem'){
				bottomHemStylePrice = (this.state.wave_hem_price == null) ? '0' : this.state.wave_hem_price
			}else if(this.state.selected_bottom_hem_style == 'scallop_hem'){
				bottomHemStylePrice = (this.state.scallop_hem_price == null) ? '0' : this.state.scallop_hem_price
			}else if(this.state.selected_bottom_hem_style == 'rounded_hem'){
				bottomHemStylePrice = (this.state.rounded_hem_price == null) ? '0' : this.state.rounded_hem_price
			}
			return bottomHemStylePrice
		},
		changeTab : (tabName) => {
			this.setState({
				active_tab : tabName
			})
		},
		changeInput : (e) => {
			this.setState({
				[e.target.name] : e.target.value
			})

		},
		changeQuantity : (e) => {
			this.setState({
				product_quantity : e.target.value
			},() => {
				this.methods.updatePrice()
			})

		},
		changeChainType : (e) => {
			let chainTypeInfo = e.target.value.split(',')
			this.setState({
				ccl_chain_type : chainTypeInfo[0],
				ccl_chain_type_price : chainTypeInfo[1]
			},() => {
				this.methods.updatePrice()
			})
		},
		changeWidthHeightInch : (e) => {
			this.setState({
				[e.target.name] : e.target.value
			},() => {
				this.methods.updatePrice()
			})
		},
		showTab : () => {
			if(this.state.active_tab == 'product_info'){
				return <Product_info_tab 
				allState={this.state} 
				methods={this.methods} />
			}else if(this.state.active_tab == 'reviews'){
				return <Reviews_tab 
				allState={this.state} 
				methods={this.methods} />
			}else if(this.state.active_tab == 'measure_and_install'){
				return <Measure_and_install_tab 
				allState={this.state} 
				methods={this.methods} />
			}else if(this.state.active_tab == 'shipping_and_production'){
				return <Shipping_and_product_tab 
				allState={this.state} 
				methods={this.methods} />
			}
		},
		getTotalWidth : () => {
			return parseFloat(this.state.width_inch)+parseFloat(this.state.width_8ths)
		},
		getTotalHeight : () => {
			return parseFloat(this.state.height_inch)+parseFloat(this.state.height_8ths)
		},
		getProductById : async () => {
			let productInfo = await getProductById(this.props.match.params.id)
			this.setState({
				product : productInfo.data
			},() => {
				let product_unit_price = (this.state.product.unit_price === undefined || this.state.product.unit_price === null) ? 0 : parseFloat(this.state.product.unit_price).toFixed(2)
				let product_offer_value = (this.state.product.offer_price === undefined) ? 0 : parseFloat(this.state.product.offer_price).toFixed(2)
				let product_offer_type = (this.state.product.offer_price_type === undefined) ? '%' : this.state.product.offer_price_type
				let product_offer_price = 0
				let product_sell_price = 0
				if(product_offer_type == '%'){
					product_offer_price = ((product_unit_price * product_offer_value) / 100).toFixed(2)
					product_sell_price = parseFloat(product_unit_price - ((product_unit_price * product_offer_value) / 100)).toFixed(2)
				}else{
					product_offer_price = product_offer_value
					product_sell_price = parseFloat(product_unit_price - product_offer_value).toFixed(2)
				}
				let chain_type = JSON.parse(this.state.product.ccl_chain_type_and_price)[0].chain_type_name
				let chain_type_price = JSON.parse(this.state.product.ccl_chain_type_and_price)[0].chain_type_price

				let total_width = parseFloat(this.state.product.width_inch)+parseFloat(this.state.product.width_8ths)
				let total_height = parseFloat(this.state.product.height_inch)+parseFloat(this.state.product.height_8ths)
				let total_square_feet = parseFloat(total_width)*parseFloat(total_height)
				let per_square_feet_price = (parseFloat(product_sell_price)/parseFloat(total_square_feet)).toFixed(8)
				let per_square_feet_price_without_off = (parseFloat(product_unit_price)/parseFloat(total_square_feet)).toFixed(8)

				this.setState({
					width_inch : this.state.product.width_inch.toString(),
					width_8ths : this.state.product.width_8ths.toString(),
					height_inch : this.state.product.height_inch.toString(),
					height_8ths : this.state.product.height_8ths.toString(),
					total_price : product_sell_price,
					product_sell_price,
					ccl_chain_type : chain_type,
					ccl_chain_type_price : chain_type_price,
					total_width,
					total_height,
					total_square_feet,
					per_square_feet_price,
					active_warrenty : this.state.product.warrenty_options[0],
					active_warrenty_index : 0,
					per_square_feet_price_without_off
				},() => {
					this.methods.updatePrice()
				})
			})
		},
		changeBigImageProductPhoto : (index) => {
			this.setState({
				selected_product_image : index
			})
		},
		showInsideMount : () => {
			if(this.state.product.mount_type_inside !== undefined && this.state.product.mount_type_inside == 1){
				return <Inside_mount_type  allState={this.state} methods={this.methods}/>
			}
		},
		showOutsideMount : () => {
			if(this.state.product.mount_type_outside !== undefined && this.state.product.mount_type_outside == 1){
				return <Outside_mount_type  allState={this.state} methods={this.methods}/>
			}	
		},
		showFeatureSection : () => {
			if(this.state.product.has_features == 1){
				return <Product_feature_section  allState={this.state} methods={this.methods}/>
			}
		},
		showCordlessLift : () => {
			if(this.state.product.is_cordless_lift_active == 1){
				return <Cordless_lift  allState={this.state} methods={this.methods}/>
			}	
		},
		showContinuousCordLoop : () => {
			if(this.state.product.is_continuous_loop_active == 1){
				return <Continuous_cord_loop  allState={this.state} methods={this.methods}/>
			}	
		},
		showCclLiftChainLocation : () => {
			if(this.state.product.is_ccl_lift_chain_location_active == 1){
				return <Continuous_cord_loop_lift_chain_location  allState={this.state} methods={this.methods}/>
			}	
		},
		showCclChainType : () => {
			if(this.state.product.is_ccl_type_of_chain_active == 1){
				return <Continuous_cord_loop_chain_type  allState={this.state} methods={this.methods}/>
			}	
		},
		showMotorization : () => {
			if(this.state.product.is_motorization_active == 1){
				return <Motorization  allState={this.state} methods={this.methods}/>
			}	
		},
		showStandardRoll : () => {
			if(this.state.product.is_standard_roll_active == 1){
				return <Standard_roll  allState={this.state} methods={this.methods}/>
			}	
		},
		showReverseRoll : () => {
			if(this.state.product.is_reverse_roll_active == 1){
				return <Reverse_roll  allState={this.state} methods={this.methods}/>
			}	
		},
		showExposedRoll : () => {
			if(this.state.product.is_exposed_roll_active == 1){
				return <Exposed_roll  allState={this.state} methods={this.methods}/>
			}	
		},
		showCassette : () => {
			if(this.state.product.is_cassette_roll_active == 1){
				return <Cassette  allState={this.state} methods={this.methods}/>
			}	
		},
		showPlainHem : () => {
			if(this.state.product.is_plain_hem_active == 1){
				return <Plain_hem  allState={this.state} methods={this.methods}/>
			}	
		},
		showWaveHem : () => {
			if(this.state.product.is_wave_hem_active == 1){
				return <Wave_hem  allState={this.state} methods={this.methods}/>
			}	
		},
		showScallopHem : () => {
			if(this.state.product.is_scallop_hem_active == 1){
				return <Scallop_hem  allState={this.state} methods={this.methods}/>
			}	
		},
		showRoundedHem : () => {
			if(this.state.product.is_rounded_hem_active == 1){
				return <Rounded_hem  allState={this.state} methods={this.methods}/>
			}	
		},
		showColorSample : (index) => {
			let product = this.state.product
			
			this.setState({
				selected_sample_image : product.colors[index].pivot.sample_image,
				selected_sample_color : product.colors[index].image,
				selected_sample_index : index
			}, () => {
				this.methods.updatePrice()
			})
		},
		goToProductDescription : () => {
			this.setState({
				active_tab : 'product_info'
			})
			var someDiv = document.getElementById('productDetailsInfo');
   			var distanceToTop = someDiv.getBoundingClientRect().top;
			window.scrollTo({top: distanceToTop+100, left: 0, behavior: 'smooth' });
		},
		sampleAddToCart : (product_color) => {
			let free_samples = get('free_samples')
			free_samples = (free_samples != null) ? JSON.parse(free_samples) : []

			if(!existsInFreeSampleCart(product_color, free_samples))  
				free_samples.push(product_color) 
			
			set('free_samples', JSON.stringify(free_samples))
			this.setState({
				free_samples_in_cart : free_samples
			})
		},
		setFreeSampleToCart : () => {
			let free_samples = get('free_samples')
			free_samples = (free_samples != null) ? JSON.parse(free_samples) : []			
			
			this.setState({
				free_samples_in_cart : free_samples
			})	
		},
		setMountType : (mountType) => {
			this.setState({
				selected_mount_type : mountType
			}, () => {
				this.methods.updatePrice()
			})
			
		},
		setLiftSystemType : (liftSystem) => {
			this.setState({
				selected_lift_system : liftSystem
			})

			if(liftSystem == 'cordless'){
				this.setState({
					cordless_price : (this.state.product.cordless_lift_price == null) ? '0' : this.state.product.cordless_lift_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(liftSystem == 'continuous_cord_loop'){
				this.setState({
					ccl_price : (this.state.product.ccl_price == null) ? '0' : this.state.product.ccl_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(liftSystem == 'motorization'){
				this.setState({
					motorization_price : (this.state.product.motorization_price == null) ? '0' : this.state.product.motorization_price
				}, () => {
					this.methods.updatePrice()
				})
			}
			
		},
		setMotorizationRemoteControllPrice : (e) => {
			this.setState({
				motorization_remote_price : e.target.value,
			}, () => {
				this.methods.updatePrice()
			})
		},
		setMotorizationWifiPrice : (e) => {
			this.setState({
				motorization_wifi_price : e.target.value
			}, () => {
				this.methods.updatePrice()
			})
		},
		setRollPositionType : (rollPosition) => {
			this.setState({
				selected_roll_position : rollPosition
			})
			if(rollPosition == 'standard_roll'){
				this.setState({
					standard_roll_price : this.state.product.standard_roll_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(rollPosition == 'reverse_roll'){
				this.setState({
					reverse_roll_price : this.state.product.reverse_roll_price
				}, () => {
					this.methods.updatePrice()
				})
			}
		},
		setHeadrailType : (headRail) => {
			this.setState({
				selected_headrails : headRail
			})

			if(headRail == 'exposed_roll'){
				this.setState({
					exposed_roll_price : this.state.product.exposed_roll_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(headRail == 'cassette'){
				this.setState({
					cassette_price : this.state.product.cassette_roll_price
				}, () => {
					this.methods.updatePrice()
				})
			}
		},
		setBottomHemStyleType : (hemStyle) => {
			this.setState({
				selected_bottom_hem_style : hemStyle
			})

			if(hemStyle == 'plain_hem'){
				this.setState({
					plain_hem_price : this.state.product.plain_hem_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(hemStyle == 'wave_hem'){
				this.setState({
					wave_hem_price : this.state.product.wave_hem_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(hemStyle == 'scallop_hem'){
				this.setState({
					scallop_hem_price : this.state.product.scallop_price
				}, () => {
					this.methods.updatePrice()
				})
			}else if(hemStyle == 'rounded_hem'){
				this.setState({
					rounded_hem_price : this.state.product.rounded_hem_price
				}, () => {
					this.methods.updatePrice()
				})
			}
		},
		setLiftCordLocation : (e) => {
			this.setState({
				[e.target.name] : e.target.value 
			})
			this.methods.updatePrice()
		},
		setWarrenty : (warrenty,index) => {
			this.setState({
				active_warrenty : warrenty,
				active_warrenty_index : index
			},() => {
				this.methods.updatePrice()
			})
		},
		addProductToCart : () => {
			const { history } = this.props
			let products_in_cart = get('products_in_cart')
			products_in_cart = (products_in_cart != null) ? JSON.parse(products_in_cart) : []

			if(!existsInProductCart(this.state, products_in_cart))  
				products_in_cart.push(this.state) 
			
			set('products_in_cart', JSON.stringify(products_in_cart))
			history.push(`/cart`)
		},
		getSections : async () => {
			let sectionList = await getSectionList()
			this.setState({
				sections : sectionList.data
			})
		},
		activeCategory : (activeIndex) => {
			this.setState({
				activeCategory : activeIndex
			})
		},
		categoryDeactivate : () => {
			this.setState({
				activeCategory : null
			})
		}
		

	}
	componentDidMount(){
		this.setState({
			id : this.props.match.params.id
		})
		this.methods.getCategories()
		this.methods.getProductById()
		this.methods.setFreeSampleToCart()
		this.methods.getSubCategories()
		this.methods.getSections()
	}
	render(){
		return (
			<div>
				<Header_menu allState={this.state} methods={this.methods}/>
				<Header_logo_search allState={this.state} methods={this.methods}/>
				<Secondary_menu allState={this.state} methods={this.methods}/>
				<Product_details_content allState={this.state} methods={this.methods}/>
				<Payment_social allState={this.state} methods={this.methods}/>
				<Disclaimer allState={this.state} methods={this.methods}/>
				<Footer allState={this.state} methods={this.methods}/>
				<Track_popup allState={this.state} methods={this.methods}/>
			</div>
		)
	}
}

export default withRouter(Product_details)