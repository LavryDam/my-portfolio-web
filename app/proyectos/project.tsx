import Link from "next/link";
import "./project.css";
import Image from 'next/image'

export const metadata = {
    title: "Mis proyectos", 
};

function ProyectosPage() {
    return (
        <section className="proyectos" id="proyectos">
            <h2>Mis Proyectos</h2>
            <div className="contenedor-proyectos">
                <div className="tarjeta-proyecto">
                    <Image
                        src="/images/libroRecetas.jpg"
                        width={290}
                        height={190}
                        alt="Picture of the author"
                    />
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
            </div>
        </section>
    );
}

export default ProyectosPage;