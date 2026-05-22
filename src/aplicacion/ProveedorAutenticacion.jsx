import { useEffect, useMemo, useState } from "react";
import { ContextoAutenticacion } from "../contexto/ContextoAutenticacion";
import {
  cerrarSesion,
  escucharCambiosAutenticacion,
  iniciarSesionSupabase,
  obtenerSesionActual,
} from "../modulos/autenticacion/servicios/servicioLogin";
import { obtenerPerfilUsuarioActual } from "../modulos/autenticacion/servicios/servicioUsuarioActual";
import { obtenerMensajeError } from "../utilidades/manejarErrores";
import { tienePermiso, tieneRol } from "../utilidades/validarPermisos";

function ProveedorAutenticacion({ children }) {
  const [sesion, setSesion] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [empleado, setEmpleado] = useState(null);
  const [rol, setRol] = useState(null);
  const [permisos, setPermisos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorAutenticacion, setErrorAutenticacion] = useState("");

  async function cargarPerfilDesdeSesion(sesionActual) {
    setSesion(sesionActual);

    if (!sesionActual) {
      setUsuario(null);
      setEmpleado(null);
      setRol(null);
      setPermisos([]);
      return;
    }

    const perfil = await obtenerPerfilUsuarioActual(sesionActual);
    setUsuario(perfil.usuario);
    setEmpleado(perfil.empleado);
    setRol(perfil.rol);
    setPermisos(perfil.permisos);
  }

  async function cerrarSesionActual() {
    await cerrarSesion();
    setSesion(null);
    setUsuario(null);
    setEmpleado(null);
    setRol(null);
    setPermisos([]);
  }

  async function protegerSesionInvalida(error) {
    setErrorAutenticacion(obtenerMensajeError(error, "No se pudo validar el usuario."));
    await cerrarSesionActual();
  }

  async function iniciarSesion(credenciales) {
    setCargando(true);
    setErrorAutenticacion("");

    try {
      const data = await iniciarSesionSupabase(credenciales);
      await cargarPerfilDesdeSesion(data.session);
      return data;
    } catch (error) {
      await protegerSesionInvalida(error);
      throw error;
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    let activo = true;

    async function inicializarSesion() {
      setCargando(true);
      setErrorAutenticacion("");

      try {
        const sesionActual = await obtenerSesionActual();
        if (activo) {
          await cargarPerfilDesdeSesion(sesionActual);
        }
      } catch (error) {
        if (activo) {
          await protegerSesionInvalida(error);
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    inicializarSesion();

    const suscripcion = escucharCambiosAutenticacion(async (_evento, sesionActual) => {
      if (!activo) return;

      try {
        setErrorAutenticacion("");
        await cargarPerfilDesdeSesion(sesionActual);
      } catch (error) {
        await protegerSesionInvalida(error);
      }
    });

    return () => {
      activo = false;
      suscripcion.unsubscribe();
    };
  }, []);

  const valor = useMemo(
    () => ({
      sesion,
      usuario,
      empleado,
      rol,
      permisos,
      cargando,
      errorAutenticacion,
      autenticado: Boolean(sesion && usuario && rol),
      tienePermisoUsuario: (codigoPermiso) => tienePermiso(permisos, codigoPermiso),
      tieneRolUsuario: (rolesPermitidos) => tieneRol(rol, rolesPermitidos),
      iniciarSesion,
      cerrarSesionActual,
      limpiarErrorAutenticacion: () => setErrorAutenticacion(""),
    }),
    [sesion, usuario, empleado, rol, permisos, cargando, errorAutenticacion],
  );

  return (
    <ContextoAutenticacion.Provider value={valor}>
      {children}
    </ContextoAutenticacion.Provider>
  );
}

export default ProveedorAutenticacion;
