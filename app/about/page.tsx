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
                    <Image src="/docs/img-dina.jpg" width={150} height={150} alt="Imagen Dina"/>
                </div>
                <div className="about-page">
                    <h1>Mi historia</h1>
                    <p className="bio-texto">
                        Soy Dina Martinez Ruiz, desarrolladora de software apasionada y creativa con formación en Desarrollo de Aplicaciones Multiplataforma (DAM). Durante mis prácticas en una empresa en Ámsterdam, trabajé con React y React Native para desarrollar una aplicación multiplataforma, 
                        optimizada tanto para Android como para iOS. Actualmente, estoy en constante aprendizaje, explorando nuevas tecnologías como Next.js para mantenerme a la vanguardia y enfrentar nuevos retos en el desarrollo web y móvil.  
                    </p>
                    <Link href="docs/CV DINA MARTINEZ RUIZ.pdf" target="_blank" download className="enlace-cv">Descargar Currículum Vitae</Link>
                </div>
            </div>
        </>
    );
}

export default aboutPage;