import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./aplicacion/App.jsx";
import ProveedorAutenticacion from "./aplicacion/ProveedorAutenticacion.jsx";
import "./estilos/tailwind.css";
import "./estilos/estilosGlobales.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProveedorAutenticacion>
      <App />
    </ProveedorAutenticacion>
  </StrictMode>,
);
