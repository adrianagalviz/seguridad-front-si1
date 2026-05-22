export const tablasSistema = Object.freeze({
  ubicacionCliente: "ubicacion_cliente",
  persona: "persona",
  bitacoraProyecto: "bitacora_proyecto",
  estadoProyecto: "estado_proyecto",
  bitacora: "bitacora",
  usuario: "usuario",
  empleadoEspecialidad: "empleado_especialidad",
  rol: "rol",
  cliente: "cliente",
  categoriaProducto: "categoria_producto",
  especialidad: "especialidad",
  permiso: "permiso",
  proyecto: "proyecto",
  programacionMantenimiento: "programacion_mantenimiento",
  productoCatalogo: "producto_catalogo",
  pagoProyecto: "pago_proyecto",
  empleado: "empleado",
  materialUsadoOrden: "material_usado_orden",
  ordenTrabajo: "orden_trabajo",
  archivoCotizacion: "archivo_cotizacion",
  archivoProyecto: "archivo_proyecto",
  ordenTecnico: "orden_tecnico",
  rolPermiso: "rol_permiso",
  tipoServicio: "tipo_servicio",
  cotizacion: "cotizacion",
  gastoOrden: "gasto_orden",
  detalleCotizacion: "detalle_cotizacion",
  evidenciaOrden: "evidencia_orden",
});

export const listaTablasSistema = Object.freeze(Object.values(tablasSistema));

export function existeTablaSistema(nombreTabla) {
  return listaTablasSistema.includes(nombreTabla);
}

// Mapa basado estrictamente en DOCS/BD Final.md.
// No agregar tablas aqui si no existen en la base real seguridad-si1.
