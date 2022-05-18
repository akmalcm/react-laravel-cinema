<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'poster',
        'genre',
        'length',
        'price',
        'mpaa_rating',
    ];

    // return movie times
    public function movie_times() {
        return $this->hasMany(MovieTime::class, 'movie_id');
    }
}
