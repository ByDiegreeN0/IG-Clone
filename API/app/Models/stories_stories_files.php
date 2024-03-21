<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stories_stories_files extends Model
{
    use HasFactory;

    public function stories(){
        return $this->belongsTo(stories::class);
    }

    public function stories_files(){
        return $this->belongsTo(storiesFiles::class);

    }
}
