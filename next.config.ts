import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin(
    './public/i18n/request.tsx',
);

export default withNextIntl(nextConfig);