<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_comments extends Model
{
    use HasFactory;


    public function users(){
        return $this->belongsTo(User::class);
    }

    public function comments(){
        return $this->belongsTo(comments::class);
    }
}
