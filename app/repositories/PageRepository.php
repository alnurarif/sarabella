<?php
namespace App\repositories;
use App\interfaces\CrudInterface;
use Illuminate\Http\Request;
use App\Models\Page;

class PageRepository implements CrudInterface{
	public function getAll(){
		$pages = Page::with('sections')->get();
		return $pages;
	}
	public function findById($id){
		// $page = Page::with('sub_pages')->find($id);
		$page = Page::with('sections')->find($id);
		return $page;
	}
	public function create(Request $request){
		$page = new Page;
		$page->name = $request->name;
		$page->link = $request->link;
		$page->content = $request->content;
		$page->save();

		return $page;
	}
	public function edit(Request $request, $id){
		$page = Page::find($id);
		$page->name = $request->name;
		$page->link = $request->link;
		$page->content = $request->content;
		$page->save();

		return $page;
	}
	public function delete($id){
		$page = Page::find($id);
		$page->delete();
		return $page;
	}
}