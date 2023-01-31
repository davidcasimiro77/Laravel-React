<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tarea;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    public function index()
    {
        $tarea = Tarea::all();
        return $tarea;
    }

    public function store(Request $request)
    {
        $tarea = new Tarea();
        $tarea->id_trabajo = $request->id_trabajo;
        $tarea->id_empleado = $request->id_empleado;
        $tarea->id_articulo = $request->id_articulo;
        $tarea->unidades = $request->unidades;
        $tarea->descripcion = $request->descripcion;

        $tarea->save();
    }
    public function show($id)
    {
        $tarea = Tarea::find($id);
        return $tarea;
    }
    public function update(Request $request, $id)
    {
        $tarea = Tarea::findOrFail($request->id);
        $tarea->id_trabajo = $request->id_trabajo;
        $tarea->id_empleado = $request->id_empleado;
        $tarea->id_articulo = $request->id_articulo;
        $tarea->unidades = $request->unidades;
        $tarea->descripcion = $request->descripcion;

        $tarea->save();
        return $tarea;
    }
    public function destroy($id)
    {
        $tarea = Tarea::destroy($id);
        return $tarea;
    }
    public function tarea_json()
    {
        $tareas = Tarea::all();
        $data = ['tareas' => $tareas];
        return response()->json($data, 200, []);
    }
}
