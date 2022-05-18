<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_time_id');
            //$table->unsignedBigInteger('user_id');
            //$table->unsignedBigInteger('seat_id');
            $table->string('IC',14);
            $table->string('package',10);
            $table->decimal('total');
            $table->timestamps();
            
            $table->foreign('movie_time_id')
            ->references('id')->on('movie_times')
            ->onDelete('restrict');

            /* $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('restrict');
            
            $table->foreign('seat_id')
            ->references('id')->on('seats')
            ->onDelete('restrict');
            */
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
};
