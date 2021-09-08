<?php

use App\Http\Controllers\API\SubCategoriesController;
use App\Http\Controllers\API\CategoriesController;
use App\Http\Controllers\API\SectionsController;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\ColorsController;
use App\Http\Controllers\API\OrdersController;
use App\Http\Controllers\API\PagesController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\models\Category;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/categories', function(){
// 	return Category::get();
// });

Route::apiResource('/categories', CategoriesController::class); 
Route::get('/sub_categories/get_by_slug/{slug}', [SubCategoriesController::class, 'getBySlug']); 
Route::apiResource('/sub_categories', SubCategoriesController::class); 
Route::apiResource('/colors', ColorsController::class); 
Route::apiResource('/products', ProductsController::class); 
Route::apiResource('/sections', SectionsController::class); 
Route::apiResource('/pages', PagesController::class); 
Route::apiResource('/orders', OrdersController::class); 
Route::get('/pages/get_by_slug/{slug}', [PagesController::class, 'getBySlug']); 