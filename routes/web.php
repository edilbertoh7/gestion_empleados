<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard',[UserController::class, 'index'])->name('dashboard');
    Route::get('NewUser',[UserController::class, 'create'])->name('users.create');
    Route::get('User/{id}',[UserController::class, 'show'])->name('users.show');
    Route::post('NewUser',[UserController::class, 'store'])->name('users.create');
    Route::get('UserEdit/{id}/edit',[UserController::class, 'edit'])->name('users.edit');
    Route::put('User/{id}',[UserController::class, 'update'])->name('users.update');
    Route::get('Users/{id}',[UserController::class, 'destroy'])->name('users.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/departments',[UserController::class, 'index'])->name('departments');
    Route::get('NewDepartmnet',[DepartmentController::class, 'create'])->name('departments.create');
    Route::get('Department/{id}',[DepartmentController::class, 'show'])->name('departments.show');
    Route::post('NewDepartmnet',[DepartmentController::class, 'store'])->name('departments.create');
    Route::get('DepartmentEdit/{id}/edit',[DepartmentController::class, 'edit'])->name('departments.edit');
    Route::put('department/{id}',[DepartmentController::class, 'update'])->name('departments.update');
    Route::get('departments/{id}',[DepartmentController::class, 'destroy'])->name('departments.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
