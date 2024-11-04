<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Academician;

class AcademicianController extends Controller
{
    public function edit()
    {

        // $user = auth()->user();
        // $academician = Academician::where('user_id', $user->id)->firstOrFail();

        $academician = auth()->user(); // Assuming the user is an academician
        return Inertia::render('Academician/EditProfile', [
            'academician' => $academician,
        ]);
    }

    public function update(Request $request)
    {
        $academician = auth()->user();

        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            // Add other validation rules here
        ]);

        // Update fields
        $academician->update($request->only([
            'full_name',
            'email',
            'phone_number',
            'profile_picture',
            'current_position',
            'department',
            'university',
            'highest_degree',
            'field_of_study',
            'research_interests',
            'ongoing_research',
            'website',
            'linkedin',
            'google_scholar',
            'researchgate',
            'orcid',
            'bio',
            'availability_for_collaboration',
            'availability_as_supervisor',
        ]));

        return redirect()->back()->with('message', 'Profile updated successfully.');
    }
}
