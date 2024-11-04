<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_title',
        'description',
        'role',
        'start_date',
        'end_date',
        'academician_id',
    ];

    public function academician()
    {
        return $this->belongsTo(Academician::class);
    }
}
