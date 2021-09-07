import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {
	getProductList,
	deleteProduct,
	deleteDataByIdFromLocalList,
	getDataByNameFromLocalList} from '../../../../services/Product_services'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class View_products_content extends Component{
	state = {
		products : [],
		temporary_products : [],
		search_data : ''
	}
	componentDidMount(){
		this.getProducts()
	}
	getProducts = async (callback = () => {}) => {
		let response = await getProductList()
		this.setState({
			products : response.data,
			temporary_products : response.data
		})
		callback()
	}
	deleteDataFromLocal = (id) => {
		let products = deleteDataByIdFromLocalList('id',this.state.selectedProductId,this.state.products)
		this.setState({
			products,
			temporary_products : products
		})
	}
	searchByName = () => {
		let foundProducts = getDataByNameFromLocalList(this.state.search_data, this.state.products)
		this.setState({
			temporary_products : foundProducts
		})
	}
	deleteConfirmation = (id) => {
		this.setState({
			selectedProductId : id 
		})

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='fix custom-ui'>
						<div className='fix w_300 bt_1 br_1 bb_1 bl_1 border_solid border_dark_ash'>
							<div className="fix full pt_5 pr_10 pb_5 pl_5 border_box bg_brown2">
								<p className="fs_14 text_white font_bold">Are you sure?</p>
							</div>
							<div className="fix full pt_5 pr_10 pb_5 pl_5 border_box">
								<p className="fs_14 mt_20 text_dark_ash">Do you want to delete this data?</p>
								<div className="fix full mt_20 floatright">
									<Button 
									buttonTitle="No"
									buttonBackground="bg_green"
									buttonFontSize="fs_12"
									buttonPaddingTop="pt_5"
									buttonPaddingBottom="pb_5"
									buttonPaddingRight="pr_10"
									buttonPaddingLeft="pl_10"
									buttonFontWeight="font_bold"
									buttonTextColor="text_white"
									buttonMarginLeft="ml_5"
									buttonMarginRight="mr_5"
									buttonFloat="floatright"
									buttonFunction={() => {
										onClose()
									}}/>

									<Button 
									buttonTitle="Yes"
									buttonBackground="bg_red"
									buttonFontSize="fs_12"
									buttonPaddingTop="pt_5"
									buttonPaddingBottom="pb_5"
									buttonPaddingRight="pr_10"
									buttonPaddingLeft="pl_10"
									buttonFontWeight="font_bold"
									buttonTextColor="text_white"
									buttonMarginLeft="ml_5"
									buttonMarginRight="mr_5"
									buttonFloat="floatright"
									buttonFunction={() => {
										deleteProduct(this.state.selectedProductId)
										this.getProducts(() => {onClose()})
										this.setState({
											selectedProductId : null
										})
										
									}}/>

								</div>
							</div>
						</div>
					</div>
				);
			}
		});
	}
	render(){
		return(
			<div className="fix ninty_eight_percent div_mid bg_white pt_10 pr_10 pb_10 pl_10 border_box">
				<div className="fix full">
					<p className="fs_24 lh_34 font_bold text_dark_ash floatleft">View Products</p>
					<Link to='/manage/products/add_product'>
						<button className="bg_brown2 fs_14 pt_10 pb_10 pr_16 pl_16 font_bold floatleft text_white border_none ml_20 cursor_pointer">ADD PRODUCT</button>
					</Link>
				</div>
				<div className="fix full mt_20 mb_20">
					<p className="fs_14 lh_20 text_dark_ash">View and Manage Products</p>
				</div>
				<div className="fix full bt_1 border_top_ash border_top_solid"></div>
				<div className="fix full mt_20 mb_20">
					<button className="bg_brown2 text_white font_bold fs_14 floatright h_30 pl_16 pr_16 border_none">Search</button>
					<input type="text" placeholder="Search" className="h_30 bt_1 br_1 bb_1 bl_1 border_solid border_ash pl_5 pr_5 w_150 border_box floatright"/>
				</div>
				<div className="fix full">
					<table className="full text_dark_ash fs_14 lh_26">
						<thead >
							<tr className="bg_ash">
								<th><input type="checkbox"/></th>
								<th>Photo</th>
								<th>Name</th>
								<th>Unit Price</th>
								<th>Selling Price</th>
								<th>Offer Price</th>
								<th>Sample Available</th>
								<th>Category</th>
								<th>Brand</th>
								<th>Model</th>
							</tr>
						</thead>
						<tbody className="textcenter">
							{
								(this.state.temporary_products.length > 0) ?
									this.state.temporary_products.map((product, index) => (
										<tr key={index}>
											<td><input type="checkbox"/></td>
											<td><img src={`${process.env.MIX_APP_URL}/uploads/products/${product.images[0].image_name}`} className="w_50 h_50"/></td>
											<td>{product.name}</td>
											<td>{product.unit_price}</td>
											<td>{product.selling_price}</td>
											<td>{product.offer_price} {product.offer_price_type}</td>
											<td>{(product.sample_available == '1') ? 'Yes' : 'No'}</td>
											<td>{(product.is_active == 0) ? 'Inactive' : 'Active'}</td>
											<td>{moment(product.created_at).format('YYYY-MM-DD')}</td>
											<td>
												<Link to={`/manage/products/edit_product/${product.id}`}>
													<p className="cursor_pointer ml_2 mr_2 fs_14 textcenter font_bold text_dark_ash display_inline_block"><i className="fas fa-edit"></i></p>
												</Link>
												<p className="cursor_pointer ml_2 mr_2 fs_14 textcenter font_bold text_dark_ash display_inline_block" onClick={() => this.deleteConfirmation(color.id)}><i className="fas fa-trash-alt"></i></p>
											</td>
										</tr>
									))
								:
									<tr><td colSpan="100%"> <p className="fs_14 text_dark_ash font_bold textcenter">No Data!</p></td></tr>
							}
						</tbody>
					</table>
				</div>
			</div>	
		)
	}
}
export default View_products_content

