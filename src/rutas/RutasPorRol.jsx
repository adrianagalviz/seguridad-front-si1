import { Navigate, Outlet } from "react-router-dom";
import { rutasSistema } from "../configuracion/rutasSistema";
import { usarAutenticacion } from "../contexto/ContextoAutenticacion";
import { puedeAcceder } from "../utilidades/validarPermisos";

function RutasPorRol({ rolesPermitidos = [], permiso, modulo }) {
  const { rol, permisos } = usarAutenticacion();
  const accesoPermitido = puedeAcceder({
    rol,
    permisos,
    rolesPermitidos,
    permiso,
    modulo,
  });

  if (!accesoPermitido) {
    return <Navigate replace to={rutasSistema.noAutorizado} />;
  }

  return <Outlet />;
}

export default RutasPorRol;
