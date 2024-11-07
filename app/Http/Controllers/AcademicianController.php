<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Academician;

class AcademicianController extends Controller
{
    public function editP()
    {
        $academician = auth()->user();
        return Inertia::render('Academician/EditProfile', [
            'academician' => $academician,
        ]);
    }

    public function updateP(Request $request)
    {
        $academician = auth()->user();

        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            // Add validation rules for other fields
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
