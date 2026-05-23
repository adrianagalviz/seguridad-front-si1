function Tarjeta({ children, className = "", descripcion, titulo }) {
  return (
    <section className={["rounded-lg border border-slate-200 bg-white p-5 shadow-sm", className].join(" ")}>
      {titulo || descripcion ? (
        <header className="mb-4">
          {titulo ? <h2 className="text-lg font-bold text-slate-950">{titulo}</h2> : null}
          {descripcion ? <p className="mt-1 text-sm leading-6 text-slate-600">{descripcion}</p> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}

export default Tarjeta;
