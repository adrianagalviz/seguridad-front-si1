import { Navigate, Outlet } from "react-router-dom";
import { rutasSistema } from "../configuracion/rutasSistema";
import { usarAutenticacion } from "../contexto/ContextoAutenticacion";

function RutasPublicas() {
  const { autenticado, cargando } = usarAutenticacion();

  if (cargando) {
    return null;
  }

  if (autenticado) {
    return <Navigate replace to={rutasSistema.dashboard} />;
  }

  return <Outlet />;
}

export default RutasPublicas;
