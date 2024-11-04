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
        // Schema::create('awards', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('academician_id')->constrained('academicians')->onDelete('cascade');
        //     $table->string('award_name');
        //     $table->string('organization');
        //     $table->year('year');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('awards');
    }
};
