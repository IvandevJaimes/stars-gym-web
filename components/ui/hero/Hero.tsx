import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";
import { Button } from "../buttons/button";
import AnimateOnScroll from "../animate/AnimateOnScroll";

const STATS = [
  { value: "6", label: "días a la semana" },
  { value: "100%", label: "acompañamiento" },
  { value: "100%", label: "resultados" },
] as const;

export default function Hero() {
  return (
    <section id="inicio" className="relative flex flex-1 flex-col overflow-hidden bg-black">
      {/* Glows de fondo */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto mt-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <AnimateOnScroll variant="fade-in">
            <Image
              src="/starsLogo.png"
              alt="Stars Gym logo"
              width={120}
              height={120}
              priority
              className=""
            />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
              <span className="text-primary">No es magia, es</span>
              {" "}
              <span className="text-orange-500">constancia.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Sin atajos ni fórmulas mágicas: entrenamientos guiados, planes
              flexibles y una comunidad que te empuja a dar un paso más cada día.
              Los resultados se construyen, no se improvisan.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up"  delay={300}>
            <div className="mt-10 flex items-center gap-3 flex-row">
              <Button
                render={<Link href="#planes" />}
                nativeButton={false}
                size="lg"
                className="cursor-pointer rounded-full text-xs font-bold uppercase tracking-wide"
              >
                comenzá hoy
                <Zap data-icon="inline-end" aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" className="w-full flex justify-center" delay={400}>
            <dl className="mt-14 flex w-full max-w-2xl items-start justify-center divide-x divide-neutral-800 border-t border-secondary/20 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center px-6 sm:px-10">
                  <dt className="font-display text-4xl font-bold text-white sm:text-5xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-neutral-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
