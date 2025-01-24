import Navbar from "./components/Navbar/Navbar";
import { ReactNode } from "react";
import Fonts from "../fonts/Fonts";

export const metadata = {
  title: "Dina Martinez Ruiz",
  description: "Mi portfolio web",
  keywords:"portfolio, trabajo, proyecto, curriculum"
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
      </head>
      <body className={Fonts.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
