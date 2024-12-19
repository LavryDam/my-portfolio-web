"use client"; // Necesario para React hooks

import { useState, useRef, useEffect } from "react";
import "./HamburgerMenu.css";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla si el menú está abierto
  const menuRef = useRef<HTMLDivElement>(null); //useRef crea una referencia al contenedor del menú (menuRef), 
  //que apunta al elemento HTML correspondiente.

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado del menú despegable
  };

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    //evento global
    document.addEventListener("mousedown", handleClickOutside);
    return () => { //Limpia el evento al desmontar el componente para evitar fugas de memoria
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      {/* Botón Hamburguesa */}
      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`} //Agrega la clase "open" si el menú está abierto
        onClick={toggleMenu}
        aria-label="Toggle menu" //Mejora la accesibilidad describiendo el propósito del botón.
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Menú Desplegable */}
      <div className={`menu-content ${isOpen ? "open" : ""}`}>
        <Link href="#inicio" className="menu-item" onClick={() => setIsOpen(false)}>
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
