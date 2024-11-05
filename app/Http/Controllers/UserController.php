<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        // Check if the user is an admin
        if (Auth::user()->user_type !== 'admin') {
            return redirect('/')->with('error', 'You do not have admin access.');
        }

        // Fetch users if the user is an admin
        $users = User::paginate(10);

        return Inertia::render('Admin/Users', [
            'users' => $users,
        ])->with('layout', 'AdminLayout'); // Ensure the layout is consistent
    }

    public function loadUsers(){

           // Check if the authenticated user has an 'admin' role
    $user = auth()->user();
    if ($user->user_type !== 'admin') {
        // Redirect non-admin users to the dashboard or any other page with an error message
        return redirect('/dashboard')->with('error', 'You do not have permission to access this page.');
    }

    // Proceed if the user is an admin
    $users = User::all();

    return Inertia::render('Users/Users', [
        'user' => $user,
        'users' => $users,
    ])->with('layout', 'UserLayout'); // Ensure the layout is consistent

    }

}
