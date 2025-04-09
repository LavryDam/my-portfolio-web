import Link from "next/link";
import "./notFound.css"; 

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Lo sentimos, la página que buscas no existe.</p>
            <Link className="not-found-link" href="/"> Volver a Inicio </Link>
        </div>
    );
}