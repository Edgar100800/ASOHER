"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  className?: string;
};

// El HTML estático ya trae la cifra final; el conteo solo corre al entrar en pantalla.
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const count = useMotionValue(value);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView || reduce) return;
    count.set(0);
    const controls = animate(count, value, { duration: 1.1, ease: [0.23, 1, 0.32, 1] });
    return () => controls.stop();
  }, [inView, reduce, count, value]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
