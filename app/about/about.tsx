import "./about.css";
import {useTranslations} from 'next-intl';
import { Link } from "../../public/i18n/navigation";

export const metadata = {
    title: "Sobre mí",
}

function AboutPage(){
    const t = useTranslations('AboutPage');
 
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
                    <Link href="/docs/CV_DINAMARTINEZRUIZ.pdf" target="_blank" download className="enlace-cv">{t('link')}</Link>
                </div>
            </div>
        </>
    );
}

export default AboutPage;