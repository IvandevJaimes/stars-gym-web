"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right";

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("as-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("as-animate", `as-${variant}`, className)}
    >
      {children}
    </div>
  );
}
