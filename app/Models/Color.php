<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    /*return $this->belongsToMany(
    RelatedModel, 
    pivot_table_name, 
    foreign_key_of_current_model_in_pivot_table, 
    foreign_key_of_other_model_in_pivot_table);
    */
	public function products(){
		return $this->belongsToMany(Product::class,'products_colors','color_id','product_id');
	}
}
