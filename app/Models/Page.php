<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    /*return $this->belongsToMany(
    RelatedModel, 
    pivot_table_name, 
    foreign_key_of_current_model_in_pivot_table, 
    foreign_key_of_other_model_in_pivot_table);
    */
	public function sections(){
		return $this->belongsToMany(Link_section::class,'link_sections_pages','page_id','section_id');
	}
}
