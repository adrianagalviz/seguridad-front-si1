# Plan por Fases y Subfases - Frontend JORSEGTEC

## Resumen

Crear desde cero el frontend administrativo de JORSEGTEC con React JS, Vite, Tailwind CSS 4, Supabase JS Client y React Router DOM.  
El sistema respetará completamente la base real `seguridad-si1` documentada en `DOCS/BD Final.md`, usando solo sus 28 tablas existentes.

La autenticación será con **Supabase Auth**, vinculando el correo autenticado con `usuario.correo_acceso`.  
Cloudinary se usará con **unsigned upload preset restringido** para evidencias, archivos de proyecto y archivos de cotización.

## Fase 1 - Preparación del Proyecto

### Subfase 1.1 - Inicialización técnica

- Crear proyecto con Vite + React JS.
- Configurar Node.js versión `22.22.2`.
- Instalar dependencias base:
  - `@supabase/supabase-js`
  - `react-router-dom`
  - Tailwind CSS 4
  - librería para PDF
  - librería de iconos si se requiere
- Crear scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`

### Subfase 1.2 - Configuración de Tailwind y estilos

- Crear `src/estilos/tailwind.css`.
- Crear `src/estilos/estilosGlobales.css`.
- Definir estilos base para:
  - tipografía
  - colores administrativos
  - tablas
  - formularios
  - botones
  - estados visuales
- Asegurar diseño responsive para PC, tablet y celular.

### Subfase 1.3 - Variables de entorno

- Crear configuración para:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_CLOUDINARY_CLOUD_NAME`
  - `VITE_CLOUDINARY_UPLOAD_PRESET`
- Crear `variablesEntorno.js`.
- Validar que no se use `service role key`.
- Agregar comentario claro: RLS está desactivado y debe habilitarse antes de producción.

### Subfase 1.4 - Estructura modular en español

- Crear estructura obligatoria:
  - `aplicacion`
  - `configuracion`
  - `estilos`
  - `rutas`
  - `contexto`
  - `utilidades`
  - `servicios`
  - `componentes`
  - `modulos`
- Evitar nombres en inglés como `components`, `pages`, `services`, `hooks`, `utils`, `layouts`.

## Fase 2 - Conexión con Supabase y Seguridad Base

### Subfase 2.1 - Cliente Supabase

- Crear `src/configuracion/supabaseCliente.js`.
- Conectar usando solo anon key pública.
- Centralizar errores de conexión.
- Preparar funciones reutilizables para consultas.

### Subfase 2.2 - Mapa de tablas reales

- Crear constantes internas con nombres reales de tablas.
- Usar exclusivamente las 28 tablas existentes:
  - `ubicacion_cliente`
  - `persona`
  - `bitacora_proyecto`
  - `estado_proyecto`
  - `bitacora`
  - `usuario`
  - `empleado_especialidad`
  - `rol`
  - `cliente`
  - `categoria_producto`
  - `especialidad`
  - `permiso`
  - `proyecto`
  - `programacion_mantenimiento`
  - `producto_catalogo`
  - `pago_proyecto`
  - `empleado`
  - `material_usado_orden`
  - `orden_trabajo`
  - `archivo_cotizacion`
  - `archivo_proyecto`
  - `orden_tecnico`
  - `rol_permiso`
  - `tipo_servicio`
  - `cotizacion`
  - `gasto_orden`
  - `detalle_cotizacion`
  - `evidencia_orden`

### Subfase 2.3 - Manejo de errores

- Crear `manejarErrores.js`.
- Normalizar mensajes de Supabase.
- Mostrar errores entendibles en formularios, tablas y modales.
- No mostrar información sensible al usuario final.

## Fase 3 - Autenticación y Sesión

### Subfase 3.1 - Login con Supabase Auth

- Crear módulo `autenticacion`.
- Implementar `PaginaLogin.jsx`.
- Implementar `FormularioLogin.jsx`.
- Crear `servicioLogin.js`.
- Iniciar sesión usando correo y contraseña de Supabase Auth.

### Subfase 3.2 - Vinculación con usuario interno

