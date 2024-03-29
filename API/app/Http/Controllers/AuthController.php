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

            return response()->json(['token' => $token], 2000);
        }

    }
    
    public function register(Request $request){

        $validateData = $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'realName' => 'required|string|max:255',
            'userName' => 'required|string|max:255',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'email' =>   $validateData['email'],
            'realName' =>  $validateData['realName'],
            'userName' =>  $validateData['userName'],
            'password' =>   Hash::make($validateData['password_hash']),
        ]);

        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json(['token' => $token], 201);
    }


}
