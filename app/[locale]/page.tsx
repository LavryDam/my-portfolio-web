import Navbar from "../components/Navbar/Navbar";
import "../globals.css";
import About from "../about/about";
import Contact from "../contacto/contact";
import Projects from "../proyectos/project";
import Image from "next/image";
import {useTranslations, useLocale} from 'next-intl';
import { Link } from "../../public/i18n/navigation";

export default function HomePage() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  return(
    <>
      <Navbar />
      <div className="content-container">
      <header className="language-selector">
        <Link href="/" locale="en" className="Link-option">
          <div className={`lang-option ${locale === 'en' ? 'active' : ''}`}>
          <Image src="/images/uk.png" alt="EN" width={20} height={20} />
            <span className="option">EN</span>
          </div>
        </Link>
        <Link href="/" locale="es" className="Link-option">
          <div className={`lang-option ${locale === 'es' ? 'active' : ''}`}>
          <Image src="/images/spain.png" alt="ES" width={22} height={22} />
            <span className="option">ES</span>
          </div>
        </Link>
      </header>
        <div className="image-container"></div>
        <div className="text">
          <h1 className="overlay-text">
          {t('title')} <span className="highlight">{t('name')}</span><br/>
            <span className="small-text">{t('about')}</span>
          </h1>
          <Link href="#about" className="bottom-link">
           <div className="bottom">{t('aboutLink')}</div>
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