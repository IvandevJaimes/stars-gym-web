import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Horarios", href: "#horarios" },
  { label: "Planes", href: "#planes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-900/50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Marca */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link href="#inicio" className="group" aria-label="Stars Gym — volver al inicio">
              <Image
                src="/starsLogo.png"
                alt="Stars Gym"
                width={80}
                height={80}
                className="h-auto"
              />
            </Link>
            <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-neutral-500">
              Constancia, esfuerzo y comunidad. Tu lugar para entrenar en
              Alderetes.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Navegación del sitio" className="flex flex-col items-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Navegación
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-neutral-500">
              <li>Av. Alfredo Guzmán 380</li>
              <li>Alderetes, Tucumán</li>
              <li>
                <a
                  href="tel:+5493814567890"
                  className="transition-colors duration-200 hover:text-primary"
                >
                  381 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@starsgym.com"
                  className="transition-colors duration-200 hover:text-primary"
                >
                  info@starsgym.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Stars Gym"
                className="flex size-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-500 transition-all duration-200 hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/5493814567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Stars Gym"
                className="flex size-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-500 transition-all duration-200 hover:border-[#25d366] hover:text-[#25d366]"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center gap-1 border-t border-neutral-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-neutral-600">
            &copy; {year} Stars Gym. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-600">
            Alderetes, Tucumán, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
