import Link from "next/link";
import "./project.css";
import Image from 'next/image'

export const metadata = {
    title: "Mis proyectos", 
};

function ProyectosPage() {
    return (
        <section className="proyectos" id="proyectos">
            <h1>Mis Proyectos</h1>
            <div className="contenedor-proyectos">
                <div className="tarjeta-proyecto">
                    <Image
                        className="imagen-proyecto"
                        src="/images/libroRecetas.webp"
                        width={300}
                        height={200}
                        alt="Proyecto de app de recetas saludables"
                        priority
                    />
                    <h2 className="titulo-proyecto">App de Recetas Saludables y Personalizadas</h2>
                    <p className="detalle-proyecto-app">
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
                    <Image
                        className="imagen-proyecto"
                        src="/images/portfolio-web.webp"
                        width={300}
                        height={200}
                        alt="Proyecto de portfolio web Dina Martinez Ruiz"
                        priority
                    />
                    <h2 className="titulo-proyecto">Portfolio web Dina Martinez Ruiz</h2>
                    <p className="detalle-proyecto">
                        Una web diseñada para destacar mis habilidades como programadora, 
                        incluyendo proyectos como una app de recetas saludables y personalizadas, 
                        desarrollada con tecnología Next.js.
                    </p>
                    <ul className="tecnologias">
                        <li>Next.js</li>
                        <li>Vercel</li>
                        <li>TypeScript</li>
                        <li>CSS</li>
                    </ul>
                    <Link
                        href="https://github.com/LavryDam/my-portfolio-web.git"
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