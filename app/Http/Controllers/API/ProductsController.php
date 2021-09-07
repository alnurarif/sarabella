<?php

namespace App\Http\Controllers\API;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\Models\Product_warrenty_option;
use App\repositories\ProductRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Models\Product_image;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Color;
class ProductsController extends Controller
{
    public $productRepository;

    public function __construct(ProductRepository $productRepository){
        $this->productRepository = $productRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $products = $this->productRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Product List',
            'data'      =>  $products
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
        $validator = $this->validateProduct($request);

        if($validator->fails()){
            return response()->json([
                'success'   =>  false,
                'message'   =>  $validator->getMessageBag()
            ])->setStatusCode(400);

        }

        $product = $this->productRepository->create($request);
        $this->addColorsToProduct($product, $request);
        $this->addWarrentyOptionsToProduct($product,$request);
        $this->addImagesToProduct($product,$request);
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Product Stored',
            'data'      =>  $product
        ]);
    }

    private function addColorsToProduct(Product $product, Request $request){
        $formData = $request->all();
        foreach($formData['selected_colors'] as $singleColor){
            $img = Image::make($singleColor['sample_image']);
            // Resize
            $img->resize(450, 450);
            $image_64 = $singleColor['sample_image']; //your base64 encoded data
            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
            // find substring fro replace here eg: data:image/png;base64,
            $image = str_replace($replace, '', $image_64); 
            $image = str_replace(' ', '+', $image); 
            $imageName = md5(rand(11111, 99999)) . '_' . time() .'.'.$extension;
            // Storage::disk('public')->put('color/'.$imageName, base64_decode($image));
            Storage::disk('public_upload_directory')->put("products_colors/".$imageName, $img->stream(),'public');

            $color = Color::find($singleColor['id']);
            $product->colors()->save($color,array('has_free_sample' => $singleColor['has_free_sample'], 'sample_image' => $imageName));
        }
    }
    private function addWarrentyOptionsToProduct(Product $product, Request $request){
        $formData = $request->all();
        foreach($formData['warrenty_options'] as $singleWarrentyOption){
            $warrenty_option = new Product_warrenty_option;
            $warrenty_option->warrenty_option_detail = $singleWarrentyOption['warrenty_details'];
            $warrenty_option->warrenty_option_price = ($singleWarrentyOption['warrenty_price'] != "")?$singleWarrentyOption['warrenty_price']:0;
            $product->warrenty_options()->save($warrenty_option);
        }
    }
    private function addImagesToProduct(Product $product, Request $request){
        $formData = $request->all();
        


        foreach($formData['images'] as $singleImage){
            
            $img = Image::make($singleImage);
            // Resize
            $img->resize(450, 450);
            $image_64 = $singleImage; //your base64 encoded data
            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
            // find substring fro replace here eg: data:image/png;base64,
            $image = str_replace($replace, '', $image_64); 
            $image = str_replace(' ', '+', $image); 
            $request->image = $imageName = md5(rand(11111, 99999)) . '_' . time() .'.'.$extension;
            // Storage::disk('public')->put('color/'.$imageName, base64_decode($image));
            Storage::disk('public_upload_directory')->put("products/".$imageName, $img->stream(),'public');

            // $request->image = $request->name.'.'.$extension;
            // $color = $this->colorRepository->create($request);



            $product_image = new Product_image;
            $product_image->image_name = $imageName;
            $product_image->is_default = false;
            $product->images()->save($product_image);
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
        $product = $this->productRepository->findById($id);
        if (is_null($product)) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Product found',
            'data'    => $product
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
        $product = $this->productRepository->findById($id);
        if (is_null($product)) {
            return response()->json([
                'success' => false,
                'message' => 'Product Not found',
                'data' => null,
            ]);
        }

        
        $validator = $this->validateProduct($request);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $product = $this->productRepository->edit($request, $id);
        

        // $product = $this->productRepository->create($request);
        $this->removeProductColorImages($product);
        $product->colors()->wherePivot('product_id','=', $id)->detach();
        $this->addColorsToProduct($product, $request);
        $product->warrenty_options()->delete();
        $this->addWarrentyOptionsToProduct($product,$request);
        $this->removeProductImages($product);
        $product->images()->delete();
        $this->addImagesToProduct($product,$request);


        return response()->json([
            'success' => true,
            'message' => 'Product Updated',
            'data'    => $product
        ]);
    }
    private function removeProductImages($product){
        // var_dump($product->images->toJson());
        foreach($product->images as $singleImage){
            $file_path = public_path("/uploads/products/".$singleImage->image_name);
            if(File::exists($file_path)) File::delete($file_path);
        }
    }
    private function removeProductColorImages($product){
        foreach($product->colors as $singleColor){
            $file_path = public_path("/uploads/products_colors/".$singleColor->pivot->sample_image);
            if(File::exists($file_path)) File::delete($file_path);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = $this->productRepository->findById($id);
        if (is_null($product)) {
            return response()->json([
                'success' => false,
                'message' => 'Product Not found',
                'data' => null,
            ]);
        }

        $product = $this->productRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Product Deleted',
            'data'    => $product
        ]);
    }

    public function validateProduct($request){
        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name' => 'required|max:100|min:2',
            'main_category' => 'required',
            'sub_category' => 'required',
            'unit_price' => 'required',
            'offer_price' => 'required',
            'offer_price_type' => 'required',
            'sample_available' => 'required',
            'width_inch' => 'required',
            'width_8ths' => 'required',
            'height_inch' => 'required',
            'height_8ths' => 'required',
            'minimum_quantity' => 'required',
            'maximum_quantity' => 'required',
            'total_product_number' => 'required',
            'has_features' => 'required',
        ],
        [
            'name.required' => 'Product name is required',
            'name.unique' => 'Name must be unique',
            'name.max' => 'Name must be between 100 characters',
            'name.min' => 'Name must be bigger 100 characters',
            'main_category.required' => 'Main category is required',
            'sub_category.required' => 'Sub category is required',
            'unit_price.required' => 'Unit price is required',
            'offer_price.required' => 'Offer price is required',
            'sample_available.required' => 'Sample available is required',
            'short_description.required' => 'Short description is required',
            'width_inch.required' => 'Width inch is required',
            'width_8ths.required' => 'Width fraction is required',
            'height_inch.required' => 'Height inch is required',
            'height_8ths.required' => 'Height fraction is required',
            'minimum_quantity.required' => 'Minimum quantity is required',
            'maximum_quantity.required' => 'Maximum quantity is required',
            'total_product_number.required' => 'Total product number is required',
            'has_features.required' => 'Has feature is required'
        ]);
        return $validator;
    }
}
