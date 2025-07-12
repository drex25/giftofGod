<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoomSeeder::class,
        ]);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@hostelbooking.com',
            'role' => 'admin',
        ]);

        User::factory()->create([
            'name' => 'Cliente Test',
            'email' => 'cliente@test.com',
            'role' => 'customer',
        ]);
    }
}
