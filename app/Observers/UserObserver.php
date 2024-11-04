<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Academician;
use Illuminate\Support\Str; // Add this line


class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        Academician::create([
            'user_id' => $user->id,
            'academician_id' => 'ACAD-' . Str::random(8), // Generate a unique academician_id
            'email' => $user->email,
            'full_name' => $user->name,
            // Additional fields if necessary
        ]);
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        //
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
