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
        // Schema::create('projects', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('academician_id'); // Reference to academicians.academician_id
        //     $table->foreign('academician_id')->references('academician_id')->on('academicians');
        //     $table->string('project_title');
        //     $table->text('description')->nullable();
        //     $table->string('role')->nullable(); // e.g., Principal Investigator
        //     $table->date('start_date')->nullable();
        //     $table->date('end_date')->nullable();
        //     $table->timestamps();
        // });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
