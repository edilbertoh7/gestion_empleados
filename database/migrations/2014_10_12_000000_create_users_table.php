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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('address');
            $table->string('phone');
            $table->string('gender');
            $table->string('document_type');
            $table->string('document_number')->unique();
            $table->string('birth_date');
            $table->boolean('active')->default(1);
            $table->unsignedBigInteger('department')->nullable();
            $table->rememberToken();
            $table->timestamps();
            
            $table->foreign('document_type')->references('document_type')->on('document_types');
            $table->foreign('gender')->references('gender_type')->on('gender');
            $table->foreign('department')->references('id')->on('departments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
