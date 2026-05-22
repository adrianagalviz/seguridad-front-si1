# Contexto para crear la base de datos en Supabase - JORSEGTEC

## 1. Contexto del proyecto

Nombre del proyecto: Aplicación Web para Gestionar Proyectos de Servicios y Mantenimientos de Seguridad Electrónica en la Empresa JORSEGTEC.

La empresa necesita una solución para reducir la gestión desarticulada de información operativa. Actualmente, en empresas del rubro se usan herramientas dispersas como Excel, WhatsApp, Google Drive y cuadernos físicos. Esta dispersión provoca dificultad para consultar rápido el historial de clientes, ubicaciones, equipos instalados, mantenimientos previos, órdenes realizadas y materiales usados.

El sistema busca centralizar la información y actuar como un mecanismo de control operativo, reduciendo la entropía organizacional mediante registro, seguimiento, alertas, reportes y control de estados.

## 2. Alcance confirmado

Decisiones confirmadas:

- El sistema será una aplicación web responsive, adaptable a PC, Android e iOS mediante navegador.
- No será una aplicación móvil nativa.
- Los técnicos tendrán acceso al software, pero con permisos limitados según su rol.
- El cliente nunca tendrá acceso al sistema.
- Las fotos y evidencias se manejarán mediante Cloudinary.
- Lo generado desde la web, principalmente cotizaciones y reportes, podrá exportarse a PDF.
- La frecuencia de mantenimiento será configurable por cada caso, con recomendación de 3 a 6 meses.
- Solo existirá catálogo de productos y precios. No habrá control de inventario con entradas, salidas, kardex ni stock.
- No se incluirá facturación electrónica, integración tributaria, contabilidad completa, geolocalización en tiempo real, monitoreo remoto ni pasarelas de pago.

## 3. Módulos funcionales del sistema

1. Módulo de autenticación y control de acceso: permite inicio de sesión, cierre de sesión, usuarios internos y control por roles.

2. Módulo de gestión de clientes y empleados: permite registrar clientes naturales o jurídicos, empleados, técnicos, especialidades y ubicaciones del cliente.

3. Módulo de gestión de proyectos: permite registrar proyectos contratados, estados, monto cotizado, documentos, bitácora y relación con cliente y ubicación.

4. Módulo de órdenes de trabajo: permite crear intervenciones técnicas dentro de un proyecto, asignar técnicos, controlar estados, registrar tiempos, materiales usados y evidencias.

5. Módulo de programación de mantenimientos: permite programar mantenimientos preventivos, elegir frecuencia, reprogramar, generar órdenes y mostrar alertas por color.

6. Módulo de finanzas básicas: permite registrar pagos parciales, calcular saldos pendientes y registrar gastos directos por orden de trabajo.

7. Módulo de dashboard operativo: muestra proyectos activos, órdenes pendientes, mantenimientos próximos/vencidos, carga de técnicos y cuentas pendientes.

8. Módulo de reportes gerenciales: permite consultar productividad por técnico, equipos más usados, mantenimientos pendientes, proyectos finalizados y gastos.

9. Módulo de catálogo de productos y precios: permite registrar categorías, equipos, materiales, servicios y precios referenciales, sin control de stock.

10. Módulo de cotizaciones: permite crear cotizaciones, agregar ítems, calcular totales y exportar PDF.

## 4. Roles del sistema

Roles definidos:

- Administrador: control total del sistema.
- Técnico Superior: supervisa proyectos, órdenes, técnicos y mantenimientos.
- Técnico de Campo: atiende órdenes asignadas, registra avances, materiales y evidencias.
- Atención al Cliente: registra clientes, consultas, solicitudes y seguimiento básico.

El cliente no es usuario del sistema y no tiene acceso.

## 5. Requisitos funcionales principales

