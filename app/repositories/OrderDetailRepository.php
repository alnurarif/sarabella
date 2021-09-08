<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\OrderDetail;

class OrderDetailRepository implements CrudInterface{
	public function getAll(){
		$order_details = OrderDetail::get();
		return $order_details;
	}
	public function findById($id){
		$order_detail = OrderDetail::get();
		return $order_detail;
	}
	public function create(Request $request){
		$order_detail = new OrderDetail;
		$order_detail->order_id = $order_id;
		$order_detail->customer_id = $request->customer_id;
		$order_detail->product_id = $product['id'];
		$order_detail->details = json_encode($product);
		$order_detail->save();

		return $order_detail;
	}
	public function edit(Request $request, $id){
		$order_detail = OrderDetail::find($id);
		$order_detail->name = $request->name;
		$order_detail->has_url = $request->has_url;
		$order_detail->url = $request->url;
		$order_detail->is_active = $request->is_active;
		$order_detail->save();

		return $order_detail;
	}
	public function delete($id){
		$order_detail = OrderDetail::find($id);
		$order_detail->delete();
		return $order_detail;

	}
}