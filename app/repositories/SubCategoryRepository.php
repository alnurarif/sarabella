<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Sub_category;

class SubCategoryRepository implements CrudInterface{
	public function getAll(){
		$sub_categories = Sub_category::all();
		return $sub_categories;
	}
	public function findById($id){
		// $sub_category = Sub_category::with('sub_categories')->find($id);
		$sub_category = Sub_category::find($id);
		return $sub_category;
	}
	public function create(Request $request){
		$sub_category = new Sub_category;
		$sub_category->name = $request->name;
		$sub_category->description = $request->description;
		$sub_category->categories = $request->categories;
		$sub_category->url = $request->url;
		$sub_category->image = $request->image;
		$sub_category->is_active = $request->is_active;
		$sub_category->save();

		return $sub_category;
	}
	public function edit(Request $request, $id){
		$sub_category = Sub_category::find($id);
		$sub_category->name = $request->name;
		$sub_category->description = $request->description;
		$sub_category->categories = $request->categories;
		$sub_category->url = $request->url;
		$sub_category->image = $request->image;
		$sub_category->is_active = $request->is_active;
		$sub_category->save();

		return $sub_category;
	}
	public function delete($id){
		$sub_category = Sub_category::find($id);
		$sub_category->delete();
		return $sub_category;

	}
}