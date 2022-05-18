<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('movie_times', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->date('date');
            $table->time('time');
            $table->timestamps();

            $table->foreign('movie_id')
            ->references('id')->on('movies')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('movie_times');
    }
};
