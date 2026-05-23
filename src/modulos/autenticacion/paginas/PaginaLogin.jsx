import { Link } from "react-router-dom";
import { rutasSistema } from "../../../configuracion/rutasSistema";
import { usarAutenticacion } from "../../../contexto/ContextoAutenticacion";
import FormularioLogin from "../componentes/FormularioLogin";

function PaginaLogin() {
  const { errorAutenticacion } = usarAutenticacion();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-[1fr_420px]">
          <div className="flex flex-col justify-center bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              JORSEGTEC
            </p>
            <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
              Sistema administrativo
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
              Acceso interno para gestion de proyectos, mantenimientos y ordenes de
              trabajo de seguridad electronica.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-950">Iniciar sesion</h2>
            <p className="mt-2 text-sm text-slate-600">
              Usa las credenciales registradas en Supabase Auth.
            </p>
            <div className="mt-6">
              {errorAutenticacion ? (
                <p className="estado-error mb-4 rounded-md border px-3 py-2 text-sm">
                  {errorAutenticacion}
                </p>
              ) : null}
              <FormularioLogin />
            </div>
            <Link
              className="mt-4 w-full text-sm font-semibold text-cyan-700 hover:text-cyan-800"
              to={rutasSistema.recuperarContrasena}
            >
              Recuperar contrasena
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PaginaLogin;
