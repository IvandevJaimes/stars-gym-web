import Link from "next/link";
import { Check, Dumbbell, Zap } from "lucide-react";
import { Button } from "../buttons/button";
import { cn } from "@/lib/utils";
import AnimateOnScroll from "../animate/AnimateOnScroll";

const PLANS = [
  {
    name: "Clase suelta",
    price: "3.000",
    period: "clase",
    icon: Dumbbell,
    description: "Probá el gym sin compromiso.",
    features: [
      "Una sesión en sala de musculación",
      "Sin permanencia ni carné",
      "Ideal para arrancar",
    ],
    cta: "probá una clase",
    highlighted: false,
  },
  {
    name: "Mensual",
    price: "25.000",
    period: "mes",
    icon: Zap,
    description: "Tu lugar fijo para entrenar todos los días.",
    features: [
      "Acceso ilimitado a la sala",
      "Todos los horarios: lun a sáb",
      "El precio más bajo por sesión",
    ],
    cta: "comenzá hoy",
    highlighted: true,
  },
] as const;

export default function Planes() {
  return (
    <section
      id="planes"
      className="relative flex flex-col overflow-hidden bg-black py-10"
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
              Planes
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Simple y sin vueltas: elegí el plan que va con tu objetivo y
              empezá hoy mismo.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={150}>
            <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative flex flex-col items-center rounded-2xl border px-6 py-8 text-center transition-colors duration-300",
                    plan.highlighted
                      ? "border-secondary/50 bg-secondary/[0.04] hover:border-secondary/70"
                      : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
                  )}
                >
                  {/* Badge */}
                  {plan.highlighted && (
                    <span className="absolute -top-3 rounded-full bg-secondary px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
                      el más elegido
                    </span>
                  )}

                  <plan.icon
                    aria-hidden="true"
                    className={cn(
                      "size-6",
                      plan.highlighted ? "text-secondary" : "text-primary"
                    )}
                  />

                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl font-bold text-neutral-400"
                    >
                      $
                    </span>
                    <span className="whitespace-nowrap font-display text-6xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-neutral-500">/ {plan.period}</span>
                  </div>

                  <p className="mt-3 text-sm text-neutral-500">{plan.description}</p>

                  <ul className={cn(
                    "mt-8 flex w-full flex-col gap-3 border-t pt-6 text-left",
                    plan.highlighted ? "border-secondary/30" : "border-neutral-800"
                  )}>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-neutral-300"
                      >
                        <Check
                          aria-hidden="true"
                          className={cn(
                            "size-4 shrink-0",
                            plan.highlighted ? "text-secondary" : "text-primary"
                          )}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
