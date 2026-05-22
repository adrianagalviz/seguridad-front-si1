function normalizarTexto(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function obtenerNombreRolNormalizado(rol) {
  return normalizarTexto(rol?.nombre_rol || rol);
}

export function tieneRol(rolActual, rolesPermitidos = []) {
  const rolNormalizado = obtenerNombreRolNormalizado(rolActual);

  return rolesPermitidos.map(normalizarTexto).includes(rolNormalizado);
}

export function esAdministrador(rolActual) {
  return tieneRol(rolActual, ["Administrador"]);
}

export function tienePermiso(permisos = [], codigoPermiso) {
  if (!codigoPermiso) return true;
  if (!Array.isArray(permisos)) return false;

  return permisos.some(
    (permiso) =>
      permiso?.estado !== false &&
      normalizarTexto(permiso?.codigo_permiso) === normalizarTexto(codigoPermiso),
  );
}

export function tienePermisoModulo(permisos = [], modulo) {
  if (!modulo) return true;
  if (!Array.isArray(permisos)) return false;

  return permisos.some(
    (permiso) =>
      permiso?.estado !== false && normalizarTexto(permiso?.modulo) === normalizarTexto(modulo),
  );
}

export function puedeAcceder({ rol, permisos = [], rolesPermitidos = [], permiso, modulo }) {
  if (esAdministrador(rol)) return true;

  const rolPermitido = rolesPermitidos.length === 0 || tieneRol(rol, rolesPermitidos);
  const validarPermisos = Array.isArray(permisos) && permisos.length > 0;
  const permisoPermitido = !validarPermisos || !permiso || tienePermiso(permisos, permiso);
  const moduloPermitido = !validarPermisos || !modulo || tienePermisoModulo(permisos, modulo);

  return rolPermitido && permisoPermitido && moduloPermitido;
}
