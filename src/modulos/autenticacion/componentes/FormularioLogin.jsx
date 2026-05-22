import { useState } from "react";
import { usarAutenticacion } from "../../../contexto/ContextoAutenticacion";
import { obtenerMensajeError } from "../../../utilidades/manejarErrores";

const estadoInicial = {
  correo: "",
  contrasena: "",
};

function FormularioLogin() {
  const { iniciarSesion } = usarAutenticacion();
  const [formulario, setFormulario] = useState(estadoInicial);
  const [cargando, setCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  function actualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((valorActual) => ({
      ...valorActual,
      [name]: value,
    }));
  }

  async function enviarFormulario(evento) {
    evento.preventDefault();
    setMensajeError("");
    setMensajeExito("");
    setCargando(true);

    try {
      await iniciarSesion(formulario);
      setMensajeExito("Sesion iniciada correctamente.");
      setFormulario(estadoInicial);
    } catch (error) {
      setMensajeError(obtenerMensajeError(error, "No se pudo iniciar sesion."));
    } finally {
      setCargando(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={enviarFormulario}>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="correo">
          Correo de acceso
        </label>
        <input
          autoComplete="email"
          className="px-3 py-2"
          id="correo"
          name="correo"
          onChange={actualizarCampo}
          required
          type="email"
          value={formulario.correo}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="contrasena">
          Contrasena
        </label>
        <input
          autoComplete="current-password"
          className="px-3 py-2"
          id="contrasena"
          name="contrasena"
          onChange={actualizarCampo}
          required
          type="password"
          value={formulario.contrasena}
        />
      </div>

      {mensajeError ? (
        <p className="estado-error rounded-md border px-3 py-2 text-sm">{mensajeError}</p>
      ) : null}

      {mensajeExito ? (
        <p className="estado-exito rounded-md border px-3 py-2 text-sm">{mensajeExito}</p>
      ) : null}

      <button
        className="w-full rounded-md bg-cyan-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-800 disabled:hover:bg-cyan-700"
        disabled={cargando}
        type="submit"
      >
        {cargando ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}

export default FormularioLogin;
