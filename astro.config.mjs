// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Reemplaza esto con tu dominio real cuando lo compres (ej: https://berces.cl)
  site: 'https://berces.cl',
  // Asegura que las rutas funcionen correctamente en el servidor
  trailingSlash: 'ignore',
  // Compresión y optimización para producción
  compressHTML: true,
  build: {
    // Genera CSS en línea para archivos muy pequeños (mejora rendimiento)
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});