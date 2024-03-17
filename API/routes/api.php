<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/login',  [App\Http\Controllers\AuthController::class, 'login']);
Route::get('/register',  [App\Http\Controllers\AuthController::class, 'register']);