function Cargador({ texto = "Cargando..." }) {
  return (
    <div className="flex items-center justify-center gap-3 py-6 text-sm font-semibold text-slate-600">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-cyan-700" />
      <span>{texto}</span>
    </div>
  );
}

export default Cargador;
