<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link_section extends Model
{
    use HasFactory;

    /*return $this->belongsToMany(
    RelatedModel, 
    pivot_table_name, 
    foreign_key_of_current_model_in_pivot_table, 
    foreign_key_of_other_model_in_pivot_table);
    */
	public function pages(){
        return $this->belongsToMany(Page::class,'link_sections_pages','section_id','page_id');
    }
}
