import Image from "next/image";
import Link from "next/link";

import asoherMark from "@/assets/brand/asoher-mark.svg";
import { contactEmail, navigation } from "@/data/navigation";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <Image src={asoherMark} alt="" className="site-footer__mark" unoptimized />
          <p>
            <strong>ASOHER</strong>
            <span>Asociación de Hemofilia del Hospital Rebagliati</span>
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegación del pie de página">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </nav>

        <p className="site-footer__legal">
          ASOHER acompaña y orienta, pero no reemplaza la atención médica. Las decisiones sobre tu tratamiento las tomas con tu equipo de salud.
        </p>
      </Container>
    </footer>
  );
}
