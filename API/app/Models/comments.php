<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comments extends Model
{
    use HasFactory;

    protected $primaryKey = 'comment_id';


    public function users(){
        return $this->belongsTo(User::class);
    }
}
