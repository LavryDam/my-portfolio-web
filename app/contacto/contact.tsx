import "./contact.css"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {useTranslations} from 'next-intl';
import { Link } from "../../public/i18n/navigation";

export const metadata = {
    title: "Contacto",
}

function ContactoPage(){
    const t = useTranslations('ContactoPage');
    return(
        <div className="contact-page">
            <h1>{t('title')}</h1>
            <div className="contact-item">
                <Link
                    href="https://www.linkedin.com/in/dina-martinez-ruiz19"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita mi perfil de LinkedIn"
                >
                    <div className="icon-button linkedin">
                        <FaLinkedin size={30}/>
                    </div>
                </Link>
                <Link
                    href="https://github.com/LavryDam"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita mi perfil de GitHub"
                >
                    <div className="icon-button github">
                        <FaGithub size={30}/>
                    </div>
                </Link>
                <Link
                    href="mailto:dinamartinezruiz@gmail.com"
                    target="_blank"
                    aria-label="Envíame un correo electrónico"
                >
                    <div className="icon-button email">
                        <HiOutlineMail size={30}/>
                    </div>
                </Link>
            </div>
            <p className="email-text">dinamartinezruiz@gmail.com</p>
        </div>  
    );
}

export default ContactoPage;