import { CalendarDays, Moon, Sun } from "lucide-react";
import AnimateOnScroll from "../animate/AnimateOnScroll";

const OPEN_DAYS = [
  { days: "Lunes a viernes", from: "08:00", to: "22:30", icon: CalendarDays },
  { days: "Sábados", from: "08:00", to: "14:00", icon: Sun },
] as const;

export default function Horarios() {
  return (
    <section
      id="horarios"
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
              Horarios
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Te esperamos 6 días a la semana. Elegí el turno que mejor se
              adapte a tu rutina y hacé de la constancia tu hábito.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={150}>
            <dl className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {OPEN_DAYS.map((slot) => (
                <div
                  key={slot.days}
                  className="flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/40 px-6 py-8 text-center transition-colors duration-300 hover:border-primary/40"
                >
                  <slot.icon aria-hidden="true" className="size-6 text-primary" />
                  <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {slot.days}
                  </dt>
                  <dd className="mt-4 whitespace-nowrap font-display text-5xl font-bold tracking-tight text-white">
                    {slot.from}
                    <span aria-hidden="true" className="mx-2 text-secondary">
                      →
                    </span>
                    {slot.to}
                  </dd>
                </div>
              ))}

              <div className="flex flex-col items-center rounded-2xl border border-neutral-700/60 bg-neutral-900/20 px-6 py-8 text-center sm:col-span-2 lg:col-span-1">
                <Moon aria-hidden="true" className="size-6 text-secondary/60" />
                <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Domingos
                </dt>
                <dd className="mt-4 font-display text-5xl font-bold tracking-tight text-neutral-700">
                  Cerrado
                </dd>
              </div>
            </dl>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
