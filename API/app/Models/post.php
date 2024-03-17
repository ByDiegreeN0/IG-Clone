<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    use HasFactory;

    protected $primaryKey = "post_id";

    protected $fillable = [
        'post_img', 'post_img_2', 'post_img_3', 'post_img_4', 'post_img_5', 'post_description', 'post_likes',
    ];

    public function users(){
        return $this->belongsTo(User::class);
    }
}
