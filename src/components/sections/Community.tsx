import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { commitments } from "@/data/content";
import { photos } from "@/data/photos";

export function Community() {
  const photo = photos.charlaAuditorio;

  return (
    <section id="nosotros" className="community-section" aria-labelledby="community-title">
      <Container className="community-grid">
        <Reveal className="community-visual">
          <figure>
            <Image
              src={photo.src}
              alt={photo.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="community-visual__image"
            />
            <figcaption className="photo-caption">Diego Gavidia, presidente de ASOHER, en una charla abierta a pacientes y familias.</figcaption>
          </figure>
        </Reveal>

        <div className="community-copy">
          <h2 id="community-title" className="section-title">
            Una comunidad que conoce la hemofilia de cerca.
          </h2>
          <p className="section-body">
            ASOHER reúne a personas que viven con hemofilia, a sus familias y a quienes las cuidan en el Hospital Rebagliati. Casi todos llegamos con las mismas preguntas y aquí las respondemos juntos, sin reemplazar al equipo médico.
          </p>
          <ul className="commitment-grid">
            {commitments.map((item, index) => (
              <Reveal key={item.title} as="li" delay={index * 0.05}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
