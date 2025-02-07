import Link from "next/link";
import "./about.css";

export const metadata = {
    title: "Sobre mí",
}

function aboutPage(){
    return (
        <>
            <div className="contenedor-about">
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="date">2022</span>
                        <p>Finalicé Desarrollo de Aplicaciones Multiplataforma</p>
                    </div>
                    <div className="timeline-item">
                        <span className="date">2023</span>
                        <p>Prácticas en Ámsterdam desarrollando con React y React Native.</p>
                    </div>
                    <div className="timeline-item">
                        <span className="date">2024</span>
                        <p>Empecé a explorar tecnologías como Next.js</p>
                    </div>
                </div>
                <div className="about-page">
                    <h1>Mi historia</h1>
                    <p className="bio-texto">
                        Soy desarrolladora de software con experiencia en React, React Native y Kotlin, especializada en crear aplicaciones multiplataforma para Android e iOS.  
                        Me apasiona diseñar soluciones eficientes y adaptadas a las necesidades de cada proyecto.  
                        Actualmente, estoy ampliando mis conocimientos en Next.js para seguir innovando en el desarrollo web y móvil.  
                    </p>
                    <Link href="/docs/CV_DINAMARTINEZRUIZ.pdf" target="_blank" download className="enlace-cv">Descargar CV</Link>
                </div>
            </div>
        </>
    );
}

export default aboutPage;