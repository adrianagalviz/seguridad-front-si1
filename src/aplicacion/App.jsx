import { variablesEntorno } from "../configuracion/variablesEntorno";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            JORSEGTEC
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
            Frontend administrativo inicializado
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Proyecto base creado con React, Vite, Tailwind CSS 4 y variables de
            entorno preparadas para Supabase y Cloudinary.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Supabase</p>
              <p className="mt-1 text-sm text-slate-600">
                {variablesEntorno.supabaseUrl
                  ? "URL configurada"
                  : "URL pendiente en .env"}
              </p>
            </div>
            <div className="rounded-md border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Cloudinary</p>
              <p className="mt-1 text-sm text-slate-600">
                {variablesEntorno.cloudinaryCloudName
                  ? "Cloud configurado"
                  : "Cloud pendiente en .env"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
