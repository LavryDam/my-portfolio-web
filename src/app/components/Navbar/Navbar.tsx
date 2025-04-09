import "./Navbar.css";
import HamburgerMenu from "../Menu/HamburgerMenu";
import {useTranslations} from 'next-intl';
import { Link } from "@/src/i18n/navigation";

function Navbar(){
    const t = useTranslations('Navbar');
    return(
        <div>
            <nav className="navbar">
                <ul className="navegacion">
                    <li>
                        <Link className="nav-link" href="#inicio">{t('home')}</Link>
                    </li>
                    <li>
                        <Link className="nav-link" href="#about">{t('about')}</Link>
                    </li>
                    <li>
                        <Link className="nav-link" href="#proyects">{t('projects')}</Link>
                    </li>
                    <li>
                        <Link className="nav-link" href="#contact">{t('contact')}</Link>
                    </li>
                </ul>
            </nav>
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>
        </div>
    );
}

export default Navbar;