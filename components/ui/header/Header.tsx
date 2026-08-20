"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarClock, Home, Menu, MessageCircle, Users, Wallet, X, Zap } from "lucide-react";
import { Button } from ".././buttons/button";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Horarios", href: "#horarios", icon: CalendarClock },
  { label: "Planes", href: "#planes", icon: Wallet },
  { label: "Nosotros", href: "#nosotros", icon: Users },
  { label: "Contacto", href: "#contacto", icon: MessageCircle },
] as const;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-neutral-700 bg-neutral-800/85 backdrop-blur-md"
          : "border-transparent bg-neutral-800"
      )}
    >
      <div className="flex h-14 w-full items-center justify-between px-3">
        {/* Marca */}
        <Link
          href="#inicio"
          className="flex shrink-0 cursor-pointer items-center"
          aria-label="Stars Gym — volver al inicio"
        >
          <h1 className="text-md font-bold uppercase text-white flex items-center gap-1">
            <p className="text-primary">Stars</p>
            <p className="">Gym</p>
          </h1>
        </Link>

        {/* Navegación desktop */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative flex cursor-pointer items-center gap-1 py-2 text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800"
                >
                  <link.icon
                    aria-hidden="true"
                    className="size-4 text-neutral-500 transition-colors duration-200 group-hover:text-primary"
                  />
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA desktop */}
          <Button className={"text-xs uppercase font-bold cursor-pointer rounded-full"}>
            comenzá hoy
            <Zap data-icon="inline-end" aria-hidden="true" className="size-4" />
          </Button>

          {/* Toggle menú móvil */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 lg:hidden"
          >
            {isOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-safe:transition-[grid-template-rows] lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 border-t border-neutral-700/60 bg-neutral-800">
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-neutral-700/60 last:border-0">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex cursor-pointer items-center gap-2 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800"
                  >
                    <link.icon
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
