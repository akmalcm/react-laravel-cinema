<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'movie_time_id',
        'package',
        'total'
    ];

    // returns the instance of movie time
    public function movie_time() {
        return $this->belongsTo(MovieTime::class, 'movie_time_id');
    }

    // return the instance of user
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
