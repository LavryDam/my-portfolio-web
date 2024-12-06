import Navbar from "../components/Navbar/Navbar";
import { ReactNode } from "react";
import Fonts from "../fonts/Fonts";
import "./globals.css"
import About from "./about/about";
import Contact from "./contacto/contact";
import Projects from "./proyectos/project";

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
        <div id="about">
          <About/>
        </div>
        <div id="proyects">
          <Projects/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </body>
    </html>
  );
}
