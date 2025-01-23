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
            Hola, soy <span className="highlight">Dina.</span><br/>
            <span className="small-text">Una apasionada por el desarrollo de aplicaciones que conectan personas e ideas. </span>
          </h1>
          <Link href="#about" className="bottom-link">
           <div className="bottom">Conocer más</div>
          </Link>
        </div>
      </div>
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