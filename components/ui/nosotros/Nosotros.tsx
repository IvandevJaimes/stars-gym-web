import { Dumbbell, Heart, MapPin, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/contact";
import Galeria from "./Galeria";
import AnimateOnScroll from "../animate/AnimateOnScroll";

const HIGHLIGHTS = [
  {
    icon: Dumbbell,
    title: "Equipamiento de primer nivel",
    text: "Máquinas de última generación para que cada sesión sea efectiva y segura.",
    accent: false,
  },
  {
    icon: Heart,
    title: "Comunidad que te banca",
    text: "Un espacio donde todos se conocen, se motivan y celebran cada logro juntos.",
    accent: false,
  },
  {
    icon: Trophy,
    title: "Resultados reales",
    text: "No prometemos magia: te acompañamos paso a paso para que llegues a donde querés.",
    accent: true,
  },
] as const;

export default function Nosotros() {
  return (
    <section
      id="nosotros"
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
              Nosotros
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Stars Gym nació con una idea simple: crear un espacio donde la
              constancia sea el hábito y los resultados hablen por sí solos.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" className="w-full" delay={150}>
            <dl className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/40 px-6 py-8 text-center transition-colors duration-300 hover:border-primary/40"
                >
                  <item.icon
                    aria-hidden="true"
                    className={cn(
                      "size-6",
                      item.accent ? "text-secondary" : "text-primary"
                    )}
                  />
                  <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {item.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" className="w-full" delay={200}>
            <div className="mt-16 w-full">
              <Galeria />
            </div>
          </AnimateOnScroll>

          {/* Mapa */}
          <AnimateOnScroll variant="fade-up" className="w-full" delay={250}>
            <div className="mt-16 w-full">
              <div className="flex items-center justify-center gap-2">
                <MapPin aria-hidden="true" className="size-5 text-primary" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                  Encontranos
                </h3>
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                {CONTACT.address.full}
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40">
                <iframe
                  src={CONTACT.address.mapsEmbed}
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-[300px] w-full sm:h-[400px] lg:h-[450px]"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
