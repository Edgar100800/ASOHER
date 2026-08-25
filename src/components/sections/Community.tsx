import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const commitments = [
  "Escuchamos antes de orientar.",
  "Compartimos información clara y responsable.",
  "Celebramos cada avance, grande o pequeño.",
];

export function Community() {
  return (
    <section id="nosotros" className="community-section" aria-labelledby="community-title">
      <Container className="community-grid">
        <div className="community-visual" aria-label="Espacio reservado para una fotografía de la comunidad">
          <div className="community-visual__line" aria-hidden="true" />
          <ImagePlaceholder label="Foto de comunidad" ratio="4:3" variant="human" />
          <div className="community-visual__note">
            <span>Estamos cerca</span>
            <ArrowUpRight size={20} strokeWidth={1.7} aria-hidden="true" />
          </div>
        </div>

        <div className="community-copy">
          <h2 id="community-title" className="section-title">
            Cuando nos encontramos, el camino se siente distinto.
          </h2>
          <p className="section-body">
            ASOHER nace para acompañar a quienes viven con hemofilia y a las personas que caminan a su lado. Aquí puedes preguntar, compartir experiencias y sentirte parte de una red que entiende.
          </p>
          <ul className="commitment-list">
            {commitments.map((commitment) => (
              <li key={commitment}>
                <span className="commitment-list__icon" aria-hidden="true">
                  <Check size={15} strokeWidth={2.2} />
                </span>
                <span>{commitment}</span>
              </li>
            ))}
          </ul>
          <Button href="#recursos" variant="secondary">
            Ver cómo participar
          </Button>
        </div>
      </Container>
    </section>
  );
}
