<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieTime extends Model
{
    use HasFactory;

    protected $fillable = [
        'movie_id',
        'date',
        'time',
    ];

    // returns the instance of movie
    public function movie() {
        return $this->belongsTo(Movie::class, 'movie_id');
    }

    // return purchase
    public function bookings() {
        return $this->hasMany(Booking::class, 'movie_time_id');
    }
}
