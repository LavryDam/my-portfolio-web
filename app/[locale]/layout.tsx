import Navbar from "../components/Navbar/Navbar";
import Fonts from "../../fonts/Fonts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/public/i18n/routing";

export const metadata = {
  title: "Dina Martínez Ruiz | Desarrolladora Web y Móvil",
  description:
    "Portafolio de Dina Martínez Ruiz, desarrolladora web y móvil con experiencia en React y Kotlin, mostrando proyectos, logros y habilidades.",
  keywords:
    "portfolio, trabajo, proyectos, curriculum, desarrolladora web, react, kotlin",
};

export default async function RootLayout({ children, params }: {children: React.ReactNode; params: Promise<{ locale: "en" | "es" }>;}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const message = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PNPEJXGWBK"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PNPEJXGWBK');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dina Martinez Ruiz" />
        <meta property="og:title" content="Dina Martinez Ruiz | Desarrolladora Web y Móvil" />
        <meta
          property="og:description"
          content="Descubre mi portafolio como desarrolladora web y móvil con proyectos destacados y habilidades técnicas."
        />
        <meta
          property="og:image"
          content="https://portfolio-web-dina-martinez.vercel.app/images/portfolio-web.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dinamr.dev/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="portfolio-web-dina-martinez.vercel.app" />
        <meta property="twitter:url" content="https://www.dinamr.dev/" />
        <meta name="twitter:title" content="Dina Martinez Ruiz" />
        <meta name="twitter:description" content="Portfolio web Dina Martinez Ruiz" />
        <meta
          name="twitter:image"
          content="https://portfolio-web-dina-martinez.vercel.app/images/portfolio-web.webp"
        />
      </head>
      <body className={Fonts.className}>
        <Navbar />
          <NextIntlClientProvider messages={message}>
              {children}
          </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
