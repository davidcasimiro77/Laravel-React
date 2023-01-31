import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../App";
import { MenuAdmin } from "../menus/Menus";
import "../../index.css";

const register = "http://" + window.location.hostname + ":8000/api/register";

export function CArticulo() {
  const [nombre, setNombre] = useState("");
  const [talla, setTalla] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint + "/articulo", {
      nombre: nombre,
      talla: talla,
      color: color,
      precio: precio,
      descripcion: descripcion,
    });
    navigate("/showAr");
  };

  return (
    <>
      <MenuAdmin />{" "}
      <div className="body ce">
        <h3>Crear Articulo</h3>
        <form onSubmit={store}>
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

export function CEmpleado() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");
  const [puesto, setPuesto] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(register, {
      name: name,
      email: email,
      password: password,
      confirm_password: confirm_password,
      puesto: puesto,
    });
    navigate("/showEm");
  };

  return (
    <>
      <MenuAdmin />
      <div className="body ce">
        <h3>Crear Empleado</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Confirm password</label>
            <input
              value={confirm_password}
              onChange={(e) => setConfirm(e.target.value)}
              type="text"
              className="input"
            />
          </div>
          <div className="mb-3">
            <label>Puesto</label>
            <select
              value={puesto}
              onChange={(e) => {
                setPuesto(e.target.value);
              }}
              type="text"
              className="input"
            >
              <option value="" />
              <option value="Empleado">Empleado</option>
              <option value="Encargado">Encargado</option>
            </select>
          </div>
          <button type="submit" className="button">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export function CTarea() {
  const [id_trabajo, setTrabajo] = useState();
  const [id_empleado, setEmpleado] = useState();
  const [id_articulo, setArticulo] = useState();
  const [unidades, setUnidades] = useState();
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const [trabajos, setTrabajos] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [empleados, setEmpleados] = useState([]);

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint + "/tarea", {
      id_trabajo: id_trabajo,
      id_empleado: id_empleado,
      id_articulo: id_articulo,
      unidades: unidades,
      descripcion: descripcion,
    });
    navigate("/showTar");
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await axios.get(`${endpoint}/articulos`);
    const response2 = await axios.get(`${endpoint}/trabajos`);
    const response3 = await axios.get(`${endpoint}/empleados`);
    setArticulos(response.data);
    setTrabajos(response2.data);
    setEmpleados(response3.data);
  };

  return (
    <>
      <MenuAdmin />
      <div className="body ce">
        <h3>Crear Tarea</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label>Trabajo</label>
            <select
              value={id_trabajo}
              onChange={(e) => {
                setTrabajo(e.target.value);
              }}
              className="input"
            >
              <option value="" />
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
              <option value="" />
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
              <option value="" />
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

export function CTrabajo() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint + "/trabajo", {
      nombre: nombre,
      descripcion: descripcion,
    });
    navigate("/showTra");
  };

  return (
    <>
      <MenuAdmin />
      <div className="body ce">
        <h3>Crear Trabajo</h3>
        <form onSubmit={store}>
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
