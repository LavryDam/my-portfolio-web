import Link from "next/link";
import "./notfound.css";

export default function NotFound() {
    return (
        <section className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <Link href="/">
                    <a className="back-home">Volver a Inicio</a>
                </Link>
            </div>
        </section>
    );
}