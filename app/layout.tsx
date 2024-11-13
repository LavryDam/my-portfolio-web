import Link from "next/link";

export default function RootLayout({children}) {
  return (
    <html lang="es">  
      <head>
        <title>Dina Martinez Ruiz</title>
      </head>
      <body>
        <nav>
        <h1>Bienvenido a mi Portfolio</h1>
          <ul>
            <li>
              <Link href="/about">Sobre mi</Link>
            </li>
            <li>
              <Link href="/proyectos">Proyectos</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
