import { createClient } from "@supabase/supabase-js";
import { existeTablaSistema } from "./tablasSistema";
import { variablesEntorno } from "./variablesEntorno";
import { manejarErrorSupabase } from "../utilidades/manejarErrores";

const opcionesSupabase = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
};

function crearClienteSupabase() {
  const { supabaseUrl, supabaseAnonKey } = variablesEntorno;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, opcionesSupabase);
}

export const supabase = crearClienteSupabase();

export function obtenerClienteSupabase() {
  if (!supabase) {
    throw new Error(
      "Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en las variables de entorno.",
    );
  }

  return supabase;
}

export async function ejecutarConsultaSupabase(consulta, mensajeError) {
  const { data, error } = await consulta;

  if (error) {
    throw manejarErrorSupabase(error, mensajeError);
  }

  return data;
}

export function consultarTabla(nombreTabla) {
  if (!existeTablaSistema(nombreTabla)) {
    throw new Error(`La tabla ${nombreTabla} no esta registrada en tablasSistema.`);
  }

  return obtenerClienteSupabase().from(nombreTabla);
}

// Seguridad: este cliente usa exclusivamente la anon key publica.
// No usar service role key en el frontend.
// RLS esta desactivado en desarrollo; debe habilitarse antes de produccion.
