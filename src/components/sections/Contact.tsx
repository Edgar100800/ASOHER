import { ArrowDown, Mail, Siren } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { contactEmail } from "@/data/navigation";

export function Contact() {
  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <Container className="contact-grid">
        <div>
          <h2 id="contact-title" className="section-title">
            Escríbenos. Te responde alguien de la comunidad.
          </h2>
          <p className="section-body">
            Cuéntanos qué estás viviendo o qué te gustaría saber. Si no tenemos la respuesta, te decimos a quién preguntar.
          </p>
          <a className="contact-email" href={`mailto:${contactEmail}`}>
            <Mail size={22} strokeWidth={1.8} aria-hidden="true" />
            {contactEmail}
          </a>
        </div>

        <aside className="emergency-note" aria-labelledby="emergency-title">
          <Siren size={24} strokeWidth={1.8} aria-hidden="true" />
          <h3 id="emergency-title">¿Es una emergencia?</h3>
          <p>
            Si tienes un sangrado o un golpe que te preocupa, acude de inmediato a emergencias de tu hospital. No esperes nuestra respuesta.
          </p>
          <div className="emergency-note__actions">
            <a className="button button--primary" href="tel:106">
              Llamar al 106
            </a>
            <Link className="text-link" href="#emergencias">
              Ver números y hospitales
              <ArrowDown size={18} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </Container>
    </section>
  );
}
