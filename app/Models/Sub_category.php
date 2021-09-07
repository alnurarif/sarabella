<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sub_category extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'sub_categories';

    public function categories(){
		return $this->belongsToMany(Category::class,'categories_sub_categories','sub_category_id','category_id');
	}
	public function products(){
		return $this->hasMany(Product::class,'sub_category')->with('images')->with('colors');
	}
}
