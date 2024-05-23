<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    public function index()
    {
        //consulto todos los departamentos
        $departments = Department::where('active', 1)->get();
        return Inertia::render('Departments/Index',[
            'departments' => $departments
        ]);
    }
    public function show($id, $success = null)
    {
        $department = Department::find($id);
        return Inertia::render('Departments/Show',[
            'department' => $department,
            'success' => $success
        ]);
    }

    public function create(){
        return Inertia::render('Departments/Create',[
            'action' => 'create',
            'btn' => 'Registrar',
        ]);
    }

    public function store(Request $request){

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        Department::create($request->all());
        return redirect()->route('departments');

    }
    
    public function edit($id){
        $department = Department::find($id);
        return Inertia::render('Departments/Edit',[
            'department' => $department,
            'id' => $id,
            'edit' => true,
            'btn' => 'Actualizar',
        ]);
    }
    public function update(Request $request, $id){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);
        $department = Department::findOrFail($id);
        // $department->update($request->all());
        $department->update(['name' => $request->name, 'description' => $request->description]);
        
        return $this->show($id, 'Departamento actualizado correctamente');
    }
    public function destroy($id){
        $department = Department::find($id);
        $department->update(['active' => 0]);
        return redirect()->route('departments');
    }
}
