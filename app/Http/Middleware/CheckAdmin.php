<?php

// app/Http/Middleware/CheckAdmin.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckAdmin
{
    public function handle($request, Closure $next)
    {
        if (auth()->user()->user_type !== 'admin') {
            return redirect('/dashboard')->with('error', 'Access denied.');
        }

        return $next($request);
    }
}
