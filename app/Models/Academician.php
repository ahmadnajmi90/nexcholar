<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Academician extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'academician_id',
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
        'verified',
        'availability_for_collaboration',
        'availability_as_supervisor',
    ];

    // Define relationships
    public function teachingExperience()
    {
        return $this->hasMany(TeachingExperience::class);
    }

    public function certifications()
    {
        return $this->hasMany(Certification::class);
    }

    public function memberships()
    {
        return $this->hasMany(Membership::class);
    }

    public function awards()
    {
        return $this->hasMany(Award::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function grants()
    {
        return $this->hasMany(Grant::class);
    }
}
