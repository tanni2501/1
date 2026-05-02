<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Первинний ключ
            $table->string('name'); // Строкове поле
            $table->text('description')->nullable(); // Текстове поле (необов'язкове)
            $table->decimal('price', 8, 2); // Числове поле для ціни
            $table->timestamps(); // Часові мітки (created_at, updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
