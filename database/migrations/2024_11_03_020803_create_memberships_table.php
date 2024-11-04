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
        // Schema::create('memberships', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('academician_id')->constrained('academicians')->onDelete('cascade');
        //     $table->string('organization_name');
        //     $table->string('membership_type')->nullable(); // e.g., Lifetime, Annual
        //     $table->year('joined_year')->nullable();
        //     $table->timestamps();
        // });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memberships');
    }
};
