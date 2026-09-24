import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import acompano from "@/assets/paths/acompano.webp";
import diagnostico from "@/assets/paths/diagnostico.webp";
import sumarme from "@/assets/paths/sumarme.webp";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

// Ilustraciones generadas con IA (prompts en docs/design/prompts-caminos.md). Son decorativas: el texto del enlace ya dice a dónde lleva.
const paths = [
  {
    label: "Me acaban de diagnosticar",
    description: "Empieza por lo básico de la hemofilia. Si algo no queda claro, escríbenos y lo vemos juntos.",
    cta: "Ver lo básico",
    href: "#hemofilia",
    image: diagnostico,
    tone: "red",
    featured: true,
  },
  {
    label: "Acompaño a alguien",
    description: "Un hijo, tu pareja, un amigo. Otras familias ya pasaron por las mismas preguntas.",
    cta: "Escuchar sus historias",
    href: "#voces",
    image: acompano,
    tone: "blue",
    featured: false,
  },
  {
    label: "Quiero sumarme",
    description: "Charlas, campañas y la voz de la comunidad ante las autoridades.",
    cta: "Ver cómo participar",
    href: "#voz",
    image: sumarme,
    tone: "neutral",
    featured: false,
  },
] as const;

export function QuickLinks() {
  return (
    <section id="recursos" className="quick-links-section" aria-labelledby="quick-links-title">
      <Container>
        <h2 id="quick-links-title" className="section-title">
          ¿Por dónde quieres empezar?
        </h2>

        <div className="quick-links-grid">
          {paths.map((path, index) => (
            <Reveal
              key={path.label}
              delay={index * 0.06}
              className={path.featured ? "quick-link-slot quick-link-slot--featured" : "quick-link-slot"}
            >
              <Link
                href={path.href}
                className={`quick-link-card quick-link-card--${path.tone} ${path.featured ? "quick-link-card--featured" : ""}`}
              >
                <span className="quick-link-card__media">
                  <Image
                    src={path.image}
                    alt=""
                    placeholder="blur"
                    sizes={path.featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                  />
                </span>
                <span className="quick-link-card__content">
                  <strong>{path.label}</strong>
                  <span>{path.description}</span>
                  <span className="quick-link-card__cta">
                    {path.cta}
                    <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
