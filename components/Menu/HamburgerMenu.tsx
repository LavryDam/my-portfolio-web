"use client"; // Requerido para usar React hooks

import { useState, useRef, useEffect } from "react";
import "./HamburgerMenu.css";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      {/* Botón Hamburguesa */}
      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="menu-content">
            <Link href="#inicio" className="menu-item" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link href="#about" className="menu-item" onClick={() => setIsOpen(false)}>Sobre mí</Link>
            <Link href="#proyects" className="menu-item" onClick={() => setIsOpen(false)}>Proyectos</Link>
            <Link href="#contact" className="menu-item" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;