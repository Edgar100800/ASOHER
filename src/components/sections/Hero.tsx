import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">
            Vivir con hemofilia no significa vivir con <span>límites.</span>
          </h1>
          <p className="hero-description">
            Somos una comunidad que acompaña, orienta y conecta a personas con hemofilia y a sus familias en cada momento.
          </p>
          <div className="hero-actions">
            <Button href="#nosotros">Soy paciente</Button>
            <Button href="#nosotros" variant="secondary">
              Conoce ASOHER
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Espacio reservado para la fotografía principal">
          <div className="hero-visual__meta">
            <span>Primera mirada</span>
            <span>Fase 1 / mockup</span>
          </div>
          <div className="hero-visual__frame">
            <ImagePlaceholder label="Foto hero" ratio="16:10" variant="human" />
            <span className="hero-visual__stamp">Comunidad<br />que acompaña</span>
          </div>
          <p className="hero-visual__caption">El espacio para una imagen humana, cercana y cotidiana.</p>
        </div>
      </Container>
    </section>
  );
}
