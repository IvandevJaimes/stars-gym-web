import Hero from "@/components/ui/hero/Hero";
import Nosotros from "@/components/ui/nosotros/Nosotros";
import Horarios from "@/components/ui/horarios/Horarios";
import Planes from "@/components/ui/planes/Planes";
import Contacto from "@/components/ui/contacto/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Horarios />
      <Planes />
      <Nosotros />
      <Contacto />

      {/* Frase final */}
      <section className="relative flex flex-col items-center justify-center bg-black py-20 px-4 text-center">
        <p className="flex flex-col items center  ">
          <div className="flex flex-col items-start font-bold text-3xl tracking-tightsm:text-4xl lg:text-5xl">
            <span className="font-script text-primary text-5xl tracking-tightsm:text-6xl lg:text-7xl ">
              Tú
            </span>
            <span className="font-script text-primary  ">transformación</span>
          </div>
          <div className=" text-center justify-center text-3xl tracking-tightsm:text-4xl lg:text-5xl">
            <span className="font-script text-primary  ">comienza</span>
          </div>
          <span className="font-sans uppercase text-secondary text-3xl tracking-tightsm:text-4xl lg:text-5xl font-bold ">
            aquí...
          </span>
        </p>
      </section>
    </>
  );
}
