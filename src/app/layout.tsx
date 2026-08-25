import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASOHER | Una comunidad que acompana",
  description: "Asociacion de Hemofilia del Hospital Rebagliati.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sourceSans.variable} h-full antialiased`}>
      <body>
        {/* THESIS: ASOHER convierte el hero en una puerta de entrada a una comunidad, no en una pagina medica generica. */}
        {/* OWN-WORLD: blanco abierto, azul de confianza y rojo de acompanamiento con una grilla editorial amplia. */}
        {/* STORY: la persona entiende que no esta sola y puede elegir entre pedir orientacion o conocer la organizacion. */}
        {/* FIRST VIEWPORT: header sticky arriba; copia a la izquierda y placeholder humano 16:10 a la derecha. */}
        {/* FORM: hero editorial de dos columnas, posicion 1; seed key: asoh-er-hero. */}
        {/* FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        {children}
      </body>
    </html>
  );
}
