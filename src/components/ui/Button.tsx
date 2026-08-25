import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link href={href} className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}
