<?php

namespace Database\Factories;

use App\Models\Platform;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Platform>
 */
class PlatformFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement(['pc', 'playstation', 'xbox', 'nintendo', 'mac', 'linux', 'android', 'ios', 'web']),
            "game_id" => $this->faker->numberBetween(1, 9),
        ];
    }
}
