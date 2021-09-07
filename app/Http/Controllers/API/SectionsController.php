<?php

namespace App\Http\Controllers\API;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\repositories\SectionRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Models\Link_section;
class SectionsController extends Controller
{
    public $sectionRepository;

    public function __construct(SectionRepository $sectionRepository){
        $this->sectionRepository = $sectionRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sections = $this->sectionRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Section List',
            'data'      =>  $sections
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
            'name'  =>  'required|max:100|unique:link_sections',
        ],
        [
            'name.required' => 'Section name is required',
            'name.max' => 'Name must be between 100 characters',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'   =>  false,
                'message'   =>  $validator->getMessageBag()
            ]);
        }

        $section = $this->sectionRepository->create($request);

        return response()->json([
            'success'   =>  true,
            'message'   =>  'Section Stored',
            'data'      =>  $section
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        $section = $this->sectionRepository->findById($id);
        if (is_null($section)) {
            return response()->json([
                'success' => false,
                'message' => 'Section not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Section found',
            'data'    => $section
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
        $section = $this->sectionRepository->findById($id);
        if (is_null($section)) {
            return response()->json([
                'success' => false,
                'message' => 'Section Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100',
        ],
        [
            'name.required' => 'Section name is required',
            'name.max' => 'Name must be between 1000 characters',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $section = $this->sectionRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Section Updated',
            'data'    => $section
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
        $section = $this->sectionRepository->findById($id);
        if (is_null($section)) {
            return response()->json([
                'success' => false,
                'message' => 'Section Not found',
                'data' => null,
            ]);
        }
        $section = $this->sectionRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Section Deleted',
            'data'    => $section
        ]);
    }
}
