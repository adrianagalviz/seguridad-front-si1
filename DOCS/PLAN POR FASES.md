# Plan por Fases - Frontend JORSEGTEC

## Resumen

Crear una aplicación administrativa responsive con React JS, Vite, Tailwind CSS 4, Supabase JS Client y React Router DOM, desde cero, porque el repositorio actualmente solo contiene documentación.  
La app respetará estrictamente las 28 tablas reales de `seguridad-si1` documentadas en `DOCS/BD Final.md`, sin inventar tablas ni columnas.

La autenticación usará **Supabase Auth** y se vinculará con la tabla `usuario` por `correo_acceso`. La columna `password_hash` no se validará desde React. Cloudinary usará **unsigned upload preset restringido** y guardará `url_archivo` + `public_id_cloudinary`.

## Fases

### Fase 1 - Base del Proyecto

- Crear proyecto con Vite, React JS y Node.js `22.22.2`.
- Instalar dependencias: `@supabase/supabase-js`, `react-router-dom`, Tailwind CSS 4, librería PDF y utilidades necesarias.
- Crear estructura obligatoria en español: `aplicacion`, `configuracion`, `estilos`, `rutas`, `contexto`, `utilidades`, `servicios`, `componentes`, `modulos`.
- Configurar variables `.env`:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_CLOUDINARY_CLOUD_NAME`
  - `VITE_CLOUDINARY_UPLOAD_PRESET`
- Agregar comentarios claros indicando que RLS está desactivado y debe habilitarse antes de producción.

### Fase 2 - Autenticación, Sesión y Permisos

- Implementar login con Supabase Auth.
- Buscar el perfil interno en `usuario` usando `correo_acceso`.
- Cargar rol desde `rol` y permisos desde `rol_permiso` + `permiso`.
- Crear protección de rutas con:
  - `RutasPublicas.jsx`
  - `RutasPrivadas.jsx`
  - `RutasPorRol.jsx`
- Implementar acceso por roles:
  - Administrador: acceso total.
  - Técnico Superior: proyectos, órdenes, técnicos, mantenimientos, evidencias, bitácora de proyectos, reportes técnicos.
  - Técnico de Campo: solo órdenes asignadas, avances, evidencias, materiales y cambios de estado permitidos.
  - Atención al Cliente: clientes, ubicaciones, consulta de proyectos/mantenimientos y solicitudes básicas.
- Bloquear visualmente menús y rutas no permitidas.

### Fase 3 - Diseño Base y Componentes Reutilizables

- Crear `LayoutPrincipal`, `BarraSuperior`, `MenuLateral` e `ItemMenu`.
- Crear componentes comunes: `Boton`, `CampoTexto`, `Selector`, `Modal`, `Tabla`, `Tarjeta`, `Cargador`, `MensajeVacio`, `Confirmacion`.
- Diseñar interfaz administrativa sobria, responsive y optimizada para uso repetitivo.
- Implementar estados de carga, error, vacío, confirmación y validación básica.
- Mantener todos los nombres de carpetas, archivos, funciones y comentarios en español.

### Fase 4 - Módulos Maestros

- Implementar CRUD y tablas para:
  - Personas, clientes y ubicaciones.
  - Empleados y especialidades.
  - Usuarios, roles, permisos y asignación rol-permiso.
  - Categorías, productos y tipos de servicio.
- Respetar relaciones reales:
  - `persona` -> `cliente`
  - `persona` -> `empleado`
  - `empleado` -> `usuario`
  - `rol` -> `usuario`
  - `rol` + `permiso` -> `rol_permiso`
  - `categoria_producto` -> `producto_catalogo`

### Fase 5 - Operación Principal

- Implementar gestión de proyectos usando `proyecto`, `estado_proyecto`, `archivo_proyecto` y `bitacora_proyecto`.
- Implementar órdenes de trabajo usando `orden_trabajo`, `orden_tecnico`, `material_usado_orden`, `evidencia_orden` y `gasto_orden`.
- Implementar mantenimientos preventivos usando `programacion_mantenimiento`.
- Aplicar estados reales de enums:
  - Proyecto: `Registrado`, `Cotizado`, `Aprobado`, `En ejecución`, `Finalizado`, `Cancelado`.
  - Orden: `Pendiente`, `Asignada`, `En proceso`, `Finalizada`, `Reprogramada`, `Cancelada`.
  - Mantenimiento: `Programado`, `Próximo`, `Vencido`, `Realizado`, `Reprogramado`, `Cancelado`.
- Para Técnico de Campo, filtrar órdenes por `orden_tecnico.id_empleado`.

### Fase 6 - Cotizaciones, Finanzas y Archivos

- Implementar cotizaciones con `cotizacion`, `detalle_cotizacion` y `archivo_cotizacion`.
- Calcular `subtotal`, `descuento` y `total` en frontend antes de guardar.
- Exportar cotizaciones a PDF y registrar archivo generado en `archivo_cotizacion`.
- Implementar pagos con `pago_proyecto`.
- Implementar gastos con `gasto_orden`.
- Subir evidencias y archivos a Cloudinary con unsigned preset restringido.
- Guardar siempre `url_archivo` y `public_id_cloudinary` según las tablas reales.

### Fase 7 - Dashboard, Bitácoras y Reportes

- Crear dashboard operativo con:
  - Proyectos activos.
  - Órdenes pendientes.
  - Mantenimientos próximos/vencidos.
  - Carga por técnico.
  - Alertas operativas.
- Implementar bitácora general usando `bitacora`.
- Implementar bitácora de proyectos usando `bitacora_proyecto`.
- Crear reportes básicos:
  - Productividad por técnico.
  - Mantenimientos.
  - Productos usados.
  - Financiero básico.
- Restringir reportes financieros a Administrador.

### Fase 8 - Validación Final y Preparación

- Revisar responsive en PC, tablet y celular.
- Verificar rutas, permisos y menús por cada rol.
- Validar formularios contra columnas obligatorias de la base real.
- Verificar que no exista `service role key` ni secretos sensibles en frontend.
- Documentar pasos pendientes antes de producción:
  - Habilitar RLS.
  - Crear políticas por rol.
  - Configurar usuarios iniciales en Supabase Auth.
  - Crear registros base en `rol`, `permiso`, `rol_permiso`, `empleado` y `usuario`.

## Interfaces y Convenciones

- Supabase se centralizará en `src/configuracion/supabaseCliente.js`.
- Rutas del sistema se definirán en `src/configuracion/rutasSistema.js`.
- Cada módulo tendrá `paginas`, `componentes` y `servicios`.
- Los servicios consultarán solo tablas existentes y columnas documentadas.
- Los permisos se evaluarán con `validarPermisos.js`.
- El usuario activo tendrá esta forma lógica en contexto:
  - sesión de Supabase Auth
  - registro de `usuario`
  - registro de `empleado`
  - rol
  - lista de permisos
- No se crearán nombres en inglés como `components`, `pages`, `services`, `hooks`, `utils`, `layouts` o `features`.

## Pruebas y Criterios de Aceptación

- La app inicia con `npm run dev` usando Node.js `22.22.2`.
- Login válido carga sesión, usuario interno, rol y permisos.
- Cada rol ve únicamente sus módulos permitidos.
- Técnico de Campo solo ve órdenes asignadas.
- Formularios guardan datos usando nombres reales de columnas.
- Cotización calcula totales y genera PDF.
- Archivos y evidencias se suben a Cloudinary y se registran en Supabase.
- No hay claves sensibles expuestas.
- La app se ve correctamente en escritorio, tablet y móvil.

## Supuestos

- Los roles, permisos y primer usuario administrador se crearán manualmente en Supabase antes de usar el frontend.
- `usuario.correo_acceso` debe coincidir con el correo de Supabase Auth.
- `password_hash` queda fuera del frontend y no se usará para login.
- RLS seguirá desactivado solo durante desarrollo; antes de producción debe habilitarse obligatoriamente.
