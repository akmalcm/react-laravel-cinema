<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        if (Movie::all()->first() == null) {
            $csvData = fopen(base_path('database/movies.csv'), 'r');
            $transRow = true;
            while (($data = fgetcsv($csvData, 555, ',')) !== false) {
                if (!$transRow) {
                    Movie::create([
                        'title' => $data['0'],
                        'description' => $data['1'],
                        'length' => $data['2'],
                        'genre' => $data['3'],
                        'mpaa_rating' => $data['4'],
                        'poster' => $data['5'],
                        'price' => random_int(10,12)
                    ]);
                }
                $transRow = false;
            }
            fclose($csvData);
        }
    }
}
