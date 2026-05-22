import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { rutasPrivadasSistema, rutasSistema } from "../configuracion/rutasSistema";
import PaginaLogin from "../modulos/autenticacion/paginas/PaginaLogin";
import PaginaRecuperarContrasena from "../modulos/autenticacion/paginas/PaginaRecuperarContrasena";
import PaginaDashboard from "../modulos/dashboard/paginas/PaginaDashboard";
import PaginaNoAutorizado from "./paginas/PaginaNoAutorizado";
import PaginaPendienteModulo from "./paginas/PaginaPendienteModulo";
import RutasPorRol from "./RutasPorRol";
import RutasPrivadas from "./RutasPrivadas";
import RutasPublicas from "./RutasPublicas";

function obtenerPaginaPrivada(modulo) {
  if (modulo === "dashboard") {
    return <PaginaDashboard />;
  }

  return <PaginaPendienteModulo modulo={modulo} />;
}

function ProveedorRutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RutasPublicas />}>
          <Route element={<PaginaLogin />} path={rutasSistema.login} />
          <Route
            element={<PaginaRecuperarContrasena />}
            path={rutasSistema.recuperarContrasena}
          />
        </Route>

        <Route element={<RutasPrivadas />}>
          {rutasPrivadasSistema.map((rutaPrivada) => (
            <Route
              element={
                <RutasPorRol
                  modulo={rutaPrivada.modulo}
                  rolesPermitidos={rutaPrivada.rolesPermitidos}
                />
              }
              key={rutaPrivada.ruta}
            >
              <Route
                element={obtenerPaginaPrivada(rutaPrivada.modulo)}
                path={rutaPrivada.ruta}
              />
            </Route>
          ))}
          <Route element={<PaginaNoAutorizado />} path={rutasSistema.noAutorizado} />
        </Route>

        <Route element={<Navigate replace to={rutasSistema.dashboard} />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default ProveedorRutas;
