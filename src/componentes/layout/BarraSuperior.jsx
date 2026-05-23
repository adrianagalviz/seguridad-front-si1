import { LogOut, Menu, ShieldCheck, UserCircle } from "lucide-react";
import { useState } from "react";
import { usarAutenticacion } from "../../contexto/ContextoAutenticacion";

function BarraSuperior({ onAbrirMenu }) {
  const { usuario, empleado, rol, cerrarSesionActual } = usarAutenticacion();
  const [cerrandoSesion, setCerrandoSesion] = useState(false);
  const [errorCerrarSesion, setErrorCerrarSesion] = useState("");
  const nombreUsuario = empleado?.persona?.nombre_completo || usuario?.correo_acceso;

  async function manejarCerrarSesion() {
    if (cerrandoSesion) return;

    setCerrandoSesion(true);
    setErrorCerrarSesion("");

    try {
      await cerrarSesionActual();
    } catch {
      setErrorCerrarSesion("No se pudo cerrar la sesion. Intenta nuevamente.");
      setCerrandoSesion(false);
    }
  }

  return (
    <header className="sticky top-0 z-20 flex min-h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          aria-label="Abrir menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={onAbrirMenu}
          type="button"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <p className="flex min-w-0 items-center gap-1.5 truncate text-sm font-bold text-slate-950">
            <UserCircle aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-700" />
            <span className="truncate">{nombreUsuario || "Usuario interno"}</span>
          </p>
          <p className="mt-0.5 flex min-w-0 items-center gap-1.5 truncate text-xs font-medium text-slate-500">
            <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{rol?.nombre_rol || "Rol no definido"}</span>
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {errorCerrarSesion ? (
          <p className="hidden max-w-56 text-right text-xs font-semibold text-red-700 sm:block">
            {errorCerrarSesion}
          </p>
        ) : null}
        <button
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:px-4"
          disabled={cerrandoSesion}
          onClick={manejarCerrarSesion}
          type="button"
        >
          <LogOut aria-hidden="true" className="h-4 w-4" />
          <span className="hidden sm:inline">
            {cerrandoSesion ? "Cerrando..." : "Cerrar sesion"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default BarraSuperior;
