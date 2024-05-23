<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('document_types')->insert([
            ['document_type' => 'CC', 'document_name' => 'CEDULA DE CIUDADANIA',],
            ['document_type' => 'CE', 'document_name' => 'CEDULA DE EXTRANJERIA',],
            ['document_type' => 'PA', 'document_name' => 'PASAPORTE',],
        ]);
    }
}
