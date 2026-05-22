import { createContext, useContext } from "react";

export const ContextoAutenticacion = createContext({
  sesion: null,
  usuario: null,
  empleado: null,
  rol: null,
  permisos: [],
  cargando: true,
  errorAutenticacion: "",
  autenticado: false,
  tienePermisoUsuario: () => false,
  tieneRolUsuario: () => false,
  iniciarSesion: async () => {},
  cerrarSesionActual: async () => {},
  limpiarErrorAutenticacion: () => {},
});

export function usarAutenticacion() {
  return useContext(ContextoAutenticacion);
}
