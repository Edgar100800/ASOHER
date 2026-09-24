import Image from "next/image";
import type { CSSProperties } from "react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { photos } from "@/data/photos";

export function Hero() {
  const photo = photos.charlaFarmacia;

  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title enter" style={{ "--i": 0 } as CSSProperties}>
            Nadie debería enfrentar la hemofilia <span>solo.</span>
          </h1>
          <p className="hero-description enter" style={{ "--i": 1 } as CSSProperties}>
            Personas con hemofilia, familias y cuidadores del Hospital Rebagliati. Compartimos lo que sabemos y pedimos atención a tiempo.
          </p>
          <div className="hero-actions enter" style={{ "--i": 2 } as CSSProperties}>
            <Button href="#contacto">Necesito orientación</Button>
            <Button href="#nosotros" variant="secondary">
              Conoce ASOHER
            </Button>
          </div>
        </div>

        <figure className="hero-visual">
          <div className="hero-visual__frame">
            <Image
              src={photo.src}
              alt={photo.alt}
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="hero-visual__image"
            />
          </div>
          <figcaption className="photo-caption">
            Charla «Conociendo la Hemofilia» con el equipo de Farmacia Hospitalaria.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
