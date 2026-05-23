function formatearNombreModulo(modulo) {
  return String(modulo || "")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

function PaginaPendienteModulo({ modulo }) {
  return (
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
  );
}

export default PaginaPendienteModulo;
