<?php

namespace App\Http\Controllers;

use App\Models\post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
   
    public function index()
    {
        $posts = post::take(20)->get();
        return response()->json($posts);
    }

   
    public function store(Request $request)
    {
        
    }

   
    public function show(post $post)
    {
        
    }

       public function update(Request $request, post $post)
    {
       
    }

 
    public function destroy(post $post)
    {
       
    }
}
