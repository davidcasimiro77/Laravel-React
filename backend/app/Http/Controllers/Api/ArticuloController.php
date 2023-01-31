<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;

class ArticuloController extends Controller
{
    public function index()
    {
        $articulo = Articulo::all();
        return $articulo;
    }

    public function store(Request $request)
    {
        $articulo = new Articulo();
        $articulo->nombre = $request->nombre;
        $articulo->talla = $request->talla;
        $articulo->color = $request->color;
        $articulo->precio = $request->precio;
        $articulo->descripcion = $request->descripcion;

        $articulo->save();
    }
    public function show($id)
    {
        $articulo = Articulo::find($id);
        return $articulo;
    }
    public function update(Request $request, $id)
    {
        $articulo = Articulo::findOrFail($request->id);
        $articulo->nombre = $request->nombre;
        $articulo->talla = $request->talla;
        $articulo->color = $request->color;
        $articulo->precio = $request->precio;
        $articulo->descripcion = $request->descripcion;

        $articulo->save();
        return $articulo;
    }
    public function destroy($id)
    {
        $articulo = Articulo::destroy($id);
        return $articulo;
    }
}
