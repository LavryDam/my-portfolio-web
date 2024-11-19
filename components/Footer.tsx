import Link from "next/link";
import "./Footer.css";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-nav">
                <Link className="footer-nav-link" href="https://www.linkedin.com/in/dina-martinez-ruiz19" target="_blank">LinkedIn</Link>
                <Link className="footer-nav-link" href="https://github.com/LavryDam" target="_blank">GitHub</Link>
            </div>
            <p>&copy; 2024 Dina Martinez Ruiz. Todos los derechos reservados.</p>
        </footer>
    );
}