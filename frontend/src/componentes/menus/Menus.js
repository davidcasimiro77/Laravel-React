import React from "react";
import "./menus.css";
// import logo from "../CU_LOGO.png";

export function MenuAdmin() {
  return (
    <div class="topnav">
      <a href="/Inicio">Inicio</a>
      <a href="/ShowTar">Tareas</a>
      <a href="/ShowEm">Empleados</a>
      <a href="/ShowTra">Trabajos</a>
      <a href="/ShowAr">Articulos</a>
      <a href="/Inicio">Help</a>
      <a href="/">Cerrar sesión</a>
      <a href="http://localhost:5488/templates/rkJTnK2ce">Generar reporte de tareas</a>
    </div>
  );
}

// export function MenuAdmin() {
//   return (
//     <div class="topnav">
//       <a href="/Inicio">Inicio</a>
//       <a href="/listado">Listado</a>
//       <a>Help</a>
//       <a href="/">Cerrar sesión</a>
//     </div>
//   );
// }
