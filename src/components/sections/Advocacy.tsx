import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollLine } from "@/components/motion/ScrollLine";
import { advocacyMilestones } from "@/data/content";
import { photos } from "@/data/photos";

export function Advocacy() {
  return (
    <section id="voz" className="advocacy-section" aria-labelledby="advocacy-title">
      <Container>
        <div className="advocacy-heading">
          <h2 id="advocacy-title" className="section-title">
            Llevamos la voz de los pacientes a donde se decide.
          </h2>
          <p className="section-body">
            Una atención humana también depende de que haya medicamentos, presupuesto y reglas claras. Por eso nos sentamos con el Ministerio de Salud, la DIGEMID y el Congreso.
          </p>
        </div>

        <ScrollLine className="timeline">
          {advocacyMilestones.map((milestone) => {
            const photo = photos[milestone.photo];

            return (
              <li key={milestone.title} className="timeline__item">
                <Reveal className="timeline__card">
                  <p className="timeline__date">
                    <span>{milestone.date}</span>
                    <span>{milestone.place}</span>
                  </p>
                  <div className="timeline__body">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.text}</p>
                  </div>
                  <div className="timeline__photo">
                    <Image src={photo.src} alt={photo.alt} placeholder="blur" sizes="(min-width: 1024px) 30vw, 100vw" />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ScrollLine>

        <Reveal>
          <blockquote className="pull-quote">
            <p>Unidos por políticas públicas más justas y tratamientos dignos. Porque en esta lucha, nadie debería caminar solo.</p>
            <footer>Los Pacientes Importan, colectivo del que ASOHER es parte</footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
