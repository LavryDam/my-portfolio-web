import Link from "next/link";
import "./about.css";

export const metadata = {
    title: "Sobre mí",
}

function aboutPage(){
    return (
        <>
            <div className="contenedor-about">
                <div className="img-dina">
                    
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="date">2024</span>
                        <p>Empecé a explorar tecnologías como Next.js</p>
                    </div>
                    <div className="timeline-item">
                        <span className="date">2023</span>
                        <p>Prácticas en Ámsterdam desarrollando con React y React Native.</p>
                    </div>
                    <div className="timeline-item">
                        <span className="date">2022</span>
                        <p>Finalicé Desarrollo de Aplicaciones Multiplataforma.</p>
                    </div>
                </div>
                <div className="about-page">
                    <h1>Mi historia</h1>
                    <p className="bio-texto">
                    Soy Dina Martinez Ruiz, desarrolladora de software con un enfoque en crear soluciones innovadoras. 
                    Con experiencia en React y React Native, he trabajado en proyectos multiplataforma que abarcan Android e iOS. 
                    Siempre en búsqueda de nuevas tecnologías, actualmente estoy profundizando en Next.js para estar a la vanguardia del desarrollo web y móvil.  
                    </p>
                    <Link href="docs/CV DINA MARTINEZ RUIZ.pdf" target="_blank" download className="enlace-cv">Descargar CV</Link>
                </div>
            </div>
        </>
    );
}

export default aboutPage;