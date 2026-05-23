function CampoTexto({
  ayuda,
  className = "",
  error,
  etiqueta,
  id,
  requerido = false,
  tipo = "text",
  multilinea = false,
  filas = 4,
  ...props
}) {
  const IdCampo = id || props.name;
  const clasesCampo = [
    "min-h-10 rounded-md border px-3 py-2 text-sm transition",
    error ? "border-red-500 bg-red-50" : "border-slate-300 bg-white",
    className,
  ].join(" ");

  return (
    <div className="space-y-1.5">
      {etiqueta ? (
        <label className="block text-sm font-semibold text-slate-800" htmlFor={IdCampo}>
          {etiqueta}
          {requerido ? <span className="text-red-700"> *</span> : null}
        </label>
      ) : null}
      {multilinea ? (
        <textarea className={clasesCampo} id={IdCampo} rows={filas} {...props} />
      ) : (
        <input className={clasesCampo} id={IdCampo} type={tipo} {...props} />
      )}
      {error ? <p className="text-xs font-medium text-red-700">{error}</p> : null}
      {!error && ayuda ? <p className="text-xs text-slate-500">{ayuda}</p> : null}
    </div>
  );
}

export default CampoTexto;
