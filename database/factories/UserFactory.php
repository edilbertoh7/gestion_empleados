<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'gender' => fake()->randomElement(['M', 'F']),
            'document_type' => fake()->randomElement(['CC', 'PA', 'CE']),
            'document_number' => fake()->randomNumber(8, true),
            'birth_date' => $this->faker->date('Y-m-d', '2003-01-01'),
            'department' => $this->faker->numberBetween(1, 10),
            'active' => $this->faker->boolean(90),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
