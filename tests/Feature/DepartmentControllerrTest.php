<?php

namespace Tests\Feature;

use App\Models\Department;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class DepartmentControllerrTest extends TestCase
{

    use RefreshDatabase;
    /** @test */
    public function puede_obtener_todos_los_departamentos_activos()
    {
        // Crear algunos departamentos activos
        $departamentosActivos = Department::factory()->count(3)->create(['active' => true]);

        // Crear algunos departamentos inactivos (no deben ser incluidos)
        Department::factory()->count(2)->create(['active' => false]);
        
        $user = $this->addUsers();

            $this->actingAs($user);
        // Simular una solicitud GET a la ruta '/departamentos'
        $response = $this->get('departments');

        // Verificar que la respuesta tenga el código de estado 200 (OK)
        $response->assertStatus(200);

    }

    /** @test */
    public function puede_obtener_un_departamento_por_su_id()
    {
        // Crear un departamento
        $department = Department::factory()->create();
        $user = $this->addUsers();

        $this->actingAs($user);
        // Simular una solicitud GET a la ruta '/departamentos/{id}'
        $response = $this->get("Department/{$department->id}");

        // Verificar que la respuesta tenga el código de estado 200 (OK)
        $response->assertStatus(200);
    }

    /** @test */
    public function puede_crearse_un_nuevo_departamento()
    {

        $user = $this->addUsers();

        $this->actingAs($user);
        // Simular una solicitud POST a la ruta '/departamentos'
        $response = $this->post('NewDepartmnet', [
            'name' => 'Nuevo departamento',
            'description' => 'Descripción del nuevo departamento',
        ]);

        // Verificar que la respuesta redireccione a la ruta 'departments' después de crear el departamento
        $response->assertRedirect(route('departments'));

        // Verificar que el departamento se haya creado correctamente en la base de datos
        $this->assertDatabaseHas('departments', [
            'name' => 'Nuevo departamento',
            'description' => 'Descripción del nuevo departamento',
        ]);
    }

      /** @test */
      public function puede_editarse_un_departamento()
      {
          // Crear un departamento
          $department = Department::factory()->create();
          $user = $this->addUsers();

          $this->actingAs($user);
          // Simular una solicitud GET a la ruta '/department/{id}/edit'
          $response = $this->get("DepartmentEdit/{$department->id}/edit");
  
          // Verificar que la respuesta tenga el código de estado 200 (OK)
          $response->assertStatus(200);
  
      }

       /** @test */
    public function puede_actualizarse_un_departamento()
    {
        // Crear un departamento
        $departamento = Department::factory()->create();
        $user = $this->addUsers();

        $this->actingAs($user);
        // Simular una solicitud PUT a la ruta '/departamentos/{id}'
        $response = $this->put("department/{$departamento->id}", [
            'name' => 'Nuevo nombre de departamento',
            'description' => 'Nueva descripción de departamento',
        ]);

        // Verificar que los datos del departamento se hayan actualizado correctamente en la base de datos
        $this->assertDatabaseHas('departments', [
            'id' => $departamento->id,
            'name' => 'Nuevo nombre de departamento',
            'description' => 'Nueva descripción de departamento',
        ]);
    }

    /** @test */
    public function puede_inactivarse_un_departamento()
    {
        // Crear un departamento
        $departamento = Department::factory()->create();

        $user = $this->addUsers();

        $this->actingAs($user);
        // Simular una solicitud DELETE a la ruta '/departamentos/{id}'
        $response = $this->get("departments/{$departamento->id}");

        // Verificar que la respuesta redireccione a la ruta 'departments' después de inactivar el departamento
        $response->assertRedirect(route('departments'));

        // Verificar que el departamento se haya inactivado correctamente en la base de datos
        $this->assertDatabaseHas('departments', [
            'id' => $departamento->id,
            'active' => false,
        ]);
    }
  








    public function addUsers(){
        DB::table('document_types')->insert([

            ['document_type' => 'CC', 'document_name' => 'CEDULA DE CIUDADANIA',],
            ['document_type' => 'CE', 'document_name' => 'CEDULA DE EXTRANJERIA',],
            ['document_type' => 'PA', 'document_name' => 'PASAPORTE',],
        ]);
        // creacion de los generos
        DB::table('gender')->insert([
            'gender_type' => 'M',
            'name' => 'Femenino',
        ]);
        DB::table('gender')->insert([
            'gender_type' => 'F',
            'name' => 'Femenino',
        ]);
        //creo un departamento
        $department = Department::create([
            'name' => 'Servicio al cliente',
            'description' => 'Encargado de la atención al cliente.',
        ]);
        // Crear un usuario
        $user = User::create([
                'id' => 1,
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
                'department'=>1,
                'active' => true,
            ]);
            return $user;
    }
}
