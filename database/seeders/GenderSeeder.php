<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('gender')->insert([
            'gender_type'=>'M',
            'name' => 'Masculino',
        ]);

        DB::table('gender')->insert([
            'gender_type'=>'F',
            'name' => 'Femenino',
        ]);

        DB::table('gender')->insert([
            'gender_type'=>'O',
            'name' => 'Otro',
        ]);
        
    }
}
