<?php

// web.php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckAdmin;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AcademicianController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin-specific routes
    Route::middleware([CheckAdmin::class])->group(function () {
        Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
        Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users');
        Route::get('/admin/settings', [AdminController::class, 'settings'])->name('admin.settings');
        Route::get('/users', [UserController::class, 'loadUsers'])->name('users.index');
    });
});



Route::middleware(['auth'])->group(function () {
    Route::get('/academician/edit', [AcademicianController::class, 'edit'])->name('academician.edit');
    Route::post('/academician/update', [AcademicianController::class, 'update'])->name('academician.update');
});

//route


//Route::get('/users', [UserController::class, 'loadUsers'])->name('users.index')->middleware('admin');


require __DIR__.'/auth.php';
