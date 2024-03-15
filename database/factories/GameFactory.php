<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->name(),
            "image" => $this->faker->imageUrl(2080, 1040),
            "genre_id" => $this->faker->numberBetween(1, 9),
        ];
    }
}
