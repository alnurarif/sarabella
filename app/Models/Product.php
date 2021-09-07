<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /*return $this->belongsToMany(
	RelatedModel, 
	pivot_table_name, 
	foreign_key_of_current_model_in_pivot_table, 
	foreign_key_of_other_model_in_pivot_table);
	*/
	public function colors(){
		return $this->belongsToMany(Color::class,'products_colors','product_id','color_id')->withPivot('sample_image','has_free_sample');
	}
	public function warrenty_options(){
		return $this->hasMany(Product_warrenty_option::class);
	}
	public function images(){
		return $this->hasMany(Product_image::class);
	}
	public function sub_category(){
		return $this->belongsTo(Sub_category::class);
	}
}
