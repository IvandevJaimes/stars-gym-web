import { Mail, MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "../icons/InstagramIcon";
import { Button } from "../buttons/button";
import Link from "next/link";
import AnimateOnScroll from "../animate/AnimateOnScroll";
import { CONTACT } from "@/lib/contact";

const CONTACTS = [
  {
    icon: MessageCircle,
    label: CONTACT.whatsapp.label,
    value: "Escribinos",
    href: CONTACT.whatsapp.url,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: CONTACT.instagram.label,
    value: CONTACT.instagram.handle,
    href: CONTACT.instagram.url,
    external: true,
  },
  {
    icon: Mail,
    label: CONTACT.email.label,
    value: CONTACT.email.address,
    href: CONTACT.email.mailto,
    external: false,
  },
  {
    icon: MapPin,
    label: CONTACT.address.label,
    value: CONTACT.address.short,
    href: CONTACT.address.mapsUrl,
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
          <AnimateOnScroll variant="fade-up">
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-primary lg:text-6xl">
              Contacto
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              ¿Tenés una duda o querés sumarte? Escribinos y te respondemos a la
              brevedad.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={150}>
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
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={250}>
            <Button
              render={<Link href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="mt-12 cursor-pointer rounded-full text-xs font-bold uppercase tracking-wide"
            >
              escribinos por WhatsApp
              <MessageCircle data-icon="inline-end" aria-hidden="true" className="size-4" />
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
