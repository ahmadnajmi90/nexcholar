<?php

namespace App\Observers;

use App\Models\Academician;

class AcademicianObserver
{
    /**
     * Handle the Academician "created" event.
     */
    public function created(Academician $academician): void
    {
       // $academician->academician_id = 'ACAD-' . Str::random(8);
    }

    /**
     * Handle the Academician "updated" event.
     */
    public function updated(Academician $academician): void
    {
        //
    }

    /**
     * Handle the Academician "deleted" event.
     */
    public function deleted(Academician $academician): void
    {
        //
    }

    /**
     * Handle the Academician "restored" event.
     */
    public function restored(Academician $academician): void
    {
        //
    }

    /**
     * Handle the Academician "force deleted" event.
     */
    public function forceDeleted(Academician $academician): void
    {
        //
    }
}