RF-01 El sistema debe permitir iniciar sesión con correo y contraseña.
RF-02 El sistema debe restringir funciones según el rol del usuario.
RF-03 El sistema debe permitir registrar clientes naturales y jurídicos.
RF-04 El sistema debe permitir registrar ubicaciones por cliente.
RF-05 El sistema debe permitir registrar empleados y técnicos.
RF-06 El sistema debe permitir asignar especialidades a técnicos.
RF-07 El sistema debe permitir registrar proyectos asociados a clientes y ubicaciones.
RF-08 El sistema debe permitir controlar el estado del proyecto.
RF-09 El sistema debe permitir registrar bitácora y archivos de proyecto.
RF-10 El sistema debe permitir crear órdenes de trabajo.
RF-11 El sistema debe permitir asignar uno o varios técnicos a una orden.
RF-12 El sistema debe permitir registrar materiales usados sin descontar inventario.
RF-13 El sistema debe permitir subir evidencias a Cloudinary.
RF-14 El sistema debe permitir programar mantenimientos preventivos.
RF-15 El sistema debe permitir reprogramar mantenimientos.
RF-16 El sistema debe mostrar alertas verde, amarillo y rojo para mantenimientos.
RF-17 El sistema debe permitir registrar pagos parciales.
RF-18 El sistema debe permitir registrar gastos directos por orden.
RF-19 El sistema debe permitir manejar un catálogo de productos y precios.
RF-20 El sistema debe permitir generar cotizaciones y exportarlas a PDF.
RF-21 El sistema debe permitir consultar dashboard operativo.
RF-22 El sistema debe permitir generar reportes gerenciales.

## 6. Requisitos no funcionales principales

RNF-01 El sistema debe ser responsive para PC, tablets y celulares.
RNF-02 El sistema debe funcionar en navegadores modernos.
RNF-03 Las contraseñas deben almacenarse cifradas.
RNF-04 El sistema debe validar datos obligatorios.
RNF-05 La interfaz debe ser clara para usuarios no técnicos.
RNF-06 El sistema debe proteger información de clientes, proyectos, pagos y evidencias.
RNF-07 Las consultas principales deben responder en un tiempo razonable.
RNF-08 El sistema debe permitir subir imágenes y documentos.
RNF-09 El sistema debe guardar las URL y public_id de Cloudinary cuando se suban archivos.
RNF-10 La estructura debe ser escalable para agregar inventario real, app móvil nativa o notificaciones avanzadas en el futuro.

## 7. Casos de uso principales

CU-01 Iniciar sesión: usuarios internos ingresan con correo y contraseña.
CU-02 Gestionar usuarios: el administrador crea, edita o desactiva cuentas internas.
CU-03 Registrar cliente: atención al cliente o administrador registra datos del cliente.
CU-04 Registrar ubicación del cliente: se agregan domicilios, oficinas o sucursales.
CU-05 Consultar historial del cliente: se revisan proyectos, órdenes y mantenimientos asociados.
CU-06 Registrar proyecto: se crea un proyecto asociado a cliente, ubicación y tipo de servicio.
CU-07 Actualizar estado del proyecto: se cambia el estado operativo del proyecto.
CU-08 Registrar bitácora del proyecto: se agregan observaciones y avances.
CU-09 Adjuntar archivo del proyecto: se guardan documentos o imágenes relacionados.
CU-10 Crear orden de trabajo: se crea una intervención técnica dentro de un proyecto.
CU-11 Asignar técnico: se asignan uno o varios técnicos a una orden.
CU-12 Ejecutar orden de trabajo: el técnico registra avance, tiempos, materiales y evidencias.
CU-13 Registrar materiales usados: se documentan materiales sin control de inventario.
CU-14 Subir evidencia: se suben fotos o documentos mediante Cloudinary.
CU-15 Programar mantenimiento: se crea mantenimiento preventivo con frecuencia elegida.
CU-16 Reprogramar mantenimiento: se cambia la fecha y se registra motivo.
CU-17 Visualizar alertas: se muestran alertas verde, amarillo y rojo.
CU-18 Registrar pago parcial: se registra un pago asociado a un proyecto.
CU-19 Registrar gasto de orden: se registra un gasto directo asociado a una orden.
CU-20 Gestionar catálogo: se registran productos, materiales, servicios y precios.
CU-21 Generar cotización: se crea cotización con detalle de ítems y total.
CU-22 Exportar cotización a PDF: se genera y guarda el archivo PDF.
CU-23 Consultar dashboard: se visualiza resumen operativo.
CU-24 Generar reportes: se consultan indicadores gerenciales.

