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
        // Schema::create('education_history', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('academician_id')->constrained()->onDelete('cascade');
        //     $table->string('degree_type');
        //     $table->string('institution');
        //     $table->integer('year_of_graduation');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education_history');
    }
};
