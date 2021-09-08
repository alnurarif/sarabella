<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->string('promotional_code')->default(null)->nullable();
            $table->text('special_instruction')->default(null)->nullable();
            $table->unsignedDecimal('subtotal')->default(0)->nullable();
            $table->unsignedDecimal('total')->default(0)->nullable();
            $table->unsignedDecimal('total_off')->default(0)->nullable();
            $table->unsignedDecimal('total_warrenty')->default(0)->nullable();
            $table->longText('checkout_info')->default('')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
