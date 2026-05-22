import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./aplicacion/App.jsx";
import "./estilos/tailwind.css";
import "./estilos/estilosGlobales.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
