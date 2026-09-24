import type { StaticImageData } from "next/image";

import carpaMinsa from "@/assets/photos/carpa-minsa-hemofilia-banner-asoher.webp";
import certificadosFeper from "@/assets/photos/certificados-feper-evento.webp";
import charlaAuditorio from "@/assets/photos/charla-asoher-auditorio-publico.webp";
import charlaFarmacia from "@/assets/photos/charla-hemofilia-farmacia-hospitalaria.webp";
import diegoMesaDialogo from "@/assets/photos/diego-gavidia-mesa-dialogo.webp";
import grupalColegioQuimicos from "@/assets/photos/foto-grupal-colegio-quimicos.webp";
import marchaEnfermedadesRaras from "@/assets/photos/marcha-enfermedades-raras-lima.webp";
import rareDiseaseDay from "@/assets/photos/rare-disease-day-pacientes-importan.webp";
import reunionZeballos from "@/assets/photos/reunion-congresista-zeballos.webp";
import reunionDireccion from "@/assets/photos/reunion-direccion-hospital.webp";
import reunionDigemid from "@/assets/photos/reunion-minsa-digemid.webp";

export type Photo = {
  src: StaticImageData;
  alt: string;
};

// Originales y descripciones en images/README.md.
export const photos = {
  charlaFarmacia: {
    src: charlaFarmacia,
    alt: "Familias, jóvenes y personal de farmacia del hospital posan juntos después de la charla Conociendo la Hemofilia.",
  },
  charlaAuditorio: {
    src: charlaAuditorio,
    alt: "Diego Gavidia habla con micrófono ante un auditorio de pacientes y familias, junto a un banner de ASOHER.",
  },
  diegoMesaDialogo: {
    src: diegoMesaDialogo,
    alt: "Diego Gavidia Huanay expone en la mesa de diálogo del Congreso, detrás de una placa de Los Pacientes Importan.",
  },
  reunionDigemid: {
    src: reunionDigemid,
    alt: "Integrantes de ASOHER y funcionarios de la DIGEMID frente a un panel del Ministerio de Salud.",
  },
  rareDiseaseDay: {
    src: rareDiseaseDay,
    alt: "Pacientes sostienen un banner de Los Pacientes Importan con el lema No somos invisibles frente a un centro de salud.",
  },
  carpaMinsa: {
    src: carpaMinsa,
    alt: "Carpa del Ministerio de Salud rotulada Hemofilia, junto a un banner de ASOHER.",
  },
  grupalColegioQuimicos: {
    src: grupalColegioQuimicos,
    alt: "Unas veinticinco personas, entre jóvenes, familias y equipo de ASOHER, en el auditorio del Colegio Químico Departamental.",
  },
  marchaEnfermedadesRaras: {
    src: marchaEnfermedadesRaras,
    alt: "Pacientes marchan por el centro de Lima con carteles que piden el reglamento de la ley de enfermedades raras.",
  },
  certificadosFeper: {
    src: certificadosFeper,
    alt: "Dos participantes reciben certificados junto a Diego Gavidia en un evento de FEPER.",
  },
  reunionDireccion: {
    src: reunionDireccion,
    alt: "Representantes de ASOHER reunidos con un médico de la dirección del hospital.",
  },
  reunionZeballos: {
    src: reunionZeballos,
    alt: "Representantes de ASOHER en el despacho del congresista Carlos Zeballos.",
  },
} satisfies Record<string, Photo>;