## 8. Base de datos relacional simplificada para Supabase

La base de datos recomendada para implementar en Supabase es la versión simplificada. Mantiene todos los módulos importantes del alcance, pero evita tablas de auditoría e historial excesivo para una primera versión.

Supabase usa PostgreSQL, por lo que los tipos sugeridos pueden adaptarse así:
- INT PK puede implementarse como bigint generated by default as identity o uuid.
- VARCHAR puede usarse como text o varchar.
- BOOLEAN se mantiene como boolean.
- DATETIME se recomienda como timestamp with time zone.
- DECIMAL(10,2) se recomienda como numeric(10,2).
- ENUM puede implementarse como tipo enum de PostgreSQL o como text con constraint check.

## 9. Tablas eliminadas de la versión completa

Para simplificar la base de datos inicial, se eliminaron tablas poco importantes para la primera versión:

- permiso: los permisos pueden controlarse por rol desde el código.
- rol_permiso: no es necesario si los permisos son fijos por rol.
- estado_proyecto: se reemplazó por campo estado en proyecto.
- historial_estado_proyecto: se deja para una versión futura.
- estado_orden_trabajo: se reemplazó por campo estado en orden_trabajo.
- historial_estado_orden: no es indispensable para la primera versión.
- estado_cotizacion: se reemplazó por campo estado en cotizacion.
- historial_reprogramacion_mantenimiento: se simplificó con campos dentro de programacion_mantenimiento.
- actividad_sistema: útil para auditoría, pero no indispensable.
- reporte_generado: los reportes pueden generarse directamente sin guardar historial.

## 10. Reglas importantes de diseño para Supabase

- El cliente no debe relacionarse con usuario porque no tendrá acceso.
- Solo los empleados pueden tener usuario.
- Un empleado puede tener usuario, pero no todos los empleados necesariamente deben tenerlo.
- Una persona puede ser cliente o empleado mediante tablas especializadas.
- Las evidencias, archivos de proyecto y PDFs deben guardar url_archivo y public_id_cloudinary.
- El catálogo no controla inventario, por lo tanto no deben crearse tablas de stock, kardex, entradas, salidas ni almacenes.
- Las cotizaciones pueden estar relacionadas a un proyecto o existir antes de crear el proyecto.
- Los materiales usados pueden referenciar producto_catalogo, pero también deben permitir descripción manual.
- La programación de mantenimiento puede existir sin orden de trabajo hasta que se decida generar la orden.
- Los estados pueden manejarse como ENUM o como TEXT con CHECK en PostgreSQL.

## 11. Diccionario de tablas y atributos

### Tabla: `rol`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_rol` | INT PK | Identificador del rol |
| `nombre_rol` | VARCHAR(50) | Administrador, Técnico Superior, Técnico de Campo, Atención al Cliente |
| `descripcion` | TEXT | Descripción del rol |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `persona`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_persona` | INT PK | Identificador |
| `tipo_persona` | ENUM | Natural / Jurídica |
| `nombre` | VARCHAR(100) | Nombre |
| `apellido` | VARCHAR(100) | Apellido si corresponde |
| `razon_social` | VARCHAR(150) | Razón social si corresponde |
| `documento` | VARCHAR(30) | CI, NIT u otro |
| `telefono` | VARCHAR(30) | Teléfono |
| `correo` | VARCHAR(100) | Correo |
| `direccion_general` | TEXT | Dirección general |
| `estado` | BOOLEAN | Activo/Inactivo |
| `fecha_registro` | DATETIME | Fecha de registro |

### Tabla: `cliente`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_cliente` | INT PK | Identificador |
| `id_persona` | INT FK UNIQUE | Relación con persona |
| `tipo_cliente` | ENUM | Natural / Empresa |
| `observaciones` | TEXT | Observaciones |

