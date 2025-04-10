import "./about.css";
import {useLocale, useTranslations} from 'next-intl';
import { Link } from "@/src/i18n/navigation";

export const metadata = {
    title: "Sobre mí",
}

function AboutPage(){
    const t = useTranslations('AboutPage');
    const locale = useLocale(); // Obtener el idioma actual

    // Ruta del CV según el idioma
    const cvPath = locale === 'en' 
    ? "/docs/CV_DINAMARTINEZRUIZ_EN.pdf" 
    : "/docs/CV_DINAMARTINEZRUIZ.pdf";

    return (
        <>
            <div className="contenedor-about">
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="date">2022</span>
                        <p>{t('date1')}</p>
                    </div>
                    <div className="timeline-item">
                        <span className="date">2023</span>
                        <p>{t('date2')}</p>
                    </div>
                    <div className="timeline-item">
                        <span className="date">2024</span>
                        <p>{t('date3')}</p>
                    </div>
                </div>
                <div className="about-page">
                    <h1>{t('title')}</h1>
                    <p className="bio-texto">{t('about')}</p>
                    <Link href={cvPath} target="_blank" download className="enlace-cv">{t('link')}</Link>
                </div>
            </div>
        </>
    );
}

export default AboutPage;