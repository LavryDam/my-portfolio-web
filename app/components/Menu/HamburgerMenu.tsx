"use client"; // Necesario para React hooks

import { useState, useRef, useEffect } from "react";
import "./HamburgerMenu.css";
import Link from "next/link";

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

  return (
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
        <Link href="#inicio" className="menu-item" onClick={() => setIsOpen(false)}>{/*Cierra el menú despegable al hacer clic en un enlace*/}
          Inicio
        </Link>
        <Link href="#about" className="menu-item" onClick={() => setIsOpen(false)}>
          Sobre mí
        </Link>
        <Link href="#proyects" className="menu-item" onClick={() => setIsOpen(false)}>
          Proyectos
        </Link>
        <Link href="#contact" className="menu-item" onClick={() => setIsOpen(false)}>
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
