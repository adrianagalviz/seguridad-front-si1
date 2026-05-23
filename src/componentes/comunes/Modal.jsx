function Modal({ abierto, children, onCerrar, titulo, descripcion }) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6">
      <section className="max-h-full w-full max-w-lg overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
          <div>
            {titulo ? <h2 className="text-lg font-bold text-slate-950">{titulo}</h2> : null}
            {descripcion ? (
              <p className="mt-1 text-sm leading-6 text-slate-600">{descripcion}</p>
            ) : null}
          </div>
          <button
            aria-label="Cerrar modal"
            className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-100"
            onClick={onCerrar}
            type="button"
          >
            X
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
      </section>
    </div>
  );
}

export default Modal;
