<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    /*return $this->belongsToMany(
	RelatedModel, 
	pivot_table_name, 
	foreign_key_of_current_model_in_pivot_table, 
	foreign_key_of_other_model_in_pivot_table);
	*/
	public function sub_categories(){
		return $this->belongsToMany(Sub_category::class,'categories_sub_categories','category_id','sub_category_id');
	}
}
