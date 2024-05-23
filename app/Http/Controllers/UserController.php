<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        //consulto todos los usuarios  activos del sistema expecto el admin
        $users = User::where('id', '<>', 1)->where('active', 1)->get();
        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }

    public function show($id, $success = null)
    {
        //consullto al usuario por si id para mostrarlo en la vista
        $user = User::find($id);
        return Inertia::render('Users/Show', [
            'user' => $user,
            'success' => $success
        ]);
    }
    public function create()
    {
        //el atributo action es para saber si es para crear o actualizar
        //el atributo btn permite cambiar el nombre del boton dinamicamente
        return Inertia::render('Users/Create', [
            'action' => 'create',
            'btn' => 'Registrar',

        ]);
    }

    public function store(Request $request)
    {
        // valido que todos los campos vegan correctamente
        $request->validate([
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone' => 'required|string|max:50',
            'document_type' => 'required',
            'document_number' => 'required',
            'birth_date' => 'required',
            'gender' => 'required',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        // hago la creacion del usuario
        User::create($request->all());
        return redirect()->route('dashboard');
    }

    public function edit($id)
    {
        // consulto los datos del usuario que quiero editar y paso los datos a la vista
        $user = User::find($id);
        return Inertia::render('Users/Edit', [
            'user' => $user,
            'edit' => true,
            'btn' => 'Actualizar',
            'id' => $id
        ]);
    }
    public function update(Request $request, $id)
    { // valido que todos los campos vega correctamente
        $request->validate([
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone' => 'required|string|max:50',
            'document_type' => 'required',
            'document_number' => 'required',
            'birth_date' => 'required',
            'gender' => 'required',
            'email' => 'required|string|lowercase|email|max:255|',

        ]);

        $user = User::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'last_name' => $request->last_name,
            'address' => $request->address,
            'phone' => $request->phone,
            'document_type' => $request->document_type,
            'document_number' => $request->document_number,
            'birth_date' => $request->birth_date,
            'gender' => $request->gender,
            'email' => $request->email,
        ]);
        // return redirect()->route('dashboard');
        return $this->show($id, 'Usuario actualizado correctamente');
    }

    public function destroy($id)
    {
        // dd($id);
        $user = User::find($id);
        $user->update(['active' => 0]);
        return redirect()->route('dashboard');
    }
}
