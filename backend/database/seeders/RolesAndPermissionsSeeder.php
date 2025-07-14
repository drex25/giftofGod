<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        $permissions = [
            // Reservations
            'view reservations',
            'create reservations',
            'edit reservations',
            'delete reservations',
            'cancel reservations',
            
            // Rooms
            'view rooms',
            'create rooms',
            'edit rooms',
            'delete rooms',
            'manage room availability',
            
            // Users
            'view users',
            'create users',
            'edit users',
            'delete users',
            
            // Payments
            'view payments',
            'manage payments',
            'refund payments',
            
            // Admin
            'access admin panel',
            'view statistics',
            'manage settings',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Create roles and assign permissions
        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo(Permission::all());

        $customerRole = Role::create(['name' => 'customer']);
        $customerRole->givePermissionTo([
            'view reservations',
            'create reservations',
            'cancel reservations',
            'view rooms',
        ]);

        // Create admin user
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@hostel.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);
        $admin->assignRole('admin');

        // Create sample customer
        $customer = User::create([
            'name' => 'John Doe',
            'email' => 'customer@example.com',
            'password' => Hash::make('password'),
            'role' => 'customer',
        ]);
        $customer->assignRole('customer');
    }
}
