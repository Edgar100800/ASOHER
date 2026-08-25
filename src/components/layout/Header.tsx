"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/navigation";

import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link
          href="#inicio"
          className="brand-lockup"
          aria-label="ASOHER, volver al inicio"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-lockup__mark" aria-hidden="true">
            AH
          </span>
          <span className="brand-lockup__name">ASOHER</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contacto" className="header-cta">
          Contáctanos
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </Container>

      {menuOpen ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil">
          <Container className="mobile-nav__inner">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contacto" className="button button--primary mobile-nav__cta" onClick={() => setMenuOpen(false)}>
              Contáctanos
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
