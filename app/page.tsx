import Hero from "@/components/ui/hero/Hero";
import Nosotros from "@/components/ui/nosotros/Nosotros";
import Horarios from "@/components/ui/horarios/Horarios";
import Planes from "@/components/ui/planes/Planes";
import Contacto from "@/components/ui/contacto/Contacto";
import FraseFinal from "@/components/ui/frase-final/FraseFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Horarios />
      <Planes />
      <Nosotros />
      <Contacto />
      <FraseFinal />
    </>
  );
}
