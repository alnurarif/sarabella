import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Left_menu extends Component{
	render(){
		return (
			<div className="fix full">
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer bg_brown2">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-tachometer-alt"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Dashboard</p>
						</div>
						<div className="fix fifteen_percent floatleft">&nbsp;</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-sitemap"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Products</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<Link to='/manage/products/view_products'>
							<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
								<div className="fix fifteen_percent floatleft">
									<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-sitemap"></i></span></p>
								</div>
								<div className="fix eighty_five_percent floatleft">
									<p className="text_white fs_12 lh_26">View Products</p>
								</div>
							</div>
						</Link>
						<Link to='/manage/categories/view_categories'>
							<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
								<div className="fix fifteen_percent floatleft">
									<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-tags"></i></span></p>
								</div>
								<div className="fix eighty_five_percent floatleft">
									<p className="text_white fs_12 lh_26">Categories</p>
								</div>
							</div>
						</Link>
						<Link to='/manage/sub_categories/view_sub_categories'>
							<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
								<div className="fix fifteen_percent floatleft">
									<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-tags"></i></span></p>
								</div>
								<div className="fix eighty_five_percent floatleft">
									<p className="text_white fs_12 lh_26">Sub Categories</p>
								</div>
							</div>
						</Link>
						<Link to='/manage/colors/view_colors'>
							<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
								<div className="fix fifteen_percent floatleft">
									<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-palette"></i></span></p>
								</div>
								<div className="fix eighty_five_percent floatleft">
									<p className="text_white fs_12 lh_26">Colors</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-shopping-cart"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Orders</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-shopping-cart"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Orders</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-shopping-cart"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Pending Orders</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-envelope"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Invoices</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-gift"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Coupons</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-users"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Customers</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-users"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Customers</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-star"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Reviews</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-truck"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Shiptments</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-map-marker-alt"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Shipments</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-map-marker-alt"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Add Shipment</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-chart-bar"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Report</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-chart-bar"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Product Sales Reports</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-arrow-up"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Sales</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-users"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Staff</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-users"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Staff</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-users"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Add Staff</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-shield-alt"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Roles</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="far fa-image"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Deals</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-tags"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Deals</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-tags"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Add Deal</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="far fa-image"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Banners</p>
							</div>
						</div>
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="far fa-newspaper"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Pages</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<Link to='/manage/sections/view_sections'>
							<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
								<div className="fix fifteen_percent floatleft">
									<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="far fa-image"></i></span></p>
								</div>
								<div className="fix eighty_five_percent floatleft">
									<p className="text_white fs_12 lh_26">View Sections</p>
								</div>
							</div>
						</Link>
						<Link to='/manage/pages/view_pages'>
							<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
								<div className="fix fifteen_percent floatleft">
									<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="far fa-newspaper"></i></span></p>
								</div>
								<div className="fix eighty_five_percent floatleft">
									<p className="text_white fs_12 lh_26">View Pages</p>
								</div>
							</div>
						</Link>
						
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-quote-left"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Testimonials</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-quote-left"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Testimonials</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-quote-left"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Add Testimonial</p>
							</div>
						</div>
						
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-users"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Subscribers</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-users"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">View Subscribers</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-wrench"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Settings</p>
							</div>
						</div>
						
					</div>
				</div>
				<div className="fix full bb_1 border_bottom_solid border_bottom_dark_ash2 menu_wrapper_button">
					<div className="fix full menu_side pt_10 pr_10 pb_10 pl_10 border_box cursor_pointer main_left_menu">
						<div className="fix fifteen_percent floatleft">
							<p className="text_white fs_16 lh_30"><span className="fs_24"><i className="fas fa-wrench"></i></span></p>
						</div>
						<div className="fix seventy_percent floatleft">
							<p className="text_white fs_16 lh_30">Settings</p>
						</div>
						<div className="fix fifteen_percent floatleft"><p className="text_white fs_16 lh_30 textright"><i className="fas fa-angle-left"></i></p></div>
					</div>
					<div className="fix full sub_menu_side_wrapper">
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="far fa-list-alt"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Overview</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-user"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Profile</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-briefcase"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Bussiness</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-envelope"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">SMS</p>
							</div>
						</div>
						<div className="fix full menu_side pt_10 pr_10 pb_10 pl_30 border_box cursor_pointer submenu_div">
							<div className="fix fifteen_percent floatleft">
								<p className="text_white fs_12 lh_26"><span className="fs_20"><i className="fas fa-code"></i></span></p>
							</div>
							<div className="fix eighty_five_percent floatleft">
								<p className="text_white fs_12 lh_26">Custom CSS</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Left_menu