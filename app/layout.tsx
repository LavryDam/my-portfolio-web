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
        <meta property="og:image" content="/images/DinaAmsterdam.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-web-dina-martinez.vercel.app/" />  
      </head>
      <body className={Fonts.className}>
        <GoogleAnalytics />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
