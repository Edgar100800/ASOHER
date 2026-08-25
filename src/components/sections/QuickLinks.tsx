import { ArrowUpRight, BookOpen, HeartHandshake, UsersRound } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

const links = [
  {
    label: "Necesito orientación",
    description: "Orientación para empezar, resolver dudas y encontrar apoyo.",
    href: "#hemofilia",
    icon: HeartHandshake,
    tone: "red",
    featured: true,
  },
  {
    label: "Soy familiar",
    description: "Recursos para acompañar con información y confianza.",
    href: "#nosotros",
    icon: UsersRound,
    tone: "blue",
    featured: false,
  },
  {
    label: "Quiero aprender",
    description: "Una mirada clara a la hemofilia y la vida cotidiana.",
    href: "#hemofilia",
    icon: BookOpen,
    tone: "neutral",
    featured: false,
  },
] as const;

export function QuickLinks() {
  return (
    <section id="recursos" className="quick-links-section" aria-labelledby="quick-links-title">
      <Container>
        <div className="section-heading">
          <h2 id="quick-links-title" className="section-title">
            Encuentra lo que necesitas hoy.
          </h2>
          <p className="section-intro">
            ASOHER reúne orientación, comunidad y recursos para que no tengas que buscar respuestas a solas.
          </p>
        </div>

        <div className="quick-links-grid">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`quick-link-card quick-link-card--${link.tone} ${link.featured ? "quick-link-card--featured" : ""}`}
              >
                <span className="quick-link-card__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.7} />
                </span>
                <span className="quick-link-card__content">
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                </span>
                <ArrowUpRight className="quick-link-card__arrow" size={20} strokeWidth={1.7} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
