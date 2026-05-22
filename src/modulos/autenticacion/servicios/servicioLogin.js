import { obtenerClienteSupabase } from "../../../configuracion/supabaseCliente";
import { manejarErrorSupabase } from "../../../utilidades/manejarErrores";

export async function iniciarSesionSupabase({ correo, contrasena }) {
  const supabase = obtenerClienteSupabase();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: correo,
    password: contrasena,
  });

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo iniciar sesion.");
  }

  return data;
}

export async function obtenerSesionActual() {
  const supabase = obtenerClienteSupabase();
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo obtener la sesion actual.");
  }

  return data.session;
}

export function escucharCambiosAutenticacion(callback) {
  const supabase = obtenerClienteSupabase();
  const { data } = supabase.auth.onAuthStateChange(callback);

  return data.subscription;
}

export async function enviarRecuperacionContrasena(correo) {
  const supabase = obtenerClienteSupabase();
  const { error } = await supabase.auth.resetPasswordForEmail(correo);

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo enviar la recuperacion de contrasena.");
  }
}

export async function cerrarSesion() {
  const supabase = obtenerClienteSupabase();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw manejarErrorSupabase(error, "No se pudo cerrar la sesion.");
  }
}

// El login usa Supabase Auth. No validar password_hash desde React.
