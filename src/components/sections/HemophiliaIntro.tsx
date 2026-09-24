import { Plus } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { hemophiliaTopics } from "@/data/content";

export function HemophiliaIntro() {
  return (
    <section id="hemofilia" className="hemophilia-section" aria-labelledby="hemophilia-title">
      <Container className="hemophilia-grid">
        <div className="hemophilia-copy">
          <h2 id="hemophilia-title" className="section-title">
            La hemofilia, en pocas palabras.
          </h2>
          <p className="section-body">
            Es una condición con la que se nace. La sangre tarda más en coagular, así que un sangrado demora más en detenerse. No quiere decir que se sangre más rápido.
          </p>
          <p className="medical-note">
            Esta es una introducción y la estamos revisando con profesionales de salud. No reemplaza una consulta médica.
          </p>
        </div>

        <div className="topic-list">
          {hemophiliaTopics.map((topic) => (
            <details key={topic.title} className="topic">
              <summary>
                <span>{topic.title}</span>
                <Plus className="topic__icon" size={20} strokeWidth={1.8} aria-hidden="true" />
              </summary>
              <p>{topic.text}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
