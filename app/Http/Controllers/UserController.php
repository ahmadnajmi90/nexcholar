<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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

    public function loadEditForm($user_id){

        $user = auth()->user();
        $userDetails = User::find($user_id);

      return Inertia::render('Users/EditForm', [
        'user' => $user,
        'userDetails' => $userDetails, // Pass the user details to the view
    ])->with('layout', 'UserLayout'); // Ensure the layout is consistent
      }


    public function updateUser(Request $request, $user_id)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        // Find the user by ID and update their details
        $user = User::find($user_id);

        if ($user) {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            return redirect()->route('users.index')->with('success', 'User details updated successfully.');
        }

        return redirect()->route('users.index')->with('error', 'User not found.');
    }

    public function deleteUser($user_id)
    {
        // Find the user by ID and delete them
        $user = User::find($user_id);

        if ($user) {
            $user->delete();

            return redirect()->route('users.index')->with('success', 'User deleted successfully.');
        }

        return redirect()->route('users.index')->with('error', 'User not found.');
    }


}
