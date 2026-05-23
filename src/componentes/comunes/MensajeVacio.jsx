function MensajeVacio({ mensaje = "No hay informacion disponible.", titulo = "Sin registros" }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
      <h2 className="text-base font-bold text-slate-950">{titulo}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{mensaje}</p>
    </div>
  );
}

export default MensajeVacio;
