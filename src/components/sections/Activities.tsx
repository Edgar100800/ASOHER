import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { activities } from "@/data/content";
import { photos } from "@/data/photos";

export function Activities() {
  return (
    <section id="actividades" className="activities-section" aria-labelledby="activities-title">
      <Container>
        <h2 id="activities-title" className="section-title">
          Donde nos has visto.
        </h2>

        <ul className="activity-grid">
          {activities.map((activity, index) => {
            const photo = photos[activity.photo];

            return (
              <Reveal key={activity.photo} as="li" className="activity" delay={(index % 3) * 0.06}>
                <figure>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <figcaption className="photo-caption">{activity.caption}</figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
