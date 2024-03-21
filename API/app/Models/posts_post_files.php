<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class posts_post_files extends Model
{
    use HasFactory;

    public function posts(){
        return $this->belongsTo(post::class);
    }

    public function post_files(){
        return $this->belongsTo(postFiles::class);
    }
}
