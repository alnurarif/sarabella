<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\repositories\CategoryRepository;
use App\Http\Controllers\Controller;
use App\Models\Category;
class CategoriesController extends Controller
{
    public $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository){
        $this->categoryRepository = $categoryRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = $this->categoryRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Category List',
            'data'      =>  $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'name'  =>  'required|max:100',
            'has_url'  =>  'required',
            'url'  =>  'required|max:100',
            'is_active'  =>  'required'
        ],
        [
            'name.required' => 'Category name is required',
            'name.max' => 'Name must be between 100 characters',
            'has_url.required' => 'Has URL is required',
            'url.required' => 'URL is required',
            'url.max' => 'URL must be between 100 characters',
            'is_active.required' => 'Status is required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'   =>  false,
                'message'   =>  $validator->getMessageBag()
            ]);
        }

        $category = $this->categoryRepository->create($request);

        return response()->json([
            'success'   =>  true,
            'message'   =>  'Category Stored',
            'data'      =>  $category
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = $this->categoryRepository->findById($id);
        if (is_null($category)) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Category found',
            'data'    => $category
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
        $category = $this->categoryRepository->findById($id);
        if (is_null($category)) {
            return response()->json([
                'success' => false,
                'message' => 'Category Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100',
            'has_url'  =>  'required',
            'url'  =>  'required|max:100',
            'is_active'  =>  'required'
        ],
        [
            'name.required' => 'Category name is required',
            'name.max' => 'Name must be between 100 characters',
            'has_url.required' => 'Has URL is required',
            'url.required' => 'URL is required',
            'url.max' => 'URL must be between 100 characters',
            'is_active.required' => 'Status is required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $category = $this->categoryRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Category Updated',
            'data'    => $category
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
        $category = $this->categoryRepository->findById($id);
        if (is_null($category)) {
            return response()->json([
                'success' => false,
                'message' => 'Category Not found',
                'data' => null,
            ]);
        }

        $category = $this->categoryRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Category Deleted',
            'data'    => $category
        ]);
    }
}
