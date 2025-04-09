import "./project.css";
import Image from 'next/image'
import {useTranslations} from 'next-intl';
import { Link } from "@/src/i18n/navigation";

export const metadata = {
    title: "Mis proyectos", 
};

function ProyectosPage() {
    const t = useTranslations('ProyectosPage');
    return (
        <section className="proyectos" id="proyectos">
            <h1>{t('title')}</h1>
            <div className="contenedor-proyectos">
                <div className="tarjeta-proyecto">
                    <Image
                        className="imagen-proyecto-1"
                        src="/images/libroRecetas.webp"
                        width={300}
                        height={200}
                        alt="Proyecto de app de recetas saludables"
                        priority
                    />
                    <h2 className="titulo-proyecto">{t('project1.title')}</h2>
                    <p className="detalle-proyecto-app">{t('project1.description')}</p>
                    <ul className="tecnologias">
                        <li>React Native</li>
                        <li>Firebase</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                    </ul>
                    <Link
                        href="https://github.com/LavryDam/AppRecetasSaludables.git"
                        target="_blank"
                        className="enlace-proyecto">
                        {t('project1.link')}
                    </Link>
                </div>
                <div className="tarjeta-proyecto">
                    <Image
                        className="imagen-proyecto-2"
                        src="/images/portfolio-web.webp"
                        width={300}
                        height={200}
                        alt="Proyecto de portfolio web Dina Martinez Ruiz"
                    />
                    <h2 className="titulo-proyecto">{t('project2.title')}</h2>
                    <p className="detalle-proyecto">{t('project2.description')}</p>
                    <ul className="tecnologias">
                        <li>Next.js</li>
                        <li>Vercel</li>
                        <li>TypeScript</li>
                        <li>CSS</li>
                    </ul>
                    <Link
                        href="https://github.com/LavryDam/my-portfolio-web.git"
                        target="_blank"
                        className="enlace-proyecto">
                        {t('project2.link')}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProyectosPage;