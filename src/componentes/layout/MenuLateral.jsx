import {
  BadgeDollarSign,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Boxes,
  ClipboardList,
  FileClock,
  FileText,
  FolderKanban,
  Home,
  Image,
  MapPin,
  ShieldCheck,
  Users,
  UserRoundCog,
  Wrench,
  X,
} from "lucide-react";
import { rutasPrivadasSistema } from "../../configuracion/rutasSistema";
import { usarAutenticacion } from "../../contexto/ContextoAutenticacion";
import { puedeAcceder } from "../../utilidades/validarPermisos";
import ItemMenu from "./ItemMenu";

const etiquetasModulo = Object.freeze({
  dashboard: "Dashboard",
  usuarios: "Usuarios",
  roles_permisos: "Roles y permisos",
  clientes: "Clientes",
  empleados: "Empleados",
  ubicaciones: "Ubicaciones",
  proyectos: "Proyectos",
  ordenes_trabajo: "Ordenes de trabajo",
  mantenimientos: "Mantenimientos",
  evidencias: "Evidencias",
  pagos: "Pagos",
  gastos: "Gastos",
  catalogo: "Catalogo",
  cotizaciones: "Cotizaciones",
  bitacora: "Bitacora",
  reportes: "Reportes",
});

const iconosModulo = Object.freeze({
  dashboard: Home,
  usuarios: UserRoundCog,
  roles_permisos: ShieldCheck,
  clientes: Users,
  empleados: BriefcaseBusiness,
  ubicaciones: MapPin,
  proyectos: FolderKanban,
  ordenes_trabajo: ClipboardList,
  mantenimientos: Wrench,
  evidencias: Image,
  pagos: BadgeDollarSign,
  gastos: FileClock,
  catalogo: Boxes,
  cotizaciones: FileText,
  bitacora: BookOpenCheck,
  reportes: BarChart3,
});

function obtenerEtiquetaModulo(modulo) {
  return (
    etiquetasModulo[modulo] ||
    String(modulo || "")
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letra) => letra.toUpperCase())
  );
}

function MenuLateral({ abierto = false, onCerrar }) {
  const { rol, permisos } = usarAutenticacion();
  const rutasPermitidas = rutasPrivadasSistema.filter((ruta) =>
    puedeAcceder({
      rol,
      permisos,
      rolesPermitidos: ruta.rolesPermitidos,
      modulo: ruta.modulo,
    }),
  );

  return (
    <>
      <button
        aria-label="Cerrar menu"
        className={[
          "fixed inset-0 z-30 bg-slate-950/35 transition lg:hidden",
          abierto ? "block" : "hidden",
        ].join(" ")}
        onClick={onCerrar}
        type="button"
      />
      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform lg:static lg:z-auto lg:translate-x-0",
          abierto ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <div>
            <p className="text-xs font-bold uppercase text-cyan-700">JORSEGTEC</p>
            <p className="text-sm font-semibold text-slate-950">Administracion</p>
          </div>
          <button
            aria-label="Cerrar menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={onCerrar}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {rutasPermitidas.map((ruta) => {
            const etiqueta = obtenerEtiquetaModulo(ruta.modulo);
            return (
              <ItemMenu
                Icono={iconosModulo[ruta.modulo]}
                etiqueta={etiqueta}
                key={ruta.ruta}
                onSeleccionar={onCerrar}
                ruta={ruta.ruta}
              />
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default MenuLateral;
