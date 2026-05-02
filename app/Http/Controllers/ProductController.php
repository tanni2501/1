<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Виведення списку
    public function index()
    {
        $products = Product::latest()->get(); // Отримуємо всі товари, нові зверху

        return Inertia::render('Products/Index', [
            'products' => $products
        ]);
    }

    // Збереження нового запису
    public function store(Request $request)
    {
        // Серверна валідація
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
        ]);

        // Збереження через Eloquent
        Product::create($validated);

        // Редирект назад (Inertia автоматично оновить дані на клієнті без перезавантаження)
        return redirect()->back();
    }
}