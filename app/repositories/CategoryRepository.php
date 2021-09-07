<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryRepository implements CrudInterface{
	public function getAll(){
		$categories = Category::with('sub_categories')->get();
		return $categories;
	}
	public function findById($id){
		// $category = Category::with('sub_categories')->find($id);
		$category = Category::with('sub_categories')->get();
		return $category;
	}
	public function create(Request $request){
		$category = new Category;
		$category->name = $request->name;
		$category->has_url = $request->has_url;
		$category->url = $request->url;
		$category->is_active = $request->is_active;
		$category->save();

		return $category;
	}
	public function edit(Request $request, $id){
		$category = Category::find($id);
		$category->name = $request->name;
		$category->has_url = $request->has_url;
		$category->url = $request->url;
		$category->is_active = $request->is_active;
		$category->save();

		return $category;
	}
	public function delete($id){
		$category = Category::find($id);
		$category->delete();
		return $category;

	}
}