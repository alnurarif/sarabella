<?php

namespace App\Http\Controllers\API;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\repositories\OrderRepository;
use App\repositories\OrderDetailRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Models\Color;
use App\Models\Order;
use App\Models\Order_detail;
class OrdersController extends Controller
{
    public $orderRepository,$orderDetailRepository;

    public function __construct(OrderRepository $orderRepository, OrderDetailRepository $orderDetailRepository){
        $this->orderRepository = $orderRepository;
        $this->orderDetailRepository = $orderDetailRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $colors = $this->orderRepository->getAll();
        return response()->json([
            'success'   =>  true,
            'message'   =>  'Color List',
            'data'      =>  $colors
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
               
        $order = $this->orderRepository->create($request);

        foreach($formData['products_in_cart'] as $product){
            $order_detail = new Order_detail;
            $order_detail->order_id = $order->id;
            $order_detail->customer_id = $request->customer_id;
            $order_detail->product_id = $product['id'];
            $order_detail->details = json_encode($product);
            $order_detail->save();
        }


        return response()->json([
            'success'   =>  true,
            'message'   =>  'Order Stored',
            'data'   =>  $formData,
            'order_id'   =>  $order->id,
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
        $color = $this->orderRepository->findById($id);
        if (is_null($color)) {
            return response()->json([
                'success' => false,
                'message' => 'Color not found',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Color found',
            'data'    => $color
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
        $color = $this->orderRepository->findById($id);
        if (is_null($color)) {
            return response()->json([
                'success' => false,
                'message' => 'Color Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name'  =>  'required|max:100',
            'image'  =>  'required',
            'is_active'  =>  'required'
        ],
        [
            'name.required' => 'Color name is required',
            'name.max' => 'Name must be between 1000 characters',
            'image.required' => 'Image is required',
            'is_active.required' => 'Status is required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag(),
                'data' => null
            ]);
        }

        $file_path = public_path("/uploads/colors/".$color->image); // app_path("public/test.txt");
        if(File::exists($file_path)) File::delete($file_path);

        $img = Image::make($request->image);
        // Resize
        $img->resize(250, 250);
        $image_64 = $request->image; //your base64 encoded data
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
        // find substring fro replace here eg: data:image/png;base64,
        $image = str_replace($replace, '', $image_64); 
        $image = str_replace(' ', '+', $image); 
        $request->image = $imageName = md5(rand(11111, 99999)) . '_' . time() .'.'.$extension;
        // Storage::disk('public')->put('color/'.$imageName, base64_decode($image));
        Storage::disk('public_upload_directory')->put("colors/".$imageName, $img->stream(),'public');

        $color = $this->orderRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Color Updated',
            'data'    => $color
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
        $color = $this->orderRepository->findById($id);
        if (is_null($color)) {
            return response()->json([
                'success' => false,
                'message' => 'Color Not found',
                'data' => null,
            ]);
        }
        $file_path = public_path("/uploads/colors/".$color->image); // app_path("public/test.txt");
        if(File::exists($file_path)) File::delete($file_path);
        $color = $this->orderRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Color Deleted',
            'data'    => $color
        ]);
    }
}
