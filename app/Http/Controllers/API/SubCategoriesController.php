<?php

namespace App\Http\Controllers\API;
use Intervention\Image\ImageManagerStatic as Image;
use App\repositories\SubCategoryRepository;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sub_category;
use App\Models\Category;
class SubCategoriesController extends Controller
{
    public $subCategoryRepository;

    public function __construct(SubCategoryRepository $subCategoryRepository){
        $this->subCategoryRepository = $subCategoryRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $sub_categories = $this->subCategoryRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Sub Category List',
            'data'      =>  $sub_categories
        ]);
    }

    public function getBySlug($slug)
    {
        $subCategory = Sub_category::where('url',$slug)->with('products')->firstOrFail();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Sub Category',
            'data'      =>  $subCategory
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
            'description'  => 'required|max:1000',
            'categories'  =>  'required',
            'url'  =>  'required|max:100',
            'is_active'  =>  'required'
        ],
        [
            'name.required' => 'Sub Category name is required',
            'name.max' => 'Name must be between 1000 characters',
            'description.required' => 'Description is required',
            'description.max' => 'Description must be between 100 characters',
            'categories.required' => 'You must select atleast one category',
            'url.required' => 'URL is required',
            'url.max' => 'URL must be between 1000 characters',
            'is_active.required' => 'Status is required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'   =>  false,
                'message'   =>  $validator->getMessageBag()
            ]);
        }

        $img = Image::make($request->image);
        // Resize
        $img->resize(600, 600);
        $image_64 = $request->image; //your base64 encoded data
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
        // find substring fro replace here eg: data:image/png;base64,
        $image = str_replace($replace, '', $image_64); 
        $image = str_replace(' ', '+', $image); 
        $request->image = $imageName = md5(rand(11111, 99999)) . '_' . time() .'.'.$extension;
        // Storage::disk('public')->put('color/'.$imageName, base64_decode($image));
        Storage::disk('public_upload_directory')->put("sub_categories/".$imageName, $img->stream(),'public');
        
        $sub_category = $this->subCategoryRepository->create($request);

        $this->addCategoriesToSubCategory($sub_category, $request);

        return response()->json([
            'success'   =>  true,
            'message'   =>  'Sub Category Stored',
            'data'      =>  $sub_category
        ]);
    }

    private function addCategoriesToSubCategory(Sub_category $subCategory, Request $request){
        $formData = $request->all();
        $category_id_array = explode(',',$request->categories);
        // var_dump($category_id_array);
        foreach($category_id_array as $category_id){
            $category = Category::find($category_id);
            $subCategory->categories()->save($category);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sub_category = $this->subCategoryRepository->findById($id);
        if (is_null($sub_category)) {
            return response()->json([
                'success' => false,
                'message' => 'Sub Category not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Sub Category found',
            'data'    => $sub_category
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
        $sub_category = $this->subCategoryRepository->findById($id);
        if (is_null($sub_category)) {
            return response()->json([
                'success' => false,
                'message' => 'Sub Category Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100',
            'description'  => 'required|max:1000',
            'categories'  =>  'required',
            'url'  =>  'required|max:100',
            'is_active'  =>  'required'
        ],
        [
            'name.required' => 'Sub Category name is required',
            'name.max' => 'Name must be between 1000 characters',
            'description.required' => 'Description is required',
            'description.max' => 'Description must be between 100 characters',
            'categories.required' => 'You must select atleast one category',
            'url.required' => 'URL is required',
            'url.max' => 'URL must be between 1000 characters',
            'is_active.required' => 'Status is required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $file_path = public_path("/uploads/sub_categories/".$sub_category->image); // app_path("public/test.txt");
        if(File::exists($file_path)) File::delete($file_path);

        $img = Image::make($request->image);
        // Resize
        $img->resize(600, 600);
        $image_64 = $request->image; //your base64 encoded data
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
        // find substring fro replace here eg: data:image/png;base64,
        $image = str_replace($replace, '', $image_64); 
        $image = str_replace(' ', '+', $image); 
        $request->image = $imageName = md5(rand(11111, 99999)) . '_' . time() .'.'.$extension;
        // Storage::disk('public')->put('color/'.$imageName, base64_decode($image));
        Storage::disk('public_upload_directory')->put("sub_categories/".$imageName, $img->stream(),'public');
        

        $sub_category = $this->subCategoryRepository->edit($request, $id);
        $sub_category->categories()->wherePivot('sub_category_id','=', $id)->detach();
        $this->addCategoriesToSubCategory($sub_category, $request);
        return response()->json([
            'success' => true,
            'message' => 'Sub Category Updated',
            'data'    => $sub_category
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
        $sub_category = $this->subCategoryRepository->findById($id);
        if (is_null($sub_category)) {
            return response()->json([
                'success' => false,
                'message' => 'Sub Category Not found',
                'data' => null,
            ]);
        }
        $file_path = public_path("/uploads/sub_categories/".$sub_category->image); // app_path("public/test.txt");
        if(File::exists($file_path)) File::delete($file_path);
        $sub_category = $this->subCategoryRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Category Deleted',
            'data'    => $sub_category
        ]);
    }
}
