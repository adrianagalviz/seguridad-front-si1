function formatearNombreModulo(modulo) {
  return String(modulo || "")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

function PaginaPendienteModulo({ modulo }) {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
          Modulo autorizado
        </p>
        <h1 className="mt-3 text-2xl font-bold text-slate-950">
          {formatearNombreModulo(modulo)}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          La ruta ya esta protegida por rol. La pantalla funcional se implementara en
          su fase correspondiente.
        </p>
      </section>
    </main>
  );
}

export default PaginaPendienteModulo;
