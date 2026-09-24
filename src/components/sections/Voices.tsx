import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { videos } from "@/data/content";
import { videoThumbnails } from "@/data/videoThumbnails";

export function Voices() {
  const [featured, ...rest] = videos;

  return (
    <section id="voces" className="voices-section" aria-labelledby="voices-title">
      <Container>
        <div className="voices-heading">
          <h2 id="voices-title" className="section-title">
            Escúchalo de quienes lo viven.
          </h2>
          <p className="section-body">
            Diego Gavidia, presidente de ASOHER, lleva a la radio y la televisión lo que vive la comunidad. En nuestro podcast Hablemos de Hemofilia conversamos con otros pacientes sobre tratamiento, mitos y vida diaria.
          </p>
          <p className="voices-note">Son testimonios personales. Cada tratamiento es distinto y lo define tu equipo de salud.</p>
        </div>

        <Reveal className="voices-featured">
          <VideoEmbed {...featured} thumbnail={videoThumbnails[featured.thumbnail]} featured />
        </Reveal>

        <ul className="voices-list">
          {rest.map((video, index) => (
            <Reveal key={video.id} as="li" delay={index * 0.06}>
              <VideoEmbed {...video} thumbnail={videoThumbnails[video.thumbnail]} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