### Tabla: `empleado`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_empleado` | INT PK | Identificador |
| `id_persona` | INT FK UNIQUE | Relación con persona |
| `cargo` | VARCHAR(100) | Cargo |
| `fecha_contratacion` | DATE | Fecha de ingreso |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `usuario`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_usuario` | INT PK | Identificador |
| `id_empleado` | INT FK UNIQUE | Empleado asociado |
| `id_rol` | INT FK | Rol del usuario |
| `correo_acceso` | VARCHAR(100) | Correo para login |
| `password_hash` | VARCHAR(255) | Contraseña cifrada |
| `estado` | BOOLEAN | Activo/Inactivo |
| `fecha_creacion` | DATETIME | Fecha de creación |

### Tabla: `especialidad`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_especialidad` | INT PK | Identificador |
| `nombre_especialidad` | VARCHAR(100) | Cámaras, alarmas, redes, cableado, control de acceso |
| `descripcion` | TEXT | Descripción |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `empleado_especialidad`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_empleado_especialidad` | INT PK | Identificador |
| `id_empleado` | INT FK | Técnico |
| `id_especialidad` | INT FK | Especialidad |

### Tabla: `ubicacion_cliente`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_ubicacion` | INT PK | Identificador |
| `id_cliente` | INT FK | Cliente |
| `nombre_ubicacion` | VARCHAR(100) | Casa, oficina, sucursal, empresa |
| `direccion` | TEXT | Dirección |
| `referencia` | TEXT | Referencia |
| `telefono_contacto` | VARCHAR(30) | Teléfono de contacto |
| `responsable_contacto` | VARCHAR(100) | Responsable de la ubicación |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `tipo_servicio`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_tipo_servicio` | INT PK | Identificador |
| `nombre_servicio` | VARCHAR(100) | Instalación, mantenimiento, soporte, ampliación |
| `descripcion` | TEXT | Descripción |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `proyecto`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_proyecto` | INT PK | Identificador |
| `id_cliente` | INT FK | Cliente |
| `id_ubicacion` | INT FK | Ubicación del servicio |
| `id_tipo_servicio` | INT FK | Tipo de servicio |
| `codigo_proyecto` | VARCHAR(50) | Código interno |
| `nombre_proyecto` | VARCHAR(150) | Nombre del proyecto |
| `descripcion` | TEXT | Descripción |
| `estado` | ENUM | Registrado, Cotizado, Aprobado, En ejecución, Finalizado, Cancelado |
| `monto_cotizado` | DECIMAL(10,2) | Monto cotizado |
| `fecha_inicio_estimada` | DATE | Fecha estimada de inicio |
| `fecha_fin_estimada` | DATE | Fecha estimada de finalización |
| `fecha_inicio_real` | DATE | Fecha real de inicio |
| `fecha_fin_real` | DATE | Fecha real de finalización |
| `fecha_registro` | DATETIME | Fecha de registro |
| `id_usuario_registro` | INT FK | Usuario que registró |

### Tabla: `bitacora_proyecto`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_bitacora` | INT PK | Identificador |
| `id_proyecto` | INT FK | Proyecto |
| `id_usuario` | INT FK | Usuario que registra |
| `titulo` | VARCHAR(150) | Título |
| `descripcion` | TEXT | Detalle |
| `fecha_registro` | DATETIME | Fecha |

