<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Edilberto',
            'last_name' => 'Herrera',
            'email' => 'edilbertoh7@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'Calle 1 # 2 - 3',
            'phone' => '123456789',
            'gender'=>'Masculino',
            'document_type'=>'CC',
            'document_number' => '12345678',
            'birth_date' => '1980-14-11'
        ]);
        User::create([
            'name' => 'administrador',
            'last_name' => 'del sistema',
            'email' => 'admin@admin.com',
            'password' => bcrypt('administrador'),
            'address' => 'Calle 1 # 4 - 5',
            'phone' => '123456789',
            'gender'=>'Masculino',
            'document_type'=>'CC',
            'document_number' => '123456789',
            'birth_date' => '1990-01-01'
        ]);
    }
}
