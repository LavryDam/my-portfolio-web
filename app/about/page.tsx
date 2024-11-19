import Link from "next/link";

export const metadata = {
    title: "Sobre mí",
}

function aboutPage(){
    return (
        <div className="about-page">
            <h1>Sobre mí</h1>
            <p className="bio-texto">
            Soy una desarrolladora de software apasionada y creativa con experiencia en programación web y móvil. 
            Especializada en tecnologías como Kotlin y React Native, me dedico a crear aplicaciones innovadoras que mejoran la vida de los usuarios. 
            Me gusta enfrentar nuevos retos y siempre estoy buscando oportunidades para aprender y crecer en mi carrera. 
            Con un enfoque en soluciones efectivas y diseño intuitivo, estoy listo para contribuir al éxito de un equipo dinámico.
            </p>
            <Link href="docs/CV DINA MARTINEZ RUIZ.pdf" target="_blank" download className="enlace-cv">Descargar Currículum Vitae</Link>
        </div>
    );
}

export default aboutPage;