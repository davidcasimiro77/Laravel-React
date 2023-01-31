<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_trabajo');
            $table->foreign('id_trabajo')
                ->references('id')
                ->on('trabajos')
                ->onUpdate('cascade');
            $table->unsignedBigInteger('id_empleado');
            $table->foreign('id_empleado')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade');
            $table->unsignedBigInteger('id_articulo');
            $table->foreign('id_articulo')
                ->references('id')
                ->on('articulos')
                ->onUpdate('cascade');
            $table->integer('unidades');
            $table->string('descripcion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tareas');
    }
};
