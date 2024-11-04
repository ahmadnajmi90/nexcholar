<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'certification_name',
        'institution',
        'year',
        'academician_id',
    ];

    public function academician()
    {
        return $this->belongsTo(Academician::class);
    }
}
