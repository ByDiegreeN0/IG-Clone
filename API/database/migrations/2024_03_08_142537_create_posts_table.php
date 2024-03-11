<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id('post_id');
            
            $table->string('post_img');
            $table->string('post_img_2')->nullable();
            $table->string('post_img_3')->nullable();
            $table->string('post_img_4')->nullable();
            $table->string('post_img_5')->nullable();

            $table->string('post_description');
            $table->integer('post_likes');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};