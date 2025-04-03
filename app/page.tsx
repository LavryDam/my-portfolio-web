import Link from "next/link";
import "./globals.css";
import About from "./about/about";
import Contact from "./contacto/contact";
import Projects from "./proyectos/project";
import Image from "next/image";

export default function HomePage() {
  return(
    <>
      <div className="content-container">
      <header className="language-selector">
        <Link href="#" locale="es" className="Link-option">
          <div className="lang-option">
          <Image src="/images/uk.png" alt="EN" width={20} height={20} />
            <span className="option">EN</span>
          </div>
        </Link>
        <Link href="#" locale="en" className="Link-option">
          <div className="lang-option active">
          <Image src="/images/spain.png" alt="ES" width={22} height={22} />
            <span className="option">ES</span>
          </div>
        </Link>
      </header>
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