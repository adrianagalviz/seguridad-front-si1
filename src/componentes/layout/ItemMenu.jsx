import { NavLink } from "react-router-dom";

function ItemMenu({ etiqueta, ruta, Icono, onSeleccionar }) {
  return (
    <NavLink
      className={({ isActive }) =>
        [
          "flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition",
          isActive
            ? "bg-cyan-700 text-white shadow-sm"
            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        ].join(" ")
      }
      end={ruta === "/"}
      onClick={onSeleccionar}
      to={ruta}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-current">
        {Icono ? <Icono aria-hidden="true" className="h-4 w-4" /> : null}
      </span>
      <span className="truncate">{etiqueta}</span>
    </NavLink>
  );
}

export default ItemMenu;
