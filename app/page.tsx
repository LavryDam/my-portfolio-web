import Link from "next/link";
import "./globals.css";
import About from "./about/about";
import Contact from "./contacto/contact";
import Projects from "./proyectos/project";

export default function HomePage() {
  return(
    <>
      <div className="content-container">
        <div className="image-container"></div>
        <div className="text">
          <h1 className="overlay-text">
            ¡HOLA! soy <span className="highlight">Dina Martinez Ruiz</span> desarrolladora web y móvil.
          </h1>
        </div>
      </div>
      <Link href="#about" className="arrow-link">
        <div className="arrow"/>
      </Link>
      <div id="about">
        <About/>
      </div>
      <div id="proyects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  );
}