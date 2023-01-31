<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'talla', 'color', 'precio', 'stock', 'descripcion'];

    public function tareas()
    {
        return $this->hasMany('App\Models\Tarea', 'id_articulo', 'id');
    }
}
