<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductRepository implements CrudInterface{
	public function getAll(){
		$products = Product::with('colors')->with('warrenty_options')->with('images')->get();
		return $products;
	}
	public function findById($id){
		$product = Product::with('colors')->with('warrenty_options')->with('images')->find($id);
		// $product = Product::find($id);
		return $product;
	}
	public function create(Request $request){
		$product = new Product;
		$product->name = $request->name;
		$product->main_category = $request->main_category;
		$product->sub_category = $request->sub_category;
		$product->unit_price = $request->unit_price;
		$product->selling_price = $request->selling_price;
		$product->offer_price = $request->offer_price;
		$product->offer_price_type = $request->offer_price_type;
		$product->delivery_time = $request->delivery_time;
		$product->delivery_charge = $request->delivery_charge;
		$product->sample_available = $request->sample_available;
		$product->short_description = $request->short_description;
		$product->short_features = json_encode($request->short_features);
		$product->mount_type_inside = $request->mount_type_inside;
		$product->mount_type_outside = $request->mount_type_outside;
		$product->width_inch = $request->width_inch;
		$product->width_8ths = $request->width_8ths;
		$product->height_inch = $request->height_inch;
		$product->height_8ths = $request->height_8ths;
		$product->minimum_quantity = $request->minimum_quantity;
		$product->maximum_quantity = $request->maximum_quantity;
		$product->total_product_number = $request->total_product_number;
		$product->has_features = $request->has_features;
		$product->product_info_description = $request->product_info_description;
		$product->product_info_features = json_encode($request->product_info_features);
		$product->product_info_options = json_encode($request->product_info_options);
		$product->product_info_motorizations = json_encode($request->product_info_motorizations);
		$product->product_info_recommendations = json_encode($request->product_info_recommendations);
		$product->specification_widths = json_encode($request->specification_widths);
		$product->specification_heights = json_encode($request->specification_heights);
		$product->specification_min_inside_mount_depths = json_encode($request->specification_min_inside_mount_depths);
		$product->specification_min_flush_mount_depths = json_encode($request->specification_min_flush_mount_depths);
		$product->specification_headrail_dimensions = json_encode($request->specification_headrail_dimensions);
		$product->specification_min_outside_mount_spaces = json_encode($request->specification_min_outside_mount_spaces);
		$product->specification_min_flush_inside_mount_depths = json_encode($request->specification_min_flush_inside_mount_depths);
		$product->specification_min_outside_mount_depths = json_encode($request->specification_min_outside_mount_depths);
		$product->shipping_and_production = json_encode($request->shipping_and_production);
		$product->shipping_policy = $request->shipping_policy;
		$product->shipping_policy_note = $request->shipping_policy_note;
		$product->is_cordless_lift_active = $request->is_cordless_lift_active;
		$product->is_continuous_loop_active = $request->is_continuous_loop_active;
		$product->is_motorization_active = $request->is_motorization_active;
		$product->cordless_lift_price = $request->cordless_lift_price;
		$product->ccl_price = $request->ccl_price;
		$product->motorization_price = $request->motorization_price;
		$product->is_ccl_lift_chain_location_active = $request->is_ccl_lift_chain_location_active;
		$product->is_ccl_type_of_chain_active = $request->is_ccl_type_of_chain_active;
		$product->ccl_chain_type_and_price = json_encode($request->ccl_chain_type_and_price);
		$product->is_motorization_remote_control_active = $request->is_motorization_remote_control_active;
		$product->motorization_remote_control_price = $request->motorization_remote_control_price;
		$product->is_motorization_wifi_active = $request->is_motorization_wifi_active;
		$product->motorization_wifi_price = $request->motorization_wifi_price;
		$product->is_standard_roll_active = $request->is_standard_roll_active;
		$product->is_reverse_roll_active = $request->is_reverse_roll_active;
		$product->standard_roll_price = $request->standard_roll_price;
		$product->reverse_roll_price = $request->reverse_roll_price;
		$product->is_exposed_roll_active = $request->is_exposed_roll_active;
		$product->is_cassette_roll_active = $request->is_cassette_roll_active;
		$product->exposed_roll_price = $request->exposed_roll_price;
		$product->cassette_roll_price = $request->cassette_roll_price;
		$product->is_plain_hem_active = $request->is_plain_hem_active;
		$product->is_wave_hem_active = $request->is_wave_hem_active;
		$product->is_scallop_hem_active = $request->is_scallop_hem_active;
		$product->is_rounded_hem_active = $request->is_rounded_hem_active;
		$product->plain_hem_price = $request->plain_hem_price;
		$product->wave_hem_price = $request->wave_hem_price;
		$product->scallop_price = $request->scallop_price;
		$product->rounded_hem_price = $request->rounded_hem_price;
		$product->save();

		return $product;
	}
	public function edit(Request $request, $id){
		$product = Product::find($id);
		$product->name = $request->name;
		$product->main_category = $request->main_category;
		$product->sub_category = $request->sub_category;
		$product->unit_price = $request->unit_price;
		$product->selling_price = $request->selling_price;
		$product->offer_price = $request->offer_price;
		$product->offer_price_type = $request->offer_price_type;
		$product->delivery_time = $request->delivery_time;
		$product->delivery_charge = $request->delivery_charge;
		$product->sample_available = $request->sample_available;
		$product->short_description = $request->short_description;
		$product->short_features = json_encode($request->short_features);
		$product->mount_type_inside = $request->mount_type_inside;
		$product->mount_type_outside = $request->mount_type_outside;
		$product->width_inch = $request->width_inch;
		$product->width_8ths = $request->width_8ths;
		$product->height_inch = $request->height_inch;
		$product->height_8ths = $request->height_8ths;
		$product->minimum_quantity = $request->minimum_quantity;
		$product->maximum_quantity = $request->maximum_quantity;
		$product->total_product_number = $request->total_product_number;
		$product->has_features = $request->has_features;
		$product->product_info_description = $request->product_info_description;
		$product->product_info_features = json_encode($request->product_info_features);
		$product->product_info_options = json_encode($request->product_info_options);
		$product->product_info_motorizations = json_encode($request->product_info_motorizations);
		$product->product_info_recommendations = json_encode($request->product_info_recommendations);
		$product->specification_widths = json_encode($request->specification_widths);
		$product->specification_heights = json_encode($request->specification_heights);
		$product->specification_min_inside_mount_depths = json_encode($request->specification_min_inside_mount_depths);
		$product->specification_min_flush_mount_depths = json_encode($request->specification_min_flush_mount_depths);
		$product->specification_headrail_dimensions = json_encode($request->specification_headrail_dimensions);
		$product->specification_min_outside_mount_spaces = json_encode($request->specification_min_outside_mount_spaces);
		$product->specification_min_flush_inside_mount_depths = json_encode($request->specification_min_flush_inside_mount_depths);
		$product->specification_min_outside_mount_depths = json_encode($request->specification_min_outside_mount_depths);
		$product->shipping_and_production = json_encode($request->shipping_and_production);
		$product->shipping_policy = $request->shipping_policy;
		$product->shipping_policy_note = $request->shipping_policy_note;
		$product->is_cordless_lift_active = $request->is_cordless_lift_active;
		$product->is_continuous_loop_active = $request->is_continuous_loop_active;
		$product->is_motorization_active = $request->is_motorization_active;
		$product->cordless_lift_price = $request->cordless_lift_price;
		$product->ccl_price = $request->ccl_price;
		$product->motorization_price = $request->motorization_price;
		$product->is_ccl_lift_chain_location_active = $request->is_ccl_lift_chain_location_active;
		$product->is_ccl_type_of_chain_active = $request->is_ccl_type_of_chain_active;
		$product->ccl_chain_type_and_price = json_encode($request->ccl_chain_type_and_price);
		$product->is_motorization_remote_control_active = $request->is_motorization_remote_control_active;
		$product->motorization_remote_control_price = $request->motorization_remote_control_price;
		$product->is_motorization_wifi_active = $request->is_motorization_wifi_active;
		$product->motorization_wifi_price = $request->motorization_wifi_price;
		$product->is_standard_roll_active = $request->is_standard_roll_active;
		$product->is_reverse_roll_active = $request->is_reverse_roll_active;
		$product->standard_roll_price = $request->standard_roll_price;
		$product->reverse_roll_price = $request->reverse_roll_price;
		$product->is_exposed_roll_active = $request->is_exposed_roll_active;
		$product->is_cassette_roll_active = $request->is_cassette_roll_active;
		$product->exposed_roll_price = $request->exposed_roll_price;
		$product->cassette_roll_price = $request->cassette_roll_price;
		$product->is_plain_hem_active = $request->is_plain_hem_active;
		$product->is_wave_hem_active = $request->is_wave_hem_active;
		$product->is_scallop_hem_active = $request->is_scallop_hem_active;
		$product->is_rounded_hem_active = $request->is_rounded_hem_active;
		$product->plain_hem_price = $request->plain_hem_price;
		$product->wave_hem_price = $request->wave_hem_price;
		$product->scallop_price = $request->scallop_price;
		$product->rounded_hem_price = $request->rounded_hem_price;
		$product->save();

		return $product;
	}
	public function delete($id){
		$product = Product::find($id);
		$product->delete();
		return $product;

	}
}