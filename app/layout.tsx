import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Fonts from "../fonts/Fonts";
import "./globals.css"
import Footer from "../components/Footer";

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
        
      </head>
      <body className={Fonts.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
