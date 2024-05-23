<?php

namespace Tests\Feature;

use App\Models\Department;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class UserControllerTest extends TestCase
{

    use RefreshDatabase;

    /** @test */
        public function puede_obtener_todos_los_usuarios(): void
        {
            $admin = $this->addUsers();
    // crear un par de usuarios activos
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
                'department'=>5,
                'active' => true,
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
                'department'=>2,
                'active' => true,
            ]);
    //crear dos usuarios inactivos
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
                'department'=>4,
                'active' => false,
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
                'department'=>4,

            ]);

            // Simular una solicitud GET a la ruta '/dashboard'
            $this->actingAs($admin);
            $response = $this->get('/dashboard');

            // Verificar que la respuesta tenga el código de estado 200 (OK)
            $response->assertStatus(200);
           
        }

    /** @test */
    public function puede_obtener_un_usuario_por_su_id()
    {
        $user = $this->addUsers();
            $this->actingAs($user);
        // Simular una solicitud GET a la ruta '/User/{id}'
        $response = $this->get('/User/' . $user->id);

        // compruebo que la respuesta tenga el código de estado 200 (OK)
        $response->assertStatus(200);
        
    }

    /** @test */
public function puede_obtener_la_vista_de_edicion_de_un_usuario()
{
    $user = $this->addUsers();

    $this->actingAs($user);
    // Simular una solicitud GET a la ruta '/usuarios/{id}/edit'
    $response = $this->get("UserEdit/{$user->id}/edit");

    // compruebo el codigo de respuesta de estado 200 (OK)
    $response->assertStatus(200);

}

/** @test */
public function puede_actualizar_los_datos_de_un_usuario()
{
    $user = $this->addUsers();

    $this->actingAs($user);
    // Simular una solicitud PUT a la ruta '/usuarios/{id}'
    $response = $this->put("User/{$user->id}", [
        'name' => 'Nuevo nombre',
        'last_name' => 'Nuevo apellido',
        'email' => 'nuevo@nuevo.com',
        'address' => 'Calle 2 # 5 - 6',
        'phone' => '987654321',
        'gender' => 'F',
        'document_type' => 'CE',
        'document_number' => '987654321',
        'birth_date' => '1995-01-01',
        'department' => 1,
        
    ]);

    $response->assertStatus(200);
    // Verificar que la respuesta redireccione a la ruta 'dashboard' después de actualizar
    

    // compruebo que los datos del usuario se hayan actualizado correctamente en la base de datos
    $this->assertDatabaseHas('users', [
        'id' => $user->id,
        'name' => 'Nuevo nombre',
        // Verifica otros campos actualizados aquí
    ]);
}

/** @test */
public function puede_inactivar_un_usuario()
{
    $user = $this->addUsers();

    $this->actingAs($user);
    // Simular una solicitud DELETE a la ruta '/usuarios/{id}'
    $response = $this->get("Users/{$user->id}");

    // Verificar que la respuesta redireccione a la ruta 'dashboard' después de inactivar el usuario
    $response->assertRedirect(route('dashboard'));

    // Verificar que el usuario se haya inactivado correctamente en la base de datos
    $this->assertDatabaseHas('users', [
        'id' => $user->id,
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
