<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory;
    protected $fillable = ['id_trabajo', 'id_empleado', 'id_articulo', 'unidades', 'descripcion'];

    protected $with = ['trabajo', 'empleado', 'articulo'];

    public function trabajo()
    {
        return $this->belongsTo('App\Models\Trabajo', 'id_trabajo', 'id');
    }
    public function empleado()
    {
        return $this->belongsTo('App\Models\User', 'id_empleado', 'id');
    }
    public function articulo()
    {
        return $this->belongsTo('App\Models\Articulo', 'id_articulo', 'id');
    }
}
