import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SArticulos,
  SEmpleados,
  STareas,
  STrabajos,
} from "./componentes/CRUD/Show";
import {
  CArticulo,
  CEmpleado,
  CTarea,
  CTrabajo,
} from "./componentes/CRUD/Create";
import {
  EArticulo,
  ETarea,
  ETrabajo,
} from "./componentes/CRUD/Edit";

import { Login } from "./componentes/formularios/Forms";
import Inicio from "./componentes/Inicio";
import ListaTareas from "./componentes/ListaTareas";

export const endpoint = "http://" + window.location.hostname + ":8000/api";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/listado" element={<ListaTareas />} />
          <Route path="/showAr" element={<SArticulos />} />
          <Route path="/createAr" element={<CArticulo />} />
          <Route path="/editAr/:id" element={<EArticulo />} />
          <Route path="/showEm" element={<SEmpleados />} />
          <Route path="/createEm" element={<CEmpleado />} />
          <Route path="/showTar" element={<STareas />} />
          <Route path="/createTar" element={<CTarea />} />
          <Route path="/editTar/:id" element={<ETarea />} />
          <Route path="/showTra" element={<STrabajos />} />
          <Route path="/createTra" element={<CTrabajo />} />
          <Route path="/editTra/:id" element={<ETrabajo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
