import Navbar from "../components/Navbar";
import { ReactNode } from "react";

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
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
