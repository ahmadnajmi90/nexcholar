<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Award extends Model
{
    use HasFactory;

    protected $fillable = [
        'award_name',
        'organization',
        'year',
        'academician_id',
    ];

    public function academician()
    {
        return $this->belongsTo(Academician::class);
    }
}
