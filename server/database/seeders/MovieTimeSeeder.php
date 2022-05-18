<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\MovieTime;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieTimeSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        foreach (Movie::all() as $movie) {
            $i = random_int(0, 2);
            MovieTime::factory()->count(2)->create(['movie_id' => $movie->id]);
        }
    }
}
