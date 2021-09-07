<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSampleImageToProductsColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products_colors', function (Blueprint $table) {
            $table->string('sample_image')->nullable()->after('has_free_sample'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products_colors', function (Blueprint $table) {
            $table->dropColumn('sample_image');
        });
    }
}
