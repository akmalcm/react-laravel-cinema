<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hall extends Model
{
    use HasFactory;

    protected $fillable = [
        'no',
    ];

    // returns the instance of movie
    public function seats() {
        return $this->hasMany(Seat::class, 'hall_id');
    }
}
