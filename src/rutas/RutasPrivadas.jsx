import { Navigate, Outlet, useLocation } from "react-router-dom";
import { rutasSistema } from "../configuracion/rutasSistema";
import { usarAutenticacion } from "../contexto/ContextoAutenticacion";

function RutasPrivadas() {
  const { autenticado, cargando } = usarAutenticacion();
  const ubicacion = useLocation();

  if (cargando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 text-slate-900">
        <p className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm">
          Cargando sesion...
        </p>
      </main>
    );
  }

  if (!autenticado) {
    return <Navigate replace state={{ desde: ubicacion }} to={rutasSistema.login} />;
  }

  return <Outlet />;
}

export default RutasPrivadas;
