import { useState } from "react";
import { Link } from "react-router-dom";
import { rutasSistema } from "../../../configuracion/rutasSistema";
import { obtenerMensajeError } from "../../../utilidades/manejarErrores";
import { enviarRecuperacionContrasena } from "../servicios/servicioLogin";

function PaginaRecuperarContrasena() {
  const [correo, setCorreo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  async function enviarFormulario(evento) {
    evento.preventDefault();
    setCargando(true);
    setMensajeError("");
    setMensajeExito("");

    try {
      await enviarRecuperacionContrasena(correo);
      setMensajeExito("Si el correo existe, recibira instrucciones de recuperacion.");
    } catch (error) {
      setMensajeError(
        obtenerMensajeError(error, "No se pudo enviar la recuperacion de contrasena."),
      );
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
        <div className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            JORSEGTEC
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-950">
            Recuperar contrasena
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Ingresa tu correo de acceso para solicitar la recuperacion mediante
            Supabase Auth.
          </p>

          <form className="mt-6 space-y-4" onSubmit={enviarFormulario}>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="correo">
                Correo de acceso
              </label>
              <input
                autoComplete="email"
                className="px-3 py-2"
                id="correo"
                name="correo"
                onChange={(evento) => setCorreo(evento.target.value)}
                required
                type="email"
                value={correo}
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
              {cargando ? "Enviando..." : "Enviar recuperacion"}
            </button>
          </form>

          <Link
            className="mt-4 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            to={rutasSistema.login}
          >
            Volver al login
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PaginaRecuperarContrasena;
