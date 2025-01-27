import Navbar from "./components/Navbar/Navbar";
import { ReactNode } from "react";
import Fonts from "../fonts/Fonts";
import GoogleAnalytics from "../app/GoogleAnalytics";

export const metadata = {
  title: "Dina Martinez Ruiz | Desarrolladora Web y Móvil",
  description: "Portafolio de Dina Martinez Ruiz, desarrolladora web y móvil especializada en React y Kotlin, mostrando proyectos, logros y habilidades.",
  keywords:"portfolio, trabajo, proyectos, curriculum, desarrolladora web, react, kotlin"
}

//tipado typescript para renderizar cualquier cosa 
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({children}:RootLayoutProps) {
  return (
    <html lang="es">  
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dina Martinez Ruiz" />
        <meta property="og:title" content="Dina Martinez Ruiz | Desarrolladora Web y Móvil" />
        <meta property="og:description" content="Descubre mi portafolio como desarrolladora web y móvil con proyectos destacados y habilidades técnicas." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/9e04ec77-12f4-4d4c-8134-480534d428ec.png?token=hgl1W55LU9pNlbDUxBpUSm_G0MW6dWGoRRleElExKF0&height=625&width=1200&expires=33273978583" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-web-dina-martinez.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="portfolio-web-dina-martinez.vercel.app"/>
        <meta property="twitter:url" content="https://portfolio-web-dina-martinez.vercel.app/"/>
        <meta name="twitter:title" content="Dina Martinez Ruiz"/>
        <meta name="twitter:description" content="Portfolio web Dina Martinez Ruiz"/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/9e04ec77-12f4-4d4c-8134-480534d428ec.png?token=hgl1W55LU9pNlbDUxBpUSm_G0MW6dWGoRRleElExKF0&height=625&width=1200&expires=33273978583"/>
      </head>
      <body className={Fonts.className}>
        <GoogleAnalytics />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
