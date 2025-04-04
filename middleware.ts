import createMiddleware from 'next-intl/middleware';
import {routing} from './public/i18n/routing';
 
export default createMiddleware({ locales: routing.locales,
  defaultLocale: routing.defaultLocale,});
 
export const config = {
  matcher: ["/","/(es|en)/:path*"],
};