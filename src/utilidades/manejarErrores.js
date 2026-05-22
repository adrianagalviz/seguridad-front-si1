export function normalizarError(error, mensajeBase = "No se pudo completar la operacion.") {
  if (!error) {
    return {
      mensaje: mensajeBase,
      codigo: null,
      detalle: null,
      sugerencia: null,
    };
  }

  if (typeof error === "string") {
    return {
      mensaje: error,
      codigo: null,
      detalle: null,
      sugerencia: null,
    };
  }

  return {
    mensaje: error.message || mensajeBase,
    codigo: error.code || error.status || null,
    detalle: error.details || error.error_description || null,
    sugerencia: error.hint || null,
  };
}

export function obtenerMensajeError(error, mensajeBase) {
  return normalizarError(error, mensajeBase).mensaje;
}

export function manejarErrorSupabase(error, mensajeBase) {
  return normalizarError(error, mensajeBase);
}

export function manejarErrorFormulario(error, mensajeBase) {
  const errorNormalizado = normalizarError(error, mensajeBase);

  return {
    ...errorNormalizado,
    tieneError: Boolean(errorNormalizado.mensaje),
  };
}

// No mostrar secretos, tokens ni valores sensibles en mensajes visibles al usuario.
