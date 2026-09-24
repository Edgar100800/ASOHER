"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import asoherMark from "@/assets/brand/asoher-mark.svg";
import { navigation } from "@/data/navigation";

import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link
          href="#inicio"
          className="brand-lockup"
          aria-label="ASOHER, volver al inicio"
          onClick={() => setMenuOpen(false)}
        >
          <Image src={asoherMark} alt="" className="brand-lockup__mark" unoptimized />
          <span className="brand-lockup__text">
            <span className="brand-lockup__name">ASOHER</span>
            <span className="brand-lockup__full">Asociación de Hemofilia del Hospital Rebagliati</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contacto" className="header-cta">
          Escríbenos
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__icon" data-visible={!menuOpen}>
            <Menu size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="menu-toggle__icon" data-visible={menuOpen}>
            <X size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Navegación móvil"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
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
                Escríbenos
              </Link>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
