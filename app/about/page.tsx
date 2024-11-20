import Link from "next/link";
import "./aboutPage.css";
import Image from "next/image";

export const metadata = {
    title: "Sobre mí",
}

function aboutPage(){
    return (
        <>
            <div className="contenedor-about">
                <div className="img-dina">
                    <Image src="/docs/img-dina.jpg" width={250} height={250} alt="Imagen Dina"/>
                </div>
                <div className="about-page">
                    <h1>Mi historia</h1>
                    <p className="bio-texto">
                        Soy Dina Martinez Ruiz, desarrolladora de software apasionada y creativa con formación en Desarrollo de Aplicaciones Multiplataforma (DAM). Durante mis prácticas en una empresa en Ámsterdam, trabajé con React y React Native para desarrollar una aplicación multiplataforma, optimizada tanto para Android como para iOS, enfocada en ofrecer una experiencia de usuario intuitiva y de alto rendimiento.
                        Actualmente, estoy en constante aprendizaje, explorando nuevas tecnologías como Next.js para mantenerme a la vanguardia y enfrentar nuevos retos en el desarrollo web y móvil.  
                        Fuera del ámbito profesional, me apasiona la lectura, especialmente de novela negra, ciencia ficción y fantasía. También disfruto de la playa, donde encuentro inspiración y tranquilidad para recargar energías. Mi enfoque siempre está en crecer, aprender y aportar valor en cada proyecto que emprendo.
                    </p>
                    <Link href="docs/CV DINA MARTINEZ RUIZ.pdf" target="_blank" download className="enlace-cv">Descargar Currículum Vitae</Link>
                </div>
            </div>
        </>
    );
}

export default aboutPage;