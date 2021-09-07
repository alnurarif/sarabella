<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Color;

class ColorRepository implements CrudInterface{
	public function getAll(){
		$colors = Color::all();
		return $colors;
	}
	public function findById($id){
		// $color = Color::with('sub_colors')->find($id);
		$color = Color::find($id);
		return $color;
	}
	public function create(Request $request){
		$color = new Color;
		$color->name = $request->name;
		$color->image = $request->image;
		$color->is_active = $request->is_active;
		$color->save();

		return $color;
	}
	public function edit(Request $request, $id){
		$color = Color::find($id);
		$color->name = $request->name;
		$color->image = $request->image;
		$color->is_active = $request->is_active;
		$color->save();

		return $color;
	}
	public function delete($id){
		$color = Color::find($id);
		$color->delete();
		return $color;

	}
}