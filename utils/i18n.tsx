import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  locale: locale || 'en', // Provide a default locale, e.g., 'en'
  messages: (await import(`../locales/${locale || 'en'}.json`)).default
}));