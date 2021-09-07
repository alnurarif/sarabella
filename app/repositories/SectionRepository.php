<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Link_section;

class SectionRepository implements CrudInterface{
	public function getAll(){
		$sections = Link_section::with('pages')->get();
		return $sections;
	}
	public function findById($id){
		// $section = Link_section::with('sub_sections')->find($id);
		$section = Link_section::with('pages')->find($id);
		return $section;
	}
	public function create(Request $request){
		$section = new Link_section;
		$section->name = $request->name;
		$section->save();

		return $section;
	}
	public function edit(Request $request, $id){
		$section = Link_section::find($id);
		$section->name = $request->name;
		$section->save();

		return $section;
	}
	public function delete($id){
		$section = Link_section::find($id);
		$section->delete();
		return $section;
	}
}