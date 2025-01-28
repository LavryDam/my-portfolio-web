"use client"; // Indica que este archivo es un Client Component

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
import Script from "next/script";

const GA_TRACKING_ID = "G-PNPEJXGWBK"; // Reemplaza con tu ID de seguimiento

export default function GoogleAnalytics() {
  useEffect(() => {
    // Solo ejecutamos el código en el navegador
    if (typeof window !== "undefined" && GA_TRACKING_ID) {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }

      // Configuramos Google Analytics
      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID);
    }
  }, []); // Solo se ejecuta una vez después de que el componente se haya montado

  return (
    <>
      {/* Script que carga Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive" // Se carga después de que la página esté interactiva
      />
    </>
  );
}
