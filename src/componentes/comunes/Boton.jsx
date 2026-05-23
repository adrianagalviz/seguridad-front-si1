const variantes = {
  primario: "bg-cyan-700 text-white hover:bg-cyan-800 focus:outline-cyan-200",
  secundario: "bg-slate-950 text-white hover:bg-slate-800 focus:outline-slate-300",
  contorno:
    "border border-slate-300 bg-white text-slate-800 hover:border-cyan-600 hover:text-cyan-700 focus:outline-cyan-200",
  peligro: "bg-red-700 text-white hover:bg-red-800 focus:outline-red-200",
  claro: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-slate-200",
};

const tamanos = {
  pequeno: "min-h-9 px-3 text-xs",
  mediano: "min-h-10 px-4 text-sm",
  grande: "min-h-11 px-5 text-base",
};

function Boton({
  children,
  className = "",
  cargando = false,
  disabled = false,
  tipo = "button",
  variante = "primario",
  tamano = "mediano",
  ...props
}) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition focus:outline-2 focus:outline-offset-2",
        variantes[variante] || variantes.primario,
        tamanos[tamano] || tamanos.mediano,
        className,
      ].join(" ")}
      disabled={disabled || cargando}
      type={tipo}
      {...props}
    >
      {cargando ? "Procesando..." : children}
    </button>
  );
}

export default Boton;
