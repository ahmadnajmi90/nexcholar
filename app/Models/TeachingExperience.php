<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachingExperience extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_name',
        'semester',
        'course_description',
        'academician_id',
    ];

    public function academician()
    {
        return $this->belongsTo(Academician::class);
    }
}
