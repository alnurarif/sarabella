<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_warrenty_option extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_warrenty_options';

    public $timestamps = false;

    public function product(){
		return $this->belongsTo(Product::class);
	}
}
