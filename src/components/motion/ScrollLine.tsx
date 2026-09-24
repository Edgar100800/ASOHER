"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import { useRef, type PropsWithChildren } from "react";

type ScrollLineProps = PropsWithChildren<{
  className?: string;
}>;

// Línea de la línea de tiempo que se dibuja mientras se lee la sección.
export function ScrollLine({ children, className }: ScrollLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <div ref={ref} className={className}>
      <motion.span
        className="timeline__progress"
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
      />
      <ol className="timeline__list">{children}</ol>
    </div>
  );
}
