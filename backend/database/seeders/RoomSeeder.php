<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $rooms = [
            [
                'name' => 'Habitación Individual Económica',
                'type' => 'single',
                'description' => 'Habitación individual perfecta para viajeros solos. Incluye cama individual, escritorio y armario. Ideal para estancias cortas.',
                'capacity' => 1,
                'base_price' => 25.00,
                'images' => [
                    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
                    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
                ],
                'amenities' => ['wifi', 'escritorio', 'armario', 'ventana'],
                'is_active' => true,
            ],
            [
                'name' => 'Habitación Doble Estándar',
                'type' => 'double',
                'description' => 'Habitación doble con dos camas individuales o una cama matrimonial. Perfecta para parejas o amigos que viajan juntos.',
                'capacity' => 2,
                'base_price' => 40.00,
                'images' => [
                    'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
                    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
                ],
                'amenities' => ['wifi', 'tv', 'aire_acondicionado', 'baño_privado'],
                'is_active' => true,
            ],
            [
                'name' => 'Habitación Triple Familiar',
                'type' => 'triple',
                'description' => 'Habitación espaciosa para tres personas. Incluye una cama matrimonial y una individual. Ideal para familias pequeñas.',
                'capacity' => 3,
                'base_price' => 55.00,
                'images' => [
                    'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
                    'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg'
                ],
                'amenities' => ['wifi', 'tv', 'aire_acondicionado', 'baño_privado', 'minibar'],
                'is_active' => true,
            ],
            [
                'name' => 'Dormitorio Compartido - 6 Camas',
                'type' => 'dormitory',
                'description' => 'Dormitorio compartido con 6 camas tipo litera. Perfecto para viajeros con presupuesto ajustado que buscan conocer gente.',
                'capacity' => 6,
                'base_price' => 15.00,
                'images' => [
                    'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg',
                    'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg'
                ],
                'amenities' => ['wifi', 'lockers', 'baño_compartido', 'area_comun'],
                'is_active' => true,
            ],
            [
                'name' => 'Dormitorio Compartido - 4 Camas',
                'type' => 'dormitory',
                'description' => 'Dormitorio más íntimo con solo 4 camas. Ofrece más privacidad que los dormitorios grandes pero mantiene el ambiente social.',
                'capacity' => 4,
                'base_price' => 20.00,
                'images' => [
                    'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg',
                    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
                ],
                'amenities' => ['wifi', 'lockers', 'baño_compartido', 'area_comun', 'cortinas_privacidad'],
                'is_active' => true,
            ],
            [
                'name' => 'Suite Premium',
                'type' => 'suite',
                'description' => 'Nuestra habitación más lujosa con sala de estar separada, baño privado con bañera y balcón con vista a la ciudad.',
                'capacity' => 2,
                'base_price' => 80.00,
                'images' => [
                    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
                    'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg'
                ],
                'amenities' => ['wifi', 'tv', 'aire_acondicionado', 'baño_privado', 'minibar', 'balcon', 'sala_estar'],
                'is_active' => true,
            ],
        ];

        foreach ($rooms as $roomData) {
            Room::create($roomData);
        }
    }
}