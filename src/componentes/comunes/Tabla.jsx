import Cargador from "./Cargador";
import MensajeVacio from "./MensajeVacio";

function Tabla({ columnas = [], datos = [], cargando = false, mensajeVacio, keyFila }) {
  if (cargando) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <Cargador texto="Cargando datos..." />
      </div>
    );
  }

  if (!datos.length) {
    return <MensajeVacio mensaje={mensajeVacio || "No hay registros para mostrar."} />;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="min-w-full">
        <thead>
          <tr>
            {columnas.map((columna) => (
              <th
                className={columna.alineacion === "derecha" ? "text-right" : "text-left"}
                key={columna.clave}
                scope="col"
              >
                {columna.titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, indice) => (
            <tr className="hover:bg-slate-50" key={keyFila ? keyFila(fila) : fila.id || indice}>
              {columnas.map((columna) => (
                <td
                  className={[
                    "text-sm text-slate-700",
                    columna.alineacion === "derecha" ? "text-right" : "text-left",
                  ].join(" ")}
                  key={columna.clave}
                >
                  {columna.render ? columna.render(fila) : fila[columna.clave]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
