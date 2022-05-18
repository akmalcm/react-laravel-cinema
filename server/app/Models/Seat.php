<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'no',
    ];

     // returns the instance of movie
     public function hall() {
        return $this->belongsTo(Hall::class, 'hall_id');
    }
}
