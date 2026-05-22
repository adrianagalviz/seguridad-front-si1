export const variablesEntorno = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "",
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "",
  cloudinaryUploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "",
};

export function validarVariablesEntorno() {
  const faltantes = [];

  if (!variablesEntorno.supabaseUrl) faltantes.push("VITE_SUPABASE_URL");
  if (!variablesEntorno.supabaseAnonKey) faltantes.push("VITE_SUPABASE_ANON_KEY");
  if (!variablesEntorno.cloudinaryCloudName) {
    faltantes.push("VITE_CLOUDINARY_CLOUD_NAME");
  }
  if (!variablesEntorno.cloudinaryUploadPreset) {
    faltantes.push("VITE_CLOUDINARY_UPLOAD_PRESET");
  }

  return faltantes;
}

// Seguridad: usar solo la anon key publica de Supabase en el frontend.
// Nunca colocar service role key, secretos privados ni credenciales sensibles aqui.
// La base tiene RLS desactivado durante desarrollo; debe habilitarse antes de produccion.
