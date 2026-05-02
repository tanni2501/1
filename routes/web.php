<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;



Route::get('/projects', [ProjectController::class, 'index']);
Route::inertia('/', 'welcome')->name('home');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');