- Después del login, consultar `usuario` por `correo_acceso`.
- Cargar:
  - `id_usuario`
  - `id_empleado`
  - `id_rol`
  - `estado`
- Bloquear acceso si:
  - no existe registro en `usuario`
  - el usuario interno está inactivo
  - no tiene rol asignado

### Subfase 3.3 - Contexto de autenticación

- Crear `ContextoAutenticacion.jsx`.
- Crear `ProveedorAutenticacion.jsx`.
- Guardar en contexto:
  - sesión Supabase Auth
  - usuario interno
  - empleado relacionado
  - rol
  - permisos
  - estado de carga
- Implementar cierre de sesión.

### Subfase 3.4 - Recuperación de contraseña

- Crear `PaginaRecuperarContrasena.jsx`.
- Usar recuperación nativa de Supabase Auth.
- No modificar `password_hash` desde frontend.

## Fase 4 - Roles, Permisos y Rutas

### Subfase 4.1 - Carga de rol

- Consultar `rol` usando `usuario.id_rol`.
- Validar `rol.estado`.
- Guardar `nombre_rol` en contexto.

### Subfase 4.2 - Carga de permisos

- Consultar `rol_permiso`.
- Consultar permisos activos en `permiso`.
- Usar `codigo_permiso` y `modulo` para validar accesos.
- Crear `validarPermisos.js`.

### Subfase 4.3 - Rutas públicas y privadas

- Crear:
  - `RutasPublicas.jsx`
  - `RutasPrivadas.jsx`
  - `RutasPorRol.jsx`
  - `ProveedorRutas.jsx`
- Redirigir usuarios no autenticados al login.
- Redirigir usuarios autenticados fuera del login.

### Subfase 4.4 - Matriz de acceso por rol

- Administrador:
  - acceso completo.
- Técnico Superior:
  - proyectos
  - órdenes
  - asignación de técnicos
  - mantenimientos
  - evidencias
  - bitácora de proyectos
  - reportes técnicos.
- Técnico de Campo:
  - sus órdenes asignadas
  - avances
  - evidencias
  - materiales usados
  - cambio de estado permitido.
- Atención al Cliente:
  - clientes
  - ubicaciones
  - consulta de proyectos
  - consulta de mantenimientos
  - solicitudes básicas.

## Fase 5 - Layout y Componentes Base

### Subfase 5.1 - Layout principal

- Crear `LayoutPrincipal.jsx`.
- Crear `BarraSuperior.jsx`.
- Crear `MenuLateral.jsx`.
- Crear `ItemMenu.jsx`.
- Mostrar menús según rol y permisos.

### Subfase 5.2 - Componentes comunes

- Crear:
  - `Boton.jsx`
  - `CampoTexto.jsx`
  - `Selector.jsx`
  - `Modal.jsx`
  - `Tabla.jsx`
  - `Tarjeta.jsx`
  - `Cargador.jsx`
  - `MensajeVacio.jsx`
  - `Confirmacion.jsx`

### Subfase 5.3 - Formularios compartidos

- Crear formularios base:
  - `FormularioPersona.jsx`
  - `FormularioCliente.jsx`
  - `FormularioEmpleado.jsx`
  - `FormularioProyecto.jsx`
  - `FormularioOrdenTrabajo.jsx`
  - `FormularioCotizacion.jsx`
- Validar campos obligatorios según `DOCS/BD Final.md`.

### Subfase 5.4 - Utilidades generales

- Crear:
  - `formatearFecha.js`
  - `formatearMoneda.js`
  - `generarCodigo.js`
  - `manejarErrores.js`
- Usar funciones con nombres en español.

## Fase 6 - Módulos Administrativos Maestros

### Subfase 6.1 - Personas, clientes y ubicaciones

- Implementar módulo `clientes`.
- Crear CRUD de `persona`.
- Crear CRUD de `cliente`.
- Crear CRUD de `ubicacion_cliente`.
- Respetar relación:
  - `cliente.id_persona`
  - `ubicacion_cliente.id_cliente`

### Subfase 6.2 - Empleados y especialidades

