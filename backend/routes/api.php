<?php

use App\Http\Controllers\Api\ArticuloController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\EmpleadoController;
use App\Http\Controllers\Api\TrabajoController;
use App\Http\Controllers\Api\TareaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ArticuloController::class)->group(function () {
    Route::get('/articulos', 'index');
    Route::post('/articulo', 'store');
    Route::get('/articulo/{id}', 'show');
    Route::put('/articulo/{id}', 'update');
    Route::delete('/articulo/{id}', 'destroy');
});;

Route::controller(EmpleadoController::class)->group(function () {
    Route::get('/empleados', 'index');
    Route::get('/empleado/{id}', 'show');
    Route::put('/empleado/{id}', 'update');
    Route::delete('/empleado/{id}', 'destroy');
});;

Route::controller(TrabajoController::class)->group(function () {
    Route::get('/trabajos', 'index');
    Route::post('/trabajo', 'store');
    Route::get('/trabajo/{id}', 'show');
    Route::put('/trabajo/{id}', 'update');
    Route::delete('/trabajo/{id}', 'destroy');
});;

Route::controller(TareaController::class)->group(function () {
    Route::get('/tareas', 'index');
    Route::post('/tarea', 'store');
    Route::get('/tarea/{id}', 'show');
    Route::put('/tarea/{id}', 'update');
    Route::delete('/tarea/{id}', 'destroy');
    Route::get('/tareajson', 'tarea_json');
});;

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
