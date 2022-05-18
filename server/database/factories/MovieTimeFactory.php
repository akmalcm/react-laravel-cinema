<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MovieTime>
 */
class MovieTimeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $datetime = $this->faker->dateTimeBetween('+0 days', '+1 month');
        return [
            'date' => $datetime->format('Y-m-d'),
            'time' => $datetime->format('H:i:s'),
        ];
    }
}
