import Link from "next/link";
import "./Navbar.css";


export default function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navegacion">
                <li>
                    <Link className="nav-link" href="#inicio">Inicio</Link>
                </li>
                <li>
                    <Link className="nav-link" href="#about">Sobre mi</Link>
                </li>
                <li>
                    <Link className="nav-link" href="#proyects">Proyectos</Link>
                </li>
                <li>
                    <Link className="nav-link" href="#contact">¡Contáctame!</Link>
                </li>
            </ul>
        </nav>
    );
}