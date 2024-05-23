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
            'name' => 'administrador',
            'last_name' => 'del sistema',
            'email' => 'admin@admin.com',
            'password' => bcrypt('administrador'),
            'address' => 'Calle 1 # 4 - 5',
            'phone' => '123456789',
            'gender'=>'M',
            'document_type'=>'CC',
            'document_number' => '123456789',
            'birth_date' => '1990-01-01',
            'department'=>2
        ]);

        User::create([
            'name' => 'Edilberto',
            'last_name' => 'Herrera',
            'email' => 'edilbertoh7@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'Calle 1 # 2 - 3',
            'phone' => '123456789',
            'gender'=>'M',
            'document_type'=>'CC',
            'document_number' => '12345678',
            'birth_date' => '1980-14-11',
            'department'=>5
        ]);
       
        User::create([
            'name' => 'Rodrigo',
            'last_name' => 'Obregon',
            'email' => 'rodrigoob@gmail.gmail.com',
            'password' => bcrypt('invitado'),
            'address' => 'Calle 1 # 4 - 5',
            'phone' => '123456789',
            'gender'=>'M',
            'document_type'=>'CC',
            'document_number' => '123456781',
            'birth_date' => '1990-01-01',
            'department'=>2
        ]);

        User::create([
            'name' => 'Liliana',   
            'last_name' => 'Espinosa',
            'email' => 'liliana@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'Calle 10 # 20 - 3',
            'phone' => '123456789',
            'gender'=>'F',
            'document_type'=>'CC',
            'document_number' => '123456782',
            'birth_date' => '1990-01-01',
            'department'=>4
        ]);

        User::create([
            'name' => 'Luis',   
            'last_name' => 'Lopez',
            'email' => 'luis@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'Calle 21 # 20 - 3',
            'phone' => '123456789',
            'gender'=>'M',
            'document_type'=>'CC',
            'document_number' => '123456783',   
            'birth_date' => '1990-01-01',
            'department'=>4
        ]);

        User::create([
            'name' => 'Sandra',   
            'last_name' => 'Lopez',
            'email' => 'sandra@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'Calle 42 # 20 - 3',
            'phone' => '123456789',
            'gender'=>'F',
            'document_type'=>'CC',
            'document_number' => '123456784',
            'birth_date' => '1990-01-01',
            'department'=>1
        ]);

        User::create([
            'name' => 'Camila',   
            'last_name' => 'Mejia',
            'email' => 'camila@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'carrera 43 # 20 - 3',
            'phone' => '123456789',
            'gender'=>'F',
            'document_type'=>'CC',
            'document_number' => '123456785',
            'birth_date' => '1990-01-01',
            'department'=>3
        ]);
        User::create([
            'name' => 'Carlos',   
            'last_name' => 'Hernandez',
            'email' => 'carlos@gmail.com',
            'password' => bcrypt('12345678'),
            'address' => 'Calle 1 # 4 - 5',
            'phone' => '123456789',
            'gender'=>'M',
            'document_type'=>'CC',
            'document_number' => '123456786',
            'birth_date' => '1990-01-01',
            'department'=>3

        ]);
    }
}
