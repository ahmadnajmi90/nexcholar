<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'ahmadnajmi.an@utm.my', // Replace with your desired admin email
            'password' => Hash::make('HEnshIN'), // Replace with a secure password
            'user_type' => 'Admin', // Ensure 'Admin' is a valid value in your application
            'university' => null,
            'gov_agency' => null,
        ]);
    }
}
