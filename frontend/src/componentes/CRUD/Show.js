import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { endpoint } from "../../App";
import { MenuAdmin } from "../menus/Menus";

export function SArticulos() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    getAllArticulos();
  }, []);

  const getAllArticulos = async () => {
    const response = await axios.get(`${endpoint}/articulos`);
    setArticulos(response.data);
  };

  const deleteArticulo = async (id) => {
    await axios.delete(`${endpoint}/articulo/${id}`);
    getAllArticulos();
  };
  return (
    <div className="body">
      <MenuAdmin />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Talla</th>
            <th>Color</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.nombre}</td>
              <td>{articulo.talla}</td>
              <td>{articulo.color}</td>
              <td>{articulo.precio}</td>
              <td>{articulo.descripcion}</td>
              <td>
                <Link to={`/editAr/${articulo.id}`} className="btn btn-warning">
                  Editar
                </Link>
                <button
                  onClick={() => deleteArticulo(articulo.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <Link to="/createAr" className="button">
          Crear nuevo articulo
        </Link>
      </div>
    </div>
  );
}

export function STareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    getAllTareas();
  }, []);

  const getAllTareas = async () => {
    const response = await axios.get(`${endpoint}/tareas`);
    setTareas(response.data);
  };

  const deleteTarea = async (id) => {
    await axios.delete(`${endpoint}/tarea/${id}`);
    getAllTareas();
  };
  return (
    <div className="body">
      <MenuAdmin />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Trabajo</th>
            <th>User</th>
            <th>Articulo</th>
            <th>Unidades</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td>{tarea.trabajo.nombre}</td>
              <td>{tarea.empleado.name}</td>
              <td>{tarea.articulo.nombre}</td>
              <td>{tarea.unidades}</td>
              <td>{tarea.descripcion}</td>
              <td>
                <Link to={`/editTar/${tarea.id}`} className="btn btn-warning">
                  Editar
                </Link>
                <button
                  onClick={() => deleteTarea(tarea.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <Link to="/createTar" className="button">
          Crear nueva tarea
        </Link>
      </div>
    </div>
  );
}

export function SEmpleados() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/empleados`);
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${endpoint}/empleado/${id}`);
    getAllUsers();
  };
  return (
    <div className="body">
      <MenuAdmin />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Puesto</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.puesto}</td>
              <td>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <Link to="/createEm" className="button">
          Crear nuevo empleado
        </Link>
      </div>
    </div>
  );
}

export function STrabajos() {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    getAllTrabajos();
  }, []);

  const getAllTrabajos = async () => {
    const response = await axios.get(`${endpoint}/trabajos`);
    setTrabajos(response.data);
  };

  const deleteTrabajo = async (id) => {
    await axios.delete(`${endpoint}/trabajo/${id}`);
    getAllTrabajos();
  };
  return (
    <div className="body">
      <MenuAdmin />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {trabajos.map((trabajo) => (
            <tr key={trabajo.id}>
              <td>{trabajo.nombre}</td>
              <td>{trabajo.descripcion}</td>
              <td>
                <Link to={`/editTra/${trabajo.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  onClick={() => deleteTrabajo(trabajo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <Link to="/createTra" className="button">
          Crear nuevo trabajo
        </Link>
      </div>
    </div>
  );
}
