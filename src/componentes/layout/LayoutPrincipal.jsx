import { useState } from "react";
import { Outlet } from "react-router-dom";
import BarraSuperior from "./BarraSuperior";
import MenuLateral from "./MenuLateral";

function LayoutPrincipal() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 lg:flex">
      <MenuLateral abierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} />
      <div className="min-w-0 flex-1">
        <BarraSuperior onAbrirMenu={() => setMenuAbierto(true)} />
        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default LayoutPrincipal;
