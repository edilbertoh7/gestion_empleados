<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('departments')->insert([
            'name'=>'Ventas',
            'description' => 'Encargado de las ventas de la empresa.',
        ]);

        DB::table('departments')->insert([
            'name'=>'Compras',
            'description' => 'Encargado de las compras de la empresa.',
        ]);
        DB::table('departments')->insert([
            'name'=>'Recursos Humanos',
            'description' => 'Encargado de gestionar el personal de la empresa.',
        ]);

        DB::table('departments')->insert([
            'name'=>'Contabilidad', 
            'description' => 'Encargado de la contabilidad de la empresa.',
        ]);
        DB::table('departments')->insert([
            'name'=>'Tecnologia',
            'description' => 'Encargado del desarrollo y mantenimiento de sistemas informaticos.',
        ]);
        DB::table('departments')->insert([
            'name'=>'Servicio al cliente',
            'description' => 'Encargado de la atención al cliente.',
        ]);
    }
}
