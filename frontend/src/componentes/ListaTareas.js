import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { endpoint } from "../App";
import { MenuAdmin } from "../componentes/menus/Menus";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    getAllTareas();
  }, []);

  const getAllTareas = async () => {
    const response = await axios.get(`${endpoint}/tareas`);
    setTareas(response.data);
  };

  return (
    <>
      <MenuAdmin />
      <div className="body">
        <table className="table">
          <thead>
            <tr>
              <th colSpan={5}>Lista de tareas</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <tr className="elemento" key={tarea.id}>
                <td>Trabajo: {tarea.trabajo.nombre}</td>
                <td>Empleado: {tarea.empleado.name}</td>
                <td>Artículo: {tarea.articulo.nombre}</td>
                <td>Unidades: {tarea.unidades}</td>
                <td>Descripción: {tarea.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaTareas;
