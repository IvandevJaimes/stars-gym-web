import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "../buttons/button";
import Link from "next/link";

const CONTACTS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escribinos",
    href: "https://wa.me/5493814567890",
    external: true,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "381 456-7890",
    href: "tel:+5493814567890",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@starsgym.com",
    href: "mailto:info@starsgym.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Alfredo Guzmán 380, Alderetes",
    href: "https://maps.google.com/?q=Av.+Alfredo+Guzm%C3%A1n+380,+Alderetes,+Tucum%C3%A1n",
    external: true,
  },
] as const;

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative flex flex-col overflow-hidden bg-black py-24 scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Glow de fondo */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-primary lg:text-6xl">
            Contacto
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            ¿Tenés una duda o querés sumarte? Escribinos y te respondemos a la
            brevedad.
          </p>

          <dl className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACTS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/40 px-6 py-8 text-center transition-colors duration-300 hover:border-primary/40"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-white">
                  {item.value}
                </dd>
              </Link>
            ))}
          </dl>

          <Button
            render={<Link href="https://wa.me/5493814567890" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-12 cursor-pointer rounded-full text-xs font-bold uppercase tracking-wide"
          >
            escribinos por WhatsApp
            <MessageCircle data-icon="inline-end" aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
