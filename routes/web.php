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
        Route::get('/edit/user/{user_id}', [UserController::class, 'loadEditForm'])->name('users.edit');
        Route::post('/update/user/{user_id}', [UserController::class, 'updateUser'])->name('users.update');
        Route::get('/delete/user/{user_id}', [UserController::class, 'deleteUser'])->name('users.delete');

    });
});



Route::middleware(['auth'])->group(function () {
    Route::get('/academician/editP', [AcademicianController::class, 'editP'])->name('academician.editP');
    Route::post('/academician/updateP', [AcademicianController::class, 'updateP'])->name('academician.updateP');
});

//route


//Route::get('/users', [UserController::class, 'loadUsers'])->name('users.index')->middleware('admin');


require __DIR__.'/auth.php';
