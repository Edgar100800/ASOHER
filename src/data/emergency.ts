import type { StaticImageData } from "next/image";

import almenara from "@/assets/centers/almenara.webp";
import dosdemayo from "@/assets/centers/dosdemayo.webp";
import insn from "@/assets/centers/insn.webp";
import rebagliati from "@/assets/centers/rebagliati.webp";

// Números y direcciones tomados de gob.pe y EsSalud, revisados el 24 de septiembre de 2026.
export const reviewedOn = "24 de septiembre de 2026";

export const emergencyLines = [
  { number: "106", name: "SAMU", detail: "Ambulancia gratuita del Ministerio de Salud, en todo el país." },
  { number: "117", name: "EsSalud", detail: "Emergencias y urgencias para asegurados, 24 horas." },
  { number: "116", name: "Bomberos", detail: "Accidentes, rescates e incendios." },
  { number: "105", name: "Policía Nacional", detail: "Situaciones de riesgo o accidentes de tránsito." },
  { number: "113", name: "Infosalud", detail: "Orientación en salud del Ministerio de Salud." },
] as const;

export type HealthCenter = {
  name: string;
  shortName: string;
  note: string;
  address: string;
  district: string;
  phone: string;
  phoneLabel: string;
  mapsQuery: string;
  photo?: {
    src: StaticImageData;
    alt: string;
    credit: string;
    license: string;
    sourceUrl: string;
  };
};

export const centerGroups: { title: string; description: string; centers: HealthCenter[] }[] = [
  {
    title: "Si tienes EsSalud",
    description: "Hospitales nacionales de EsSalud que atienden a personas con hemofilia en Lima y Callao.",
    centers: [
      {
        name: "Hospital Nacional Edgardo Rebagliati Martins",
        shortName: "Hospital Rebagliati",
        note: "ASOHER reúne a los pacientes con hemofilia de este hospital.",
        address: "Av. Edgardo Rebagliati 490",
        district: "Jesús María, Lima",
        phone: "+5112651526",
        phoneLabel: "(01) 265-1526",
        mapsQuery: "Hospital Nacional Edgardo Rebagliati Martins, Av. Edgardo Rebagliati 490, Jesús María, Lima",
        photo: {
          src: rebagliati,
          alt: "Fachada del Hospital Nacional Edgardo Rebagliati Martins con su jardín delantero.",
          credit: "Felipe Restrpo Acosta",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:2017_Lima_-_Hospital_Nacional_Edgardo_Rebagliati_Martins.jpg",
        },
      },
      {
        name: "Hospital Nacional Guillermo Almenara Irigoyen",
        shortName: "Hospital Almenara",
        note: "Hospital nacional de EsSalud en el centro de Lima.",
        address: "Av. Grau 800",
        district: "La Victoria, Lima",
        phone: "+5112651526",
        phoneLabel: "(01) 265-1526",
        mapsQuery: "Hospital Nacional Guillermo Almenara Irigoyen, Av. Grau 800, La Victoria, Lima",
        photo: {
          src: almenara,
          alt: "Vista frontal del Hospital Guillermo Almenara desde la avenida Grau.",
          credit: "Rubén David Córdova Estrada",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Vista_frontal_de_Hospital_Almenara_-_D%C3%ADa_-_Av._Grau.jpg",
        },
      },
      {
        name: "Hospital Nacional Alberto Sabogal Sologuren",
        shortName: "Hospital Sabogal",
        note: "Hospital nacional de EsSalud para Callao.",
        address: "Jr. Colina 1081",
        district: "Bellavista, Callao",
        phone: "+5112651526",
        phoneLabel: "(01) 265-1526",
        mapsQuery: "Hospital Nacional Alberto Sabogal Sologuren, Jr. Colina 1081, Bellavista, Callao",
      },
    ],
  },
  {
    title: "Si te atiendes en el MINSA o tienes SIS",
    description: "Hospitales del Ministerio de Salud con atención de hemofilia en Lima.",
    centers: [
      {
        name: "Hospital Nacional Dos de Mayo",
        shortName: "Hospital Dos de Mayo",
        note: "Hospital del Ministerio de Salud con atención de hemofilia.",
        address: "Parque Historia de la Medicina Peruana s/n, cuadra 13 de la Av. Grau",
        district: "Cercado de Lima",
        phone: "+5113280028",
        phoneLabel: "(01) 328-0028",
        mapsQuery: "Hospital Nacional Dos de Mayo, Av. Grau cuadra 13, Cercado de Lima",
        photo: {
          src: dosdemayo,
          alt: "Portón de ingreso del Hospital Nacional Dos de Mayo, con palmeras detrás.",
          credit: "cemeiakano",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:20180122_Dos_de_Mayo_03.jpg",
        },
      },
      {
        name: "Instituto Nacional de Salud del Niño, Breña",
        shortName: "INSN Breña",
        note: "Para niñas, niños y adolescentes.",
        address: "Av. Brasil 600",
        district: "Breña, Lima",
        phone: "+5113300066",
        phoneLabel: "(01) 330-0066",
        mapsQuery: "Instituto Nacional de Salud del Niño, Av. Brasil 600, Breña, Lima",
        photo: {
          src: insn,
          alt: "Edificio del Instituto Nacional de Salud del Niño en la avenida Brasil.",
          credit: "Marco Carrasco",
          license: "CC BY-SA 4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Hospital_del_Ni%C3%B1o_-_Sede_Bre%C3%B1a.jpg",
        },
      },
    ],
  },
];

export function directionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}
