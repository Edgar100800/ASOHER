import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASOHER | Asociación de Hemofilia del Hospital Rebagliati",
  description:
    "Personas con hemofilia, familias y cuidadores del Hospital Rebagliati. Compartimos información clara, nos acompañamos y pedimos atención a tiempo.",
  openGraph: {
    title: "ASOHER | Nadie debería enfrentar la hemofilia solo",
    description: "Asociación de Hemofilia del Hospital Rebagliati.",
    locale: "es_PE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sourceSans.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
