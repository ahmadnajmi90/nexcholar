<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_name',
        'membership_type',
        'joined_year',
        'academician_id',
    ];

    public function academician()
    {
        return $this->belongsTo(Academician::class);
    }
}
