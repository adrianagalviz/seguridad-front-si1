export const rolesSistema = Object.freeze({
  administrador: "Administrador",
  tecnicoSuperior: "Tecnico Superior",
  tecnicoCampo: "Tecnico de Campo",
  atencionCliente: "Atencion al Cliente",
});

export const rutasSistema = Object.freeze({
  login: "/login",
  recuperarContrasena: "/recuperar-contrasena",
  dashboard: "/",
  noAutorizado: "/no-autorizado",
  usuarios: "/usuarios",
  rolesPermisos: "/roles-permisos",
  clientes: "/clientes",
  empleados: "/empleados",
  ubicaciones: "/ubicaciones",
  proyectos: "/proyectos",
  ordenesTrabajo: "/ordenes-trabajo",
  mantenimientos: "/mantenimientos",
  evidencias: "/evidencias",
  pagos: "/pagos",
  gastos: "/gastos",
  catalogo: "/catalogo",
  cotizaciones: "/cotizaciones",
  bitacora: "/bitacora",
  reportes: "/reportes",
});

export const accesosPorRol = Object.freeze({
  [rolesSistema.administrador]: [
    "usuarios",
    "roles_permisos",
    "clientes",
    "empleados",
    "ubicaciones",
    "proyectos",
    "ordenes_trabajo",
    "mantenimientos",
    "evidencias",
    "pagos",
    "gastos",
    "catalogo",
    "cotizaciones",
    "bitacora",
    "reportes",
  ],
  [rolesSistema.tecnicoSuperior]: [
    "proyectos",
    "ordenes_trabajo",
    "asignacion_tecnicos",
    "mantenimientos",
    "evidencias",
    "bitacora_proyectos",
    "reportes_tecnicos",
  ],
  [rolesSistema.tecnicoCampo]: [
    "ordenes_asignadas",
    "avances",
    "evidencias",
    "materiales_usados",
    "estado_ordenes",
  ],
  [rolesSistema.atencionCliente]: [
    "clientes",
    "ubicaciones",
    "consulta_proyectos",
    "consulta_mantenimientos",
    "solicitudes_basicas",
  ],
});

export const rutasPrivadasSistema = Object.freeze([
  {
    ruta: rutasSistema.dashboard,
    modulo: "dashboard",
    rolesPermitidos: [
      rolesSistema.administrador,
      rolesSistema.tecnicoSuperior,
      rolesSistema.tecnicoCampo,
      rolesSistema.atencionCliente,
    ],
  },
  {
    ruta: rutasSistema.usuarios,
    modulo: "usuarios",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.rolesPermisos,
    modulo: "roles_permisos",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.clientes,
    modulo: "clientes",
    rolesPermitidos: [rolesSistema.administrador, rolesSistema.atencionCliente],
  },
  {
    ruta: rutasSistema.empleados,
    modulo: "empleados",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.ubicaciones,
    modulo: "ubicaciones",
    rolesPermitidos: [rolesSistema.administrador, rolesSistema.atencionCliente],
  },
  {
    ruta: rutasSistema.proyectos,
    modulo: "proyectos",
    rolesPermitidos: [
      rolesSistema.administrador,
      rolesSistema.tecnicoSuperior,
      rolesSistema.atencionCliente,
    ],
  },
  {
    ruta: rutasSistema.ordenesTrabajo,
    modulo: "ordenes_trabajo",
    rolesPermitidos: [
      rolesSistema.administrador,
      rolesSistema.tecnicoSuperior,
      rolesSistema.tecnicoCampo,
    ],
  },
  {
    ruta: rutasSistema.mantenimientos,
    modulo: "mantenimientos",
    rolesPermitidos: [
      rolesSistema.administrador,
      rolesSistema.tecnicoSuperior,
      rolesSistema.atencionCliente,
    ],
  },
  {
    ruta: rutasSistema.evidencias,
    modulo: "evidencias",
    rolesPermitidos: [
      rolesSistema.administrador,
      rolesSistema.tecnicoSuperior,
      rolesSistema.tecnicoCampo,
    ],
  },
  {
    ruta: rutasSistema.pagos,
    modulo: "pagos",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.gastos,
    modulo: "gastos",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.catalogo,
    modulo: "catalogo",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.cotizaciones,
    modulo: "cotizaciones",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.bitacora,
    modulo: "bitacora",
    rolesPermitidos: [rolesSistema.administrador],
  },
  {
    ruta: rutasSistema.reportes,
    modulo: "reportes",
    rolesPermitidos: [rolesSistema.administrador, rolesSistema.tecnicoSuperior],
  },
]);
