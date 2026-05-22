import { consultarTabla } from "../../../configuracion/supabaseCliente";
import { tablasSistema } from "../../../configuracion/tablasSistema";
import { manejarErrorSupabase } from "../../../utilidades/manejarErrores";
import { obtenerPermisosPorRol } from "./servicioPermisos";

export async function obtenerUsuarioInternoPorCorreo(correoAcceso) {
  const { data, error } = await consultarTabla(tablasSistema.usuario)
    .select("id_usuario,id_empleado,id_rol,correo_acceso,estado,fecha_creacion")
    .eq("correo_acceso", correoAcceso)
    .maybeSingle();

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo cargar el usuario interno.");
  }

  if (!data) {
    throw new Error("No existe un usuario interno asociado a este correo.");
  }

  if (!data.estado) {
    throw new Error("El usuario interno esta inactivo.");
  }

  if (!data.id_rol) {
    throw new Error("El usuario interno no tiene un rol asignado.");
  }

  return data;
}

export async function obtenerEmpleadoPorId(idEmpleado) {
  const { data, error } = await consultarTabla(tablasSistema.empleado)
    .select("id_empleado,id_persona,cargo,fecha_contratacion,estado")
    .eq("id_empleado", idEmpleado)
    .maybeSingle();

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo cargar el empleado asociado.");
  }

  return data;
}

export async function obtenerRolPorId(idRol) {
  const { data, error } = await consultarTabla(tablasSistema.rol)
    .select("id_rol,nombre_rol,descripcion,estado")
    .eq("id_rol", idRol)
    .maybeSingle();

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo cargar el rol del usuario.");
  }

  if (!data) {
    throw new Error("El rol asignado al usuario no existe.");
  }

  if (!data.estado) {
    throw new Error("El rol asignado al usuario esta inactivo.");
  }

  return data;
}

export async function obtenerPerfilUsuarioActual(sesion) {
  const correoAcceso = sesion?.user?.email;

  if (!correoAcceso) {
    throw new Error("La sesion no contiene un correo valido.");
  }

  const usuario = await obtenerUsuarioInternoPorCorreo(correoAcceso);
  const [empleado, rol, permisos] = await Promise.all([
    obtenerEmpleadoPorId(usuario.id_empleado),
    obtenerRolPorId(usuario.id_rol),
    obtenerPermisosPorRol(usuario.id_rol),
  ]);

  return {
    usuario,
    empleado,
    rol,
    permisos,
  };
}
