<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmpleadoController extends Controller
{
    public function index()
    {
        $user = User::all();
        return $user;
    }
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->puesto = $request->puesto;

        $user->save();
        return $user;
    }
    public function destroy($id)
    {
        $user = User::destroy($id);
        return $user;
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'puesto' => 'required'
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->puesto = $request->puesto;

        $user->save();

        return response()->json([
            "status" => 1,
            "msg" => "Alta de usuario"
        ]);
    }



    public function userProfile()
    {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil",
            "data" => auth()->user()
        ]);
    }
}
