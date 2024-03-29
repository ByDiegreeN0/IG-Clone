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
        Schema::create('stories_stories_files', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('stories_id');
            $table->unsignedBigInteger('stories_files_id');
            $table->timestamps();

            $table->foreign('stories_id')->references('id')->on('stories');
            $table->foreign('stories_files_id')->references('id')->on('stories_files');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stories_stories_files');
    }
};
