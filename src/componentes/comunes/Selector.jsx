function Selector({
  ayuda,
  className = "",
  error,
  etiqueta,
  id,
  opciones = [],
  requerido = false,
  textoOpcionVacia = "Seleccione una opcion",
  ...props
}) {
  const IdCampo = id || props.name;

  return (
    <div className="space-y-1.5">
      {etiqueta ? (
        <label className="block text-sm font-semibold text-slate-800" htmlFor={IdCampo}>
          {etiqueta}
          {requerido ? <span className="text-red-700"> *</span> : null}
        </label>
      ) : null}
      <select
        className={[
          "min-h-10 rounded-md border px-3 py-2 text-sm transition",
          error ? "border-red-500 bg-red-50" : "border-slate-300 bg-white",
          className,
        ].join(" ")}
        id={IdCampo}
        {...props}
      >
        {textoOpcionVacia ? <option value="">{textoOpcionVacia}</option> : null}
        {opciones.map((opcion) => (
          <option
            disabled={opcion.disabled}
            key={opcion.valor ?? opcion.value}
            value={opcion.valor ?? opcion.value}
          >
            {opcion.etiqueta ?? opcion.label}
          </option>
        ))}
      </select>
      {error ? <p className="text-xs font-medium text-red-700">{error}</p> : null}
      {!error && ayuda ? <p className="text-xs text-slate-500">{ayuda}</p> : null}
    </div>
  );
}

export default Selector;