- Implementar módulo `empleados`.
- Crear CRUD de `empleado`.
- Crear CRUD de `especialidad`.
- Crear asignación con `empleado_especialidad`.
- Respetar relación:
  - `empleado.id_persona`
  - `empleado_especialidad.id_empleado`
  - `empleado_especialidad.id_especialidad`

### Subfase 6.3 - Usuarios internos

- Implementar módulo `usuarios`.
- Crear listado de usuarios internos desde `usuario`.
- Asociar usuarios con `empleado`.
- Asociar usuarios con `rol`.
- No crear ni modificar contraseñas desde `usuario.password_hash`.
- Documentar que el usuario real debe existir en Supabase Auth.

### Subfase 6.4 - Roles y permisos

- Implementar módulo `roles_permisos`.
- Crear gestión de `rol`.
- Crear gestión de `permiso`.
- Crear asignación `rol_permiso`.
- Usar permisos para controlar menú y rutas.

### Subfase 6.5 - Catálogo y servicios

- Implementar módulo `catalogo`.
- Crear CRUD de `categoria_producto`.
- Crear CRUD de `producto_catalogo`.
- Crear CRUD de `tipo_servicio`.
- Usar `precio_referencial` para cotizaciones y materiales.

## Fase 7 - Proyectos

### Subfase 7.1 - Listado de proyectos

- Implementar `PaginaProyectos.jsx`.
- Crear `TablaProyectos.jsx`.
- Mostrar cliente, ubicación, tipo de servicio, estado y fechas.
- Filtrar por estado, cliente y fechas.

### Subfase 7.2 - Formulario de proyecto

- Crear `FormularioProyecto.jsx`.
- Guardar en `proyecto`.
- Usar columnas reales:
  - `id_cliente`
  - `id_ubicacion`
  - `id_tipo_servicio`
  - `codigo_proyecto`
  - `nombre_proyecto`
  - `descripcion`
  - `estado`
  - `monto_cotizado`
  - `id_usuario_registro`
  - `id_estado_proyecto`

### Subfase 7.3 - Detalle de proyecto

- Crear `PaginaDetalleProyecto.jsx`.
- Mostrar información general.
- Mostrar órdenes relacionadas.
- Mostrar mantenimientos relacionados.
- Mostrar pagos relacionados.
- Mostrar archivos y bitácora.

### Subfase 7.4 - Estados y bitácora de proyecto

- Usar enum real de `proyecto.estado`.
- Consultar `estado_proyecto` para estados configurables.
- Registrar eventos en `bitacora_proyecto`.
- Mostrar historial con `BitacoraProyecto.jsx`.

### Subfase 7.5 - Archivos de proyecto

- Subir archivos a Cloudinary.
- Guardar en `archivo_proyecto`:
  - `id_proyecto`
  - `id_usuario`
  - `nombre_archivo`
  - `tipo_archivo`
  - `url_archivo`
  - `public_id_cloudinary`

## Fase 8 - Órdenes de Trabajo

### Subfase 8.1 - Listado de órdenes

- Implementar módulo `ordenes_trabajo`.
- Crear `PaginaOrdenesTrabajo.jsx`.
- Crear `TablaOrdenesTrabajo.jsx`.
- Mostrar proyecto, tipo de servicio, estado, fecha y técnicos asignados.

### Subfase 8.2 - Formulario de orden

- Crear `FormularioOrdenTrabajo.jsx`.
- Guardar en `orden_trabajo`.
- Usar columnas reales:
  - `id_proyecto`
  - `id_tipo_servicio`
  - `codigo_orden`
  - `titulo`
  - `descripcion`
  - `estado`
  - `fecha_programada`
  - `hora_inicio_programada`
  - `hora_fin_programada`
  - `observaciones`
  - `id_usuario_creador`

### Subfase 8.3 - Asignación de técnicos

- Crear `AsignarTecnicos.jsx`.
- Usar tabla `orden_tecnico`.
- Guardar:
  - `id_orden_trabajo`
  - `id_empleado`
  - `rol_en_orden`
- Para Técnico de Campo, filtrar por su `id_empleado`.

### Subfase 8.4 - Avances y estados

- Permitir cambios de estado:
  - `Pendiente`
  - `Asignada`
  - `En proceso`
  - `Finalizada`
  - `Reprogramada`
  - `Cancelada`