### Tabla: `archivo_proyecto`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_archivo_proyecto` | INT PK | Identificador |
| `id_proyecto` | INT FK | Proyecto |
| `id_usuario` | INT FK | Usuario que subió |
| `nombre_archivo` | VARCHAR(150) | Nombre del archivo |
| `tipo_archivo` | VARCHAR(50) | PDF, imagen, contrato, informe |
| `url_archivo` | TEXT | URL en Cloudinary u otro almacenamiento |
| `public_id_cloudinary` | VARCHAR(255) | ID de Cloudinary |
| `fecha_subida` | DATETIME | Fecha de subida |

### Tabla: `orden_trabajo`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_orden_trabajo` | INT PK | Identificador |
| `id_proyecto` | INT FK | Proyecto |
| `id_tipo_servicio` | INT FK | Tipo de intervención |
| `codigo_orden` | VARCHAR(50) | Código interno |
| `titulo` | VARCHAR(150) | Título de la orden |
| `descripcion` | TEXT | Descripción del trabajo |
| `estado` | ENUM | Pendiente, Asignada, En proceso, Finalizada, Reprogramada, Cancelada |
| `fecha_programada` | DATE | Fecha programada |
| `hora_inicio_programada` | TIME | Hora inicio programada |
| `hora_fin_programada` | TIME | Hora fin programada |
| `fecha_inicio_real` | DATETIME | Inicio real |
| `fecha_fin_real` | DATETIME | Fin real |
| `observaciones` | TEXT | Observaciones |
| `id_usuario_creador` | INT FK | Usuario que creó |
| `fecha_creacion` | DATETIME | Fecha de creación |

### Tabla: `orden_tecnico`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_orden_tecnico` | INT PK | Identificador |
| `id_orden_trabajo` | INT FK | Orden |
| `id_empleado` | INT FK | Técnico |
| `rol_en_orden` | VARCHAR(50) | Responsable, apoyo, supervisor |
| `fecha_asignacion` | DATETIME | Fecha de asignación |
| `estado_asignacion` | VARCHAR(50) | Activa, finalizada, cancelada |

### Tabla: `material_usado_orden`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_material_usado` | INT PK | Identificador |
| `id_orden_trabajo` | INT FK | Orden |
| `id_producto` | INT FK NULL | Producto del catálogo |
| `descripcion_material` | TEXT | Descripción del material |
| `cantidad` | DECIMAL(10,2) | Cantidad |
| `unidad_medida` | VARCHAR(30) | Unidad |
| `precio_referencial` | DECIMAL(10,2) | Precio referencial |

### Tabla: `evidencia_orden`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_evidencia` | INT PK | Identificador |
| `id_orden_trabajo` | INT FK | Orden |
| `id_usuario` | INT FK | Usuario que subió |
| `tipo_evidencia` | VARCHAR(50) | Foto, antes, después, conformidad, documento |
| `descripcion` | TEXT | Descripción |
| `url_archivo` | TEXT | URL de Cloudinary |
| `public_id_cloudinary` | VARCHAR(255) | ID de Cloudinary |
| `fecha_subida` | DATETIME | Fecha |

### Tabla: `programacion_mantenimiento`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_programacion_mantenimiento` | INT PK | Identificador |
| `id_proyecto` | INT FK | Proyecto |
| `id_ubicacion` | INT FK | Ubicación |
| `id_orden_trabajo` | INT FK NULL | Orden generada, si existe |
| `fecha_programada` | DATE | Fecha del mantenimiento |
| `frecuencia_meses` | INT | Frecuencia elegida: 3, 6, 12, etc. |
| `estado_mantenimiento` | ENUM | Programado, Próximo, Vencido, Realizado, Reprogramado, Cancelado |
| `nivel_alerta` | ENUM | Verde, Amarillo, Rojo |
| `fecha_reprogramacion` | DATE NULL | Nueva fecha si fue reprogramado |
| `motivo_reprogramacion` | TEXT NULL | Motivo |
| `observacion` | TEXT | Observación |
| `fecha_creacion` | DATETIME | Fecha de creación |

