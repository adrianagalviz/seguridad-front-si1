import { Link } from "react-router-dom";
import { rutasPrivadasSistema, rutasSistema } from "../../../configuracion/rutasSistema";
import { usarAutenticacion } from "../../../contexto/ContextoAutenticacion";
import { puedeAcceder } from "../../../utilidades/validarPermisos";
import { Tarjeta } from "../../../componentes/comunes";

function formatearModulo(modulo) {
  return String(modulo)
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

function PaginaDashboard() {
  const { usuario, empleado, rol, permisos } = usarAutenticacion();
  const rutasPermitidas = rutasPrivadasSistema.filter((ruta) =>
    puedeAcceder({
      rol,
      permisos,
      rolesPermitidos: ruta.rolesPermitidos,
      modulo: ruta.modulo,
    }),
  );

  return (
    <section className="mx-auto w-full max-w-6xl">
      <Tarjeta>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            JORSEGTEC
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-950">
            Dashboard operativo
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sesion validada con usuario interno, empleado, rol y permisos activos.
          </p>
        </div>

        <dl className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase text-slate-500">Usuario</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {usuario?.correo_acceso}
            </dd>
          </div>
          <div className="rounded-md border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase text-slate-500">Cargo</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {empleado?.cargo || "Sin cargo registrado"}
            </dd>
          </div>
          <div className="rounded-md border border-slate-200 p-4">
            <dt className="text-xs font-semibold uppercase text-slate-500">Rol</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">
              {rol?.nombre_rol}
            </dd>
          </div>
        </dl>
      </Tarjeta>

      <Tarjeta className="mt-6" titulo="Modulos disponibles">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rutasPermitidas
            .filter((ruta) => ruta.ruta !== rutasSistema.dashboard)
            .map((ruta) => (
              <Link
                className="rounded-md border border-slate-200 p-4 text-sm font-semibold text-slate-800 transition hover:border-cyan-600 hover:text-cyan-700"
                key={ruta.ruta}
                to={ruta.ruta}
              >
                {formatearModulo(ruta.modulo)}
              </Link>
            ))}
        </div>
      </Tarjeta>
    </section>
  );
}

export default PaginaDashboard;
