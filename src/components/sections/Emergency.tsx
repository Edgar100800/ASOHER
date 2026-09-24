import { MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { centerGroups, directionsUrl, emergencyLines, reviewedOn } from "@/data/emergency";

export function Emergency() {
  return (
    <section id="emergencias" className="emergency-section" aria-labelledby="emergency-section-title">
      <Container>
        <h2 id="emergency-section-title" className="section-title">
          Números y hospitales para una emergencia.
        </h2>
        <p className="section-body">
          Las líneas del Estado son gratuitas desde cualquier celular o teléfono fijo, aunque no tengas saldo. Si no puedes trasladarte, llama al 106 o, si tienes EsSalud, al 117.
        </p>

        <ul className="hotline-grid" aria-label="Líneas de emergencia del Estado">
          {emergencyLines.map((line) => (
            <li key={line.number}>
              <a className="hotline" href={`tel:${line.number}`}>
                <span className="hotline__number">{line.number}</span>
                <span className="hotline__text">
                  <strong>{line.name}</strong>
                  <span>{line.detail}</span>
                </span>
                <span className="hotline__call">
                  <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                  <span className="hotline__call-label">Llamar</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="emergency-tip">
          Al llegar, di que tienes hemofilia y muestra tu informe médico o tu carné de paciente, si lo tienes.
        </p>

        {centerGroups.map((group) => (
          <div key={group.title} className="center-group">
            <div className="center-group__heading">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <ul className="center-grid">
              {group.centers.map((center, index) => (
                <Reveal key={center.name} as="li" className="center" delay={index * 0.06}>
                  <figure className="center__media">
                    {center.photo ? (
                      <>
                        <Image
                          src={center.photo.src}
                          alt={center.photo.alt}
                          placeholder="blur"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        <figcaption>
                          <a href={center.photo.sourceUrl} target="_blank" rel="noreferrer">
                            Foto: {center.photo.credit}, {center.photo.license}
                          </a>
                        </figcaption>
                      </>
                    ) : (
                      <div className="center__no-photo">
                        <MapPin size={30} strokeWidth={1.6} aria-hidden="true" />
                        <span>{center.district}</span>
                      </div>
                    )}
                  </figure>

                  <div className="center__body">
                    <h4>{center.name}</h4>
                    <p className="center__note">{center.note}</p>
                    <p className="center__address">
                      <MapPin size={17} strokeWidth={1.8} aria-hidden="true" />
                      <span>
                        {center.address}
                        <br />
                        {center.district}
                      </span>
                    </p>
                    <div className="center__actions">
                      <a className="button button--primary center__button" href={`tel:${center.phone}`}>
                        <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                        <span>Llamar {center.phoneLabel}</span>
                      </a>
                      <a
                        className="button button--secondary center__button"
                        href={directionsUrl(center.mapsQuery)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Cómo llegar a ${center.shortName} en Google Maps`}
                      >
                        <Navigation size={18} strokeWidth={1.8} aria-hidden="true" />
                        <span>Cómo llegar</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}

        <p className="source-note source-note--light">
          Números y direcciones tomados de gob.pe y EsSalud, revisados el {reviewedOn}. Los tres hospitales de EsSalud comparten la central telefónica que publica gob.pe. Antes de ir, llama para confirmar horarios y la atención de hemofilia.
        </p>
      </Container>
    </section>
  );
}
