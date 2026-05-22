# Esquema Real de la Base de Datos - seguridad-si1

Este documento contiene la estructura actual y real de la base de datos de Supabase para el proyecto **seguridad-si1**, obtenida directamente de la API del proyecto. Esta información sirve de contexto para la creación y desarrollo del frontend en React JS.

> [!WARNING]
> **Alerta Crítica de Seguridad**: La base de datos tiene **Row Level Security (RLS) desactivado** en las 28 tablas. Cualquier usuario con la anon key puede leer o modificar cualquier registro. Se recomienda habilitar RLS y definir políticas adecuadas.

## Resumen de Tablas (28 en total)

- [ubicacion_cliente](#tabla-ubicacion_cliente) (8 columnas)
- [persona](#tabla-persona) (11 columnas)
- [bitacora_proyecto](#tabla-bitacora_proyecto) (6 columnas)
- [estado_proyecto](#tabla-estado_proyecto) (5 columnas)
- [bitacora](#tabla-bitacora) (13 columnas)
- [usuario](#tabla-usuario) (7 columnas)
- [empleado_especialidad](#tabla-empleado_especialidad) (3 columnas)
- [rol](#tabla-rol) (4 columnas)
- [cliente](#tabla-cliente) (4 columnas)
- [categoria_producto](#tabla-categoria_producto) (4 columnas)
- [especialidad](#tabla-especialidad) (4 columnas)
- [permiso](#tabla-permiso) (7 columnas)
- [proyecto](#tabla-proyecto) (16 columnas)
- [programacion_mantenimiento](#tabla-programacion_mantenimiento) (12 columnas)
- [producto_catalogo](#tabla-producto_catalogo) (9 columnas)
- [pago_proyecto](#tabla-pago_proyecto) (9 columnas)
- [empleado](#tabla-empleado) (5 columnas)
- [material_usado_orden](#tabla-material_usado_orden) (7 columnas)
- [orden_trabajo](#tabla-orden_trabajo) (15 columnas)
- [archivo_cotizacion](#tabla-archivo_cotizacion) (7 columnas)
- [archivo_proyecto](#tabla-archivo_proyecto) (8 columnas)
- [orden_tecnico](#tabla-orden_tecnico) (6 columnas)
- [rol_permiso](#tabla-rol_permiso) (5 columnas)
- [tipo_servicio](#tabla-tipo_servicio) (4 columnas)
- [cotizacion](#tabla-cotizacion) (13 columnas)
- [gasto_orden](#tabla-gasto_orden) (7 columnas)
- [detalle_cotizacion](#tabla-detalle_cotizacion) (8 columnas)
- [evidencia_orden](#tabla-evidencia_orden) (8 columnas)

---

### Tabla: `ubicacion_cliente` <a name="tabla-ubicacion_cliente"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_ubicacion` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_cliente` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `nombre_ubicacion` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `direccion` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `referencia` | `text` (text) | No | Sí | - | - |
| `telefono_contacto` | `character varying` (varchar) | No | Sí | - | - |
| `responsable_contacto` | `character varying` (varchar) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `ubicacion_cliente_id_cliente_fkey` | `ubicacion_cliente.id_cliente` | `cliente.id_cliente` | Saliente (FK local) |
| `proyecto_id_ubicacion_fkey` | `proyecto.id_ubicacion` | `ubicacion_cliente.id_ubicacion` | Entrante (FK en tabla destino) |
| `programacion_mantenimiento_id_ubicacion_fkey` | `programacion_mantenimiento.id_ubicacion` | `ubicacion_cliente.id_ubicacion` | Entrante (FK en tabla destino) |

---

### Tabla: `persona` <a name="tabla-persona"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_persona` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `tipo_persona` | `USER-DEFINED` (tipo_persona_enum) | No | **No (NOT NULL)** | - |  Enum: [Natural, Jurídica] |
| `nombre` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `apellido` | `character varying` (varchar) | No | Sí | - | - |
| `razon_social` | `character varying` (varchar) | No | Sí | - | - |
| `documento` | `character varying` (varchar) | No | Sí | - | - |
| `telefono` | `character varying` (varchar) | No | Sí | - | - |
| `correo` | `character varying` (varchar) | No | Sí | - | - |
| `direccion_general` | `text` (text) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |
| `fecha_registro` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `cliente_id_persona_fkey` | `cliente.id_persona` | `persona.id_persona` | Entrante (FK en tabla destino) |
| `empleado_id_persona_fkey` | `empleado.id_persona` | `persona.id_persona` | Entrante (FK en tabla destino) |

---

### Tabla: `bitacora_proyecto` <a name="tabla-bitacora_proyecto"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_bitacora` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_proyecto` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_usuario` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `titulo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `fecha_registro` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `bitacora_proyecto_id_proyecto_fkey` | `bitacora_proyecto.id_proyecto` | `proyecto.id_proyecto` | Saliente (FK local) |
| `bitacora_proyecto_id_usuario_fkey` | `bitacora_proyecto.id_usuario` | `usuario.id_usuario` | Saliente (FK local) |

---

### Tabla: `estado_proyecto` <a name="tabla-estado_proyecto"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 6

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_estado_proyecto` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `nombre_estado` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `orden_estado` | `integer` (int4) | No | **No (NOT NULL)** | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `proyecto_id_estado_proyecto_fkey` | `proyecto.id_estado_proyecto` | `estado_proyecto.id_estado_proyecto` | Entrante (FK en tabla destino) |

---

### Tabla: `bitacora` <a name="tabla-bitacora"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_bitacora` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_usuario` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `tabla_modificada` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `id_registro_modificado` | `bigint` (int8) | No | Sí | - | - |
| `campo_modificado` | `character varying` (varchar) | No | Sí | - | - |
| `accion` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `valor_anterior` | `text` (text) | No | Sí | - | - |
| `valor_actual` | `text` (text) | No | Sí | - | - |
| `descripcion_cambio` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `ip_usuario` | `inet` (inet) | No | Sí | - | - |
| `fecha_modificacion` | `date` (date) | No | Sí | `CURRENT_DATE` | - |
| `hora_modificacion` | `time without time zone` (time) | No | Sí | `CURRENT_TIME` | - |
| `fecha_hora_modificacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `bitacora_id_usuario_fkey` | `bitacora.id_usuario` | `usuario.id_usuario` | Saliente (FK local) |

---

### Tabla: `usuario` <a name="tabla-usuario"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_usuario` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_empleado` | `bigint` (int8) | No | **No (NOT NULL)** | - | unique |
| `id_rol` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `correo_acceso` | `character varying` (varchar) | No | **No (NOT NULL)** | - | unique |
| `password_hash` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |
| `fecha_creacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `usuario_id_empleado_fkey` | `usuario.id_empleado` | `empleado.id_empleado` | Saliente (FK local) |
| `usuario_id_rol_fkey` | `usuario.id_rol` | `rol.id_rol` | Saliente (FK local) |
| `proyecto_id_usuario_registro_fkey` | `proyecto.id_usuario_registro` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `bitacora_proyecto_id_usuario_fkey` | `bitacora_proyecto.id_usuario` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `archivo_proyecto_id_usuario_fkey` | `archivo_proyecto.id_usuario` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `orden_trabajo_id_usuario_creador_fkey` | `orden_trabajo.id_usuario_creador` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `evidencia_orden_id_usuario_fkey` | `evidencia_orden.id_usuario` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `pago_proyecto_id_usuario_registro_fkey` | `pago_proyecto.id_usuario_registro` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `gasto_orden_id_usuario_registro_fkey` | `gasto_orden.id_usuario_registro` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `cotizacion_id_usuario_creador_fkey` | `cotizacion.id_usuario_creador` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `archivo_cotizacion_id_usuario_generador_fkey` | `archivo_cotizacion.id_usuario_generador` | `usuario.id_usuario` | Entrante (FK en tabla destino) |
| `bitacora_id_usuario_fkey` | `bitacora.id_usuario` | `usuario.id_usuario` | Entrante (FK en tabla destino) |

---

### Tabla: `empleado_especialidad` <a name="tabla-empleado_especialidad"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_empleado_especialidad` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_empleado` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_especialidad` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `empleado_especialidad_id_empleado_fkey` | `empleado_especialidad.id_empleado` | `empleado.id_empleado` | Saliente (FK local) |
| `empleado_especialidad_id_especialidad_fkey` | `empleado_especialidad.id_especialidad` | `especialidad.id_especialidad` | Saliente (FK local) |

---

### Tabla: `rol` <a name="tabla-rol"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_rol` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `nombre_rol` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `usuario_id_rol_fkey` | `usuario.id_rol` | `rol.id_rol` | Entrante (FK en tabla destino) |
| `rol_permiso_id_rol_fkey` | `rol_permiso.id_rol` | `rol.id_rol` | Saliente (FK local) |

---

### Tabla: `cliente` <a name="tabla-cliente"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_cliente` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_persona` | `bigint` (int8) | No | **No (NOT NULL)** | - | unique |
| `tipo_cliente` | `USER-DEFINED` (tipo_cliente_enum) | No | **No (NOT NULL)** | - |  Enum: [Natural, Empresa] |
| `observaciones` | `text` (text) | No | Sí | - | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `cliente_id_persona_fkey` | `cliente.id_persona` | `persona.id_persona` | Saliente (FK local) |
| `ubicacion_cliente_id_cliente_fkey` | `ubicacion_cliente.id_cliente` | `cliente.id_cliente` | Entrante (FK en tabla destino) |
| `proyecto_id_cliente_fkey` | `proyecto.id_cliente` | `cliente.id_cliente` | Entrante (FK en tabla destino) |
| `cotizacion_id_cliente_fkey` | `cotizacion.id_cliente` | `cliente.id_cliente` | Entrante (FK en tabla destino) |

---

### Tabla: `categoria_producto` <a name="tabla-categoria_producto"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_categoria` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `nombre_categoria` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `producto_catalogo_id_categoria_fkey` | `producto_catalogo.id_categoria` | `categoria_producto.id_categoria` | Entrante (FK en tabla destino) |

---

### Tabla: `especialidad` <a name="tabla-especialidad"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_especialidad` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `nombre_especialidad` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `empleado_especialidad_id_especialidad_fkey` | `empleado_especialidad.id_especialidad` | `especialidad.id_especialidad` | Entrante (FK en tabla destino) |

---

### Tabla: `permiso` <a name="tabla-permiso"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_permiso` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `nombre_permiso` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `codigo_permiso` | `character varying` (varchar) | No | **No (NOT NULL)** | - | unique |
| `modulo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |
| `fecha_creacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `rol_permiso_id_permiso_fkey` | `rol_permiso.id_permiso` | `permiso.id_permiso` | Entrante (FK en tabla destino) |

---

### Tabla: `proyecto` <a name="tabla-proyecto"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_proyecto` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_cliente` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_ubicacion` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_tipo_servicio` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `codigo_proyecto` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `nombre_proyecto` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `USER-DEFINED` (estado_proyecto_enum) | No | Sí | `'Registrado'::estado_proyecto_enum` |  Enum: [Registrado, Cotizado, Aprobado, En ejecución, Finalizado, Cancelado] |
| `monto_cotizado` | `numeric` (numeric) | No | Sí | - | - |
| `fecha_inicio_estimada` | `date` (date) | No | Sí | - | - |
| `fecha_fin_estimada` | `date` (date) | No | Sí | - | - |
| `fecha_inicio_real` | `date` (date) | No | Sí | - | - |
| `fecha_fin_real` | `date` (date) | No | Sí | - | - |
| `fecha_registro` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |
| `id_usuario_registro` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_estado_proyecto` | `bigint` (int8) | No | Sí | - | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `proyecto_id_cliente_fkey` | `proyecto.id_cliente` | `cliente.id_cliente` | Saliente (FK local) |
| `proyecto_id_ubicacion_fkey` | `proyecto.id_ubicacion` | `ubicacion_cliente.id_ubicacion` | Saliente (FK local) |
| `proyecto_id_tipo_servicio_fkey` | `proyecto.id_tipo_servicio` | `tipo_servicio.id_tipo_servicio` | Saliente (FK local) |
| `proyecto_id_usuario_registro_fkey` | `proyecto.id_usuario_registro` | `usuario.id_usuario` | Saliente (FK local) |
| `bitacora_proyecto_id_proyecto_fkey` | `bitacora_proyecto.id_proyecto` | `proyecto.id_proyecto` | Entrante (FK en tabla destino) |
| `archivo_proyecto_id_proyecto_fkey` | `archivo_proyecto.id_proyecto` | `proyecto.id_proyecto` | Entrante (FK en tabla destino) |
| `orden_trabajo_id_proyecto_fkey` | `orden_trabajo.id_proyecto` | `proyecto.id_proyecto` | Entrante (FK en tabla destino) |
| `programacion_mantenimiento_id_proyecto_fkey` | `programacion_mantenimiento.id_proyecto` | `proyecto.id_proyecto` | Entrante (FK en tabla destino) |
| `pago_proyecto_id_proyecto_fkey` | `pago_proyecto.id_proyecto` | `proyecto.id_proyecto` | Entrante (FK en tabla destino) |
| `cotizacion_id_proyecto_fkey` | `cotizacion.id_proyecto` | `proyecto.id_proyecto` | Entrante (FK en tabla destino) |
| `proyecto_id_estado_proyecto_fkey` | `proyecto.id_estado_proyecto` | `estado_proyecto.id_estado_proyecto` | Saliente (FK local) |

---

### Tabla: `programacion_mantenimiento` <a name="tabla-programacion_mantenimiento"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_programacion_mantenimiento` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_proyecto` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_ubicacion` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_orden_trabajo` | `bigint` (int8) | No | Sí | - | - |
| `fecha_programada` | `date` (date) | No | **No (NOT NULL)** | - | - |
| `frecuencia_meses` | `integer` (int4) | No | **No (NOT NULL)** | - | - |
| `estado_mantenimiento` | `USER-DEFINED` (estado_mantenimiento_enum) | No | Sí | `'Programado'::estado_mantenimiento_enum` |  Enum: [Programado, Próximo, Vencido, Realizado, Reprogramado, Cancelado] |
| `nivel_alerta` | `USER-DEFINED` (nivel_alerta_enum) | No | Sí | `'Verde'::nivel_alerta_enum` |  Enum: [Verde, Amarillo, Rojo] |
| `fecha_reprogramacion` | `date` (date) | No | Sí | - | - |
| `motivo_reprogramacion` | `text` (text) | No | Sí | - | - |
| `observacion` | `text` (text) | No | Sí | - | - |
| `fecha_creacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `programacion_mantenimiento_id_proyecto_fkey` | `programacion_mantenimiento.id_proyecto` | `proyecto.id_proyecto` | Saliente (FK local) |
| `programacion_mantenimiento_id_ubicacion_fkey` | `programacion_mantenimiento.id_ubicacion` | `ubicacion_cliente.id_ubicacion` | Saliente (FK local) |
| `programacion_mantenimiento_id_orden_trabajo_fkey` | `programacion_mantenimiento.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Saliente (FK local) |

---

### Tabla: `producto_catalogo` <a name="tabla-producto_catalogo"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_producto` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_categoria` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `nombre_producto` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `marca` | `character varying` (varchar) | No | Sí | - | - |
| `modelo` | `character varying` (varchar) | No | Sí | - | - |
| `unidad_medida` | `character varying` (varchar) | No | Sí | - | - |
| `precio_referencial` | `numeric` (numeric) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `producto_catalogo_id_categoria_fkey` | `producto_catalogo.id_categoria` | `categoria_producto.id_categoria` | Saliente (FK local) |
| `material_usado_orden_id_producto_fkey` | `material_usado_orden.id_producto` | `producto_catalogo.id_producto` | Entrante (FK en tabla destino) |
| `detalle_cotizacion_id_producto_fkey` | `detalle_cotizacion.id_producto` | `producto_catalogo.id_producto` | Entrante (FK en tabla destino) |

---

### Tabla: `pago_proyecto` <a name="tabla-pago_proyecto"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_pago` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_proyecto` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `monto_pago` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `fecha_pago` | `date` (date) | No | **No (NOT NULL)** | - | - |
| `metodo_pago` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `referencia_pago` | `character varying` (varchar) | No | Sí | - | - |
| `observacion` | `text` (text) | No | Sí | - | - |
| `id_usuario_registro` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `fecha_registro` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `pago_proyecto_id_proyecto_fkey` | `pago_proyecto.id_proyecto` | `proyecto.id_proyecto` | Saliente (FK local) |
| `pago_proyecto_id_usuario_registro_fkey` | `pago_proyecto.id_usuario_registro` | `usuario.id_usuario` | Saliente (FK local) |

---

### Tabla: `empleado` <a name="tabla-empleado"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_empleado` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_persona` | `bigint` (int8) | No | **No (NOT NULL)** | - | unique |
| `cargo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `fecha_contratacion` | `date` (date) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `empleado_id_persona_fkey` | `empleado.id_persona` | `persona.id_persona` | Saliente (FK local) |
| `usuario_id_empleado_fkey` | `usuario.id_empleado` | `empleado.id_empleado` | Entrante (FK en tabla destino) |
| `empleado_especialidad_id_empleado_fkey` | `empleado_especialidad.id_empleado` | `empleado.id_empleado` | Saliente (FK local) |
| `orden_tecnico_id_empleado_fkey` | `orden_tecnico.id_empleado` | `empleado.id_empleado` | Entrante (FK en tabla destino) |

---

### Tabla: `material_usado_orden` <a name="tabla-material_usado_orden"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_material_usado` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_orden_trabajo` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_producto` | `bigint` (int8) | No | Sí | - | - |
| `descripcion_material` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `cantidad` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `unidad_medida` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `precio_referencial` | `numeric` (numeric) | No | Sí | - | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `material_usado_orden_id_orden_trabajo_fkey` | `material_usado_orden.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Saliente (FK local) |
| `material_usado_orden_id_producto_fkey` | `material_usado_orden.id_producto` | `producto_catalogo.id_producto` | Saliente (FK local) |

---

### Tabla: `orden_trabajo` <a name="tabla-orden_trabajo"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_orden_trabajo` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_proyecto` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_tipo_servicio` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `codigo_orden` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `titulo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `USER-DEFINED` (estado_orden_enum) | No | Sí | `'Pendiente'::estado_orden_enum` |  Enum: [Pendiente, Asignada, En proceso, Finalizada, Reprogramada, Cancelada] |
| `fecha_programada` | `date` (date) | No | Sí | - | - |
| `hora_inicio_programada` | `time without time zone` (time) | No | Sí | - | - |
| `hora_fin_programada` | `time without time zone` (time) | No | Sí | - | - |
| `fecha_inicio_real` | `timestamp with time zone` (timestamptz) | No | Sí | - | - |
| `fecha_fin_real` | `timestamp with time zone` (timestamptz) | No | Sí | - | - |
| `observaciones` | `text` (text) | No | Sí | - | - |
| `id_usuario_creador` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `fecha_creacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `orden_trabajo_id_proyecto_fkey` | `orden_trabajo.id_proyecto` | `proyecto.id_proyecto` | Saliente (FK local) |
| `orden_trabajo_id_tipo_servicio_fkey` | `orden_trabajo.id_tipo_servicio` | `tipo_servicio.id_tipo_servicio` | Saliente (FK local) |
| `orden_trabajo_id_usuario_creador_fkey` | `orden_trabajo.id_usuario_creador` | `usuario.id_usuario` | Saliente (FK local) |
| `orden_tecnico_id_orden_trabajo_fkey` | `orden_tecnico.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Entrante (FK en tabla destino) |
| `material_usado_orden_id_orden_trabajo_fkey` | `material_usado_orden.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Entrante (FK en tabla destino) |
| `evidencia_orden_id_orden_trabajo_fkey` | `evidencia_orden.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Entrante (FK en tabla destino) |
| `programacion_mantenimiento_id_orden_trabajo_fkey` | `programacion_mantenimiento.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Entrante (FK en tabla destino) |
| `gasto_orden_id_orden_trabajo_fkey` | `gasto_orden.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Entrante (FK en tabla destino) |

---

### Tabla: `archivo_cotizacion` <a name="tabla-archivo_cotizacion"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_archivo_cotizacion` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_cotizacion` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `nombre_archivo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `url_archivo` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `public_id_cloudinary` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `fecha_generacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |
| `id_usuario_generador` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `archivo_cotizacion_id_cotizacion_fkey` | `archivo_cotizacion.id_cotizacion` | `cotizacion.id_cotizacion` | Saliente (FK local) |
| `archivo_cotizacion_id_usuario_generador_fkey` | `archivo_cotizacion.id_usuario_generador` | `usuario.id_usuario` | Saliente (FK local) |

---

### Tabla: `archivo_proyecto` <a name="tabla-archivo_proyecto"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_archivo_proyecto` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_proyecto` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_usuario` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `nombre_archivo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `tipo_archivo` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `url_archivo` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `public_id_cloudinary` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `fecha_subida` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `archivo_proyecto_id_proyecto_fkey` | `archivo_proyecto.id_proyecto` | `proyecto.id_proyecto` | Saliente (FK local) |
| `archivo_proyecto_id_usuario_fkey` | `archivo_proyecto.id_usuario` | `usuario.id_usuario` | Saliente (FK local) |

---

### Tabla: `orden_tecnico` <a name="tabla-orden_tecnico"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_orden_tecnico` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_orden_trabajo` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_empleado` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `rol_en_orden` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `fecha_asignacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |
| `estado_asignacion` | `character varying` (varchar) | No | Sí | `'Activa'::character varying` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `orden_tecnico_id_orden_trabajo_fkey` | `orden_tecnico.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Saliente (FK local) |
| `orden_tecnico_id_empleado_fkey` | `orden_tecnico.id_empleado` | `empleado.id_empleado` | Saliente (FK local) |

---

### Tabla: `rol_permiso` <a name="tabla-rol_permiso"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_rol_permiso` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_rol` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_permiso` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `fecha_asignacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `rol_permiso_id_rol_fkey` | `rol_permiso.id_rol` | `rol.id_rol` | Saliente (FK local) |
| `rol_permiso_id_permiso_fkey` | `rol_permiso.id_permiso` | `permiso.id_permiso` | Saliente (FK local) |

---

### Tabla: `tipo_servicio` <a name="tabla-tipo_servicio"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_tipo_servicio` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `nombre_servicio` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `estado` | `boolean` (bool) | No | Sí | `true` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `proyecto_id_tipo_servicio_fkey` | `proyecto.id_tipo_servicio` | `tipo_servicio.id_tipo_servicio` | Entrante (FK en tabla destino) |
| `orden_trabajo_id_tipo_servicio_fkey` | `orden_trabajo.id_tipo_servicio` | `tipo_servicio.id_tipo_servicio` | Entrante (FK en tabla destino) |

---

### Tabla: `cotizacion` <a name="tabla-cotizacion"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_cotizacion` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_cliente` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_proyecto` | `bigint` (int8) | No | Sí | - | - |
| `codigo_cotizacion` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `estado` | `USER-DEFINED` (estado_cotizacion_enum) | No | Sí | `'Borrador'::estado_cotizacion_enum` |  Enum: [Borrador, Enviada, Aprobada, Rechazada, Vencida] |
| `fecha_emision` | `date` (date) | No | Sí | - | - |
| `fecha_validez` | `date` (date) | No | Sí | - | - |
| `subtotal` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `descuento` | `numeric` (numeric) | No | Sí | `0` | - |
| `total` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `observaciones` | `text` (text) | No | Sí | - | - |
| `id_usuario_creador` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `fecha_creacion` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `cotizacion_id_cliente_fkey` | `cotizacion.id_cliente` | `cliente.id_cliente` | Saliente (FK local) |
| `cotizacion_id_proyecto_fkey` | `cotizacion.id_proyecto` | `proyecto.id_proyecto` | Saliente (FK local) |
| `cotizacion_id_usuario_creador_fkey` | `cotizacion.id_usuario_creador` | `usuario.id_usuario` | Saliente (FK local) |
| `detalle_cotizacion_id_cotizacion_fkey` | `detalle_cotizacion.id_cotizacion` | `cotizacion.id_cotizacion` | Entrante (FK en tabla destino) |
| `archivo_cotizacion_id_cotizacion_fkey` | `archivo_cotizacion.id_cotizacion` | `cotizacion.id_cotizacion` | Entrante (FK en tabla destino) |

---

### Tabla: `gasto_orden` <a name="tabla-gasto_orden"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_gasto` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_orden_trabajo` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `concepto` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `monto` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `fecha_gasto` | `date` (date) | No | **No (NOT NULL)** | - | - |
| `id_usuario_registro` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `fecha_registro` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `gasto_orden_id_orden_trabajo_fkey` | `gasto_orden.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Saliente (FK local) |
| `gasto_orden_id_usuario_registro_fkey` | `gasto_orden.id_usuario_registro` | `usuario.id_usuario` | Saliente (FK local) |

---

### Tabla: `detalle_cotizacion` <a name="tabla-detalle_cotizacion"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_detalle_cotizacion` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_cotizacion` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_producto` | `bigint` (int8) | No | Sí | - | - |
| `descripcion_item` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `cantidad` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `unidad_medida` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `precio_unitario` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |
| `subtotal` | `numeric` (numeric) | No | **No (NOT NULL)** | - | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `detalle_cotizacion_id_cotizacion_fkey` | `detalle_cotizacion.id_cotizacion` | `cotizacion.id_cotizacion` | Saliente (FK local) |
| `detalle_cotizacion_id_producto_fkey` | `detalle_cotizacion.id_producto` | `producto_catalogo.id_producto` | Saliente (FK local) |

---

### Tabla: `evidencia_orden` <a name="tabla-evidencia_orden"></a>

- **RLS Habilitado:** No ❌ (Crítico)
- **Cantidad de Registros Actuales:** 0

#### Columnas y Atributos

| Atributo | Tipo de Datos | PK | Nullable | Valor por Defecto | Propiedades / Enums |
| :--- | :--- | :---: | :---: | :--- | :--- |
| `id_evidencia` | `bigint` (int8) | 🔑 Sí | **No (NOT NULL)** | - | identity |
| `id_orden_trabajo` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `id_usuario` | `bigint` (int8) | No | **No (NOT NULL)** | - | - |
| `tipo_evidencia` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `descripcion` | `text` (text) | No | Sí | - | - |
| `url_archivo` | `text` (text) | No | **No (NOT NULL)** | - | - |
| `public_id_cloudinary` | `character varying` (varchar) | No | **No (NOT NULL)** | - | - |
| `fecha_subida` | `timestamp with time zone` (timestamptz) | No | Sí | `now()` | - |

#### Relaciones y Llaves Foráneas (FK)

| Nombre de Restricción | Columna de Origen (Source) | Tabla/Columna de Destino (Target) | Tipo de Relación |
| :--- | :--- | :--- | :--- |
| `evidencia_orden_id_orden_trabajo_fkey` | `evidencia_orden.id_orden_trabajo` | `orden_trabajo.id_orden_trabajo` | Saliente (FK local) |
| `evidencia_orden_id_usuario_fkey` | `evidencia_orden.id_usuario` | `usuario.id_usuario` | Saliente (FK local) |

---

