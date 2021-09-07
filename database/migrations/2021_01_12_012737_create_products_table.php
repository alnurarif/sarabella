<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
            $table->unsignedInteger('main_category');
            $table->unsignedInteger('sub_category');
            $table->unsignedDecimal('unit_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('selling_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('offer_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->string('offer_price_type',10)->default('%');
            $table->unsignedTinyInteger('sample_available');
            $table->text('short_description')->nullable();
            $table->text('short_features')->nullable();
            $table->string('mount_type_inside',1);
            $table->string('mount_type_outside',1);
            $table->unsignedInteger('width_inch');
            $table->unsignedDecimal('width_8ths', $precision = 3, $scale = 2)->default(0);
            $table->unsignedInteger('height_inch');
            $table->unsignedDecimal('height_8ths', $precision = 3, $scale = 2)->default(0);
            $table->unsignedInteger('minimum_quantity');
            $table->unsignedInteger('maximum_quantity');
            $table->unsignedInteger('total_product_number');
            $table->unsignedTinyInteger('has_features');
            $table->text('product_info_description')->nullable();
            $table->text('product_info_features')->nullable();
            $table->text('product_info_options')->nullable();
            $table->text('product_info_motorizations')->nullable();
            $table->text('product_info_recommendations')->nullable();
            $table->text('specification_widths')->nullable();
            $table->text('specification_heights')->nullable();
            $table->text('specification_min_inside_mount_depths')->nullable();
            $table->text('specification_min_flush_mount_depths')->nullable();
            $table->text('specification_headrail_dimensions')->nullable();
            $table->text('specification_min_outside_mount_spaces')->nullable();
            $table->text('specification_min_flush_inside_mount_depths')->nullable();
            $table->text('specification_min_outside_mount_depths')->nullable();
            $table->text('shipping_and_production')->nullable();
            $table->text('shipping_policy')->nullable();
            $table->text('shipping_policy_note')->nullable();
            $table->unsignedTinyInteger('is_cordless_lift_active')->default(0);
            $table->unsignedTinyInteger('is_continuous_loop_active')->default(0);
            $table->unsignedTinyInteger('is_motorization_active')->default(0);
            $table->unsignedDecimal('cordless_lift_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('ccl_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('motorization_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedTinyInteger('is_ccl_lift_chain_location_active')->default(0);
            $table->unsignedTinyInteger('is_ccl_type_of_chain_active')->default(0);
            $table->text('ccl_chain_type_and_price')->nullable();
            $table->unsignedTinyInteger('is_motorization_remote_control_active')->default(0);
            $table->unsignedDecimal('motorization_remote_control_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedTinyInteger('is_motorization_wifi_active')->default(0);
            $table->unsignedDecimal('motorization_wifi_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedTinyInteger('is_standard_roll_active')->default(0);
            $table->unsignedTinyInteger('is_reverse_roll_active')->default(0);
            $table->unsignedDecimal('standard_roll_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('reverse_roll_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedTinyInteger('is_exposed_roll_active')->default(0);
            $table->unsignedTinyInteger('is_cassette_roll_active')->default(0);
            $table->unsignedDecimal('exposed_roll_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('cassette_roll_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedTinyInteger('is_plain_hem_active')->default(0);
            $table->unsignedTinyInteger('is_wave_hem_active')->default(0);
            $table->unsignedTinyInteger('is_scallop_hem_active')->default(0);
            $table->unsignedTinyInteger('is_rounded_hem_active')->default(0);
            $table->unsignedDecimal('plain_hem_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('wave_hem_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('scallop_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->unsignedDecimal('rounded_hem_price', $precision = 10, $scale = 2)->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