### Tabla: `pago_proyecto`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_pago` | INT PK | Identificador |
| `id_proyecto` | INT FK | Proyecto |
| `monto_pago` | DECIMAL(10,2) | Monto pagado |
| `fecha_pago` | DATE | Fecha de pago |
| `metodo_pago` | VARCHAR(50) | Efectivo, transferencia, QR |
| `referencia_pago` | VARCHAR(100) | Referencia |
| `observacion` | TEXT | Observación |
| `id_usuario_registro` | INT FK | Usuario que registró |
| `fecha_registro` | DATETIME | Fecha de registro |

### Tabla: `gasto_orden`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_gasto` | INT PK | Identificador |
| `id_orden_trabajo` | INT FK | Orden |
| `concepto` | VARCHAR(150) | Concepto |
| `monto` | DECIMAL(10,2) | Monto |
| `fecha_gasto` | DATE | Fecha |
| `id_usuario_registro` | INT FK | Usuario que registró |
| `fecha_registro` | DATETIME | Fecha de registro |

### Tabla: `categoria_producto`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_categoria` | INT PK | Identificador |
| `nombre_categoria` | VARCHAR(100) | Cámaras, alarmas, sensores, cableado, servicios |
| `descripcion` | TEXT | Descripción |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `producto_catalogo`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_producto` | INT PK | Identificador |
| `id_categoria` | INT FK | Categoría |
| `nombre_producto` | VARCHAR(150) | Nombre |
| `descripcion` | TEXT | Descripción |
| `marca` | VARCHAR(100) | Marca |
| `modelo` | VARCHAR(100) | Modelo |
| `unidad_medida` | VARCHAR(30) | Unidad |
| `precio_referencial` | DECIMAL(10,2) | Precio |
| `estado` | BOOLEAN | Activo/Inactivo |

### Tabla: `cotizacion`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_cotizacion` | INT PK | Identificador |
| `id_cliente` | INT FK | Cliente |
| `id_proyecto` | INT FK NULL | Proyecto relacionado |
| `codigo_cotizacion` | VARCHAR(50) | Código interno |
| `estado` | ENUM | Borrador, Enviada, Aprobada, Rechazada, Vencida |
| `fecha_emision` | DATE | Fecha de emisión |
| `fecha_validez` | DATE | Fecha de validez |
| `subtotal` | DECIMAL(10,2) | Subtotal |
| `descuento` | DECIMAL(10,2) | Descuento |
| `total` | DECIMAL(10,2) | Total |
| `observaciones` | TEXT | Observaciones |
| `id_usuario_creador` | INT FK | Usuario creador |
| `fecha_creacion` | DATETIME | Fecha |

### Tabla: `detalle_cotizacion`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_detalle_cotizacion` | INT PK | Identificador |
| `id_cotizacion` | INT FK | Cotización |
| `id_producto` | INT FK NULL | Producto del catálogo |
| `descripcion_item` | TEXT | Descripción |
| `cantidad` | DECIMAL(10,2) | Cantidad |
| `unidad_medida` | VARCHAR(30) | Unidad |
| `precio_unitario` | DECIMAL(10,2) | Precio |
| `subtotal` | DECIMAL(10,2) | Subtotal |

### Tabla: `archivo_cotizacion`

| Atributo | Tipo sugerido | Descripción |
|---|---|---|
| `id_archivo_cotizacion` | INT PK | Identificador |
| `id_cotizacion` | INT FK | Cotización |
| `nombre_archivo` | VARCHAR(150) | Nombre del PDF |
| `url_archivo` | TEXT | URL del archivo |
| `public_id_cloudinary` | VARCHAR(255) | ID de Cloudinary |
| `fecha_generacion` | DATETIME | Fecha |
| `id_usuario_generador` | INT FK | Usuario que generó |

## 12. Resumen de cardinalidades

