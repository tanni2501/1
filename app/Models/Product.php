<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Вказуємо, які поля дозволено заповнювати масово
    protected $fillable = [
        'name',
        'description',
        'price',
    ];
}