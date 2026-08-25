import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const topics = [
  { title: "Qué es", text: "Una explicación sencilla para comenzar." },
  { title: "Cómo se vive", text: "Lo cotidiano también merece orientación." },
  { title: "Dónde preguntar", text: "No tienes que resolverlo todo a solas." },
];

export function HemophiliaIntro() {
  return (
    <section id="hemofilia" className="hemophilia-section" aria-labelledby="hemophilia-title">
      <Container className="hemophilia-grid">
        <div className="hemophilia-copy">
          <h2 id="hemophilia-title" className="section-title">
            Entender también es una forma de cuidarse.
          </h2>
          <p className="section-body">
            La hemofilia puede traer preguntas en distintas etapas. Compartimos una primera guía para acercarte a la información con calma y encontrar el acompañamiento adecuado.
          </p>
          <Link href="#recursos" className="text-link">
            Explorar recursos
            <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="hemophilia-topics">
          {topics.map((topic) => (
            <article key={topic.title} className="topic-row">
              <div>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
              <ArrowUpRight className="topic-row__arrow" size={19} strokeWidth={1.7} aria-hidden="true" />
            </article>
          ))}
          <div className="hemophilia-topics__image" aria-label="Espacio reservado para una imagen educativa">
            <ImagePlaceholder label="Imagen educativa" ratio="16:9" variant="education" />
          </div>
        </div>
      </Container>
    </section>
  );
}