| Tabla A | Tabla B | Cardinalidad |
|---|---|---|
| `rol` | `usuario` | 1..* |
| `persona` | `cliente` | 1..1 opcional |
| `persona` | `empleado` | 1..1 opcional |
| `empleado` | `usuario` | 1..1 opcional |
| `empleado` | `especialidad` | *..* mediante empleado_especialidad |
| `cliente` | `ubicacion_cliente` | 1..* |
| `cliente` | `proyecto` | 1..* |
| `ubicacion_cliente` | `proyecto` | 1..* |
| `tipo_servicio` | `proyecto` | 1..* |
| `usuario` | `proyecto` | 1..* |
| `proyecto` | `bitacora_proyecto` | 1..* |
| `proyecto` | `archivo_proyecto` | 1..* |
| `proyecto` | `orden_trabajo` | 1..* |
| `tipo_servicio` | `orden_trabajo` | 1..* |
| `orden_trabajo` | `empleado` | *..* mediante orden_tecnico |
| `orden_trabajo` | `material_usado_orden` | 1..* |
| `producto_catalogo` | `material_usado_orden` | 1..* opcional |
| `orden_trabajo` | `evidencia_orden` | 1..* |
| `proyecto` | `programacion_mantenimiento` | 1..* |
| `ubicacion_cliente` | `programacion_mantenimiento` | 1..* |
| `programacion_mantenimiento` | `orden_trabajo` | 0..1 a 0..1 |
| `proyecto` | `pago_proyecto` | 1..* |
| `orden_trabajo` | `gasto_orden` | 1..* |
| `categoria_producto` | `producto_catalogo` | 1..* |
| `cliente` | `cotizacion` | 1..* |
| `proyecto` | `cotizacion` | 0..* |
| `cotizacion` | `detalle_cotizacion` | 1..* |
| `producto_catalogo` | `detalle_cotizacion` | 1..* opcional |
| `cotizacion` | `archivo_cotizacion` | 1..* |

## 13. Módulos cubiertos por la base de datos

| Módulo | Tablas relacionadas | Funciones cubiertas |
|---|---|---|
| Autenticación y control de acceso | `rol, usuario, empleado` | Inicio de sesión, control por rol, creación/desactivación de usuarios internos. |
| Gestión de clientes y empleados | `persona, cliente, empleado, ubicacion_cliente, especialidad, empleado_especialidad` | Registro de clientes, empleados, técnicos, ubicaciones y especialidades. |
| Gestión de proyectos | `proyecto, tipo_servicio, bitacora_proyecto, archivo_proyecto` | Registro y seguimiento de proyectos, estados, monto cotizado, bitácora y documentos. |
| Órdenes de trabajo | `orden_trabajo, orden_tecnico, material_usado_orden, evidencia_orden` | Creación de órdenes, asignación técnica, control de estados, materiales y evidencias. |
| Programación de mantenimientos | `programacion_mantenimiento, orden_trabajo` | Mantenimientos preventivos, frecuencia, reprogramación, alertas y órdenes asociadas. |
| Finanzas básicas | `pago_proyecto, gasto_orden, proyecto` | Pagos parciales, saldo pendiente y gastos directos. |
| Catálogo de productos y precios | `categoria_producto, producto_catalogo` | Productos, materiales, servicios y precios referenciales sin inventario. |
| Cotizaciones | `cotizacion, detalle_cotizacion, archivo_cotizacion, producto_catalogo` | Creación de cotizaciones, detalle de ítems, cálculo de totales y exportación a PDF. |
| Dashboard operativo | `proyecto, orden_trabajo, programacion_mantenimiento, pago_proyecto, empleado, orden_tecnico` | Resumen de proyectos, órdenes, mantenimientos, técnicos y cuentas pendientes. |
| Reportes gerenciales | `proyecto, orden_trabajo, orden_tecnico, producto_catalogo, material_usado_orden, programacion_mantenimiento` | Productividad, equipos usados, mantenimientos pendientes, proyectos finalizados y gastos. |
