import Link from "next/link";
import "./projectPage.css";

export const metadata = {
    title: "Mis proyectos",
};

function ProyectosPage() {
    return (
        <section className="proyectos" id="proyectos">
            <h2>Mis Proyectos</h2>
            <div className="contenedor-proyectos">
                <div className="tarjeta-proyecto">
                    <h3 className="titulo-proyecto">App de Recetas Saludables y Personalizadas</h3>
                    <p className="detalle-proyecto">
                        Una app enfocada en recetas saludables que se adaptan a los objetivos de salud de los usuarios, como perder peso, ganar músculo o mantener una dieta equilibrada.
                    </p>
                    <ul className="tecnologias">
                        <li>Kotlin</li>
                        <li>Firebase</li>
                        <li>Android</li>
                        <li>Retrofit</li>
                    </ul>
                    <Link
                        href="https://github.com/LavryDam/portfolio-recipes-project.git"
                        target="_blank"
                        className="enlace-proyecto"
                    >
                        Ver en GitHub
                    </Link>
                </div>
                <div className="tarjeta-proyecto">
                    <h3 className="titulo-proyecto">Rastreador de Gastos</h3>
                    <p className="detalle-proyecto">
                        Una herramienta útil para gestionar tus finanzas personales, llevar un registro de tus ingresos y gastos, y planificar mejor tu presupuesto.
                        
                    </p>
                    <Link
                        href="#"
                        target="_blank"
                        className="enlace-proyecto"
                    >
                        Ver Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProyectosPage;