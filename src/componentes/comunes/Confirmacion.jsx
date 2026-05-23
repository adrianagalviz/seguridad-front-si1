import Boton from "./Boton";
import Modal from "./Modal";

function Confirmacion({
  abierto,
  cargando = false,
  mensaje = "Esta accion no se puede deshacer.",
  onCancelar,
  onConfirmar,
  textoCancelar = "Cancelar",
  textoConfirmar = "Confirmar",
  titulo = "Confirmar accion",
  varianteConfirmar = "peligro",
}) {
  return (
    <Modal abierto={abierto} onCerrar={onCancelar} titulo={titulo}>
      <p className="text-sm leading-6 text-slate-600">{mensaje}</p>
      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Boton onClick={onCancelar} variante="contorno">
          {textoCancelar}
        </Boton>
        <Boton cargando={cargando} onClick={onConfirmar} variante={varianteConfirmar}>
          {textoConfirmar}
        </Boton>
      </div>
    </Modal>
  );
}

export default Confirmacion;
