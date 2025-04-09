"use client"; // Necesario para React hooks

import { useState, useRef, useEffect } from "react";
import "./HamburgerMenu.css";
import {useTranslations} from 'next-intl';
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla si el menú despegable está abierto
  const menuRef = useRef<HTMLDivElement>(null); //useRef crea una referencia al contenedor del menú (menuRef), 
  //que apunta al elemento HTML correspondiente.

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado del menú despegable
  };

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { //Función que se ejecuta cuando se hace clic fuera del menú
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { //Si el clic no está dentro del menú desplegable (menuRef) 
        setIsOpen(false); //Cierra el menú desplegable (isOpen = false)
      }
    };
    //evento global
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);//Elimina el evento de escucha cuando el componente se desmonta
    };
  }, []);

  const t = useTranslations('HamburgerMenu'); //Importa la función de traducción

  return (
    <div className="hamburger-container">
      <div className="text-hamburger">Dina M. Ruiz</div>
      <div className="hamburger-menu" ref={menuRef}>
        <button
          className={`hamburger-button ${isOpen ? "open" : ""}`} //Agrega la clase "open" si el menú está abierto 
          onClick={toggleMenu}
          aria-label="Toggle menu" //Mejora la accesibilidad describiendo el propósito del botón.
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className={`menu-content ${isOpen ? "open" : ""}`}> 
          <Link href="#inicio" className="menu-item" onClick={() => setIsOpen(false)}>
          {/*Cierra el menú despegable al hacer clic en un enlace*/}
          {t('home')}
          </Link>
          <Link href="#about" className="menu-item" onClick={() => setIsOpen(false)}>
          {t('about')}
          </Link>
          <Link href="#proyects" className="menu-item" onClick={() => setIsOpen(false)}>
          {t('projects')}
          </Link>
          <Link href="#contact" className="menu-item" onClick={() => setIsOpen(false)}>
          {t('contact')}
          </Link>
          <Link href="/" locale="en" className="Link" onClick={() => setIsOpen(false)}>
            <div>
              <Image src="/images/uk.png" alt="EN" width={20} height={20} />
              <span className="option-link">EN</span>
            </div>
          </Link>
          <Link href="/" locale="es" className="Link" onClick={() => setIsOpen(false)}>
            <div>
              <Image src="/images/spain.png" alt="ES" width={20} height={20} />
              <span className="option-link">ES</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
