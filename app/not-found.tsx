import Link from "next/link";
import "./notfound.css"; 

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Lo sentimos, la página que buscas no existe.</p>
            <Link legacyBehavior href="/">
                <a className="not-found-link">Volver a Inicio</a>
            </Link>
        </div>
    );
}