- Registrar `fecha_inicio_real` y `fecha_fin_real` cuando corresponda.
- Restringir cambios según rol.

### Subfase 8.5 - Materiales usados

- Crear `MaterialesUsados.jsx`.
- Usar `material_usado_orden`.
- Relacionar con `producto_catalogo` cuando exista `id_producto`.
- Registrar cantidades, descripción y costos según columnas reales.

### Subfase 8.6 - Evidencias

- Crear `EvidenciasOrden.jsx`.
- Subir imagen o archivo a Cloudinary.
- Guardar en `evidencia_orden`:
  - `id_orden_trabajo`
  - `id_usuario`
  - `tipo_evidencia`
  - `descripcion`
  - `url_archivo`
  - `public_id_cloudinary`

## Fase 9 - Mantenimientos Preventivos

### Subfase 9.1 - Listado de mantenimientos

- Implementar módulo `mantenimientos`.
- Crear `PaginaMantenimientos.jsx`.
- Crear `TablaMantenimientos.jsx`.
- Mostrar proyecto, ubicación, fecha programada, frecuencia, estado y nivel de alerta.

### Subfase 9.2 - Programación

- Crear `FormularioMantenimiento.jsx`.
- Guardar en `programacion_mantenimiento`.
- Usar:
  - `id_proyecto`
  - `id_ubicacion`
  - `id_orden_trabajo`
  - `fecha_programada`
  - `frecuencia_meses`
  - `estado_mantenimiento`
  - `nivel_alerta`

### Subfase 9.3 - Alertas

- Crear `AlertaMantenimiento.jsx`.
- Marcar mantenimientos próximos y vencidos.
- Usar niveles:
  - `Verde`
  - `Amarillo`
  - `Rojo`
- Mostrar alertas en dashboard.

### Subfase 9.4 - Reprogramación

- Permitir registrar:
  - `fecha_reprogramacion`
  - `motivo_reprogramacion`
  - `observacion`
- Cambiar estado a `Reprogramado` cuando aplique.

## Fase 10 - Cotizaciones y PDF

### Subfase 10.1 - Listado de cotizaciones

- Implementar módulo `cotizaciones`.
- Crear `PaginaCotizaciones.jsx`.
- Crear `TablaCotizaciones.jsx`.
- Filtrar por cliente, estado y fecha.

### Subfase 10.2 - Formulario de cotización

- Crear `FormularioCotizacion.jsx`.
- Guardar en `cotizacion`.
- Usar:
  - `id_cliente`
  - `id_proyecto`
  - `codigo_cotizacion`
  - `estado`
  - `fecha_emision`
  - `fecha_validez`
  - `subtotal`
  - `descuento`
  - `total`
  - `observaciones`
  - `id_usuario_creador`

### Subfase 10.3 - Detalle de cotización

- Crear `DetalleCotizacion.jsx`.
- Guardar ítems en `detalle_cotizacion`.
- Usar:
  - `id_cotizacion`
  - `id_producto`
  - `descripcion_item`
  - `cantidad`
  - `unidad_medida`
  - `precio_unitario`
  - `subtotal`
- Calcular subtotales en frontend.

### Subfase 10.4 - Vista previa y PDF

- Crear `VistaPreviaPdf.jsx`.
- Generar PDF con datos de cliente, proyecto, ítems y totales.
- Registrar archivo generado en `archivo_cotizacion`.
- Guardar:
  - `id_cotizacion`
  - `nombre_archivo`
  - `url_archivo`
  - `public_id_cloudinary`
  - `id_usuario_generador`

## Fase 11 - Finanzas

### Subfase 11.1 - Pagos de proyectos

- Implementar `PaginaPagos.jsx`.
- Crear `FormularioPago.jsx`.
- Guardar en `pago_proyecto`.
- Usar:
  - `id_proyecto`
  - `monto_pago`
  - `fecha_pago`
  - `metodo_pago`
  - `referencia_pago`
  - `observacion`
  - `id_usuario_registro`
- Restringir acceso a Administrador.

### Subfase 11.2 - Gastos de órdenes

