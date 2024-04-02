<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


use App\Models\User;



class AuthController extends Controller
{

    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt($request->only('email', 'password'))){

            $user = $request->user();
            $token = $user->createToken('token-name')->plainTextToken;

            return response()->json(['token' => $token], 200);
        }

    }
    
    public function register(Request $request){

        $validateData = $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'email' =>   $validateData['email'],
            'name' =>  $validateData['name'],
            'username' =>  $validateData['username'],
            'password' =>   Hash::make($validateData['password']),
        ]);

        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json(['token' => $token], 201);
    }


}
