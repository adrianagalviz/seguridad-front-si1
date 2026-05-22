import { consultarTabla } from "../../../configuracion/supabaseCliente";
import { tablasSistema } from "../../../configuracion/tablasSistema";
import { manejarErrorSupabase } from "../../../utilidades/manejarErrores";

export async function obtenerPermisosPorRol(idRol) {
  const { data: relaciones, error: errorRelaciones } = await consultarTabla(
    tablasSistema.rolPermiso,
  )
    .select("id_permiso,estado")
    .eq("id_rol", idRol)
    .eq("estado", true);

  if (errorRelaciones) {
    throw manejarErrorSupabase(errorRelaciones, "No se pudieron cargar los permisos del rol.");
  }

  const idsPermisos = (relaciones || []).map((relacion) => relacion.id_permiso);

  if (idsPermisos.length === 0) {
    return [];
  }

  const { data: permisos, error: errorPermisos } = await consultarTabla(tablasSistema.permiso)
    .select("id_permiso,nombre_permiso,codigo_permiso,modulo,descripcion,estado,fecha_creacion")
    .in("id_permiso", idsPermisos)
    .eq("estado", true);

  if (errorPermisos) {
    throw manejarErrorSupabase(errorPermisos, "No se pudo cargar el detalle de permisos.");
  }

  return permisos;
}
