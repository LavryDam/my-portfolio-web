import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    i18n: {
        locales: ['en', 'es'], // Supported languages
        defaultLocale: 'es',  // Default language
    },
};

export default nextConfig;
