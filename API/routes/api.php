<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('user/login',  [App\Http\Controllers\AuthController::class, 'login']);
Route::post('user/register',  [App\Http\Controllers\AuthController::class, 'register']);