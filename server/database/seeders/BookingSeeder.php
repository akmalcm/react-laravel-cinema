<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\Booking;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BookingSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $arr1 = array('None', 'Combo', 'Couple');
        $arr2 = array(0.00, 5.50, 10.00);

        foreach (Movie::all() as $movie) {
            $i = random_int(0, 2);
            Booking::factory()->count(2)->create(['movie_id' => $movie->id, 'package' => $arr1[$i], 'total' => $movie->price + $arr2[$i]]);
        }
    }
}
