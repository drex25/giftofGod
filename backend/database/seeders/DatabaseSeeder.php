<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Room;
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
            RolesAndPermissionsSeeder::class,
        ]);

        // Create sample rooms
        $rooms = [
            [
                'name' => 'Habitación Individual',
                'type' => 'single',
                'description' => 'Habitación individual con baño privado, wifi gratuito y desayuno incluido.',
                'capacity' => 1,
                'base_price' => 25.00,
                'images' => ['room1.jpg', 'room1-2.jpg'],
                'amenities' => ['WiFi', 'Baño privado', 'TV', 'Aire acondicionado'],
                'is_active' => true,
            ],
            [
                'name' => 'Habitación Doble',
                'type' => 'double',
                'description' => 'Habitación doble con dos camas individuales, baño privado y vista a la ciudad.',
                'capacity' => 2,
                'base_price' => 35.00,
                'images' => ['room2.jpg', 'room2-2.jpg'],
                'amenities' => ['WiFi', 'Baño privado', 'TV', 'Aire acondicionado', 'Vista ciudad'],
                'is_active' => true,
            ],
            [
                'name' => 'Dormitorio Compartido',
                'type' => 'dormitory',
                'description' => 'Dormitorio compartido con 6 camas, ideal para mochileros y viajeros con presupuesto.',
                'capacity' => 6,
                'base_price' => 15.00,
                'images' => ['dorm1.jpg', 'dorm1-2.jpg'],
                'amenities' => ['WiFi', 'Baños compartidos', 'Lockers', 'Cocina común'],
                'is_active' => true,
            ],
            [
                'name' => 'Suite Privada',
                'type' => 'suite',
                'description' => 'Suite privada con cama king, baño de lujo, terraza privada y desayuno gourmet.',
                'capacity' => 2,
                'base_price' => 80.00,
                'images' => ['suite1.jpg', 'suite1-2.jpg'],
                'amenities' => ['WiFi', 'Baño de lujo', 'TV 4K', 'Aire acondicionado', 'Terraza privada', 'Desayuno gourmet'],
                'is_active' => true,
            ],
        ];

        foreach ($rooms as $roomData) {
            Room::create($roomData);
        }
    }
}
