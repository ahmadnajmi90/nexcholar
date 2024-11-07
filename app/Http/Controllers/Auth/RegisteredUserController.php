<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        //dd($request->all());

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_type' => 'required|string',  // Updated to match database column
            'university' => 'nullable|string|required_if:user_type,PhD Student,Academician',
            'gov_agency' => 'nullable|string|required_if:user_type,Government Agency', // Updated to match database column
        ]);

            // Generate unique_key only for academicians
    $unique_id = null;
    if ($request->user_type === 'Academician') {
        $unique_id = 'ACAD-' . Str::random(8);
    }


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => $request->user_type, // Updated to match database column
            'university' => $request->university,
            'gov_agency' => $request->gov_agency, // Updated to match database column
            'unique_id' => $unique_id,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', [], false));
    }
}
