import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { surveyStats } from "@/data/content";

export function Reality() {
  return (
    <section id="realidad" className="reality-section" aria-labelledby="reality-title">
      <Container>
        <div className="reality-heading">
          <h2 id="reality-title" className="section-title section-title--inverse">
            Lo que cuentan las personas con hemofilia en el Perú.
          </h2>
          <p className="reality-intro">
            Ocho organizaciones de pacientes preguntaron a personas con hemofilia de todo el país cómo fue crecer con la condición. Estas respuestas duelen, y son la razón de nuestro trabajo.
          </p>
        </div>

        <ul className="stat-grid">
          {surveyStats.map((stat, index) => (
            <Reveal key={stat.value} as="li" className="stat" delay={index * 0.08}>
              <p className="stat__value">
                {stat.prefix ? <span className="stat__prefix">{stat.prefix}</span> : null}
                <CountUp value={stat.value} />
                <span className="stat__unit">%</span>
              </p>
              <p className="stat__text">{stat.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="diagnosis-gap">
          <div className="diagnosis-gap__numbers">
            <p>
              <strong>3.300</strong>
              <span>personas podrían vivir con hemofilia en el Perú, si se cumple la estimación de 1 por cada 10.000 habitantes.</span>
            </p>
            <p>
              <strong>1.100</strong>
              <span>tenían un diagnóstico cuando se hizo la entrevista.</span>
            </p>
          </div>
          <p className="diagnosis-gap__conclusion">
            La diferencia sugiere que muchas personas todavía no saben que tienen hemofilia. Sin diagnóstico no hay tratamiento, y los sangrados siguen dañando sus articulaciones.
          </p>
        </Reveal>

        <p className="source-note">
          Fuente: encuesta nacional «Infancias que no se detengan», impulsada por ocho organizaciones de pacientes y citada por Diego Gavidia en entrevista con Chema Salcedo (PBO). Las cifras están pendientes de validación con el informe original.{" "}
          <Link href="#voces" className="source-note__link">
            Ver la entrevista
            <ArrowDown size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </p>
      </Container>
    </section>
  );
}
