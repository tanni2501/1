<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ComponentController;
use Illuminate\Support\Facades\Route;


Route::get('/components', [ComponentController::class, 'index'])->name('components.index');
Route::post('/components', [ComponentController::class, 'store'])->name('components.store');
Route::get('/projects', [ProjectController::class, 'index']);
Route::inertia('/', 'welcome')->name('home');