- Implementar `PaginaGastos.jsx`.
- Crear `FormularioGasto.jsx`.
- Guardar en `gasto_orden`.
- Usar:
  - `id_orden_trabajo`
  - `concepto`
  - `monto`
  - `fecha_gasto`
  - `id_usuario_registro`
- Restringir acceso financiero según rol.

### Subfase 11.3 - Resumen financiero básico

- Calcular total cotizado por proyecto.
- Calcular pagos registrados.
- Calcular gastos por orden.
- Mostrar balance básico solo a Administrador.

## Fase 12 - Dashboard, Bitácora y Reportes

### Subfase 12.1 - Dashboard operativo

- Crear `PaginaDashboard.jsx`.
- Mostrar:
  - proyectos activos
  - órdenes pendientes
  - mantenimientos próximos
  - mantenimientos vencidos
  - carga de técnicos
  - alertas operativas

### Subfase 12.2 - Bitácora general

- Implementar módulo `bitacora`.
- Crear `PaginaBitacora.jsx`.
- Crear `TablaBitacora.jsx`.
- Consultar tabla `bitacora`.
- Filtrar por usuario, tabla modificada, acción y fecha.

### Subfase 12.3 - Bitácora de proyectos

- Mostrar `bitacora_proyecto` dentro del detalle de proyecto.
- Permitir registrar notas de avance.
- Asociar cada registro a `id_proyecto` e `id_usuario`.

### Subfase 12.4 - Reportes básicos

- Implementar módulo `reportes`.
- Crear:
  - `ReporteProductividadTecnico.jsx`
  - `ReporteMantenimientos.jsx`
  - `ReporteProductosUsados.jsx`
  - `ReporteFinancieroBasico.jsx`
- Restringir reporte financiero a Administrador.
- Permitir filtros por fecha, técnico, proyecto y estado.

## Fase 13 - Validación Final

### Subfase 13.1 - Validación funcional

- Probar login.
- Probar carga de usuario interno.
- Probar permisos por rol.
- Probar CRUD de módulos principales.
- Probar generación de PDF.
- Probar subida a Cloudinary.

### Subfase 13.2 - Validación responsive

- Revisar escritorio.
- Revisar tablet.
- Revisar celular.
- Validar tablas con scroll horizontal cuando sea necesario.
- Validar formularios largos en pantallas pequeñas.

### Subfase 13.3 - Validación de seguridad

- Confirmar que no existe `service role key` en frontend.
- Confirmar que no se exponen secretos de Cloudinary.
- Confirmar que el login no usa `password_hash`.
- Confirmar que rutas protegidas bloquean accesos no permitidos.
- Dejar advertencia visible en comentarios técnicos sobre RLS desactivado.

### Subfase 13.4 - Preparación para producción

- Documentar pendientes:
  - habilitar RLS
  - crear políticas por rol
  - crear usuarios en Supabase Auth
  - crear roles iniciales
  - crear permisos iniciales
  - crear relaciones en `rol_permiso`
  - crear empleado y usuario administrador inicial
- Ejecutar build final.
- Corregir errores de compilación.
- Validar navegación completa.

## Criterios de Aceptación

- La aplicación inicia correctamente con `npm run dev`.
- Toda la estructura está en español.
- No existen carpetas principales con nombres en inglés.
- La app usa únicamente tablas y columnas reales.
- Supabase Auth funciona y se vincula con `usuario.correo_acceso`.
- Cada rol ve solo lo que le corresponde.
- Técnico de Campo solo ve sus órdenes asignadas.
- Archivos se suben a Cloudinary y se registran en Supabase.
- Cotizaciones generan PDF y guardan archivo.
- Dashboard muestra datos operativos reales.
- No hay claves sensibles expuestas.
- El sistema queda preparado para habilitar RLS antes de producción.

## Supuestos

- Los datos iniciales de roles, permisos y usuario administrador se cargarán manualmente en Supabase.
- `usuario.correo_acceso` coincidirá con el correo de Supabase Auth.
- `password_hash` no será usado en el frontend.
- Cloudinary tendrá un unsigned upload preset restringido.
- RLS estará desactivado solo durante desarrollo.
