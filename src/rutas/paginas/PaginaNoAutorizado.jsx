import { Link } from "react-router-dom";
import { rutasSistema } from "../../configuracion/rutasSistema";

function PaginaNoAutorizado() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
          Acceso restringido
        </p>
        <h1 className="mt-3 text-2xl font-bold text-slate-950">No autorizado</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Tu rol actual no tiene acceso a este modulo.
        </p>
        <Link
          className="mt-6 inline-flex rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          to={rutasSistema.dashboard}
        >
          Volver al dashboard
        </Link>
      </section>
    </main>
  );
}

export default PaginaNoAutorizado;
