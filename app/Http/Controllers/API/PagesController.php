<?php

namespace App\Http\Controllers\API;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\repositories\PageRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\Link_section as Section;
class PagesController extends Controller
{
    public $pageRepository;

    public function __construct(PageRepository $pageRepository){
        $this->pageRepository = $pageRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = $this->pageRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Page List',
            'data'      =>  $pages
        ]);
    }

    public function getBySlug($slug)
    {
        $page = Page::where('link',$slug)->with('sections')->firstOrFail();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Page',
            'data'      =>  $page
        ]);   
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formData = $request->all();

        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100|unique:pages',
            'link'  =>  'required|max:100|unique:pages',
            'content'  =>  'required',
        ],
        [
            'name.required' => 'Page name is required',
            'name.max' => 'Name must be between 100 characters',
            'link.required' => 'Link is required',
            'link.max' => 'Link must be between 100 characters',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'   =>  false,
                'message'   =>  $validator->getMessageBag()
            ]);
        }

        $page = $this->pageRepository->create($request);
        $this->addPageToSections($page, $request);
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Page Stored',
            'data'      =>  $page
        ]);
    }

    private function addPageToSections($page, $request){
        $formData = $request->all();
        $selected_sections = $formData['selected_sections'];
        foreach($selected_sections as $single_section){
            $section = Section::find($single_section);
            $section->pages()->save($page);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        $page = $this->pageRepository->findById($id);
        if (is_null($page)) {
            return response()->json([
                'success' => false,
                'message' => 'Page not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Page found',
            'data'    => $page
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $page = $this->pageRepository->findById($id);
        if (is_null($page)) {
            return response()->json([
                'success' => false,
                'message' => 'Page Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        
        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100|unique:pages,name,'.$id,
            'link'  =>  'required|max:100|unique:pages,link,'.$id,
            'content'  =>  'required',
        ],
        [
            'name.required' => 'Page name is required',
            'name.max' => 'Name must be between 100 characters',
            'link.required' => 'Link is required',
            'link.max' => 'Link must be between 100 characters',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $page = $this->pageRepository->edit($request, $id);
        $page->sections()->wherePivot('page_id','=', $id)->detach();
        $this->addPageToSections($page, $request);
        return response()->json([
            'success' => true,
            'message' => 'Page Updated',
            'data'    => $page
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $page = $this->pageRepository->findById($id);
        if (is_null($page)) {
            return response()->json([
                'success' => false,
                'message' => 'Page Not found',
                'data' => null,
            ]);
        }
        $page = $this->pageRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Page Deleted',
            'data'    => $page
        ]);
    }
}
