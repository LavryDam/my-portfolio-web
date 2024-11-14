import Link from "next/link";

export default function Navbar(){
    return(
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
    );
}