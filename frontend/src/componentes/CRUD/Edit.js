import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../App";
import { MenuAdmin } from "../menus/Menus";
import "../../index.css";

export function ETrabajo() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}/trabajo/${id}`, {
      nombre: nombre,
      descripcion: descripcion,
    });
    navigate("/ShowTra");
  };

  useEffect(() => {
    const getTrabajoById = async () => {
      const response = await axios.get(`${endpoint}/trabajo/${id}`);
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
    };
    getTrabajoById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MenuAdmin />
      <div className="body ce">
        <h3>Edit Trabajo</h3>
        <form onSubmit={update}>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Descripcion</label>
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export function ETarea() {
  const [id_trabajo, setTrabajo] = useState();
  const [id_empleado, setEmpleado] = useState();
  const [id_articulo, setArticulo] = useState();
  const [unidades, setUnidades] = useState();
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [trabajos, setTrabajos] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [empleados, setEmpleados] = useState([]);

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}/tarea/${id}`, {
      id_trabajo: id_trabajo,
      id_empleado: id_empleado,
      id_articulo: id_articulo,
      unidades: unidades,
      descripcion: descripcion,
    });
    navigate("/ShowTar");
  };

  useEffect(() => {
    const getTareaById = async () => {
      const response = await axios.get(`${endpoint}/tarea/${id}`);
      setTrabajo(response.data.id_trabajo);
      setEmpleado(response.data.id_empleado);
      setArticulo(response.data.id_articulo);
      setUnidades(response.data.unidades);
      setDescripcion(response.data.descripcion);
      getAll();
    };
    const getAll = async () => {
      const response = await axios.get(`${endpoint}/articulos`);
      const response2 = await axios.get(`${endpoint}/trabajos`);
      const response3 = await axios.get(`${endpoint}/empleados`);
      setArticulos(response.data);
      setTrabajos(response2.data);
      setEmpleados(response3.data);
    };
    getTareaById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MenuAdmin />
      <div className="body ce">
        <h3>Crear Tarea</h3>
        <form onSubmit={update}>
          <div className="mb-3">
            <label>Trabajo</label>
            <select
              value={id_trabajo}
              onChange={(e) => {
                setTrabajo(e.target.value);
              }}
              className="input"
            >
              {trabajos.map((trabajo) => (
                <option value={`${trabajo.id}`}>{trabajo.nombre}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label>Empleado</label>
            <select
              value={id_empleado}
              onChange={(e) => {
                setEmpleado(e.target.value);
              }}
              className="input"
            >
              {empleados.map((empleado) => (
                <option value={`${empleado.id}`}>{empleado.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label>Articulo</label>
            <select
              value={id_articulo}
              onChange={(e) => {
                setArticulo(e.target.value);
              }}
              className="input"
            >
              {articulos.map((articulo) => (
                <option value={`${articulo.id}`}>{articulo.nombre}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label>Unidades</label>
            <input
              value={unidades}
              onChange={(e) => setUnidades(e.target.value)}
              type="number"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Descripcion</label>
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}



export function EArticulo() {
  const [nombre, setNombre] = useState("");
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}/articulo/${id}`, {
      nombre: nombre,
      talla: talla,
      color: color,
      precio: precio,
      descripcion: descripcion,
    });
    navigate("/ShowAr");
  };
  useEffect(() => {
    const getArticuloById = async () => {
      const response = await axios.get(`${endpoint}/articulo/${id}`);
      setNombre(response.data.nombre);
      setTalla(response.data.talla);
      setColor(response.data.color);
      setPrecio(response.data.precio);
      setDescripcion(response.data.descripcion);
    };
    getArticuloById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MenuAdmin />
      <div className="body ce">
        <h3>Edit Articulo</h3>
        <form onSubmit={update}>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Talla</label>
            <input
              value={talla}
              onChange={(e) => setTalla(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Color</label>
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Precio</label>
            <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="number"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Descripcion</label>
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}
