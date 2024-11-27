import Link from "next/link";
import "./Navbar.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navegacion">
                <li>
                    <Link className="nav-link" href="/">Inicio</Link>
                </li>
                <li>
                    <Link className="nav-link" href="/about">Cosas sobre mi</Link>
                </li>
                <li>
                    <Link className="nav-link" href="/proyectos">Explora mis proyectos</Link>
                </li>
                <li>
                    <Link className="nav-link" href="/contacto">¡Contáctame!</Link>
                </li>
            </ul>
        </nav>
    );
}