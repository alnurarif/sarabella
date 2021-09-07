<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{path?}/{path2?}/{path3?}/{path4?}', function () {
    return view('app');
});

Route::get('/pa/ra/ka/ma/sa0', function () {
    // $output = [];
    // \Artisan::call('dump-autoload', $output);
    // dd($output);
    var_dump(public_path());
        var_dump(env('APP_URL'));
        var_dump(base_path());
        exit;
});
Route::get('/pa/ra/ka/ma/sa1', function () {
    $output = [];
    \Artisan::call('cache:clear', $output);
    dd($output);
});
Route::get('/pa/ra/ka/ma/sa2', function () {
    $output = [];
    \Artisan::call('config:clear', $output);
    dd($output);
});
Route::get('/pa/ra/ka/ma/sa3', function () {
    $output = [];
    \Artisan::call('config:cache', $output);
    dd($output);
});