<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        //consulto todos los uaurios del sistema
        $users = User::all();
        return Inertia::render('Users/Index',[
            'users' => $users
        ]);
    }
}
