import Link from "next/link";
import "./globals.css";
import About from "./about/about";
import Contact from "./contacto/contact";
import Projects from "./proyectos/project";

export default function HomePage() {
  return(
    <>
      <div className="image-container">
        <h1 className="overlay-text">La creatividad y la tecnología se encuentran aquí</h1>
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