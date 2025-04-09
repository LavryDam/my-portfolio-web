import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  defaultLocale: 'es',
  localeDetection: true // Permite detectar el idioma del navegador
});