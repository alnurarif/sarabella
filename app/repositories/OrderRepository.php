<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderRepository implements CrudInterface{
	public function getAll(){
		$orders = Order::with('order_details')->with('customer')->get();
		return $orders;
	}
	public function findById($id){
		$order = Order::with('order_details')->with('customer')->find($id);
		// $order = Order::with('order_details')->get();
		return $order;
	}
	public function create(Request $request){
		$order = new Order;
		$order->customer_id = $request->customer_id;
		$order->promotional_code = $request->additional_cart_info['promotional_code'];
		$order->special_instruction = $request->additional_cart_info['special_instruction'];
		$order->subtotal = $request->additional_cart_info['subtotal'];
		$order->total = $request->additional_cart_info['total'];
		$order->total_off = $request->additional_cart_info['total_off'];
		$order->total_warrenty = $request->additional_cart_info['total_warrenty'];
		$order->checkout_info = json_encode($request['checkout_info']);
		$order->save();

		return $order;
	}
	public function edit(Request $request, $id){
		$order = Order::find($id);
		$order->name = $request->name;
		$order->has_url = $request->has_url;
		$order->url = $request->url;
		$order->is_active = $request->is_active;
		$order->save();

		return $order;
	}
	public function delete($id){
		$order = Order::find($id);
		$order->delete();
		return $order;

	}
}